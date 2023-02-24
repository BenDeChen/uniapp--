"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "tabTop",
  props: {
    tabIndex: {
      type: Number,
      default: 0
    },
    tabArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    changeTab(index) {
      this.$emit("getTabIndex", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.tabArr, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item),
        b: common_vendor.n(index === $props.tabIndex ? "font-weight-bold pulse" : ""),
        c: common_vendor.o(($event) => $options.changeTab(index), index),
        d: index === $props.tabIndex
      }, index === $props.tabIndex ? {} : {}, {
        e: index
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/tabTop/tabTop.vue"]]);
wx.createComponent(Component);
