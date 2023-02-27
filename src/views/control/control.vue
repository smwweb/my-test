<template>
    <div>
        <template>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="num"
            label="编号"
            width="100">
            </el-table-column>
            <el-table-column
            prop="address"
            label="位置"
           >
            </el-table-column>
            <el-table-column
            prop="realpower"
            label="实时功率">
            </el-table-column>
            <!-- <el-table-column
            prop="power"
            label="功率因数">
            </el-table-column> -->
            <el-table-column
            prop="a"
            label="A相">
            </el-table-column>
            <el-table-column
            prop="b"
            label="B相">
            </el-table-column>
            <el-table-column
            prop="c"
            label="C相">
            </el-table-column>
            <!-- <el-table-column
            prop="reading"
            label="电表读数">
            </el-table-column> -->
            <el-table-column
            prop="auto"
            label="集控总开关"
            width="100">
            <template slot-scope="scope">
                <el-button type="primary">开</el-button>
                <!-- <el-button type="warning">关</el-button> -->
            </template>
            </el-table-column>
            <el-table-column
            prop="one"
            label="回路1"
            width="80">
            <template slot-scope="scope">
                <el-button type="success">开</el-button>
                <!-- <el-button type="warning">关</el-button> -->
            </template>
            </el-table-column>
            <el-table-column
            prop="two"
            label="回路2"
            width="80">
            <template slot-scope="scope">
                <el-button type="success">开</el-button>
                <!-- <el-button type="warning">关</el-button> -->
            </template>
            </el-table-column>
            <el-table-column
            prop="three"
            label="回路3"
            width="80">
            <template slot-scope="scope">
                <el-button type="success">开</el-button>
                <!-- <el-button type="warning">关</el-button> -->
            </template>
            </el-table-column>
            <el-table-column
            prop="time"
            label="返回时间">
            </el-table-column>
            <!-- <el-table-column
            prop="sets"
            label="设置">
            <template slot-scope="scope">
                <el-button icon="el-icon-s-tools">设置</el-button>
            </template>
            </el-table-column> -->
        </el-table>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                num:1,
                address:'白华顶',
                realpower:'0.00KW',
                power:'1.000',
                a:'225.5V 0.000A 1.000',
                b:'0.0V 0.000A 1.000',
                c:'0.0V 0.000A 1.000',
                reading:'0.00kWh',
                auto:'123456',
                time:'2023-02-16 09:00:11'  
            },
            {
                num:2,
                address:'白云路西段',
                realpower:'0.00KW',
                power:'1.000',
                a:'225.5V 0.000A 1.000',
                b:'0.0V 0.000A 1.000',
                c:'0.0V 0.000A 1.000',
                reading:'0.00kWh',
                auto:'123456',
                time:'2023-02-16 09:00:11'  
            }, 
            {
                num:3,
                address:'白云路中段',
                realpower:'0.00KW',
                power:'1.000',
                a:'225.5V 0.000A 1.000',
                b:'0.0V 0.000A 1.000',
                c:'0.0V 0.000A 1.000',
                reading:'0.00kWh',
                auto:'123456',
                time:'2023-02-16 09:00:11'  
            }, 
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
