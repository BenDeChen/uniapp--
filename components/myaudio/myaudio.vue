<template>
	<view @tap="toDetail" class="fixed-bottom mx-2 mb-1 rounded" :style="{bottom: bottom + 'rpx'}" style="height: 160rpx;background-color: #d1ccc0;opacity: .9;">
		<view class="flex align-center justify-center font" style="color:#7a8388;height: 65rpx;">
			<view class="">{{formatTime(currentTime)}}</view>
			<view class="" style="width: 500rpx;" @tap.stop>
				<slider :value="currentTime" :max="duration || 100" :disabled="!duration" @change="sliderToPlay" @changing="sliderToPlay" block-size="16" activeColor="#e48267" backgroundColor="#eef2f3"/>
			</view>
			<view class="">{{formatTime(duration)}}</view>
		</view>
		<view class="flex align-center justify-between mx-2" style="height: 95rpx;">
			<view class="font" style="color: #424651;">
				<view>歌手-{{singerName}} </view>
				<view>歌曲-{{audioName}}</view>
			</view>
			<view class="flex align-center"  @tap.stop>
				<view class="animated" hover-class="pulse">
					<myIcon type="icon-shangyishou"  size="75" @tap.stop="PreOrNext('pre')"></myIcon>
				</view>
				<myIcon :type="playStatus ? 'icon-bofang' : 'icon-ziyuan'" size="75" class="mx-2" @tap.stop="playOrPause"></myIcon>
				<view class="animated" hover-class="pulse">
					<myIcon type="icon-xiayishou" size="75" @tap.stop="PreOrNext('next')"></myIcon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState, mapActions, mapGetters} from 'vuex'
	import { formatTime } from "../../static/utils.js"
	export default {
		name:"myaudio",
		data() {
			return {
				bottom: 0
			};
		}, 
		computed:{ 
			...mapState({
				playStatus: state=>state.audio.playStatus,
				duration: state=>state.audio.duration,
				currentTime: state=>state.audio.currentTime,
			}),
			...mapGetters('audio', [
				'audioName',
				'singerName'
			])
		},
		created() {
			// #ifdef H5
			this.bottom = 100
			// #endif
		},
		mounted() {
			this.init()
		},
		methods:{
			formatTime,
			...mapActions('audio',['init', 'playOrPause', "PreOrNext", "sliderToPlay"]),
			toDetail() {
				uni.navigateTo({
					url: '/pages/musicDetail/musicDetail'
				});
			}
		}
	}
</script>

<style lang="scss">
 
</style>