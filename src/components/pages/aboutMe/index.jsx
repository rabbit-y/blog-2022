import { Popover } from "antd";
import { useSelector } from "react-redux";
import { ABOUTLINK } from "@utils/variable";
import IconFont from "../../component/Icon/index";
import "./index.less";

export default function About() {
  const user = useSelector((state) => state.types);
  return (
    <div className="about">
      <div className="about-header">
        <img src={user.avatar} alt="头像" />
      </div>
      <div className="about-user">
        <span>{user.nickname}</span>
        <div>{user.other && JSON.parse(user.other).dec}</div>
      </div>
      <div className="about-link">
        {ABOUTLINK.map((item) =>
          item.url ? (
            <div
              key={item.name}
              className="about-link-btn"
              onClick={() => {
                window.open(item.url);
              }}
            >
              <IconFont type={item.icon} />
            </div>
          ) : (
            <Popover
              key={item.name}
              content={
                <div className="about-link-cont">
                  <img src={item.image} art={item.name} />
                </div>
              }
            >
              <div className="about-link-btn">
                <IconFont type={item.icon} />
              </div>
            </Popover>
          )
        )}
      </div>
    </div>
  );
}
