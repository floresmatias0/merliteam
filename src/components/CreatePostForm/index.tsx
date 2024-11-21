"use client";

import { useEffect, useState } from "react";
import { Post } from "@/datamodels/models";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Cambio en la importación




export default function CreatePostForm() {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumen, setResumen] = useState("");

  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);



  // Maneja el archivo seleccionado o arrastrado
  const handleImageChange = (file: File) => {
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Maneja la selección de archivos
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageChange(e.target.files[0]);
    }
  };

  // Maneja el evento de drag and drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  // Envía el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);



    const author = session?.user?.email || ""; // Asegura que el autor esté definido
    ;



    const post: Post = {
      title: title,
      description: content,
      date: new Date().toISOString(),
      id: "",
      author: author,
      resumen: resumen
    };

    const formData = new FormData();
    formData.append("post", JSON.stringify(post));
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("/actions/blog", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const result = await response.json();
      console.log("Blog creado:", result);
      setTitle("");
      setContent("");
      setImage(null);
      setImagePreview("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-10">
        <label className="text-white">Title</label>
        <input
          type="text"
          className="border-2 border-white rounded-md p-2 text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <label className="text-white">Resumen</label>
        <textarea
          className="border-2 border-white rounded-md p-2 text-black"
          value={resumen}
          onChange={(e) => setResumen(e.target.value)}
        />
  
        <label className="text-white">Content</label>
        <textarea
          className="border-2 border-white rounded-md p-2 text-black w-[600px] h-[400px] overflow-y-auto"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
  
        <label className="text-white">Image</label>
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-white rounded-md p-4 flex flex-col items-center"
        >
          <p className="text-white mb-2">Drag and drop an image here, or click to select one</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
            id="fileInput"
          />
          <label htmlFor="fileInput" className="cursor-pointer text-blue-500 underline">
            Select an image
          </label>
          {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 w-32 h-32 object-cover" />}
        </div>
  
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create"}
        </button>
      </form>
  
      {/* Mostrar el HTML renderizado */}
      <div className="pb-9 items-center flex flex-col">
        <h2 className="text-white">Preview del contenido (HTML Renderizado):</h2>
        <div
          className="border-2 border-white rounded-md p-4 text-black bg-gray-100 w-[600px] h-[400px] overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
  
}
