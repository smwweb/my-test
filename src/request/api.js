import {sendGet,sendPost} from './request.js'


// 管理员登录接口
export let userlogin = d=> sendPost('/user/userLogin',d)

// 地图数据接口
export let Mapdatas =()=> sendGet('/device/getDevicesLocationList')


// *单灯数据页面开始

// 目前的
// 获取所有设备名称接口（目前的python接口，http://192.168.5.234:5000)
export let Devicedatas =()=> sendPost('/getproduct')
// 设备详情接口，只能根据设备名称一条一条的拿数据（目前的python接口，前端使用循环传设备名称拿的数据)
export let Deviceinfo =d=> sendPost('/getdata',d)
// 发送操作数据，控制主灯辅灯开关，调光（目前的python接口)
export let Deviceinfos =d=> sendPost('/setdata',d)


// 期望的
// 设备详情数据接口(渲染前端数据表格，d中为分页所需请求数据)
export let Devicelist = d => sendPost('/device/getDevicePage',d)
// 单灯控制接口(主灯辅灯开关，调光,d中为调光指令数据)
export let Devicecontrol = d => sendPost('/device/deviceOperate',d)
// 给单灯划分策略（一，二，三），分组（一，二，三）接口
export let Devicenums = d => sendPost('/接口地址',d)

// *单灯页面结束



// *策略设置页面

// 策略一二三数据
export let Strategydata =d=> sendPost('/devicedata',d)
// 集控器策略
export let controldata =d=> sendPost('/devicecontroldata',d)


// *单灯历史数据页面

// 单灯历史数据查询
export let Devicehistory =d=> sendPost('/devicehistory',d)
