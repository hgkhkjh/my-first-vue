<template>
  <div class="check-button" >
      <img src="../../assets/img/shopcart/3.png" alt=""
       v-show="isChecked"
       
       class="checkstate">
  </div>
</template>

<script>
export default {
    props: {
        isChecked: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>
.check-button{
     width: 17px;
    height: 17px;
    border-radius: 18px;
    border:2px solid #aaa ;
}
.check {
    border-color: red;
    background-color: red;
}
.checkstate{
    width: 18px;
    height: 18px;
}
</style>