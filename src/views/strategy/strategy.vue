<template>
  <div style="margin-top:20px">
    <!-- <template> -->
      <el-divider content-position="left">单灯策略</el-divider>
      
      <!-- form表单 -->
        <el-form ref="form1" :model="form1" label-width="120px">
            <!-- 1 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form1.date1"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">主灯调光：</el-col>
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.munm1" type="number"></el-input>
              </el-col>
              <el-col :span="3">辅灯调光：</el-col> 
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.anum1" type="number"></el-input>
              </el-col>
            </el-form-item>
            <!-- 2 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form1.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">主灯调光：</el-col>
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.munm2" type="number"></el-input>
              </el-col>
              <el-col :span="3">辅灯调光：</el-col> 
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.anum2" type="number"></el-input>
              </el-col>
            </el-form-item>
            <!-- 3 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form1.date3"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">主灯调光：</el-col>
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.munm3" type="number"></el-input>
              </el-col>
              <el-col :span="3">辅灯调光：</el-col> 
              <el-col :span="3">
                <el-input  min="1" max="100" v-model="form1.anum3" type="number"></el-input>
              </el-col>
            </el-form-item>
            <!-- 4 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form1.date4"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">主灯调光：</el-col>
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.munm4" type="number"></el-input>
              </el-col>
              <el-col :span="3">辅灯调光：</el-col> 
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.anum4" type="number"></el-input>
              </el-col>
            </el-form-item>
            <!-- 5 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form1.date5"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">主灯调光：</el-col>
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.munm5" type="number"></el-input>
              </el-col>
              <el-col :span="3">辅灯调光：</el-col> 
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.anum5" type="number"></el-input>
              </el-col>
            </el-form-item>
            <!-- 6 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form1.date6"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">主灯调光：</el-col>
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.munm6" type="number"></el-input>
              </el-col>
              <el-col :span="3">辅灯调光：</el-col> 
              <el-col :span="3">
                <el-input min="1" max="100" v-model="form1.anum6" type="number"></el-input>
              </el-col>
            </el-form-item>
           
            <el-form-item>
              <el-col :span="5">
                <el-button  type="primary" class="queren">设置为策略一</el-button>
              </el-col>
              <el-col :span="5">
                <el-button  type="primary" class="queren">设置为策略二</el-button>
              </el-col>
              <el-col :span="5">
                <el-button  type="primary" class="queren">设置为策略三</el-button>
              </el-col>
            </el-form-item>
        </el-form>
        <el-divider content-position="left">集控器策略</el-divider>
       
        
        <div class="left" style="float:left">
              <div style="margin-top: 20px;font-size:14px">
              <strong>开灯时间(根据日出日落)</strong>
            </div>
            
          <div class="lampon">
            提前：<el-input type="number" min="0" v-model="time1" placeholder="时间" style="width: 80px;"></el-input>分
            推迟：<el-input type="number" min="0" v-model="time2" placeholder="时间"  style="width: 80px;"></el-input>分
          </div>

            <div style="margin-top:20px;font-size:14px">
              <strong>关灯时间</strong>
            </div>
          <div class="lampoff">
            提前：<el-input type="number" min="0" v-model="time3" placeholder="时间" style="width: 80px;"></el-input>分
            推迟：<el-input type="number" min="0" v-model="time4" placeholder="时间"  style="width: 80px;"></el-input>分
          </div>
          <el-button  type="primary">确认</el-button>
        </div>


        <div class="right" style="float:left;margin-left:200px">
              <div style="margin-top: 20px;font-size:14px">
              <strong>开灯时间(手动设置)</strong>
            </div>
            
          <div class="lampon">
              <el-time-select
                  v-model="onvalue"
                  :picker-options="{
                    start: '05:30',
                    step: '00:15',
                    end: '20:30'
                  }"
                  placeholder="选择时间">  
              </el-time-select>

          </div>

            <div style="margin-top:20px;font-size:14px">
              <strong>关灯时间</strong>
            </div>
          <div class="lampoff">
            <el-time-select
                  v-model="offvalue"
                  :picker-options="{
                    start: '05:30',
                    step: '00:15',
                    end: '20:30'
                  }"
                  placeholder="选择时间">
              </el-time-select>
          </div>
          <el-button  type="primary">确认</el-button>
        </div>
        
        
    <!-- </template> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        onvalue:'',
        offvalue:'',
        activeName:'first',
        input:'',
        input1:'',
       
        form1: {
        name: "",
        region:"",
        munm1:'',
        anum1:'',
        munm2:'',
        anum2:'',
        munm3:'',
        anum3:'',
        munm4:'',
        anum4:'',
        munm5:'',
        anum5:'',
        munm6:'',
        anum6:'',
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        date5: "",
        date6: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
        form2: {
        name: "",
        region:"",
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        date5: "",
        date6: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
        form3: {
        name: "",
        region:"",
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        date5: "",
        date6: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
        time1:"",//开灯提前时间
        time2:"",//开灯延迟时间
        time3:"",//关灯提前时间
        time4:"",//关灯提前时间
    };
  },
  created() {},
  mounted() {},
  methods: {
   
  },
};
</script>

<style scoped>

/* .left button{
  margin-left: 200px;
} */
.el-col{
  margin-left: 15px;
}
/* 开灯按钮 */
.lampon{
  margin-top: 20px;
  font-size: 14px;
}
/* 关灯按钮 */
.lampoff{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
}

.queren{
  margin-left: 20%;
}
.el-form{
    width: 800px;
}
</style>
