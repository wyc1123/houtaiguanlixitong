import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
// import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 144,
          propList: ['*'],
        })
      ]
    }
  },
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
      // additionalData: `@injectedColor: orange;` // 全局变量
      additionalData: `@import "/src/assets/common.less";`,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
