import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'vuepress-theme-reco',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'sunyu',
    // docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    // docsBranch: 'main',
    // docsDir: 'example',
    // autoSetCategory: true,         // 自动设置分类
    // autoAddCategoryToNavbar: true,  // 自动将首页、分类和标签添加至头部导航条
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/blogs/record/': [
        {
          text: '记录',
          children: [
            { text: '2022-06-17', link: '/blogs/record/2022-06-17.md' },
            { text: '2022-06-18', link: '/blogs/record/2022-06-18.md' },
          ]
        }
      ]
    },
    navbar:
      [
        { text: 'Home', link: '/' },
        {
          text: 'Docs',
          children: [
            { text: 'vuepress-reco', link: '/docs/theme-reco/theme' }
          ]
        },
      ]
  })
  // debug: true,
})
