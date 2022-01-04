import { Row, Col } from "antd";
import moment from "moment";
import IconFont from "../../component/Icon/index";
import { STATION } from "@utils/variable";

import "./index.less";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        @{moment().format("yyyy")}
        <IconFont type="h-xiaoxiong" />
        {STATION.name}
        <IconFont type="h-xiaoxiong" />
        {STATION.putOnRecord}
      </div>
    </div>
  );
}
