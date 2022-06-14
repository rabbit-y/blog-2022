import IconFont from "@/components/component/Icon/index";
import config from "./config"

export const ROTER = [
  {
    key: "/mark",
    label: "首页",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/say",
    label: "日常",
    icon: <IconFont type="h-caihong" />,
  },
  // {
  //   key: "/comment",
  //   label: "飞机票",
  //   icon: <IconFont type="h-caihong" />,
  // },
  {
    key: "/plugins",
    label: "工具",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/me",
    label: "关于我",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/bilibili",
    label: "追番",
    icon: <IconFont type="h-bilibili1" />,
  },
]
export const ADMINOTER = [
  {
    key: "/admin",
    label: "首页",
  },
  {
    key: "profile",
    label: "用户管理",
    children: [{ label: "站长资料", key: "/admin/profile" }],
  },
  {
    key: "mark",
    label: "文档",
    children: [
      { label: "碎碎念", key: "/admin/say" },
      { label: "文档", key: "/admin/mark" },
    ],
  },
  {
    key: "classify",
    label: "参数管理",
    children: [{ label: "分类管理", key: "/admin/classify" }],
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
      "http://p2.music.126.net/J9_j9s2faIKwn6oqwQV2Rw==/109951166153759329.jpg?param=130y130",
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