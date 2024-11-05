"use server";

import { Post } from "@/datamodels/models";
import prisma from "@/lib/prisma";

export default async function updateBlog(obj: Post) {
  try {
    const authorId = await prisma.user.findUnique({
      where: {
        id: obj.author
      },
      select: {
        id: true
      }
    });
    const blog = await prisma.post.update({
      where: {
        id: obj.id
      },
      data: {
        title: obj.title,
        content: obj.description,
        image: obj.image ? obj.image : "",
        date: obj.date,
        authorId: authorId ? authorId.id : ""
      }
    });
    return {
      ok: true,
      message: "Blog actualizado correctamente",
      blog: blog
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error al actualizar el blog"
    };
  }
}