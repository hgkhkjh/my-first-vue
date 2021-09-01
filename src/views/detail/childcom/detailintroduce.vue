<template>
  <div>
    
    <div
      style="border-top: 1px solid rgb(427, 188, 0); width: 70%; float: left"
    ></div>
    <div class="indescs">
      {{ this.introduce.desc }}
    </div>
    <div
      style="border-top: 1px solid rgb(427, 188, 0); width: 70%; float: right"
    ></div>
       <div :key="index" v-for="(item, index) in introduce.detailImage">
      <div class="inkey">{{ item.key }}</div>
      <div class="inlist">
        <img
          :key="imageIndex"
          :src="image"
          @load="imgLoad"
          alt=""
          v-for="(image, imageIndex) in item.list"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailintroduce",
    data() {
    return {
      count: 0,
    };
  },
  props: {
    introduce: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    //   console.log(this.introduce);
  },

  methods: {
    click() {
      console.log(this.introduce.detailImage[0].list);
    },
    imgLoad() {
      if (++this.count === this.introduce.detailImage[0].list.length) {
        this.$emit("imgLoad");
      }
    },
  },
};
</script>

<style>
.indescs {
  margin-top: 35px;
  margin: 25px;
  padding-top: 10px;
}
.inkey {
  font-size: 20px;
  margin-top: 60px;
  margin-bottom: 0px;
  margin-left: 10px;
  color: rgb(14, 13, 13);
}
.inlist img {
  width: 100%;
}
</style>