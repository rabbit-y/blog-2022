import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRouterKey } from "@/store";
import { ROTER } from "@utils/variable";
import { scroll } from "@utils";

import cat2 from "@/image/cat2.png";
import "./index.less";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routerKey = useSelector((state) => state.routerKey);
  const info = useSelector((state) => state.info);
  const dispatch = useDispatch();
  const [say, setSay] = useState("");
  useEffect(() => {
    const key = "/" + location.pathname.split("/")[1];
    dispatch(setRouterKey(key));
    getSay();
  }, []);
  // 导航跳转
  const menuClick = ({ key }) => {
    navigate(key);
    dispatch(setRouterKey(key));
    // 滚动处理
    scroll(0, 0);
  };
  const getSay = async () => {
    const {
      data: { code, data },
    } = await axios.get(
      `https://v2.alapi.cn/api/mingyan?token=LwExDtUWhF3rH5ib`
    );
    if (code === 200) {
      setSay(data);
    }
  };
  return (
    <div className="banner">
      <div className="title">
        <div className="title-left">
          <div className="title-name">{info.stationName}</div>
          <div className="title-dec">
            {say.content ? say.content + "  ——" + say.author : info.stationDec}
          </div>
        </div>
      </div>
      <img className="nav-img" src={cat2} />
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
