import readBlogs from "@/actions/blog/readBlogs";
import Carrousel from "../Carrousel";
import BlogsMainPageCard from "../BlogMainPageCard";
import { useLocale } from "next-intl";

export default async function BlogsMainPage() {
  const locale = useLocale();
  const idioma = locale === 'es' ? 'es' : 'en';

  const result = await readBlogs();
  const { blogs = [] } = result;

  return (
    <div className="">
      {
        blogs.length > 0 && (
          <div className="flex flex-col items-center p-9 gap-9">
 <h3 className="font-bold text-[50px] text-white">Noticias</h3>
 <Carrousel posts={blogs}/>
          </div>
         
        )
      }
      
      {/*<div className="flex justify-between gap-5">
        {blogs.map((blog) => (
          <BlogsMainPageCard key={blog.id} blog={blog} />
        ))}
      </div>
      */}
    </div>
  );
}
