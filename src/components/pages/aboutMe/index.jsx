import IconFont from "../../component/Icon/index";
import { USER } from "@utils/variable";

import "./index.less";

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
        <img src={USER.header} alt="头像" />
      </div>
      <div className="about-user">
        <span>{USER.name}</span>
        <div>{USER.dec}</div>
      </div>
      <div className="about-link">
        <IconFont type="h-gitee" />
      </div>
    </div>
  );
}
