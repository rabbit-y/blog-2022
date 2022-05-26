module.exports = {
  ICON_URL: '//at.alicdn.com/t/font_3116948_7fy7fumk4v6.js',

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
      name: 'gitee',
      icon: 'h-gitee',
      url: 'https://gitee.com/han96'
    }
  ]

}