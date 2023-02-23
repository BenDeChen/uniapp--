<template>
	<view>
		<view class="cal" :style="{height:statusBarHeight+'px'}"></view>
		<search class="cal"></search>
		<tabTop class="cal" :tabArr="['我的收藏','收听历史']" @getTabIndex="getTabIndex" :tabIndex="tabIndex"></tabTop>
		<swiper :style="{height: calHeight+'rpx'}" :current="tabIndex" @change="swiperChangeIndex">
			<swiper-item>
				<scroll-view scroll-y :style="{height: calHeight+'rpx'}">
					<block v-for="item in collectedArr" :key="item.id">
						<collections :bookID="item.id" :bookImgUrl="item.imgurl" :bookName="item.name"
							:bookSynopsis="item.synopsis" @getID="getID" @showCancelCol="showCancelCol">
						</collections>
					</block>
					
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y>
					<view></view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<uni-popup ref="pop" type="bottom" @change="changeStatus">
			<view class="bg-white">
				<view class="flex align-center px-2" style="height: 100rpx;" @tap="cancelCollect">
					<myIcon type="icon-xingxing" color="text-danger"></myIcon>
					<text class="ml-2 font">取消收藏</text>
				</view>
				<view class="bg-hover-light" style="height: 15rpx;"></view>
				<view class="text-center" style="height: 110rpx; line-height: 110rpx;" @tap="closeCancelCol">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import $u from "../../static/unit.js"
	import { books } from "../../static/book.js"
	export default {
		data() {
			return {
				calHeight: 0,
				statusBarHeight: this.$statusBarHeight,
				tabIndex: 0, 
				showCancalColStatus: false,
				collectedArr: [],
				cancelColID:0
			}
		}, 
		mounted() {
			$u.calSurplusHeight(({
				pageId: this,
				pos: 'cal',
				success: val => this.calHeight = val
			}))
			this.initData()
		},
		watch:{
			showCancalColStatus(val) {
				if(val) {
					uni.hideTabBar({
						animation:true
					})
				}else{
					uni.showTabBar({
						animation:true
					})
				}
			}
		},
		methods: {
			getTabIndex(index) {
				this.tabIndex = index
			},
			swiperChangeIndex(e) {
				this.getTabIndex(e.detail.current)
			},
			getID(id) {
				this.cancelColID = id
			},
			showCancelCol(bol) {
				this.$refs.pop.open()
			},
			closeCancelCol(bol) {
				this.$refs.pop.close()
			},
			changeStatus(e) {
				this.showCancalColStatus = e.show
			},
			initData() {
				this.collectedArr.push(...books)
			},
			IDToIndex(id) {
				return this.collectedArr.findIndex(item => item.id === id)
			},
			cancelCollect() {
				let index = this.IDToIndex(this.cancelColID)
				this.collectedArr.splice(index, 1)
				this.closeCancelCol()
			}
		}
	}
</script>

<style>

</style>
