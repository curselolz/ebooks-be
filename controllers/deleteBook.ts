import { Books } from '../models/index.ts';

export const deleteBook: any = async(context: any) => {
  try{
    let id :string = context.params.id;
    const result = await Books.deleteOne({ id });
    context.response.body = {result};
    context.response.status = 200;
  }
  catch(e) {
    context.response.body = null;
    context.response.status = 500
    console.log(e);
  }
}