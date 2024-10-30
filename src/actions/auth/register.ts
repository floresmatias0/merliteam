"use server";

import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const registerUser = async (name:string,email:string,password:string) => {

    try{
        console.log({name,email,password})
        const userExists = await prisma.user.findFirst({
            where:{
                email:email.toLowerCase()
            }
        })

        if(userExists){
            return {
                ok:false,
                message:"El correo electrónico ya está registrado"
            }
        }


        const user = await prisma.user.create({
            data:{
                name,
                email:email.toLowerCase(),
                password:bcrypt.hashSync(password)
            },
            select:{
                id:true,
                name:true,
                email:true
            
            } //para que no me regrese el password y el resto si (id,nombre,email) 
        })

        return {
            ok:true,
            message:"Usuario registrado correctamente",
            user:user
        }

    }
    catch(error){
        return {
            ok:false,
            message:"Error al registrar el usuario"
        }
    }

}