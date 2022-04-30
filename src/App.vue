<template>
  <div>
    <Header></Header>
    <!--路由组件出口地方-->
    <router-view></router-view>
    <!--  配置路由元信息用于是否显示  -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },mounted() {
    //派发一个action 获取商品分类 三级列表的数据 在这里只会发一次请求
    this.$store.dispatch('categoryList');
  }
}
</script>

<style>

</style>
