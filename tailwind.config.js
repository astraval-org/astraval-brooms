import tailwindcss from 'tailwindcss';

export default tailwindcss({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brown-dark': '#2C1810',
        'brown-medium': '#8B4513', 
        'brown-light': '#D2691E',
      }
    },
  },
});