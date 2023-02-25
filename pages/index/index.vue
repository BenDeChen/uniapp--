<template>
	<view class="content" :style="{'margin-top': statusBarHeight + 'px'}">
		<search></search>
		<banner :imgArr="swiperImages"></banner>
		<functionSort :functionSortArr="functionSortArr"></functionSort>
		<listHeader>
			<template #title>猜你喜欢</template>
			<template #tips>更多推荐</template>
		</listHeader>
		<recommond :Rebooks="Rebooks"></recommond>
		<block v-for="(item,index) in bookResources" :key="index">
			<listHeader>
				<template #title>{{item.headerTitle}}</template>
			</listHeader>
			<booklist :bookList="item.books"></booklist>
		</block>
		<myaudio></myaudio>
		<view class="" style="height: 160rpx;"></view>
	</view>
</template>

<script>
	//状态栏的高度 
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight + 10,
				swiperImages: [],
				functionSortArr: [{
					type: "icon-icon-test",
					iconColor: "text-warning",
					name: "看榜单"
				}, {
					type: "icon-startRead",
					iconColor: "text-hover-primary",
					name: "听小说"
				}, {
					type: "icon-icon09",
					iconColor: "text-light-black",
					name: "听音乐"
				}, {
					type: "icon-zhishi",
					iconColor: "text-success",
					name: "听知识"
				}],
				Rebooks: [],
				bookResources: []

			}
		},
		onLoad() {
		this.$http.get("/app_index").then(res=>{
			this.swiperImages = res.swiperImages
			this.bookResources = res.bookResources
			this.Rebooks = res.Rebooks
		})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
	}
</style>
