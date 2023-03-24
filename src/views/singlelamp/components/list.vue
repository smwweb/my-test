<template>
  <div>
    <!-- 布局容器 -->
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside width="230px">
        <el-row class="tac">
          <!-- 导航菜单 -->
          <el-col>
            <el-menu
              :unique-opened="true"
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#fff"
            >
              <el-submenu index="1">
                <template slot="title">
                  <span>景区</span>
                </template>
                <el-menu-item class="el-icon-s-data" index="1" @click="readinfo(1)">文三路</el-menu-item>
                <!-- <el-menu-item class="el-icon-s-data" index="2" @click="readinfo(2)">白云路西段</el-menu-item>  -->
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 中间内容 -->
      <el-main style="margin-top:10px">
        <!-- 顶部控制按键 -->
        <ul class="rowlist">
          <li>
            <el-button type="primary" @click="mainon" plain>主灯开</el-button>
          </li>
          <li>
            <el-button type="primary" @click="mainoff" plain>主灯关</el-button>
          </li>

          <li>
            <el-button type="primary" @click="auxon" plain>辅灯开</el-button>
          </li>
          <li>
            <el-button type="primary" @click="auxoff" plain>辅灯关</el-button>
          </li>
          <li>
            <p>主灯调光:</p>
          </li>
          <li>
            <el-input
              type="number"
              oninput="if(value>100)value=100;if(value<0)value=0"
              v-model="num1"
            ></el-input>
          </li>
          <li>
            <el-button type="primary" @click="confirm1">确认</el-button>
          </li>
          <li>
            <p>辅灯调光:</p>
          </li>
          <li>
            <el-input
              type="number"
              oninput="if(value>100)value=100;if(value<0)value=0"
              v-model="num2"
            ></el-input>
          </li>
          <li>
            <el-button type="primary">确认</el-button>
          </li>
          <li>
            <el-button type="success" @click="startegyone" plain>策略一</el-button>
          </li>
          <li>
            <el-button type="success" plain>策略二</el-button>
          </li>
          <li>
            <el-button type="success" plain>分组一</el-button>
          </li>
          <li>
            <el-button type="success" plain>分组二</el-button>
          </li>
          <li>
            <el-button type="success" @click="reflshdata" plain>立刻刷新</el-button>
          </li>
        </ul>
        <!-- v-loading="loading" -->
        <template>
          <el-table
            :default-sort="{prop: 'date', order: 'descending'}"
           
            ref="multipleTable"
            :data="lamplist"
            :header-cell-style="{'text-align':'center'}"
            :cell-style="{'text-align':'center'}"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" :selectable="selectHandle" width="55"></el-table-column>
            <el-table-column width="150" prop="lac" label="单灯地址">
              <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column prop="online" label="在线状态">
              <i
                slot-scope="scope"
                v-if="scope.row.online ==1"
                class="el-icon-success"
                style="color:lightgreen;font-size: 20px;"
              ></i>
              <i
                slot-scope="scope"
                v-else
                class="el-icon-error"
                style="color:#999;font-size: 20px;"
              ></i>
            </el-table-column>

            <el-table-column prop="location" label="位置">文三路</el-table-column>
            <el-table-column width="150" sortable prop="numbering" label="编号"></el-table-column>
            <el-table-column prop="lightSource" label="光源">未知</el-table-column>
            <el-table-column prop="activePower" label="总功率(W)">
              <p
                slot-scope="scope"
                v-if="scope.row.activePower"
              >{{ (scope.row.activePower).toFixed(2) }}</p>
              <p v-else slot-scope="scope">--</p>
            </el-table-column>

            <el-table-column prop="voltage" label="电压(V)">
              <p v-if="scope.row.voltage" slot-scope="scope">{{ (scope.row.voltage).toFixed(2) }}</p>
              <p v-else slot-scope="scope">--</p>
            </el-table-column>
            <el-table-column prop="lightCurrent" label="电流(A)">
              <p
                v-if="scope.row.lightCurrent"
                slot-scope="scope"
              >{{ (scope.row.lightCurrent).toFixed(2) }}</p>
              <p v-else slot-scope="scope">--</p>
            </el-table-column>
            <el-table-column prop="pf" label="功率因数">
              <p v-if="scope.row.pf" slot-scope="scope">{{ (scope.row.pf).toFixed(2) }}</p>
              <p v-else slot-scope="scope">--</p>
            </el-table-column>
            <el-table-column prop="mainLight" label="主灯">
              <el-progress
                v-if="scope.row.mainLight"
                slot-scope="scope"
                :text-inside="true"
                :stroke-width="24"
                :percentage="scope.row.mainLight"
                status="success"
              ></el-progress>
              <el-progress
                v-else
                slot-scope="scope"
                :text-inside="true"
                :stroke-width="24"
                :percentage="0"
                status="success"
              ></el-progress>
            </el-table-column>
            <el-table-column prop="mainLightStatus" label="状态">
              <i
                v-if="scope.row.mainLightStatus"
                slot-scope="scope"
                class="el-icon-s-opportunity"
                style="color:#FF9900;font-size: 24px;"
              ></i>
              <i
                v-else
                slot-scope="scope"
                class="el-icon-s-opportunity"
                style="font-size: 24px;color:#999"
              ></i>
            </el-table-column>

            <el-table-column prop="0" label="辅灯">
              <el-progress
                slot-scope="scope"
                :text-inside="true"
                :stroke-width="24"
                :percentage="0"
                status="success"
              ></el-progress>
              <!-- <el-progress slot-scope="scope" :text-inside="true" :stroke-width="24" :percentage="scope.row.LightAdjustLevel2.Value" status="success"></el-progress> -->
            </el-table-column>
            <el-table-column prop="auxiliaryLightsStatus" label="状态">
              <i
                slot-scope="scope"
                class="el-icon-s-opportunity"
                style="font-size: 24px;color:#999"
              ></i>
              <!-- <i v-if="scope.row.LightSwitch2.Value  " slot-scope="scope" class="el-icon-s-opportunity" style="color:#FF9900;font-size: 24px;"></i>
              <i v-else slot-scope="scope" class="el-icon-s-opportunity" style="font-size: 24px;color:#999"></i>-->
            </el-table-column>
            <el-table-column prop="deviceType" label="设备类型">4G单灯</el-table-column>
          </el-table>
          <div v-if="this.loading" class="progress-2"></div>
          <!-- <div v-if="this.load" class="loading" >正在刷新,请稍等.....</div> -->
          <div class="devnums">
            <span>在线设备数量：{{ this.onlineDevicesNum }} 离线设备数量：{{ this.notOnlineDevicesNum }}</span>
          </div>
          <!-- 分页插件 -->
          <div class="footer" v-if="total > 0">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              background
              layout="total, prev, pager, next,jumper"
              :total="total"
            ></el-pagination>
          </div>
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { Devicelist, Devicecontrol } from "@/request/api";
import { successmsg, failmsg } from "../../../tools/tools";

