import { Row, Col } from "antd";
import IconFont from "../../component/Icon/index";
import config from "@utils/config";
import "./index.less";

export default function Friend() {
  return (
    <div className="friend h-text-card ">
      <div className="friend-title h-text-title">
        <IconFont type="h-a-aiqingxihuansebiaoqingxiaolian" />
        <b>想推荐</b>
        {/* <div className="friend-title-dec">输出很多知识或很漂亮独特的博客</div> */}
      </div>
      <div
        className="friend-list h-text-shadow h-link-cur"
        onClick={() => {
          window.open("https://rabbit-y.github.io/interview-book/dist/");
        }}
      >
        <Row>
          <Col>
            <img src={config.COS_URL + "blog/headers/3"} />
          </Col>
          <Col>
            <div>面试题</div>
            <div className="friend-list-dec">面试题记录手册</div>
          </Col>
        </Row>
      </div>
      <div
        className="friend-list h-text-shadow h-link-cur"
        onClick={() => {
          window.open("https://dshvv.github.io/red-treasure-book/dist/");
        }}
      >
        <Row>
          <Col>
            <img src="https://dshvv.github.io/red-treasure-book/dist/logo.svg" />
          </Col>
          <Col>
            <div>js高级程序设计</div>
            <div className="friend-list-dec">红宝书的漂亮版</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
