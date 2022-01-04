import { Row, Col, Divider } from "antd";
import IconFont from "../../component/Icon/index";

import "./index.less";

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
        <img src="https://img2.baidu.com/it/u=395719964,2145680590&fm=26&fmt=auto" />
      </div>
      <div className="about-user">
        <span>@Blue</span>
        <div>一个社恐的人</div>
      </div>
      <div className="about-link">
        <IconFont type="h-gitee" />
      </div>
    </div>
  );
}
