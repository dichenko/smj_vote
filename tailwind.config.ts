import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'py-2',
    'px-3',
    'px-4',
    'px-6',
    'py-3',
    'mb-2',
    'mb-4',
    'mb-6',
    'mb-8'
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      fontWeight: {
        bold: '700',
      },
    },
  },
  plugins: [],
};

export default config; 