<script lang="ts">
  import { db } from '$lib/db';
  import { browser } from '$app/environment';
	import Nav from './nav/nav.svelte';
  
  let status = "";
  
  let contactName = "";
  let contactEmail = "";
  let contactMessage = "";
  
  async function addContact() {
      try {
          if (browser) {
              // Add the new contact
              const id = await db.contacts.add({
                  name: contactName,
                  email: contactEmail,
                  message: contactMessage
              });
  
              status = `Contact ${contactName} successfully added. Got id ${id}`;
              
              // Reset form:
              contactName = "";
              contactEmail  = "";
              contactMessage = "";
          }
      } catch (error) {
          status = `Failed to add ${contactName}: ${error}`;
      }
  }
  </script>
  
  <Nav />
  <section>
      <div>
          <p>{status}</p>
          <fieldset>
              <legend>Add new contact</legend>
              <label>
                  Name:
                  <input type="text" bind:value={contactName} />
              </label>
              <br/>
              <label>
                  Email:
                  <input type="email" bind:value={contactEmail} />
              </label>
              <br />
              <label>
                  Message:
                  <input type="text" bind:value={contactMessage} />
              </label>
              <br/>
              <button on:click|preventDefault={addContact}>Add Contact</button>
          </fieldset>
      </div>
  </section>
  
  <style>
      section {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
      }
  
      fieldset {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
      }
  
      label {
          display: block;
          margin-bottom: 10px;
      }
  
      input {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
      }
  
      button {
          padding: 10px 20px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
      }
  
      button:hover {
          background-color: #0056b3;
      }
  </style>
  