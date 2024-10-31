<script lang="ts" setup>
    import { reactive } from "vue";
    import { vue3ScrollSeamless } from "vue3-scroll-seamless";

    const classOptions = {
        step: 0.5
    };

    const arr = [
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },
        {
            title: '号实验室',
            name: '监控',
            text: '使用中'
        },

    ]
</script>

<template>
    <div class="demo">
        <vue3ScrollSeamless class="scroll-wrap w-full" :classOptions="classOptions" :dataList="arr">
            <ul class="ui-wrap w-full">
                <li class="li-item" v-for="(item,i) in arr" :key="i">
                    <div class="grid grid-cols-3 text-center items-center pt-1 mt-2 text-xs w-full">
                        <div>{{i+''+item.title}}</div>
                        <div>{{item.name+''+i}}</div>
                        <div class="flex items-center ml-[3.75rem]">
                            <div class="text-[#60F3A0]">{{item.text}}</div>
                            <div class="ml-8">
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