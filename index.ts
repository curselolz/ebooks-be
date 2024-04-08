import { Application } from "https://deno.land/x/oak@v12.6.1/application.ts";
import { Router } from "https://deno.land/x/oak@v12.6.1/router.ts";
import { registerUser } from './controllers/register.ts';
import { resetPassword } from './controllers/resetPassword.ts';
import { SignIn  } from './controllers/signIn.ts';
import { addComment } from './controllers/addComment.ts';
import { addPost } from './controllers/addPost.ts';
import { getPosts } from './controllers/getPosts.ts';
import { getProfile } from './controllers/getProfile.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const router = new Router();
const app = new Application();
const PORT = 3000;

router
.post("/register", registerUser)
.post("/reset-password", resetPassword)
.post("/login", SignIn)
.post("/post", addPost)
.get("/posts", getPosts)
.post("/posts/:postId/comments", addComment)
.get("/profile/:profileId", getProfile)

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({port: PORT});