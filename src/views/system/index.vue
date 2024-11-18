<script setup lang="ts">
    import { ref } from 'vue'
    import { GetDataList_plc1 } from '@/api/api.js'
    import { config } from '@/config/config';
    import axios from 'axios';
    import { message } from 'ant-design-vue';

    const sb_list = ref([])
    function _GetDataList_plc1() {
        GetDataList_plc1().then((res) => {
            console.log('所有PLC设备列表', res);
            const groupedData = res.reduce((acc, item) => {
                if (!acc[item.fjname]) {
                    acc[item.fjname] = [];
                }
                acc[item.fjname].push(item);
                return acc;
            }, {});
            // 转换为数组格式
            const result = Object.keys(groupedData).map(key => ({
                fjname: key,
                status: true,
                items: groupedData[key]
            }));
            console.log('房间数据', result);
            sb_list.value = result
        })
    }
    _GetDataList_plc1()

    function handCli(index) {
        sb_list.value[index].status = !sb_list.value[index].status
    }
    // 状态
    function handStatus(item) {
        console.log('item', item);
        let payload = {
            Id: item.Id,
            IP: item.IP,
            PLCcarbondioxide: item.PLCcarbondioxide,
            PLChumidity: item.PLChumidity,
            PLCname: item.PLCname,
            PLCswitch: item.PLCswitch,
            PLCtemperature: item.PLCtemperature,
            isswitch: item.isswitch == 'False' ? 'True' : 'False',
            sysId: item.sysId
        }
        const formData = new FormData();
        for (const key in payload) {
            console.log('key', key, payload[key]);
            formData.append(key, payload[key]);
        }
        // spinning.value = true
        // 发送 POST 请求
        axios.post(config.baseURL + '/pfs/PCLConnect/SaveData', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log('操作结束', res);
            message.success('操作成功！');

            _GetDataList_plc1() //刷新表格数据
        }).catch((res) => {
            message.error('操作失败！');
        })
    }
</script>

<template>
    <div>
        <div class="bg_video p-4 text-white">
            <div>
                <span class="bg_video_border pb-1 text-4xl pl-6">
                    <span class="relative -top-1">设备状况</span>
                </span>
            </div>
            <div class="gd_div overflow-auto h-[68vh]">
                <div v-for="(item,index) in sb_list" :key="index">
                    <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                        <div>{{item.fjname}}</div>
                        <div @click="handCli(index)">
                            <img v-if="item.status" src="../../assets/video/title_down.png" class="w-5 h-4" alt="">
                            <img v-else src="../../assets/video/title_up.png" class="w-5 h-4" alt="">
                        </div>
                    </div>
                    <div v-show="item.status">
                        <div class="grid grid-cols-7 py-1" style="grid-column-gap:20px">
                            <div class="video_item my-1 p-2" v-for="iss in item.items" :key="iss.Id">
                                <div class="text-xl">{{iss.PLCname}}</div>
                                <div @click="handStatus(iss)" class="py-2 relative" v-if="iss.isswitch=='False'">
                                    <img src="../../assets/system/no.png" class="w-10/12 mx-auto" alt="">
                                    <div class="text-white absolute top-[26%] right-[22%]">关闭</div>
                                </div>
                                <div @click="handStatus(iss)" class="py-2 relative" v-else>
                                    <img src="../../assets/system/yse.png" class="w-10/12 mx-auto" alt="">
                                    <div class="text-white absolute top-[26%] left-[17%]">使用中</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .gd_div::-webkit-scrollbar {
        display: none;
        /* Chrome Safari */
    }

    .bg_video {
        background-image: url('../../assets/video/bg.png');
        background-size: 100% 100%;
        height: 79vh;
        width: 80vw;
        margin: 0 auto;
    }

    .bg_video_border {
        background-image: url('../../assets/video/title_text.png');
        background-size: 100% 100%;
        width: 20vw;
        display: flex;
    }

    .video_item {
        background-image: url('../../assets/system/border_item.png');
        background-size: 100% 100%;
    }
</style>