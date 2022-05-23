import axios from 'axios';
import { message } from 'antd'
import store, {fetchTypes} from '@/store';
const { PontCore } = require('@api/pontCore')

// -----------------axios请求拦截--------------------------------

// 访问丁爷爷服务器的axios实例
const axiosInstanceForDing = axios.create();
// axios响应拦截
axiosInstanceForDing.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
const host = window.location.hostname!='localhost'
host&&(axiosInstanceForDing.defaults.baseURL = '/api')
axiosInstanceForDing.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data);
    } else if (response.data.code === 401) {
      return Promise.reject('');
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

const pontCore = PontCore;
pontCore.useFetch((url, fetchOption) => {
  return axiosInstanceForDing(url, fetchOption);
});


// -------------------一些app全局的redux------------------------------
store.dispatch(fetchTypes())