import { Process } from "@/datamodels/models"


const Card : React.FC<Process>= ({title, description}) => {
  return (
    <div className='rounded-md bg-merli-purple p-6 w-full'>
      <h3 className="text-merli-white mb-4 text-[24px] font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card