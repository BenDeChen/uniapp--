<template>
	<view>
		<view class="flex align-center p-1 border-bottom" style="height: 250rpx;">
			<image :src="bookImgUrl" mode="aspectFill" class="rounded mx-2" style="width: 200rpx;height: 200rpx;">
			</image>
			<view class="flex-1 position-relative" style="height: 100%;">
				<view class="py-1 font-md font-weight-bold">{{bookName}}</view>
				<view class="font text-light-black Multi-row-truncation">{{bookSynopsis}}</view>
				<myIcon type="icon-diandian" size="40" class="position-absolute right-0 bottom-0" @tap="cancal"></myIcon>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		name:"collections",
		props: {
			bookID:{
				type: Number,
				default: 0
			},
			bookImgUrl: {
				type: String,
				default: ''
			},
			bookName: {
				type: String,
				default: ''
			},
			bookSynopsis: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				
			};
		},
		methods:{
			cancal() {
				this.showCancalCol(true)
				this.throwId(this.bookID)
			},
			throwId(id) {
				this.$emit('getID', id)
			},
			showCancalCol(bol) {
				this.$emit('showCancelCol', bol)
			}
		}
	}
</script>

<style>

</style>