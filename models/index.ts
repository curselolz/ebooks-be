import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const client = new MongoClient();
await client.connect("mongodb://127.0.0.1:27017");

const dbname :string = "BLOG"; 
const db = client.database(dbname);

const Users = db.collection("users");
const Posts = db.collection("posts");
const Profile = db.collection("profile");
const Comments = db.collection("comments");

export { db, Users, Posts, Profile, Comments };