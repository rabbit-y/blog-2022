import { Form, Input, Button } from "antd";
import { api } from "@api/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { STATION } from "@utils/variable";

import "./index.less";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // 登陆
  const onFinish = async (values) => {
    const { code } = await api.other.doLogin.request(values);
    if (code === 0) {
      const { code: userCode, data: userData } =
        await api.other.getUserInfo.request();
      if (userCode === 0) {
        localStorage.setItem("h-userInfo", JSON.stringify(userData));
        navigate(-1);
      }
    }
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="login-name">{STATION.name}</div>
        <Form
          form={form}
          onFinish={onFinish}
          labelAlign="right"
          size="large"
          autoComplete="off"
        >
          <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
            <Input placeholder="邮箱" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item name="pwd" rules={[{ required: true }]}>
            <Input.Password placeholder="密码" prefix={<LockOutlined />} />
          </Form.Item>
          <div className="login-tip">
            <Link to="/register">没有账号？去注册</Link>
          </div>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form>
        <div className="login-tip">
          <Link to="/index">返回首页</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
