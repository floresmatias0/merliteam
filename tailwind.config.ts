import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'merli-black': '#070009',
        'merli-white': '#ECE6EE',
        'merli-gray-dark': '#212022',
        'merli-gray-light': '#B19BB9',
        'merli-purple': '#45025D',
        'merli-purple-dark': '#270632',
        'merli-purple-light': '#700796',
        'merli-cyan': '#63C7F2',
      },
      backgroundImage: {
        'merli-gradient': 'linear-gradient(107deg, #0A0A0A 0%, #45025C 100%)',
        'text-gradient': 'linear-gradient(98deg, #ECE6EE -4.09%, #95C5DA 96.07%)',
        'text-gradient-dark': 'linear-gradient(123deg, #63C7F2 25.97%, #700796 93.27%)',
        'gradient-radial': 'radial-gradient(104.59% 91.52% at 50% -19.25%, #45025D 0%, #070009 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-sky': 'linear-gradient(90deg, #63C7F2, #700796)',
        'gradient-hexa': 'linear-gradient(2566665deg, rgba(7, 0, 9, 0.7) 0%, rgba(112, 7, 150, 0.9) 180%)',
        'titleAction': 'linear-gradient(90deg, #ECE6EE, #95C5DA)'
      },
      boxShadow: {
        'custom': '0 0 0 5px #63C7F2, 0 0 0 5px #700796',
      },
      spacing: {
        '18': '4.5rem',
        '20': '5.5rem',
        '22': '6.5rem',
        '24': '7.5rem',
        '26': '8.5rem',
      },
      inset: {
        '-30': '-8rem',
      },
    },
  },
  plugins: [],
};
export default config;
