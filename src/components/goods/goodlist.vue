<template>
  <div class="goodslist">
    <goodslistitem v-for="item in goods" :goodsitem="item"></goodslistitem>
  </div>
</template>

<script>
import goodslistitem from "./goodlistitem.vue";
export default {
  name: "goodslist",
  components: {
    goodslistitem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return[];
      },
    },
  },
};
</script>

<style>
.goodslist{
  display: inline-block;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* padding-bottom:20px; */
  padding-bottom: 44px;

}
</style>