import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AliveScope } from 'react-activation';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import App from '@pages/index';
import store from '@/store/index';
import { Provider } from 'react-redux';
import '@/utils/main';

import './index.less';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: '#74759b',
          },
        }}
      >
        <AliveScope>
          <App />
        </AliveScope>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
);
