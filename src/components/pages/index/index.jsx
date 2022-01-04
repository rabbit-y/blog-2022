import { Row, Col, Divider } from "antd";
import IconFont from "../../component/Icon/index";

import "./index.less";

export default function Index() {
  return (
    <div className="index">
      <div className="index-say">
        <Row align="middle">
          <Col flex="60px">
            <div className="index-say-icon">
              <IconFont type="h-xiaoxiong1" />
            </div>
          </Col>
          <Col flex="auto">
            <div className="index-say-cont">
              <div>-- 2022-01-03 --</div>
              随便说说吧The tough road often leads to the top.
              艰难的道路经常通往高处
            </div>
          </Col>
          <Col flex="100px">
            <div className="index-say-right">
              <IconFont type="h-icon" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="index-page">
        <div className="index-page-title">项目运行环境+引论</div>
        <div className="index-page-msg">
          <IconFont type="h-shijian" />
          2022-01-04
          <Divider type="vertical" />
          <IconFont type="h-wenjianjia" />
          PMP
        </div>
        <div className="index-page-dec">
          值观：责任、尊重、公正、诚实项目的特点独特性：独特性带来不确定性，可能存在重复的元素临时性：有明确的起点和终点，可交付成果可能回在项目终止后依然存在项目驱动变更：推动组织从当前状态转变为未来状态项目创造商业价值：为相关方带来有型或无形的效益项目终止达成目标不会或不能达
        </div>
      </div>
    </div>
  );
}
