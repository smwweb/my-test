<template>
    <div>
        <!-- 布局容器 -->
        <el-container>
            <!-- 左侧菜单 -->
            <el-aside width="300px">
                <el-row class="tac">
            <!-- 导航菜单 -->
            <el-col>
                <el-menu
                    :unique-opened=true
                    default-active="2"
                    class="el-menu-vertical-demo"
                    background-color="#fff"
                   >
                 <el-submenu index="1">
                    <template slot="title">
                    <span>景区</span>
                    </template>
                    <el-menu-item class="el-icon-s-data" index="1" @click="readinfo(1)">白华顶</el-menu-item> 
                    <el-menu-item class="el-icon-s-data" index="2" @click="readinfo(2)">白云路西段</el-menu-item> 
                    <el-menu-item class="el-icon-s-data" index="3">白云路中段</el-menu-item> 
                    <el-menu-item class="el-icon-s-data" index="4">朝阳洞</el-menu-item> 
                    <el-menu-item class="el-icon-s-data" index="5">金沙路</el-menu-item> 
                    <el-menu-item class="el-icon-s-data" index="6">法雨路_大乘庵车站东侧1号</el-menu-item> 
                    <el-menu-item class="el-icon-s-data" index="7">观音大佛变电站</el-menu-item> 
                    <el-menu-item class="el-icon-s-data" index="8">龙沙隧道北口配电柜</el-menu-item> 
                
                </el-submenu>
                </el-menu>
               

            </el-col>
            </el-row>
            </el-aside>
            <!-- 中间内容 -->
            <el-main>
                <!-- 顶部控制按键 -->
                <!-- layout分栏间隔 -->
                <el-row class="rowlist" :gutter="20">
                    <el-col :span="6"><div class="grid-content">
                        <el-button type="primary" @click="mainon">主灯开</el-button>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content">
                        <el-button type="primary">辅灯开</el-button>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        主灯调光：<el-input  v-model="num1" placeholder="0~100"></el-input>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        <el-button type="primary" @click="confirm1">确认</el-button>               
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        辅灯调光：<el-input v-model="num2" placeholder="0~100"></el-input>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        <el-button  type="primary" @click="confirm2">确认</el-button>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        <el-button type="success">策略一</el-button>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        <el-button type="success">策略二</el-button>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        <el-button type="success">策略三</el-button>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        <el-button type="success">分组一
                        <i class="el-icon-setting"></i>
                    </el-button>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        <el-button type="success">分组二
                        <i class="el-icon-setting"></i>
                    </el-button>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content ">
                        <el-button type="success">分组三
                        <i class="el-icon-setting"></i>
                    </el-button>
                    </div></el-col>
                </el-row>

               <!-- <div>
                    <el-button type="primary" @click="mainon">主灯开</el-button>
                    <el-button type="primary">辅灯开</el-button>
                    主灯调光：<el-input  v-model="num1" placeholder="0~100"></el-input>

                    <el-button type="primary" @click="confirm1">确认</el-button>
                    辅灯调光：<el-input v-model="num2" placeholder="0~100"></el-input>
                    <el-button  type="primary" @click="confirm2">确认</el-button>

                    <el-button type="success">策略一</el-button>
                    <el-button type="success">策略二</el-button>
                    <el-button type="success">策略三</el-button>

                    <el-button type="success">分组一
                        <i class="el-icon-setting"></i>
                    </el-button>
                    <el-button type="success">分组二
                        <i class="el-icon-setting"></i>
                    </el-button>
                    <el-button type="success">分组三
                        <i class="el-icon-setting"></i>
                    </el-button>
                </div> -->

                <template>
                <el-table
                    ref="multipleTable"
                    :data="tableData[1]"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="单灯地址"
                   >
                    <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                    </el-table-column>
                    <el-table-column
                    prop="section"
                    label="在线状态"
                    >
                    <i class="el-icon-success" style="color:lightgreen;font-size: 20px;"></i>
                    </el-table-column>
                    <el-table-column
                    prop="section"
                    label="位置"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="lampnum"
                    label="编号"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="light"
                    label="光源"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="totalpower"
                    label="总功率"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="mainlamp"
                    label="主灯"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="auxlamp"
                    label="辅灯"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="volt"
                    label="电压"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="current"
                    label="电流"
                   >
                    </el-table-column>
                </el-table>
            </template>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 多选数据
            multipleSelection: [],
            num1:'',
            num2:'',
            input:'',
            tableData:[
                [{
                address: '000001000921',
                section: '白华顶',
                lampnum: '1',
                light:'50W',
                totalpower:'53.90',
                mainlamp:'53.90',
                auxlamp:'0.00',   
                volt:'220.0',
                current:'0.260'
            },
            {
                address: '000001000922',
                section: '白华顶',
                lampnum: '2',
                light:'50W',
                totalpower:'53.90',
                mainlamp:'53.90',
                auxlamp:'0.00',
                volt:'220.0',
                current:'0.260'
            },
            ],
           [{
                address: '000001000921',
                section: '测试',
                lampnum: '1',
                light:'50W',
                totalpower:'53.90',
                mainlamp:'53.90',
                auxlamp:'0.00',
                volt:'220.0',
                current:'0.260'
            },
            {
                address: '000001000922',
                section: '测试',
                lampnum: '2',
                light:'50W',
                totalpower:'53.90',
                mainlamp:'53.90',
                auxlamp:'0.00',
                volt:'220.0',
                current:'0.260'
            },
            ]],
            // tableData1: [{
            //     address: '000001000921',
            //     section: '白华顶',
            //     lampnum: '1',
            //     light:'50W',
            //     totalpower:'53.90',
            //     mainlamp:'53.90',
            //     auxlamp:'0.00',
            //     volt:'220.0',
            //     current:'0.260'
            // },
            // {
            //     address: '000001000922',
            //     section: '白华顶',
            //     lampnum: '2',
            //     light:'50W',
            //     totalpower:'53.90',
            //     mainlamp:'53.90',
            //     auxlamp:'0.00',
            //     volt:'220.0',
            //     current:'0.260'
            // },
            // ],
            // tableData2: [{
            //     address: '000001000921',
            //     section: '测试',
            //     lampnum: '1',
            //     light:'50W',
            //     totalpower:'53.90',
            //     mainlamp:'53.90',
            //     auxlamp:'0.00',
            //     volt:'220.0',
            //     current:'0.260'
            // },
            // {
            //     address: '000001000922',
            //     section: '测试',
            //     lampnum: '2',
            //     light:'50W',
            //     totalpower:'53.90',
            //     mainlamp:'53.90',
            //     auxlamp:'0.00',
            //     volt:'220.0',
            //     current:'0.260'
            // },
            // ],
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        //获取多选的数据
        handleSelectionChange(val) {
            this.multipleSelection = val;//存储选中的数据
            console.log(val);
        },
        // 打开主灯
        mainon(){

        },
        // 目录跳转刷新数据
        readinfo(index){
            console.log(index);  
            this.tableData[1]= this.tableData[index]
            console.log(this.tableData[1]);
            console.log(this.tableData[index]);
        },
        // 修改主灯亮度确认
        confirm1(){
            this.multipleSelection.forEach((value,index)=>{
                console.log(value,index);
                this.tableData.forEach((val,ind)=>{
                    if(value.address==val.address){
                        this.tableData[ind].mainlamp = Number(this.num1).toFixed(2)
                    }
                })

            })
        },
         // 修改辅灯亮度确认
         confirm2(){
            this.multipleSelection.forEach((value,index)=>{
                console.log(value,index);
                this.tableData.forEach((val,ind)=>{
                    if(value.address==val.address){
                        this.tableData[ind].auxlamp = Number(this.num2).toFixed(2)
                    }
                })

            })
        }
    }
};
</script>

