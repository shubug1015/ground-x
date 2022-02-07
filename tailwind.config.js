module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1439px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1279px' },
      // => @media (max-width: 1080px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(150px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
