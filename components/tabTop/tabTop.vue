<template>
	<view class="flex align-center border" style="height: 80rpx;justify-content: space-around;">
		<block v-for="(item,index) in tabArr" :key="index" >
			<view class="flex flex-column align-center justify-between" style="height: 80rpx;" >
				<view class="text-light-black pt-1 animated faster" :class="index === tabIndex ? 'font-weight-bold pulse' : ''" @tap="changeTab(index)">{{item}}</view>
				<view class="rounded animated zoomIn faster" style="width: 80rpx;height: 8rpx;background-color: #fb5f39;" v-if="index === tabIndex"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name:"tabTop",
		props:{
			tabArr:{
				type: Array,
				default:()=>[]
			}
		},
		data() {
			return {
				tabIndex: 0
			};
		},
		methods:{
			changeTab(index) {
				this.tabIndex = index;
				this.$emit("getTabIndex", this.tabIndex)
			}
		}
	}
</script>

<style>

</style>