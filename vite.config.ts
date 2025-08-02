import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// ESM uyumlu Vite config
export default defineConfig({
  plugins: [react()],
})