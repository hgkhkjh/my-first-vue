<template>
  <div>
    <div
      style="background-color: rgb(253, 246, 246); width: 100%; height: 10px"
    ></div>
    <div v-if="Object.keys(decomments).length !== 0">
      <div>
        <div class="uesercomments">用户评价</div>
        <div style="float: right; margin-top: 20px; margin-right: 16px">
          更多 
        </div>
         <div
      style="background-color: rgb(253, 246, 246); width: 100%; height: 5px;margin-bottom:20px"
    ></div>
      </div>
      <div>
        <img class="commenttou" :src="decomments.user.avatar" alt="" />
        
        <span class="connentsname">{{
          decomments.user.uname
        }}</span>
      </div>
      <div style="margin: 15px">
        <p>{{ decomments.content }}</p>
        <div>
          <span style="margin: 10px; margin-left: 0px; color: brown">{{
            comdate
          }}</span>
          <span style="margin: 10px; color: brown">{{ decomments.style }}</span>
        </div>
        <div>
          <img
            class="commentsimg"
            :key="index"
            :src="item"
            alt=""
            v-for="(item, index) in decomments.images"
          />
        </div>
      </div>
    </div>
    <div style="color: red" v-else>暂无用户评论</div>
    <div
      style="background-color: rgb(253, 246, 246); width: 100%; height: 10px;margin-bottom:20px"
    ></div>
  </div>
</template>

<script>
// 导入时间戳的转换函数
import { formatDate } from "../../../assets/js/detail.js";
export default {
  name: "detalcomments",
  props: {
    decomments: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    comdate() {
      let date = new Date(this.decomments.created * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>

<style>
.uesercomments {
  margin: 20px;
  font-size: 15px;
  display: inline-block;
  color: brown;
  font-weight: bold;
}
.commentsimg {
  width: 120px;
  height: 120px;
  margin: 2px;
  margin-top: 10px;
  display: inline-block;
}
.commenttou{
  width: 50px;
  height: 50px;
  border-radius: 30px;
}
.connentsname{
  position: relative;
  top: -20px;
  left: 10px;
}
</style>