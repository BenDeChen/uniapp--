<template>
	<view :style="{marginTop: statusBarHeight + 10 + 'px'}" >
		<view class="" style="height: 60rpx;"></view>
		<view class="flex align-center position-fixed bg-white w-100 py-1" :style="{height:'rpx', top: statusBarHeight +'px',zIndex:9}">
			<myIcon type="icon-jiantou-copy" class="mx-2" @tap="quit"></myIcon>
			<view class="font-lg">
				<slot>榜单</slot>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: "pageTitle",
		data() {
			return {
				statusBarHeight: this.$statusBarHeight 
			};
		},
		methods:{
			quit() {
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>

</style>
