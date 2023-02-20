import {createStore } from 'vuex'
import audio from "./audio/audio.js"

 
let store = createStore({
	modules:{
		audio
	}
})

export default store