"use strict";
const pages_sort_sortResources = require("./sortResources.js");
const static_unit = require("../../static/unit.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: this.$statusBarHeight,
      calHeight: 0,
      rightIndex: "right0",
      leftIndex: 0
    };
  },
  computed: {
    leftListRes() {
      return pages_sort_sortResources.sortResources.map((item) => item.text);
    },
    rightListRes() {
      return pages_sort_sortResources.sortResources;
    }
  },
  mounted() {
    static_unit.unit.calSurplusHeight({
      pageID: this,
      pos: "cal",
      success: (val) => this.calHeight = val
    });
  },
  methods: {
    leftToright(i) {
      this.rightIndex = "right" + i;
    },
    rightToLeft(e) {
      let top = e.detail.scrollTop;
      let standardVal = static_unit.unit.Topx(320);
      let curIndex = Math.round(top / standardVal);
      this.leftIndex = curIndex;
    }
  }
};
if (!Array) {
  const _easycom_search2 = common_vendor.resolveComponent("search");
  const _easycom_myIcon2 = common_vendor.resolveComponent("myIcon");
  (_easycom_search2 + _easycom_myIcon2)();
}
const _easycom_search = () => "../../components/search/search.js";
const _easycom_myIcon = () => "../../components/myIcon/myIcon.js";
if (!Math) {
  (_easycom_search + _easycom_myIcon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusBarHeight + "px",
    b: common_vendor.f($options.leftListRes, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.leftIndex == index ? 1 : "",
        c: common_vendor.o(($event) => $options.leftToright(index), index),
        d: index
      };
    }),
    c: $data.calHeight + "rpx",
    d: common_vendor.f($options.rightListRes, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: "59321373-1-" + i0,
        c: common_vendor.f(item.content, (mitem, mindex, i1) => {
          return {
            a: common_vendor.t(mitem),
            b: mindex
          };
        }),
        d: `right${index}`,
        e: index
      };
    }),
    e: common_vendor.p({
      type: "icon-youjiantou",
      size: "40"
    }),
    f: $data.calHeight - 320 + "rpx",
    g: $data.rightIndex,
    h: common_vendor.o((...args) => $options.rightToLeft && $options.rightToLeft(...args)),
    i: $data.calHeight + "rpx"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/pages/sort/sort.vue"]]);
wx.createPage(MiniProgramPage);
