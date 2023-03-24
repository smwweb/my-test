<template>
    <div style="margin-top:20px">
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
            label="功率">
            </el-table-column>
            <el-table-column
            prop="numpower"
            label="功率因数">
            </el-table-column>
            <el-table-column
            prop="groups"
            label="分组">
            </el-table-column>
            <el-table-column
            prop="tactics"
            label="策略">
            </el-table-column>
            <el-table-column
            prop="electricity"
            label="耗电量">
            </el-table-column>
            <el-table-column
            prop="time"
            label="查询时间">
            </el-table-column>
            
        </el-table>
        </template>
    </div>
</template>

<script>
import { calcnew } from "../../assets/js/time.js";

export default {
    data() {
        return {
            tableData: [{
                num:1,
                address:'文三路',
                realpower:'0.00KW',
                numpower:'1.000',
                groups:'分组一',
                tactics:'策略一',
                electricity:'2000',
                time:'2023-02-16 09:00:11'  
            },
            {
                num:2,
                address:'文三路',
                realpower:'0.00KW',
                numpower:'1.000',
                groups:'分组二',
                tactics:'策略二',
                electricity:'2000',
                time:'2023-02-16 09:00:12'  
            },
            {
                num:3,
                address:'文三路',
                realpower:'0.00KW',
                numpower:'1.000',
                groups:'分组三',
                tactics:'策略三',
                electricity:'2000',
                time:'2023-02-16 09:00:13'  
            },
           
            ]
        };
    },
    created() {

    },
    mounted() {
        let times = calcnew(1, 39.020649999999996, 117.65270000000001, 2018, 10, 24) 
        console.log(times);
    },
    methods: {

    }
};
</script>

<style scoped lang="less">

</style>
