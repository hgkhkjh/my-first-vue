import { createApp } from 'vue'
// import Vue from "vue"
import App from './App.vue'
import router from './router'
import axios from 'axios'
import fastclick from 'fastclick'
import lazyload from 'vue-lazyload'
// import toast from "./components/toast/index.js"

// import { createStore } from 'vuex'
import store from './store'
import { request } from './components/network/request'
import mitt from "mitt"
import VueLazyload from 'vue3-lazyload'
const app = createApp(App)
//设置$bus全局变量
app.use(store)
app.config.globalProperties.$bus = new mitt()
// Vue.prototype.$bus=new Vue()
app.config.globalProperties.$axios = axios
app.use(router)
//使用fastclick
fastclick.attach(document.body)
// app.use(toast)
app.mount('#app')
//使用图片懒加载
app.use(VueLazyload,{
    loading:require('./assets/img/lazy/1.png')
})
request({
    url:"/home/multidata",
}).then(res=>{
    // console.log(res);
}).catch(err=>{
    // console.log(err);
})
