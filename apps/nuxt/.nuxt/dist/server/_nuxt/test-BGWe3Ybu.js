import { _ as __unplugin_components_0 } from "./search24-regular-Cw07GsNM.js";
import { computed, toValue, getCurrentInstance, onServerPrefetch, ref, shallowRef, nextTick, unref, toRef, reactive, defineComponent, withAsyncContext, withCtx, isRef, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useNav, a as useRuntimeStore, B as BaseIcon, g as getDefaultDict } from "./BaseIcon-Cnj57dgy.js";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { E as Empty } from "./Empty-DqqzidIv.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { D as DictList } from "./DictList-CwtT5r7B.js";
import { B as BackIcon } from "./BackIcon-D_XswP1e.js";
import { useRouter } from "vue-router";
import { B as BaseInput } from "./BaseInput-mlIHP8lZ.js";
import { hash } from "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import { isPlainObject } from "@vue/shared";
import { b as useNuxtApp, c as asyncDataDefaults, d as createError, f as fetchDefaults, e as useRequestFetch } from "../server.mjs";
import { debounce } from "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/perfect-debounce/dist/index.mjs";
import "pinia";
import "idb-keyval";
import "./env-CUoXYOyW.js";
import "@floating-ui/dom";
import "axios";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "./NuxtImg-BgeLVH9C.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
import "./Book-DpTMFDdY.js";
import "./Progress-C93deg99.js";
import "./Checkbox-ChlucEKY.js";
import "./chevron-left28-filled-DoP3x3Jo.js";
import "./eye16-regular-Cm9O3Lp0.js";
import "./event-qcx2F2JA.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key.value];
      if (entry?._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = !import.meta.prerender || !nuxtApp.ssrContext?.["~sharedPrerenderCache"] ? _handler : (nuxtApp2, options2) => {
    const value = nuxtApp2.ssrContext["~sharedPrerenderCache"].get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp2.runWithContext(() => _handler(nuxtApp2, options2)));
    nuxtApp2.ssrContext["~sharedPrerenderCache"].set(key, promise);
    return promise;
  };
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "test",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { nav } = useNav();
    const runtimeStore = useRuntimeStore();
    const router = useRouter();
    function selectDict(e) {
      console.log(e.dict);
      getDictDetail(e.dict);
    }
    async function getDictDetail(val) {
      runtimeStore.editDict = getDefaultDict(val);
      nav("/book", { from: "list" });
    }
    let showSearchInput = ref(false);
    let searchKey = ref("");
    const { data: bookList } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/articles",
      "$cZ_mSl7HyJ"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const searchList = computed(() => {
      if (searchKey.value) {
        let s = searchKey.value.toLowerCase();
        return bookList.value.filter((item) => {
          return item.id.toLowerCase().includes(s) || item.name.toLowerCase().includes(s) || item.category.toLowerCase().includes(s) || item.tags.join("").replace("所有", "").toLowerCase().includes(s) || item?.url?.toLowerCase?.().includes?.(s);
        });
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentSearch24Regular = __unplugin_components_0;
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card min-h-50"${_scopeId}><div class="flex items-center relative gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(BackIcon, {
              class: "z-2",
              onClick: unref(router).back
            }, null, _parent2, _scopeId));
            if (unref(showSearchInput)) {
              _push2(`<div class="flex flex-1 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(BaseInput, {
                "prefix-icon": "",
                placeholder: "请输入书籍名称/缩写/类别",
                modelValue: unref(searchKey),
                "onUpdate:modelValue": ($event) => isRef(searchKey) ? searchKey.value = $event : searchKey = $event,
                class: "flex-1",
                autofocus: "",
                clearable: ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(BaseButton, {
                onClick: ($event) => (isRef(showSearchInput) ? showSearchInput.value = false : showSearchInput = false, isRef(searchKey) ? searchKey.value = "" : searchKey = "")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`取消`);
                  } else {
                    return [
                      createTextVNode("取消")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="py-1 flex flex-1 justify-end"${_scopeId}><span class="page-title absolute w-full center"${_scopeId}>书籍列表</span>`);
              _push2(ssrRenderComponent(BaseIcon, {
                onClick: ($event) => isRef(showSearchInput) ? showSearchInput.value = true : showSearchInput = true,
                class: "z-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconFluentSearch24Regular, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_IconFluentSearch24Regular)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
            if (unref(searchKey)) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              if (searchList.value.length) {
                _push2(ssrRenderComponent(DictList, {
                  onSelectDict: selectDict,
                  list: searchList.value,
                  quantifier: "篇",
                  "select-id": "-1"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(Empty, { text: "没有相关书籍" }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="w-full mt-2"${_scopeId}>`);
              if (unref(bookList)?.length) {
                _push2(ssrRenderComponent(DictList, {
                  onSelectDict: selectDict,
                  list: unref(bookList),
                  quantifier: "篇",
                  "select-id": "-1"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card min-h-50" }, [
                createVNode("div", { class: "flex items-center relative gap-2" }, [
                  createVNode(BackIcon, {
                    class: "z-2",
                    onClick: unref(router).back
                  }, null, 8, ["onClick"]),
                  unref(showSearchInput) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-1 gap-4"
                  }, [
                    createVNode(BaseInput, {
                      "prefix-icon": "",
                      placeholder: "请输入书籍名称/缩写/类别",
                      modelValue: unref(searchKey),
                      "onUpdate:modelValue": ($event) => isRef(searchKey) ? searchKey.value = $event : searchKey = $event,
                      class: "flex-1",
                      autofocus: "",
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(BaseButton, {
                      onClick: ($event) => (isRef(showSearchInput) ? showSearchInput.value = false : showSearchInput = false, isRef(searchKey) ? searchKey.value = "" : searchKey = "")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("取消")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "py-1 flex flex-1 justify-end"
                  }, [
                    createVNode("span", { class: "page-title absolute w-full center" }, "书籍列表"),
                    createVNode(BaseIcon, {
                      onClick: ($event) => isRef(showSearchInput) ? showSearchInput.value = true : showSearchInput = true,
                      class: "z-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFluentSearch24Regular)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ]),
                unref(searchKey) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4"
                }, [
                  searchList.value.length ? (openBlock(), createBlock(DictList, {
                    key: 0,
                    onSelectDict: selectDict,
                    list: searchList.value,
                    quantifier: "篇",
                    "select-id": "-1"
                  }, null, 8, ["list"])) : (openBlock(), createBlock(Empty, {
                    key: 1,
                    text: "没有相关书籍"
                  }))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full mt-2"
                }, [
                  unref(bookList)?.length ? (openBlock(), createBlock(DictList, {
                    key: 0,
                    onSelectDict: selectDict,
                    list: unref(bookList),
                    quantifier: "篇",
                    "select-id": "-1"
                  }, null, 8, ["list"])) : createCommentVNode("", true)
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=test-BGWe3Ybu.js.map
