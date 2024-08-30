/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        'rubik-b': ['Rubik-bold'],
        'barlow': ['barlow'],
        'barlow-m': ['barlow-m'],
        'roboto': ['roboto'],
        'myriad': ['myriad'],
        'poppins': ['poppins'],
        'poppins-l': ['poppins-l'],
        'poppins-m': ['poppins-m'],
        'poppins-sb': ['poppins-sb'],
        'poppins-b': ['poppins-b'],
        'nunito': ['nunito'],
      },

      screens: {
        'xs': '440px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        

        'tablet': '959px',

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      
      }

    },
  },
  plugins: [],
};
