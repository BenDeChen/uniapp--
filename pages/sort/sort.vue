<template>
	<view>
		<view class="cal" :style="{height: statusBarHeight+'px'}"></view>
		<search class="cal"></search>
		<view class="cal" style="height: 20rpx;"></view>
		<view class="flex" style="background-color: #f0f3f8;">
			<scroll-view scroll-y class=" font text-light-black" style="width: 180rpx;padding: 0 20rpx" :style="{height: calHeight+'rpx'}">
				<block v-for="(item,index) in leftListRes" :key="index">
					<view class="animated" :class="{'selected pulse font font-weight-bold': leftIndex == index}" style="height: 150rpx;line-height: 150rpx;" @tap="leftToright(index)">{{item}}</view>
				</block>
			</scroll-view> 
			<scroll-view scroll-y :scroll-into-view="rightIndex" scroll-with-animation @scroll="rightToLeft" :style="{height: calHeight+'rpx'}">
				<block v-for="(item,index) in rightListRes" :key="index">
					<view style="height: 250rpx;margin-bottom: 70rpx;" :id="`right${index}`">
						<view class="text-center flex justify-center" style="height: 80rpx;line-height: 80rpx;">
							<text class="mr-1">{{item.text}}</text>
							<myIcon type="icon-youjiantou" size="40"></myIcon>
						</view>
						<view class="flex flex-wrap bg-white rounded font" style="height: 170rpx;">
							<block v-for="(mitem,mindex) in item.content" :key="mindex">
								<view class="flex align-center justify-center" style="width: calc(100% / 3);">{{mitem}}</view>
							</block>
						</view>
					</view>
				</block>
				<view class="" :style="{height: calHeight - 320 + 'rpx'}"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		sortResources
	} from "./sortResources.js";
	import $u from "@/static/unit.js"
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				calHeight: 0,
				rightIndex: 'right0',
				leftIndex: 0
			}
		},
		computed: {
			leftListRes() {
				return sortResources.map(item=>item.text)
			},
			rightListRes() {
				return sortResources
			}
		},
		mounted() {
			$u.calSurplusHeight({
				pageID: this,
				pos: 'cal',
				isTabBarPage: true,
				success: val => this.calHeight = val
			})
		},
		methods: {
			leftToright(i) {
				this.rightIndex = 'right'+i
			},
			rightToLeft(e) {
				let top = e.detail.scrollTop;
				let standardVal = $u.Topx((320));
				let curIndex = Math.round(top / standardVal)
				this.leftIndex = curIndex;
			}
		}
	}
</script>

<style>
	.selected{
		color: #f7646d;
	}
</style>
