"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "listHeader",
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
      type: "icon-iconfonti",
      iconColor: "text-light-black"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/listHeader/listHeader.vue"]]);
wx.createComponent(Component);
