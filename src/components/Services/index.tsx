import { services } from "@/config/config"
import Service from "../Service"
import { useTranslations } from "next-intl"

const Services = () => {
  const t = useTranslations("Index")

  return (
    <div>
      {
        services.map(service =>
          <Service
            key={service.number}
            number={service.number}
            title={t(`services.${service.number}.title`)}
            description={t(`services.${service.number}.description`)}
            image={service.image}
            orientation={service.orientation}
          />)
      }
    </div>
  )
}

export default Services