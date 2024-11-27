"use client";
import { ButtonVariation } from '@/datamodels/models';
import Button from '../Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useSession, signOut } from "next-auth/react";
import { FaPerson } from "react-icons/fa6";

type Props = {
  btnLegendTitleResponsive: string;
  btnLegendCommunity: string;
  btnLegendServices: string;
  btnLegendClients: string;
  btnLegendAboutUs: string;
  btnLegendSpanishText: string;
  btnLegendEnglishText: string;
  btnLegendContact: string;
  position?: string;
  backgroundColor?: string;
};

const Header = ({ btnLegendTitleResponsive, btnLegendCommunity, btnLegendServices, btnLegendClients, btnLegendAboutUs, btnLegendSpanishText, btnLegendEnglishText, btnLegendContact, position = '', backgroundColor = 'bg-merli-purple-dark' }: Props) => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('es');
  const [isOpen, setIsOpen] = useState(false);
  const  [isOpenSession, setIsOpenSession] = useState(false);
  const t = useTranslations('Index');
  const { data: session } = useSession();

  const isAuthenticated = !!session?.user;

  btnLegendTitleResponsive = t('header.btn_title_responsive');
  btnLegendServices = t('header.btn_services');
  btnLegendClients = t('header.btn_clients');
  btnLegendCommunity = t('header.btn_our_community');
  btnLegendAboutUs = t('header.btn_about_us');
  btnLegendSpanishText = t('header.btn_spanish_text');
  btnLegendEnglishText = t('header.btn_english_text');
  btnLegendContact = t('header.btn_contact');

  useEffect(() => {
    const langAttribute = document.documentElement.lang;
    localStorage.removeItem("language");
    localStorage.setItem("language", langAttribute);
    setSelectedLanguage(langAttribute);
  }, []);

  const handleChangeLanguage = (newLocale: string) => {
    localStorage.setItem("language", newLocale);
    router.replace(`/${newLocale}`);
    setSelectedLanguage(newLocale);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpenSession(!isOpenSession);
  };

  const handleSignOut = () => {
    signOut();
    router.push(`/${selectedLanguage}/auth`);
  };

  const locale = useLocale();
  const idioma = locale === 'es' ? 'es' : 'en';

  return (
    <header className={`flex items-center justify-between px-4 md:px-8 ${backgroundColor} mt-0 py-2 ${
      position === '' ? '' : position
    } z-50 w-full top-0`}>
      <div className='hidden md:flex items-center justify-between w-full'>
        <div>
          <Link href={'/'}>
          <Image src='/logo-header.png' alt='Merliteam' width={110} height={110} quality={100} />

          </Link>
        </div>
        <div className='flex'>
          {isAuthenticated && (
            <div className='relative flex items-center'>
              <FaPerson className='text-gray-600 hover:text-white font-bold h-9 w-9' onClick={toggleDropdown2} />
              <p className='text-2xl text-gray-600 hover:text-white cursor-pointer' onClick={toggleDropdown2}>
                {session.user.name}
              </p>
              {isOpenSession && (
                <div className='absolute top-12 right-0 min-w-[120px] bg-white shadow-md z-10 rounded-xl'>
                  <button
                    onClick={handleSignOut}
                    className='block w-full px-4 py-2 text-left text-black-600 hover:bg-gray-100 hover:text-black rounded-xl'
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className='flex items-center space-x-3'>
          <Button href={`/${idioma}/#services`} label={btnLegendServices} variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />
          <Button href={`/${idioma}/#clients`} label={btnLegendClients} variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />

          <Button href={`/${idioma}/#aboutUs`} label={btnLegendAboutUs} variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />
          <Button href={`/${idioma}/#contact`} label={btnLegendContact} variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />
          <Button href={`/${selectedLanguage}/posts`} label="Blog" variant={ButtonVariation.outline} className='transform hover:scale-110 transition-transform duration-300' />

          {/* Dropdown de idiomas */}
          <div className='relative inline-block cursor-pointer'>
            <button onClick={toggleDropdown} className='p-2 rounded-full flex items-center justify-center w-10 h-10'>
              <Image src='/globo.png' alt='Language Icon' width={20} height={20} />
            </button>
            <div className={`absolute top-12 right-0 min-w-[120px] rounded-lg z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <button onClick={() => handleChangeLanguage('es')} className={`block px-3 py-2 text-black ${selectedLanguage === 'es' ? 'bg-[#B19BBD] text-white shadow-md' : 'bg-[#ECE6EE]'} transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md w-[120px]`}>
                {btnLegendSpanishText}
              </button>
              <button onClick={() => handleChangeLanguage('en')} className={`block px-3 py-2 text-black ${selectedLanguage === 'en' ? 'bg-[#B19BBD] text-white shadow-md' : 'bg-[#ECE6EE]'} transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md w-[120px]`}>
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
