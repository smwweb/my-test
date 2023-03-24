import Vue from 'vue'
import VueRouter, { RouterLink } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'datadisplay',
    component:()=>import('../views/main/main.vue'),
    children:[
      {
        path:'datadisplay',
        meta:{
          title:'数据展示'
        },
        component:()=>import('../views/datadisplay/datadisplay.vue')

      },
      {
        path:'map',
        meta:{
          title:'地图'
        },
        component:()=>import('../views/map/map.vue')

      },
      {
        path:'control',
        meta:{
          title:'策略控制'
        },
        component:()=>import('../views/control/control.vue')

      },
      {
        path:'singlelamp',
        meta:{
          title:'单灯数据'
        },
        component:()=>import('../views/singlelamp/singlelamp.vue')

      },
      {
        path:'historydata',
        meta:{
          title:'单灯历史数据'
        },
        component:()=>import('../views/historydata/historydata.vue')

      },
      {
        path:'strategy',
        meta:{
          title:'策略设置'
        },
        component:()=>import('../views/strategy/strategy.vue')

      },
      {
        path:'warning',
        meta:{
          title:'报警信息'
        },
        component:()=>import('../views/warning/warning.vue')

      },
    ]
  },
  {
    path:'/login',
    component:()=>import('../views/login/login.vue')

  },
 
]



const router = new VueRouter({
  routes
})

// 全局前置路由
// 挂载路由导航守卫
// to 将要访问的路径
// from 从哪个路径跳转而来
// next 是个函数，表示放行 next() 放行  next('/login') 强制跳转
router.beforeEach((to, from, next) => {
  // console.log(to,from);
  if (to.path.startsWith('/login')) {
      window.sessionStorage.removeItem('userinfo')
      next()
  } else {
      let user = window.sessionStorage.getItem('userinfo')
      // console.log(typeof(user));
      if (!user) {
          next({
              path: '/login'
          })
      } else {
          next()
      }
  }
});


export default router
