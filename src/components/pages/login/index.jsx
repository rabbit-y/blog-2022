import { Form, Input, Button } from "antd";
import { api } from "@api/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import "./index.less";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const info = useSelector((state) => state.info);
  // 登陆
  const onFinish = async (values) => {
    const { code } = await api.other.doLogin.request(values);
    if (code === 0) {
    }
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="login-name">{info.stationName}</div>
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
