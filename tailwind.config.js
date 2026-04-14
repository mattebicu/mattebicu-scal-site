/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        scal: {
          navy: '#0A1D37',   // Blu SCAL 
          azure: '#00AEEF',  // Azzurro Consulenze 
        }
      },
    },
  },
  plugins: [],
}