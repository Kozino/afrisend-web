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
        'afrisend-dark': '#1a3a3a',
        'afrisend-teal': '#0d7377',
        'afrisend-light-teal': '#14919b',
        'afrisend-green': '#2d5a5a',
      },
    },
  },
  plugins: [],
}