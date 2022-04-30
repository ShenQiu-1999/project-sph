import {reqGetSearchInfo} from "@/api";

const state={
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
const actions = {
    async getSearchInfo({commit},params={}){
        let result = await reqGetSearchInfo(params)
        if (result.code===200)
            commit('GETSEARCHLIST',result.data)
    }
};
//计算属性 主要作用简化仓库中的数据 组件使用数据方便
const getters = {
    //state当前仓库的state
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}