import { SuccessStory } from "@/datamodels/models";
import Image from "next/image";
import Link from "next/link";

const SuccessStoryCard: React.FC<SuccessStory> = ({ src, number, title, hyperlink }) => {
  return (
    <div className="rounded-md bg-merli-purple w-[206.5px] h-[221.94px] lg:w-[356px] lg:h-[428px] overflow-hidden flex flex-col hover:cursor-pointer">
      <Link href={hyperlink} target="_blank" rel="noopener noreferrer">
        {/* Ajustes de tamaño responsivo */}
        <div className="relative w-[206.5px] h-[168.94px] lg:w-[356px] lg:h-[356px]">
          <Image
            className="absolute object-cover"
            src={src}
            layout="fill" // Hace que la imagen ocupe todo el contenedor
            alt={number}
          />
        </div>
      </Link>
      <Link href={hyperlink} target="_blank" rel="noopener noreferrer">
        <div className="md:bg-[#45025D] w-full h-full md:brightness-50 md:hover:brightness-150 transition duration-300 flex justify-center text-center">
          <h4 className="text-[#B19BB9] font-semibold flex justify-start p-3 text-[20px] md:text-[32px] transition duration-300 text-center">
            {title}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default SuccessStoryCard;
