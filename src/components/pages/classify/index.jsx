import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.less";

export default function Classify() {
  const typeList = useSelector((state) => state.types.articleCounts);
  const navigate = useNavigate();
  const getTypeList = (item) => {
    navigate("/mark/" + item.typeId);
  };
  return (
    <div className="classify h-text-card ">
      {typeList?.map((item, index) => (
        <div
          className="classify-list h-text-shadow h-link-cur"
          key={index}
          onClick={() => {
            getTypeList(item);
          }}
        >
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
