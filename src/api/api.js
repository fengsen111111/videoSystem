import service from '@/api/request';
 
const api = {
    IN_FO:'/pfs/PCLConnect/GetDataList_sys',//查询实验室基本信息
    ZWFL:'/pfs/PCLConnect/GetDataList_zwfl',//查询植物分类
    SEARCH_EYHT:'/pfs/PCLConnect/GetDataList_plc',//查询每个房间最新温度湿度二氧化碳
    SEARCH_KY:'/pfs/PCLConnect/GetDataList_kt',//查询科研课题列表
    SEARCH_SXT_LIST:'/pfs/PCLConnect/GetDataList_sxt',//查询房间摄像头列表
    SEARCH_ALL_FJ:'/pfs/PCLConnect/GetDataList_plc1',//查询所有房间所有PLC设备列表
    // STATUS:'/pfs/PCLConnect/SaveData'//控制开关状态
}

// 控制开关状态
// export function SaveData(params) {
//   return service.post(api.STATUS, params);
// }

// 查询实验室基本信息
export function GetDataList_sys(params) {
  return service.get(api.IN_FO,params);
}
 
// 查询植物分类
export function GetDataList_zwfl(data) {
  return service.get(api.ZWFL, data);
}
 
// 查询每个房间最新温度湿度二氧化碳
export function GetDataList_plc( data) {
  return service.get(api.SEARCH_EYHT, data);
}
 
// 查询科研课题列表
export function GetDataList_kt( data) {
    return service.get(api.SEARCH_KY, data);
  }
   
// 查询房间摄像头列表
export function GetDataList_sxt( data) {
    return service.get(api.SEARCH_SXT_LIST, data);
  }
   
// 查询所有房间所有PLC设备列表
export function GetDataList_plc1( data) {
    return service.get(api.SEARCH_ALL_FJ, data);
  }
