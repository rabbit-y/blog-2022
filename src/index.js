import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';

import reportWebVitals from './reportWebVitals';

import './index.less';
import App from '@/components/pages/index';


moment.locale('zh-cn');

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);

reportWebVitals();
