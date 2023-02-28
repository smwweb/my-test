<template>
    <div class="main">
        <div class="forms">
            <div class="title">智慧照明管理系统</div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user">
                <el-input type="password" placeholder="请输入账号" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input placeholder="请输入密码" v-model="ruleForm.pass" show-password></el-input>
                <!-- <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input> -->
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

import {successmsg,failmsg} from '../../tools/tools'

export default {
    data() {
      // 密码
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      // 账号
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
        // if(value.length >3 || value.length <6){
        //   callback(new Error('请输入账号'));
        //   alert('账号为3-6位')
        // }else{
        //   callback();
        // }
      };
        return {
            ruleForm: {
                user:'',
                pass:'',
        },
        rules: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 把账号密码存储到sessionStorage中
           sessionStorage['userinfo'] = JSON.stringify(this.ruleForm)
          //  跳转到主页
           this.$router.push('/')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
};
</script>

<style scoped>
  .title{
    margin: 20px 0px 20px 80px;
    text-align: center;
    font-size: 24px;
  }
.el-button{
    width: 200px;
    margin-left: 50px;
}
.main{
    width: 100vw;
    height: 100vh;
    background: url('../../assets/bj.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    /* background: linear-gradient(to right,#87CEFA,#7eb7f1)!important; */
}
.main .forms{
    width: 400px;
    height: 300px;
    background: #F5F5DC;
    padding-right: 70px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}
</style>
