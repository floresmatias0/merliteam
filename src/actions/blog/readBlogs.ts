"use server";

import prisma from "@/lib/prisma";

export default async function readBlogs() {
  try {
    const blogs = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        image: true,
        date: true,
        authorId: true,
      }
    })

    return {
      ok: true,
      message: "Blogs encontrados",
      blogs: blogs
    }
    }
    catch(error){
        return {
            ok:false,
            message:"Error al buscar los blogs"
        }
    }
}
