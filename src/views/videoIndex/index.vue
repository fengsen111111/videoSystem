<script setup lang="ts">
    import { useRouter, useRoute } from 'vue-router'
    import { CloseOutlined } from '@ant-design/icons-vue';
    const route = useRoute()
    const router = useRouter()

    console.log('数据', route.query);
    const handleCancel = () => {
        console.log('返回上一页');
        router.go(-1);
    }

</script>

<template>
    <div>
        <div class="bg_video p-4 text-white">
            <div>
                <span class="bg_video_border pb-1 text-4xl pl-6">
                    <span class="relative -top-1 ">{{route.query.sysId}}</span>
                </span>
            </div>
            <div class="gd_div overflow-auto h-[68vh] relative">
                <div class="flex justify-between">
                    <div class="text-2xl my-2">{{route.query.monitorname}}</div>
                    <div><close-outlined @click="handleCancel" style="color: #23FFF9;"
                            class="text-3xl relative -top-2" /></div>
                </div>
                <div class="w-full h-[92%] absolute top-[8%]">
                    <!-- 监控中 -->
                    <iframe :src="route.query.sxtURL" width="100%" height="100%"> </iframe>
                    <!-- <iframe src="https://blog.csdn.net/kxbkk/article/details/118553930" width="100%" height="100%"> </iframe> -->
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
        width: 70vw;
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