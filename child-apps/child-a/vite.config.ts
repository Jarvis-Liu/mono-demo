import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8810
  },
  plugins: [vue()],
  css: {},
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {}
})
