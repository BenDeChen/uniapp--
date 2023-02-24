"use strict";
const common_vendor = require("../common/vendor.js");
const store_audio_audio = require("./audio/audio.js");
let store = common_vendor.createStore({
  modules: {
    audio: store_audio_audio.audio
  }
});
exports.store = store;
