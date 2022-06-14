import { Divider, Tag, Col, Row } from "antd";
import moment from "moment";
import "./index.less";

const Me = () => {
  return (
    <div className="me">
      <div className="me-list">
        <Divider orientation="center" plain>
          花贝
        </Divider>
        <div className="me-content">
          <div className="me-content-list">
            <Tag color="#1DA57A">关于名字</Tag>
            <span>花贝是家里小猫咪的名字，借来用用～</span>
          </div>
          <div className="me-content-list">
            <Tag color="#1DA57A">当前位置</Tag>
            <span>
              {moment("2018-6").fromNow(true)}北漂生活，现在只想回东北躺平
            </span>
          </div>
          <div className="me-content-list">
            <Tag color="#1DA57A">工作经历</Tag>
            <span>
              从事前端开发工程师{moment("2018-6").fromNow(true)}，非专业对口
            </span>
          </div>
        </div>
      </div>
      <div className="me-list">
        <Divider orientation="center" plain>
          花贝的博客
        </Divider>
        <div className="me-content">
          <div className="me-content-list">
            <Tag color="#1DA57A">前端技术</Tag>
            <span>
              React 17.0 + React-Roter v6 + Antd，全部由自己搭建，
              <a href="https://gitee.com/han96/blog-2022" target="_blank">
                点击查看源码
              </a>
            </span>
          </div>
          <div className="me-content-list">
            <Tag color="#1DA57A">后端技术</Tag>
            <span>Java + MySQL，全部由男盆友搭建</span>
          </div>
          <div className="me-content-list">
            <Tag color="#1DA57A">关于服务</Tag>
            <span>腾讯云服务器 + 腾讯云COS + 腾讯云域名 + 阿里云数据库</span>
          </div>
        </div>
      </div>
      {/* <div className="me-list">
        <Divider orientation="center" plain>
          花贝的技术站
        </Divider>
        <div className="me-content">
          <Row>
            <Col span={6}>JavaScript</Col>
            <Col span={6}>React</Col>
            <Col span={6}>Vue</Col>
            <Col span={6}>jQuery</Col>
          </Row>
        </div>
      </div> */}
    </div>
  );
};
export default Me;
