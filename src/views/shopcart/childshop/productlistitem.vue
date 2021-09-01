<template>
    <div id="shop-item">
        <div class="item-selector">
            <!-- <input type="checkbox" class="shcheckbox"  :checked="checkstate"> -->
            <checkbutton :isChecked="shproduct.cheked" 
            @click="checkclick"
            ></checkbutton>
        </div>
        <div class="item-img">
            <img :src="shproduct.image" alt="商品图片">
        </div>
        <div class="item-info">
            <div class="item-title">{{shproduct.title}}</div>
            <div class="item-desc">{{shproduct.desc}}</div>
            <div class="info-bottom">
                <div class="item-price shleft">{{shproduct.price}}</div>
                <div class="item-count shright">x{{shproduct.count}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import checkbutton from "../../../components/checkbuttom/checkbutton.vue"
export default {
 name:'productlistitem',
 data(){
     return{
         checkstates:false
     }
 },
 components:{
     checkbutton
 },
 props:{
     shproduct:{
         type:Object,
         default(){
             return {}
         }
     },
     
 },
 methods:{
     checkclick(){
         this.shproduct.cheked=!this.shproduct.cheked
         console.log(this.shproduct.cheked);
        //  console.log(this.checkstates);
     }
 }

}
</script>

<style>
#shop-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    height: 100px;
}
.shcheckbox{
    width: 20px;
    height: 20px;
}


.item-selector {
    /* width: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-title  {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
}
 .item-desc {
       overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 8px;
    margin-top: 7px;
    color: darkgrey;
 }
.item-img {
    padding: 5px;
}
.item-img img {
    width: 70px;
    height: 90px;
    display: block;
    border-radius: 5px;
}
.item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
/* .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
} */
.info-bottom {
    margin-top: 10px ;
    position: absolute;
    bottom: 0px;
    left: 10px;
    right: 10px;
}
.info-bottom .item-price {
    color: orange;
}
.shright{
    float: right;
}

</style>