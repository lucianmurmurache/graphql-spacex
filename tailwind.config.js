module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 320px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    colors: {
      blue: '#0687cb',
      black: '#272727',
      white: '#ffffff',
      green: '#00FF00',
      gray: '#808080',
      red: '#FF0000',
    },
  },
  plugins: [],
};
