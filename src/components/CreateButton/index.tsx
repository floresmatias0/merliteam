"use client";

import { FaPlus } from "react-icons/fa";
import { useSession } from "next-auth/react"
import { useLocale } from 'next-intl';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

export default function CreateButton(){


    const {data:session} = useSession()

    const isAuthenticated = !!session?.user
    
    
    const locale = useLocale()
    
    
    const idioma = locale === 'es' ? 'es' : 'en'
    
    
    
    const router = useRouter()
 
    return(

        
        <div>
            {isAuthenticated && (
            <button onClick={() => {
                router.push(`/${idioma}/posts/create`)
            }} className="fixed right-9 top-[150px] bg-blue-500 text-white p-3 rounded-full hover:scale-105 transition-all">
                <FaPlus size={30} />
            </button>
            )}
        </div>
    )       
}   