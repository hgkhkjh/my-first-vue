<template>
  <div id="detail">
    <!-- 导入导航 -->
    <detailnavbar @detailnavindex="detailnavindex" ref="denavs"></detailnavbar>
    <!-- <ul>
      <li v-for="item in $store.state.shopcart">
{{item}}
      </li>
    </ul> -->
    <scroll
      ref="descroll"
      id="dehome"
      :probeType="3"
      :pullUpLoad="true"
      @slposition="slposition"
    >
      <!-- 导入轮播图 -->
      <detailswiper :itemtopimg="topimg"></detailswiper>
      <!-- 导入商品详情 -->
      <goodsdetail :goods="goods"></goodsdetail>
      <!-- 导入店铺详情 -->
      <detailshop :shop="shop"></detailshop>
      <!-- 导入商品介绍 -->
      <introduce :introduce="introduce" @imgLoad="imgLoad"></introduce>
      <!-- 导入尺寸信息 -->
      <detailparams :deparams="deparams" ref="detailparams"></detailparams>
      <!-- 导入评论 -->
      <detailcomments
        :decomments="decomments"
        ref="detailcomments"
      ></detailcomments>
      <!-- 导入商品推荐 -->
      <degoodslist :goods="regoods" ref="degoodslist"></degoodslist>

      <img src="../../assets/img/home/bottom.png" alt="" /> 
      </scroll>
      <!-- 导入加入购物车弹窗 -->
      <toast :tomessage="tomessage" :toshow="toshow"></toast>
      <backtop @click.native="backtop" v-show="judtop"></backtop>
      <bottomshop
       @addshop="addshops"
      ></bottomshop>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import detailswiper from "./childcom/detailswiper.vue";
import detailnavbar from "./childcom/detailnavbar.vue";
// \导入加入购物车弹窗
import toast from "../../components/toast/toast.vue"
// 导入better-scroll
import scroll from "../../components/scroll/scroll.vue";
//导入商品详情
import goodsdetail from "./childcom/goodsdetail.vue";
// 导入店铺详情
import detailshop from "./childcom/detailshop.vue";
//导入商品介绍
import introduce from "./childcom/detailintroduce.vue";
//导入尺寸信息
import detailparams from "./childcom/detailparams.vue";
// 导入评论
import detailcomments from "./childcom/detailcomments.vue";
// 导入商品推荐
import degoodslist from "../../components/goods/goodlist.vue";
// // 导入防抖函数
// 导入backtop
import backtop from "../../components/backtop/backtop.vue";
// 导入底部购物车
import bottomshop from "./childcom/bottomshop.vue"
// import { backtopjs } from "../../assets/js/detail.js";
// import debounce from "../../assets/js/debounce.js"
//导入detal.js的对象
import {
  detailjs,
  Goods,
  Shop,
  deparams,
  goodsrecommend,
  
} from "../../components/network/detail.js";
export default {
  name: "detail",
  data() {
    return {
      ids: null,
      topimg: [],
      goods: {},
      shop: {},
      introduce: {},
      deparams: {},
      decomments: {},
      regoods: [],
      denav: null,
      judtop: false,
      tomessage:'',
      toshow:false
    };
  },
  components: {
    detailnavbar,
    detailswiper,
    goodsdetail,
    detailshop,
    scroll,
    introduce,
    detailparams,
    detailcomments,
    degoodslist,
    backtop,
    bottomshop,
    toast
  },
  created() {
    this.ids = this.$route.params.id;
    detailjs(this.ids).then((res) => {
      // console.log(res);
      const result = res.data.result;
      this.topimg = result.itemInfo.topImages;
      // console.log(this.topimg);
      // 获取商品详情信息
      this.goods = new Goods(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      //获取店铺详情
      this.shop = new Shop(result.shopInfo);
      this.introduce = result.detailInfo;
      // 获取尺寸信息
      this.deparams = new deparams(
        result.itemParams.info,
        result.itemParams.rule
      );
      // 获取评论，有的商品没有评论
      if (result.cRate !== 0) {
        this.decomments = result.rate.list[0];
      }
    });
    // 获取商品推荐
    goodsrecommend().then((res) => {
      this.regoods = res.data.data.list;
    });
  },
  // detail: [backtopjs],

  methods: {
    //backtop  js

    backtop() {
      this.$refs.descroll.refresh();
      // console.log(this.$refs.descroll);
      this.$refs.descroll.back(0, 0, 300);
      // console.log("backtop");
    },
    imgLoad() {
      this.$refs.descroll.refresh();
      (this.denav = []),
        this.denav.push(0),
        this.denav.push(this.$refs.detailparams.$el.offsetTop),
        this.denav.push(this.$refs.detailcomments.$el.offsetTop),
        this.denav.push(this.$refs.degoodslist.$el.offsetTop);
      this.denav.push(Number.MAX_VALUE);
      // console.log(this.$refs.detailcomments.$el);
      // console.log(this.$refs.detailparams.$el.offsetTop);
    },
    detailnavindex(index) {
      //  console.log(index);
      this.$refs.descroll.back(0, -this.denav[index], 500);
    },
    //滚到对应位置显示对应导航
    slposition(position) {
      //  console.log(position);
      // if(this.denav!==null){
      this.judtop = -position.y > 700;
      // console.log(this.judtop);
      const posy = -position.y;
      //  console.log(posy);
      // console.log(this.index);
      for (let i = 0; i < this.denav.length; i++) {
        if (
          this.index !== i &&
          posy >= this.denav[i] &&
          posy <= this.denav[i + 1]
        ) {
          this.index = i;
          this.$refs.denavs.indexs = i;
        }
      }
      // }
    },
    //添加商品到购物车
    ...mapActions(['addshop']),
    addshops(){
       // 获取购物车需要展示的信息
      const prodout = {}
      // 图片
      prodout.image = this.topimg[0]
      // 标题
      prodout.title = this.goods.title
      // 简介
      prodout.desc = this.goods.desc
      // 价格
      prodout.price = this.goods.newPrice
      // id
      prodout.id = this.ids

      this.addshop(prodout).then(res=>{
        this.tomessage=res
        this.toshow=true
        setTimeout(() => {
          
          this.toshow=false
          this.tomessage=''
        }, 1500);
      })
      //commit在vuex里面添加数据 吧prodout传给store里面的mutations里的addshop函数
  
      
    }
  },
};
</script>

<style >
#detail {
  height: 100vh;
  position: relative;
  z-index: 1000;
  background-color: white;
}
#dehome {
  height: 100vh;
}
</style>