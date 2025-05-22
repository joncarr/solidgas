import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwind from '@tailwindcss/vite';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [solidPlugin(), tailwindcss()],
  server: {
    port: 3000,

  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined, // Prevents splitting into multiple chunks
        inlineDynamicImports: true, // Ensures all imports are bundled together
        entryFileNames: "app.js", // Sets the output JS filename
      },
    },
  },
});
