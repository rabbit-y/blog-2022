import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconFont from "../../component/Icon/index";
import "./index.less";

export default function Classify() {
  const typeList = useSelector((state) => state.types.articleCounts);
  const navigate = useNavigate();
  const getTypeList = (item) => {
    navigate("/mark/" + item.typeId);
  };
  return (
    <div className="classify">
      <div className="classify-title h-text-shadow">
        <IconFont type="h-a-kuzhuangkushuaiqishuashuaibiaoqingxiaolian" />
        <b>分类</b>
      </div>
      {typeList?.map((item, index) => (
        <div
          className="classify-list h-text-shadow"
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
