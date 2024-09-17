'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  description: string;
};

const Intro = ({ title, description }: Props) => {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const langAttribute = document.documentElement.lang;
    setLang(langAttribute);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b min-h-screen">
      <div className="hidden md:flex relative flex-col md:flex-row md:items-center md:justify-center w-full">
        <div className="absolute top-0 left-[-40%] md:left-[-35%] w-full h-full -z-10 flex justify-center items-center">
          <Image
            src={lang === "en" ? "/CircleGroup2.svg" : "/CircleGroup.svg"}
            alt="circle-qualities"
            width={800}
            height={800}
            className="w-[600px] md:w-[1200px]"
          />
        </div>
        <div className="relative w-[320px] left-[10%] my-2 mx-auto mb-8 md:mb-0">
          <Image
            src="/CircleSmall.svg"
            alt="circle-small"
            width={300}
            height={300}
            className="w-full"
          />
          <div className="absolute top-0 w-full h-full flex justify-center items-center">
            <Link href="#">
              <Image
                src="/MerliTeamLogoRedondo.svg"
                alt="perfil-pablo"
                width={270}
                height={270}
                className="rounded-full hover:scale-105 ease-in-out duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-end px-4 md:px-8 lg:px-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 whitespace-pre-line">
            {title}
          </h2>
        </div>
      </div>
      {/* Layout responsive */}
      <div className="md:hidden flex flex-col items-start justify-center px-6">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          {title}
        </h2>
        <p className="text-lg text-white mb-8">
          {description}
        </p>
        <Image
          src={lang === "en" ? "/CircleGroup2.svg" : "/CircleGroup.svg"}
          alt="circle-qualities"
          width={400}
          height={400}
          className="w-[300px] md:w-[400px]"
        />
      </div>
    </div>
  );
};

export default Intro;
