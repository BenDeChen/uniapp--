"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: this.$statusBarHeight + 10,
      swiperImages: [{
        src: "/static/swiperImages/swipertab1.png"
      }, {
        src: "/static/swiperImages/swipertab2.png"
      }, {
        src: "/static/swiperImages/swipertab3.png"
      }, {
        src: "/static/swiperImages/swipertab4.png"
      }, {
        src: "/static/swiperImages/swipertab5.png"
      }],
      functionSortArr: [{
        type: "icon-icon-test",
        iconColor: "text-warning",
        name: "\u770B\u699C\u5355"
      }, {
        type: "icon-startRead",
        iconColor: "text-hover-primary",
        name: "\u542C\u5C0F\u8BF4"
      }, {
        type: "icon-icon09",
        iconColor: "text-light-black",
        name: "\u542C\u97F3\u4E50"
      }, {
        type: "icon-zhishi",
        iconColor: "text-success",
        name: "\u542C\u77E5\u8BC6"
      }],
      Rebooks: [{
        id: 1,
        name: "\u897F\u6E38\u8BB0",
        src: "/static/Rebook/Rebook1.jpg"
      }, {
        id: 2,
        name: "\u4E09\u56FD\u6F14\u4E49",
        src: "/static/Rebook/Rebook2.jpg"
      }, {
        id: 3,
        name: "\u6C34\u6D52\u4F20",
        src: "/static/Rebook/Rebook3.jpg"
      }],
      bookResources: [
        {
          headerTitle: "\u4EBA\u6587",
          books: [
            {
              id: 1e3,
              name: "\u300A\u671D\u82B1\u5915\u62FE\u300B",
              synopsis: "\u300A\u671D\u82B1\u5915\u62FE\u300B\u539F\u540D\u300A\u65E7\u4E8B\u91CD\u63D0\u300B\uFF0C\u662F\u73B0\u4EE3\u6587\u5B66\u5BB6\u9C81\u8FC5\u7684\u6563\u6587\u96C6\uFF0C\u6536\u5F55\u9C81\u8FC5\u4E8E1926\u5E74\u521B\u4F5C\u768410\u7BC7\u56DE\u5FC6\u6027\u6563\u6587...",
              imgurl: "/static/indexListImg/indexListImg4.png"
            },
            {
              id: 1001,
              name: "\u300A\u4EBA\u95F4\u8349\u6728\u300B",
              synopsis: "\u8FD9\u672C\u4E66\u5176\u5B9E\u662F\u6C6A\u66FE\u797A\u5148\u751F\u7684\u4F18\u79C0\u6563\u6587\u96C6\u3002\u6C6A\u66FE\u797A\u7684\u6587\u5B57\u5927\u90FD\u5341\u5206\u6709\u5473\u9053\uFF0C\u4ED6\u662F\u4E00\u4E2A\u5341\u5206\u61C2\u5F97\u751F\u6D3B\u7684\u4EBA\uFF0C\u5728\u5F53\u4EE3\u4F5C\u5BB6\u4E2D...",
              imgurl: "/static/indexListImg/indexListImg5.png"
            },
            {
              id: 1002,
              name: "\u300A\u884C\u8005\u65E0\u7586\u300B",
              synopsis: "15\u5E74\u524D\u4F59\u79CB\u96E8\u5F00\u59CB\u4EE5\u957F\u9014\u65C5\u884C\u65B9\u5F0F\u5B9E\u5730\u8003\u5BDF\u6587\u5316\u3002\u4ED6\u4ECE\u56FD\u5185\u8D70\u5230\u56FD\u5916\uFF0C\u4ECE\u4E2D\u534E\u6587\u660E\u8D70\u5230\u4E86\u5176\u4ED6\u6587\u660E\u3002\u8FD9\u671F\u95F4...",
              imgurl: "/static/indexListImg/indexListImg6.png"
            }
          ]
        },
        {
          headerTitle: "\u5386\u53F2",
          books: [
            {
              id: 1003,
              name: "\u300A\u4EBA\u7C7B\u7B80\u53F2\u300B",
              synopsis: "\u4F5C\u8005\u5C24\u74E6\u5C14\xB7\u8D6B\u62C9\u5229\u4E3A1976\u5E74\u751F\u4EBA\uFF0C\u6765\u81EA\u4EE5\u8272\u5217\u3002\u725B\u6D25\u5927\u5B66\u5386\u53F2\u5B66\u535A\u58EB\uFF0C\u73B0\u4E3A\u8036\u8DEF\u6492\u51B7\u5E0C\u4F2F\u6765\u5927\u5B66\u7684\u5386\u53F2\u7CFB\u6559\u6388...",
              imgurl: "/static/indexListImg/indexListImg1.png"
            },
            {
              id: 1004,
              name: "\u300A\u6781\u7B80\u6B27\u6D32\u53F2\u300B",
              synopsis: "\u672C\u4E66\u4F5C\u8005\u7EA6\u7FF0\xB7\u8D6B\u65AF\u7279\uFF0C\u4E3A\u6FB3\u5927\u5229\u4E9A\u4E0E\u82F1\u8054\u90A6\u6743\u5A01\u7684\u793E\u4F1A\u66A8\u653F\u6CBB\u5386\u53F2\u5B66\u5BB6\u3001\u6B27\u6D32\u53F2\u4E13\u5BB6\u3002\u73B0\u4EFB\u58A8\u5C14\u672C\u7684\u62C9\u7B79\u4F2F\u5927\u5B66...",
              imgurl: "/static/indexListImg/indexListImg2.png"
            },
            {
              id: 1005,
              name: "\u300A\u5168\u7403\u901A\u53F2\u300B",
              synopsis: "\u4F5C\u8005\u65AF\u5854\u592B\u91CC\u963F\u8BFA\u65AF\u662F\u7F8E\u56FD\u52A0\u5DDE\u5927\u5B66\u7684\u5386\u53F2\u5B66\u6559\u6388\uFF0C\u4EAB\u8A89\u4E16\u754C\u7684\u5386\u53F2\u5B66\u5BB6\uFF0C\u66FE\u83B7\u5F97\u8FC7\u53E4\u6839\u6D77\u59C6\u5956\u3001\u798F\u7279\u6770\u51FA\u6559\u5E08\u5956...",
              imgurl: "/static/indexListImg/indexListImg3.png"
            }
          ]
        },
        {
          headerTitle: "\u97F3\u4E50",
          books: [
            {
              id: 1006,
              name: "\u300A\u8046\u542C\u97F3\u4E50\u300B",
              synopsis: "\u8BFB\u5B8C\u672C\u4E66\uFF0C\u4F60\u4F1A\u53D1\u73B0\u4F60\u7684\u8111\u888B\u91CC\u591A\u4E86\u4E00\u680B\u5EFA\u7B51\uFF0C\u5B83\u7684\u540D\u5B57\u53EB\u505A\u53E4\u5178\u97F3\u4E50\u53F2\uFF0C\u8FD9\u4E2A\u5EFA\u7B51\u7CBE\u5DE7\uFF0C\u800C\u53C8\u51C6\u786E\u7684...",
              imgurl: "/static/indexListImg/indexListImg7.png"
            },
            {
              id: 1007,
              name: "\u300A\u5FC3\u91CC\u7684\u70E6\u607C\u300B",
              synopsis: "\u4E16\u754C\u4E0A\u6700\u91CD\u8981\u7684\u8FEA\u4F26\u7814\u7A76\u4E13\u5BB6\u4E3A\u9C8D\u52C3\u8FEA\u4F26\u7684\u798F\u97F3\u65F6\u671F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6DF1\u5165\u7684\u8FA9\u89E3,\u4ECE1979\u5E74\u52301981\u5E74\uFF0C\u8FD9\u6BB5\u8FEA\u4F26...",
              imgurl: "/static/indexListImg/indexListImg8.png"
            },
            {
              id: 1008,
              name: "\u300A\u68A6\u5230\u62AB\u5934\u58EB\u300B",
              synopsis: "\u6EDA\u77F3\u6742\u5FD7\u8D44\u6DF1\u8BC4\u8BBA\u5BB6\u8C22\u83F2\u5C14\u5FB7\u5BF9\u8FC7\u53BB\u7684\u51E0\u5341\u5E74\u91CC\u62AB\u5934\u58EB\u4E50\u961F\u9020\u6210\u7684\u5F71\u54CD\u8FDB\u884C\u4E86\u6DF1\u5165\u5730\u63A2\u7D22,\u8FD9\u662F\u6709\u53F2\u4EE5\u6765\u5173\u4E8E...",
              imgurl: "/static/indexListImg/indexListImg9.png"
            }
          ]
        },
        {
          headerTitle: "\u827A\u672F",
          books: [
            {
              id: 1009,
              name: "\u300A\u827A\u672F\u7684\u6545\u4E8B\u300B",
              synopsis: "\u662F\u6709\u5173\u827A\u672F\u7684\u4E66\u7C4D\u4E2D\u6700\u8457\u540D\u3001\u6700\u6D41\u884C\u7684\u8457\u4F5C\u4E4B\u4E00\u3002\u5B83\u6982\u62EC\u5730\u53D9\u8FF0\u4E86\u4ECE\u6700\u65E9\u7684\u6D1E\u7A9F\u7ED8\u753B\u5230\u5F53\u4ECA\u7684\u5B9E\u9A8C\u827A\u672F\u7684\u53D1\u5C55\u5386\u7A0B...",
              imgurl: "/static/indexListImg/indexListImg10.png"
            },
            {
              id: 1010,
              name: "\u300A\u8A79\u68EE\u827A\u672F\u53F2\u300B",
              synopsis: "\u300A\u8A79\u68EE\u827A\u672F\u53F2\u300B\u662F2013\u5E74\u4E16\u754C\u56FE\u4E66\u51FA\u7248\u516C\u53F8\u51FA\u7248\u7684\u56FE\u4E66,\u300A\u8A79\u68EE\u827A\u672F\u53F2\u300B\u662F\u4E00\u90E8\u5728\u5B66\u754C\u548C\u793E\u4F1A\u5927\u4F17\u4E2D\u5F88\u6709\u5F71\u54CD...",
              imgurl: "/static/indexListImg/indexListImg11.png"
            },
            {
              id: 1011,
              name: "\u300A\u52A0\u5FB7\u7EB3\u827A\u672F\u901A\u53F2\u300B",
              synopsis: "\u300A\u52A0\u5FB7\u7EB3\u827A\u672F\u901A\u53F2\u300B\u9075\u5FAA\u52A0\u5FB7\u7EB3\u7684\u57FA\u672C\u6846\u67B6\uFF0C\u4EE5\u201C\u5168\u666F\u5316\u201D\u7684\u89C6\u89D2\u6765\u9610\u91CA\u827A\u672F\u53D1\u5C55\u7684\u4E3B\u65E8...",
              imgurl: "/static/indexListImg/indexListImg12.png"
            }
          ]
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_search2 = common_vendor.resolveComponent("search");
  const _easycom_banner2 = common_vendor.resolveComponent("banner");
  const _easycom_functionSort2 = common_vendor.resolveComponent("functionSort");
  const _easycom_listHeader2 = common_vendor.resolveComponent("listHeader");
  const _easycom_recommond2 = common_vendor.resolveComponent("recommond");
  const _easycom_booklist2 = common_vendor.resolveComponent("booklist");
  const _easycom_myaudio2 = common_vendor.resolveComponent("myaudio");
  (_easycom_search2 + _easycom_banner2 + _easycom_functionSort2 + _easycom_listHeader2 + _easycom_recommond2 + _easycom_booklist2 + _easycom_myaudio2)();
}
const _easycom_search = () => "../../components/search/search.js";
const _easycom_banner = () => "../../components/banner/banner.js";
const _easycom_functionSort = () => "../../components/functionSort/functionSort.js";
const _easycom_listHeader = () => "../../components/listHeader/listHeader.js";
const _easycom_recommond = () => "../../components/recommond/recommond.js";
const _easycom_booklist = () => "../../components/booklist/booklist.js";
const _easycom_myaudio = () => "../../components/myaudio/myaudio.js";
if (!Math) {
  (_easycom_search + _easycom_banner + _easycom_functionSort + _easycom_listHeader + _easycom_recommond + _easycom_booklist + _easycom_myaudio)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      imgArr: $data.swiperImages
    }),
    b: common_vendor.p({
      functionSortArr: $data.functionSortArr
    }),
    c: common_vendor.p({
      Rebooks: $data.Rebooks
    }),
    d: common_vendor.f($data.bookResources, (item, index, i0) => {
      return {
        a: common_vendor.t(item.headerTitle),
        b: "7a00b359-5-" + i0,
        c: "7a00b359-6-" + i0,
        d: common_vendor.p({
          bookList: item.books
        }),
        e: index
      };
    }),
    e: $data.statusBarHeight + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/uni-app/items/xiaoshuo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
