
import bcryptjs from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
 
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod';
import prisma from './lib/prisma';

const authenticatedRoutes = [
 // "/checkout",
  //"/profile",
  //"/orders",
  //"/admin",
  "/checkout/address",
];

const rutasNoAccesiblesSiEstaAutenticado = [
  "/en/auth",  // Ruta de autenticación en inglés
  "/es/auth",  // Ruta de autenticación en español (u otros locales si los agregas)
];

const isOnRutasNOAccesiblesSiEstaAutenticado = (onRoute: string) => {
  return rutasNoAccesiblesSiEstaAutenticado.some((authRoutes) =>
    onRoute.startsWith(authRoutes)  // Asegúrate de que la ruta comience con las rutas especificadas
  );
};


const isOnAuthenticatedRoutes = (onRoute: string) => {
  return authenticatedRoutes.some((authRoutes) =>
    onRoute.startsWith(authRoutes)
  );
};



 

export const authConfig:NextAuthConfig = {

  callbacks: {
    jwt({token,user}) {

      if(user) {
        token.data = user;
      }
      return token

    },
    session({session,token}) {
      session.user = token.data as any;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
    
      console.log("Ruta actual:", nextUrl.pathname);
      console.log("Usuario autenticado:", isLoggedIn);
    
      // Verificar si la ruta es una ruta no accesible si el usuario está autenticado
      if (isOnRutasNOAccesiblesSiEstaAutenticado(nextUrl.pathname)) {
        if (isLoggedIn) {
          return false;  // Si el usuario está autenticado, evitar acceso
        }
        return true;  // Si no está autenticado, permitir el acceso
      }
    
      // Lógica para otras rutas autenticadas y de administrador...
      if (isOnAuthenticatedRoutes(nextUrl.pathname)) {
        if (isLoggedIn) return true;
        return false;  // Redirigir si no está autenticado
      }
    
       
      return true;  // Permitir acceso a otras rutas
    },
  },



  pages: {
    signIn: '/auth',
    newUser: '/auth',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);


          console.log(credentials.email,credentials.password)

         if(!parsedCredentials.success) return null;


         const {email,password} = parsedCredentials.data;

          const user = await prisma.user.findUnique({
            where:{
              email:email.toLowerCase()
            }
          })

          if(!user) return null;

          if(!bcryptjs.compareSync(password,user.password)) return null;

          const {password: _,...rest} = user;

         return rest;
          
      },
    }),

  ]
}


export const {signIn,signOut,auth, handlers} = NextAuth(authConfig);