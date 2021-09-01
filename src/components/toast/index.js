import toast from "./toast.vue"
import Vue from "vue";
const obj ={
    extends:toast,

}
// vue提供install可供我们开发新的插件及全局注册组件等
obj.install=function(Vue){
    //添加组件
    // const toastcon=Vue.extend(toast)
    const toasts =new toastcon()
    // 将组件挂在某一元素上
    toasts.$mount(document.createElement('div'))
    document.body.appendChild(toasst.$el)
    Vue.prototype.$toast=toast

}
export default obj