import { Tag, Progress, Card } from "antd";
import moment from "moment";
import IconFont from "@components/Icon";
import "./index.less";
import { JSLIST } from "@utils/variable";
const Me = () => {
  return (
    <div className="me">
      <div className="me-list">
        <div className="me-title">
          <IconFont type="h-ghost" /> 关于花贝
        </div>
        <div className="me-content">
          <div className="me-content-list">
            <Tag color="#666">关于名字</Tag>
            <span>花贝是家里小猫咪的名字，借来用用～</span>
          </div>
          <div className="me-content-list">
            <Tag color="#666">当前位置</Tag>
            <span>{moment("2018-6").fromNow(true)}北漂生活，现在只想躺平</span>
          </div>
          <div className="me-content-list">
            <Tag color="#666">工作经历</Tag>
            <span>
              从事前端开发工程师{moment("2018-6").fromNow(true)}，非专业对口
            </span>
          </div>
        </div>
      </div>
      <div className="me-list">
        <div className="me-title">
          <IconFont type="h-mushroom" /> 关于本站
        </div>
        <div className="me-content">
          <div className="me-content-list">
            <Tag color="#666">前端技术</Tag>
            <span>
              React 18.0 + React-Roter v6 + Antd，全部由自己搭建，
              <a href="https://gitee.com/han96/blog-2022" target="_blank">
                点击查看源码
              </a>
            </span>
          </div>
          <div className="me-content-list">
            <Tag color="#666">后端技术</Tag>
            <span>Java + MySQL，全部由男盆友搭建</span>
          </div>
          <div className="me-content-list">
            <Tag color="#666">关于服务</Tag>
            <span>腾讯云服务器 + 腾讯云COS + 腾讯云域名 + 阿里云数据库</span>
          </div>
        </div>
      </div>
      <div className="me-list">
        <div className="me-title">
          <IconFont type="h-tree" /> 关于技术栈
        </div>
        <div className="me-content">
          <Card>
            {JSLIST?.map((item, index) => (
              <Card.Grid key={index}>
                <div>
                  <div>
                    <Progress percent={item.percent} steps={5} />
                  </div>
                  <div className="me-content-name">{item.name}</div>
                  <div className="me-content-dec">{item.dec}</div>
                </div>
              </Card.Grid>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Me;
