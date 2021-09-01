<template >
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  components: {},
};
</script>

<style>
#tab-bar {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(427, 188, 0);
  font-family: "幼圆";
}
</style>

