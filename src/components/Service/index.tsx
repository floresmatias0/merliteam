
import Image from "next/image"

enum Orientation { left, right }

type Service = {
  number: string
  title: string
  description: string
  image: string
  orientation: Orientation
}

const Service : React.FC<Service> = ({number, title, description, image, orientation}) => {

  return (
    <div className="text-merli-gray-light group">
      <div className={`w-full flex items-center justify-between mb-6 text-2xl md:text-5xl`}>
        <p className="">{number}</p>
        <div className="flex-1 border-2 border-merli-gray-light mx-6"></div>
        <h3>{title}</h3>
      </div>
      <div className={`w-full flex items-center justify-between mb-6 gap-8 text-2xl md:text-5xl flex-col-reverse md:flex-row md:group-even:flex-row-reverse`}>
        <div className="w-full px-4 m md:w-3/5 md:px-0">
          <Image src={image} alt={title} width={100} height={100} className="m-auto h-full w-fit"/>
        </div>
        <p className={`w-full md:w-2/5 text-base md:text-2xl text-left md:group-odd:text-right`}>{description}</p>
      </div>
    </div>
  )
}

export default Service