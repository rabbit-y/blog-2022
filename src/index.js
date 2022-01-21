import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import "antd/dist/antd.variable.min.css"
import 'moment/locale/zh-cn';
import moment from 'moment';
import './utils/main'
import './index.less';
import App from '@/components/pages/index';
import {Provider} from 'react-redux';
import store from '@/store';

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
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>,
      document.getElementById('root')
    );
  } else { // 资源加载中

  }
}
document.onreadystatechange = listen
