import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://114.116.26.78/api',
    timeout: 10000,
    method: 'POST'
});
instance.interceptors.request.use(function (config) {
    //请求拦截器
    // const token = localStorage.getItem('token')
    // if (token) {
    //     config.headers['Authorization'] = 'Bearer' + token
    // }
    // return config
    // 在发送请求之前做些什么
    config.headers = {
        'X-Auth-Token': sessionStorage.getItem('token')
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    // console.log(error);
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default instance