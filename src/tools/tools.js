import Vue from 'vue';
const vm = new Vue();

// 成功提示信息
export let successmsg = (message)=>{
    vm.$message({
        message,
        type:"success"
    })
}

// 失败提示信息

export let failmsg=(message)=>{
    vm.$message({
        message,
        type:"warning"
    })
}