import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.js', '**/*.spec.js'],
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})