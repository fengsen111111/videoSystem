import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Video from '@/views/video/index.vue'
import VideoIndex from '@/views/videoIndex/index.vue'
import System from '@/views/system/index.vue'
const routes = [
    {
        path: '/index',
        name: 'Home',
        component: Home
    },
    {
        path: '/video',
        name: 'Video',
        component: Video
    },
    {
        path: '/video/index',
        name: 'VideoIndex',
        component: VideoIndex
    },
    {
        path: '/system',
        name: 'System',
        component: System
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
