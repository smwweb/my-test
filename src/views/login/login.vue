<template>
    <div class="main">
        <div class="forms">
            <div class="title">智慧照明管理系统</div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="userName">
                <el-input type="text" placeholder="请输入账号(最长8位)" v-model="ruleForm.userName"  maxlength="10" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码(最长10位)" v-model="ruleForm.password" maxlength="10" show-password></el-input>
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

import { userlogin } from '../../request/api';
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
      
      };
        return {
          // 用户信息
          userinfo:{},
        // 输入信息
          ruleForm: {
            userName:'',
            password:'',
        },
        rules: {
          userName: [
            { validator: validateUser, trigger: 'blur' }
          ],
          password: [
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
          if (valid) {  //有值

            // // 本地数据对比登录
            // let userflag = this.userinfo.filter(d=>{
            //   return d.username == this.ruleForm.username
            // })[0]
            // // console.log(userflag);
            // if(!userflag){
            //   failmsg('账号不存在，请重新输入')
            // }else{
            //   if(userflag.username == this.ruleForm.username && userflag.password == this.ruleForm.password ){
            //       // 把账号密码存储到sessionStorage中
            //     sessionStorage['userinfo'] = JSON.stringify(userflag)
            //       // 显示登录成功
            //     successmsg('登录成功')
            //       //  跳转到主页
            //     this.$router.push('/')
            //   }else{
            //     failmsg('密码错误')
            //   }
            // }
            this.userinfo = this.ruleForm
            userlogin(this.userinfo).then(d=>{
              console.log(d,'true');
             
              if(d.data){
                   // 把账号密码存储到sessionStorage中
                  sessionStorage['userinfo'] = JSON.stringify(this.ruleForm)
                   // 显示登录成功
                  successmsg('登录成功')
                  //  跳转到主页
                  this.$router.push('/')
                }else{
                  failmsg('账号密码错误')
                }
            }).catch(e=>{

              console.log('接口调用失败');
            })
           
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
    background: #fff;

    /* background: #F5F5DC; */
    padding-right: 70px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 2%;
}
</style>
