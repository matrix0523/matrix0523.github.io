import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: './dist',  
  lang: "zh-CN",
  title: "Matrix0523's Blog",
  description: "Matrix0523的博客",
    // dev配置项 指定开发服务器的主机名
    // host: 'localhost',
    // 指定开发服务器的端口默认8080
    port: 9003,
  theme,
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./logo.png` }]
  ],


      //在这里配置插件
      plugins: [
      ],
});
