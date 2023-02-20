<template>
	<view>
		<view class="flex align-center">
			<block v-for="(item,index) in Rebooks" :key="index">
				<view class="flex flex-column align-center flex-1 position-relative">
					<image :src="item.src" mode="widthFix" class="w-100"></image>
					<text class="font my-1 text-light-black">{{item.name}}</text>
					<myIcon type="icon-erji" iconColor="text-light-white" class="position-absolute" style="left: 45rpx;top: 20rpx;;"></myIcon>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name:"recommond",
		props:{
			Rebooks:{
				type: Array,
				default:[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>