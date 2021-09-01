<template>
  <div class="father">
    <div class="rocommend" v-for="item in crecommend"> 
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "homerecommend",
  props: {
    crecommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style >
.father{
    display: flex;
}
.rocommend{
flex: 1;
text-align: center;
padding: 4px 0px 21px;
border-bottom: 10px solid rgb(244, 245, 245);
}
a{
    text-decoration: none;
    color: black;
} 

a:link {
    color: black;

}

a,a:hover,a:active,a:visited,a:link,a:focus{
   -webkit-tap-highlight-color:rgba(0,0,0,0);
   -webkit-tap-highlight-color: transparent;
   outline:none;
   background: none;
   text-decoration: none;
}
.rocommend img{
    width: 75%;
    margin: 15%;
    
}

</style>