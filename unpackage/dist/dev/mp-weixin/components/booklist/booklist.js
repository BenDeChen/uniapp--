"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "booklist",
  props: {
    bookList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.bookList, (mitem, mindex, i0) => {
      return {
        a: mitem.imgurl,
        b: common_vendor.t(mitem.name),
        c: common_vendor.t(mitem.synopsis),
        d: mindex
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/booklist/booklist.vue"]]);
wx.createComponent(Component);
