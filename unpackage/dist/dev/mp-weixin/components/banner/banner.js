"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "banner",
  props: {
    imgArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentImgIndex: 0
    };
  },
  methods: {
    getCurrent(e) {
      this.currentImgIndex = e.detail.current;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.imgArr, (item, index, i0) => {
      return {
        a: item.src,
        b: $data.currentImgIndex === index ? 1 : ""
      };
    }),
    b: common_vendor.o((...args) => $options.getCurrent && $options.getCurrent(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/banner/banner.vue"]]);
wx.createComponent(Component);
