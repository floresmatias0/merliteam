"use server";

import prisma from "@/lib/prisma";

export default async function getPostByName(name:string){
    try {

 
        const post = await prisma.post.findFirst({
            where:{
                title:name
            }
        });

 
        return{
            ok:true,
            message:"Post encontrado",
            post:post
        }
    } catch (error) {
        return{
            ok:false,
            message:"Error al buscar el post"
        }
    }
}