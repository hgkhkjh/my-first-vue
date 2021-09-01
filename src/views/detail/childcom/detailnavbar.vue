<template>
  <div>
    <navbar>
    <template v-slot:left >
        <div class="r" @click="back">
          👈
        </div>
    
    </template>
      <template v-slot:center>
        <div class="center">
          <div v-for="(item, index) in title" class="line"
           @click="indetail(index)" 
           :class="{a:index===indexs}">
            {{ item }}
          </div>
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../../components/navbar/NavBar.vue";

export default {
  name: "detalnavbar",
  components: {
    navbar,
  },
  data() {
    return {
     
      title: ["商品", "参数", "评论", "推荐"],
      indexs:0
    };
  },
  methods:{
    indetail(index){
   this.indexs=index
   this.$emit("detailnavindex",index)
    
    },
    back(){
        this.$router.back()
    }
  }
};
</script>

<style scoped>
.center {
  width: 100%;
  height: 30px;
  display: flex;
  margin-top: 10px;
}
.line {
  display: inline-block;
  flex: 1;
}
.a{
   color:saddlebrown;
   font-weight: bold;
}
.r{
    font-size: 20px;
    color: ghostwhite;
    margin-left: 15px;
}
</style>