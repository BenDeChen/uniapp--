"use strict";
const common_vendor = require("../../common/vendor.js");
let pageList = {
  0: "/pages/readList/readList",
  1: "/pages/listenNoval/listenNoval",
  2: "/pages/listenMusic/listenMusic",
  3: "/pages/listenKnowledge/listenKnowledge"
};
const _sfc_main = {
  name: "functionSort",
  props: {
    functionSortArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    switchToPage(pageIndex) {
      common_vendor.index.navigateTo({
        url: pageList[pageIndex]
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
    a: common_vendor.f($props.functionSortArr, (item, index, i0) => {
      return {
        a: "166443b7-0-" + i0,
        b: common_vendor.p({
          type: item.type,
          iconColor: item.iconColor,
          size: "65"
        }),
        c: common_vendor.t(item.name),
        d: common_vendor.o(($event) => $options.switchToPage(index), index),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/functionSort/functionSort.vue"]]);
wx.createComponent(Component);
