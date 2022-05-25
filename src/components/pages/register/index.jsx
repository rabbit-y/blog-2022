import { Form, Input, Button } from "antd";
import { api } from "@api/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";

import "./index.less";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // 注册
  const onFinish = async (values) => {
    const { code } = await api.other.register.request(values);
    if (code === 0) {
      navigate("/login");
    }
  };
  return (
    <div className="login">
      <div className="login-box">
        <Form
          form={form}
          onFinish={onFinish}
          labelAlign="right"
          size="large"
          autoComplete="off"
        >
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="昵称" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
            <Input placeholder="邮箱" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item name="pwd" rules={[{ required: true }]}>
            <Input.Password placeholder="密码" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item name="note">
            <Input prefix="https://" suffix=".com" placeholder="站点" />
          </Form.Item>
          <div className="login-tip">
            <Link to="/login">已有账号？去登录</Link>
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
export default Register;
