// import { indexedDB, IDBKeyRange } from 'fake-indexeddb';
import Dexie, { type EntityTable } from 'dexie';



interface Contact {
	id: number;
	name: string;
	email: string;
	message: string;	
}

const db = new Dexie('ContactsDatabase') as Dexie & {
	contacts: EntityTable<
	Contact,
	  'id' // primary key "id" (for the typings only)
	>;
  };



db.version(1).stores({
	contacts: '++id, name, email, message' // primary key "id" (for the runtime!)
  });



  
export type { Contact };
export { db };