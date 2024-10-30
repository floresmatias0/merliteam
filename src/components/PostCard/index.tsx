// PostCard.tsx
import Link from "next/link"
import { Post } from "@prisma/client";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function PostCard({ post }: { post: Post }) {




    const locale = useLocale()


    const idioma = locale === 'es' ? 'es' : 'en'


    return (
        <div className="flex flex-col">
            <Link href={`/${idioma}/posts/${post.id}`}>
            <Image 
                src={post.image ?? ''} 
                alt={post.title} 
                width={400} 
                height={200} 
                className="rounded-lg hover:shadow-xl hover:cursor-pointer hover:scale-105 transition-all duration-300" 
            />
            </Link>
            <h2 className="font-bold text-[30px] text-white mt-2">{post.title}</h2>
            <p>{post.content.slice(0,20)}</p>
            <p className="font-bold text-white">{post.date.toDateString()}</p>
        </div>
    );
}   
