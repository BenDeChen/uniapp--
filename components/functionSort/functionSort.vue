<template>
	<view  class="flex align-center justify-between mx-3 py-2">
		<block v-for="(item,index) in functionSortArr" :key="index">
			<view class="flex flex-column align-center" @tap="switchToPage(index)">
				<myIcon :type="item.type" :iconColor="item.iconColor" size="65"></myIcon>
				<text class="mt-1 font text-light-black">{{item.name}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	let pageList = {
		0:"/pages/readList/readList",
		1:"/pages/listenNoval/listenNoval",
		2:"/pages/listenMusic/listenMusic",
		3:"/pages/listenKnowledge/listenKnowledge",
	}
	export default {
		name:"functionSort",
		props:{
			functionSortArr:{
				type: Array,
				default: () =>[]
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			switchToPage(pageIndex) {
				uni.navigateTo({
					url:pageList[pageIndex]
				})
			}
		}
	}
</script>

<style>

</style>