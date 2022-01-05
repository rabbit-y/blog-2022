import axios from 'axios';
import qs from 'qs';
import moment from 'moment'

export const GET = (url, param = {}) => {
    param.ts = moment().format('X');
    return axios.get(url, { params: param })
}
export const POST = (url, param = '', type = false) => {
    return axios.post(url, type ? param : qs.stringify(param),
        {
            headers: {
                'Content-Type': type ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded'
            }
        })
}