<template>
    <div ref="chartEl" style="height:100%" />
  </template>
  <script>
 import * as echarts from 'echarts';
  const ChartBlock = {
    name: 'ChartBlock',
    /* props: {
      option: {
        type: Object,
        default: () => {}
      }
    }, */
    data() {
      return {
        chart: null
        // data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 20, 36, 10, 10, 20, 5, 20, 36, 10]
      }
    },
    watch: {
      option: {
        handler(newValue, oldValue) {
          this.chart.setOption(newValue)
        },
        // 因为option是个对象,而我们对于echarts的配置项,要更改的数据往往不在一级属性里面
        // 所以这里设置了deep:true,vue文档有说明
        deep: true
      }
    },
    mounted() {
      this.chart = echarts.init(this.$refs.chartEl)
  
      // 这里没有option,不在此初始化数据
      // this.chart.setOption(this.option)
  
      // setInterval(this.changeOption, 2000)
  
      // 添加窗口改变监听
      this.chart._resize = this.throttle(() => {
        //console.log('1212')
        this.chart.resize()
      }, 200)
  
      window.addEventListener('resize', this.chart._resize)
    },
    methods: {
      /* changeOption() {
        var r = Math.floor(Math.random() * 12)
        // splice会改变原来的数组
        // var data = this.data.splice(r,6);
        var d = this.data.slice(r, r + 6)
        this.option.series[0].data = d
        console.log(this.option.series[0].data)
      } */
      // 去除props,添加methods
      setOption(option) {
        this.chart && this.chart.setOption(option)
      },
      // 节流函数,来自Lodash,这里可以自己写一个简单点的
      // 如果有多个地方用到，也可以使用引入的方式
      throttle(func, wait, options) {
        let time, context, args
        let previous = 0
        if (!options) options = {}
  
        const later = function() {
          previous = options.leading === false ? 0 : new Date().getTime()
          time = null
          func.apply(context, args)
          if (!time) context = args = null
        }
  
        const throttled = function() {
          const now = new Date().getTime()
          if (!previous && options.leading === false) previous = now
          const remaining = wait - (now - previous)
          context = this
          args = arguments
          if (remaining <= 0 || remaining > wait) {
            if (time) {
              clearTimeout(time)
              time = null
            }
            previous = now
            func.apply(context, args)
            if (!time) context = args = null
          } else if (!time && options.trailing !== false) {
            time = setTimeout(later, remaining)
          }
        }
        return throttled
      }
    },
    beforeDestroy() {
      // 移除窗口改变监听
      window.removeEventListener('resize', this.chart._resize)
    }
  }
  
  /* 注册组件的方法 */
  ChartBlock.install = Vue => {
    Vue.component(ChartBlock.name, ChartBlock)
  }
  export default ChartBlock
  </script>
  
  