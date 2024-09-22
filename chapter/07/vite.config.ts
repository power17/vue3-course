import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  base: './',
  plugins: [vue(), vueJsx()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  }
});
