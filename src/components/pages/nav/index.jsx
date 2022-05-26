import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setRouterKey, setLogin } from "../../../store";
import IconFont from "../../component/Icon/index";

import { STATION, ROTER } from "@utils/variable";

import "./index.less";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routerKey = useSelector((state) => state.routerKey);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const key = "/" + location.pathname.split("/")[1];
    dispatch(setRouterKey(key));
    setUserInfo(login ? JSON.parse(localStorage.getItem("h-userInfo")) : {});
  }, []);
  // 导航跳转
  const menuClick = ({ key }) => {
    navigate(key);
    dispatch(setRouterKey(key));
  };
  // 退出登录
  const logout = () => {
    localStorage.setItem("h-userInfo", "");
    dispatch(setLogin(false));
    navigate("/index");
  };
  return (
    <div className="banner">
      <div className="title">
        <div className="title-left">
          <div className="title-name">{STATION.name}</div>
          <div className="title-dec">
            {STATION.dec}
            <div className="title-dec-login">
              {login ? (
                <div>
                  <IconFont type="h-xiangsu_mao" style={{ marginRight: 6 }} />
                  {userInfo.nickname}
                  <div onClick={logout}>退出登录</div>
                </div>
              ) : (
                <div
                  className="title-dec-login-btn"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <IconFont type="h-xiangsu_mao" style={{ marginRight: 6 }} />
                  登录
                </div>
              )}
            </div>
          </div>
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
