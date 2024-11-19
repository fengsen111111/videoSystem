<script lang="ts" setup>
    import { reactive,ref } from "vue";
    import { vue3ScrollSeamless } from "vue3-scroll-seamless";
    import { useRouter, useRoute } from 'vue-router'
    import { GetDataList_sxt } from '@/api/api.js'

    const sxt_list = ref([])
    function _GetDataList_sxt() {
        GetDataList_sxt().then((res) => {
            console.log('摄像头列表', res);
            sxt_list.value = res
        })
    }
    _GetDataList_sxt()

    const classOptions = {
        step: 0.5
    };
    
    const router = useRouter()
    const route = useRoute()
    const handleDetails = (item) => {
        console.log('跳转监控室', item);
        router.push({
            path: '/video/index',
            query: item
        })
        // window.open(item.sxtURL)
    }
</script>

<template>
    <div class="demo">
        <vue3ScrollSeamless class="scroll-wrap w-full" :classOptions="classOptions" :dataList="sxt_list">
            <ul class="ui-wrap w-full">
                <li class="li-item" v-for="(item,i) in sxt_list" :key="i">
                    <div class="grid grid-cols-3 text-center items-center pt-1 mt-2 text-xs w-full ">
                        <div>{{item.sysId}}</div>
                        <div>{{item.monitorname}}</div>
                        <div class="flex items-center ml-[3.75rem]">
                            <div :class="item.states=='使用中'?'text-[#60F3A0]':'text-red-600'">{{item.states}}</div>
                            <div class="ml-8" @click="handleDetails(item)">
                                <img src="../assets/home/serve.png" class="w-2 h-3" alt="">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </vue3ScrollSeamless>
    </div>
</template>
<style>
    .demo {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .scroll-wrap {
        height: 17vh;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }

    .ui-wrap {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        width: 100%;
        /* border: 1px solid red; */
    }

    .li-item {
        display: flex;
        align-items: center;
        width: 100%;
        text-align: center;
    }
</style>