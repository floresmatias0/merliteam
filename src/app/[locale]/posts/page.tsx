// blogsPage.tsx
"use server";

import readBlogs from "@/actions/blog/readBlogs";
import getUserNameById from "@/actions/users/getUserNameByID";
import CreateButton from "@/components/CreateButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { Post } from "@/datamodels/models";
import { MdError } from "react-icons/md";

import { useTranslations } from 'next-intl';
import Link from "next/link";

export default async function BlogsPage() {
    const { blogs } = await readBlogs();

    const userNamesIds = blogs?.map((blog) => blog.authorId);

    const usersName = userNamesIds?.map(async (id) => await getUserNameById(id));




    return (
        <div>

        <Header
            btnLegendTitleResponsive="Merliteam"
            btnLegendCommunity="Community"
            btnLegendServices="Services"
            btnLegendClients="Clients"
            btnLegendAboutUs="About Us"
            btnLegendSpanishText="Spanish"
            btnLegendEnglishText="English"
            btnLegendContact="Contact"
        />       





        <div className="p-[90px] flex flex-col justify-center items-center">
            {
                blogs?.length == 0 ?
                (
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-[30px] md:text-[60px] text-white">Noticias</h2>
                        <div className="flex items-center gap-1">
                        <MdError className="text-white h-6 w-6"/>
                        <p className="text-white text-[20px]">Aún no hay noticias, vuelve pronto!</p>
                        
                        </div>
                        <Link href="/" className="p-4">
                            <p className="text-white underline">Volver al inicio</p>
                        </Link>
                        <CreateButton/>
                    </div>
                ):
                (
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-[30px] md:text-[60px] text-white">Noticias</h2>
                        <CreateButton/>
                    </div>
                )
            }
                     
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[45px] md:gap-6 p-9">
                {
                    blogs?.map((blog) => (
                        <PostCard key={blog.id} post={blog} />
                    ))
                }
            </div>
        </div>

        <Footer/>

         </div>
)}
