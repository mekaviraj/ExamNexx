import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0b1020',
        panel: '#121a33',
        accent: '#f97316',
        highlight: '#fde68a',
      },
      boxShadow: {
        glow: '0 0 40px rgba(249, 115, 22, 0.24)',
      },
    },
  },
  plugins: [],
};

export default config;
