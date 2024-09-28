/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'false',
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ['Montserrat'],
      Fraunces: ['Fraunces']
    },
    daisyui: {
      themes: ["light"],
    },
  },
  plugins: [
    require('daisyui'),
    
  ],
}

