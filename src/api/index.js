// 当前这个模块：API进行统一管理
import requests from "@/api/ajax";
import mockRequests from './mockAjax'
//三级联动接口
// /api/product/getBaseCategoryList get 无参数
export const reqCategoryList=()=>{
    //发请求axios发请求返回结果Promise对象
    return requests({url:'/product/getBaseCategoryList',method:'get'});
}
//获取主页轮播图
export const reqGetBannerList=()=> mockRequests.get('/banner');
//获取floor数据
export const reqFloorList=()=>mockRequests.get('/floor');
