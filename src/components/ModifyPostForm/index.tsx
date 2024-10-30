"use client";
import updateBlog from "@/actions/blog/updateBlog";
import { Post } from "@prisma/client";
import { useEffect, useState } from "react";

interface Props {
    post: Post;
}

export default function ModifyPostForm({ post }: Props) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState(post.image ? post.image : "");

    useEffect(() => {
        setTitle(post.title);
        setContent(post.content);
        setImagePreview(post.image ? post.image : "");
    }, [post]);

    const handleImageChange = (file: File) => {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleImageChange(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleImageChange(e.dataTransfer.files[0]);
        }
    };

    const handleImageUpload = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        
        const response = await fetch("/actions/uploadImage", { // Asegúrate de que esta ruta sea la correcta
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.url) {
            console.log("Image uploaded to Cloudinary:", data.url);
            return data.url;
        } else {
            console.error("Error uploading image:", data.error);
            return null;
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Evita la recarga de la página

        let url = post.image;

        if (post.image !== imagePreview && image) {
            try {
                url = await handleImageUpload(image);
            } catch (error) {
                console.log("Error uploading image:", error);
                return;
            }
        }

        const result = await updateBlog({
            id: post.id,
            title,
            description: content,
            image: url ? url : "",
            author: post.authorId,
            date: post.date.toISOString(),
        });

        console.log("Blog updated:", result);
    };

    return (
        <div>
            <div className="flex flex-col gap-10 justify-center items-center">
                <h2 className="font-bold text-[60px] text-white">Update Post</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <label className="text-white">Title</label>
                    <input
                        type="text"
                        className="border-2 border-white rounded-md p-2 text-black"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label className="text-white">Content</label>
                    <textarea
                        className="border-2 border-white rounded-md p-2 text-black"
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
                    </div>

                    {imagePreview && (
                        <div className="mt-4">
                            <img src={imagePreview} alt="Preview" className="max-w-xs max-h-64 rounded-md" />
                        </div>
                    )}

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        type="submit"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
