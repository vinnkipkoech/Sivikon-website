/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cohesive Enterprise Color Palette
        navy: '#091124',        // Main canvas dark background color[cite: 1]
        navy2: '#0e1a34',       // Lighter card/panel background layout element[cite: 1]
        blueCustom: '#1558d6',  // Premium brand primary blue[cite: 1]
        blue2: '#0f40a1',       // Deep action hover blue configuration[cite: 1]
        cyanCustom: '#00f0ff',  // High-contrast neon feature accent indicator[cite: 1]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))',
        
        // Premium brand mesh gradient utility mapped directly to your design system tokens
        'mesh-glow': 'radial-gradient(at 0% 0%, rgba(21,88,214,0.12) 0px, transparent 50%), radial-gradient(at 50% 0%, rgba(15,64,161,0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0,240,255,0.06) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}