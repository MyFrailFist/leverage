import axios from "axios";


import {baseUrl} from '@utils/urlConfig';

// axios 配置
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.get['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.delete['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.put['Content-Type'] = 'application/json'; //配置请求头

axios.defaults.baseURL = baseUrl;


//http request 拦截器
axios.interceptors.request.use((config) => {
    //劫持所有Ajax请求，如果这里有一个token在本地存储里面,它将会附加到一个名为x-access-token的Header里面
    if (localStorage.token) {  
		//判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.common['Authorization'] = "Token " + window.localStorage.getItem('token');
    }
  	return config;
}, (error) => {
	// console.log('请求超时');
	return Promise.reject(error);
});

//http response 拦截器:返回状态判断（添加响应拦截器）
axios.interceptors.response.use(
	response => {
		if (response.data.code === 40008||response.data.code === 401) {
			// 40008 说明 token 验证失败
			// 可以直接跳转到登录页面，重新登录获取 token
			LocalStorageUtils.removeUser();
			window.location.reload();//刷新页面，如果该页面需要登录，则会自动跳转到登录页面
			return {
				code:12000,
				message:"登录过时,退出请重新登录"
			};
		}
		return response.data;
	},
	error => {
		return Promise.reject(error.response) // 返回接口返回的错误信息
	}
);




export default axios;

