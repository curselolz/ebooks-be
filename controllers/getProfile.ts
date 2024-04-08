import { Profile } from '../models/index.ts';
import { type RouterContext } from "https://deno.land/x/oak@14.2.0/router.ts";

export const getProfile = async (context: RouterContext) => {
  try {
    const profiles = await Profile.find();
    const data = await profiles.toArray();
    if (data.length > 0) {
      context.response.body = data;
      context.response.status = 200;
    } else {
      context.response.status = 204; // No Content
    }
  } catch (e) {
    context.response.body = { error: "Internal server error" };
    context.response.status = 500;
    console.error(e);
  }
};

