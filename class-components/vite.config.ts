import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig as defineVitestConfig } from 'vitest/config'
console.log(configDefaults, defineVitestConfig)

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    include: ['**/*.test.tsx', '**/*.spec.tsx'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    typecheck: {
      include: ['src/**/*.tsx'],
    },
  },
})