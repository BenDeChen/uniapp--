<template>
	<view>
		<pageTitle theme="greyThueme">图书详情</pageTitle>
		<view class="greyThueme flex align-center py-2" style="height: 250rpx;background-color: #a8b0c3;">
			<image src="../../static/Rebook/Rebook1.jpg" mode="widthFix" lazy-load class="flex-1 mx-2 rounded"></image>
			<view class="flex-2 mx-2" style="">
				<view style="font-size: 45rpx;">{{name}}</view>
				<view class="font mt-1">作者: {{author}}</view>
				<view class="flex align-center mt-2">
					<button class="flex-1 mx-2">分享</button>
					<button class="flex-1 mx-2">收藏</button>
				</view>
			</view>
		</view>
		<view class="shadow" style="height: 1210rpx;">
			<tabTop :tabArr="['详情','目录']" @getTabIndex="getTabIndex"></tabTop>
			<scroll-view scroll-y v-if="tabIndex === 0" class="animated" style="height: 1120rpx;">
				<view>
					<view class="py-2 flex justify-center text-light-black">--简介--</view>
					<view class="px-2 font-lg " style="line-height: 80rpx;">{{synopsis}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y v-else style="height: 1120rpx;">
				<block v-for="(item,index) in chapterCatalog" :key="item.id">
					<view class="p-2 text-ellipsis border-bottom" hover-class="bg-light">
						{{item.title}}
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import test from "../../static/test.js"
	export default {
		data() {
			return {
				name: test.name,
				author: test.author,
				synopsis: test.synopsis,
				chapterCatalog: test.chapterCatalog,
				tabIndex: 0
			}
		},
		methods: {
			getTabIndex(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style>
.greyThueme {
	background-color: #a8b0c3;
}
</style>
