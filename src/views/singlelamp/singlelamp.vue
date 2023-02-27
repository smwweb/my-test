<template>
    <div>
        <list></list>
        <!-- <template>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
               >
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="日期"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
                </el-table-column>
            </el-table>
</template> -->
    </div>
</template>

<script>
import list from './components/list.vue'
export default {
    data() {
        return {
            // tableData: [{
            //     date: '2016-05-03',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // },
            // ],
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components:{
        list
    }
};
</script>

<style scoped>

</style>
