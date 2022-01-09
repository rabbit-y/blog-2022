import axios from 'axios';
// import { PontCore } from '@api/pontCore';
import { message } from 'antd'
const { PontCore } = require('@api/pontCore')
// axios请求拦截
// axios.interceptors.request.use((request) => {

// });


// axios响应拦截
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data);
    } else if (response.data.code === 401) {
      return Promise.reject('');
    } else {
      if (response.data.aaData) {
        return Promise.resolve(response.data);
      } else {
        message.error(response.data.message)
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
  return axios(url, fetchOption);
});
