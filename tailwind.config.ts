/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: { primary: { DEFAULT: '#7C3AED', 400:'#8B5CF6', 500:'#7C3AED' } },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.08)', glow: '0 0 40px rgba(124,58,237,0.35)' },
      backgroundImage: {
        radial: 'radial-gradient(1200px 600px at 90% -10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(800px 400px at -10% 10%, rgba(6,182,212,0.15), transparent 60%)'
      }
    },
  },
  plugins: [],
}
