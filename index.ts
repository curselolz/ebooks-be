import { Application } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { Router } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { getBooks } from './controllers/getBooks.ts';
import { updateBook } from './controllers/updateBook.ts';
import { deleteBook } from './controllers/deleteBook.ts';
import { addBook } from './controllers/addBook.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const router = new Router();
const app = new Application();
const PORT = 3000;

router
.post("/book", addBook)
.get("/books", getBooks)
.patch("/book/:id", updateBook)
.delete("/book/:id", deleteBook)

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({port: PORT});