<template>
  <div class="BottomBar">
      <div class="Check">
          <checkbutton class="checkButton" :isChecked ="checkall" 
          @click="checkally"
          > </checkbutton>
          <!-- {{checkall}} --> 
          <span style="position: absolute;top: 9px;left:35px">全选</span>
      </div>
      <div class="total">
          合计{{checkLength}}
      </div>
       <div class="tobug">
          去购买({{checkLength}})
      </div>
      <div class="count">
          总价格{{totalPrice}}
      </div>
      
  </div>
</template>
<script>
import {mapGetters} from "vuex"
import checkbutton from"../../../components/checkbuttom/checkbutton.vue"
export default {
    name:"bottomnavbar",
  
    components:{
        checkbutton
    },
    computed:{
        ...mapGetters(['cartlength','cartlist']),
        checkall(){
           if(this.cartlength === 0) {
               return false
           }else{
            return !(this.cartlist.find(item => !item.cheked))

           }
        },
           totalPrice() {
            return '￥' + this.cartlist.filter(item => {
                return item.cheked
            }).reduce((preValue, item) => {
                return preValue + item.price.slice(1,3) * item.count
            }, 0)
        },
         checkLength() {
            return this.cartlist.filter(item => item.cheked).length
        },
    },
    methods:{
        checkally(){
                if(this.checkall){
                this.cartlist.forEach(val => {
                    val.cheked = false
                });
            }else{
                this.cartlist.forEach(val => {
                    val.cheked = true
                });
            }
        }
    }

}
</script>

<style>
.BottomBar{
    background-color: rgb(245, 227, 178);
    height: 40px;
    width: 100%;
    position: fixed;
    bottom: 49px;
}


.Check, .checkButton, .total, .count, .tobug{
    display: inline-block;
    
}
.Check {
    margin-top: 0px;
}

.checkButton {
    width: 17px;
    height: 17px;
    border-color: #fff;
    margin-top: 6px;
    margin-left: 10px;
}

.total,.count {
    position: absolute;
    right: 90px;
    top: -2px;
    line-height: 40px;
}
.tobug{
    position: absolute;
    right: 0px;
    width: 20%;
    padding-left: 5%;
    line-height: 40px;
    background-color:rgb(255, 194, 125) ;

}
.total {
    margin-right:40px
}
.count {
    margin-right:100px
}
</style>