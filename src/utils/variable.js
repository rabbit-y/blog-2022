import IconFont from "@/components/component/Icon/index";
import config from "./config"

export const ROTER = [
  {
    key: "/mark",
    label: "Home",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/say",
    label: "日常",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/me",
    label: "关于我",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/comment",
    label: "友人帐",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/time",
    label: "建站",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/bilibili",
    label: "追番",
    icon: <IconFont type="h-bilibili1" />,
  },
]
export const ABOUTLINK = [
  {
    name: "wechat",
    icon: <IconFont type="h-wechat" />,
    image: `${config.COS_URL}blog/headers/wechat.png`,
  },
  {
    name: "qq",
    icon: <IconFont type="h-qq" />,
    image: `${config.COS_URL}blog/headers/qq.png`,
  },
  {
    name: "xiaochengxu",
    icon: <IconFont type="h-xiaochengxu" />,
    image: `${config.COS_URL}blog/headers/xcx.jpeg`,
  },
  {
    name: "gitee",
    icon: <IconFont type="h-gitee" />,
    url: "https://gitee.com/han96",
  },
  {
    name: "csdn",
    icon: <IconFont type="h-csdn" />,
    url: "https://blog.csdn.net/YanH_an",
  },
]
export const LISTENLIST = [
  {
    name: "雾里",
    artist: "姚六一",
    url: "http://music.163.com/song/media/outer/url?id=1815085049.mp3",
    cover:
      "https://p2.music.126.net/J9_j9s2faIKwn6oqwQV2Rw==/109951166153759329.jpg?param=130y130",
  }, {
    name: "哪里都是你",
    artist: "队长",
    url: "http://music.163.com/song/media/outer/url?id=488249475.mp3",
    cover: "https://p1.music.126.net/lnOnBbP_H-052Hv5ls-QjA==/109951162964628408.jpg?param=130y130"
  }, {
    name: "sub/objective",
    artist: "ぼくのりりっくのぼうよみ",
    url: "http://music.163.com/song/media/outer/url?id=39449876.mp3",
    cover: "https://p2.music.126.net/h5VzzM2EYJfAT3VuRvkNZg==/109951167355045086.jpg?param=130y130"
  }
]
export const TIMELINE = [{
  time: '2022-07-12',
  content: '又大改样式啦，自建博客就是在于一直折腾呀'
}, {
  time: '2022-06-25',
  content: '整体样式大改，添加留言以及评论回复功能'
}, {
  time: '2022-06-20',
  content: '添加文章评论回复功能'
}, {
  time: '2022-06-17',
  content: '修复KeepAlive导致带参数的路由白页问题'
}, {
  time: '2022-06-16',
  content: '更换统计方式，优化目录显示方式，更改日常展现方式（还是不满意...）'
}, {
  time: '2022-06-15',
  content: '优化手机端查看体验，增加媒体查询响应式设计，优化详情页骨架屏'
}, {
  time: '2022-06-14',
  content: '添加APlayer音乐播放器，添加关于我页面，添加文档目录功能'
}, {
  time: '2022-06-13',
  content: '添加文档一级评论功能,修复文档列表缓存问题'
}, {
  time: '2022-06-07',
  content: '添加友链功能，添加插件网站推荐页面'
}, {
  time: '2022-05-26',
  content: '添加站长相关资料，修改文档详情markdowm预览插件'
}, {
  time: '2022-02-23',
  content: '日常功能调整'
}, {
  time: '2022-02-22 ',
  content: '添加文档删除、更新等功能'
}, {
  time: '2022-01-04',
  content: '博客整体架构'
}]
export const JSLIST = [{
  name: 'Html5',
  dec: '常用的就那么几个',
  percent: '80'
}, {
  name: 'Css3',
  dec: 'Css+Less+Sass',
  percent: '80'
}, {
  name: 'JavaScript',
  dec: '基础知识',
  percent: '70'
}, {
  name: 'jQuery',
  dec: 'Js的简单用法',
  percent: '90'
}, {
  name: 'TypeScript',
  dec: 'Js语法糖(变得更像java了)',
  percent: '50'
}, {
  name: 'React',
  dec: 'hooks+router+redux+next.js',
  percent: '70'
}, {
  name: 'Vue',
  dec: 'vue3+router+pinia',
  percent: '70'
}, {
  name: 'UI框架',
  dec: 'Antd+BootStrap+LayUI+ElementUI',
  percent: '70'
}, {
  name: '微信小程序',
  dec: '原生+Taro+uni-app',
  percent: '70'
}, {
  name: '代码管理工具',
  dec: 'Git+svn',
  percent: '60'
}, {
  name: '包管理工具',
  dec: 'npm+pnpm+yarn',
  percent: '60'
}, {
  name: '构建工具',
  dec: 'webpack+babel+rollup',
  percent: '30'
}, {
  name: '数据可视化',
  dec: 'EChart+antv g2',
  percent: '40'
}]