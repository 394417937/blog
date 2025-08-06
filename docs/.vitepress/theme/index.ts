// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // h函数
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

// 组件
import bsz from './components/bsz.vue'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 指定组件使用layout-bottom插槽
      'layout-bottom': () => h(bsz)
    })
  },

  // 不蒜子
  enhanceApp({ app, router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  }
}
