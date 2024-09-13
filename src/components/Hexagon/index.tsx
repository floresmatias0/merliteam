"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import ActionProcess from "../ActionProcess";

export default function Hexagon() {
  const t = useTranslations("Index");
  const locale = useLocale(); // Obtenemos el idioma actual

  const [text, setText] = useState(t("process.initial_title"));
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  // Definir los rangos de caracteres por botón e idioma (inicio y fin)
  const rangeByNumber = {
    en: [
      { start: 0, end: 100 },
      { start: 5, end: 140 },
      { start: 10, end: 120 },
      { start: 0, end: 90 },
      { start: 20, end: 150 },
      { start: 30, end: 150 }
    ],
    es: [
      { start: 0, end: 98 },
      { start: 66, end: 156  },
      { start: 150, end: 251 },
      { start: 49, end: 170 },
      { start: 0, end: 88 },
      { start: 0, end: 88 }
    ]
  };

  // Función para cambiar el texto y el botón seleccionado
  const changeTextAndButton = (number: number) => {
    const formattedNumber = number < 9 ? `0${number + 1}` : `${number + 1}`;

    // Formar la clave de traducción con el número formateado
    const TranslationName = `process.${formattedNumber}.description`;

    // Obtener los índices de inicio y fin dependiendo del idioma y el botón seleccionado
    const { start, end } = rangeByNumber[locale][number];

    // Actualizar el estado con la traducción acortada según el rango
    setText(t(TranslationName).substring(start, end));

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

    const selectedClass = "rounded-full shadow-custom";

    // Aplicar la clase con borde especial solo si el botón está seleccionado
    return `${baseClass} ${positions[number]} ${
      selectedButton === number ? selectedClass : ""
    }`;
  };

  return (
    <div className="bg-gradient-hexa min-h-screen p-9">
      <ActionProcess/>
    <div className="hidden lg:flex justify-center relative p-[160px] w-full ">
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
        <div className="absolute top-[38%] left-[26%] flex justify-center">
          <h2 className="text-white text-[39px] font-semibold whitespace-pre-line leading-[40px]">
            {text}
          </h2>
        </div>
      </div>
    </div>




    </div>
  );
}
