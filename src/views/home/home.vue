<template>
  <div> 
     <tabcontrol
      :titles="['推荐', '新款', '精选']"
      class="tabcon s"
      @itemclick="itemclicks"
      v-show="ishomeswiper"
      ref="tabcontrol2"
    ></tabcontrol>
    <NavBar>
      <template v-slot:center>
        <p>首 &nbsp 頁</p>
      </template>
    </NavBar>
 
    <scroll
      id="home"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @slposition="slposclick"
      @scrpull="scrpull"
    >
      <!-- 引入轮播图 -->

      <homeswiper
        :swiperbanners="banners"
        @emswiperload="emswiperload"
      ></homeswiper>
      <!-- 引入推荐 -->
      <homerecommend :crecommend="recommends"></homerecommend>
      <!-- 引入新品 -->
      <homenew></homenew>
      <!-- 引入控制标签 -->
      <tabcontrol
        :titles="['推荐', '新款', '精选']"
        class="tabcon"
        @itemclick="itemclicks"
        ref="tabcontrol"
         v-show="ishomeswiper2"

      ></tabcontrol>
      <!-- 引入商品数据 -->

      <goodslist :goods="goods[controlindex].list"></goodslist>
      <img src="../../assets/img/home/bottom.png" alt="" />
    </scroll>
    <backtop @click.native="backtop" v-show="judtop"></backtop>
  </div>
</template>
<style >
.img {
  width: 100%;
}
.tabcon {
  /* position: sticky; */

  /* top: 20px; */
  background-color: rgb(252, 250, 249);
}
#home {
  height: 100vh;
}
.s{
  position: relative;
 
}
</style>
<script>
import NavBar from "../../components/navbar/NavBar.vue";
//导入轮播图
import homeswiper from "../home/childcomps/homeswiper";
import Homeswiper from "./childcomps/homeswiper.vue";
//导入推荐
import homerecommend from "../home/childcomps/homerecommend.vue";
// 导入新品
import homenew from "../home/childcomps/homenew.vue";
//导入控制标签
import tabcontrol from "../../components/tabcontrol/tabcontrol.vue";
//导入ajax函数,导入ajax商品数据
import { gethome, gethomegoods } from "../../components/network/home.js";
//导入商品数据
import goodslist from "../../components/goods/goodlist.vue";
//引入bette-scroll
import scroll from "../../components/scroll/scroll.vue";
//导入点击回到顶部
import backtop from "../../components/backtop/backtop.vue";
// 导入防抖函数
import {debounce} from"../../assets/js/debounce.js"
export default {
  name: "home",
  components: {
    NavBar,
    homeswiper,
    Homeswiper,
    homerecommend,
    homenew,
    tabcontrol,
    goodslist,
    scroll,
    backtop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      controlindex: "pop",
      judtop: false,
      ishomeswiper: false,
      ishomeswiper2: true,
      offsetTop:0,
      scrolly:0
    };
  },
  
 deactivated(){
      this.scrolly=this.$refs.scroll.getscrollY()
    // this.$bus.$off("itemImageLoad", this.ItemListen)

    },
    activated(){
     this.$refs.scroll.refresh()
     this.$refs.scroll.back(0,this.scrolly,0)
    // console.log(this.scrolly);
    // console.log(this.$refs.scroll.getscrollY());
    // this.$refs.scroll.refresh()


    },
   
 
  created() {
    this.gethome();
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
    //监听goodsitem里面的图片监听
    //用全局变量接受goodsitem里面传入的事件
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    this.$bus.on("gooditemload", () => {
      refresh();
 
    });
  },
 
  methods: {
    gethome() {
      gethome().then((res) => {
        console.log("home.res");
        console.log(res.data.data.banner.list);
        console.log(res.data.data.recommend.list);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(res.data.data.recommend.list);
      });
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1;
      gethomegoods(type, page).then((res) => {
        console.log("商品信息发送成功");
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    itemclicks(index) {
      switch (index) {
        case 0:
          this.controlindex = "pop";
          break;
        case 1:
          this.controlindex = "new";
          break;
        case 2:
          this.controlindex = "sell";
          break;
      }
      this.$refs.tabcontrol2.serial=index
      this.$refs.tabcontrol.serial=index

    },
    backtop() {
      this.$refs.scroll.refresh();

      this.$refs.scroll.back(0, 0, 300);
      // console.log("backtop");
    },
    slposclick(position) {
      // console.log(position);
      this.judtop = -position.y > 700;
      this.ishomeswiper=-position.y>this.offsetTop
      this.ishomeswiper2=-position.y<this.offsetTop
    },
    scrpull() {
     
      this.gethomegoods(this.controlindex);
      this.$refs.scroll.refresh();
    },
    emswiperload() {
      this.offsetTop = this.$refs.tabcontrol.$el.offsetTop;
    },
  },
};
</script>
