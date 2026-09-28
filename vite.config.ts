import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Absolute base: this is a GitHub user page served from the domain root, and
  // relative "./" breaks asset URLs for nested routes like /writing/random-walk.
  base: "/",
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
