import { Books } from '../models/index.ts';

export const getBooks = async (context: RouterContext) => {
  try {
    const books = await Books.find();
    const data = await books.toArray();
    if (data.length > 0) {
      context.response.body = data;
      context.response.status = 200;
    } else {
      context.response.status = 204; // No Content
    }
  } catch (e) {
    context.response.body = { error: "Internal server error" };
    context.response.status = 500; // Internal Server Error
    console.error(e);
  }
};

