<template>
	<view class="m-2">
		<swiper indicator-dots autoplay circular style="height: 300rpx;" indicator-active-color="#fff" @change="getCurrent">
			<swiper-item v-for="(item, index) in imgArr">
				<image :src="item.src" mode="aspectFill" class="w-100 animated" :class="{'my-animate':currentImgIndex === index}"></image>
			</swiper-item> 
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"banner",
		props:{
			imgArr:{
				type: Array,
				default:()=>[]
			}
		},
		data() {
			return {
				currentImgIndex:0
			};
		},
		methods:{
			getCurrent(e) {
				this.currentImgIndex = e.detail.current
			}
		}
	}
</script>

<style lang="scss">
// @keyframes my-animtion{
// 	from{
// 		width: 50rpx;
// 	}
// 	50%{
// 		height: 70rpx;
// 	}
// 	to{
// 		transform: scale(1.5);
// 	}
// }
// .my-animtate{
// 	animation-name: my-animtion;
// 	animation-duration: 3s;
// 	animation-fill-mode: forwards;
// 	animation-timing-function: ease-in-out;
// 	animation-delay: 2s;
// 	animation-iteration-count: 1;
// }
</style>