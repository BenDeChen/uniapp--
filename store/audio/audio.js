import musicResourecs from "./musicResourecs.js"
let music = musicResourecs.musicResourecs

let audio;
export default {
	namespaced: true,
	state:{
	},
	getters:{
		
	},
	mutations:{
		addAudioEvent() {
			audio.onPlay(()=>{
				
			})
			audio.onPause(()=>{
				
			})
			audio.onStop(()=>{
				
			})
			audio.onEnded(()=>{
				
			})
			audio.onError(()=>{
				
			})
		},
		destroyed() {
			audio.offPlay(()=>{
				
			})
			audio.offPause(()=>{
				
			})
			audio.offStop(()=>{
				
			})
			audio.offEnded(()=>{
				
			})
			audio.offError(()=>{
				
			})
		}
	},
	actions:{
		init({commit}) {
			if(audio) return;
			audio = uni.createInnerAudioContext()
			commit('addAudioEvent')
		}
	}
}