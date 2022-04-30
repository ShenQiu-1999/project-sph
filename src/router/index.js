//配置路由
import Vue from 'vue';
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
//先把VueRouter原型对象的push保存
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace 第一个参数转跳位置和传递参数 第二个参数成功的回调 第三个参数失败的回调
VueRouter.prototype.push=function (location,resolve,reject){
    if (resolve&&reject)
        originPush.call(this,location,resolve,reject)
    else
        originPush.call(this,location,()=>{},()=>{})
}
VueRouter.prototype.replace=function (location,resolve,reject){
    if (resolve&&reject)
        originReplace.replace(this,location,resolve,reject)
    else
        originReplace.replace(this,location,()=>{},()=>{})
}
//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:'/home',
            component:Home,
            //meta判断该路由页面是否要显示三级联动
            meta:{show:true}
        },
        {
            //参数占位后面加个?表示该params参数可传可不传 不加如果没传 路径会出错
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            name:'search',
            //props传参函数写法 在接收参数的组件声明接收
            // props:($route)=>{
            //     return{keyword:$route.params.keyword,k:$route.query.k}
            // }
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        //重定向 访问首页
        {
            path:'*',
            redirect:'/home'
        }
    ]
})