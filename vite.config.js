import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/brew-and-bites/",
  plugins: [react()],
  build:{
    rollupOptions: {
        input: 'index.html',
    },
  },
});
