import { Divider, Form, Input, Button } from "antd";
import moment from "moment";
import { useState } from "react";
import { api } from "../../../api/index";
import IconFont from "../../component/Icon/index";
import "./index.less";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 },
};
const Dtl = () => {
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(false);
  const onFinish = async (values) => {
    console.log(values);
    const data = await api.other.doLogin.request(null, {
      data: values,
    });
    console.log(data);
  };
  return (
    <div className="mark-dtl">
      <div className="mark-dtl-all">
        <h1>文章标题</h1>
        <div className="mark-dtl-title">
          <IconFont type="h-shijian" />
          2022-01-04
          <Divider type="vertical" />
          <IconFont type="h-wenjianjia" />
          PMP
        </div>
        <div className="mark-dtl-cont">
          -- hi~你终于发现我啦 -- 关于我
          这是一个从2018年开始经历社会毒打的前端开发从业者
          五音不全但是喜欢唱歌，日常手抖但是喜欢画画，审美为零但是喜欢摄影
          喜欢游戏，喜欢喜剧，喜欢动漫，喜欢小说，因为喜欢的太多啦，所以导致做什么事都只有三分钟的热度~
          蟹蟹你能在互联网的大海中抓住正在冲浪的我 所以我们的故事就从今天开始吧
          ——————————————
          最后：Blue不是我的名字是我家小鹦鹉的名字，借用只是因为比较好记
          关于站点 其实从接触代码的那一刻我就开始捣鼓自己的个人博客了
          第一版博客是用hexo+github搭建的，那时候才刚接触前端开发几个月，只写了如何搭建的教程放在上面就结束了
          第二版博客是wordpress，斥重金购买了腾讯的服务器，找学习后端的朋友帮我弄了下，只写了几篇文章就关掉了（因为服务器到期了并且没钱续费，搬到了bwg，由于配置太垃圾经常慢的刷不出来）
          第三版博客是纯手写的React+Java，男朋友帮忙写java，其实也算是成功运行了一段时间吧（只是缺少了各种功能而已），因为后来工作太忙，而且我想要的东西太多了，所以暂时放下啦~源码都在我的gitee上
          最后就是它啦，这一次我想好好坚持一下，多输出点本就不多的知识，记录一下日常生活
          关于太可爱的了所以想让大家都看到 显而易见这个是blue
        </div>
      </div>
      <div className="mark-dtl-support">
        <div>
          <IconFont type="h-icon" />
          <p>(80)</p>
        </div>
      </div>
      <Divider plain>
        <span className="mark-dtl-tip">
          <IconFont type="h-xiaoxiong" />
          登录后评论可及时收到回复邮件呦~
        </span>
      </Divider>
      <div className="mark-login">
        <Form {...layout} form={form} onFinish={onFinish} autoComplete="off">
          {isLogin && (
            <Form.Item name="name" label="昵称" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            label="邮箱"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="pwd" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          {isLogin && (
            <Form.Item name="note" label="站点">
              <Input prefix="https://" suffix=".com" />
            </Form.Item>
          )}
          <Form.Item
            wrapperCol={{
              offset: 2,
              span: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              {!isLogin ? "登录" : "注册"}
            </Button>
            <span
              className="mark-login-btn-item-tip"
              onClick={() => setIsLogin(!isLogin)}
            >
              {!isLogin ? "还没账号？去注册" : "已有账号？直接登录"}
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Dtl;
