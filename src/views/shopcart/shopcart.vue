<template>
  <div>
    <!-- 导入顶部导航栏 -->
    <shnav>
      <template v-slot:center class="shnav">
        <p>购物车 <span>({{cartlength}})</span> </p>
      </template>
    </shnav>
 <!-- 导入beterscroll -->
    <shscroll id="shconcent"
    ref="shscroll"
      :probeType="3"
      :pullUpLoad="true"
    >
    <!-- 导入商品列表 -->
    <productlist></productlist>
     <!-- <img src="../../assets/img/home/bottom.png" alt="" />  -->
    </shscroll>
    <!-- 导入底部导航栏 -->
    <bottomnavbar ></bottomnavbar>
  </div>
</template>
<script>
// 导入顶部导航栏
import shnav from "../../components/navbar/NavBar.vue";
// 导入底部导航栏
import bottomnavbar from "./childshop/bottomnavbar.vue"
//导入商品列表
import productlist from "./childshop/productlist.vue"
// 导入beterscroll
import shscroll from "../../components/scroll/scroll.vue"
import {mapGetters} from "vuex"
export default {
  name: "shopcart",
  components: {
    shnav,
    productlist,
    shscroll,
    bottomnavbar,
  },
  computed:{
    ...mapGetters(['cartlength','cartlist'])
    // ...mapGetters({
    //   shoplength:'cartlength'
    // })
  },
  activated(){
    this.$refs.shscroll.refresh()
  },
updated(){
    this.$refs.shscroll.refresh()

}
};
</script>
<style>
 .shnav{
   margin-top: 15px;
 }
 #shconcent{
   height:calc(100vh - 121px)
 }
</style>
