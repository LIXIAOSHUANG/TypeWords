import { _ as __unplugin_components_0 } from "./search24-regular-Cw07GsNM.js";
import { defineComponent, ref, computed, resolveDirective, withCtx, mergeProps, unref, isRef, createTextVNode, toDisplayString, createVNode, withDirectives, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate } from "vue/server-renderer";
import { u as useNav, a as useRuntimeStore, w as resourceWrap, B as BaseIcon, g as getDefaultDict } from "./BaseIcon-Cnj57dgy.js";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { E as Empty } from "./Empty-DqqzidIv.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { D as DictList } from "./DictList-CwtT5r7B.js";
import { B as BackIcon } from "./BackIcon-D_XswP1e.js";
import { useRouter } from "vue-router";
import { useFetch } from "@vueuse/core";
import { i as DICT_LIST } from "./env-CUoXYOyW.js";
import { B as BaseInput } from "./BaseInput-mlIHP8lZ.js";
import "pinia";
import "idb-keyval";
import "axios";
import "../server.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "./NuxtImg-BgeLVH9C.js";
import "./Book-DpTMFDdY.js";
import "./Progress-C93deg99.js";
import "./Checkbox-ChlucEKY.js";
import "./chevron-left28-filled-DoP3x3Jo.js";
import "@floating-ui/dom";
import "./eye16-regular-Cm9O3Lp0.js";
import "./event-qcx2F2JA.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "book-list",
  __ssrInlineRender: true,
  setup(__props) {
    const { nav } = useNav();
    const runtimeStore = useRuntimeStore();
    const router = useRouter();
    function selectDict(e) {
      console.log(e.dict);
      getDictDetail(e.dict);
    }
    async function getDictDetail(val) {
      runtimeStore.editDict = getDefaultDict(val);
      nav("/book/" + val.id, { from: "list" });
    }
    let showSearchInput = ref(false);
    let searchKey = ref("");
    const { data: bookList, isFetching } = useFetch(resourceWrap(DICT_LIST.ARTICLE.ALL)).json();
    const list = computed(() => {
      return bookList.value?.filter((item) => !item.hidden);
    });
    const searchList = computed(() => {
      if (searchKey.value) {
        let s = searchKey.value.toLowerCase();
        return list.value.filter((item) => {
          return item.id.toLowerCase().includes(s) || item.name.toLowerCase().includes(s) || item.category.toLowerCase().includes(s) || item.tags.join("").replace("所有", "").toLowerCase().includes(s) || item?.url?.toLowerCase?.().includes?.(s);
        });
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentSearch24Regular = __unplugin_components_0;
      const _directive_loading = resolveDirective("loading");
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "card min-h-50" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isFetching))))}${_scopeId}><div class="flex items-center relative gap-2"${_scopeId}>`);
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
                    _push3(`${ssrInterpolate(_ctx.$t("cancel"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="py-1 flex flex-1 justify-end"${_scopeId}><span class="page-title absolute w-full center"${_scopeId}>${ssrInterpolate(_ctx.$t("book_list"))}</span>`);
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
              if (unref(list)?.length) {
                _push2(ssrRenderComponent(DictList, {
                  onSelectDict: selectDict,
                  list: unref(list),
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
              withDirectives((openBlock(), createBlock("div", { class: "card min-h-50" }, [
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
                        createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "py-1 flex flex-1 justify-end"
                  }, [
                    createVNode("span", { class: "page-title absolute w-full center" }, toDisplayString(_ctx.$t("book_list")), 1),
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
                  unref(list)?.length ? (openBlock(), createBlock(DictList, {
                    key: 0,
                    onSelectDict: selectDict,
                    list: unref(list),
                    quantifier: "篇",
                    "select-id": "-1"
                  }, null, 8, ["list"])) : createCommentVNode("", true)
                ]))
              ])), [
                [_directive_loading, unref(isFetching)]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(articles)/book-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=book-list-C-irktBu.js.map
