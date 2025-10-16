import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
