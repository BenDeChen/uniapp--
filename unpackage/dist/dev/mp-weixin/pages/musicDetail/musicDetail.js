"use strict";
const static_utils = require("../../static/utils.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      listState: false,
      collectState: false,
      nightStatus: false
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    ...common_vendor.mapState({
      playStatus: (state) => state.audio.playStatus,
      duration: (state) => state.audio.duration,
      currentTime: (state) => state.audio.currentTime,
      audioList: (state) => state.audio.audioList
    }),
    ...common_vendor.mapGetters("audio", [
      "audioName",
      "singerName",
      "singerSynopsis"
    ])
  },
  methods: {
    formatTime: static_utils.formatTime,
    ...common_vendor.mapActions("audio", ["init", "playOrPause", "PreOrNext", "sliderToPlay", "selectPlay"]),
    changeStatus(type) {
      this[type] = !this[type];
    },
    showSingerDetail() {
      this.$refs.pop.open();
    },
    clickWindow() {
      if (this.listState) {
        this.changeStatus("listState");
      }
    }
  }
};
if (!Array) {
  const _easycom_pageTitle2 = common_vendor.resolveComponent("pageTitle");
  const _easycom_myIcon2 = common_vendor.resolveComponent("myIcon");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_pageTitle2 + _easycom_myIcon2 + _easycom_uni_popup2)();
}
const _easycom_pageTitle = () => "../../components/pageTitle/pageTitle.js";
const _easycom_myIcon = () => "../../components/myIcon/myIcon.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_pageTitle + _easycom_myIcon + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      theme: $data.nightStatus ? "night-theme" : "bg-white"
    }),
    b: common_vendor.t(_ctx.audioName),
    c: common_vendor.t(_ctx.singerName),
    d: common_vendor.t($options.formatTime(_ctx.currentTime)),
    e: _ctx.currentTime,
    f: _ctx.duration || 100,
    g: !_ctx.duration,
    h: common_vendor.o((...args) => _ctx.sliderToPlay && _ctx.sliderToPlay(...args)),
    i: common_vendor.o((...args) => _ctx.sliderToPlay && _ctx.sliderToPlay(...args)),
    j: common_vendor.o(() => {
    }),
    k: common_vendor.t($options.formatTime(_ctx.duration)),
    l: common_vendor.o(($event) => _ctx.PreOrNext("pre")),
    m: common_vendor.p({
      type: "icon-shangyixiang",
      size: "85"
    }),
    n: common_vendor.o(_ctx.playOrPause),
    o: common_vendor.p({
      type: _ctx.playStatus ? "icon-zanting" : "icon-bofang1",
      size: "80"
    }),
    p: common_vendor.o(($event) => _ctx.PreOrNext("next")),
    q: common_vendor.p({
      type: "icon-xiayixiang",
      size: "85"
    }),
    r: common_vendor.p({
      type: !$data.listState ? "icon-icon--" : "icon-liebiao",
      size: "60"
    }),
    s: common_vendor.o(($event) => $options.changeStatus("listState")),
    t: common_vendor.p({
      type: !$data.collectState ? "icon-aixinfengxian" : "icon-xihuan2",
      size: "60"
    }),
    v: common_vendor.o(($event) => $options.changeStatus("collectState")),
    w: common_vendor.p({
      type: !$data.nightStatus ? "icon-yejianmoshi" : "icon-yueliang",
      size: "60"
    }),
    x: common_vendor.o(($event) => $options.changeStatus("nightStatus")),
    y: common_vendor.p({
      type: "icon-jieshao",
      size: "60"
    }),
    z: common_vendor.o((...args) => $options.showSingerDetail && $options.showSingerDetail(...args))
  }, {}, {
    G: $data.listState
  }, $data.listState ? {
    H: common_vendor.f(_ctx.audioList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.audioName),
        b: common_vendor.t(item.singerName),
        c: "6d192d21-9-" + i0,
        d: common_vendor.o(($event) => _ctx.selectPlay(item.id), item.id),
        e: item.id
      };
    }),
    I: common_vendor.p({
      type: "icon-bofangsanjiaoxing",
      size: "40"
    }),
    J: common_vendor.n($data.nightStatus ? "night-theme" : "bg-white")
  } : {}, {
    K: common_vendor.t(_ctx.singerSynopsis),
    L: common_vendor.n($data.nightStatus ? "night-theme" : "bg-white"),
    M: common_vendor.sr("pop", "6d192d21-10"),
    N: common_vendor.n($data.nightStatus ? "night-theme" : "bg-white"),
    O: common_vendor.o((...args) => $options.clickWindow && $options.clickWindow(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/pages/musicDetail/musicDetail.vue"]]);
wx.createPage(MiniProgramPage);
