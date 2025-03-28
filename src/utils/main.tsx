import axios from 'axios';
import { message, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import dayjs from "dayjs";
import RelativeTime from 'dayjs/plugin/relativeTime'
import store, { fetchTypes } from '@/store';

dayjs.extend(RelativeTime)

// -----------------axios请求拦截--------------------------------

// 访问服务器的axios实例
const axiosInstanceForDing = axios.create();
// axios响应拦截
axiosInstanceForDing.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axiosInstanceForDing.defaults.baseURL = '/api'
axiosInstanceForDing.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data);
    } else if (response.data.code === 401) {
      const lHost = window.location.origin
      Modal.confirm({
        title: '登录提示',
        icon: <ExclamationCircleOutlined />,
        content: response.data.msg,
        onOk() {
          window.location.href = lHost + '/login'
        }
      });
      return Promise.resolve('');
    } else {
      if (response.data.aaData) {
        return Promise.resolve(response.data);
      } else {
        message.error(response.data.msg)
        return Promise.resolve('');
      }
    }
  },
  error => {
    message.error('请求接口失败，请联系管理员');
  }
);

const { PontCore } = require('@api/pontCore')
const pontCore = PontCore;
pontCore.useFetch((url, fetchOption) => {
  return axiosInstanceForDing(url, fetchOption);
});


// -------------------一些app全局的redux------------------------------
store.dispatch(fetchTypes())