import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.less";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout id="admin" style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/admin">首页</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
            <Menu.Item key="2">
              <Link to="/admin/profile">站长资料</Link>
            </Menu.Item>
            <Menu.Item key="3">用户管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<DesktopOutlined />} title="文章管理">
            <Menu.Item key="4">碎碎念</Menu.Item>
            <Menu.Item key="5">
              <Link to="/admin/mark">文档</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<SettingOutlined />} title="参数管理">
            <Menu.Item key="6">分类管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
