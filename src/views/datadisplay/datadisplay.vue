<template>
    <div style="height: 500px;">
      <!-- 多了ref，用于获取该组件调用setOption方法 -->
      <chart-block ref="chart2"></chart-block>
    </div>
  </template>
  
  <script>
  // 把配置项放在外面
  let option2 = {
    title: {
      text: '单灯在线数量',
      subtext: '数据统计',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['拱墅区', '余杭区', '西湖区', '滨江区', '临平区']
    },
    series: [
      {
        name: '位置区域',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '拱墅区' },
          { value: 310, name: '余杭区' },
          { value: 234, name: '西湖区' },
          { value: 135, name: '滨江区' },
          { value: 1548, name: '临平区' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  export default {
    data() {
      return {}
    },
    // 在父组件的mounted中调用setOption
    mounted() {
      this.$refs.chart2.setOption(option2)
    }
  }
  </script>
  