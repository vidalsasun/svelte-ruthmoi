<script lang="ts">
    import Nav from './nav/nav.svelte';
    import { db } from '$lib/db';
    
    let status = "";
    let contactName = "";
    let contactEmail = "";
    let contactMessage = "";
    
    async function addContact() {
      try {
        // Add the new friend!
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
      } catch (error) {
        status = `Failed to add ${contactName}: ${error}`;
      }
    }
  </script>
  
  <Nav />
  
  <section class="form-section">
    <div class="form-container">
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
          <input type="text" bind:value={contactEmail} />
        </label>
        <br />
        <label>
          Message:
          <input type="text" bind:value={contactMessage} />
        </label>
        <br/>
        <button on:click={addContact}>Add Contact</button>
      </fieldset>
    </div>
  </section>
  
  <style lang="scss">
    body {
      margin: 0;
      background-color: #f1dfdf;
    }
  
    .form-section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      padding-top: 60px; /* Space for the Nav */
    }
  
    .form-container {
      background: #f9f9f9;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
    }
  
    fieldset {
      border: none;
      padding: 0;
    }
  
    label {
      display: block;
      margin-bottom: 1rem;
    }
  
    input {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  