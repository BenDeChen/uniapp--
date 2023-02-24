"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "myIcon",
  props: {
    type: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: "text-dart"
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 45
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.type),
    b: common_vendor.n($props.iconColor),
    c: $props.size + "rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/myIcon/myIcon.vue"]]);
wx.createComponent(Component);
