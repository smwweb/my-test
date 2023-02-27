import Vue from 'vue'
import VueRouter from 'vue-router'
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
          title:'地图'
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
        path:'lampinfo',
        meta:{
          title:'单灯信息'
        },
        component:()=>import('../views/lampinfo/lampinfo.vue')

      },
      {
        path:'strategy',
        meta:{
          title:'策略设置'
        },
        component:()=>import('../views/strategy/strategy.vue')

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

export default router
