<script setup lang="ts">
	import { ref } from 'vue'
	import { GetDataList_sys } from '@/api/api.js'
	import { useRouter } from 'vue-router'
	const router = useRouter()
	router.push({
		path: '/index',
	})

	const rou_index = ref(1)
	rou_index.value = localStorage.getItem('rou_index') ? localStorage.getItem('rou_index') : 1
	const cliIndex = (index) => {
		// console.log('index',index);
		rou_index.value = index
		localStorage.setItem('rou_index', rou_index.value)
	}
	const info_obj = ref()
	function _GetDataList_sys() {
		GetDataList_sys().then((res) => {
			// console.log('数据',res);
			info_obj.value = res[0]
		})
	}
	_GetDataList_sys()
</script>

<template>
	<div class="cursor-pointer">
		<div class="bg-cover w-screen img_bg">
			<a-row>
				<a-col :span="7">
					<div class="img_top_left h-16 w-full"></div>
				</a-col>
				<a-col :span="10">
					<div class="img_top_center w-full text-4xl font-bold text-white text-center h-24 leading-[72px]">
						<!-- 南方蔬菜种业创新中心共享实验室 -->
						{{info_obj?info_obj.sysname:''}}
					</div>
				</a-col>
				<a-col :span="7">
					<div class="img_top_right h-16 w-full"></div>
				</a-col>
			</a-row>
			<div>
				<router-view></router-view>
			</div>
			<div class="fixed bottom-4 flex px-28 h-16 w-full">
				<div class="img_bot_left w-1/3 mt-2"></div>
				<div class="w-1/3 flex justify-around text-white text-center">
					<router-link to="/index">
						<div class="text-xl w-36 py-4" :class="rou_index==1?'img_demo_index':'img_demo'"
							@click="cliIndex(1)">首页</div>
					</router-link>
					<router-link to="/video">
						<div class="text-xl w-36 py-4" :class="rou_index==2?'img_demo_index':'img_demo'"
							@click="cliIndex(2)">视频监控</div>
					</router-link>
					<router-link to="/system">
						<div class="text-xl w-36 py-4" :class="rou_index==3?'img_demo_index':'img_demo'"
							@click="cliIndex(3)">设备状况</div>
					</router-link>
				</div>
				<div class="img_bot_right w-1/3 mt-2"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.img_bg {
		background-image: url('../assets/layout/bg.png');
		background-size: 100% 100%;
		min-height: 100vh;
	}

	.img_top_left {
		background-image: url('../assets/layout/topLeft.png');
		background-size: 100% 100%;
	}

	.img_top_center {
		background-image: url('../assets/layout/topCenter.png');
		background-size: 100% 100%;
	}

	.img_top_right {
		background-image: url('../assets/layout/topRight.png');
		background-size: 100% 100%;
	}

	.img_bot_left {
		background-image: url('../assets/layout/botLeft.png');
		background-size: 100% 100%;
	}

	.img_bot_right {
		background-image: url('../assets/layout/botRight.png');
		background-size: 100% 100%;
	}

	.img_demo {
		background-image: url('../assets/layout/botDemo.png');
		background-size: 100% 100%;
	}

	.img_demo_index {
		background-image: url('../assets/layout/botDemoIndex.png');
		background-size: 100% 100%;
		font-weight: bold;
	}
</style>