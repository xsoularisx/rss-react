import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig as defineVitestConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    include: ['**/*.test.tsx', '**/*.spec.tsx'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,tmp}/**',
    ],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.tsx'],
    },
    typecheck: {
      include: ['src/**/*.tsx'],
    },
  },
})