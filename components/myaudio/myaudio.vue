<template>
	<view class="fixed-bottom mx-2 mb-1 rounded" style="height: 160rpx;background-color: #d1ccc0;opacity: .9;">
		<view class="flex align-center justify-center font" style="color:#7a8388;height: 65rpx;">
			<view class="">00:00</view>
			<view class="" style="width: 500rpx;">
				<slider @change="" block-size="16" activeColor="#e48267" backgroundColor="#eef2f3"/>
			</view>
			<view class="">00:00</view>
		</view>
		<view class="flex align-center justify-between mx-2" style="height: 95rpx;">
			<view class="font" style="color: #424651;">
				<view>歌手-The one</view>
				<view>歌曲-暗香</view>
			</view>
			<view class="flex">
				<myIcon type="icon-shangyishou"  size="75"></myIcon>
				<myIcon type="icon-ziyuan" size="75" class="mx-2"></myIcon>
				<myIcon type="icon-xiayishou" size="75"></myIcon>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState, mapActions, mapGetters} from 'vuex'
	export default {
		name:"myaudio",
		data() {
			return {
				
			};
		},
		computed:{ 
			...mapState({
				
			})
		},
		mounted() {
			this.init()
		},
		methods:{
			...mapActions('audio',['init'])
		}
	}
</script>

<style>

</style>