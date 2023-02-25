<template>
	<view>
		<pageTitle>榜单</pageTitle>
		<booklist :bookList="bookList"></booklist>
		<uni-load-more :status="loadStatus"></uni-load-more>
	</view>
</template>

<script>
	 export default {
		data() {
			return {
				bookList: [],
				loadStatus: 'loading',
				isLoadMore:''
			}
		},
		onLoad() {
			this.initLoadmore()
		},
		// 触底加载
		onReachBottom() {
			this.loadMore()
		},
		methods: {
			async initLoadmore() {
				let lists = await this.$http.get("/readList")
				this.isLoadMore = lists.isLoadMore
				let books = lists.books;
				setTimeout(()=>{
					if(books.length) {
						this.bookList = [...this.bookList,...books]
						if(this.bookList.length > 40){
							this.isLoadMore = '没有更多了'
						}
						this.loadStatus = 'more'
					}
				},2000)
			},
			loadMore() { 
				this.loadStatus = 'loading';
				switch(this.isLoadMore) {
					case '正在加载':
						return;
					case '没有更多了':
						this.loadStatus = 'noMore';
						break;
					case '上拉加载显示更多':
						this.initLoadmore()
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style>

</style>
