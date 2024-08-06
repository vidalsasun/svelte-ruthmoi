<script lang='ts'>
    
    import { browser } from '$app/environment';
    import { db } from '$lib/db';
    import { liveQuery } from 'dexie';

    let contacts = liveQuery(
    () => db.contacts.toArray()
  );
</script>

<ul>
    {#if $contacts}
      {#each $contacts as contact (contact.id)}
        <li>{contact.name}, {contact.email}</li>
      {/each}
    {/if}
  </ul>
  