import { SuccessStory } from "@/datamodels/models"
import Image from "next/image"

const SuccessStoryCard: React.FC<SuccessStory> = ({ src, number }) => {
    return (
      <div className="rounded-md bg-merli-purple w-full h-full overflow-hidden">
        <Image 
          className="object-cover w-full h-full" 
          src={src} 
          width={376} 
          height={376} 
          alt={number} 
        />
      </div>
    )
  }
  
  export default SuccessStoryCard
  