import { v1 } from "https://deno.land/std@0.91.0/uuid/mod.ts";


import { Books } from '../models/index.ts';

export const addBook = async(context: any) => {
  try{
    let body: any = await context.request.body();
    let uniqid = v1.generate();
    const bodyData = await body.value;
    const { data } = bodyData;
    const {
      author,
      name,
      country,
      imageLink,
      link,
      language,
      pages,
      title,
      year,
    } = data;

    const book = await Books.insertOne({
      id: uniqid,
      author,
      name,
      country,
      imageLink,
      link,
      language,
      pages,
      title,
      year
    });    
    
    context.response.body = book;
    context.response.status = 201;  
  } 
  catch(e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
}


