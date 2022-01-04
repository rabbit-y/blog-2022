import axios from 'axios';
import { message } from 'antd'

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
            !window.location.origin.indexOf("localhost") && (window.location.href = window.location.origin + '/login');
            message.error('登陆过期，请重新登录')
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
