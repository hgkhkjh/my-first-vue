<template>
  <div id="app">
    <router-view v-slot="{Component}">
      <transition exclude="detail">
         <keep-alive>
           <component :is="Component"/>
         </keep-alive>
      </transition>
    </router-view>
    <tabbar>
      <!-- tabbar里面有插槽，在这里添加内容会显示在插槽里面，添加<tabbaritem>这个组件里面的内容就会显示在插槽里面 -->
      <tabbaritem path="/home" tacstyle="rgb(17, 137, 164)">
        <template v-slot:itemicon>
          <img src="./assets/img/tabbar/home.png" id="xyz" />
        </template>
        <template v-slot:itemicon-active>
          <img src="./assets/img/tabbar/public.png" />
        </template>
        <template v-slot:itemtext>
          <div>首页</div>
        </template>
      </tabbaritem>

      <tabbaritem path="/mine" tacstyle="rgb(17, 137, 164)">
        <template v-slot:itemicon>
          <img src="./assets/img/tabbar/mine.png" alt />
        </template>
        <template v-slot:itemicon-active>
          <img src="./assets/img/tabbar/public.png" alt />
        </template>
        <template v-slot:itemtext>
          <div>我的</div>
        </template>
      </tabbaritem>

      <tabbaritem path="/class" tacstyle="rgb(17, 137, 164)">
        <template v-slot:itemicon>
          <img src="./assets/img/tabbar/class.png" alt />
        </template>
        <template v-slot:itemicon-active>
          <img src="./assets/img/tabbar/public.png" alt />
        </template>
        <template v-slot:itemtext>
          <div>分类</div>
        </template>
      </tabbaritem>

      <tabbaritem path="/shopcart" tacstyle="rgb(17, 137, 164)">
        <template v-slot:itemicon>
          <img src="./assets/img/tabbar/shop.png" alt />
        </template>
        <template v-slot:itemicon-active>
          <img src="./assets/img/tabbar/public.png" alt />
        </template>
        <template v-slot:itemtext>
          <div>购物车</div>
        </template>
      </tabbaritem>
    </tabbar>
  </div>
  
</template>

<script>
// 导入rem布局
import {remjs} from "./assets/js/rem.js"
import tabbaritem from "./components/tabbar/tabbaritem.vue";
import tabbar from "./components/tabbar/tabbar.vue";

//设置rem布局
remjs()
export default {
  name: "App",
  data(){
    return{
      scroll:null
    }
  },
  components: {
    tabbaritem,
    tabbar,
  },

};

</script>

<style>
@import "assets/css/public.css";
body {
  padding-top: 30px !important;
  padding-bottom: 60px !important;
  font-size: 0.27rem;
}
</style>
 


