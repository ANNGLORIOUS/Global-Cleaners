import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
        bai: ['"Bai Jamjuree"', 'sans-serif'],
      },
      colors: {
        primary: "#0A3D2E",       // Deep Emerald
        accent: "#D4AF37",        // Warm Gold
        background: "#F5FCFF",    // Light Blue-White
        card: "#FFFFFF",          // Clean White
        muted: "#e2e8f0",         // Soft Gray
        darktext: "#2E2E2E",      // Deep Charcoal
        success: "#10B981",       // Emerald Green for Buttons
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})