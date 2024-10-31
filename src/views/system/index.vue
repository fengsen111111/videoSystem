<script setup lang="ts">
    import { ref } from 'vue'
    const count = ref(0)
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
                <div v-for="item in [1,2]" :key="item">
                    <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                        <div>{{item}}号实验室</div>
                        <div><img src="../../assets/video/title_up.png" class="w-5 h-4" alt=""></div>
                    </div>
                    <div class="grid grid-cols-7 py-1" style="grid-column-gap:20px">
                        <div class="video_item my-1 p-2" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">
                            <div class="text-xl">AHU{{item}}</div>
                            <div class="py-2 relative">
                                <img src="../../assets/system/yse.png" class="w-10/12 mx-auto" alt="">
                                <div class="text-white absolute top-[26%] left-[17%]">使用中</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                    <div>3号实验室</div>
                    <div><img src="../../assets/video/title_down.png" class="w-5 h-4" alt=""></div>
                </div>
                <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                    <div>4号实验室</div>
                    <div><img src="../../assets/video/title_down.png" class="w-5 h-4" alt=""></div>
                </div>
                <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                    <div>5号实验室</div>
                    <div><img src="../../assets/video/title_down.png" class="w-5 h-4" alt=""></div>
                </div>
                <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                    <div>6号实验室</div>
                    <div><img src="../../assets/video/title_down.png" class="w-5 h-4" alt=""></div>
                </div>
                <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                    <div>7号实验室</div>
                    <div><img src="../../assets/video/title_down.png" class="w-5 h-4" alt=""></div>
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