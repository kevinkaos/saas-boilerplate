import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    tsconfigPaths()
  ],
})
