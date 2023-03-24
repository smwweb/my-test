<template>
  <div class="BaiDuMap" style="margin-top:20px">
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
        :position="{ lng: marker.longitude, lat: marker.latitude }"
        @mouseover="lookDetail(marker)"
        @mouseout="defineDetail(marker)"
        :icon="{url: 'http://47.110.89.129:8911/assets/img/cc-marker-icon1.png', size: {width:45, height: 54},imageSize:{width:20,height:20}}"
      >
    <!-- 信息窗口 -->
        <bm-info-window
          :title="infoWindow.deviceName"
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
import { Mapdatas } from '../../request/api';

export default {
  data() {
    return {
      // 测试数据
      markers: [],
      infoWindow:{},
      active: false,
      center: { lng: 0, lat: 0 },
      zoom: 3,
    };
  },

  created() {},
  mounted() {
    this.getMapList()
  },
  methods: {
    // 地图信息
   getMapList(){
      Mapdatas().then(d=>{
        d.data.map(item=>{
          item.showFlag = false
        })
        // console.log(d.data,"999999");
        this.markers = d.data
        // console.log(this.markers,'1111');
      }).catch(e=>{
        console.log('接口调用失败');
      })
    },
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
      this.center.lng = 120.15;
      this.center.lat = 30.28;
      this.zoom = 15;
    },
  },
};
</script>

<style>
.BaiDuMap {
  width: 100%;
  height: 100%;
}
</style>
