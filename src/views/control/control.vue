<template>
    <div style="margin-top:20px">
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

            <el-table-column
            prop="auto"
            label="集控总开关"
            width="100">
            <el-button slot-scope="scope" style="width:79px" type="success">开</el-button>
                <!-- <el-switch
                    slot-scope="scope"
                    v-model="scope.row.auto"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch> -->
            </el-table-column>
            <el-table-column
            prop="one"
            label="回路1"
            width="80">
                <el-switch
                    slot-scope="scope"
                    v-model="scope.row.one"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </el-table-column>
            <el-table-column
            prop="two"
            label="回路2"
            width="80">
            <el-switch
                    slot-scope="scope"
                    v-model="scope.row.two"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </el-table-column>
            <el-table-column
            prop="three"
            label="回路3"
            width="80">
            <el-switch
                    slot-scope="scope"
                    v-model="scope.row.three"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </el-table-column>
            <el-table-column
            prop="time"
            label="返回时间">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                num:1,
                address:'文三路',
                realpower:'0.00KW',
                power:'1.000',
                a:'225.5V 0.000A 1.000',
                b:'0.0V 0.000A 1.000',
                c:'0.0V 0.000A 1.000',
                reading:'0.00kWh',
                auto:true,
                one:true,
                two:false,
                three:true,
                time:'2023-02-16 09:00:11'  
            },
            {
                num:2,
                address:'文三路',
                realpower:'0.00KW',
                power:'1.000',
                a:'225.5V 0.000A 1.000',
                b:'0.0V 0.000A 1.000',
                c:'0.0V 0.000A 1.000',
                reading:'0.00kWh',
                auto:true,
                one:true,
                two:false,
                three:true,
                time:'2023-02-16 09:00:11'  
            },         
            {
                num:3,
                address:'文三路',
                realpower:'0.00KW',
                power:'1.000',
                a:'225.5V 0.000A 1.000',
                b:'0.0V 0.000A 1.000',
                c:'0.0V 0.000A 1.000',
                reading:'0.00kWh',
                auto:true,
                one:true,
                two:false,
                three:true,
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
