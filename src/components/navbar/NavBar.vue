<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style>
body {
  margin: 0px;
  padding: 0px;

}
.navbar {
  height: 35px;
  width: 100%;
  background-color: rgb(427, 188, 0);
  display: flex;
  position:fixed;
  top: 0px;
  z-index: 10;

}
.left {
  height: 100%;
  width: 20%;
  background-color: rgb(245, 218, 143);
}
.right {
  height: 100%;
  width: 20%;
  background-color: rgb(245, 218, 143);
}
.center {
  flex: 1;
  text-align: center;
  color: rgb(230, 245, 229);
  font-size: 0.3rem;
  margin-top: -0.1rem;
}
</style>
