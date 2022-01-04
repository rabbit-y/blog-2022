import { Row, Col } from "antd";
import IconFont from "../../component/Icon/index";

import "./index.less";

export default function Classify() {
  return (
    <div className="classify">
      <div className="classify-title">
        <IconFont type="h-wenjianjia" />
        <b>分类</b>
      </div>
      <div className="classify-list">
        <Row>
          <Col flex={"auto"}>
            <div>PMP</div>
          </Col>
          <Col flex={"50px"}>
            <div className="classify-list-num">1</div>
          </Col>
        </Row>
      </div>
      <div className="classify-list">
        <Row>
          <Col flex={"auto"}>
            <div>小程序</div>
          </Col>
          <Col flex={"50px"}>
            <div className="classify-list-num">10</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
