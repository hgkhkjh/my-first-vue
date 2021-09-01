<template>
  <div>
    <productlistitem v-for="(item,index) in cartlist"
    :key="index"
    :shproduct="item"
    >
        
    </productlistitem>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import productlistitem from"./productlistitem.vue"
export default {
 name:'productlist',
 components:{
     productlistitem
 },
computed:{
    ...mapGetters(['cartlength','cartlist'])
    // ...mapGetters({
    //   shoplength:'cartlength'
    // })
  }
}
</script>

<style>

</style>