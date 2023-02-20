if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$h = {
    name: "myIcon",
    props: {
      type: {
        type: String,
        default: ""
      },
      iconColor: {
        type: String,
        default: "text-dart"
      },
      color: {
        type: String,
        default: ""
      },
      size: {
        type: Number || String,
        default: 45
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("text", {
        class: vue.normalizeClass(["iconfont", [$props.type, $props.iconColor]]),
        style: vue.normalizeStyle({ fontSize: $props.size + "rpx" })
      }, null, 6)
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "E:/code/uniapp/items/xiaoshuo/components/myIcon/myIcon.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$g = {
    name: "search",
    data() {
      return {};
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myIcon = resolveEasycom(vue.resolveDynamicComponent("myIcon"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex align-center justify-center mx-2 border rounded bg-light",
        style: { "height": "60rpx,opacity: .8" }
      }, [
        vue.createVNode(_component_myIcon, {
          type: "icon-tubiao11",
          size: "25",
          iconColor: "text-light-muted",
          class: "p-1"
        }),
        vue.createElementVNode("input", {
          type: "text",
          placeholder: "\u641C\u7D22\u4F60\u60F3\u542C\u7684\u8282\u76EE",
          class: "flex-1"
        })
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "E:/code/uniapp/items/xiaoshuo/components/search/search.vue"]]);
  const _sfc_main$f = {
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
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "m-2" }, [
      vue.createElementVNode("swiper", {
        "indicator-dots": "",
        autoplay: "",
        circular: "",
        style: { "height": "300rpx" },
        "indicator-active-color": "#fff",
        onChange: _cache[0] || (_cache[0] = (...args) => $options.getCurrent && $options.getCurrent(...args))
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.imgArr, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
            vue.createElementVNode("image", {
              src: item.src,
              mode: "aspectFill",
              class: vue.normalizeClass(["w-100 animated", { "my-animate": $data.currentImgIndex === index }])
            }, null, 10, ["src"])
          ]);
        }), 256))
      ], 32)
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-8b3f5c74"], ["__file", "E:/code/uniapp/items/xiaoshuo/components/banner/banner.vue"]]);
  let pageList = {
    0: "/pages/readList/readList",
    1: "/pages/listenNoval/listenNoval",
    2: "/pages/listenMusic/listenMusic",
    3: "/pages/listenKnowledge/listenKnowledge"
  };
  const _sfc_main$e = {
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
        uni.navigateTo({
          url: pageList[pageIndex]
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myIcon = resolveEasycom(vue.resolveDynamicComponent("myIcon"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex align-center justify-between mx-3 py-2" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.functionSortArr, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: index,
          class: "flex flex-column align-center",
          onClick: ($event) => $options.switchToPage(index)
        }, [
          vue.createVNode(_component_myIcon, {
            type: item.type,
            iconColor: item.iconColor,
            size: "65"
          }, null, 8, ["type", "iconColor"]),
          vue.createElementVNode("text", { class: "mt-1 font text-light-black" }, vue.toDisplayString(item.name), 1)
        ], 8, ["onClick"]);
      }), 128))
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "E:/code/uniapp/items/xiaoshuo/components/functionSort/functionSort.vue"]]);
  const _sfc_main$d = {
    name: "listHeader",
    data() {
      return {};
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myIcon = resolveEasycom(vue.resolveDynamicComponent("myIcon"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex align-center justify-between p-2 my-1" }, [
      vue.createElementVNode("view", { class: "font-lg" }, [
        vue.renderSlot(_ctx.$slots, "title")
      ]),
      vue.createElementVNode("view", { class: "flex align-center" }, [
        vue.createElementVNode("view", { class: "font text-light-black" }, [
          vue.renderSlot(_ctx.$slots, "tips", {}, () => [
            vue.createTextVNode("\u67E5\u770B\u5168\u90E8")
          ])
        ]),
        vue.createVNode(_component_myIcon, {
          type: "icon-iconfonti",
          iconColor: "text-light-black"
        })
      ])
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "E:/code/uniapp/items/xiaoshuo/components/listHeader/listHeader.vue"]]);
  const _sfc_main$c = {
    name: "recommond",
    props: {
      Rebooks: {
        type: Array,
        default: []
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myIcon = resolveEasycom(vue.resolveDynamicComponent("myIcon"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "flex align-center" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.Rebooks, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index,
            class: "flex flex-column align-center flex-1 position-relative"
          }, [
            vue.createElementVNode("image", {
              src: item.src,
              mode: "widthFix",
              class: "w-100"
            }, null, 8, ["src"]),
            vue.createElementVNode("text", { class: "font my-1 text-light-black" }, vue.toDisplayString(item.name), 1),
            vue.createVNode(_component_myIcon, {
              type: "icon-erji",
              iconColor: "text-light-white",
              class: "position-absolute",
              style: { "left": "45rpx", "top": "20rpx" }
            })
          ]);
        }), 128))
      ])
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "E:/code/uniapp/items/xiaoshuo/components/recommond/recommond.vue"]]);
  const _sfc_main$b = {
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.bookList, (mitem, mindex) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: mindex,
          class: "flex align-center p-1 border-bottom",
          "hover-class": "bg-light",
          style: { "height": "320rpx" }
        }, [
          vue.createElementVNode("image", {
            src: mitem.imgurl,
            mode: "aspectFill",
            class: "rounded mx-2",
            style: { "width": "250rpx", "height": "250rpx" }
          }, null, 8, ["src"]),
          vue.createElementVNode("view", {
            class: "flex-1",
            style: { "height": "100%" }
          }, [
            vue.createElementVNode("view", { class: "py-2 font-md font-weight-bold" }, vue.toDisplayString(mitem.name), 1),
            vue.createElementVNode("view", { class: "font" }, vue.toDisplayString(mitem.synopsis), 1)
          ])
        ]);
      }), 128))
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "E:/code/uniapp/items/xiaoshuo/components/booklist/booklist.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        local.getters,
        store3.state,
        store3.getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    if (!isValidMap(states)) {
      console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(states).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedState() {
        var state = this.$store.state;
        var getters = this.$store.getters;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapState", namespace);
          if (!module) {
            return;
          }
          state = module.context.state;
          getters = module.context.getters;
        }
        return typeof val === "function" ? val.call(this, state, getters) : state[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  var mapActions = normalizeNamespace(function(namespace, actions) {
    var res = {};
    if (!isValidMap(actions)) {
      console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(actions).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedAction() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var dispatch = this.$store.dispatch;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapActions", namespace);
          if (!module) {
            return;
          }
          dispatch = module.context.dispatch;
        }
        return typeof val === "function" ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  function normalizeMap(map) {
    if (!isValidMap(map)) {
      return [];
    }
    return Array.isArray(map) ? map.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map).map(function(key) {
      return { key, val: map[key] };
    });
  }
  function isValidMap(map) {
    return Array.isArray(map) || isObject(map);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map) {
      if (typeof namespace !== "string") {
        map = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module = store2._modulesNamespaceMap[namespace];
    if (!module) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module;
  }
  const _sfc_main$a = {
    name: "myaudio",
    data() {
      return {};
    },
    computed: {
      ...mapState({})
    },
    mounted() {
      this.init();
    },
    methods: {
      ...mapActions("audio", ["init"])
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myIcon = resolveEasycom(vue.resolveDynamicComponent("myIcon"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "fixed-bottom mx-2 mb-1 rounded",
      style: { "height": "160rpx", "background-color": "#d1ccc0", "opacity": ".9" }
    }, [
      vue.createElementVNode("view", {
        class: "flex align-center justify-center font",
        style: { "color": "#7a8388", "height": "65rpx" }
      }, [
        vue.createElementVNode("view", { class: "" }, "00:00"),
        vue.createElementVNode("view", {
          class: "",
          style: { "width": "500rpx" }
        }, [
          vue.createElementVNode("slider", {
            onChange: _cache[0] || (_cache[0] = () => {
            }),
            "block-size": "16",
            activeColor: "#e48267",
            backgroundColor: "#eef2f3"
          }, null, 32)
        ]),
        vue.createElementVNode("view", { class: "" }, "00:00")
      ]),
      vue.createElementVNode("view", {
        class: "flex align-center justify-between mx-2",
        style: { "height": "95rpx" }
      }, [
        vue.createElementVNode("view", {
          class: "font",
          style: { "color": "#424651" }
        }, [
          vue.createElementVNode("view", null, "\u6B4C\u624B-The one"),
          vue.createElementVNode("view", null, "\u6B4C\u66F2-\u6697\u9999")
        ]),
        vue.createElementVNode("view", { class: "flex" }, [
          vue.createVNode(_component_myIcon, {
            type: "icon-shangyishou",
            size: "75"
          }),
          vue.createVNode(_component_myIcon, {
            type: "icon-ziyuan",
            size: "75",
            class: "mx-2"
          }),
          vue.createVNode(_component_myIcon, {
            type: "icon-xiayishou",
            size: "75"
          })
        ])
      ])
    ]);
  }
  const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "E:/code/uniapp/items/xiaoshuo/components/myaudio/myaudio.vue"]]);
  const _sfc_main$9 = {
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
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_search = resolveEasycom(vue.resolveDynamicComponent("search"), __easycom_0$1);
    const _component_banner = resolveEasycom(vue.resolveDynamicComponent("banner"), __easycom_1$1);
    const _component_functionSort = resolveEasycom(vue.resolveDynamicComponent("functionSort"), __easycom_2);
    const _component_listHeader = resolveEasycom(vue.resolveDynamicComponent("listHeader"), __easycom_3);
    const _component_recommond = resolveEasycom(vue.resolveDynamicComponent("recommond"), __easycom_4);
    const _component_booklist = resolveEasycom(vue.resolveDynamicComponent("booklist"), __easycom_1);
    const _component_myaudio = resolveEasycom(vue.resolveDynamicComponent("myaudio"), __easycom_6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "content",
      style: vue.normalizeStyle({ "margin-top": $data.statusBarHeight + "px" })
    }, [
      vue.createVNode(_component_search),
      vue.createVNode(_component_banner, { imgArr: $data.swiperImages }, null, 8, ["imgArr"]),
      vue.createVNode(_component_functionSort, { functionSortArr: $data.functionSortArr }, null, 8, ["functionSortArr"]),
      vue.createVNode(_component_listHeader, null, {
        title: vue.withCtx(() => [
          vue.createTextVNode("\u731C\u4F60\u559C\u6B22")
        ]),
        tips: vue.withCtx(() => [
          vue.createTextVNode("\u66F4\u591A\u63A8\u8350")
        ]),
        _: 1
      }),
      vue.createVNode(_component_recommond, { Rebooks: $data.Rebooks }, null, 8, ["Rebooks"]),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.bookResources, (item, index) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: index }, [
          vue.createVNode(_component_listHeader, null, {
            title: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(item.headerTitle), 1)
            ]),
            _: 2
          }, 1024),
          vue.createVNode(_component_booklist, {
            bookList: item.books
          }, null, 8, ["bookList"])
        ], 64);
      }), 128)),
      vue.createVNode(_component_myaudio)
    ], 4);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "E:/code/uniapp/items/xiaoshuo/pages/index/index.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesCollectionCollection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "E:/code/uniapp/items/xiaoshuo/pages/collection/collection.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesSortSort = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "E:/code/uniapp/items/xiaoshuo/pages/sort/sort.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "E:/code/uniapp/items/xiaoshuo/pages/mine/mine.vue"]]);
  const _sfc_main$5 = {
    name: "pageTitle",
    data() {
      return {
        statusBarHeight: this.$statusBarHeight
      };
    },
    methods: {
      quit() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myIcon = resolveEasycom(vue.resolveDynamicComponent("myIcon"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle({ marginTop: $data.statusBarHeight + 10 + "px" })
    }, [
      vue.createElementVNode("view", {
        class: "",
        style: { "height": "60rpx" }
      }),
      vue.createElementVNode("view", {
        class: "flex align-center position-fixed bg-white w-100 py-1",
        style: vue.normalizeStyle({ height: "rpx", top: $data.statusBarHeight + "px", zIndex: 9 })
      }, [
        vue.createVNode(_component_myIcon, {
          type: "icon-jiantou-copy",
          class: "mx-2",
          onClick: $options.quit
        }, null, 8, ["onClick"]),
        vue.createElementVNode("view", { class: "font-lg" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode("\u699C\u5355")
          ])
        ])
      ], 4)
    ], 4);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "E:/code/uniapp/items/xiaoshuo/components/pageTitle/pageTitle.vue"]]);
  let ListResources = {
    isLoadMore: "\u4E0A\u62C9\u52A0\u8F7D\u663E\u793A\u66F4\u591A",
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
      },
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
      },
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
      },
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
  };
  const _sfc_main$4 = {
    data() {
      return {
        bookList: [],
        loadStatus: "loading"
      };
    },
    onLoad() {
      this.initLoadmore();
    },
    onReachBottom() {
      this.loadMore();
    },
    methods: {
      initLoadmore() {
        let books = ListResources.books;
        setTimeout(() => {
          if (books.length) {
            this.bookList = [...this.bookList, ...books];
            if (this.bookList.length > 40) {
              ListResources.isLoadMore = "\u6CA1\u6709\u66F4\u591A\u4E86";
            }
            this.loadStatus = "more";
          }
        }, 2e3);
      },
      loadMore() {
        let obj = ListResources;
        this.loadStatus = "loading";
        switch (obj.isLoadMore) {
          case "\u6B63\u5728\u52A0\u8F7D":
            return;
          case "\u6CA1\u6709\u66F4\u591A\u4E86":
            this.loadStatus = "noMore";
            break;
          case "\u4E0A\u62C9\u52A0\u8F7D\u663E\u793A\u66F4\u591A":
            this.initLoadmore();
            break;
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_pageTitle = resolveEasycom(vue.resolveDynamicComponent("pageTitle"), __easycom_0);
    const _component_booklist = resolveEasycom(vue.resolveDynamicComponent("booklist"), __easycom_1);
    const _component_uni_load_more = vue.resolveComponent("uni-load-more");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_pageTitle, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("\u699C\u5355")
        ]),
        _: 1
      }),
      vue.createVNode(_component_booklist, { bookList: $data.bookList }, null, 8, ["bookList"]),
      vue.createVNode(_component_uni_load_more, { status: $data.loadStatus }, null, 8, ["status"])
    ]);
  }
  const PagesReadListReadList = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/code/uniapp/items/xiaoshuo/pages/readList/readList.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesListenNovalListenNoval = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/code/uniapp/items/xiaoshuo/pages/listenNoval/listenNoval.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesListenMusicListenMusic = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/code/uniapp/items/xiaoshuo/pages/listenMusic/listenMusic.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesListenKnowledgeListenKnowledge = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/code/uniapp/items/xiaoshuo/pages/listenKnowledge/listenKnowledge.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/collection/collection", PagesCollectionCollection);
  __definePage("pages/sort/sort", PagesSortSort);
  __definePage("pages/mine/mine", PagesMineMine);
  __definePage("pages/readList/readList", PagesReadListReadList);
  __definePage("pages/listenNoval/listenNoval", PagesListenNovalListenNoval);
  __definePage("pages/listenMusic/listenMusic", PagesListenMusicListenMusic);
  __definePage("pages/listenKnowledge/listenKnowledge", PagesListenKnowledgeListenKnowledge);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/code/uniapp/items/xiaoshuo/App.vue"]]);
  let audio;
  const audio$1 = {
    namespace: "audio",
    state: {},
    getters: {},
    mutations: {
      addAudioEvent() {
        audio.onPlay(() => {
        });
        audio.onPause(() => {
        });
        audio.onStop(() => {
        });
        audio.onEnded(() => {
        });
        audio.onError(() => {
        });
      },
      destroyed() {
        audio.offPlay(() => {
        });
        audio.offPause(() => {
        });
        audio.offStop(() => {
        });
        audio.offEnded(() => {
        });
        audio.offError(() => {
        });
      }
    },
    actions: {
      init({ commit }) {
        if (audio)
          return;
        audio = uni.createInnerAudioContext();
        commit("addAudioEvent");
      }
    }
  };
  let store = createStore({
    modules: {
      audio: audio$1
    }
  });
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    app.config.globalProperties.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
