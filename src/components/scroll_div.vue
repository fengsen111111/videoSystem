<script lang="ts" setup>
    import { reactive } from "vue";
    import { vue3ScrollSeamless } from "vue3-scroll-seamless";

    const classOptions = {
        step: 0.5
    };

    const arr = [
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
        {
            code: 'xxxxxxxx',
            title: '植物嫁接理论',
            name: '张山',
            text: '无性繁殖一般就是用植物的枝条或侧芽进行扦插,植物的枝条...'
        },
    ]
</script>

<template>
    <div class="demo">
        <vue3ScrollSeamless class="scroll-wrap w-full" :classOptions="classOptions" :dataList="arr">
            <ul class="ui-wrap w-full">
                <li class="li-item" v-for="(item,i) in arr" :key="i">
                    <div
                        class="grid grid-cols-4 text-center items-center pt-1 border-t-2 border-t-[#19ECFF] mt-2 text-xs">
                        <div>{{item.code}}</div>
                        <div>{{item.title}}</div>
                        <div>{{item.name}}</div>
                        <div class="text-[8px] text-left">{{item.text}}</div>
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