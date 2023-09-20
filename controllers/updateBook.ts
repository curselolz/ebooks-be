
import { Books } from '../models/index.ts';

export const updateBook:any = async(context: any) => {
  try{
    const id :string = context.params.id;
    let body :any = await context.request.body()
    
    let data :{
      email?: string,
      country?: String,
      imageLink?: String,
      link?: String,
      language?: String,
      pages?: String,
      title?: String,
      year?: String
    } = {};
    const result = await Books.updateOne({_id: {"$id": id}}, {$set: data});    
    
    context.response.body = result;
    context.response.status = 200;
  }
  catch(e){
    context.response.body = null;
    context.response.status = 500
    console.log(e);
  }
}