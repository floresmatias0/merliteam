'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from '@/navigation';
import './switch.css';

const LanguageSlider = () => {
  const router = useRouter();

  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const language = localStorage?.getItem("language") || 'es';

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      setOffsetX(event.clientX - sliderRect.left);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging && sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const newOffsetX = event.clientX - sliderRect.left;

      if (newOffsetX >= 0 && newOffsetX <= sliderRect.width) {
        setOffsetX(newOffsetX);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    handleLanguageChange();
  };

  const handleLanguageChange = () => {
    const sliderWidth = sliderRef.current ? sliderRef.current.offsetWidth : 0;
    const percentage = offsetX / sliderWidth;
    const newLanguage = percentage > 0.5 ? 'en' : 'es';
    localStorage.removeItem("language")
    localStorage.setItem("language", newLanguage)

    console.log({sliderWidth, percentage, newLanguage})
    router.replace('/', { locale: newLanguage });
  };

  useEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const initialOffsetX = language === 'en' ? 5 : sliderWidth;
      setOffsetX(initialOffsetX);
    }
  }, [language]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="language-slider" onMouseDown={handleMouseDown} ref={sliderRef}>
      <div className="slider-handle" style={{ left: `${offsetX}px` }} />
    </div>
  );
};

export default LanguageSlider;


