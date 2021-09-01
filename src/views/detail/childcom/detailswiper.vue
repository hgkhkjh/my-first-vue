<template>
  <detswiper class="fa">
      <detswiperitem v-for="item in itemtopimg">
          <img :src="item" alt="">
      </detswiperitem>
  </detswiper>
</template>

<script>
import detswiper from "../../../components/Swiper/Swiper.vue";
import detswiperitem from "../../../components/Swiper/SwiperItem.vue";
export default {
  name: "detailswiper",
  components: {
    detswiper,
    detswiperitem,
  },
  props: {
    itemtopimg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>

.fa img{
    width: 100%;
    height: 350px;
}
</style>