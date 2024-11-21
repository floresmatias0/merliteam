import { Post } from "@/datamodels/models";
import prisma from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

// Función para subir imágenes a Cloudinary
const uploadImage = async (image: File) => {
  try {
    const buffer = await image.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    const result = await cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`);
    return result.secure_url;
  } catch (error) {
    console.log("Error uploading image:", error);
    return null;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  const formData = req.body as FormData;

  try {
    const obj = JSON.parse(formData.get("post") as string) as Post;
    const imageFile = formData.get("image") as File;

    const authorId = await prisma.user.findUnique({
      where: { id: obj.author },
      select: { id: true },
    });

    let imageUrl = "";
    if (imageFile) {
      const uploadedUrl = await uploadImage(imageFile);
      if (!uploadedUrl) throw new Error("Error uploading image to Cloudinary");
      imageUrl = uploadedUrl;
    }

    const blog = await prisma.post.create({
      data: {
        title: obj.title,
        content: obj.description,
        image: imageUrl,
        date: obj.date,
        authorId: authorId ? authorId.id : "",
        resumen: obj.resumen,
      },
    });

    return res.status(200).json({
      ok: true,
      message: "Blog registrado correctamente",
      blog,
    });
  } catch (error) {
    console.error("Error al crear el blog:", error);
    return res.status(500).json({
      ok: false,
      message: "Error al registrar el blog",
    });
  }
}
