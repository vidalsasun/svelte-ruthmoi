<script lang='ts'>    
    import { db } from '$lib/db';
    import { liveQuery } from 'dexie';
    import { browser } from '$app/environment';

    let contacts = liveQuery(
    () => browser ? db.contacts.toArray() : []
  );

</script>

<ul>
    {#if $contacts}
      {#each $contacts as contact (contact.id)}
        <li>{contact.name}, {contact.email}</li>
      {/each}
    {/if}
  </ul>
  