'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const WhatsAppButton: React.FC = () => {
  const [bottomOffset, setBottomOffset] = useState(80); // Valor inicial del offset

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBottomOffset(30); // Valor inicial para móviles
      } else {
        setBottomOffset(80); // Valor inicial para pantallas más grandes
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight) {
        if (window.innerWidth < 768) {
          // Ajusta el offset para móviles
          setBottomOffset((documentHeight - scrollPosition) + 255); // Ajusta el offset para que suba más en móviles
        } else {
          // Ajusta el offset para pantallas más grandes
          setBottomOffset((documentHeight - scrollPosition) + 180); // Ajusta el offset para que suba en escritorio
        }
      } else {
        handleResize(); // Ajusta el offset según el tamaño de la pantalla
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize(); // Ajusta el offset al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href='https://wa.me/+5491167032053'
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed right-5 md:right-10 z-50"
      style={{ bottom: `${bottomOffset}px`, transition: 'bottom 0.09s ease-out' }}
    >
      <Image
        src="/logos_whatsapp-icon.svg"
        alt="WhatsApp"
        width={63}
        height={64}
        className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsAppButton;





