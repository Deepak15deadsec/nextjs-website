/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				sans: ['var(--font-open_sans)']
			}
    },
  },
  plugins: [
    require('tailwind-clip-path')
  ],

  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1601px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1701px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}
