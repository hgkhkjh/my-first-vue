<template>
  <div class="cfather">
    <div
      class="tabcontrol"
      v-for="(item,index) in titles"
      :key="index"
      :class="{active:index===serial}"
      @click="itemclick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<style>
.cfather{
  display: flex;
}
.tabcontrol {
  top: 50px;
  display: flex;
  width: 100%;
  text-align: center;
  margin: 0px 12%;
  padding: 5px 0px;
  top: 50px;
  height: 25px;
}
.tabcontrol span {
  flex: 1;
  font-size: 13px;
}
.active {
  color: rgb(300, 188, 0);
  border-bottom: 3px solid rgb(427, 188, 0);
}
</style>
<script>
// import {tabconjs} from "../../assets/js/tabcontrol.js";
// 导入固定导航的js
    // tabconjs();
export default {
  name: "tabcontrol",
  data() {
    return {
      serial: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.serial = index;
      this.$emit('itemclick',index)
    },
  },

  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};


</script>
