/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#035c67',
        accent: '#3EFFC0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'], // ✅ Add this line
      },
      animation: {
        gradient: 'gradient-x 6s ease infinite',
        text: 'text 5s ease infinite', // ✅ Combine animations here
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },      
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
