"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"
import { authenticate } from "@/actions/auth/login";
import { registerUser } from "@/actions/auth/register";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LoginForm() {

  const { data: session } = useSession();
  const roouter = useRouter();

  useEffect(() => {
  if (session != null) {
    router.push("/");
  } else {
    console.log("Usuario no autenticado");
  }
}, [session, roouter]);









  const searchParams = useSearchParams();  // Usamos esto para manejar los locales

  const [isLoginFormActive, setIsLoginFormActive] = useState<boolean>(true);

  // Estados para capturar los valores de los inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  // Función para validar los inputs
  function validateInputs() {
    const emailRegex = /\S+@\S+\.\S+/;
  
    if (!email || !password) {
      setErrorMessage("Por favor, completa todos los campos.");
      setIsError(true);
      return false;
    }
  
    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, ingresa un email válido.");
      setIsError(true);
      return false;
    }
  
    setErrorMessage("");
    setIsError(false);
    return true;
  }
  






  // Función para manejar el submit del formulario de login
  async function handleLogin(event: React.FormEvent) {




    event.preventDefault(); // Evita que la página se recargue
    
   // await registerUser("nico","hola@gmail.com","123456")
    
    if (validateInputs()) {
       console.log(email,password)
 
      try {
        // Aquí haces la lógica de autenticación llamando a la función `authenticate`
        
       
        
        const result = await authenticate(undefined, {email, password});
        
        if (result === "Success") 
          {
               const redirectTo =  '/'
               console.log(session)
             // router.replace('/') Esta redirección sirve para que no se pueda volver a la página de login y que tampoco se pueda volver a la página de login con el botón de atrás del navegador  
              window.location.replace(redirectTo) //esto lo hago pq sino el sidebar no se actualiza
          } 
         else if (result === "CredentialsSignIn") {
          setErrorMessage("Credenciales inválidas");
          setIsError(true);
        } 
        else {
          setErrorMessage("Error desconocido");
          setIsError(true); 
        }
      } catch (error) {
        setErrorMessage("Error al autenticar");
        setIsError(true); 
      }
    }   
  }

  return (
    <div className="flex flex-col items-center h-[400px]  w-[500px] bg-white rounded-lg shadow-lg p-6 border-violet-950">
       
        <div>
          <div className="p-2 flex items-center justify-center">
            <h3 className="font-bold text-[40px] text-black">Inicio de sesión</h3>
          </div>
          {/* Separador */}
        <div className="flex items-center mt-2">
            <div className="flex-1 border-t border-gray-500"></div>
            <div className="px-2 text-gray-800">O</div>
            <div className="flex-1 border-t border-gray-500"></div>
        </div>
        {/*Fin separador*/}
          <form onSubmit={handleLogin} className="mt-2">
            <div className="flex flex-col gap-7">
              <input
                 
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Captura el valor del input
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Captura el valor del input
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="p-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-300"
              
              >
                Login
              </button>
            </div>
          </form>

              <div className="flex justify-center items-center">
              <p>
                {isError && (
                 <span className="text-red-500 text-sm">{errorMessage}</span>
              )}
            </p>
              </div>
          
        </div>
       
    </div>
  );
  }