export default {
  data() {
    return {
      onlineDevicesNum: "", //在线数量
      notOnlineDevicesNum: "",//离线数量
      dataarr: [], // 控制数据

      devicedata: { // 查询列表数据
        productId: "SXOEH957YH",
        offset: 1,
        limit: 10
      },
      pageNum: 1, // 当前页
      pageSize: 10, // 每页显示条目
      total: "",// 数据总数
      lamplist: [], // 服务端获取的设备数据
      loading: true, // 加载
      multipleSelection: [],// 多选数据
      num1: "", //主灯调光
      num2: "", //辅灯调光
    };
  },
  created() {},
  mounted() {
    // 获取设备数据
    this.getdevlist();
    setInterval(() => {
      // 获取设备数据
      this.getdevlist();
    }, 180000);
  },
  methods: {
    // 刷新数据
    reflshdata() {
      this.loading = true
      // 获取设备数据
      this.getdevlist();
    },
    // 获取设备数据列表
    async getdevlist() {
      await Devicelist(this.devicedata)
        .then(d => {
          // 设备数据
          this.lamplist = d.data.records;
          // 总页数
          this.total = d.data.totalNum;
          this.onlineDevicesNum = d.data.onlineDevicesNum;
          this.notOnlineDevicesNum = d.data.notOnlineDevicesNum;
        })
        .catch(e => {
          console.log("设备数据列表接口调用失败");
        });
      this.loading = false;
    },
    // 分页
    handleSizeChange(val) {
      this.pageSize = val;
      // this.loadPage(this.pageNum,this.pageSize);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      this.pageNum = val;
      this.devicedata.offset = this.pageNum;
      this.lamplist = [];
      this.getdevlist();
      // this.loadPage(this.pageNum,this.pageSize);
      console.log(`当前页: ${val}`);
    },
    // 不在线的全不可选
    selectHandle(row, index) {
      // console.log(row,'1111');
      return !(row.online !== 1);
    },
    // 多选禁用
    selectEnable(row, rowIndex) {
      if (this.enabelIds.some(item => item === row.id)) {
        return false;
      } else {
        return true; // 不禁用
      }
    },
    //获取多选的数据
    handleSelectionChange(val) {
      this.multipleSelection = val; //存储选中的数据
      console.log(val, "选中的数据");
    },
    // 策略一
    startegyone() {
      this.dataarr = [];
      this.multipleSelection.map((value, index) => {
        let obj = {
          productId: "SXOEH957YH",
          deviceName: "",
          data: { supcmd: [68, 5, 1, 0] }
        };
        value.supcmd = [68, 5, 1, 0];

        obj.data.supcmd = value.supcmd;

        obj.deviceName = value.lac;

        this.dataarr.push(obj);
      });
    // 设备控制
      Devicecontrol(this.dataarr).then(d => {
        // console.log(d.data,'策略一反馈');
        if (d.data.length == 0) {
          successmsg("开启成功");
          // 获取设备数据
          this.getdevlist();
        } else {
          successmsg("操作失败，设备不在线");
        }
      });
    },
    // 打开主灯
    mainon() {
      this.dataarr = [];

      this.multipleSelection.map((value, index) => {
        let obj = {
          productId: "SXOEH957YH",
          deviceName: "",
          data: { LightSwitch1: 0 }
        };
        value.mainLightStatus = 1;
        obj.data.LightSwitch1 = value.mainLightStatus;

        obj.deviceName = value.lac;

        this.dataarr.push(obj);
      });
      // 设备控制
      Devicecontrol(this.dataarr).then(d => {
        // console.log(d,'开灯反馈');
        if (d.data.length == 0) {
          successmsg("开启成功");
          // 获取设备数据
          this.getdevlist();
        } else {
          successmsg("操作失败，设备不在线");
        }
      });
    },
    // 主灯关
    mainoff() {
      this.dataarr = [];

      this.multipleSelection.map((value, index) => {
        let obj = {
          productId: "SXOEH957YH",
          deviceName: "",
          data: { LightSwitch1: 0 }
        };
        value.mainLightStatus = 0;
        obj.data.LightSwitch1 = value.mainLightStatus;
        obj.deviceName = value.lac;

        this.dataarr.push(obj);
      });
      // 设备控制
      Devicecontrol(this.dataarr).then(d => {
        // console.log(d,'关灯反馈');
        if (d.data.length == 0) {
          successmsg("关闭成功");
          // 获取设备数据
          this.getdevlist();
        } else {
          successmsg("操作失败，设备不在线");
        }
      });
    },
    // 打开辅灯
    auxon() {
      
    },
    // 辅灯关
    auxoff() {
        
    },
    // 修改主灯亮度确认
    confirm1() {
      this.dataarr = [];

      this.multipleSelection.map((value, index) => {

        let obj = {
          productId: "SXOEH957YH",
          deviceName: "",
          data: { LightAdjustLevel1: 1 }
        };

        value.mainLight = Number(this.num1);

        obj.data.LightAdjustLevel1 = value.mainLight;

        obj.deviceName = value.lac;

        this.dataarr.push(obj);
      });
    // 设备控制
      Devicecontrol(this.dataarr).then(d => {
        if (d.data.length == 0) {
        
          setTimeout(() => {
            // 获取设备数据
            this.getdevlist();
            successmsg("调光成功");
          }, 1000);

        } else {
          successmsg("操作失败，设备不在线");
        }
      });
    }
  },
  // 修改辅灯亮度确认
  confirm2() {
    
    }
};
</script>

