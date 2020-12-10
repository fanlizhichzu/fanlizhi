module.exports = {
  // base: "/fanlizhi/", //目录根地址，应与Github仓库名字相同
  title: "VuePress + GithubPages + TravisCI", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "创建 VuePress + GithubPages + TravisCI 在线文档", // meta 中的描述文字，用于SEO
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ], //在移动端，搜索框在获得焦点时会放大
  ],

  //markdown扩展
  markdown: {
    lineNumbers: true //是否在每个代码块的左侧显示行号
  },

  theme: 'vuepress-theme-reco', //默认主题配置
  themeConfig: {
    type: "blog", //选择类型博客
    fullscreen: true,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    //导航栏
    nav: [
      //链接页面链接的根地址为/docs
      { text: "主页", link: "/", icon: "reco-home" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      { text: "订阅", link: "https://tsanfer.xyz/rss.xml", icon: "reco-rss" },
      {
        text: "工具",
        icon: "reco-api",
        items: [
          {
            text: "个人网盘",
            link: "http://clouddisk.tsanfer.xyz:8081",
            icon: "reco-account",
          },
          {
            text: "第三方网易云播放器",
            link: "http://clouddisk.tsanfer.xyz/YesPlayMusic/",
            icon: "reco-menu",
          },
          {
            text: "订阅转换器",
            link: "https://tsanfer.xyz/sub-web/",
            icon: "reco-menu",
          },
        ],
      },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/Tsanfer",
            icon: "reco-github",
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/qq_27961843/",
            icon: "reco-csdn",
          },
          {
            text: "BiliBili",
            link: "https://space.bilibili.com/12167681",
            icon: "reco-bilibili",
          },
          {
            text: "QQ",
            link: "tencent://message/?uin=1124851454",
            icon: "reco-qq",
          },
          {
            text: "Twitter",
            link: "https://twitter.com/a1124851454",
            icon: "reco-twitter",
          },
          {
            text: "Gmail",
            link: "mailto:a1124851454@gmail.com",
            icon: "reco-mail",
          },
        ],
      },
    ],
    sidebar: "auto", //在所有页面中启用自动生成侧栏

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "fanlizhichzu/fanlizhi",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",
    // 以下为可选的编辑链接选项
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "main",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "在 Github 上编辑此页",

    startYear: "2020", // 项目开始时间，只填写年份
    lastUpdated: "最后更新时间", // string | boolean
    smooth: "true", //平滑滚动

    mode: "light", //默认显示白天模式

    codeTheme: "okaidia", // default 'tomorrow'
    author: "fanlizhi",
    authorAvatar: "/avatar.svg", //作者头像
  },

  search: true,
  searchMaxSuggestions: 10, // 插件
  plugins: [
    [
      'meting',
      {
        auto: "https://music.163.com/#/playlist?id=2539599584"
      }
    ],
    [
      "social-share", //分享插件
      {
        networks: ["qq", "weibo", "twitter", "facebook", "email"], //分享类型
        email: "a1124851454@gmail.com", //email地址
        twitterUser: "a1124851454", //Twitter账号
      },
    ],
    ["flowchart"], // 支持流程图
    // ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-code-copy", true], //一键复制代码插件
  ],
};
