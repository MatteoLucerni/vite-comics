import { defineConfig } from 'vite';
import '@fontsource-variable/open-sans';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
