import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const client = new MongoClient();
await client.connect("mongodb://127.0.0.1:27017");

const dbname :string = "BOOKS_COLLECTION"; 
const db = client.database(dbname);

const Books = db.collection("books");

export { db, Books };