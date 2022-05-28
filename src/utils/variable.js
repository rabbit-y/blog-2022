module.exports = {
  ICON_URL: '//at.alicdn.com/t/font_3116948_xpcvu2a7pw.js',

  STATION: {
    name: '花贝の碎碎念',
    dec: 'The tough road often leads to the top. 艰难的道路经常通往高处',
    putOnRecord: '京ICP备2021005859号'
  },

  ROTER: [
    {
      key: '/index',
      label: '首页'
    }, {
      key: '/mark',
      label: '通往学习的大门',
    }, {
      key: '/bilibili',
      label: '追番',
    }
  ],
  ADMINOTER: [
    {
      key: '/admin',
      label: '首页'
    }, {
      key: 'profile',
      label: '用户管理',
      children: [{ label: '站长资料', key: '/admin/profile' }]
    }, {
      key: 'mark',
      label: '文档',
      children: [
        { label: '碎碎念', key: '/admin/say' },
        { label: '文档', key: '/admin/mark' }
      ]
    }, {
      key: 'classify',
      label: '参数管理',
      children: [
        { label: '分类管理', key: '/admin/classify' }
      ]
    }
  ],
  ABOUTLINK: [

    {
      name: 'wechat',
      icon: 'h-wechat',
      image: 'https://cos.han96.com/blog/headers/wechat.png',
    },
    {
      name: 'qq',
      icon: 'h-qq',
      image: 'https://cos.han96.com/blog/headers/qq.png'
    },
    {
      name: 'xiaochengxu',
      icon: 'h-xiaochengxu',
      image: 'https://cos.han96.com/blog/headers/xcx.jpeg'
    },
    {
      name: 'gitee',
      icon: 'h-gitee',
      url: 'https://gitee.com/han96'
    },
    {
      name: 'csdn',
      icon: 'h-csdn',
      url: 'https://blog.csdn.net/YanH_an'
    },
    {
      name: 'bilibili',
      icon: 'h-bilibili',
      url: 'https://space.bilibili.com/458066744'
    }
  ]

}