"use server";

import prisma from "@/lib/prisma";

export default async function getPostById(id:string){
    try {
        console.log(id)
        const post = await prisma.post.findUnique({
            where:{
                id:id
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