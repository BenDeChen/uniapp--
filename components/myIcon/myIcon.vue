<template>
	<view>
		<text class="iconfont" :class="[type,iconColor]" :style="{fontSize: size + 'rpx'}"></text>
	</view>
</template>

<script>
	export default {
		name: "myIcon",
		props: {
			type: {
				type: String,
				default: ""
			},
			iconColor: {
				type: String,
				default: 'text-dart'
			},
			color: {
				type: String,
				default: ''
			},
			size: {
				type: Number || String,
				default: 45
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
