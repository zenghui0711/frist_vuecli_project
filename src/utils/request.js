import axios from 'axios'

const http = axios.create();
//baseURL
http.defaults.timeout = 3000; // 响应超时


http.interceptors.request.use(config => { // 请求拦截器配置 // 可不配置
    // do something
    return config
}, error => {
    console.log('request.error',error); //
    return Promise.reject(error)
});


http.interceptors.response.use(response => { // 响应拦截器配置 // 可不配置
    // do something
    return response
}, error => {
    console.log('response.error',error); //
    return Promise.reject(error)
})

export default http;