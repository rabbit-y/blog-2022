import { Row, Col } from "antd";
import IconFont from "../../component/Icon/index";
import "./index.less";

export default function Classify({ list }) {
  return (
    <div className="classify">
      <div className="classify-title">
        <IconFont type="h-wenjianjia" />
        <b>分类</b>
      </div>
      {list?.map((item, index) => (
        <div className="classify-list" key={index}>
          <Row>
            <Col flex={"auto"}>
              <div>{item.typeName ? item.typeName : "未分类"}</div>
            </Col>
            <Col flex={"50px"}>
              <div className="classify-list-num">{item.total}</div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
