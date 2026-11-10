/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        alabaster: 'rgb(var(--color-alabaster) / <alpha-value>)',
        limestone: 'rgb(var(--color-limestone) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        stone: 'rgb(var(--color-stone) / <alpha-value>)',
        obsidian: '#141517',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        concrete: 'rgb(var(--color-concrete) / <alpha-value>)',
        crimson: {
          DEFAULT: '#B81D24',
          dark: '#93141A',
          soft: 'rgb(var(--color-crimson-soft) / <alpha-value>)',
          ink: 'rgb(var(--color-crimson-ink) / <alpha-value>)',
        },
        bronze: {
          DEFAULT: '#A67C52',
          light: '#C8A882',
          soft: 'rgb(var(--color-bronze-soft) / <alpha-value>)',
          ink: 'rgb(var(--color-bronze-ink) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 20px 50px -15px rgba(20, 21, 23, 0.08)',
        card: '0 10px 30px -12px rgba(20, 21, 23, 0.06)',
      },
    },
  },
  plugins: [],
};
