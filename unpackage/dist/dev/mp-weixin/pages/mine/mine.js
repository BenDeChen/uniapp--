"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: this.$statusBarHeight
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_myIcon2 = common_vendor.resolveComponent("myIcon");
  _easycom_myIcon2();
}
const _easycom_myIcon = () => "../../components/myIcon/myIcon.js";
if (!Math) {
  _easycom_myIcon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusBarHeight + "px",
    b: common_vendor.p({
      type: "icon-erji",
      size: "30"
    }),
    c: common_vendor.f(["\u7B7E\u5230", "\u8BBE\u7F6E", "\u610F\u89C1\u53CD\u9988", "\u5207\u6362\u8D26\u53F7"], (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: "3bc26c93-1-" + i0,
        c: item
      };
    }),
    d: common_vendor.p({
      type: "icon-iconfonti"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
