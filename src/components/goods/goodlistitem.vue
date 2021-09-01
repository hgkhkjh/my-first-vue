<template>
  <div class="item" @click="gooditemclick">
      <img v-lazy="showImage" alt="" @load="gooditemload" :key="showImage">
      <div>
        <p class="p">{{goodsitem.title}}</p>
        <span style="margin-left:5%;">￥：</span>
        <span class="price" style="color: rgb(427, 188, 0)" >{{goodsitem.price}}</span>
        <span >
          <img src="../../assets/img/collect/collect.png" alt="" style="width:13px;height:13px;margin-left:10%;">
        </span>
        <span class="collect" style="margin-left:1%">{{goodsitem.cfav}}</span>
      </div>
  </div>
</template>

<script> 
export default {
name:"goodslistitem",
props:{
  goodsitem:{
    type:Object,
    default(){
      return{}
    }
  }
},
methods:{
gooditemload(){
  this.$bus.emit("gooditemload")
},
gooditemclick(){
  // console.log(this.goodsitem.iid);
 this.$router.push('/detail'+this.goodsitem.iid)
}
},
  computed: {
    showImage() {
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
}
</script>

<style>
.item {
  width: 45%;
  margin-bottom: 10px;
}
.p{
 overflow: hidden;
text-overflow:ellipsis;
 white-space: nowrap;
}
</style>