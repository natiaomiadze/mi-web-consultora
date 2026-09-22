/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f5f1',
          100: '#dcebe2',
          200: '#bbd7c9',
          300: '#8fbb9f',
          400: '#5e9873',
          500: '#3a7d56',
          600: '#286642',
          700: '#1B4332',
          800: '#163a2b',
          900: '#0f2a20',
        },
        sand: {
          50: '#fdf9ef',
          100: '#faf0d7',
          200: '#f4e0a8',
          300: '#edd079',
          400: '#E9C46A',
          500: '#e0b34d',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e0e0e0',
          200: '#c4c4c4',
          300: '#9a9a9a',
          400: '#6e6e6e',
          500: '#4a4a4a',
          600: '#3a3a3a',
          700: '#2a2a2a',
          800: '#1A1A1A',
          900: '#0d0d0d',
        },
        light: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
