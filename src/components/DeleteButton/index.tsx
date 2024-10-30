"use client";
import React from 'react';
import { useSession } from "next-auth/react"
import { useLocale } from 'next-intl';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

type ButtonProps = {
  id: string;
  handleClick: (id: string) => void;  // Método que recibe el id y no retorna nada
  newUrl?: string;
};




const DeleteButton: React.FC<ButtonProps> = ({ id, handleClick }) => {
    
const {data:session} = useSession()

const isAuthenticated = !!session?.user


const locale = useLocale()


const idioma = locale === 'es' ? 'es' : 'en'



const router = useRouter()






  return (
    <div>
        {isAuthenticated && (
        <button
            onClick={() => {
                handleClick(id)
                router.push(`/${idioma}/posts`)
            
            }}
            className="px-4 py-2 bg-red-700 text-white rounded-lg"
            >
      Borrar post
         </button>   )}

    </div>
    
  );
};

export default DeleteButton;
