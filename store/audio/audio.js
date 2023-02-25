// import musicResourecs from "./musicResourecs.js"
import http from "../../static/request.js"
let music;
let audio;
let timeOut = null;
export default {
	namespaced: true,
	state: {
		playStatus: false, //播放暂停
		currentPlayIndex: 1, //当前歌曲标识
		duration: 0, //歌曲长度
		currentTime: 0, //当前播放长度
		audioList: []
	},
	getters: {
		// 获取当前音乐名称
		audioName(state) {
			let i = state.currentPlayIndex
			return music ? music[i].name : ""
		},
		// 获取歌手
		singerName(state) {
			let i = state.currentPlayIndex
			return music ? music[i].singer.name : ""
		},
		singerSynopsis(state) {
			let i = state.currentPlayIndex
			return music ? music[i].singer.synopsis : ""
		},
		coverImg(state) {
			let i = state.currentPlayIndex
			return music ? music[i].cover : ""
		}
	},
	mutations: { 
		destroyed() {
			// #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO
			// 	取消监听 onPlay 事件
			audio.offPlay(() => {

			})
			// 取消监听 onPause 事件
			audio.offPause(() => {

			})
			// 	取消监听 onStop 事件
			audio.offStop(() => {

			})
			// 取消监听 onEnded 事件
			audio.offEnded(() => {

			})
			// 取消监听 onError 事件
			audio.offError(() => {

			})
			// #endif

		},
		// 开始播放
		audioPlay(state) {
			let index = state.currentPlayIndex;
			state.audioList[index].playStatus = 1
			audio.src = music[index].src;
			audio.play();
		},
		// 暂停
		audioPause(state) {
			let index = state.currentPlayIndex;
			state.audioList[index].playStatus = -1
			audio.pause();
		},
		// 停止
		audioStop(state) {
			let index = state.currentPlayIndex;
			state.audioList[index].playStatus = 0
			audio.stop()
		},
		// 改变播放标识 修改歌曲下标
		changePlayIndex(state, index) {
			state.currentPlayIndex = index
		},
		// 设置音乐播放位置
		audioSeek(state, pos) {
			audio.seek(pos)
		},
		// 设置当前播放长度
		changeCurrentTime(state, time) {
			state.currentTime = time
		},
		// 设置播放状态
		changePlayState(state, bol) {
			state.playStatus = bol
		},
		// 设置音乐总时长
		setPlaydDuration(state, val = audio.duration) { 
			if (val && !isNaN(val)) {
				state.duration = val
			}
		},
		getAudioList(state, audioList) {
			for(let item of audioList) {
				state.audioList.push({
					id: item.id,
					audioName: item.name,
					singerName: item.singer.name,
					playStatus : 0,//-1暂停 | 0 停止 | 1 播放
				})
			}
		}
	},
	actions: {
		async init({
			commit,
			dispatch
		}) {
			let res = await http.get("/musicResourecs");
			music = res.musicResourecs
			if (audio) return;
			commit("changePlayIndex", 0)
			audio = uni.createInnerAudioContext()
			commit("getAudioList", music)
			// 音频播放事件
			audio.onPlay(() => {
				commit("changePlayState", true)
			})
			// 音频暂停事件
			audio.onPause((res) => {
				console.log('音频暂停', res); 
				commit("changePlayState", false)
			})
			// 音频停止事件
			audio.onStop((res) => {
				console.log('音频停止', res);
				commit("changePlayState", false)
			})
			// 音频自然播放结束事件
			audio.onEnded(() => {
				commit("changePlayState", false)
				// commit("changeCurrentTime", 0)
				dispatch("PreOrNext", "next")
			})
			// 音频播放错误事件
			audio.onError((res) => {
				console.log('音频播放错误', res);
				commit("changePlayState", false)
			})
			// 音频播放进度更新事件
			audio.onTimeUpdate(() => {
				commit("setPlaydDuration")
				commit("changeCurrentTime", audio.currentTime)
			})
			// 音频进入可以播放状态
			audio.onCanplay(()=>{
				// #ifdef MP-WEIXIN
				commit("setPlaydDuration")
				commit("changeCurrentTime", audio.currentTime)
				// #endif
			})
		},
		// 暂停播放
		playOrPause({
			commit,
			state
		}) {
			if (!state.playStatus) {
				commit("audioPlay")
				let currentTime = state.currentTime;
				commit("audioSeek", currentTime)
			} else {
				commit("audioPause")
			}
		},
		// 切歌
		PreOrNext({
			commit,
			state
		}, type) {
			commit("audioStop")
			let curIndex = state.currentPlayIndex,
				lastIndex = music.length - 1;
			let newIndex;
			switch (type) {
				case 'pre':
					newIndex = curIndex === 0 ? lastIndex : curIndex - 1
					break;
				case 'next':
					newIndex = curIndex === lastIndex ? 0 : curIndex + 1
					break;
				default:
					newIndex = curIndex
					break;
			}
			commit("changePlayIndex", newIndex);
			commit("audioPlay")
		},
		sliderToPlay({
			commit,
			state
		}, e) {
			let value = e.detail.value;
			commit("audioSeek", value)
			if (!state.playStatus) {
				// commit("audioPlay")
				commit("changeCurrentTime", value)
			}
		},
		selectPlay({state, commit}, id) {
			let current = music.findIndex(item=>item.id === id);
			
			if(state.currentPlayIndex === current) {
				commit("audioPause")
				return;
			}
			commit("audioStop")
			commit("changePlayIndex", current)
			commit("audioPlay")
		}
	}
}
