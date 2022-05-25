import { Layout, Menu } from "antd";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRouterKey } from "../../../store";
import { ADMINOTER } from "@utils/variable";
import "./index.less";

const { Content, Sider } = Layout;

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const routerKey = useSelector((state) => state.routerKey);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRouterKey(location.pathname));
  }, []);
  // 导航跳转
  const menuClick = ({ key }) => {
    navigate(key);
    dispatch(setRouterKey(key));
  };
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout id="admin" style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[routerKey]}
          items={ADMINOTER}
          onClick={menuClick}
        />
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
