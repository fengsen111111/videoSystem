<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    const router = useRouter()
    const route = useRoute()
    const count = ref(0)
    const handleDetails = (item) => {
        console.log('跳转监控室', item);
        router.push({
            path: '/video/index',
            query: {
                item: item
            }
        })
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
                <div v-for="item in [1,2]" :key="item">
                    <div class="bg-[#2D85B6] flex justify-between px-6 text-2xl mt-3 pb-1 items-center">
                        <div>{{item}}号实验室</div>
                        <div><img src="../../assets/video/title_up.png" class="w-5 h-4" alt=""></div>
                    </div>
                    <div class="grid grid-cols-7 py-1" style="grid-column-gap:20px">
                        <div class="video_item my-1 p-2" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">
                            <div class="text-lg">{{item}}号摄像头</div>
                            <div class="flex items-center justify-between">
                                <div class="text-[#60F3A0]">使用中</div>
                                <img src="../../assets/video/item_go.png" @click="handleDetails(item)" class="h-3 w-3"
                                    alt="">
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
        background-image: url('../../assets/video/item.png');
        background-size: 100% 100%;
    }
</style>