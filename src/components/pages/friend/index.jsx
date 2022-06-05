import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import IconFont from "../../component/Icon/index";
import "./index.less";

export default function Friend() {
  const list = useSelector((state) => state.info.friend);
  const herf = (e) => {
    window.open(e);
  };
  return (
    <div className="friend">
      <div className="friend-title h-text-shadow">
        <IconFont type="h-a-aiqingxihuansebiaoqingxiaolian" />
        <b>想推荐</b>
        <div className="friend-title-dec">输出很多知识或很漂亮独特的博客</div>
      </div>
      {list?.map((item, index) => (
        <div
          className="friend-list h-text-shadow"
          key={index}
          onClick={() => {
            herf(item.url);
          }}
        >
          <Row>
            <Col>
              <img src={item.avatar} />
            </Col>
            <Col>
              <div>@ {item.name}</div>
              <div className="friend-list-dec">{item.dec}</div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
