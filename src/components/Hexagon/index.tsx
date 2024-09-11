"use client";
import { useState } from "react";
import Image from "next/image";
import { processes } from "@/config/config";
import { useTranslations } from 'next-intl'
import { locales } from "@/navigation";

export default function Hexagon() {
  const t = useTranslations("Index")

  const [text, setText] = useState(`
    
    Evolución continúa`); // Estado que maneja el texto dentro del hexágono
  const [selectedButton, setSelectedButton] = useState<number | null>(null); // Estado que maneja qué botón está seleccionado
  const[selectedButtonBoolean, setSelectedButtonBoolean] = useState<boolean>(false)

  const changeTextAndButton = (number: number) => {
    const formattedNumber = number < 9 ? `0${number + 1}` : `${number + 1}`;
    const maxLengthByNumber = [101,141,124,94,160,160]
    
    // Formar la clave de traducción con el número formateado
    const TranslationName = `process.${formattedNumber}.description`;
    const maxLength = 160
    // Actualizar el estado con la traducción
    setText(t(TranslationName).substring(0,maxLengthByNumber[number]));
  
    // Cambiar el botón seleccionado
    setSelectedButton(number);
  };
  

  // Función para generar las clases de los botones dinámicamente
  const buttonClasses = (number: number) => {
    const baseClass =
      "absolute bg-[#45025D] w-[25%] h-[25%] font-semibold text-[1.5rem] rounded-full";
    const positions = [
      "top-[-5%] left-[38%]",
      "top-[15%] right-[-10%]",
      "bottom-[10%] right-[-10%]",
      "bottom-[-22%] left-[38%]",
      "bottom-[10%] left-[-10%]",
      "top-[15%] left-[-10%]"
    ];

    const selectedClass =
      "rounded-full shadow-custom";

    // Aplicar la clase con borde especial solo si el botón está seleccionado
    return `${baseClass} ${positions[number]} ${
      selectedButton === number ? selectedClass : ""
    }`;
  };

  return (
    <div className="hidden lg:flex justify-center relative p-[180px] bg-gradient-hexa w-full min-h-screen">
      {/* Imagen del Hexágono */}
      <div className="relative w-[658.8px] h-[634.5px]">
        <Image width={658.8} height={634.5} src={"/hexagon.png"} alt="hexagon" />

        {/* Botones */}
        <button onClick={() => changeTextAndButton(0)} className={buttonClasses(0)}>
          {t("process.01.title")} {/* Discovery */}
        </button>

        <button onClick={() => changeTextAndButton(3)} className={buttonClasses(3)}>
        {t("process.04.title")} {/* Desarrollo */}
        </button>

        <button onClick={() => changeTextAndButton(5)} className={buttonClasses(5)}>
        {t("process.06.title")} {/* Implementacion */}
        </button>

        <button onClick={() => changeTextAndButton(1)} className={buttonClasses(1)}>
        {t("process.02.title")} {/* Research */}
        </button>

        <button onClick={() => changeTextAndButton(4)} className={buttonClasses(4)}>
        {t("process.05.title")} {/* Testeo */}
        </button>

        <button onClick={() => changeTextAndButton(2)} className={buttonClasses(2)}>
        {t("process.03.title")} {/* Diseño */}
        </button>

        {/* Texto */}
        <div className="absolute top-[35%] left-[25%] flex justify-center">
          <h2 className="text-white text-[39px] font-semibold whitespace-pre-line leading-[40px]">
            {text}
            </h2>
        </div>
      </div>
    </div>
  );
}
