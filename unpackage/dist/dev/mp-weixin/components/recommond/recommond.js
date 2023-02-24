"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "recommond",
  props: {
    Rebooks: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    toBookDetail(i) {
      if (i === 0) {
        common_vendor.index.navigateTo({
          url: "/pages/bookDetail/bookDetail"
        });
      }
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
    a: common_vendor.f($props.Rebooks, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.name),
        c: "73492d05-0-" + i0,
        d: common_vendor.o(($event) => $options.toBookDetail(index), index),
        e: index
      };
    }),
    b: common_vendor.p({
      type: "icon-erji",
      iconColor: "text-light-white"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/recommond/recommond.vue"]]);
wx.createComponent(Component);
