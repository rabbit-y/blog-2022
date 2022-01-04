module.exports = {
  ICON_URL: '//at.alicdn.com/t/font_3116948_al2tgy4lq6h.js',

  STATION: {
    name: '花呗の',
    dec: 'he tough road often leads to the top. 艰难的道路经常通往高处',
    putOnRecord: '京ICP备2021005859号'
  },
  USER: {
    name: '@Blue',
    header: 'https://img2.baidu.com/it/u=395719964,2145680590&fm=26&fmt=auto',
    dec: '一个社恐的人'
  },

  ROTER: [
    {
      key: 'index',
      path: '/index',
      name: '首页',
      child: []
    }, {
      key: 'index',
      path: '/web',
      name: '小前端',
      child: [{
        key: 'pmp',
        path: '/web',
        name: 'PMP',
      }, {
        key: 'xcx',
        path: '/web',
        name: '小程序',
      }]
    }, {
      key: 'say',
      path: '/say',
      name: '碎碎念',
    }, {
      key: 'bilibili',
      path: '/bilibili',
      name: '追番',
    }
  ]

}