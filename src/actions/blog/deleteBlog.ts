"use server";

import prisma from "@/lib/prisma";

export default async function deleteBlog(id: string) {
  try {
    const blog = await prisma.post.delete({
      where: {
        id: id
      }
    });
    return {
      ok: true,
      message: "Blog eliminado correctamente",
      blog: blog
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error al eliminar el blog"
    };
  }
}