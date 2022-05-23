import { useState, useEffect } from "react";
import { PageHeader, Divider, Form, Input, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";
import hljs from "highlight.js";
import { api } from "@api/index";
import IconFont from "@components/Icon/index";
import Liked from "@components/Liked/index";
import moment from "moment";

import "highlight.js/styles/foundation.css";
import "./index.less";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 },
};
const Dtl = () => {
  const [form] = Form.useForm();
  const searchParams = useParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [dtl, setDtl] = useState({});
  const [html, setHtml] = useState("");
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
  });
  useEffect(() => {
    const userInfo = localStorage.getItem("h-userInfo");
    setUser(userInfo ? JSON.parse(userInfo) : {});
    getDtl(searchParams.id);
  }, [searchParams.id]);
  // 获取文章内容
  const getDtl = async (id) => {
    const { code, data } = await api.article.getById.request({ id });
    if (code === 0) {
      const html = marked(data.content);
      setHtml(html);
      setDtl(data);
    }
  };
  // 登陆
  const onFinish = async (values) => {
    const { code } = await api.other.doLogin.request(values);
    if (code === 0) {
      const { code: userCode, data: userData } =
        await api.other.getUserInfo.request();
      if (userCode === 0) {
        localStorage.setItem("h-userInfo", JSON.stringify(userData));
      }
    }
  };
  return (
    <div className="mark-dtl">
      <div className="mark-title">
        <PageHeader
          onBack={() => navigate(-1)}
          title={dtl.typeName ? dtl.typeName : "返回"}
        />
      </div>
      <div className="mark-dtl-all">
        <h1>{dtl.title}</h1>
        <div className="mark-dtl-title">
          <IconFont type="h-shijian" />
          {moment(dtl.createTime).format("YYYY-MM-DD HH:mm")}
          <Divider type="vertical" />
          <IconFont type="h-wenjianjia" />
          {dtl.typeName}
        </div>
        <div className="mark-dtl-cont">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
      <div className="mark-dtl-support">
        {/* <div>
          <Liked />
          <p>(80)</p>
        </div> */}
      </div>
      {
        // 登录判断
        user.nickname ? (
          <div>
            <Divider plain>
              <span className="mark-dtl-tip">
                <IconFont type="h-xiaoxiong" />
                收到回复会有邮件提醒呦~
              </span>
            </Divider>
            <div className="mark-user opacity8">
              <div className="mark-user-msg">
                <img src={user.avatar} alt="头像" />
                <span>@ {user.nickname}</span>
              </div>
              <div className="mark-user-comment"></div>
            </div>
          </div>
        ) : (
          <div>
            <Divider plain>
              <span className="mark-dtl-tip">
                <IconFont type="h-xiaoxiong" />
                登录后评论可及时收到回复邮件呦~
              </span>
            </Divider>
            <div className="mark-login">
              <Form
                {...layout}
                form={form}
                onFinish={onFinish}
                labelAlign="left"
                autoComplete="off"
              >
                {isLogin && (
                  <Form.Item
                    name="name"
                    label="昵称"
                    rules={[{ required: true }]}
                  >
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
        )
      }
    </div>
  );
};
export default Dtl;
