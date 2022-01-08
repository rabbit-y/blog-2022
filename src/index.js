import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';

import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.variable.min.css"
import './index.less';
import App from '@/components/pages/index';


ConfigProvider.config({
  theme: {
    primaryColor: '#1DA57A'
  },
});
moment.locale('zh-cn');

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);

reportWebVitals();
