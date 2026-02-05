
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Si tu repo en GitHub es 'usuario.github.io/mi-cv', el base debe ser '/mi-cv/'
// Si es 'usuario.github.io', el base debe ser '/'
export default defineConfig({
  plugins: [react()],
  base: '/online-cv/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
