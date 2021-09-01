<template>
  <div class="toast" v-show="toshow">
      {{tomessage}}
  </div>
</template>

<script>
export default {
    props: {
        tomessage:{
            type:String,
            default: ""
        },
        toshow: {
            type:Boolean,
            default: true
        }
    },
    // data(){
    //    return{
    //         tomessage:'',
    //         toshow:false
    //    }
    // },
    // methods:{
    //       show(tomessage,time){
    //           this.tomessage=tomessage
    //           this.toshow=true
    //           setTimeout(() => {
    //               this.toshow=false
    //               this.tomessage=''
    //           }, time);
    //       }
    // }
}
</script>

<style>
.toast {
    background-color: rgb(241, 186, 67);
    color: #fff;
    z-index: 12;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 14px 20px;
    border-radius:  13px;
    opacity: 0.9;
}
</style>