<style scoped>
.el-row .el-button{
    width: 80px;
}
.el-row .el-button:nth-child(10){
    width: 200px;
}
.el-row .el-col{
    width: 290px;
}
  .rowlist .el-col {
    margin: 2px;
    width: 80px;
  }
  .el-row .el-col:nth-child(3){
    width: 190px;
  }
  .el-row .el-col:nth-child(5){
    width: 190px;
  }
  .el-row .el-col:nth-child(10){
    margin-left: 10px;
    width: 100px;
  }
  .el-row .el-col:nth-child(10) .el-button{
    width: 90px;
  }
  .el-row .el-col:nth-child(11){
    width: 100px;
  }
  .el-row .el-col:nth-child(11) .el-button{
    width: 90px;
  }
  .el-row .el-col:nth-child(12){
    width: 100px;
  }
  .el-row .el-col:nth-child(12) .el-button{
    width: 90px;
  }
    .el-main .el-input{
        width: 80px;
        margin-right: 10px;
    }
    .el-submenu .el-menu-item{
        width: 250px;
    }
    .el-submenu .el-menu-item:hover{
        background: skyblue!important;
        color: #fff!important;
    }
    .el-container{
    margin: -20px;
    padding: 0;
    }
  .el-aside {
    background-color: #fff;
    color: #333;
    text-align: left;
    height: 100vh;
    font-size: 12px;
    overflow: scroll;
    border-right: #999 solid 1px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
  }
</style>
