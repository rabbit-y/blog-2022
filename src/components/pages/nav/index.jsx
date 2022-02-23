import { Link } from "react-router-dom";
import { Menu } from "antd";

import { STATION, ROTER } from "@utils/variable";

import "./index.less";

const Nav = () => {
  return (
    <div className="banner">
      <div className="title">
        <div className="title-left">
          <div className="title-name">{STATION.name}</div>
          <div className="title-dec">{STATION.dec}</div>
        </div>
      </div>
      <div className="nav">
        <Menu mode="horizontal" defaultSelectedKeys="index">
          {ROTER?.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    </div>
  );
};
export default Nav;
