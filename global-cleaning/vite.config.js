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
        primary: "#0A3D2E",       
        accent: "#D4AF37",        
        background: "#F5FCFF",    
        card: "#FFFFFF",          
        muted: "#e2e8f0",         
        darktext: "#2E2E2E",      
        success: "#10B981",       
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})