"use server"

import { signIn } from '@/auth.config'; // Asegúrate de que esto esté correctamente configurado

export async function authenticate(prevState: string | undefined, {email,password} : {email: string, password: string}) {
  try {
    console.log("Datos del formulario enviados a authenticate:", email,password);

    // Ejecutar el proceso de inicio de sesión
    const result = await signIn('credentials', {
      email,  // Pasamos el email directamente
      password,  // Pasamos la contraseña directamente
      redirect: false,  // Evitar redirección automática, lo manejamos manualmente
    });
      
    console.log("Resultado de signIn:", result); // Verifica qué está devolviendo el método signIn

    // Verificar el resultado del signIn
    if (result?.error) {
      console.log("Error en signIn:", result.error);

      // Si hay un error en el inicio de sesión, manejarlo aquí
      if (result.error === 'CredentialsSignin') {
        return 'CredentialsSignIn';  // Error por credenciales incorrectas
      } else {
        return 'UnknownError';  // Otro tipo de error
      }
    }

    // Si no hay errores, el inicio de sesión fue exitoso
    return 'Success';

  } catch (error) {
    console.error("Error inesperado en la autenticación:", error);
    return 'UnknownError';  // En caso de cualquier otro error no esperado
  }
}
