<template>
	<view>
		<view class="" :style="{height: statusBarHeight + 'px'}"></view>
		
		<view class="flex justify-between align-center px-2" style="height:200rpx">
			<view class="flex align-center">
				<image src="../../static/logo.png" mode="aspectFill" style="border-radius: 50%;width: 130rpx;height: 130rpx;"></image>
				<text class="pl-2">萨达</text>
			</view>
			<view class="flex align-center rounded-circle p-1 " style="background-color: #ecf0f3;">
				<myIcon type="icon-erji" size="30" class="px-1"></myIcon>
				<text>我的客服</text>
			</view>
		</view>
		<view v-for="item in ['签到', '设置', '意见反馈', '切换账号']" :key="item">
			<view class="flex align-center justify-between px-2 text-light-black px-2" style="height: 90rpx;">
				<text>{{item}}</text>
				<myIcon type="icon-iconfonti" class="px-1"></myIcon>
			</view>
			<view class="" style="background-color:#f8f8f8;height:12rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
