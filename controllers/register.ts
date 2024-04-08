import { Users } from '../models/index.ts';
import { v1 } from "https://deno.land/std@0.91.0/uuid/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";


export const registerUser = async(context) => {
  try {
  const body = context.request.body();
  if (body.type === "form-data") {
    const value = body.value;

    const formData = await value.read();
    const firsName = formData.fields.firstName;
    const lastName = formData.fields.lastName;
    const email = formData.fields.email;
    const password = formData.fields.password;
    let uniqid = v1.generate();
    const hashedPassword = await bcrypt.hash(password);

    const user = await Users.insertOne({
      id: uniqid,
      email,
      lastName,
      firsName,
      password: hashedPassword,
    });    
    
    context.response.body = user;
    context.response.status = 200;
  }
  }
  catch(e) {
    context.response.body = "Invalid user data";
    context.response.status = 400; 
    console.log(e); 
  }
}


