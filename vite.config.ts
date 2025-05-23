import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    glsl({
      include: [
        '**/*.glsl',
        '**/*.vs',
        '**/*.fs',
        '**/*.vert',
        '**/*.frag'
      ]
    }),
  ],
  resolve: {
    alias: {
      '@sections': path.resolve(__dirname, './src/components/Sections'),
      '@previews': path.resolve(__dirname, './src/previews'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@detailes': path.resolve(__dirname, './src/components/Detailes'),
      '@r3f': path.resolve(__dirname, './src/components/r3f'),
      '@shaders': path.resolve(__dirname, './src/shaders'),
    }
  }
})
