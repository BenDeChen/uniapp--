"use strict";
const common_vendor = require("../../common/vendor.js");
const static_test = require("../../static/test.js");
const static_unit = require("../../static/unit.js");
const static_htmlParser = require("../../static/html-parser.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: this.$statusBarHeight,
      chapterID: 0,
      novalName: static_test.test.name,
      chapterCatalog: static_test.test.chapterCatalog,
      calHeight: 0,
      setStatus: false,
      chapterIndex: 0,
      LoadedChapterd: [],
      myFontSize: common_vendor.index.getStorageSync("myFontSize") || 20,
      myLineHeight: common_vendor.index.getStorageSync("myLineHeight") || 45,
      typeFaceStatus: false,
      moreStatus: false,
      brightNess: 0,
      themes: [
        {
          id: "blueTheme",
          name: "\u5929\u84DD\u8272"
        },
        {
          id: "eyeHelpTheme",
          name: "\u62A4\u773C"
        },
        {
          id: "lightGretTheme",
          name: "\u6DE1\u7070"
        },
        {
          id: "morningTheme",
          name: "\u65E9\u6668"
        },
        {
          id: "nightTheme",
          name: "\u591C\u95F4"
        }
      ],
      themeIndex: common_vendor.index.getStorageSync("THEMEINDEX") || 0
    };
  },
  computed: {
    curChapterTitle() {
      return this.chapterCatalog[this.chapterIndex].title;
    },
    curTheme() {
      return this.themes[this.themeIndex].id;
    }
  },
  onLoad(e) {
    this.init(+e.chapterID);
  },
  created() {
    let height = static_unit.unit.getSystemHeight({ isRpx: true }) - static_unit.unit.Torpx(this.statusBarHeight);
    this.calHeight = Math.floor(height);
    this.getBrightNess();
  },
  mounted() {
  },
  methods: {
    htmlParser: static_htmlParser.parseHtml,
    init(id) {
      this.preLoad();
      this.toPointChapter(id);
    },
    changeSetStatus() {
      if ((this.typeFaceStatus || this.moreStatus) && !this.setStatus) {
        this.changeTypeFaceStatus(false);
        this.changeMoreStatus(false);
        return;
      }
      this.setStatus = !this.setStatus;
    },
    preLoad() {
      static_test.test.chapterCatalog.forEach((item) => this.LoadedChapterd.push({
        id: item.id,
        title: item.title,
        text: ""
      }));
    },
    delayLoad() {
      let index = this.chapterIndex;
      if (!this.LoadedChapterd[index].text) {
        setTimeout(() => {
          this.LoadedChapterd[index].text = static_test.test.content[index].text;
        }, 1e3);
      }
    },
    changeIndex(index) {
      this.chapterIndex = index;
      this.delayLoad();
    },
    swiperChangeChapter(e) {
      this.changeIndex(e.detail.current);
    },
    changeCatelogStatus(bol) {
      console.log(bol);
      if (bol) {
        this.$refs.drawer.open();
        this.changeSetStatus();
      } else {
        this.$refs.drawer.close();
      }
    },
    toPointChapter(id) {
      let index = this.LoadedChapterd.findIndex((item) => item.id === id);
      if (this.chapterIndex == index)
        return;
      this.changeIndex(index);
    },
    changeFontSize(e) {
      this.myFontSize = e.detail.value;
      common_vendor.index.setStorageSync("myFontSize", this.myFontSize);
    },
    changeLineHeight(e) {
      this.myLineHeight = e.detail.value;
      common_vendor.index.setStorageSync("myLineHeight", this.myLineHeight);
    },
    changeTypeFaceStatus(bol) {
      this.typeFaceStatus = bol;
      if (bol)
        this.changeSetStatus();
    },
    getBrightNess() {
      common_vendor.index.getScreenBrightness({
        success: (e) => this.brightNess = Math.floor(e.value) / 8 * 100
      });
    },
    setBrightNess(e) {
      let value = e.detail.value;
      this.brightNess = value;
      common_vendor.index.setScreenBrightness({
        value: value / 100 * 8
      });
    },
    changeMoreStatus(bol) {
      this.moreStatus = bol;
      if (bol)
        this.changeSetStatus();
    },
    themeIndexChange(id) {
      this.themeIndex = this.themes.findIndex((item) => item.id === id);
      common_vendor.index.setStorageSync("THEMEINDEX", this.themeIndex);
    },
    isnight() {
      this.themeIndex !== 4 ? this.themeIndexChange("nightTheme") : this.themeIndexChange("morningTheme");
    },
    quit() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
if (!Array) {
  const _easycom_myIcon2 = common_vendor.resolveComponent("myIcon");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_myIcon2 + _easycom_uni_drawer2 + _easycom_uni_load_more2)();
}
const _easycom_myIcon = () => "../../components/myIcon/myIcon.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_myIcon + _easycom_uni_drawer + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.statusBarHeight + "px",
    b: $data.setStatus
  }, $data.setStatus ? {
    c: $data.statusBarHeight + "px",
    d: common_vendor.o($options.quit),
    e: common_vendor.p({
      type: "icon-jiantou-copy",
      size: "40"
    }),
    f: common_vendor.t($data.novalName),
    g: common_vendor.t($options.curChapterTitle),
    h: common_vendor.n($options.curTheme)
  } : {}, {
    i: $data.setStatus
  }, $data.setStatus ? {
    j: common_vendor.p({
      type: "icon-xueyuan-mulu",
      size: "55"
    }),
    k: common_vendor.o(($event) => $options.changeCatelogStatus(true)),
    l: common_vendor.p({
      type: "icon-yanjing",
      size: "55"
    }),
    m: common_vendor.o((...args) => $options.isnight && $options.isnight(...args)),
    n: common_vendor.p({
      type: "icon-ziti1",
      size: "55"
    }),
    o: common_vendor.o(($event) => $options.changeTypeFaceStatus(true)),
    p: common_vendor.p({
      type: "icon-diqiuhuanqiu",
      size: "55"
    }),
    q: common_vendor.o(($event) => $options.changeMoreStatus(true)),
    r: common_vendor.n($options.curTheme)
  } : {}, {
    s: $data.statusBarHeight + "px",
    t: common_vendor.f($data.chapterCatalog, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: $data.chapterIndex == index ? 1 : "",
        c: common_vendor.o(($event) => $options.toPointChapter(item.id), item.id),
        d: item.id
      };
    }),
    v: $data.calHeight - 80 + "rpx",
    w: common_vendor.sr("drawer", "6809400d-5"),
    x: common_vendor.n($options.curTheme),
    y: $data.typeFaceStatus
  }, $data.typeFaceStatus ? {
    z: $data.myFontSize,
    A: common_vendor.o((...args) => $options.changeFontSize && $options.changeFontSize(...args)),
    B: common_vendor.o((...args) => $options.changeFontSize && $options.changeFontSize(...args)),
    C: $data.myLineHeight,
    D: common_vendor.o((...args) => $options.changeLineHeight && $options.changeLineHeight(...args)),
    E: common_vendor.o((...args) => $options.changeLineHeight && $options.changeLineHeight(...args)),
    F: common_vendor.n($options.curTheme)
  } : {}, {
    G: $data.moreStatus
  }, $data.moreStatus ? {
    H: $data.brightNess,
    I: common_vendor.o((...args) => $options.setBrightNess && $options.setBrightNess(...args)),
    J: common_vendor.o((...args) => $options.setBrightNess && $options.setBrightNess(...args)),
    K: common_vendor.f($data.themes, (item, k0, i0) => {
      return {
        a: common_vendor.n(item.id),
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => $options.themeIndexChange(item.id), item.id),
        d: item.id
      };
    }),
    L: common_vendor.n($options.curTheme)
  } : {}, {
    M: common_vendor.f($data.LoadedChapterd, (item, k0, i0) => {
      return common_vendor.e({
        a: !item.text
      }, !item.text ? {
        b: "6809400d-6-" + i0,
        c: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        d: $options.htmlParser(item.text),
        e: item.id
      });
    }),
    N: $data.calHeight + "rpx",
    O: common_vendor.n($options.curTheme),
    P: $data.calHeight + "rpx",
    Q: $data.myFontSize + "px",
    R: $data.myLineHeight + "px",
    S: common_vendor.o((...args) => $options.changeSetStatus && $options.changeSetStatus(...args)),
    T: $data.chapterIndex,
    U: common_vendor.o((...args) => $options.swiperChangeChapter && $options.swiperChangeChapter(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/pages/reading/reading.vue"]]);
wx.createPage(MiniProgramPage);
