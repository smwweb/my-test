<template>
    <div>
        <!-- 布局容器 -->
        <el-container>
            <!-- 系统头部 -->
            <el-header>
            <!-- layout响应式布局 -->
            <el-row class="elrowlist" :gutter="10" type="flex">
                <!-- 系统名 -->
                <el-col class="systemtitle" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content ">
                        智慧照明系统
                    </div>
                </el-col>
                <!-- 单灯图标 -->
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content">
                        <i class="el-icon-s-opportunity" @click="tolamp"></i>
                    </div>
                </el-col>
                <!-- 地图图标 -->
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content">
                        <i class="el-icon-location" @click="tomap"></i>
                    </div>
                </el-col>
                <!-- 集控器图标 -->
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content">
                        <i class="el-icon-menu" @click="tocontrol"></i>
                    </div>
                </el-col>
                <!-- 策略设置图标 -->
                <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content">
                        <i class="el-icon-s-tools" @click="tostrategy"></i>
                    </div>
                </el-col>
                <!-- 搜索框 -->
                <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content search ">
                        <el-input v-model="input" placeholder="请输入内容">
                            <el-button @click="searchdata" slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                </el-col>
                <!-- 头像 -->
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content" style="width:100px;margin-top:-5px;">
                        <img v-if="islogin" @click="logininfo" src="../../assets/user.jpg">
                       
                        <div @click="logout" v-else class="grid-content" style="font-size:14px;margin-top:22px">点击登录</div>

                    </div>
                </el-col>
                <!-- 用户名 -->
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content ">
                        {{ username }}
                    </div>
                </el-col>
            </el-row>
            <ul class="menu" v-if="isshow">
                <li @click="logout">退出登录</li>
            </ul> 
                
            </el-header>
            <!-- 系统导航栏和内容 -->
            <el-container>
                <el-aside width="200px">
                    <el-row class="tac">
            <!-- 导航菜单 -->
            <el-col>
            
                <el-menu
                    :router=true
                    :unique-opened=true
                    default-active="2"
                    class="el-menu-vertical-demo"
                    background-color="#e2e7ed"
                   >
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>地图信息</span>
                    </template>
                    <el-menu-item index="/map">地图</el-menu-item> 
                </el-submenu>

                 <el-submenu index="2">
                    <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>智慧照明</span>
                    </template>
                    <el-menu-item index="/singlelamp">单灯数据</el-menu-item> 
                    <el-menu-item index="/strategy">策略设置</el-menu-item>
                    <el-menu-item index="/historydata">单灯历史数据</el-menu-item> 
                    <el-menu-item index="/control">集控器</el-menu-item> 
                </el-submenu>

                </el-menu>
               
            </el-col>
            </el-row>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 用户名
            username:"",
            // 用户是否登录
            islogin:true,
            // 登录退出菜单的隐藏
            isshow:false,
            input: ''
        };
    },
    created() {

    },
    mounted() {
        let userinfo = sessionStorage['userinfo']?JSON.parse(sessionStorage['userinfo']):false
        if(!userinfo){
            this.islogin = false
        }else{
            this.username = userinfo.user
        }
        // console.log(userinfo);
        
    },
    methods: {
        // 搜索查询
        searchdata(){
            console.log('查询成功！');
        },
        // 点图标跳策略设置
        tostrategy(){
            this.$router.push('/strategy')
        },
        // 点击图标跳集控器
        tocontrol(){
            this.$router.push('/control')
        },
        // 点图标跳地图
        tomap(){
            this.$router.push('/map')
        },
        // 点图标跳单灯
        tolamp(){
            this.$router.push('/singlelamp')
        },
        // 点击退出登录
        logout(){
        // 清除sessionstorge中的数据
        sessionStorage.removeItem('userinfo');
        this.$router.push('/login')

        },
        // 点击头像显示退出登录
        logininfo(){
            this.isshow= !this.isshow;
        }
    }
};
</script>

<style>
.el-col .grid-content{
    margin-top: 15px;
}
.el-col .search{
    margin-top: 5px;
}
  .elrowlist .el-col{
    border-radius: 4px;
    width: 30px;
  }
  .el-row .systemtitle{
        width: 160px;
    }
    .el-row .el-col:nth-child(6){
        width: 74vw;
        margin-right: 30px;
    }
    .el-row .el-col:nth-child(7){
        width: 60px;
    }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }


    /* .iconlists li{
        display: inline-block;
        width: 30px;
        height: 60px;
    } */
    .menu:hover{
        cursor: pointer;
    }
    .menu{
        width: 100px;
        height: 40px;
        background: #f4f1f1;
        color: #000;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        position: absolute;
        right: 10px;
        top: 50px;
        z-index: 1;
    }
    .el-header {
        /* line-height: 60px; */
        font-size: large;
        color: #fff;
        background-color: skyblue;
        /* height: 80px; */
        display: flex;
        align-items: center;
        justify-content:space-between ;
    }

  /* .el-header .el-input{
    width: 80vw;
  } */
  .el-header img{
    margin-top: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  
  .el-aside {
    background-color: #e2e7ed;
    color: #333;
    height: 100vh;
  }
  
  
</style>
