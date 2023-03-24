import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaiduMap from 'vue-baidu-map'
// import axios from 'axios'


// axios.defaults.headers.post['Content-Type']='application/json

// 百度地图
Vue.use(BaiduMap, {
  ak: 'hpk9mjlnCB0TD8KV0w5cYO8ob9a95S9x'
})

// 引入elementui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);

// 全局注册
import ChartBlock from '../src/components/Charts/ChartsBlock.vue'
Vue.use(ChartBlock)

// 引入全局样式文件
import './assets/css/reset.css'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
