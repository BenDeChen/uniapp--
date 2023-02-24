"use strict";
const common_vendor = require("../../common/vendor.js");
const store_audio_musicResourecs = require("./musicResourecs.js");
let music = store_audio_musicResourecs.musicResourecs.musicResourecs;
let audio;
const audio$1 = {
  namespaced: true,
  state: {
    playStatus: false,
    currentPlayIndex: 0,
    duration: 0,
    currentTime: 0,
    audioList: []
  },
  getters: {
    audioName(state) {
      let i = state.currentPlayIndex;
      return music[i].name;
    },
    singerName(state) {
      let i = state.currentPlayIndex;
      return music[i].singer.name;
    },
    singerSynopsis(state) {
      let i = state.currentPlayIndex;
      return music[i].singer.synopsis;
    }
  },
  mutations: {
    destroyed() {
      audio.offPlay(() => {
      });
      audio.offPause(() => {
      });
      audio.offStop(() => {
      });
      audio.offEnded(() => {
      });
      audio.offError(() => {
      });
    },
    audioPlay(state) {
      let index = state.currentPlayIndex;
      audio.src = music[index].src;
      audio.play();
    },
    audioPause(state) {
      audio.pause();
    },
    audioStop() {
      audio.stop();
    },
    changePlayIndex(state, index) {
      state.currentPlayIndex = index;
    },
    audioSeek(state, pos) {
      audio.seek(pos);
    },
    changeCurrentTime(state, time) {
      state.currentTime = time;
    },
    changePlayState(state, bol) {
      state.playStatus = bol;
    },
    setPlaydDuration(state, val = audio.duration) {
      if (val && !isNaN(val)) {
        state.duration = val;
      }
    },
    getAudioList(state, audioList) {
      for (let item of audioList) {
        state.audioList.push({
          id: item.id,
          audioName: item.name,
          singerName: item.singer.name,
          playStatus: 0
        });
      }
    }
  },
  actions: {
    init({
      commit,
      dispatch
    }) {
      if (audio)
        return;
      audio = common_vendor.index.createInnerAudioContext();
      commit("getAudioList", music);
      audio.onPlay(() => {
        commit("changePlayState", true);
      });
      audio.onPause((res) => {
        console.log("\u97F3\u9891\u6682\u505C", res);
        commit("changePlayState", false);
      });
      audio.onStop((res) => {
        console.log("\u97F3\u9891\u505C\u6B62", res);
        commit("changePlayState", false);
      });
      audio.onEnded(() => {
        commit("changePlayState", false);
        dispatch("PreOrNext", "next");
      });
      audio.onError((res) => {
        console.log("\u97F3\u9891\u64AD\u653E\u9519\u8BEF", res);
        commit("changePlayState", false);
      });
      audio.onTimeUpdate(() => {
        commit("setPlaydDuration");
        commit("changeCurrentTime", audio.currentTime);
      });
      audio.onCanplay(() => {
        commit("setPlaydDuration");
        commit("changeCurrentTime", audio.currentTime);
      });
    },
    playOrPause({
      commit,
      state
    }) {
      if (!state.playStatus) {
        commit("audioPlay");
        let currentTime = state.currentTime;
        commit("audioSeek", currentTime);
      } else {
        commit("audioPause");
      }
    },
    PreOrNext({
      commit,
      state
    }, type) {
      commit("audioStop");
      let curIndex = state.currentPlayIndex, lastIndex = music.length - 1;
      let newIndex;
      switch (type) {
        case "pre":
          newIndex = curIndex === 0 ? lastIndex : curIndex - 1;
          break;
        case "next":
          newIndex = curIndex === lastIndex ? 0 : curIndex + 1;
          break;
        default:
          newIndex = curIndex;
          break;
      }
      commit("changePlayIndex", newIndex);
      commit("audioPlay");
    },
    sliderToPlay({
      commit,
      state
    }, e) {
      let value = e.detail.value;
      commit("audioSeek", value);
      if (!state.playStatus) {
        commit("changeCurrentTime", value);
      }
    },
    selectPlay({ state, commit }, id) {
      let current = music.findIndex((item) => item.id === id);
      if (state.currentPlayIndex === current) {
        commit("audioPause");
        return;
      }
      commit("audioStop");
      commit("changePlayIndex", current);
      commit("audioPlay");
    }
  }
};
exports.audio = audio$1;
