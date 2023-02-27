<template>
  <div>
    <template>
      <el-button type="info" plain>单灯策略：</el-button>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="策略一" name="first">

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
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.munm1" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.anum1" type="number"></el-input>
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
              <el-col :span="3">
                <el-button round>主灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.munm2" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.anum2" type="number"></el-input>
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
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.munm3" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.anum3" type="number"></el-input>
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
              <el-col :span="3">
                <el-button round>主灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.munm4" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.anum4" type="number"></el-input>
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
              <el-col :span="3">
                <el-button round>主灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.munm5" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.anum5" type="number"></el-input>
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
              <el-col :span="3">
                <el-button round>主灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.munm6" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>

              </el-col>
              <el-col :span="3">
                <el-input v-model="form1.anum6" type="number"></el-input>
              </el-col>
            </el-form-item>
            <el-button  type="primary" class="queren">确认</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="策略二" name="second">
          
            <el-form ref="form2" :model="form2" label-width="120px">
            <!-- 1 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form2.date1"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item>
            <!-- 2 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form2.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form3.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item><el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form2.date4"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item><el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form2.date5"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item><el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form2.date6"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item>
            <el-button  type="primary"  class="queren">确认</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="策略三" name="third">
            <el-form ref="form3" :model="form3" label-width="120px">
            <!-- 1 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form3.date1"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item>
            <!-- 2 -->
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form3.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form3.date3"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item><el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form3.date4"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item><el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form3.date5"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item><el-form-item label="上电">
              <el-col :span="5">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form3.date6"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col :span="2">后</el-col>
              <el-col :span="3">
                <el-button round>主灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="3">
                <el-button round>辅灯</el-button>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" type="number"></el-input>
              </el-col>
            </el-form-item>
            <el-button  type="primary"  class="queren">确认</el-button>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <el-button type="info" plain>集控器策略：</el-button>
      <div class="lampon">
        开灯：提前<el-input type="number" v-model="time1" placeholder="时间" style="width: 80px;"></el-input>分
        推迟<el-input type="number" v-model="time2" placeholder="时间"  style="width: 80px;"></el-input>分
      </div>
      <div class="lampoff">
        关灯：提前<el-input type="number" v-model="time3" placeholder="时间" style="width: 80px;"></el-input>分
        推迟<el-input type="number" v-model="time4" placeholder="时间"  style="width: 80px;"></el-input>分
      </div>
      <el-button  type="primary">确认</el-button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    handleClick(tab, event){
      console.log(tab, event);
    }
  },
};
</script>

<style scoped>
.lampon{
  margin-top: 20px;
}
.lampoff{
  margin-top: 20px;
  margin-bottom: 20px;
}
.queren{
  margin-left: 80%;
}
.el-form{
    width: 800px;
}
</style>
