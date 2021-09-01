import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Another from '../views/Another.vue'
const home = () => import('../views/home/home.vue')
const classa = () => import('../views/classa/classa.vue')
const mine = () => import('../views/mine/mine.vue')
const shopcart = () => import('../views/shopcart/shopcart.vue')
const detail=()=>import('../views/detail/detail.vue')
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    //通过寻找组件定义参数名称
    path: '/home',
    //定义的组件名称
    component: home,
    meta: {
      title: '首页'
    },
    // beforeEnter:(to,from,next)=>{
    //   alert("欢迎来到小仙女的界面")
    //   next()
    // }
  },
  {
    path: '/class',
    name: 'calssa',
    component: classa,
    meta: {
      title: '分类'
    },
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      title: '我的'
    },
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart,
    meta: {
      title: '购物车'
    },
  },
  {
    path: '/detail:id',
    name: 'detail',
    component: detail,
    meta: {
      title: '详情'
    },
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: "history",
  linkActiveClass: 'active'

})
router.beforeEach((to, from, next) => {
  //从from转到to
  document.title = to.meta.title
  next()
})
export default router
