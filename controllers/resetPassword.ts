import { Users } from '../models/index.ts';

export const resetPassword: any = async(context: any) => {
  try {
    const body = context.request.body();
    if (body.type === "form-data") {
      const value = body.value;
      const formData = await value.read();
      const email = formData.fields.email;
      const newPassword = formData.fields.newPassword;
      const userFinded = await Users.findOne({
        email,
      });
      if (!userFinded) {
        return false;
      }
      const { modifiedCount } = await Users.updateOne(
      { _id: userFinded._id },
      { $set: { password: newPassword } }
      );
        if (modifiedCount === 1) {
          console.log("Password reset successfully");
          return true;
        } else {
          console.error("Password reset failed");
          return false;
        }
      }
      context.response.body = "Password reset";
      context.response.status = 200;
  }
  catch(e) {
    context.response.body = null;
    context.response.status = 500
    console.log(e);
  }
}