## Vite + Tailwind css V4.1
 - npm create vite@latest .
 - npm run dev
 - npm install tailwindcss @tailwindcss/vite

## vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
## index.css
@import "tailwindcss";
## Thư viện cần cài
  - npm i react-router-dom
