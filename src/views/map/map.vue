<template>
  <div class="BaiDuMap">
    <baidu-map
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handler"
      style="width: 100%; height: 100%"
    >
    <!-- 覆盖物  路灯图标 -->
      <bm-marker v-for="marker of markers"
        :key="marker.id"
        :position="{ lng: marker.lng, lat: marker.lat }"
        @mouseover="lookDetail(marker)"
        @mouseout="defineDetail(marker)"
        :icon="{url: 'http://47.110.89.129:8911/assets/img/cc-marker-icon1.png', size: {width:45, height: 54},imageSize:{width:20,height:20}}"
      >
    <!-- 信息窗口 -->
        <bm-info-window
          :title="infoWindow.name"
          :position="{ lng: infoWindow.lng, lat: infoWindow.lat }"
          :show="marker.showFlag"
          @close="infoWindowClose(marker)"
          @open="infoWindowOpen(marker)"
        >
        <!-- <h1>111111</h1> -->
        </bm-info-window>
      </bm-marker>

      <!-- 自定义覆盖物 -->
      <!-- <img src="../../assets/marker-icon1.png" alt=""> -->
      <!-- <bm-overlay
        pane="labelPane"
        :class="{sample: true, active}"
        @draw="draw"
        @mouseover.native="active = true"
        @mouseleave.native="active = false">
        <img src="../../assets/marker-icon1.png" alt="">
        <div>天安门路段</div>
      </bm-overlay> -->


    </baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 测试数据
      markers: [
    {
      id:1,
      lng: 116.4,
      lat: 39.91,
      name:'测试一下',
      showFlag:false //flag放在每一条数据里
    },
    {
      id:2,
      lng: 116.5,
      lat: 39.91,
      name:'测试2',
      showFlag:false //flag放在每一条数据里
    },
    {
      id:3,
      lng: 120.30,
      lat: 30.42,
      name:'余杭区',
      showFlag:false
    }
  ],
      infoWindow:{},
      active: false,
      center: { lng: 0, lat: 0 },
      zoom: 3,
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 移出
    defineDetail(marker){
        marker.showFlag = false;
    },
    // 鼠标移入点坐标赋值
      lookDetail(marker){
        marker.showFlag = true;
        this.infoWindow = marker;
      },
      // 关闭弹窗
      infoWindowClose(marker) {
        marker.showFlag = false
      },
      // 打开弹窗
      infoWindowOpen(marker) {
        marker.showFlag = true
      },

    // 绘制遮罩物
    // draw({el,Bmap,map}){
    //   // console.log(el,Bmap,map,1111);
    //   const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915))
    //   el.style.left = pixel.x - 60 + 'px'
    //   el.style.top = pixel.y - 20 + 'px'
    // },

    // 绘制地图
    handler({ Bmap, map }) {
      // console.log(Bmap,map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
  },
};
</script>

<style scoped>
.BaiDuMap {
  width: 100%;
  height: 100%;
}
</style>
