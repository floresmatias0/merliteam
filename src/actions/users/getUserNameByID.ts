"use server";

import prisma from "@/lib/prisma";


export default async function getUserNameById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    });
    return {
      ok: true,
      message: "Usuario encontrado",
      user: user
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error al buscar el usuario"
    };
  }
}