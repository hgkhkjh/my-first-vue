<template>
  <div>
    <div style="margin: 5px 10px">{{ this.goods.title }}</div>
    <div class="two">
      {{ this.goods.newPrice }}
      <span class="old">{{ this.goods.oldPrice }}</span>
      <span class="y" v-if="this.goods.discount">{{ this.goods.discount }}</span>
    </div>
    <div class="three">
      <span v-for="item in this.goods.columns" class="san">
        {{ item }}
      </span>
    </div>
    <div class="onefen"></div>
    <div class="four">
      <span class="fouritem" v-for="item in goods.services">
        <img :src="item.icon" />
        <span>{{ item.name }}</span></span
      >
    </div>
    <div class="twofen"></div>
  </div>
</template>

<script>
export default {
  name: "goodsdetail",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    console.log(this.goods.discount);
  },
};
</script>

<style>
.two {
  margin: 5px 10px;
  font-size: 20px;
  color: rgb(427, 188, 0);
}
.old {
  font-size: 10px;
  color: darkgray;
  text-decoration: line-through;
}
.y {
  background-color: rgb(427, 188, 0);
  color: white;
  font-weight: bold;
  border-radius: 5px;
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 5px;
  padding: 0px 3px;
}
.three {
  display: flex;
  color: darkgrey;
  width: 100%;
  margin-top: 25px;
}
.san {
  flex: 1;
  margin: 5px 20px;
  font-size: 10px;
}
.onefen {
  background-color: rgb(236, 228, 228);
  width: 100%;
  height: 0.7px;
}
.four {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  padding: 10px;
  margin-top: 10px;
  overflow: hidden;
  height: 25px;
}
.fouritem img {
  width: 10px;
  height: 10px;
  position: relative;
  top: 0px;
}
.four span {
  color: #333;
  font-size: 8px;
}
.twofen {
  background-color: rgb(245, 239, 239);
  width: 100%;
  height: 6px;
}
</style>