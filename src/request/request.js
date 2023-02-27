import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';


// 封装方法:通过axios.get方法发送get请求与服务端交互
export function sendGet(url,params={},headers={}){
    // url请求地址  params请求时传参  header请求头传参
    return axios.get(url,{params,headers})

}
// 封装方法：通过axios.post方法发送post请求与服务端交互
export function sengPost(url,params={},isFile=false,headers={}){

    let data = "";
    // 判断是否有文件上传
    if(isFile){
        let formObj = new FormData();
        for(let keys in params){
            formObj.append(keys,params[keys]);
        }
        data = formObj;
    }else{
        // 将参数转换成查询字符串格式
        data = qs.stringify(params)
    }

    return axios.post(url,data,{headers})

}