import CreatePostForm from "@/components/CreatePostForm";
import Header from "@/components/Header";

export default async function createPostPage(){
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
            <CreatePostForm />
        </div>
    )
}