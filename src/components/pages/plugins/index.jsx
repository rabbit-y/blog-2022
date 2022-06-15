import { useSelector } from "react-redux";
import { Tag, Row, Col } from "antd";
import "./index.less";

export default function Plugins() {
  const plugins = useSelector((state) => state.info.plugins);
  const website = useSelector((state) => state.info.website);
  const herf = (e) => {
    window.open(e);
  };
  return (
    <div className="plugins">
      <Row gutter={[20, 20]}>
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
          <div className="plugins-left">
            <div className="plugins-title">插件、工具</div>
            {plugins?.map((item, index) => (
              <div
                className="plugins-list"
                key={index}
                onClick={() => {
                  herf(item.url);
                }}
              >
                <div className="plugins-name">
                  <span className="plugins-name-name">{item.name}</span>
                  <div className="plugins-name-tag">
                    <Tag color={item.color}>{item.tab}</Tag>
                  </div>
                </div>
                <div className="plugins-dec">{item.dec}</div>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
          <div className="plugins-rt">
            <div className="plugins-title">实用网站</div>
            {website?.map((item, index) => (
              <div
                className="plugins-list"
                key={index}
                onClick={() => {
                  herf(item.url);
                }}
              >
                <div className="plugins-name">
                  <span className="plugins-name-name">{item.name}</span>
                  <div className="plugins-name-tag">
                    <Tag color={item.color}>{item.tab}</Tag>
                  </div>
                </div>
                <div className="plugins-dec">{item.dec}</div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
