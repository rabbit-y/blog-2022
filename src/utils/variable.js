import IconFont from "@/components/component/Icon/index";

export const ROTER = [
  {
    key: "/mark",
    label: "通往学习的大门",
    icon: <IconFont type="h-caihong" />,
  },
  {
    key: "/say",
    label: "碎碎念",
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
    image: "https://cos.han96.com/blog/headers/wechat.png",
  },
  {
    name: "qq",
    icon: <IconFont type="h-qq" />,
    image: "https://cos.han96.com/blog/headers/qq.png",
  },
  {
    name: "xiaochengxu",
    icon: <IconFont type="h-xiaochengxu" />,
    image: "https://cos.han96.com/blog/headers/xcx.jpeg",
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