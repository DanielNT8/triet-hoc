/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Định nghĩa bảng màu Global Consensus
        background: "#0f172a", // Slate 900
        primary: "#fbbf24",    // Amber 400 (Gold)
        secondary: "#06b6d4",  // Cyan 500 (Tech)
        surface: "#1e293b",    // Slate 800 (Màu nền các thẻ card)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}