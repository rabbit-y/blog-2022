import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setRouterKey, setMarkListTop } from "@/store";
import { ROTER } from "@utils/variable";
import { scroll } from "@utils";

import "./index.less";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routerKey = useSelector((state) => state.routerKey);
  const info = useSelector((state) => state.info);
  const dispatch = useDispatch();
  useEffect(() => {
    const key = "/" + location.pathname.split("/")[1];
    dispatch(setRouterKey(key));
  }, []);
  // 导航跳转
  const menuClick = ({ key }) => {
    navigate(key);
    dispatch(setRouterKey(key));
    // 滚动处理
    scroll(0, 0);
    dispatch(setMarkListTop(0));
  };
  // 退出登录
  const logout = () => {
    navigate("/index");
  };
  return (
    <div className="banner">
      <div className="title">
        <div className="title-left">
          <div className="title-name">{info.stationName}</div>
          <div className="title-dec">{info.stationDec}</div>
        </div>
      </div>
      <div className="nav">
        <Menu
          mode="horizontal"
          selectedKeys={[routerKey]}
          items={ROTER}
          onClick={menuClick}
        />
      </div>
    </div>
  );
};
export default Nav;
