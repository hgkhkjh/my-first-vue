<template>
  <div class="father">
    
    <span class="detailsp">
      <img
        src="../../../assets/img/detail/bottomshop1.png"
        alt=""
        class="boshimg"
      />
      <div style="margin-left:5px;margin-top:-5px">
        客服
      </div>
    </span>
    <span class="detailsp">
      <img
        src="../../../assets/img/detail/bottomshop2.png"
        alt=""
        class="boshimg"
      />
        <div style="margin-left:5px;margin-top:-5px">
        店铺
      </div>
    </span>

    <span class="detailsp"
      ><img
        src="../../../assets/img/detail/bottomshop3.png"
        alt=""
        class="boshimg"
    />
  <div style="margin-left:5px;margin-top:-5px">
        收藏
      </div>
    </span>

    <span class="deboshright"
     style="background-color:rgb(245, 218, 143)"
     @click="addshop"
     >加入购物车</span>
    <span  class="deboshright"  style="background-color:rgb(427, 188, 0);">
      
      &nbsp &nbsp 购买</span>
  </div>
</template>

<script>
export default {
  name: "bottomshop",
  methods:{
    addshop(){
      this.$emit('addshop')
    }
  }
};
</script>

<style>
.father {
  position: fixed;
  bottom: -1px;
  height: 50px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  margin: 0px;
  font-size: 10px;
}
.boshimg {
  width: 30px;
  height: 30px;
}
.detailsp {
  margin:0px 13px;
  /* height: 120%; */
  
}
.deboshright{
  /* height: 120%; */

 padding: 5% ;
 width: 100%;
 font-size: 12px;
 font-weight: bold;
 color: azure;
 /* height: 100; */
 /* color: azure; */
 /* margin-right: 0px; */
}
</style>