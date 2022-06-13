import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AliveScope } from 'react-activation'
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';
import './utils/main'
import App from '@/components/pages/index';

import { Provider } from 'react-redux';
import store from '@/store';


import "antd/dist/antd.variable.min.css"
import './index.less';

moment.locale('zh-cn');
ConfigProvider.config({
  theme: {
    primaryColor: '#1DA57A'
  },
});

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <BrowserRouter>
        <AliveScope>
          <App />
        </AliveScope>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);
