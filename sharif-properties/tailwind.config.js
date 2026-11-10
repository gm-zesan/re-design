/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        brand: {
          navy: '#182952',
          navyDeep: '#08152a',
          cobalt: '#3F59A3',
          royal: '#0D47A1',
          slate: '#405886',
          blueTint: 'rgb(var(--color-blue-tint) / <alpha-value>)',
          magenta: '#AD206D',
          magentaDark: '#8A1755',
          magentaTint: 'rgb(var(--color-magenta-tint) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
          subtle: 'rgb(var(--color-ink-subtle) / <alpha-value>)',
        },
        hairline: 'rgb(var(--color-hairline) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px -2px rgba(24, 41, 82, 0.06), 0 1px 4px -1px rgba(17, 24, 39, 0.04)',
        elevated: '0 14px 32px -8px rgba(24, 41, 82, 0.14), 0 4px 12px -2px rgba(17, 24, 39, 0.06)',
      },
    },
  },
  plugins: [],
};
