"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "search",
  data() {
    return {};
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
    a: common_vendor.p({
      type: "icon-tubiao11",
      size: "25",
      iconColor: "text-light-muted"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/search/search.vue"]]);
wx.createComponent(Component);
