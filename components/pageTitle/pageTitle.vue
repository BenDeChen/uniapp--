<template>
	<view :style="{paddingTop: statusBarHeight + 10 + 'px'}" :class="theme">
		<view class="" style="height: 60rpx;"></view>
		<view class="flex align-center position-fixed w-100 py-1" :class="theme" :style="{paddingTop: statusBarHeight + 10 + 'px',top: '0',zIndex:9}">
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
		props: {
			theme:{
				type: String,
				default: 'bg-white'
			}
		},
		data() {
			return {
				statusBarHeight: this.$statusBarHeight 
			};
		},
		created() { 
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
