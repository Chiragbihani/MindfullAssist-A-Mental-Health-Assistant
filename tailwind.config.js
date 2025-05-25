/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFE',
          200: '#BAD7FB',
          300: '#90BCF9',
          400: '#65A0F6',
          500: '#4A90E2', // Primary blue
          600: '#3B73C5',
          700: '#2C56A8',
          800: '#1E3A8A',
          900: '#10254D',
        },
        secondary: {
          50: '#EDFAF4',
          100: '#DBF5E9',
          200: '#B7EBD3',
          300: '#8FDFB7',
          400: '#67D49B',
          500: '#50C878', // Calm green
          600: '#3AA661',
          700: '#25844A',
          800: '#156232',
          900: '#0A411F',
        },
        accent: {
          50: '#F4F1FB',
          100: '#E9E2F7',
          200: '#D3C6EF',
          300: '#BCAAE7',
          400: '#A38FDE',
          500: '#8A7FBE', // Gentle purple
          600: '#7063A7',
          700: '#56488F',
          800: '#3D3078',
          900: '#241B50',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0, 0, 0, 0.05)',
        card: '0 4px 20px rgba(0, 0, 0, 0.07)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};