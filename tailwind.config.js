/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.45' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.55' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.65' }],
        '3xl': ['1.875rem', { lineHeight: '1.7' }],
        '4xl': ['2.25rem', { lineHeight: '1.75' }],
        '5xl': ['3rem', { lineHeight: '1.8' }],
        '6xl': ['3.75rem', { lineHeight: '1.85' }],
      },
      colors: {
        primary: {
          50: '#E6F2F7',
          100: '#CCE6EF',
          200: '#99CCE0',
          300: '#66B3D0',
          400: '#3399C0',
          500: '#1B78A6', // Primary Blue - 69%
          600: '#166287',
          700: '#114B68',
          800: '#0C3649',
          900: '#07212A',
        },
        accent: {
          50: '#FEF0EB',
          100: '#FDDED3',
          200: '#FBBDA7',
          300: '#F99C7B',
          400: '#F77B4F',
          500: '#F05A28', // Orange - 30%
          600: '#C04820',
          700: '#903618',
          800: '#602410',
          900: '#301208',
        },
        custom: {
          grey: '#3A3A3A', // Grey - 10%
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-delayed': 'fadeIn 1s ease-out 0.3s forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-up-delayed': 'slideUp 0.8s ease-out 0.2s forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
};
