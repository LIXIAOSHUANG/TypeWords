import { _ as __unplugin_components_0 } from "./search24-regular-Cw07GsNM.js";
import { defineComponent, computed, ref, watch, unref, useSSRContext, resolveDirective, withCtx, mergeProps, isRef, createTextVNode, toDisplayString, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { u as useNav, a as useRuntimeStore, b as useSettingStore, c as useBaseStore, w as resourceWrap, A as groupBy, h as _nextTick, B as BaseIcon, g as getDefaultDict, l as loadJsLib, m as isMobile } from "./BaseIcon-Cnj57dgy.js";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { E as Empty } from "./Empty-DqqzidIv.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { D as DictList } from "./DictList-CwtT5r7B.js";
import { B as BackIcon } from "./BackIcon-D_XswP1e.js";
import { h as _export_sfc } from "../server.mjs";
import { useRouter } from "vue-router";
import { useFetch } from "@vueuse/core";
import { i as DICT_LIST, T as TourConfig, L as LIB_JS_URL } from "./env-CUoXYOyW.js";
import { B as BaseInput } from "./BaseInput-mlIHP8lZ.js";
import "pinia";
import "idb-keyval";
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
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "@floating-ui/dom";
import "./eye16-regular-Cm9O3Lp0.js";
import "./event-qcx2F2JA.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DictGroup",
  __ssrInlineRender: true,
  props: {
    category: null,
    groupByTag: null,
    selectId: null
  },
  emits: ["selectDict", "detail"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tagList = computed(() => Object.keys(props.groupByTag));
    let currentTag = ref(tagList.value[0]);
    let list = computed(() => {
      return props.groupByTag[currentTag.value];
    });
    watch(() => props.groupByTag, () => {
      currentTag.value = tagList.value[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-da2399ca><div class="flex items-center" data-v-da2399ca><div class="category shrink-0" data-v-da2399ca>${ssrInterpolate(__props.category)}：</div><div class="tags" data-v-da2399ca><!--[-->`);
      ssrRenderList(Object.keys(__props.groupByTag), (i) => {
        _push(`<div class="${ssrRenderClass([i === unref(currentTag) && "active", "tag"])}" data-v-da2399ca>${ssrInterpolate(i)}</div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(DictList, {
        onSelectDict: (e) => emit("selectDict", e),
        list: unref(list),
        "select-id": __props.selectId
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/DictGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DictGroup = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-da2399ca"]]), { __name: "DictGroup" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dict-list",
  __ssrInlineRender: true,
  setup(__props) {
    const { nav } = useNav();
    const runtimeStore = useRuntimeStore();
    const settingStore = useSettingStore();
    const store = useBaseStore();
    const router = useRouter();
    function selectDict(e) {
      console.log(e.dict);
      getDictDetail(e.dict);
    }
    async function getDictDetail(val) {
      runtimeStore.editDict = getDefaultDict(val);
      nav("/dict", { from: "list" });
    }
    function groupByDictTags(dictList2) {
      return dictList2.reduce((result, dict) => {
        dict.tags.forEach((tag) => {
          if (result[tag]) {
            result[tag].push(dict);
          } else {
            result[tag] = [dict];
          }
        });
        return result;
      }, {});
    }
    const { data: dict_list, isFetching } = useFetch(resourceWrap(DICT_LIST.WORD.ALL)).json();
    const groupedByCategoryAndTag = computed(() => {
      let data = [];
      if (!dict_list.value) return data;
      const groupByCategory = groupBy(dict_list.value, "category");
      for (const [key, value] of Object.entries(groupByCategory)) {
        data.push([key, groupByDictTags(value)]);
      }
      [data[2], data[3]] = [data[3], data[2]];
      return data;
    });
    let showSearchInput = ref(false);
    let searchKey = ref("");
    const searchList = computed(() => {
      if (searchKey.value) {
        let s = searchKey.value.toLowerCase();
        return dict_list.value.filter((item) => {
          return item.id.toLowerCase().includes(s) || item.name.toLowerCase().includes(s) || item.category.toLowerCase().includes(s) || item.tags.join("").replace("所有", "").toLowerCase().includes(s) || item?.url?.toLowerCase?.().includes?.(s);
        });
      }
      return [];
    });
    watch(dict_list, (val) => {
      if (!val.length) return;
      let cet4 = val.find((v) => v.id === "cet4");
      if (!cet4) return;
      _nextTick(async () => {
        const Shepherd = await loadJsLib("Shepherd", LIB_JS_URL.SHEPHERD);
        const tour = new Shepherd.Tour(TourConfig);
        tour.on("cancel", () => {
          localStorage.setItem("tour-guide", "1");
        });
        tour.addStep({
          id: "step2",
          text: "选一本自己准备学习的词典",
          attachTo: { element: "#cet4", on: "bottom" },
          buttons: [
            {
              text: `下一步（2/${TourConfig.total}）`,
              action() {
                tour.next();
                selectDict({ dict: cet4 });
              }
            }
          ]
        });
        const r = localStorage.getItem("tour-guide");
        if (settingStore.first && !r && !isMobile()) {
          tour.start();
        }
      }, 500);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentSearch24Regular = __unplugin_components_0;
      const _directive_loading = resolveDirective("loading");
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "card min-h-200 dict-list-page" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isFetching))))} data-v-00ffeb1c${_scopeId}><div class="flex items-center relative gap-2 header-section" data-v-00ffeb1c${_scopeId}>`);
            _push2(ssrRenderComponent(BackIcon, {
              class: "z-2",
              onClick: unref(router).back
            }, null, _parent2, _scopeId));
            if (unref(showSearchInput)) {
              _push2(`<div class="flex flex-1 gap-4" data-v-00ffeb1c${_scopeId}>`);
              _push2(ssrRenderComponent(BaseInput, {
                clearable: "",
                placeholder: "请输入词典名称/缩写/类别",
                modelValue: unref(searchKey),
                "onUpdate:modelValue": ($event) => isRef(searchKey) ? searchKey.value = $event : searchKey = $event,
                class: "flex-1",
                autofocus: ""
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
              _push2(`<div class="py-1 flex flex-1 justify-end" data-v-00ffeb1c${_scopeId}><span class="page-title absolute w-full center" data-v-00ffeb1c${_scopeId}>${ssrInterpolate(_ctx.$t("dict_list"))}</span>`);
              _push2(ssrRenderComponent(BaseIcon, {
                title: _ctx.$t("search"),
                onClick: ($event) => isRef(showSearchInput) ? showSearchInput.value = true : showSearchInput = true,
                class: "z-1",
                icon: "fluent:search-24-regular"
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
              _push2(`<div class="mt-4" data-v-00ffeb1c${_scopeId}>`);
              if (searchList.value.length) {
                _push2(ssrRenderComponent(DictList, {
                  onSelectDict: selectDict,
                  list: searchList.value,
                  quantifier: "词",
                  "select-id": "-1"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(Empty, { text: "没有相关词典" }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="w-full" data-v-00ffeb1c${_scopeId}><!--[-->`);
              ssrRenderList(unref(groupedByCategoryAndTag), (item) => {
                _push2(ssrRenderComponent(DictGroup, {
                  "select-id": unref(store).sdict.id,
                  onSelectDict: selectDict,
                  quantifier: "词",
                  groupByTag: item[1],
                  category: item[0]
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "card min-h-200 dict-list-page" }, [
                createVNode("div", { class: "flex items-center relative gap-2 header-section" }, [
                  createVNode(BackIcon, {
                    class: "z-2",
                    onClick: unref(router).back
                  }, null, 8, ["onClick"]),
                  unref(showSearchInput) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-1 gap-4"
                  }, [
                    createVNode(BaseInput, {
                      clearable: "",
                      placeholder: "请输入词典名称/缩写/类别",
                      modelValue: unref(searchKey),
                      "onUpdate:modelValue": ($event) => isRef(searchKey) ? searchKey.value = $event : searchKey = $event,
                      class: "flex-1",
                      autofocus: ""
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
                    createVNode("span", { class: "page-title absolute w-full center" }, toDisplayString(_ctx.$t("dict_list")), 1),
                    createVNode(BaseIcon, {
                      title: _ctx.$t("search"),
                      onClick: ($event) => isRef(showSearchInput) ? showSearchInput.value = true : showSearchInput = true,
                      class: "z-1",
                      icon: "fluent:search-24-regular"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFluentSearch24Regular)
                      ]),
                      _: 1
                    }, 8, ["title", "onClick"])
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
                    quantifier: "词",
                    "select-id": "-1"
                  }, null, 8, ["list"])) : (openBlock(), createBlock(Empty, {
                    key: 1,
                    text: "没有相关词典"
                  }))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(groupedByCategoryAndTag), (item) => {
                    return openBlock(), createBlock(DictGroup, {
                      "select-id": unref(store).sdict.id,
                      onSelectDict: selectDict,
                      quantifier: "词",
                      groupByTag: item[1],
                      category: item[0]
                    }, null, 8, ["select-id", "groupByTag", "category"]);
                  }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(words)/dict-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dictList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00ffeb1c"]]);
export {
  dictList as default
};
//# sourceMappingURL=dict-list-CyTT-aBB.js.map
