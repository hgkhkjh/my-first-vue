<template>
  <div class="tab-bar-item" @click="every">
    <template v-if="!active">
      <slot name="itemicon"></slot>
    </template>
    <!-- 引用的是active这个组件不是这个变量 -->
    <template v-if="active">
      <slot name="itemicon-active"></slot>
    </template>
    <div :style="acstyle">
      <slot name="itemtext"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  components: {},
  props: {
    path: String,
    tacstyle: {
      type: String,
      default: "aqua",
    },
  },
  computed: {
    active() {
      //如果连接没找到到就返回-1（区分大小写）不把active写死
      return this.$route.path.indexOf(this.path) !== -1;
    },
    acstyle() {
      return this.active ? { color: this.tacstyle } : {};
    },
  },
  methods: {
    every() {
      //跳转到this.path这个路由
      this.$router.replace(this.path);
    },
  },
};
</script>
<style >
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img {
  margin-top: 3px;
  width: 30%;
  height: 25px;
  display: block;
  text-align: center;
  padding-left: 33%;
}
</style>
