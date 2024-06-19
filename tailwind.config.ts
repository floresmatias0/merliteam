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
        'merli-black' : '#070009',
        'merli-white' : '#ECE6EE',
        'merli-gray-dark' : '#212022',
        'merli-gray-light' : '#B19BB9',
        'merli-purple' : '#45025D',
        'merli-purple-dark' : '#270632',
        'merli-purple-light' : '#700796',
        'merli-cyan' : '#63C7F2',
      },
      backgroundImage: {
        'merli-gradient': 'linear-gradient(107deg, #0A0A0A 0%, #45025C 100%)',
        'text-gradient': 'linear-gradient(98deg, #ECE6EE -4.09%, #95C5DA 96.07%)',
        'text-gradient-dark': 'linear-gradient(123deg, #63C7F2 25.97%, #700796 93.27%)',
        'gradient-radial': 'radial-gradient(104.59% 91.52% at 50% -19.25%, #45025D 0%, #070009 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
