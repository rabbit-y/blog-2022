import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setRouterKey } from "../../../store";

import { STATION, ROTER } from "@utils/variable";

import "./index.less";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routerKey = useSelector((state) => state.routerKey);
  const dispatch = useDispatch();
  useEffect(() => {
    const key = "/" + location.pathname.split("/")[1];
    dispatch(setRouterKey(key));
  }, []);
  // 导航跳转
  const menuClick = ({ key }) => {
    navigate(key);
    dispatch(setRouterKey(key));
  };
  return (
    <div className="banner">
      <div className="title">
        <div className="title-left">
          <div className="title-name">{STATION.name}</div>
          <div className="title-dec">{STATION.dec}</div>
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
