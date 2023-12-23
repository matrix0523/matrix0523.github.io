import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "home",
    link: "/",
  },//主页
  {
    text: "全部文章",
    icon: "pen-to-square",
    link: "/posts/",
  },
  {
    text: "精选文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Java编程",
        icon: "pen-to-square",
        prefix: "java-program/",
        children: [
          { 
            text: "Java编程1", 
            icon: "pen-to-square", 
            link: "1" 
          },
          { 
            text: "Java编程2", 
            icon: "pen-to-square", 
            link: "2" 
          },
          { 
            text: "Java编程3", 
            icon: "pen-to-square", 
            link: "3" 
          },
          { 
            text: "Java编程4", 
            icon: "pen-to-square", 
            link: "4" 
          },
        ],
      },
      {
        text: "C++",
        icon: "pen-to-square",
        prefix: "cpp/",
        children: [
          {
            text: "C++编程1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "C++编程2",
            icon: "pen-to-square",
            link: "2",
          },
          {
            text: "C++编程3",
            icon: "pen-to-square",
            link: "3",
          },
          {
            text: "C++编程4",
            icon: "pen-to-square",
            link: "4",
          },
        ],
      },
      {
        text: "Linux",
        icon: "pen-to-square",
        prefix: "linux/",
        children: [
          {
            text: "Linux运维1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Linux运维2",
            icon: "pen-to-square",
            link: "2",
          },
          {
            text: "Linux运维3",
            icon: "pen-to-square",
            link: "3",
          },
          {
            text: "Linux运维4",
            icon: "pen-to-square",
            link: "4",
          },
        ],
      },
    ],
  },
  {
    text: "关于我",
    icon: "circle-info",
    link: "posts/profile/README.md",
  },
]);
