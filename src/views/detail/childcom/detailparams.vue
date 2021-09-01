<template>
<div>
  <div
    style="background-color: rgb(253, 246, 246); width: 100%; height: 10px"
  ></div>
  <!-- Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。
只有数组才有长度 -->
  <div class="paramsinfo" v-if="Object.keys(deparams).length !== 0">
    <p style="margin: 20px; font-size: 17px">参数信息</p>
    <table
      :key="index"
      class="paramsmassage"
      v-for="(table, index) in deparams.sizes"
    >
      <tr :key="indey" v-for="(tr, indey) in table">
        <td :key="indez" v-for="(td, indez) in tr">{{ td }}</td>
      </tr>
    </table>

    <table class="paramsdetail">
      <tr :key="index" v-for="(info, index) in deparams.infos">
        <td style="width: 40px">{{ info.key }}</td>
        <td style="color: sandybrown">{{ info.value }}</td>
      </tr>
    </table>

        <div v-if="deparams.image.length !== 0">
          <img :src="deparams.image" alt="" />
        </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: "detailParam",
  props: {
    deparams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.paramsmassage {
  margin: 10px;
}
.paramsmassage td {
  padding: 10px;
}
.paramsdetail {
  margin: 10px;
}
.paramsdetail td {
  padding: 10px;
}
</style>