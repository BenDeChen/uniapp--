"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "collections",
  props: {
    bookID: {
      type: Number,
      default: 0
    },
    bookImgUrl: {
      type: String,
      default: ""
    },
    bookName: {
      type: String,
      default: ""
    },
    bookSynopsis: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    cancal() {
      this.showCancalCol(true);
      this.throwId(this.bookID);
    },
    throwId(id) {
      this.$emit("getID", id);
    },
    showCancalCol(bol) {
      this.$emit("showCancelCol", bol);
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
    a: $props.bookImgUrl,
    b: common_vendor.t($props.bookName),
    c: common_vendor.t($props.bookSynopsis),
    d: common_vendor.o($options.cancal),
    e: common_vendor.p({
      type: "icon-diandian",
      size: "40"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/components/collections/collections.vue"]]);
wx.createComponent(Component);
