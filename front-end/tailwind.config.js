/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#F9ED32',
        'yellow-2': '#F2D335',
        'yellow-3': '#D9BD32',
        'black': '#000000',
        'grey': '#7C838A',
        'grey-2': '#E6F3FF',
        'gray-dark': '#B0BAC3',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
