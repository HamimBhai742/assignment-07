/** @type {import('tailwindcss').Config} */

import daisyui from './node_modules/daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'header' : "url('./public/d57b5fb5ad84c9f6a9b1eb9782e9b11b.jpg')"
        }
    },
  },
  plugins: [daisyui],
}

