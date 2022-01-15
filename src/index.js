import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';
import './utils/main'
import "antd/dist/antd.variable.min.css"
import './index.less';
import App from '@/components/pages/index';


ConfigProvider.config({
  theme: {
    primaryColor: '#1DA57A'
  },
});
moment.locale('zh-cn');

function listen() {
  if (document.readyState === 'complete') { // 资源加载完成
    ReactDOM.render(
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>,
      document.getElementById('root')
    );
  } else { // 资源加载中
    ReactDOM.render(
      <div className="yu-loader">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      ,
      document.getElementById('root')
    );
  }
}
document.onreadystatechange = listen
