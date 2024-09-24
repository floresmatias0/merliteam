"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import ActionProcess from "../ActionProcess";

export default function Hexagon() {
  const t = useTranslations("Index");
  const locale = useLocale(); // Obtenemos el idioma actual

  const [text, setText] = useState<string>(t("process.initial_title"));
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  // Definir los rangos de caracteres por botón e idioma (inicio y fin)
  const rangeByNumber: any = {
    en: [
      { start: 0, end: 85 },
      { start: 55, end: 137 },
      { start: 122, end: 215 },
      { start: 49, end: 150 },
      { start: 0, end: 92 },
      { start: 0, end: 92 },
    ],
    es: [
      { start: 0, end: 98 },
      { start: 66, end: 156 },
      { start: 150, end: 251 },
      { start: 49, end: 170 },
      { start: 0, end: 88 },
      { start: 0, end: 88 },
    ],
  };

  const handleHover = (number: number) => {
    const formattedNumber = number < 9 ? `0${number + 1}` : `${number + 1}`;

    const TranslationName = `process.${formattedNumber}.description`;
    //@ts-ignore
    const { start, end } = rangeByNumber[locale][number];

    setText(t(TranslationName).substring(start, end));

    setHoveredButton(number);
  };

  const handleMouseLeave = () => {
    setText(t("process.initial_title"));
    setHoveredButton(null);
  };

  const buttonClasses = (number: number) => {
    const baseClass =
      "absolute bg-[#45025D] w-[25%] h-[25%] font-semibold  rounded-full transition-all duration-300 ease-in-out";
    const positions = [
      "top-[-5%] left-[38%] text-[1.5rem]",
      "top-[15%] right-[-10%] text-[1.5rem]",
      "bottom-[10%] right-[-10%] text-[1.5rem]",
      "bottom-[-22%] left-[38%] text-[1.5rem]",
      "bottom-[10%] left-[-10%] text-[1.5rem]",
      "top-[15%] left-[-10%] text-[1.2rem]",
    ];

    const hoveredClass = "rounded-full shadow-custom transform scale-105";

    // Aplicar la clase con borde especial y transición al estado hover
    return `${baseClass} ${positions[number]} ${
      hoveredButton === number ? hoveredClass : ""
    }`;
  };

  return (
    <div className="bg-gradient-hexa min-h-screen p-9">
      <ActionProcess />
      <div className="hidden lg:flex justify-center relative p-[160px] w-full">
        {/* Imagen del Hexágono */}
        <div className="relative w-[658.8px] h-[634.5px]">
          <Image
            width={658.8}
            height={634.5}
            src={"/hexagon.png"}
            alt="hexagon"
          />

          {/* Botones */}
          <button
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleMouseLeave}
            className={buttonClasses(0)}
          >
            {t("process.01.title")} {/* Discovery */}
          </button>

          <button
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={handleMouseLeave}
            className={buttonClasses(3)}
          >
            {t("process.04.title")} {/* Desarrollo */}
          </button>

          <button
            onMouseEnter={() => handleHover(5)}
            onMouseLeave={handleMouseLeave}
            className={buttonClasses(5)}
          >
            {t("process.06.title")} {/* Implementación */}
          </button>

          <button
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleMouseLeave}
            className={buttonClasses(1)}
          >
            {t("process.02.title")} {/* Research */}
          </button>

          <button
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={handleMouseLeave}
            className={buttonClasses(4)}
          >
            {t("process.05.title")} {/* Testeo */}
          </button>

          <button
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleMouseLeave}
            className={buttonClasses(2)}
          >
            {t("process.03.title")} {/* Diseño */}
          </button>

          {/* Texto */}
          <div className="absolute top-[38%] left-[26%] flex justify-center">
            <h2 className="text-white text-[39px] font-semibold whitespace-pre-line leading-[40px] transition-all duration-500 ease-in-out transform hover:scale-105">
              {text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
