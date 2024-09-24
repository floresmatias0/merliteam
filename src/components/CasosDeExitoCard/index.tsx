import { SuccessStory } from "@/datamodels/models"
import Image from "next/image"
import Link from "next/link"

const SuccessStoryCard: React.FC<SuccessStory> = ({ src, number, title, hyperlink }) => {
    return (
      <div className="rounded-md bg-merli-purple w-full h-full overflow-hidden flex flex-col hover:cursor-pointer">
        <Link href={hyperlink} target="_blank" rel="noopener noreferrer">
          <Image 
            className="object-cover w-full h-full" 
            src={src} 
            width={376} 
            height={376} 
            alt={number}
          />
       
        </Link>
        <Link href={hyperlink} target="_blank" rel="noopener noreferrer">
        <div className="bg-[#45025D] w-[393px] h-[78px] brightness-50 hover:brightness-150 transition duration-300">
            <h4 className="text-white font-semibold flex justify-start p-3 brightness-50 hover:brightness-150 text-[25px]  transition duration-300">{title}</h4>
          </div>
        </Link>
      </div>
    )
}

export default SuccessStoryCard
