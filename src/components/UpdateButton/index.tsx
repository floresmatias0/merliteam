"use client";
import { FaPencilAlt } from "react-icons/fa";


import React from 'react';
import { useSession } from "next-auth/react"
import { useLocale } from 'next-intl';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';




export default function UpdateButton({id}:{id:string}){


    const {data:session} = useSession()

    const isAuthenticated = !!session?.user


    const locale = useLocale()
    
    
    const idioma = locale === 'es' ? 'es' : 'en'
    
    
    
    const router = useRouter()
    

   








    return(
        <div>
            {isAuthenticated && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                router.push(`/${idioma}/posts/update/${id}`)
            }}>
                <FaPencilAlt/>
            </button>
            )}
        </div>
    )
}