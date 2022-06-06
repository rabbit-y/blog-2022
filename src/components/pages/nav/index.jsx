import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setRouterKey, setLogin, setMarkListTop } from "@/store";
import IconFont from "@components/Icon/index";
import { ROTER } from "@utils/variable";
import { scroll } from "@utils";

import "./index.less";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routerKey = useSelector((state) => state.routerKey);
  const info = useSelector((state) => state.info);
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
    // 滚动处理
    scroll(0, 0);
    dispatch(setMarkListTop(0));
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
          <div className="title-name">{info.stationName}</div>
          <div className="title-dec">
            {info.stationDec}
            {/* <div className="title-dec-login">
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
            </div> */}
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
