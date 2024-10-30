// src/app/actions/updateImage/route.js
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export async function POST(request: NextRequest) {
  try {
    // Obtener el cuerpo de la solicitud
    const body = await request.json();
    const file = body.file; // El archivo debe ser enviado en el cuerpo de la solicitud

    // Subir la imagen a Cloudinary
    const result = await cloudinary.uploader.upload(file, {
      folder: 'uploads',
    });

    // Devolver la URL de la imagen subida
    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
