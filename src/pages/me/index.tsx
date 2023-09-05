import { Tag, Progress, Card } from 'antd';
import moment from 'moment';
import IconFont from '@components/Icon';
import { JSLIST } from '@utils/variable';

const Me = () => {
  return (
    <div className="me">
      <div className="me-box">
        <div className="me-list">
          <div className="me-title">
            <IconFont type="h-ghost" /> 关于花贝
          </div>
          <div className="me-content">
            <div className="me-content-list">
              <span className="me-content-list-title">关于名字</span>
              <span>花贝是家里小猫咪的名字，借来用用～</span>
            </div>
            <div className="me-content-list">
              <span className="me-content-list-title">关于位置</span>
              <span>{moment('2018-6').fromNow(true)}北漂生活，现在只想躺平</span>
            </div>
            <div className="me-content-list">
              <span className="me-content-list-title">关于工作</span>
              <span>从事前端开发工程师{moment('2018-6').fromNow(true)}，非专业对口</span>
            </div>
          </div>
        </div>
        <div className="me-list">
          <div className="me-title">
            <IconFont type="h-mushroom" /> 关于本站
          </div>
          <div className="me-content">
            <div className="me-content-list">
              <span className="me-content-list-title">关于前端</span>
              <span>
                React 18.0 + React-Roter v6 + Antd，全部由自己搭建，
                <a href="https://gitee.com/han96/blog-2022" target="_blank">
                  点击查看源码
                </a>
              </span>
            </div>
            <div className="me-content-list">
              <span className="me-content-list-title">关于后端</span>
              <span>Java + MySQL，全部由男盆友搭建</span>
            </div>
            <div className="me-content-list">
              <span className="me-content-list-title">关于服务</span>
              <span>腾讯云服务器 + 腾讯云COS + 腾讯云域名 + 阿里云数据库</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Me;
