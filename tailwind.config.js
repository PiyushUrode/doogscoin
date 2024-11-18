/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Comic Sans MS', 'cursive', 'sans-serif'], // Apply Comic Sans globally
      },

      screens: {
        // Reuse Tailwind's default breakpoints
        sm:  '550px',  
        md:  '768px' , 
        lg:  '1024px', 
        xl:  '1280px',
      },
      lineHeight: {
        normal: '1.5',
        relaxed: '1.8',
        tight: '1.2',
      },
      boxShadow: {
        'inner-custom-head': 'inset 0 0 10px #000000', // Custom inner shadow
      },
    },
  },
  plugins: [],
};
