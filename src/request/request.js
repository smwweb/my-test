import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

axios.defaults.headers.post['Content-Type']='application/json';


//开发环境 8080
if (process.env.NODE_ENV==="development") {
    Vue.prototype.imgHost = "http://192.168.5.232:8080"
}

//生产环境：将打包后的vue项目代码部署到服务端应用程序中
if (process.env.NODE_ENV==="production") {
    Vue.prototype.imgHost = "http://101.35.48.78:8080"
}

// //响应拦截器：对所有响应数据作统一处理
// axios.interceptors.response.use(d=>{

//     if(d.code != 1){
//        console.log(`服务端返回的异常信息为：${d.msg}`);
//     }
 
//      return d;
//  });
 
// 封装方法:通过axios.get方法发送get请求与服务端交互
export function sendGet(url,params={},headers={}){
    // url请求地址  params请求时传参  header请求头传参
    return axios.get(url,{params,headers})

}
// 封装方法：通过axios.post方法发送post请求与服务端交互
export function sendPost(url,params={},headers={}){
    // 将参数转换成查询字符串格式

    // let data = qs.stringify(params)
    return axios.post(url,params,{headers})

}