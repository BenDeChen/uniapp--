"use strict";
const common_vendor = require("../../common/vendor.js");
const static_unit = require("../../static/unit.js");
const static_book = require("../../static/book.js");
const _sfc_main = {
  data() {
    return {
      calHeight: 0,
      statusBarHeight: this.$statusBarHeight,
      tabIndex: 0,
      showCancalColStatus: false,
      collectedArr: [],
      cancelColID: 0
    };
  },
  mounted() {
    static_unit.unit.calSurplusHeight({
      pageId: this,
      pos: "cal",
      isTabBarPage: true,
      success: (val) => this.calHeight = val
    });
    this.initData();
  },
  watch: {
    showCancalColStatus(val) {
      if (val) {
        common_vendor.index.hideTabBar({
          animation: true
        });
      } else {
        common_vendor.index.showTabBar({
          animation: true
        });
      }
    }
  },
  methods: {
    getTabIndex(index) {
      this.tabIndex = index;
    },
    swiperChangeIndex(e) {
      this.getTabIndex(e.detail.current);
    },
    getID(id) {
      this.cancelColID = id;
    },
    showCancelCol(bol) {
      this.$refs.pop.open();
    },
    closeCancelCol(bol) {
      this.$refs.pop.close();
    },
    changeStatus(e) {
      this.showCancalColStatus = e.show;
    },
    initData() {
      console.log(static_book.books);
      this.collectedArr.push(...static_book.books);
    },
    IDToIndex(id) {
      return this.collectedArr.findIndex((item) => item.id === id);
    },
    cancelCollect() {
      let index = this.IDToIndex(this.cancelColID);
      this.collectedArr.splice(index, 1);
      this.closeCancelCol();
    }
  }
};
if (!Array) {
  const _easycom_search2 = common_vendor.resolveComponent("search");
  const _easycom_tabTop2 = common_vendor.resolveComponent("tabTop");
  const _easycom_collections2 = common_vendor.resolveComponent("collections");
  const _easycom_myIcon2 = common_vendor.resolveComponent("myIcon");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_search2 + _easycom_tabTop2 + _easycom_collections2 + _easycom_myIcon2 + _easycom_uni_popup2)();
}
const _easycom_search = () => "../../components/search/search.js";
const _easycom_tabTop = () => "../../components/tabTop/tabTop.js";
const _easycom_collections = () => "../../components/collections/collections.js";
const _easycom_myIcon = () => "../../components/myIcon/myIcon.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_search + _easycom_tabTop + _easycom_collections + _easycom_myIcon + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusBarHeight + "px",
    b: common_vendor.o($options.getTabIndex),
    c: common_vendor.p({
      tabArr: ["\u6211\u7684\u6536\u85CF", "\u6536\u542C\u5386\u53F2"],
      tabIndex: $data.tabIndex
    }),
    d: common_vendor.f($data.collectedArr, (item, k0, i0) => {
      return {
        a: common_vendor.o($options.getID, item.id),
        b: common_vendor.o($options.showCancelCol, item.id),
        c: "95891e9a-2-" + i0,
        d: common_vendor.p({
          bookID: item.id,
          bookImgUrl: item.imgurl,
          bookName: item.name,
          bookSynopsis: item.synopsis
        }),
        e: item.id
      };
    }),
    e: $data.calHeight + "rpx",
    f: $data.tabIndex,
    g: common_vendor.o((...args) => $options.swiperChangeIndex && $options.swiperChangeIndex(...args)),
    h: common_vendor.p({
      type: "icon-xingxing",
      color: "text-danger"
    }),
    i: common_vendor.o((...args) => $options.cancelCollect && $options.cancelCollect(...args)),
    j: common_vendor.o((...args) => $options.closeCancelCol && $options.closeCancelCol(...args)),
    k: common_vendor.sr("pop", "95891e9a-3"),
    l: common_vendor.o($options.changeStatus),
    m: common_vendor.p({
      type: "bottom"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/pages/collection/collection.vue"]]);
wx.createPage(MiniProgramPage);
