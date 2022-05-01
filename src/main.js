import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//三级联动组件---全局组件
import TypeNav from './components/TypeNav/TypeNav'
import Carousel from '@/components/Carousel'
//第一参数全局组件的名字 第二个参数哪个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)

//引入路由
import router from "@/router";
//测试
// import {reqCategoryList} from "@/api";
// reqCategoryList();
//引入仓库
import store from "@/store/index";
//引入mockServer.js
import '@/mock/mockServer';
//引入swiper样式
import 'swiper/css/swiper.min.css';

new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus=this;
  },
  //注册路由 组件身上有$route：获取路由信息:路径、query、params
  //                $router：进行编程式导航路由跳转:push、replace
  //注册完路由不管是否是路由组件都有上面两个属性
  router,
  //注册仓库 组件身上多了$store属性
  store,
}).$mount('#app')
