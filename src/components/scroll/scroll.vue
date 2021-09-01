<template>
  <div class="wrap" ref="myscroll">
    <div >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Bscroll,
  },
  mounted() {
    console.log("sss");
    this.scroll = new Bscroll(this.$refs.myscroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("slposition", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("scrpull");
    });
  },
  methods: {
    back(x, y, time = 300) {
      this.scroll&&this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // a() {
    //   console.log("aaaaaa");
    // },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getscrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style>
.wrap {
  overflow: hidden;
  touch-action: none;
  position: relative;
}
</style>