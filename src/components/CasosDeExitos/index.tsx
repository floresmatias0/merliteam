import { SuccessStories } from "@/config/config"
import Card from "../Card";
import { useTranslations } from 'next-intl'
import SuccessStoryCard from "../CasosDeExitoCard";

export default function CasosDeExitos() {
    const t = useTranslations('Index')




  return (
    <div id='clients' className="grid grid-cols-1 lg:flex lg:flex-col p-[40px] md:p-[50px] bg-gradient-radial justify-center">
        <div className="flex flex-col pb-7 md:pb-[80px]">
            <div>
                    <h2 className="leading-[38px] lg:leading-[60px] font-bold text-[32px] lg:text-[56px] bg-clip-text text-transparent bg-titleAction">{t("successStories.main.title")}</h2>
            </div>
            <div>
                    <p className="font-semibold text-[16px] mt-2 lg:mt-0 lg:text-[24px]">{t("successStories.main.subtitle")}</p>
            </div>
        </div>
        <div className="grid justify-items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-7  md:gap-[70px] w-full">
                {
                    SuccessStories.map(story => <SuccessStoryCard 
                        key={story .number}
                        number={story .number}
                        src={story .src}
                        title={story.title}
                        hyperlink={story.hyperlink}
                      />)
                }
        </div>
    </div>
  );
}