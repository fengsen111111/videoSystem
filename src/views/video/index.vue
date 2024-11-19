<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    import { GetDataList_sxt } from '@/api/api.js'

    const router = useRouter()
    const route = useRoute()
    const count = ref(0)
    const handleDetails = (item) => {
        console.log('跳转监控室', item);
        // router.push({
        //     path: '/video/index',
        //     query: item
        // })
        window.open(item.sxtURL)
    }

    const fj_list = ref([])
    function _GetDataList_sxt() {
        GetDataList_sxt().then((res) => {
            // console.log('摄像头列表', res);
            // 根据房间分类
            const groupedData = res.reduce((acc, item) => {
                if (!acc[item.sysId]) {
                    acc[item.sysId] = [];
                }
                acc[item.sysId].push(item);
                return acc;
            }, {});
            // 转换为数组格式
            const result = Object.keys(groupedData).map(key => ({
                sysId: key,
                status: true,
                items: groupedData[key]
            }));
            // console.log('房间数据', result);
            fj_list.value = result
          
        })
    }
    _GetDataList_sxt()

    function handCli(index) {
        fj_list.value[index].status = !fj_list.value[index].status
    }

</script>

<template>
    <div>
        <div class="bg_video p-4 text-white">
            <div>
                <span class="bg_video_border pb-1 text-4xl pl-6">
                    <span class="relative -top-1 ">视频监控</span>
                </span>
            </div>
            <div class="gd_div overflow-auto h-[68vh]">
                <div v-for="(item,index) in fj_list" :key="index">
                    <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                        <div>{{item.sysId}}</div>
                        <div @click="handCli(index)">
                            <img v-if="item.status" src="../../assets/video/title_down.png"
                                class="w-5 h-4" alt="">
                            <img v-else src="../../assets/video/title_up.png" class="w-5 h-4" alt="">
                        </div>
                    </div>
                    <div v-show="item.status">
                        <div class="grid grid-cols-7 py-1" style="grid-column-gap:20px">
                            <div class="video_item my-1 p-2" v-for="iss in item.items" :key="iss.id">
                                <div class="text-lg">{{iss.monitorname}}</div>
                                <div class="flex items-center justify-between">
                                    <div :class="iss.states=='使用中'?'text-[#60F3A0]':'text-red-600'">{{iss.states}}</div>
                                    <img src="../../assets/video/item_go.png" @click="handleDetails(iss)" class="h-3 w-3"
                                        alt="">
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
        background-image: url('../../assets/video/item.png');
        background-size: 100% 100%;
    }
</style>