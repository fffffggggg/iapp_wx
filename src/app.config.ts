export default {
  pages: [
    'pages/index/index',
    'pages/feature/index',
    'pages/user/index',
    // 'pages/index/index'
  ],
  // 微信原生tabBar配置通过url跳转
  tabBar: {
    //字体颜色
    color: "#2c2c2c",
    // 选择后字体颜色
    selectedColor: "#1296db",
    //背景颜色
    backgroundColor: "#FFF",
    // 边框颜色
    borderStyle: 'black',
    list: [
      {
        iconPath: './icon/home.png',
        selectedIconPath: './icon/home-active.png',
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        iconPath: './icon/setting.png',
        selectedIconPath: './icon/setting-active.png',
        pagePath: "pages/feature/index",
        text: "功能"
      },
      {
        iconPath: './icon/user.png',
        selectedIconPath: './icon/user-active.png',
        pagePath: "pages/user/index",
        text: "用户"
      },
      // {
      //   pagePath: "pages/index/index",
      //   text: "test"
      // },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
