/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/(tabs)/home.tsx", "./components/**/*.{tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

