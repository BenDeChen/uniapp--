<template>
	<view>
		<view class="cal" :style="{height: statusBarHeight + 'px'}"></view>
		<view :class="curTheme"  class="fixed-top shadow animated slideInDown" v-if="setStatus">
			<view class="" :style="{height: statusBarHeight + 'px'}"></view>
			<view class="flex align-center" style="height: 80rpx;">
				<myIcon type="icon-jiantou-copy" size="40" class="px-2" @tap="quit"></myIcon>
				<text>{{novalName}}</text>
				<text class="flex-1 px-2 font-sm text-ellipsis">章节:{{curChapterTitle}}</text>
			</view>
		</view>

		<view v-if="setStatus" :class="curTheme"  class="fixed-bottom shadow flex align-center font animated slideInUp"
			hover-class="" style="height: 160rpx;">
			<view class="flex-1 flex flex-column align-center" @tap="changeCatelogStatus(true)">
				<myIcon type="icon-xueyuan-mulu" size="55"></myIcon>
				<view class="">目录</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="isnight">
				<myIcon type="icon-yanjing" size="55"></myIcon>
				<view class="">夜间模式</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="changeTypeFaceStatus(true)">
				<myIcon type="icon-ziti1" size="55"></myIcon>
				<view class="">字体</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="changeMoreStatus(true)">
				<myIcon type="icon-diqiuhuanqiu" size="55"></myIcon>
				<view class="">更多</view>
			</view>
		</view>

		<!-- 目录· -->
		<uni-drawer ref="drawer">
			<view :class="curTheme" >
				<view class="" :style="{height: statusBarHeight + 'px'}"></view>
				<view class="flex align-center justify-center" style="80rpx">章节目录</view>
				<scroll-view scroll-y :style="{height: calHeight + 'rpx'}">
					<block v-for="(item,index) in chapterCatalog" :key="item.id">
						<view class="px-1 py-2 font text-ellipsis" :class="{curChapter: chapterIndex == index}"
							@tap="toPointChapter(item.id)">{{item.title}}</view>
					</block>
				</scroll-view>
			</view>
			
		</uni-drawer>
		<!-- 字体 -->
		<view  :class="curTheme"  v-if="typeFaceStatus" class="fixed-bottom bg-white shadow px-3 pt-2 animated" style="height: 180rpx;">
			<view class="flex">字体: <slider class="flex-1" :value="myFontSize" min="20" max="50" block-size="16"
					activeColor="#34495e" backgroundColor="#ecf1f0" @change="changeFontSize" @changing="changeFontSize">
				</slider>
			</view>
			<view class="flex">间距: <slider class="flex-1" :value="myLineHeight" min="20" max="100" block-size="16"
					activeColor="#34495e" backgroundColor="#ecf1f0" @change="changeLineHeight"
					@changing="changeLineHeight"></slider>
			</view>
		</view>
		<!-- 更多 -->
		<view :class="curTheme" v-if="moreStatus" class="fixed-bottom bg-white shadow px-3 pt-2 animated" style="height: 250rpx;">
			<!-- #ifndef H5 -->
			<view class="flex">亮度: <slider class="flex-1" :value="brightNess" min="0" max="100" block-size="16"
					activeColor="#34495e" backgroundColor="#ecf1f0" @change="setBrightNess" @changing="setBrightNess">
				</slider>
			</view>
			<!-- #endif -->
			
			<view class="flex font text-light-black justify-between">
				<block v-for="item in themes" :key="item.id">
					<view class="flex-1" @tap="themeIndexChange(item.id)">
						<view :class="item.id" class="border rounded mx-1" style="height: 80rpx;"></view>
						<view class="text-center">{{item.name}}</view>
					</view>
				</block>
			</view>
		</view>

		<!-- 正文 -->
		<swiper :class="curTheme" :style="{height: calHeight+'rpx', fontSize: myFontSize + 'px', lineHeight: myLineHeight + 'px'}"
			class="px-2" @tap="changeSetStatus" :current="chapterIndex" @change="swiperChangeChapter">
			<swiper-item v-for="item in LoadedChapterd" :key="item.id">
				<scroll-view scroll-y="true" :style="{height: calHeight+'rpx'}">
					<uni-load-more status="loading" v-if="!item.text"></uni-load-more>
					<rich-text :nodes="htmlParser(item.text)"> </rich-text>
				</scroll-view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	// import test from "../../static/test.js"
	import unit from "../../static/unit.js"
	import htmlParser from "../../static/html-parser.js"
	let testContent,testSynopsis;
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				chapterID: 0,
				novalName: "",
				chapterCatalog: [],
				calHeight: 0, 
				setStatus: false,
				chapterIndex: 0,
				LoadedChapterd: [],
				myFontSize: uni.getStorageSync('myFontSize') || 20,
				myLineHeight: uni.getStorageSync('myLineHeight') || 45,
				typeFaceStatus: false,
				moreStatus:false,
				brightNess:0,//亮度
				themes:[
					{
						id: 'blueTheme',
						name: '天蓝色'
					},{
						id: 'eyeHelpTheme',
						name: '护眼'
					},{
						id: 'lightGretTheme',
						name: '淡灰'
					},{
						id: 'morningTheme',
						name: '早晨'
					},{
						id: 'nightTheme',
						name: '夜间'
					}
				],
				themeIndex: uni.getStorageSync('THEMEINDEX') || 0
			}
		},
		computed: {
			curChapterTitle() {
				return this.chapterCatalog[this.chapterIndex].title
			},
			curTheme() {
				return this.themes[this.themeIndex].id
			}
		},
		onLoad(e) {
			this.init(+e.chapterID)
		},
		created() {
			let height = unit.getSystemHeight({isRpx:true}) - unit.Torpx(this.statusBarHeight) 
			this.calHeight = Math.floor(height)
			// #ifndef H5
			this.getBrightNess()
			// #endif
		},
		mounted() {
			// unit.calSurplusHeight({
			// 	pageID: this,
			// 	pos: 'cal',
			// 	success: val => this.calHeight = val
			// })
		},
		methods: {
			htmlParser,
			async init(id) {
				testContent = await this.$http.get("/testContent")
				testSynopsis = await this.$http.get("/testSynopsis")
				this.chapterCatalog = testSynopsis.chapterCatalog
				this.novalName = testSynopsis.name
				this.preLoad()
				this.toPointChapter(id)
				this.delayLoad()
			},
			changeSetStatus() {
				if ((this.typeFaceStatus || this.moreStatus) && !this.setStatus) {
					this.changeTypeFaceStatus(false) 
					this.changeMoreStatus(false)
					return
				}
				this.setStatus = !this.setStatus
			},
			preLoad() {
				testSynopsis.chapterCatalog.forEach(item => this.LoadedChapterd.push({
					id: item.id,
					title: item.title,
					text: ''
				}))
				console.log(this.LoadedChapterd);
			},
			delayLoad() {
				let index = this.chapterIndex
				if (!this.LoadedChapterd[index].text) {
					setTimeout(() => {
						this.LoadedChapterd[index].text = testContent.content[index].text
					}, 1000)
				}
			},
			changeIndex(index) {
				this.chapterIndex = index
				this.delayLoad()
			},
			swiperChangeChapter(e) {
				this.changeIndex(e.detail.current)
			},
			changeCatelogStatus(bol) {
				console.log(bol);
				if (bol) {
					this.$refs.drawer.open()
					this.changeSetStatus()
				} else {
					this.$refs.drawer.close()
				}
			},
			toPointChapter(id) {
				let index = this.LoadedChapterd.findIndex(item => item.id === id);
				if (this.chapterIndex == index) return;
				this.changeIndex(index)
			},
			changeFontSize(e) {
				this.myFontSize = e.detail.value;
				uni.setStorageSync("myFontSize", this.myFontSize)
			},
			changeLineHeight(e) {
				this.myLineHeight = e.detail.value;
				uni.setStorageSync("myLineHeight", this.myLineHeight)
			},
			changeTypeFaceStatus(bol) {
				this.typeFaceStatus = bol
				if (bol) this.changeSetStatus();
			},
			getBrightNess() {
				uni.getScreenBrightness({
					success: e=>this.brightNess = Math.floor(e.value) / 8 * 100 
				})
			},
			setBrightNess(e) {
				let value = e.detail.value;
				this.brightNess = value
				uni.setScreenBrightness({
					value: value / 100 * 8
				})
			},
			changeMoreStatus(bol) {
				this.moreStatus = bol;
				if (bol) this.changeSetStatus();
			},
			themeIndexChange(id) {
				this.themeIndex = this.themes.findIndex(item => item.id === id)
				uni.setStorageSync("THEMEINDEX", this.themeIndex)
			},
			isnight() {
				this.themeIndex !== 4 ? this.themeIndexChange('nightTheme') : this.themeIndexChange('morningTheme') 
			},
			quit() {
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	.curChapter {
		background-color: #8395a7;
		color: #fff;
	}
</style>
