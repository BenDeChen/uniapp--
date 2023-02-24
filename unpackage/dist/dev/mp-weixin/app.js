"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
require("./store/audio/audio.js");
require("./store/audio/musicResourecs.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/collection/collection.js";
  "./pages/sort/sort.js";
  "./pages/mine/mine.js";
  "./pages/readList/readList.js";
  "./pages/listenNoval/listenNoval.js";
  "./pages/listenMusic/listenMusic.js";
  "./pages/listenKnowledge/listenKnowledge.js";
  "./pages/musicDetail/musicDetail.js";
  "./pages/bookDetail/bookDetail.js";
  "./pages/reading/reading.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/uni-app/items/xiaoshuo/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  let height = common_vendor.index.getSystemInfoSync().statusBarHeight;
  height = common_vendor.index.getMenuButtonBoundingClientRect().bottom;
  app.config.globalProperties.$statusBarHeight = height;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
