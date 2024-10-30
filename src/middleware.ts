import createMiddleware from 'next-intl/middleware';
import { locales, pathnames } from './navigation';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames  // Este parámetro es para manejar las rutas con localización
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es)/:path*']
};
