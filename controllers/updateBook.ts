
import { Books } from '../models/index.ts';

export const updateBook:any = async(context: any) => {
  try{
    const id :string = context.params.id;
    let body :any = await context.request.body()
    
    let data :{email?: String, pno?: String} = {};
    if(body.value.email){       // if an updated email id is sent
      data["email"] = body.value.email;
    }
    if(body.value.pno){         // if an updated phone no is sent
      data["pno"] = body.value.pno;
    }
    
    const result = await Books.updateOne({_id: {"$oid": id}}, {$set: data});    
    
    context.response.body = result;
    context.response.status = 200;
  }
  catch(e){
    context.response.body = null;
    context.response.status = 500
    console.log(e);
  }
}