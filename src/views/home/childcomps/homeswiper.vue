<template>
  <div>
    <swiper>
      <swiperitem v-for="(item, index) in swiperbanners" :key="index">
        <a :href="item.link">
          <img :src="item.image" class="img"  @load="swiperload">
        </a>
      </swiperitem>
    </swiper>
  </div>
</template>
<script>
import swiper from "../../../components/Swiper/Swiper.vue";
import swiperitem from "../../../components/Swiper/SwiperItem.vue";
export default {
  name: " homeswiper",
  components: {
    swiper,
    swiperitem,
  },
  data(){
    return{
       isswiperload:false
    }   
  },
  props:{
        swiperbanners:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    methods:{
     swiperload(){
       if(!this.isswiperload){
         this.$emit("emswiperload")
         this.isswiperload=true
       }
     }
    }
  
};
</script>
