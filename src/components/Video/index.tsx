'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from "next-intl";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const locale = useLocale(); // Obtenemos el idioma actual

  const t = useTranslations("Index");
  const [urlVideo, setUrlVideo] = useState<string>(""); // Estado para la URL del video

  // URLs de los videos por idioma
  const videoUrls = {
    en: "/sol merliteam english - Merli Team (360p, h264, youtube).mp4",
    es: "/sol merli team español - Merli Team (360p, h264, youtube).mp4"
  };

  // useEffect para actualizar la URL del video cuando cambia el idioma
  useEffect(() => {
    if (locale in videoUrls) {
      //@ts-ignore
      setUrlVideo(videoUrls[locale]);
    }
  }, [locale]); // Se ejecuta cuando cambia el locale

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  const styles = `
    .clip-triangle {
      clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    }
  `;

  return (
    <div id='aboutUs' className="hidden lg:flex p-[200px] justify-between gap-[60px] w-full">
      <div className="relative bg-gray-400 w-[325px] h-[415px] rounded-xl z-10 flex items-start">
        <div className="relative top-[-5%] left-[4%] bg-purple-500 rounded-xl z-20 w-[325px] h-[415px] overflow-hidden shadow-md">
          {isPlaying && urlVideo && (
            <video
              className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
              src={urlVideo}
              autoPlay
              loop
            ></video>
          )}

          <button
            onClick={handleButtonClick}
            className="relative z-50 bottom-[-85%] left-[8%] rounded-full w-[50px] h-[50px] bg-gray-400 flex justify-center items-center"
          >
            {isPlaying ? (
              // Símbolo de pausa
              <div className="flex justify-center items-center">
                <div className="bg-purple-700 w-[8px] h-[30px] mx-[2px]"></div>
                <div className="bg-purple-700 w-[8px] h-[30px] mx-[2px]"></div>
              </div>
            ) : (
              // Símbolo de play
              <div className="clip-triangle bg-purple-700 w-[0] h-[0] border-l-[0px] border-l-transparent border-t-[25px] border-t-purple-700 border-r-[30px] border-r-transparent"></div>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-[48px] text-white">{t("video.title")}</h2>

        <div className='flex gap-3'>
          <Image src={"/Check.svg"} alt='check' width={31} height={30} />
          <p>{t("video.01")}</p>
        </div>

        <div className='flex gap-3'>
          <Image src={'Analytiycs.svg'} width={31} height={30} alt='' />
          <p>{t("video.02")}</p>
        </div>

        <div className='flex gap-3'>
          <Image src={'Like.svg'} width={31} height={30} alt='like image' />
          <p>{t("video.03")}</p>
        </div>

        <div className='flex gap-3'>
          <Image src={'Idea.svg'} width={31} height={30} alt='idea' />
          <p>{t("video.04")}</p>
        </div>
      </div>
      {/* Inserto el estilo personalizado */}
      <style>{styles}</style>
    </div>
  );
}
