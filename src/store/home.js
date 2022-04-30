import {reqCategoryList,reqGetBannerList,reqFloorList} from "@/api";
import {arrayEquals} from "element-ui";
//home模块的小仓库
const state={
    //state数据默认初始值注意【根据接口的返回值初始化】
    categoryList:[],
    //轮播图数组
    bannerList:[],
    //floor组件数据
    floorList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,16);
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList;
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发送请求，获取服务器数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if (result.code===200)
            commit("CATEGORYLIST",result.data);
    },
    //获取轮播图数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if (result.code===200){
            commit('GETBANNERLIST',result.data);
        }
    },
    //获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList();
        if (result.code===200){
            commit('GETFLOORLIST',result.data);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}