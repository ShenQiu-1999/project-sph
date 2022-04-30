// 对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//start进度条开始 done进度条结束 引入样式 不引入样式没效果
import "nprogress/nprogress.css";

//1.利用axios对象的方法create，创建axios对象实例
//2.requests就是axios，进行了一些配置
const requests = axios.create({
    //基础路径
    baseURL:'/api',
    //请求超时时间 5s
    timeout:5000,
});
//请求拦截器 请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //进度条开始动
    nprogress.start();
    //config配置对象 header属性很重要
    return config;
})
//响应拦截器
requests.interceptors.response.use(
    //响应成功的回调函数
    (res)=>{
        //进度条结束
        nprogress.done();
        return res.data;
    },
    //响应失败的回调函数
    (error)=>{
        return Promise.reject(new Error('fail'))
    }
)
//对外暴露
export default requests;