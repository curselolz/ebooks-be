import { Users } from '../models/index.ts';
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export const SignIn: any = async(context: any) => {
  try {
    const body = context.request.body();
    if (body.type === "form-data") {
    const value = body.value;

    const formData = await value.read();
    const email = formData.fields.email;
    const password = formData.fields.password;

    console.log("Received form data login:");
    console.log("Email:", email);
    console.log("Password:", password);

    const userFinded = await Users.findOne({
      email,
    });
    if(!userFinded) {
        context.response.body = 'Not found';
        context.response.status = 404;
    } else {
      const passwordMatch = await bcrypt.compare(password, userFinded.password);
    if(passwordMatch) {
        context.response.body = 'Login success';
        context.response.status = 200;
    }

    }
  }
  }
  catch(e) {
    context.response.body = null;
    context.response.status = 500
    console.log(e);
  }
}
