import App from './App'
import store from "./store/index.js"
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	let height = uni.getSystemInfoSync().statusBarHeight;
	// #ifdef MP-WEIXIN
	height = uni.getMenuButtonBoundingClientRect().bottom
	// #endif
	app.config.globalProperties.$statusBarHeight = height
	return {
		app
	}
}
// #endif
