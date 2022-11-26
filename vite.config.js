import { fileURLToPath, URL } from "node:url";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  

  plugins: [vue(),
    createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
    symbolId: 'icon-[dir]-[name]',
  })],

  server: {
    proxy: {
      //当地址中包含/api时触发此代理
      '/api': {
        // target: 'https://jsonplaceholder.typicode.com',
        // target:'http://localhost:3000',
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true
      }  
    }
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/mixin.module.scss";'
      }
    }
  },

});


