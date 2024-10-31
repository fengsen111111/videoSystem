<template>
    <div class="flex relative">
        <div class="flex items-center">
            <div ref="chartDom" style="width: 170px; height: 170px;margin-left: 20px;"></div>
            <div class="ml-12">
                <div class="flex justify-between w-40 my-3" v-for="(item,index) in data" :key="index">
                    <div class="flex items-center">
                        <div class="w-3 h-3 rounded-xl mr-3" :style="`background-color:${color[index]}`"></div>
                        <div>{{item.name}}</div>
                    </div>
                    <div>{{item.value}}</div>
                </div>
            </div>
        </div>
        <div class="absolute text-center top-[64px] left-[78px]">
            <div>182712</div>
            <div class="text-xs ml-0.5">植物总数</div>
        </div>
    </div>

</template>

<script setup>
    import { ref, onMounted, onUnmounted, nextTick } from 'vue';
    import * as echarts from 'echarts';
    // 创建一个响应式引用来保存DOM元素
    const color = ['#438BFA', '#60F3A0', '#FBD234', '#F46077']
    const data = [
        { value: 15678, name: '蔬菜类' },
        { value: 45678, name: '水果类' },
        { value: 75678, name: '药品类' },
        { value: 45678, name: '观赏类' },
    ]
    const chartDom = ref(null);
    let chartInstance = null;
    // 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
    onMounted(async () => {
        await nextTick(); // 确保DOM已经渲染完成
        chartInstance = echarts.init(chartDom.value);
        const option = {
            tooltip: {
                trigger: 'item'
            },
            color: color,
            series: [
                {
                    type: 'pie',
                    radius: ['35%', '80%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'right'
                    },
                    labelLine: {
                        show: false
                    },
                    data: data
                }
            ]
        };
        chartInstance.setOption(option);
    });

    // 销毁ECharts实例
    onUnmounted(() => {
        if (chartInstance != null && chartInstance.dispose) {
            chartInstance.dispose();
        }
    });
</script>

<style scoped>
    /* 添加一些CSS样式来美化图表容器（可选） */
</style>