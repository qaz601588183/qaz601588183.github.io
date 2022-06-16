module.exports = {
  //...省略部分代码`
  title: '一点一滴都是进步',
  theme: 'reco',// 黑夜主题
  //下面涉及到的md文件和其他文件的路径下一步再详细解释
  themeConfig: {
    logo: './tianqi.png',  //网页顶端导航栏左上角的图标
    base: '/', //设置站点根路径
    dest: './dist', //设置输出目录
    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },
      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: '分类',  //默认显示
        ariaLabel: '分类',   //用于识别的label
        items: [
          { text: '记录', link: '/pages/record/html.md' },
          //点击标签会跳转至link的markdown文件生成的页面
          { text: 'ts', link: '/pages/typeScript/baseType.md' }
        ]
      },
      //格式三：跳转至外部网页，需http/https前缀
      { text: 'Github', link: 'https://github.com/dwanda' }
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/record/': [
        {
          title: '记录',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          children: [
            ['2022-06-17.md', '如何实现(a == 1 && a == 2 && a == 3)?'],
          ]
        }
      ]
      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}
