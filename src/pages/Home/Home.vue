<template>
  <div>
    <!--  三级联动全局组件 不需要引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer/ListContainter";
import Recommend from "@/pages/Home/Recommend/Recommend";
import Rank from "@/pages/Home/Rank/Rank"
import Like from "@/pages/Home/Like/Like";
import Floor from "@/pages/Home/Floor/Floor"
import Brand from "@/pages/Home/Brand/Brand";

import {mapState} from "vuex"
export default {
  name: "Home",
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed:{
    ...mapState({floorList:state=>state.home.floorList}),
    // ...mapState('home',["floorList"])
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  }
}
</script>

<style scoped>

</style>