import { SuccessStories } from "@/config/config"
import Card from "../Card";
import { useTranslations } from 'next-intl'
import SuccessStoryCard from "../CasosDeExitoCard";

export default function CasosDeExitos() {
    const t = useTranslations('Index')




  return (
    <div id='clients' className="hidden lg:flex lg:flex-col md:p-[80px] bg-gradient-radial">
        <div className="flex flex-col pb-[80px]">
            <div>
                    <h2 className="leading-[60px] font-bold text-[56px] text-white">Impulsando el Éxito Digital <br/> de Nuestros Clientes</h2>
            </div>
            <div>
                    <p className="font-semibold text-[24px]">En Merli Team, nos enorgullece transformar ideas en soluciones digitales que generan resultados. Con un enfoque personalizado y un compromiso con la excelencia, ayudamos a nuestros clientes a alcanzar sus objetivos y destacar en sus mercados.</p>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-[80px] mt-5">
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