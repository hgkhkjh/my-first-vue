<template>
  <div class="shop">
    <img :src="this.shop.logo" alt="" class="logo" />
    <span class="name">{{ this.shop.name }}</span>
    <div class="sell">
        <table >
            <tr >
                <td >{{ sell +"&nbsp"}}</td>
               
                <td>{{this.shop.goodsCount}}</td>
            </tr>
             <tr >
                <td style="font-size:10px;color:rgb(93, 94, 94)">总销量</td>
                <td style="font-size:10px;color:rgb(93, 94, 94)">商品数目</td>
            </tr>
        </table>
     
    </div>
    <div class="score" >
        <div v-for="item in this.shop.score">
           {{item.name}} &nbsp &nbsp{{item.score}}  &nbsp &nbsp 
           <span :class="{ 'isbettertrue': item.isBetter }" class="isbetter"> 
               
               <span>
                   {{item.isBetter? "高":"低"}}
               </span>
               </span>
        </div>
        
    </div>
       <button class="detailshopbtn">进店逛逛</button>
       <div
      style="background-color: rgb(253, 246, 246); width: 100%; height: 5px;margin-top:70px;margin-bottom:70px"
    ></div>
  </div>
</template>

<script>
export default {
  name: "detailshop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created(){
      console.log("shop数据");
      console.log(this.shop.score);
  },
  computed:{
      sell(){
       if(this.shop.sells<10000){
           return this.shop.sells
       }else{
           return(this.shop.sells/10000).toFixed(1)+'万'
       }
      },

    
  }
};
</script>

<style>
.shop {
  position: relative;
}
.logo {
  width: 50px;
  height: 50px;
  border-radius: 40px;
  margin: 20px;
  display: inline-block;
}
.name {
  color: rgb(93, 94, 94);
  position: absolute;
  top: 30px;
  left: 80px;
  font-size: 20px;
}
.sell{
       width: 36%;
    font-size: 20px;
    margin-left: 25px;
    margin-top: 25px;
    border-right: 1px solid slategrey;
    padding: 0px;
}
.sell span{
    margin: 20px;
}
.score{
    position: absolute;
   right: 40px;
    top: 105px;
    line-height: 25px;
    font-size: 12px ;
    
}
.isbetter{
    background-color: rgb(55, 190, 123);
    padding: 2px;
    color: white;
    height: 15px;
    width: 15px;
   border-radius: 15px;
}
.detailshopbtn{
    background-color: rgb(241, 235, 235);
    border-radius: 20px;
    border: none;
    width: 70%;
    height: 40px;
    color: rgb(49, 47, 47);
    margin-top: 35px;
    margin-left: 59px;
}
.isbettertrue{
    background-color: red;
}
</style>