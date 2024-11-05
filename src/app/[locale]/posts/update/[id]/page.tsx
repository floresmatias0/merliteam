"use server";

import getPostById from "@/actions/blog/findBlogById";
import Header from "@/components/Header";
import ModifyPostForm from "@/components/ModifyPostForm";
import { useEffect } from "react";

interface Props {
    params: {
      id: string;
    };
}


export default async function UpdatePage({params}:Props){
    const {id} = params;

    const result = await getPostById(id);
    
    const {post} = result

  



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
            {post &&
                <ModifyPostForm post={post} />
            }   
        </div>
    )
}