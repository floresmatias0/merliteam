'use client'
import { ButtonVariation } from '@/datamodels/models';
import Button from '../Button';
import { useRouter } from '../../navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  btnLegendServices: string;
  btnLegendClients: string;
  btnLegendAboutUs: string;
  btnLegendSpanishText: string;
  btnLegendEnglishText: string;
  btnLegendContact: string;
};

const Header = ({ btnLegendServices, btnLegendClients, btnLegendAboutUs, btnLegendSpanishText, btnLegendEnglishText, btnLegendContact }: Props) => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('es'); // Definir estado para el idioma seleccionado
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el dropdown
  
  useEffect(() => {
    const langAttribute = document.documentElement.lang;
    localStorage.removeItem("language")
    localStorage.setItem("language", langAttribute)
    setSelectedLanguage(langAttribute);
  }, [])

  const handleChangeLanguage = (newLocale: string) => {
    localStorage.setItem("language", newLocale);
    router.replace('/', { locale: newLocale });
    setSelectedLanguage(newLocale); // Actualiza el idioma seleccionado
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Alterna entre abierto y cerrado el dropdown
  };

  return (
    <header className='flex items-center justify-between px-8 md:px-14 bg-merli-purple-dark py-2'>
      <div>
        <Image src='/MerliTeamLogo.svg' alt='Merliteam' width={50} height={50} className='m-auto md:m-[initial] w-24 md:w-24' />
      </div>
      
      <div className='hidden md:flex items-center'>
        <Button href='#services' label={btnLegendServices} variant={ButtonVariation.outline} className='mr-4 transform hover:scale-110 transition-transform duration-300'/>
        <Button href='#clients' label={btnLegendClients} variant={ButtonVariation.outline} className='mr-4 transform hover:scale-110 transition-transform duration-300'/>
        <Button href='#AboutUs' label={btnLegendAboutUs} variant={ButtonVariation.outline} className='mr-4 transform hover:scale-110 transition-transform duration-300'/>
        <Button href='#contacto' label={btnLegendContact} variant={ButtonVariation.outline} className='mr-4 transform hover:scale-110 transition-transform duration-300'/>
        
        {/* Dropdown de idiomas */}
        <div className='relative inline-block cursor-pointer'>
          <button
            onClick={toggleDropdown}
            className='p-2 rounded-full flex items-center justify-center w-10 h-10'
          >
            <Image src='/globo.png' alt='Language Icon' width={24} height={24} />
          </button>
          <div className={`absolute top-12 right-0 min-w-[120px] rounded-lg z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <button
              onClick={() => handleChangeLanguage('es')}
              className={`block px-3 py-2 text-black ${selectedLanguage === 'es' ? 'bg-[#B19BBD] text-white shadow-md' : 'bg-[#ECE6EE]'} transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md w-[120px]`}
            >
              {btnLegendSpanishText}
            </button>
            <button
              onClick={() => handleChangeLanguage('en')}
              className={`block px-3 py-2 text-black ${selectedLanguage === 'en' ? 'bg-[#B19BBD] text-white shadow-md' : 'bg-[#ECE6EE]'} transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md w-[120px]`}
            >
              {btnLegendEnglishText}
            </button>
          </div>
        </div>
      </div>
      
      <div className='block md:hidden'>
        {/* Dropdown de idiomas para móvil */}
        <div className='relative inline-block cursor-pointer'>
          <button
            onClick={toggleDropdown}
            className='p-2 rounded-full flex items-center justify-center w-10 h-10'
          >
            <Image src='/globo.png' alt='Language Icon' width={24} height={24} />
          </button>
          <div className={`absolute top-12 right-0 min-w-[120px] rounded-lg z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <button
              onClick={() => handleChangeLanguage('es')}
              className={`block px-3 py-2 text-black ${selectedLanguage === 'es' ? 'bg-[#B19BBD] text-white shadow-md' : 'bg-[#ECE6EE]'} transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md w-[120px]`}
            >
              {btnLegendSpanishText}
            </button>
            <button
              onClick={() => handleChangeLanguage('en')}
              className={`block px-3 py-2 text-black ${selectedLanguage === 'en' ? 'bg-[#B19BBD] text-white shadow-md' : 'bg-[#ECE6EE]'} transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md w-[120px]`}
            >
              {btnLegendEnglishText}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;