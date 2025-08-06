---
layout: home

hero:
  name: lhh-blog
  text: Welcome to my personal blog.
  tagline: 前端 知识体系地图
  image:
    src: /assets/logo.jpg
    alt: logo
  actions:
    - theme: brand
      text: 前端启动!!!
      link: /leadingEnd/index.md
    - theme: alt
      text: GitHub
      link: https://github.com/vuejs/vitepress

# 按钮下方的描述
features:
  - icon:
      src: /assets/coder.svg
      alt: coder
    title: Web前端
    details: 平平无奇搬砖程序员。
  - icon:
      src: /assets/cat.svg
      alt: cat
    title: 喜欢猫猫
    details: 养了三只猫：大哥-果冻，二弟-点点，三妹-砂糖。
  - icon:
      src: /assets/youth.svg
      alt: youth
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
