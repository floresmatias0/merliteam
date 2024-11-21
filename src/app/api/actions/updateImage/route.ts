// src/app/actions/updateImage/route.js
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export async function POST(request) {
  try {
    // Parse the FormData from the request
    const formData = await request.formData();

    // Get the file from the FormData
    const file = formData.get('file');

    // Check if the file exists
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Convert the file (Blob) into a Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Function to upload the buffer to Cloudinary using a stream
    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'uploads' },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );

        streamifier.createReadStream(buffer).pipe(stream);
      });
    };

    // Upload the buffer and get the result
    const result = await streamUpload(buffer);

    // Return the secure URL of the uploaded image
    //@ts-ignore
    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
