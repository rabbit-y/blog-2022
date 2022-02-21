import IconFont from "../../component/Icon/index";
import { useSelector } from "react-redux";
import "./index.less";

export default function About() {
  const USER = useSelector((state) => state.types);
  return (
    <div className="about">
      <div className="about-header">
        <img src={USER.avatar} alt="头像" />
      </div>
      <div className="about-user">
        <span>{USER.nickname}</span>
        <div>{JSON.parse(USER.other).dec}</div>
      </div>
      <div className="about-link">
        <IconFont type="h-gitee" />
      </div>
    </div>
  );
}
