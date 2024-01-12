/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'primary': '#3C5BFA'
      },
      colors: {
        'primary': '#3C5BFA'
      },
      backgroundColor: {
        'primary': '#3C5BFA'
      },
      borderColor: {
        'primary': '#3C5BFA'
      }
    },
  },
  plugins: [],
}
