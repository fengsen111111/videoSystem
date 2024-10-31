<script setup lang="ts">
    import eChartsHome from '@/components/eCharts_home.vue'
    import scrollDiv from '@/components/scroll_div.vue'
    import scrollDivTwo from '@/components/scroll_div_two.vue'
    import { ref } from 'vue'
    let twoList = ref([
        {
            id: 1,
            text: '监控房间',
            number: 60
        },
        {
            id: 2,
            text: '设备启用',
            number: 60
        },
        {
            id: 3,
            text: '植物种类',
            number: 60
        },
        {
            id: 4,
            text: '植物数量',
            number: 60
        },
        {
            id: 5,
            text: '表单数量',
            number: 60
        },
        {
            id: 6,
            text: '实验人员',
            number: 88
        },
    ])
    // 动态处理图片
    function getImageUrl(name) {
        return new URL(`../../assets/home/two_${name}.png`, import.meta.url).href;
    }

</script>

<template>
    <div>
        <div class="flex justify-between text-white px-5">
            <div class="w-[480px] space-y-5">
                <div class="bg_home_one p-2">
                    <span class="bg_home_one_border text-xl pl-3">
                        <span class="relative -top-1">蔬菜种业创新中心共享实验室实验室介绍</span>
                    </span>
                    <div class="px-4 py-2">
                        蔬菜产业的快速发展，离不开蔬菜种业的贡献。“吃菜自由”、“吃瓜自 由”，良种加持下，蔬菜产量不断提升。2024年，第十六届中国国际种
                        业博览会暨第二十一届全国种子信息交流与产品交易会（简称第二十一 届全国种子双交会）将于10月29—31日在福建福州举办。作为大会重
                        要内容之一，蔬菜种业创新发展论坛定于10月31日在福州海峡国际会 展中心举办。2023年全国蔬菜面积已达到3.4亿亩，产量8.3亿吨。超过
                        8亿吨的蔬菜产量，占全球总产量约60%，产量排名世界第一。近年 来，我国蔬菜种植面积和产量呈稳中有升态势。
                    </div>
                </div>
                <div class="bg_home_item p-2">
                    <span class="bg_home_item_border w-52 flex text-xl pl-3">
                        <span class="relative -top-1">数据概览</span>
                    </span>
                    <div class="px-4 py-1 text-center grid grid-cols-2">
                        <div class="items-center flex my-2" v-for="(item,index) in twoList" :key="index">
                            <!-- <img src="../../assets/home/two_1.png" class="w-14 h-14" alt=""> -->
                            <img :src="getImageUrl(item.id)" class="w-12 h-12 donghua" alt="">
                            <div class="ml-5">
                                <div class="text-lg">{{item.number}} 个</div>
                                <div class="text-xs text-[#23FFF9]">{{item.text}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg_home_item p-2">
                    <span class="bg_home_item_border w-52 flex text-xl pl-3">
                        <span class="relative -top-1">植物分类</span>
                    </span>
                    <eChartsHome />
                </div>
            </div>
            <div class="w-[480px] space-y-5">
                <div>
                    <div class="bg_home_item p-2">
                        <span class="bg_home_item_border w-52 flex text-xl pl-3">
                            <span class="relative -top-1">主要房间检测数据</span>
                        </span>
                        <div v-for="item in [1,2]" :key="item">
                            <div class="bg-[#44B1D5] text-base text-white mt-2 flex items-center pl-5">
                                {{item}}号实验室
                            </div>
                            <div class="grid grid-cols-3 py-2 px-5">
                                <div class="flex items-center">
                                    <img src="../../assets/home/four_1.png" class="w-10 h-10 donghua" alt="">
                                    <div class="ml-2">
                                        <div>20°C</div>
                                        <div class="text-[#FBD234]">温度</div>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <img src="../../assets/home/four_2.png" class="w-10 h-10 donghua" alt="">
                                    <div class="ml-2">
                                        <div>20°C</div>
                                        <div class="text-[#FBD234]">湿度</div>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <img src="../../assets/home/four_3.png" class="w-10 h-10 donghua" alt="">
                                    <div class="ml-2">
                                        <div>20°C</div>
                                        <div class="text-[#FBD234]">二氧化碳浓度</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-around">
                            <div class="flex">
                                <img src="../../assets/home/four_check.png" class="w-2 h-2 mr-4" alt="">
                                <img src="../../assets/home/four_more.png" class="w-2 h-2 mr-4" alt="">
                                <img src="../../assets/home/four_more.png" class="w-2 h-2 mr-4" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg_home_item p-2">
                        <span class="bg_home_item_border w-52 flex text-xl pl-3">
                            <span class="relative -top-1">科研课题</span>
                        </span>
                        <div>
                            <div
                                class="bg-[#44B1D5] text-base text-center text-[#19ECFF] mt-2 grid grid-cols-4 items-center">
                                <div>课题编号</div>
                                <div>课题名称</div>
                                <div>科研负责人</div>
                                <div>相关简介</div>
                            </div>
                            <!-- <div class="grid grid-cols-4 text-center items-center pt-1 border-t-2 border-t-[#19ECFF] mt-2 text-xs"
                                v-for="item in [1,2,3,4]" :key="item">
                                <div>xxxxxxxx</div>
                                <div>植物嫁接理论</div>
                                <div>张山</div>
                                <div class="text-[8px] text-left">无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...</div>
                            </div> -->
                            <scrollDiv />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg_home_item p-2">
                        <span class="bg_home_item_border w-52 flex text-xl pl-3">
                            <span class="relative -top-1">实验室摄像监控</span>
                        </span>
                        <div>
                            <div
                                class="bg-[#44B1D5] text-base text-center text-[#19ECFF] mt-2 grid grid-cols-3 items-center">
                                <div>实验室</div>
                                <div>监控</div>
                                <div>状态</div>
                            </div>
                            <!-- <div class="grid grid-cols-3 text-center items-center pt-1 mt-2 text-xs"
                                v-for="item in [1,2,3,4,5]" :key="item">
                                <div>1号实验室</div>
                                <div>监控1</div>
                                <div class="flex items-center ml-[3.75rem]">
                                    <div class="text-[#60F3A0]">使用中</div>
                                    <div class="ml-8"><img src="../../assets/home/serve.png" class="w-2 h-3" alt="">
                                    </div>
                                </div>
                            </div> -->
                            <scrollDivTwo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @keyframes rotate360 {
        100% {
            transform: rotate(360deg);
        }
    }

    /*  */
    .donghua:hover {
        animation: rotate360 3s infinite 0s;
    }

    .bg_home_one {
        background-image: url('../../assets/home/one.png');
        background-size: 100% 100%;
    }

    .bg_home_one_border {
        background-image: url('../../assets/home/one_border.png');
        background-size: 100% 100%;
    }

    .bg_home_item {
        background-image: url('../../assets/home/item_bg.png');
        background-size: 100% 100%;
    }

    .bg_home_item_border {
        background-image: url('../../assets/home/item_order.png');
        background-size: 100% 100%;
    }
</style>