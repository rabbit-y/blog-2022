import React from 'react';
import { createRoot } from 'react-dom/client';
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

import './index.less';

moment.locale('zh-cn');

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={zhCN} theme={{
        token: {
          colorPrimary: '#74759b',
        },
      }}>
        <AliveScope>
          <App />
        </AliveScope>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);