<style scoped>
.progress-2 {
    position:absolute; 
    left:58vw; 
    top:40vh; 
    width:120px;
    height:20px;
    border-radius: 20px;
    background:
   linear-gradient(skyblue 0 0) 0/0% no-repeat
   lightblue;
  animation:p2 2s infinite steps(10);
}
@keyframes p2 {
    100% {background-size:110%}
}
/* 加载中 */
.loading{
    position:absolute; 
    left:55vw; 
    top:40vh; 
    width:140px; 
    height:20px; 
    z-index:1;
    border:#999 solid 1px
}
/* 设备数量 */
.devnums {
  z-index: 2;
  position: fixed;
  bottom: 150px;
  font-size: 14px;
  color: #000;
}
/* 页码 */
.footer {
  z-index: 2;
  position: fixed;
  bottom: 40px;
  width: 100%;
  line-height: var(--footer-height);
  color: #fff;
}

/* 进度条 */
.el-table .el-progress-bar .el-progress-bar__inner {
  border-radius: inherit !important;
}
/* 景区列表宽度 */
.el-row .el-col {
  width: 229px;
}
/* 按钮列表 */
.rowlist {
  overflow: auto;
  display: flex;
  align-items: center;
}
.rowlist li {
  margin: 5px;
  width: 80px;
}
/* 两个调光文字 */
.rowlist li:nth-child(5),
li:nth-child(8) {
  width: 60px;
}
/* 两个确认按钮 */
.rowlist li:nth-child(7),
li:nth-child(10) {
  width: 65px;
}
.rowlist li p {
  width: 60px;
  font-size: 14px;
}
/* 两个调光的输入框 */
.el-main .el-input {
  margin-right: 10px;
}
/* 导航栏宽度 */
.el-submenu .el-menu-item {
  width: 229px;
}
/* 移入变色 */
.el-submenu .el-menu-item:hover {
  background: skyblue !important;
  color: #fff !important;
}
/* 与主导航栏距离 */
.el-container {
  margin: -20px;
  padding: 0;
}
.el-aside {
  background-color: #fff;
  text-align: left;
  height: calc(100vh - 60px);
  /* overflow: scroll; */
  border-right: #999 solid 1px;
}

.el-main {
  background-color: #fff;
  color: #333;
}
</style>
