'use client';

import { useState } from 'react';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  const styles = `
    .clip-triangle {
      clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    }
  `;

  return (
    <div className="hidden lg:flex p-[200px] justify-between gap-10 w-full">
      <div className="relative bg-gray-400 w-[325px] h-[415px] rounded-xl z-10 ">
        <div className="relative top-[-5%] left-[4%] bg-purple-500 rounded-xl z-20 w-[325px] h-[415px] overflow-hidden">
        {isPlaying && (
            <video
              className="absolute top-0 left-0 w-auto h-auto min-w-full min-h-full"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay
              loop
            ></video>
          )}
          <button
            onClick={handleButtonClick}
            className="relative z-50 bottom-[-85%] left-[8%] rounded-full w-[50px] h-[50px] bg-gray-400 flex justify-center items-center"
          >
            {isPlaying ? (
              // Simbolo de pausa
              <div className="flex justify-center items-center">
                <div className="bg-purple-700 w-[8px] h-[30px] mx-[2px]"></div>
                <div className="bg-purple-700 w-[8px] h-[30px] mx-[2px]"></div>
              </div>
            ) : (
              // Simbolo de play
              <div className="clip-triangle bg-purple-700 w-[0] h-[0] border-l-[0px] border-l-transparent border-t-[25px] border-t-purple-700 border-r-[30px] border-r-transparent"></div>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-[48px]">En MerliTeam:</h2>

        <p>Te ayudamos a darle despegue a tus ideas</p>
        <p>Transformamos tu visión en soluciones digitales de calidad.</p>
        <p>
          Con pasión, tecnología y conexiones sólidas, impulsamos tus proyectos hacia el éxito.
        </p>
        <p>Descubre cómo podemos hacer que tus ideas despeguen hoy mismo.</p>
      </div>
      {/* Inserto el estilo personalizado */}
      <style>{styles}</style>
    </div>
  );
}
