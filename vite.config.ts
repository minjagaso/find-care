import path from 'path'
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.d.ts', 'src/**/*.stories.ts', 'src/mocks', 'src/stories'],
      all: true,
    }
  },
})
