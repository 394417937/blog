import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'lhh-blog',
  description: 'lhh-blog',
  base: '/blog/',
  search: {
    provider: 'local',
    options: {
      appId: 'N4PPOJUU2J',
      apiKey: '7262b96eaf6386ad00713b4da6452ab6',
      indexName: '<INDEX_NAME>'
    }
  },

  themeConfig: {
    logo: '/assets/logo.jpg',
    // https://vitepress.dev/reference/default-theme-config

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: 'Vue2',
            link: '/leadingEnd/Vue2/index.md'
          },
          {
            text: 'Vue3',
            link: '/leadingEnd/Vue3/index.md'
          }
        ]
      },
      {
        text: '生活碎片',
        items: [
          {
            text: '美食',
            link: '/life/food/index.md'
          },
          {
            text: '猫猫',
            link: '/life/cat/index.md'
          }
        ]
      },
      { text: '关于', link: '/about/index.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/394417937' },
      {
        icon: {
          svg: '<svg t="1754451477462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4461" width="200" height="200"><path d="M512 1024q-104 0-199-40-92-39-163-110T40 711Q0 616 0 512t40-199Q79 221 150 150T313 40q95-40 199-40t199 40q92 39 163 110t110 163q40 95 40 199t-40 199q-39 92-110 163T711 984q-95 40-199 40z m259-569H480q-10 0-17.5 7.5T455 480v64q0 10 7.5 17.5T480 569h177q11 0 18.5 7.5T683 594v13q0 31-22.5 53.5T607 683H367q-11 0-18.5-7.5T341 657V417q0-31 22.5-53.5T417 341h354q11 0 18-7t7-18v-63q0-11-7-18t-18-7H417q-38 0-72.5 14T283 283q-27 27-41 61.5T228 417v354q0 11 7 18t18 7h373q46 0 85.5-22.5t62-62Q796 672 796 626V480q0-10-7-17.5t-18-7.5z" p-id="4462"></path></svg>'
        },
        link: 'https://gitee.com/li-haha-yang'
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present li-haha-yang'
    }
  }
})
