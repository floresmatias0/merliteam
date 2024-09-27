import { services } from "@/config/config";
import Service from "../Service";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Index");

  return (
    <div id='services'>
      {
        services.map(service =>
          <Service
            key={service.number}
            number={service.number}
            title={t(`services.${service.number}.title`)}
            description={t(`services.${service.number}.description`)}
            imageMobile={service.imageMobile}
            imageDesktop={service.imageDesktop}
            titleOrientation={service.titleOrientation}
            descriptionOrientation={service.descriptionOrientation}
            imageAlignment={service.imageAlignment}
            textAlignmentMobile={service.textAlignmentMobile}
          />)
      }
    </div>
  );
};

export default Services;