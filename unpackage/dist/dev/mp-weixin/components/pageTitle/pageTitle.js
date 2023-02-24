"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "pageTitle",
  props: {
    theme: {
      type: String,
      default: "bg-white"
    }
  },
  data() {
    return {
      statusBarHeight: this.$statusBarHeight
    };
  },
  created() {
  },
  methods: {
    quit() {
      common_vendor.index.navigateBack({
        delta: 1
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
    a: common_vendor.o($options.quit),
    b: common_vendor.p({
      type: "icon-jiantou-copy"
    }),
    c: common_vendor.n($props.theme),
    d: $data.statusBarHeight + 10 + "px",
    e: $data.statusBarHeight + 10 + "px",
    f: common_vendor.n($props.theme)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/pageTitle/pageTitle.vue"]]);
wx.createComponent(Component);
