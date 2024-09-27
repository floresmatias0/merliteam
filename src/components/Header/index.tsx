'use client'
import { ButtonVariation } from '@/datamodels/models';
import Button from '../Button';
import { useRouter } from '../../navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  btnLegendTitleResponsive: string;
  btnLegendServices: string;
  btnLegendClients: string;
  btnLegendAboutUs: string;
  btnLegendSpanishText: string;
  btnLegendEnglishText: string;
  btnLegendContact: string;
};

const Header = ({ btnLegendTitleResponsive, btnLegendServices, btnLegendClients, btnLegendAboutUs, btnLegendSpanishText, btnLegendEnglishText, btnLegendContact }: Props) => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('es');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const langAttribute = document.documentElement.lang;
    localStorage.removeItem("language");
    localStorage.setItem("language", langAttribute);
    setSelectedLanguage(langAttribute);
  }, []);

  const handleChangeLanguage = (newLocale: string) => {
    localStorage.setItem("language", newLocale);
    router.replace('/', { locale: newLocale });
    setSelectedLanguage(newLocale);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex items-center justify-between px-4 md:px-8 bg-merli-purple-dark py-2'>
      <div className='hidden md:flex items-center justify-between w-full'>
        <div>
          <Image src='/logo-header.png' alt='Merliteam' width={110} height={110} quality={100} />
        </div>
        <div className='flex items-center space-x-3'>
          <Button href='#services' label={btnLegendServices} variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />
          <Button href='#clients' label={btnLegendClients} variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />
          <Button href='#aboutUs' label={btnLegendAboutUs} variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />
          <Button href='#contact' label={btnLegendContact} variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />
          {/* Dropdown de idiomas */}
          <div className='relative inline-block cursor-pointer'>
            <button
              onClick={toggleDropdown}
              className='p-2 rounded-full flex items-center justify-center w-10 h-10'
            >
              <Image src='/globo.png' alt='Language Icon' width={20} height={20}/>
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
      </div>

      {/* Diseño responsive */}
      <div className='block md:hidden w-full'>
        <div className='flex justify-center items-center mt-2 w-full relative'>
          <span className='font-bold text-white font-dm-sans text-lg md:text-xl absolute left-1/2 transform -translate-x-1/2'>
            {btnLegendTitleResponsive}
          </span>
          {/* Dropdown de idiomas */}
          <div className='relative cursor-pointer ml-auto'>
            <button
              onClick={toggleDropdown}
              className='p-2 rounded-full flex items-center justify-center w-10 h-10'
            >
              <Image src='/globo.png' alt='Language Icon' width={20} height={20}/>
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
      </div>
    </header>
  );
};

export default Header;
