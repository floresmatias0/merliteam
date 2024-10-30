"use server";
import deleteBlog from "@/actions/blog/deleteBlog";
import getPostById from "@/actions/blog/findBlogById";
import DeleteButton from "@/components/DeleteButton";
import Header from "@/components/Header";
import Image from "next/image";
import { useSession } from "next-auth/react"
import UpdateButton from "@/components/UpdateButton";

interface Props {
    params: {
      id: string;
    };
  
  }


export default async function blogPage({params  }:Props){
    const { id } = params;

    const result = await getPostById(id);
    const {post} = result;



    return(
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
                <h2 className="font-bold text-[60px] text-white">{post?.title}</h2>
                <div className="flex gap-8 p-7">
                <div className="flex flex-col gap-4">
                <Image 
                src={post?.image ?? ''} 
                alt={post?.title ?? ''} 
                width={400} 
                height={200} 
                className="rounded-lg hover:shadow-xl hover:cursor-pointer hover:scale-105 transition-all duration-300" 
                />
                                <p className="font-bold text-white">{post?.date.toDateString()}</p>

                </div>
                
                <div>
                <p className="text-white">{post?.content}</p>

                </div>
                </div>
                
            <div className="flex gap-4 items-center">
            <DeleteButton handleClick={deleteBlog} id={id} />  
            <UpdateButton id={id}/>
            </div>
              



            </div>

        </div>
    )






}