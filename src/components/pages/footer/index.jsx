import { BackTop } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import IconFont from "../../component/Icon/index";

import "./index.less";

export default function Footer() {
  const info = useSelector((state) => state.info);
  return (
    <div className="footer">
      <div>
        <a href={location.origin}>
          @2019 - {moment().format("yyyy")}
          <IconFont type="h-claw" />
          {info.stationName}
        </a>
      </div>
      <div>
        <a
          href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
          target="_blank"
        >
          {info.stationPutOnRecord}
        </a>
      </div>
      <BackTop>
        <IconFont type="h-fanhuidingbu" className="footer-back" />
      </BackTop>
    </div>
  );
}
