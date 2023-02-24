"use strict";
const common_vendor = require("../common/vendor.js");
let screenWidth = common_vendor.index.getSystemInfoSync().windowWidth, screenHeight = common_vendor.index.getSystemInfoSync().windowHeight;
const Torpx = (num) => 750 * num / screenWidth, Topx = (num) => num * screenWidth / 750;
const getSystemHeight = (isRpx = true) => isRpx ? Torpx(screenHeight) : screenHeight;
const formatTime = (num) => {
  let divisionNum = Math.floor(num / 60), remainderNum = Math.floor(num % 60), zero = (x) => "0".repeat(2 - String(x).length);
  return `${zero(divisionNum) + divisionNum}:${zero(remainderNum) + remainderNum}`;
};
const getNodesHeightInfo = (optionObj) => {
  let {
    pageID,
    pos,
    success
  } = optionObj;
  let heightArr = [];
  const query = common_vendor.index.createSelectorQuery().in(pageID);
  query.selectAll(`.${pos}`).boundingClientRect((data) => {
    data.forEach((item) => heightArr.push(item.height));
    success(heightArr);
  }).exec();
};
const calSurplusHeight = (optionObj) => {
  let {
    pageID,
    pos,
    isRpx = true,
    isTabBarPage = false,
    success
  } = optionObj;
  getNodesHeightInfo({
    pageID,
    pos,
    success: (NodesHeightArr) => {
      let usedTotalHeight = NodesHeightArr.reduce((pre, item) => pre + item);
      let SurHeight = isTabBarPage ? screenHeight - usedTotalHeight - 50 : screenHeight - usedTotalHeight;
      SurHeight = isRpx ? Torpx(SurHeight) : SurHeight;
      let SurHeightEND = Math.floor(SurHeight);
      success(SurHeightEND);
    }
  });
};
const unit = {
  Torpx,
  Topx,
  getSystemHeight,
  formatTime,
  getNodesHeightInfo,
  calSurplusHeight
};
exports.unit = unit;
