"use strict";
const common_vendor = require("../../common/vendor.js");
const static_utils = require("../../static/utils.js");
const _sfc_main = {
  name: "myaudio",
  data() {
    return {
      bottom: 0
    };
  },
  computed: {
    ...common_vendor.mapState({
      playStatus: (state) => state.audio.playStatus,
      duration: (state) => state.audio.duration,
      currentTime: (state) => state.audio.currentTime
    }),
    ...common_vendor.mapGetters("audio", [
      "audioName",
      "singerName"
    ])
  },
  created() {
  },
  mounted() {
    this.init();
  },
  methods: {
    formatTime: static_utils.formatTime,
    ...common_vendor.mapActions("audio", ["init", "playOrPause", "PreOrNext", "sliderToPlay"]),
    toDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/musicDetail/musicDetail"
      });
    }
  }
};
if (!Array) {
  const _easycom_myIcon2 = common_vendor.resolveComponent("myIcon");
  _easycom_myIcon2();
}
const _easycom_myIcon = () => "../myIcon/myIcon.js";
if (!Math) {
  _easycom_myIcon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.formatTime(_ctx.currentTime)),
    b: _ctx.currentTime,
    c: _ctx.duration || 100,
    d: !_ctx.duration,
    e: common_vendor.o((...args) => _ctx.sliderToPlay && _ctx.sliderToPlay(...args)),
    f: common_vendor.o((...args) => _ctx.sliderToPlay && _ctx.sliderToPlay(...args)),
    g: common_vendor.o(() => {
    }),
    h: common_vendor.t($options.formatTime(_ctx.duration)),
    i: common_vendor.t(_ctx.singerName),
    j: common_vendor.t(_ctx.audioName),
    k: common_vendor.o(($event) => _ctx.PreOrNext("pre")),
    l: common_vendor.p({
      type: "icon-shangyishou",
      size: "75"
    }),
    m: common_vendor.o(_ctx.playOrPause),
    n: common_vendor.p({
      type: _ctx.playStatus ? "icon-bofang" : "icon-ziyuan",
      size: "75"
    }),
    o: common_vendor.o(($event) => _ctx.PreOrNext("next")),
    p: common_vendor.p({
      type: "icon-xiayishou",
      size: "75"
    }),
    q: common_vendor.o(() => {
    }),
    r: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args)),
    s: $data.bottom + "rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/myaudio/myaudio.vue"]]);
wx.createComponent(Component);
