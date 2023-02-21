<template>
	<view class="main" style="height: 100vh;" :class="nightStatus ? 'night-theme' : ''">
		<pageTitle :theme="nightStatus ? 'night-theme':'bg-white'">音乐详情</pageTitle>
		<view class="flex align-center justify-center flex-column py-4">
			<view>
				<text class="font">歌曲:</text>
				<text class="font-weight-bold">{{audioName}}</text>
			</view>
			<view>
				<text class="font">歌手:</text>
				<text class="font-weight-bold">{{singerName}}</text>
			</view>
		</view>
		<view class="flex align-center justify-center" style="height: 420rpx;">
			<image style="border-radius: 35rpx;box-shadow: 0 2rpx 6rpx 0" src="../../static/music/music1.png" mode="widthFix" lazy-load=""></image>
		</view>
		<view class="flex align-center justify-center font" style="color:#7a8388;height: 65rpx;padding-top: 40rpx;">
			<view class="">{{formatTime(currentTime)}}</view>
			<view class="" style="width: 500rpx;" @tap.stop>
				<slider :value="currentTime" :max="duration || 100" :disabled="!duration" @change="sliderToPlay" @changing="sliderToPlay" block-size="16" activeColor="#e48267" backgroundColor="#eef2f3"/>
			</view>
			<view class="">{{formatTime(duration)}}</view>
		</view>
		<view class="flex align-center justify-center" style="padding-top: 60rpx;">
			<view class="animated mr-3" hover-class="pulse">
				<myIcon type="icon-shangyixiang"  size="85" @tap.stop="PreOrNext('pre')"></myIcon>
			</view>
			<myIcon :type="playStatus ? 'icon-zanting' : 'icon-bofang1'" size="80" class="mx-5" @tap.stop="playOrPause"></myIcon>
			<view class="animated ml-2" hover-class="pulse">
				<myIcon type="icon-xiayixiang" size="85" @tap.stop="PreOrNext('next')"></myIcon>
			</view>
		</view>
		<view class="flex align-center justify-center font"  style="padding-top: 60rpx;">
			<view class="animated text-center" hover-class="pulse" @tap="changeStatus('listState')">
				<myIcon :type="!listState ? 'icon-icon--' : 'icon-liebiao'"  size="60"></myIcon>
				<text class="pt-2">播放列表</text>
			</view>
			<view class="animated text-center" hover-class="pulse" @tap="changeStatus('collectState')">
				<myIcon :type="!collectState ? 'icon-aixinfengxian' : 'icon-xihuan2'" style="padding:0 80rpx" size="60"></myIcon>
				<text class="pt-2">收藏</text>
			</view>
			<view class="animated text-center" hover-class="pulse" @tap="changeStatus('nightStatus')">
				<myIcon :type="!nightStatus ? 'icon-yejianmoshi' : 'icon-yueliang'" size="60"></myIcon>
				<text class="pt-2">夜间模式</text>
			</view>
		</view>
		<view class="fixed-bottom shadow p-2 animated fadeInUp" style="height: 260rpx;border-radius: 30rpx;z-index: 0;" v-if="!listState">
			<view class="flex justify-between">
				<view>
					<view>
						<text class="font">歌曲:</text>
						<text class="font-weight-bold">{{audioName}}</text>
					</view>
					<view>
						<text class="font">歌手:</text>
						<text class="font-weight-bold">{{singerName}}</text>
					</view>
				</view>
				<myIcon type="icon-jieshao" size="65" @tap="showSingerDetail"></myIcon>
			</view>
			<view class="">
				<view class="font-md pt-2">歌手简介:</view>
				<view class="text-ellipsis w-100">
					{{singerSynopsis}}
				</view>
			</view>
		</view>
		<view class="fixed-bottom shadow p-2 animated fadeInUp" style="height: 400rpx;border-radius: 30rpx;" v-else>
			 <view class="font-weight-bold font-md " style="height: 50rpx;">列表选择</view>
			 <scroll-view scroll-y style="height: 350rpx;">
				 <block v-for="(item,index) in audioList" :key="item.id">
					 <view class="flex align-center justify-between font p-2" style="85rpx" hover-class="bg-light"  @tap="selectPlay(item.id)">
						 <text class="flex-1 text-ellipsis">{{item.audioName}}</text>
						 <text class="flex-1 text-ellipsis">{{item.singerName}}</text>
						 <view class="flex-1 flex ml-3 align-center">
							 <text class="mr-2">播放</text>
							 <myIcon type="icon-bofangsanjiaoxing" size="40"></myIcon>
						 </view>
					 </view>
				 </block>
			 </scroll-view>
		</view>
		<uni-popup ref="pop">
			<view class="p-2 shadow"  :class="nightStatus ? 'night-theme' : 'bg-white'" style="width: 600rpx;height: 850rpx;border-radius: 40rpx;">
				<text class="font">{{singerSynopsis}}</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { formatTime } from "../../static/utils.js"
	import {mapState, mapActions, mapGetters} from 'vuex'
	export default {
		data() {
			return {
				listState: false,
				collectState: false,
				nightStatus: false
			}
		},
		mounted() {
			this.init()
		},
		computed:{
			...mapState({
				playStatus: state=>state.audio.playStatus,
				duration: state=>state.audio.duration,
				currentTime: state=>state.audio.currentTime,
				audioList: state=>state.audio.audioList
			}),
			...mapGetters('audio', [
				'audioName',
				'singerName',
				'singerSynopsis'
			])
		},
		methods: {
			formatTime,
			...mapActions('audio',['init', 'playOrPause', "PreOrNext", "sliderToPlay", "selectPlay"]),
			changeStatus(type) {
				this[type] = !this[type]
			},
			showSingerDetail() {
				this.$refs.pop.open()
			}
		}
	}
</script>

<style>
page{
	height: 100%;
}
</style>
