// blogsPage.tsx
"use server";

import readBlogs from "@/actions/blog/readBlogs";
import getUserNameById from "@/actions/users/getUserNameByID";
import CreateButton from "@/components/CreateButton";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { Post } from "@/datamodels/models";
import { useTranslations } from 'next-intl';

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





        <div className="p-9 flex flex-col justify-center items-center">
                    <h2 className="font-bold text-[60px] text-white">Noticias</h2>
                    <CreateButton/>
            <div className="grid grid-cols-3 gap-6 p-9">
                {
                    blogs?.map((blog) => (
                        <PostCard key={blog.id} post={blog} />
                    ))
                }
            </div>
        </div>



        </div>
    );
}
