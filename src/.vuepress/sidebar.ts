import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "全部文章",
      icon: "laptop-code",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
  ],
});
