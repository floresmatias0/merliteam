import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation';
   
export const locales = ['en', 'es'] as const;
   
export const pathnames = {
    '/': '/',
} satisfies Pathnames<typeof locales>;
   
export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({locales, pathnames});