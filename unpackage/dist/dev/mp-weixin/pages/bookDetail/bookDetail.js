"use strict";
const common_vendor = require("../../common/vendor.js");
const static_test = require("../../static/test.js");
const static_unit = require("../../static/unit.js");
const _sfc_main = {
  data() {
    return {
      calHeight: 0,
      name: static_test.test.name,
      author: static_test.test.author,
      synopsis: static_test.test.synopsis,
      chapterCatalog: static_test.test.chapterCatalog,
      tabIndex: 0
    };
  },
  mounted() {
    static_unit.unit.calSurplusHeight({
      pageId: this,
      pos: "cal",
      success: (val) => this.calHeight = val
    });
  },
  methods: {
    getTabIndex(index) {
      this.tabIndex = index;
    },
    toReading(id) {
      common_vendor.index.navigateTo({
        url: `/pages/reading/reading?chapterID=${id}`
      });
    },
    swiperCurrentChange(e) {
      let i = e.detail.current;
      this.getTabIndex(i);
    }
  }
};
if (!Array) {
  const _easycom_pageTitle2 = common_vendor.resolveComponent("pageTitle");
  const _easycom_tabTop2 = common_vendor.resolveComponent("tabTop");
  (_easycom_pageTitle2 + _easycom_tabTop2)();
}
const _easycom_pageTitle = () => "../../components/pageTitle/pageTitle.js";
const _easycom_tabTop = () => "../../components/tabTop/tabTop.js";
if (!Math) {
  (_easycom_pageTitle + _easycom_tabTop)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      theme: "greyThueme"
    }),
    b: common_vendor.t($data.name),
    c: common_vendor.t($data.author),
    d: common_vendor.o($options.getTabIndex),
    e: common_vendor.p({
      tabArr: ["\u8BE6\u60C5", "\u76EE\u5F55"],
      tabIndex: $data.tabIndex
    }),
    f: common_vendor.t($data.synopsis),
    g: common_vendor.f($data.chapterCatalog, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.o(($event) => $options.toReading(item.id), item.id),
        c: item.id
      };
    }),
    h: $data.calHeight + "rpx",
    i: $data.tabIndex,
    j: common_vendor.o((...args) => $options.swiperCurrentChange && $options.swiperCurrentChange(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/pages/bookDetail/bookDetail.vue"]]);
wx.createPage(MiniProgramPage);
