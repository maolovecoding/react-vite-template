import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 配置自动导入
    AutoImport({
      imports: ["react"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量，
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
        这种格式
         */
        // additionalData: '@import "@/assets/scss/globalVariable.scss";',
      },
    },
  },
});
