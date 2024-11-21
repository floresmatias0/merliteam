"use client";
import { Post } from "@prisma/client";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

type BlogsMainPageCardProps = {
  blog: Post;
};

export default function BlogsMainPageCard({ blog }: BlogsMainPageCardProps) {
  const locale = useLocale();
  const idioma = locale === 'es' ? 'es' : 'en';
    const r = useRouter()
    const llevar = (id:string) => {
        r.push(`/${idioma}/blogs/${id}`)
    }


  return (
    <div key={blog.id} className="flex flex-col gap-2 hover:cursor-pointer" onClick={() => {
        llevar(blog.id)
    }}>
      <Link href={`/${idioma}/blogs/${blog.id}`}>
        <img src={blog.image ?? ""} alt={blog.title} className="w-[400px] h-[400px] object-cover" />
        <h4 className="text-white">{blog.title}</h4>
        <p className="text-white">{blog.resumen}</p>
      </Link>
    </div>
  );
}
