
import { Posts } from '../models/index.ts';

export const addComment = async(context: any) => {
  try {
    const postId = context.params.postId;
    let body: any = await context.request.body();
    const bodyData = await body.value;
    const { data } = bodyData;
    const { commentText } = data;

    const comment = await Posts.insertOne({
      postId,
      commentText
    });    
    
    context.response.body = comment;
    context.response.status = 201;  
  } 
  catch(e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
}


