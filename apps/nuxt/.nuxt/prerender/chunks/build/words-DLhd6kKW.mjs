import { defineComponent, ref, watch, computed, resolveDirective, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, mergeProps, Fragment, withDirectives, isRef, renderList, markRaw, createElementBlock, createElementVNode, defineAsyncComponent, useModel, mergeModels, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { _ as __unplugin_components_0$2 } from './arrow-circle-right16-regular-CmXRLB6P.mjs';
import { _ as __unplugin_components_3, B as Book } from './Book-DpTMFDdY.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderSlot } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { c as useBaseStore, b as useSettingStore, u as useNav, a as useRuntimeStore, h as _nextTick, E as myDictList, o as _getDictDataByUrl, A as resourceWrap, F as _getAccomplishDate, B as BaseIcon, T as Toast, g as getDefaultDict, t as shuffle, l as loadJsLib } from './BaseIcon-Cnj57dgy.mjs';
import { useRouter } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';
import { B as BasePage } from './BasePage-DMJ6cvww.mjs';
import { g as getCurrentStudyWord } from './dict-Dqcdsgfb.mjs';
import { P as PopConfirm } from './PopConfirm-BsYq1Crk.mjs';
import { P as Progress } from './Progress-C93deg99.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { D as DeleteIcon } from './DeleteIcon-DU4Q4Alm.mjs';
import { P as PracticeSettingDialog, C as ChangeLastPracticeIndexDialog, d as deleteDict, B as BaseTable } from './dict-COqWcYxU.mjs';
import { useFetch } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@vueuse/core/dist/index.js';
import { A as APP_NAME, e as AppEnv, j as WordPracticeMode, s as WordPracticeModeNameMap, O as Origin, r as DICT_LIST, L as LIB_JS_URL, T as TourConfig } from './env-CUoXYOyW.mjs';
import { W as WordItem } from './WordItem-QVJUwi53.mjs';
import { C as Checkbox } from './Checkbox-ChlucEKY.mjs';
import { S as Slider } from './Slider-ibM1Ch1E.mjs';
import { h as _export_sfc, j as useHead } from './server.mjs';
import { g as getPracticeWordCache, s as setPracticeWordCache } from './cache-C4S9Fl6v.mjs';
import './NuxtImg-BgeLVH9C.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/axios/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/duration.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import './question-circle20-regular-ixBvu_Z4.mjs';
import './search24-regular-Cw07GsNM.mjs';
import './MiniDialog-DIRP4Q9a.mjs';
import './Empty-DqqzidIv.mjs';
import './chevron-left20-filled-B_9PTvDy.mjs';
import './BaseInput-mlIHP8lZ.mjs';
import './eye16-regular-Cm9O3Lp0.mjs';
import './event-qcx2F2JA.mjs';
import './Dialog-BoKDmA_Y.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/scule/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pathe/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ipx/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-devtools-stub/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/devalue/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/utils.mjs';
import './InputNumber-CwEqYfu9.mjs';
import './checkmark-circle16-regular-BfJF9NXt.mjs';
import './VolumeIcon--ng6Uza7.mjs';
import './volume-low-D-Q_rQNL.mjs';
import './sound-fV5MruVn.mjs';

const _hoisted_1$5 = {
  viewBox: "0 0 14 14",
  width: "1.2em",
  height: "1.2em"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#8fbffa",
      "fill-rule": "evenodd",
      d: "M8.61 2.66c-.227-.198-.817-.365-1.602.129c-2.508 1.58-4.693 4.43-5.432 5.463a.75.75 0 1 1-1.22-.873c.75-1.047 3.078-4.112 5.853-5.86C7.41.763 8.75.795 9.594 1.527c.421.365.685.89.688 1.486c.004.591-.246 1.177-.702 1.698c-1.427 1.632-3.312 3.845-4.104 4.925c-.104.142-.111.25-.102.312c.01.07.047.135.11.183a.4.4 0 0 0 .299.067c.14-.017.36-.094.628-.339c.226-.208.461-.43.703-.657c.745-.701 1.55-1.46 2.356-2.053c.838-.616 1.818-.787 2.561-.333c.371.227.632.59.722 1.024c.09.43.005.878-.212 1.29c-.233.442-.434.76-.615 1.046l-.014.023a11 11 0 0 0-.485.819a.5.5 0 0 0-.024.415c.024.06.047.089.06.101c.092.007.172-.016.299-.114c.178-.139.377-.374.676-.766a.75.75 0 0 1 1.192.911c-.285.373-.594.764-.948 1.04c-.392.304-.867.488-1.444.413c-.633-.082-1.048-.57-1.231-1.037a2 2 0 0 1 .09-1.658c.19-.364.37-.647.541-.916l.022-.034c.176-.279.35-.556.554-.942c.085-.162.077-.255.071-.284a.07.07 0 0 0-.036-.051c-.043-.027-.347-.138-.89.262c-.726.533-1.433 1.2-2.16 1.884q-.382.362-.775.723c-.923.846-2.047.959-2.838.367c-.77-.576-.981-1.68-.32-2.582c.837-1.142 2.767-3.405 4.185-5.026l.513.448l-.513-.448c.271-.31.332-.555.331-.702a.47.47 0 0 0-.171-.362m2.863 8.883l-.003-.002q.003 0 .003.002",
      "clip-rule": "evenodd"
    }, null, -1)
  ])]);
}
const __unplugin_components_6 = markRaw({ name: "streamline-color-pen-draw-flat", render: render$5 });
const _hoisted_1$4 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-3.124 3.044l.738 4.3a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627z"
    }, null, -1)
  ])]);
}
const __unplugin_components_4 = markRaw({ name: "fluent-star20-filled", render: render$4 });
const _hoisted_1$3 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h4.976c.11-.361.283-.7.51-1H4.5A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v2.503a2.9 2.9 0 0 1 1 .13V6.5A2.5 2.5 0 0 0 15.5 4zM6 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm4.98 8.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02"
    }, null, -1)
  ])]);
}
const __unplugin_components_2 = markRaw({ name: "fluent-slide-text-title-edit20-regular", render: render$3 });
const _hoisted_1$2 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M12.146 3.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L14.293 7H4.5a.5.5 0 0 1 0-1h9.793l-2.147-2.146a.5.5 0 0 1 0-.708m-4.292 7a.5.5 0 0 1 0 .708L5.707 13H15.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0"
    }, null, -1)
  ])]);
}
const __unplugin_components_1 = markRaw({ name: "fluent-arrow-swap20-regular", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M9.61 8.005h.982l-.2 1H9.41zM6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.504a.5.5 0 1 0 0-1H6a1 1 0 0 1-1-.999h10.504a.5.5 0 0 0 .5-.5V4a2 2 0 0 0-2-2zm5.599 3.511a.5.5 0 0 1 .392.588l-.18.906h.94a.5.5 0 0 1 0 1h-1.14l-.2 1h1.09a.5.5 0 1 1 0 1h-1.289l-.218 1.093a.5.5 0 0 1-.98-.196l.178-.897H9.21l-.219 1.093a.5.5 0 1 1-.98-.196l.18-.897h-.938a.5.5 0 0 1 0-1H8.39l.2-1H7.5a.5.5 0 0 1 0-1h1.29l.221-1.102a.5.5 0 0 1 .98.197l-.18.905h.98l.22-1.101a.5.5 0 0 1 .588-.393"
    }, null, -1)
  ])]);
}
const __unplugin_components_0$1 = markRaw({ name: "fluent-book-number20-filled", render: render$1 });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PracticeWordListDialog",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    data: null
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const Dialog = defineAsyncComponent(() => import('./Dialog-BoKDmA_Y.mjs'));
    const model = useModel(__props, "modelValue");
    let showTranslate = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Dialog), mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        padding: "",
        title: "\u4EFB\u52A1"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pb-4 h-80vh flex gap-4"${_scopeId}><div class="h-full flex flex-col gap-2"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span class="title"${_scopeId}>\u65B0\u8BCD ${ssrInterpolate(__props.data.new.length)} \u4E2A</span>`);
            _push2(ssrRenderComponent(Checkbox, {
              modelValue: unref(showTranslate),
              "onUpdate:modelValue": ($event) => isRef(showTranslate) ? showTranslate.value = $event : showTranslate = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u7FFB\u8BD1`);
                } else {
                  return [
                    createTextVNode("\u7FFB\u8BD1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(BaseTable, {
              class: "overflow-auto flex-1 w-85",
              list: __props.data.new,
              loading: false,
              "show-toolbar": false,
              showPagination: false
            }, {
              default: withCtx((item, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(WordItem, {
                    item: item.item,
                    "show-translate": unref(showTranslate),
                    index: item.index,
                    "show-option": false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(WordItem, {
                      item: item.item,
                      "show-translate": unref(showTranslate),
                      index: item.index,
                      "show-option": false
                    }, null, 8, ["item", "show-translate", "index"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.data.review.length) {
              _push2(`<div class="h-full flex flex-col gap-2"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span class="title"${_scopeId}>\u590D\u4E60\u4E0A\u6B21 ${ssrInterpolate(__props.data.review.length)} \u4E2A</span></div>`);
              _push2(ssrRenderComponent(BaseTable, {
                class: "overflow-auto flex-1 w-85",
                list: __props.data.review,
                loading: false,
                "show-toolbar": false,
                showPagination: false
              }, {
                default: withCtx((item, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(WordItem, {
                      item: item.item,
                      "show-translate": unref(showTranslate),
                      index: item.index,
                      "show-option": false
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(WordItem, {
                        item: item.item,
                        "show-translate": unref(showTranslate),
                        index: item.index,
                        "show-option": false
                      }, null, 8, ["item", "show-translate", "index"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.data.write.length) {
              _push2(`<div class="h-full flex flex-col gap-2"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span class="title"${_scopeId}>\u590D\u4E60\u4E4B\u524D ${ssrInterpolate(__props.data.write.length)} \u4E2A</span></div>`);
              _push2(ssrRenderComponent(BaseTable, {
                class: "overflow-auto flex-1 w-85",
                list: __props.data.write,
                loading: false,
                "show-toolbar": false,
                showPagination: false
              }, {
                default: withCtx((item, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(WordItem, {
                      item: item.item,
                      "show-translate": unref(showTranslate),
                      index: item.index,
                      "show-option": false
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(WordItem, {
                        item: item.item,
                        "show-translate": unref(showTranslate),
                        index: item.index,
                        "show-option": false
                      }, null, 8, ["item", "show-translate", "index"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pb-4 h-80vh flex gap-4" }, [
                createVNode("div", { class: "h-full flex flex-col gap-2" }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "title" }, "\u65B0\u8BCD " + toDisplayString(__props.data.new.length) + " \u4E2A", 1),
                    createVNode(Checkbox, {
                      modelValue: unref(showTranslate),
                      "onUpdate:modelValue": ($event) => isRef(showTranslate) ? showTranslate.value = $event : showTranslate = $event
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u7FFB\u8BD1")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(BaseTable, {
                    class: "overflow-auto flex-1 w-85",
                    list: __props.data.new,
                    loading: false,
                    "show-toolbar": false,
                    showPagination: false
                  }, {
                    default: withCtx((item) => [
                      createVNode(WordItem, {
                        item: item.item,
                        "show-translate": unref(showTranslate),
                        index: item.index,
                        "show-option": false
                      }, null, 8, ["item", "show-translate", "index"])
                    ]),
                    _: 1
                  }, 8, ["list"])
                ]),
                __props.data.review.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "h-full flex flex-col gap-2"
                }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "title" }, "\u590D\u4E60\u4E0A\u6B21 " + toDisplayString(__props.data.review.length) + " \u4E2A", 1)
                  ]),
                  createVNode(BaseTable, {
                    class: "overflow-auto flex-1 w-85",
                    list: __props.data.review,
                    loading: false,
                    "show-toolbar": false,
                    showPagination: false
                  }, {
                    default: withCtx((item) => [
                      createVNode(WordItem, {
                        item: item.item,
                        "show-translate": unref(showTranslate),
                        index: item.index,
                        "show-option": false
                      }, null, 8, ["item", "show-translate", "index"])
                    ]),
                    _: 1
                  }, 8, ["list"])
                ])) : createCommentVNode("", true),
                __props.data.write.length ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "h-full flex flex-col gap-2"
                }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "title" }, "\u590D\u4E60\u4E4B\u524D " + toDisplayString(__props.data.write.length) + " \u4E2A", 1)
                  ]),
                  createVNode(BaseTable, {
                    class: "overflow-auto flex-1 w-85",
                    list: __props.data.write,
                    loading: false,
                    "show-toolbar": false,
                    showPagination: false
                  }, {
                    default: withCtx((item) => [
                      createVNode(WordItem, {
                        item: item.item,
                        "show-translate": unref(showTranslate),
                        index: item.index,
                        "show-option": false
                      }, null, 8, ["item", "show-translate", "index"])
                    ]),
                    _: 1
                  }, 8, ["list"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/word/PracticeWordListDialog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PracticeWordListDialog = Object.assign(_sfc_main$3, { __name: "PracticeWordListDialog" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ShufflePracticeSettingDialog",
  __ssrInlineRender: true,
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["ok"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const Dialog = defineAsyncComponent(() => import('./Dialog-BoKDmA_Y.mjs'));
    const store = useBaseStore();
    const model = useModel(__props, "modelValue");
    const emit = __emit;
    let num = ref(0);
    let min = ref(0);
    watch(() => model.value, (n) => {
      if (n) {
        num.value = Math.floor(store.sdict.lastLearnIndex / 3);
        num.value = num.value > 50 ? 50 : num.value;
        min.value = num.value < 10 ? num.value : 10;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Dialog), mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        title: "\u968F\u673A\u590D\u4E60\u8BBE\u7F6E",
        footer: true,
        padding: true,
        onOk: ($event) => emit("ok", unref(num))
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-120 color-main"${_scopeId}><div class="flex gap-4 items-end mb-2"${_scopeId}><span${_scopeId}>\u968F\u673A\u590D\u4E60\uFF1A<span class="font-bold"${_scopeId}>${ssrInterpolate(unref(store).sdict.name)}</span></span><span class="target-number"${_scopeId}>${ssrInterpolate(unref(num))}</span>\u4E2A\u5355\u8BCD </div><div class="flex gap-space"${_scopeId}><span class="shrink-0"${_scopeId}>\u968F\u673A\u6570\u91CF\uFF1A</span>`);
            _push2(ssrRenderComponent(Slider, {
              min: unref(min),
              step: 10,
              "show-text": "",
              class: "mt-1",
              max: unref(store).sdict.lastLearnIndex,
              modelValue: unref(num),
              "onUpdate:modelValue": ($event) => isRef(num) ? num.value = $event : num = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-right"${_scopeId}><span class="text-sm text-gray-500"${_scopeId}>\u53EA\u80FD\u590D\u4E60\u5DF2\u5B66\u4E60\u8FC7\u7684\u5355\u8BCD</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-120 color-main" }, [
                createVNode("div", { class: "flex gap-4 items-end mb-2" }, [
                  createVNode("span", null, [
                    createTextVNode("\u968F\u673A\u590D\u4E60\uFF1A"),
                    createVNode("span", { class: "font-bold" }, toDisplayString(unref(store).sdict.name), 1)
                  ]),
                  createVNode("span", { class: "target-number" }, toDisplayString(unref(num)), 1),
                  createTextVNode("\u4E2A\u5355\u8BCD ")
                ]),
                createVNode("div", { class: "flex gap-space" }, [
                  createVNode("span", { class: "shrink-0" }, "\u968F\u673A\u6570\u91CF\uFF1A"),
                  createVNode(Slider, {
                    min: unref(min),
                    step: 10,
                    "show-text": "",
                    class: "mt-1",
                    max: unref(store).sdict.lastLearnIndex,
                    modelValue: unref(num),
                    "onUpdate:modelValue": ($event) => isRef(num) ? num.value = $event : num = $event
                  }, null, 8, ["min", "max", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "text-right" }, [
                  createVNode("span", { class: "text-sm text-gray-500" }, "\u53EA\u80FD\u590D\u4E60\u5DF2\u5B66\u4E60\u8FC7\u7684\u5355\u8BCD")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/word/ShufflePracticeSettingDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ShufflePracticeSettingDialog = Object.assign(_sfc_main$2, { __name: "ShufflePracticeSettingDialog" });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M15.854 7.646a.5.5 0 0 1 .001.707l-5.465 5.484a.55.55 0 0 1-.78 0L4.147 8.353a.5.5 0 1 1 .708-.706L10 12.812l5.147-5.165a.5.5 0 0 1 .707-.001"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "fluent-chevron-down20-regular", render });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconFluentChevronDown20Regular = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex box-border cp" }, _attrs))} data-v-a5827727><div class="option-wrap" data-v-a5827727>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="relative group" data-v-a5827727><div class="more w-10 rounded-r-lg h-full center box-border transition-all duration-300" data-v-a5827727>`);
  _push(ssrRenderComponent(_component_IconFluentChevronDown20Regular, null, null, _parent));
  _push(`</div><div class="space-y-2 btn-no-margin pt-2 absolute z-2 right-0 border rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 pointer-events-none group-hover:pointer-events-auto" data-v-a5827727>`);
  ssrRenderSlot(_ctx.$slots, "options", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/OptionButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OptionButton = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a5827727"]]), { __name: "OptionButton" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "words",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useBaseStore();
    const settingStore = useSettingStore();
    const router = useRouter();
    const { nav } = useNav();
    const runtimeStore = useRuntimeStore();
    let loading = ref(true);
    let isSaveData = ref(false);
    useHead({
      title: APP_NAME + " \u5355\u8BCD"
    });
    let currentStudy = ref({
      new: [],
      review: [],
      write: [],
      shuffle: []
    });
    watch(
      () => store.load,
      (n) => {
        if (n) {
          init();
          _nextTick(async () => {
            const Shepherd = await loadJsLib("Shepherd", LIB_JS_URL.SHEPHERD);
            const tour = new Shepherd.Tour(TourConfig);
            tour.on("cancel", () => {
              localStorage.setItem("tour-guide", "1");
            });
            tour.addStep({
              id: "step1",
              text: "\u70B9\u51FB\u8FD9\u91CC\u9009\u62E9\u4E00\u672C\u8BCD\u5178\u5F00\u59CB\u5B66\u4E60",
              attachTo: {
                element: "#step1",
                on: "bottom"
              },
              buttons: [
                {
                  text: `\u4E0B\u4E00\u6B65\uFF081/${TourConfig.total}\uFF09`,
                  action() {
                    tour.next();
                    router.push("/dict-list");
                  }
                }
              ]
            });
            const r = localStorage.getItem("tour-guide");
            if (settingStore.first && !r && true) tour.start();
          }, 500);
        }
      },
      { immediate: true }
    );
    async function init() {
      if (AppEnv.CAN_REQUEST) {
        let res = await myDictList({ type: "word" });
        if (res.success) {
          store.setState(Object.assign(store.$state, res.data));
        }
      }
      if (store.word.studyIndex >= 3) {
        if (!store.sdict.custom && !store.sdict.words.length) {
          store.word.bookList[store.word.studyIndex] = await _getDictDataByUrl(store.sdict);
        }
      }
      if (!currentStudy.value.new.length && store.sdict.words.length) {
        let d = getPracticeWordCache();
        if (d) {
          currentStudy.value = d.taskWords;
          isSaveData.value = true;
          if (!currentStudy.value.new.length && !currentStudy.value.review.length && !currentStudy.value.write.length) {
            isSaveData.value = false;
            setPracticeWordCache(null);
            init();
          }
        } else {
          currentStudy.value = getCurrentStudyWord();
        }
      }
      loading.value = false;
    }
    function startPractice(practiceMode, resetCache = false) {
      var _a, _b;
      if (store.sdict.id) {
        if (!store.sdict.words.length) {
          Toast.warning("\u6CA1\u6709\u5355\u8BCD\u53EF\u5B66\u4E60\uFF01");
          return;
        }
        if (resetCache) {
          setPracticeWordCache(null);
        }
        settingStore.wordPracticeMode = practiceMode;
        (_a = (void 0).umami) == null ? void 0 : _a.track("startStudyWord", {
          name: store.sdict.name,
          index: store.sdict.lastLearnIndex,
          perDayStudyNumber: store.sdict.perDayStudyNumber,
          custom: store.sdict.custom,
          complete: store.sdict.complete,
          wordPracticeMode: settingStore.wordPracticeMode
        });
        settingStore.first = false;
        nav("practice-words/" + store.sdict.id, {}, { taskWords: currentStudy.value });
      } else {
        (_b = (void 0).umami) == null ? void 0 : _b.track("no-dict");
        Toast.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u672C\u8BCD\u5178");
      }
    }
    function freePractice() {
      startPractice(WordPracticeMode.Free, settingStore.wordPracticeMode !== WordPracticeMode.Free);
    }
    function systemPractice() {
      startPractice(
        settingStore.wordPracticeMode === WordPracticeMode.Free ? WordPracticeMode.System : settingStore.wordPracticeMode,
        settingStore.wordPracticeMode === WordPracticeMode.Free
      );
    }
    let showPracticeSettingDialog = ref(false);
    let showShufflePracticeSettingDialog = ref(false);
    let showChangeLastPracticeIndexDialog = ref(false);
    let showPracticeWordListDialog = ref(false);
    async function goDictDetail(val) {
      if (!val.id) return nav("dict-list");
      runtimeStore.editDict = getDefaultDict(val);
      nav("/dict", {});
    }
    let isManageDict = ref(false);
    let selectIds = ref([]);
    async function handleBatchDel() {
      if (AppEnv.CAN_REQUEST) {
        let res = await deleteDict(null, selectIds.value);
        if (res.success) {
          init();
        } else {
          Toast.error(res.msg);
        }
      } else {
        selectIds.value.forEach((id) => {
          let r = store.word.bookList.findIndex((v) => v.id === id);
          if (r !== -1) {
            if (store.word.studyIndex === r) {
              store.word.studyIndex = -1;
            }
            if (store.word.studyIndex > r) {
              store.word.studyIndex--;
            }
            store.word.bookList.splice(r, 1);
          }
        });
        selectIds.value = [];
        Toast.success("\u5220\u9664\u6210\u529F\uFF01");
      }
    }
    function toggleSelect(item) {
      let rIndex = selectIds.value.findIndex((v) => v === item.id);
      if (rIndex > -1) {
        selectIds.value.splice(rIndex, 1);
      } else {
        selectIds.value.push(item.id);
      }
    }
    const progressTextLeft = computed(() => {
      if (store.sdict.complete) return "\u5DF2\u5B66\u5B8C\uFF0C\u8FDB\u5165\u603B\u590D\u4E60\u9636\u6BB5";
      return "\u5F53\u524D\u8FDB\u5EA6\uFF1A\u5DF2\u5B66" + store.currentStudyProgress + "%";
    });
    function check(cb) {
      if (!store.sdict.id) {
        Toast.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u672C\u8BCD\u5178");
      } else {
        runtimeStore.editDict = getDefaultDict(store.sdict);
        cb();
      }
    }
    async function savePracticeSetting() {
      Toast.success("\u4FEE\u6539\u6210\u529F");
      isSaveData.value = false;
      setPracticeWordCache(null);
      await store.changeDict(runtimeStore.editDict);
      currentStudy.value = getCurrentStudyWord();
    }
    async function onShufflePracticeSettingOk(total) {
      var _a;
      (_a = (void 0).umami) == null ? void 0 : _a.track("startShuffleStudyWord", {
        name: store.sdict.name,
        index: store.sdict.lastLearnIndex,
        perDayStudyNumber: store.sdict.perDayStudyNumber,
        total,
        custom: store.sdict.custom,
        complete: store.sdict.complete
      });
      isSaveData.value = false;
      setPracticeWordCache(null);
      settingStore.wordPracticeMode = WordPracticeMode.Shuffle;
      let ignoreList = [store.allIgnoreWords, store.knownWords][settingStore.ignoreSimpleWord ? 0 : 1];
      currentStudy.value.shuffle = shuffle(
        store.sdict.words.slice(0, store.sdict.lastLearnIndex).filter((v) => !ignoreList.includes(v.word))
      ).slice(0, total);
      nav(
        "practice-words/" + store.sdict.id,
        {},
        {
          taskWords: currentStudy.value,
          total
          //用于再来一组时，随机出正确的长度，因为练习中可能会点击已掌握，导致重学一遍之后长度变少，如果再来一组，此时长度就不正确
        }
      );
    }
    async function saveLastPracticeIndex(e) {
      Toast.success("\u4FEE\u6539\u6210\u529F");
      runtimeStore.editDict.lastLearnIndex = e;
      showChangeLastPracticeIndexDialog.value = false;
      isSaveData.value = false;
      setPracticeWordCache(null);
      await store.changeDict(runtimeStore.editDict);
      currentStudy.value = getCurrentStudyWord();
    }
    const { data: recommendDictList, isFetching } = useFetch(resourceWrap(DICT_LIST.WORD.RECOMMENDED)).json();
    let isNewHost = ref(true);
    const systemPracticeText = computed(() => {
      if (settingStore.wordPracticeMode === WordPracticeMode.Free) {
        return "\u5F00\u59CB\u5B66\u4E60";
      } else {
        return isSaveData.value ? "\u7EE7\u7EED" + WordPracticeModeNameMap[settingStore.wordPracticeMode] : "\u5F00\u59CB" + WordPracticeModeNameMap[settingStore.wordPracticeMode];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentBookNumber20Filled = __unplugin_components_0$1;
      const _component_IconFluentArrowSwap20Regular = __unplugin_components_1;
      const _component_IconFluentSlideTextTitleEdit20Regular = __unplugin_components_2;
      const _component_IconFluentAdd16Regular = __unplugin_components_3;
      const _component_IconFluentStar20Filled = __unplugin_components_4;
      const _component_IconFluentArrowCircleRight16Regular = __unplugin_components_0$2;
      const _component_IconStreamlineColorPenDrawFlat = __unplugin_components_6;
      const _directive_opacity = resolveDirective("opacity");
      const _directive_loading = resolveDirective("loading");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(BasePage, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (!unref(isNewHost)) {
              _push2(`<div class="mb-4" data-v-3bb44370${_scopeId}> \u65B0\u57DF\u540D\u5DF2\u542F\u7528\uFF0C\u540E\u7EED\u8BF7\u8BBF\u95EE <a class="mr-4"${ssrRenderAttr("href", `${unref(Origin)}/words?from_old_site=1`)} data-v-3bb44370${_scopeId}>${ssrInterpolate(unref(Origin))}</a>\u5F53\u524D 2study.top \u57DF\u540D\u5C06\u5728\u4E0D\u4E45\u540E\u505C\u6B62\u4F7F\u7528 </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="card flex flex-col md:flex-row gap-4" data-v-3bb44370${_scopeId}><div class="flex-1 w-full flex flex-col justify-between" data-v-3bb44370${_scopeId}><div class="flex gap-3" data-v-3bb44370${_scopeId}><div class="p-1 center rounded-full bg-white" data-v-3bb44370${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentBookNumber20Filled, { class: "text-xl color-link" }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-2xl font-bold cursor-pointer" data-v-3bb44370${_scopeId}>${ssrInterpolate(unref(store).sdict.name || _ctx.$t("no_dict_selected"))}</div></div>`);
            if (unref(store).sdict.id) {
              _push2(`<!--[--><div class="mt-4 space-y-2" data-v-3bb44370${_scopeId}><div class="text-sm flex justify-between" data-v-3bb44370${_scopeId}><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_opacity, unref(store).sdict.id && unref(store).sdict.lastLearnIndex < unref(store).sdict.length))} data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("estimated_completion"))}\uFF1A${ssrInterpolate(unref(_getAccomplishDate)(
                unref(store).sdict.words.length - unref(store).sdict.lastLearnIndex,
                unref(store).sdict.perDayStudyNumber
              ))}</span></div>`);
              _push2(ssrRenderComponent(Progress, {
                size: "large",
                percentage: unref(store).currentStudyProgress,
                "show-text": false
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-sm flex justify-between" data-v-3bb44370${_scopeId}><span data-v-3bb44370${_scopeId}>${ssrInterpolate(progressTextLeft.value)}</span><span data-v-3bb44370${_scopeId}>${ssrInterpolate((_a = unref(store).sdict) == null ? void 0 : _a.lastLearnIndex)} / ${ssrInterpolate(unref(store).sdict.length)} \u8BCD</span></div></div><div class="flex items-center mt-4 gap-4" data-v-3bb44370${_scopeId}>`);
              _push2(ssrRenderComponent(BaseButton, {
                type: "info",
                size: "small",
                onClick: ($event) => unref(router).push("/dict-list")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="center gap-1" data-v-3bb44370${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconFluentArrowSwap20Regular, null, null, _parent3, _scopeId2));
                    _push3(`<span data-v-3bb44370${_scopeId2}>${ssrInterpolate(_ctx.$t("select_dict"))}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "center gap-1" }, [
                        createVNode(_component_IconFluentArrowSwap20Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("select_dict")), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(PopConfirm, {
                disabled: !unref(isSaveData),
                title: "\u5F53\u524D\u5B58\u5728\u672A\u5B8C\u6210\u7684\u5B66\u4E60\u4EFB\u52A1\uFF0C\u4FEE\u6539\u4F1A\u91CD\u65B0\u751F\u6210\u5B66\u4E60\u4EFB\u52A1\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
                onConfirm: ($event) => check(() => isRef(showChangeLastPracticeIndexDialog) ? showChangeLastPracticeIndexDialog.value = true : showChangeLastPracticeIndexDialog = true)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(store).sdict.id) {
                      _push3(ssrRenderComponent(BaseButton, {
                        type: "info",
                        size: "small"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="center gap-1" data-v-3bb44370${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_IconFluentSlideTextTitleEdit20Regular, null, null, _parent4, _scopeId3));
                            _push4(`<span data-v-3bb44370${_scopeId3}>${ssrInterpolate(_ctx.$t("change_progress"))}</span></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "center gap-1" }, [
                                createVNode(_component_IconFluentSlideTextTitleEdit20Regular),
                                createVNode("span", null, toDisplayString(_ctx.$t("change_progress")), 1)
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(store).sdict.id ? (openBlock(), createBlock(BaseButton, {
                        key: 0,
                        type: "info",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "center gap-1" }, [
                            createVNode(_component_IconFluentSlideTextTitleEdit20Regular),
                            createVNode("span", null, toDisplayString(_ctx.$t("change_progress")), 1)
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<div class="flex items-center gap-4 mt-2 flex-1" data-v-3bb44370${_scopeId}><div class="title" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("select_dict_to_start"))}</div>`);
              _push2(ssrRenderComponent(BaseButton, {
                id: "step1",
                type: "primary",
                size: "large",
                onClick: ($event) => unref(router).push("/dict-list")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="center gap-1" data-v-3bb44370${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconFluentAdd16Regular, null, null, _parent3, _scopeId2));
                    _push3(`<span data-v-3bb44370${_scopeId2}>${ssrInterpolate(_ctx.$t("select_dict"))}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "center gap-1" }, [
                        createVNode(_component_IconFluentAdd16Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("select_dict")), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div><div class="${ssrRenderClass([!unref(store).sdict.id && "opacity-30 cursor-not-allowed", "flex-1 w-full mt-4 md:mt-0"])}" data-v-3bb44370${_scopeId}><div class="flex justify-between" data-v-3bb44370${_scopeId}><div class="flex items-center gap-2" data-v-3bb44370${_scopeId}><div class="p-2 center rounded-full bg-white" data-v-3bb44370${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentStar20Filled, { class: "text-lg color-amber" }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xl font-bold" data-v-3bb44370${_scopeId}>${ssrInterpolate(unref(isSaveData) ? _ctx.$t("last_task") : _ctx.$t("today_task"))}</div>`);
            if (unref(store).sdict.id) {
              _push2(`<span class="color-link cursor-pointer" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("word_list"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(store).sdict.id) {
              _push2(`<div class="flex gap-1 items-center" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("daily_goal"))} <div style="${ssrRenderStyle({ "color": "#ac6ed1" })}" class="bg-third px-2 h-10 flex center text-2xl rounded" data-v-3bb44370${_scopeId}>${ssrInterpolate(unref(store).sdict.id ? unref(store).sdict.perDayStudyNumber : 0)}</div> ${ssrInterpolate(_ctx.$t("words_count"))} `);
              _push2(ssrRenderComponent(PopConfirm, {
                disabled: !unref(isSaveData),
                title: "\u5F53\u524D\u5B58\u5728\u672A\u5B8C\u6210\u7684\u5B66\u4E60\u4EFB\u52A1\uFF0C\u4FEE\u6539\u4F1A\u91CD\u65B0\u751F\u6210\u5B66\u4E60\u4EFB\u52A1\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
                onConfirm: ($event) => check(() => isRef(showPracticeSettingDialog) ? showPracticeSettingDialog.value = true : showPracticeSettingDialog = true)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(BaseButton, {
                      type: "info",
                      size: "small"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("change"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("change")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(BaseButton, {
                        type: "info",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("change")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex mt-4 justify-between" data-v-3bb44370${_scopeId}><div class="stat" data-v-3bb44370${_scopeId}><div class="num" data-v-3bb44370${_scopeId}>${ssrInterpolate(unref(currentStudy).new.length)}</div><div class="txt" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("new_words_count"))}</div></div><div class="stat" data-v-3bb44370${_scopeId}><div class="num" data-v-3bb44370${_scopeId}>${ssrInterpolate(unref(currentStudy).review.length)}</div><div class="txt" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("review_last"))}</div></div><div class="stat" data-v-3bb44370${_scopeId}><div class="num" data-v-3bb44370${_scopeId}>${ssrInterpolate(unref(currentStudy).write.length)}</div><div class="txt" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("review_previous"))}</div></div></div><div class="flex items-end mt-4 gap-4 btn-no-margin" data-v-3bb44370${_scopeId}>`);
            _push2(ssrRenderComponent(OptionButton, {
              class: unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free ? "flex-1 orange-btn" : "primary-btn"
            }, {
              options: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).System && unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free) {
                    _push3(ssrRenderComponent(BaseButton, {
                      class: "w-full",
                      onClick: ($event) => startPractice(unref(WordPracticeMode).System, true)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("smart_learning"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("smart_learning")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Review) {
                    _push3(ssrRenderComponent(BaseButton, {
                      class: "w-full",
                      disabled: !unref(currentStudy).review.length && !unref(currentStudy).write.length,
                      onClick: ($event) => startPractice(unref(WordPracticeMode).Review, true)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("review"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("review")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Shuffle) {
                    _push3(ssrRenderComponent(BaseButton, {
                      class: "w-full",
                      disabled: unref(store).sdict.lastLearnIndex < 10 && !unref(store).sdict.complete,
                      onClick: ($event) => check(() => isRef(showShufflePracticeSettingDialog) ? showShufflePracticeSettingDialog.value = true : showShufflePracticeSettingDialog = true)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("random_review"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("random_review")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).System && unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free ? (openBlock(), createBlock(BaseButton, {
                      key: 0,
                      class: "w-full",
                      onClick: ($event) => startPractice(unref(WordPracticeMode).System, true)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("smart_learning")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Review ? (openBlock(), createBlock(BaseButton, {
                      key: 1,
                      class: "w-full",
                      disabled: !unref(currentStudy).review.length && !unref(currentStudy).write.length,
                      onClick: ($event) => startPractice(unref(WordPracticeMode).Review, true)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("review")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : createCommentVNode("", true),
                    unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Shuffle ? (openBlock(), createBlock(BaseButton, {
                      key: 2,
                      class: "w-full",
                      disabled: unref(store).sdict.lastLearnIndex < 10 && !unref(store).sdict.complete,
                      onClick: ($event) => check(() => isRef(showShufflePracticeSettingDialog) ? showShufflePracticeSettingDialog.value = true : showShufflePracticeSettingDialog = true)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("random_review")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : createCommentVNode("", true)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(BaseButton, {
                    size: "large",
                    type: unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free ? "orange" : "primary",
                    disabled: !unref(store).sdict.id,
                    loading: unref(loading),
                    onClick: systemPractice
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-2" data-v-3bb44370${_scopeId3}><span class="line-height-[2]" data-v-3bb44370${_scopeId3}>${ssrInterpolate(systemPracticeText.value)}</span>`);
                        _push4(ssrRenderComponent(_component_IconFluentArrowCircleRight16Regular, { class: "text-xl" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", { class: "line-height-[2]" }, toDisplayString(systemPracticeText.value), 1),
                            createVNode(_component_IconFluentArrowCircleRight16Regular, { class: "text-xl" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(BaseButton, {
                      size: "large",
                      type: unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free ? "orange" : "primary",
                      disabled: !unref(store).sdict.id,
                      loading: unref(loading),
                      onClick: systemPractice
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", { class: "line-height-[2]" }, toDisplayString(systemPracticeText.value), 1),
                          createVNode(_component_IconFluentArrowCircleRight16Regular, { class: "text-xl" })
                        ])
                      ]),
                      _: 1
                    }, 8, ["type", "disabled", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseButton, {
              class: unref(settingStore).wordPracticeMode === unref(WordPracticeMode).Free ? "flex-1" : "",
              type: unref(settingStore).wordPracticeMode === unref(WordPracticeMode).Free ? "orange" : "primary",
              size: "large",
              loading: unref(loading),
              onClick: ($event) => freePractice()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-3bb44370${_scopeId2}><span class="line-height-[2]" data-v-3bb44370${_scopeId2}>${ssrInterpolate(unref(settingStore).wordPracticeMode === unref(WordPracticeMode).Free && unref(isSaveData) ? _ctx.$t("continue_free_practice") : _ctx.$t("free_practice"))}</span>`);
                  _push3(ssrRenderComponent(_component_IconStreamlineColorPenDrawFlat, { class: "text-xl" }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "line-height-[2]" }, toDisplayString(unref(settingStore).wordPracticeMode === unref(WordPracticeMode).Free && unref(isSaveData) ? _ctx.$t("continue_free_practice") : _ctx.$t("free_practice")), 1),
                      createVNode(_component_IconStreamlineColorPenDrawFlat, { class: "text-xl" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="card flex flex-col" data-v-3bb44370${_scopeId}><div class="flex justify-between" data-v-3bb44370${_scopeId}><div class="title" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("my_dictionaries"))}</div><div class="flex gap-4 items-center" data-v-3bb44370${_scopeId}>`);
            if (unref(selectIds).length) {
              _push2(ssrRenderComponent(PopConfirm, {
                title: "\u786E\u8BA4\u5220\u9664\u6240\u6709\u9009\u4E2D\u8BCD\u5178\uFF1F",
                onConfirm: handleBatchDel
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(BaseIcon, {
                      class: "del",
                      title: _ctx.$t("delete")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(DeleteIcon, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(DeleteIcon)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(BaseIcon, {
                        class: "del",
                        title: _ctx.$t("delete")
                      }, {
                        default: withCtx(() => [
                          createVNode(DeleteIcon)
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(store).word.bookList.length > 3) {
              _push2(`<div class="color-link cursor-pointer" data-v-3bb44370${_scopeId}>${ssrInterpolate(unref(isManageDict) ? _ctx.$t("cancel") : _ctx.$t("manage_dict"))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="color-link cursor-pointer" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("create_personal_dict"))}</div></div></div><div class="flex gap-4 flex-wrap mt-4" data-v-3bb44370${_scopeId}><!--[-->`);
            ssrRenderList(unref(store).word.bookList, (item, j) => {
              _push2(ssrRenderComponent(Book, {
                "is-add": false,
                quantifier: "\u8BCD",
                item,
                checked: unref(selectIds).includes(item.id),
                onCheck: () => toggleSelect(item),
                "show-checkbox": unref(isManageDict) && j >= 3,
                onClick: ($event) => goDictDetail(item)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(Book, {
              "is-add": true,
              onClick: ($event) => unref(router).push("/dict-list")
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "card flex flex-col overflow-hidden" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isFetching))))} data-v-3bb44370${_scopeId}><div class="flex justify-between" data-v-3bb44370${_scopeId}><div class="title" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("recommend"))}</div><div class="flex gap-4 items-center" data-v-3bb44370${_scopeId}><div class="color-link cursor-pointer" data-v-3bb44370${_scopeId}>${ssrInterpolate(_ctx.$t("more"))}</div></div></div><div class="flex gap-4 flex-wrap mt-4 min-h-50" data-v-3bb44370${_scopeId}><!--[-->`);
            ssrRenderList(unref(recommendDictList), (item, j) => {
              _push2(ssrRenderComponent(Book, {
                "is-add": false,
                quantifier: "\u8BCD",
                item,
                onClick: ($event) => goDictDetail(item)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              !unref(isNewHost) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4"
              }, [
                createTextVNode(" \u65B0\u57DF\u540D\u5DF2\u542F\u7528\uFF0C\u540E\u7EED\u8BF7\u8BBF\u95EE "),
                createVNode("a", {
                  class: "mr-4",
                  href: `${unref(Origin)}/words?from_old_site=1`
                }, toDisplayString(unref(Origin)), 9, ["href"]),
                createTextVNode("\u5F53\u524D 2study.top \u57DF\u540D\u5C06\u5728\u4E0D\u4E45\u540E\u505C\u6B62\u4F7F\u7528 ")
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "card flex flex-col md:flex-row gap-4" }, [
                createVNode("div", { class: "flex-1 w-full flex flex-col justify-between" }, [
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode("div", { class: "p-1 center rounded-full bg-white" }, [
                      createVNode(_component_IconFluentBookNumber20Filled, { class: "text-xl color-link" })
                    ]),
                    createVNode("div", {
                      onClick: ($event) => goDictDetail(unref(store).sdict),
                      class: "text-2xl font-bold cursor-pointer"
                    }, toDisplayString(unref(store).sdict.name || _ctx.$t("no_dict_selected")), 9, ["onClick"])
                  ]),
                  unref(store).sdict.id ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "mt-4 space-y-2" }, [
                      createVNode("div", { class: "text-sm flex justify-between" }, [
                        withDirectives((openBlock(), createBlock("span", null, [
                          createTextVNode(toDisplayString(_ctx.$t("estimated_completion")) + "\uFF1A" + toDisplayString(unref(_getAccomplishDate)(
                            unref(store).sdict.words.length - unref(store).sdict.lastLearnIndex,
                            unref(store).sdict.perDayStudyNumber
                          )), 1)
                        ])), [
                          [_directive_opacity, unref(store).sdict.id && unref(store).sdict.lastLearnIndex < unref(store).sdict.length]
                        ])
                      ]),
                      createVNode(Progress, {
                        size: "large",
                        percentage: unref(store).currentStudyProgress,
                        "show-text": false
                      }, null, 8, ["percentage"]),
                      createVNode("div", { class: "text-sm flex justify-between" }, [
                        createVNode("span", null, toDisplayString(progressTextLeft.value), 1),
                        createVNode("span", null, toDisplayString((_b = unref(store).sdict) == null ? void 0 : _b.lastLearnIndex) + " / " + toDisplayString(unref(store).sdict.length) + " \u8BCD", 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center mt-4 gap-4" }, [
                      createVNode(BaseButton, {
                        type: "info",
                        size: "small",
                        onClick: ($event) => unref(router).push("/dict-list")
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "center gap-1" }, [
                            createVNode(_component_IconFluentArrowSwap20Regular),
                            createVNode("span", null, toDisplayString(_ctx.$t("select_dict")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(PopConfirm, {
                        disabled: !unref(isSaveData),
                        title: "\u5F53\u524D\u5B58\u5728\u672A\u5B8C\u6210\u7684\u5B66\u4E60\u4EFB\u52A1\uFF0C\u4FEE\u6539\u4F1A\u91CD\u65B0\u751F\u6210\u5B66\u4E60\u4EFB\u52A1\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
                        onConfirm: ($event) => check(() => isRef(showChangeLastPracticeIndexDialog) ? showChangeLastPracticeIndexDialog.value = true : showChangeLastPracticeIndexDialog = true)
                      }, {
                        default: withCtx(() => [
                          unref(store).sdict.id ? (openBlock(), createBlock(BaseButton, {
                            key: 0,
                            type: "info",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "center gap-1" }, [
                                createVNode(_component_IconFluentSlideTextTitleEdit20Regular),
                                createVNode("span", null, toDisplayString(_ctx.$t("change_progress")), 1)
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["disabled", "onConfirm"])
                    ])
                  ], 64)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex items-center gap-4 mt-2 flex-1"
                  }, [
                    createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("select_dict_to_start")), 1),
                    createVNode(BaseButton, {
                      id: "step1",
                      type: "primary",
                      size: "large",
                      onClick: ($event) => unref(router).push("/dict-list")
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "center gap-1" }, [
                          createVNode(_component_IconFluentAdd16Regular),
                          createVNode("span", null, toDisplayString(_ctx.$t("select_dict")), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ]),
                createVNode("div", {
                  class: ["flex-1 w-full mt-4 md:mt-0", !unref(store).sdict.id && "opacity-30 cursor-not-allowed"]
                }, [
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("div", { class: "p-2 center rounded-full bg-white" }, [
                        createVNode(_component_IconFluentStar20Filled, { class: "text-lg color-amber" })
                      ]),
                      createVNode("div", { class: "text-xl font-bold" }, toDisplayString(unref(isSaveData) ? _ctx.$t("last_task") : _ctx.$t("today_task")), 1),
                      unref(store).sdict.id ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "color-link cursor-pointer",
                        onClick: ($event) => isRef(showPracticeWordListDialog) ? showPracticeWordListDialog.value = true : showPracticeWordListDialog = true
                      }, toDisplayString(_ctx.$t("word_list")), 9, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    unref(store).sdict.id ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex gap-1 items-center"
                    }, [
                      createTextVNode(toDisplayString(_ctx.$t("daily_goal")) + " ", 1),
                      createVNode("div", {
                        style: { "color": "#ac6ed1" },
                        class: "bg-third px-2 h-10 flex center text-2xl rounded"
                      }, toDisplayString(unref(store).sdict.id ? unref(store).sdict.perDayStudyNumber : 0), 1),
                      createTextVNode(" " + toDisplayString(_ctx.$t("words_count")) + " ", 1),
                      createVNode(PopConfirm, {
                        disabled: !unref(isSaveData),
                        title: "\u5F53\u524D\u5B58\u5728\u672A\u5B8C\u6210\u7684\u5B66\u4E60\u4EFB\u52A1\uFF0C\u4FEE\u6539\u4F1A\u91CD\u65B0\u751F\u6210\u5B66\u4E60\u4EFB\u52A1\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
                        onConfirm: ($event) => check(() => isRef(showPracticeSettingDialog) ? showPracticeSettingDialog.value = true : showPracticeSettingDialog = true)
                      }, {
                        default: withCtx(() => [
                          createVNode(BaseButton, {
                            type: "info",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("change")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["disabled", "onConfirm"])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex mt-4 justify-between" }, [
                    createVNode("div", { class: "stat" }, [
                      createVNode("div", { class: "num" }, toDisplayString(unref(currentStudy).new.length), 1),
                      createVNode("div", { class: "txt" }, toDisplayString(_ctx.$t("new_words_count")), 1)
                    ]),
                    createVNode("div", { class: "stat" }, [
                      createVNode("div", { class: "num" }, toDisplayString(unref(currentStudy).review.length), 1),
                      createVNode("div", { class: "txt" }, toDisplayString(_ctx.$t("review_last")), 1)
                    ]),
                    createVNode("div", { class: "stat" }, [
                      createVNode("div", { class: "num" }, toDisplayString(unref(currentStudy).write.length), 1),
                      createVNode("div", { class: "txt" }, toDisplayString(_ctx.$t("review_previous")), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-end mt-4 gap-4 btn-no-margin" }, [
                    createVNode(OptionButton, {
                      class: unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free ? "flex-1 orange-btn" : "primary-btn"
                    }, {
                      options: withCtx(() => [
                        unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).System && unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free ? (openBlock(), createBlock(BaseButton, {
                          key: 0,
                          class: "w-full",
                          onClick: ($event) => startPractice(unref(WordPracticeMode).System, true)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("smart_learning")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true),
                        unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Review ? (openBlock(), createBlock(BaseButton, {
                          key: 1,
                          class: "w-full",
                          disabled: !unref(currentStudy).review.length && !unref(currentStudy).write.length,
                          onClick: ($event) => startPractice(unref(WordPracticeMode).Review, true)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("review")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])) : createCommentVNode("", true),
                        unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Shuffle ? (openBlock(), createBlock(BaseButton, {
                          key: 2,
                          class: "w-full",
                          disabled: unref(store).sdict.lastLearnIndex < 10 && !unref(store).sdict.complete,
                          onClick: ($event) => check(() => isRef(showShufflePracticeSettingDialog) ? showShufflePracticeSettingDialog.value = true : showShufflePracticeSettingDialog = true)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("random_review")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])) : createCommentVNode("", true)
                      ]),
                      default: withCtx(() => [
                        createVNode(BaseButton, {
                          size: "large",
                          type: unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free ? "orange" : "primary",
                          disabled: !unref(store).sdict.id,
                          loading: unref(loading),
                          onClick: systemPractice
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "line-height-[2]" }, toDisplayString(systemPracticeText.value), 1),
                              createVNode(_component_IconFluentArrowCircleRight16Regular, { class: "text-xl" })
                            ])
                          ]),
                          _: 1
                        }, 8, ["type", "disabled", "loading"])
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createVNode(BaseButton, {
                      class: unref(settingStore).wordPracticeMode === unref(WordPracticeMode).Free ? "flex-1" : "",
                      type: unref(settingStore).wordPracticeMode === unref(WordPracticeMode).Free ? "orange" : "primary",
                      size: "large",
                      loading: unref(loading),
                      onClick: ($event) => freePractice()
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", { class: "line-height-[2]" }, toDisplayString(unref(settingStore).wordPracticeMode === unref(WordPracticeMode).Free && unref(isSaveData) ? _ctx.$t("continue_free_practice") : _ctx.$t("free_practice")), 1),
                          createVNode(_component_IconStreamlineColorPenDrawFlat, { class: "text-xl" })
                        ])
                      ]),
                      _: 1
                    }, 8, ["class", "type", "loading", "onClick"])
                  ])
                ], 2)
              ]),
              createVNode("div", { class: "card flex flex-col" }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("my_dictionaries")), 1),
                  createVNode("div", { class: "flex gap-4 items-center" }, [
                    unref(selectIds).length ? (openBlock(), createBlock(PopConfirm, {
                      key: 0,
                      title: "\u786E\u8BA4\u5220\u9664\u6240\u6709\u9009\u4E2D\u8BCD\u5178\uFF1F",
                      onConfirm: handleBatchDel
                    }, {
                      default: withCtx(() => [
                        createVNode(BaseIcon, {
                          class: "del",
                          title: _ctx.$t("delete")
                        }, {
                          default: withCtx(() => [
                            createVNode(DeleteIcon)
                          ]),
                          _: 1
                        }, 8, ["title"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(store).word.bookList.length > 3 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "color-link cursor-pointer",
                      onClick: () => {
                        isRef(isManageDict) ? isManageDict.value = !unref(isManageDict) : isManageDict = !unref(isManageDict);
                        isRef(selectIds) ? selectIds.value = [] : selectIds = [];
                      }
                    }, toDisplayString(unref(isManageDict) ? _ctx.$t("cancel") : _ctx.$t("manage_dict")), 9, ["onClick"])) : createCommentVNode("", true),
                    createVNode("div", {
                      class: "color-link cursor-pointer",
                      onClick: ($event) => unref(nav)("/dict", { isAdd: true })
                    }, toDisplayString(_ctx.$t("create_personal_dict")), 9, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "flex gap-4 flex-wrap mt-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(store).word.bookList, (item, j) => {
                    return openBlock(), createBlock(Book, {
                      "is-add": false,
                      quantifier: "\u8BCD",
                      item,
                      checked: unref(selectIds).includes(item.id),
                      onCheck: () => toggleSelect(item),
                      "show-checkbox": unref(isManageDict) && j >= 3,
                      onClick: ($event) => goDictDetail(item)
                    }, null, 8, ["item", "checked", "onCheck", "show-checkbox", "onClick"]);
                  }), 256)),
                  createVNode(Book, {
                    "is-add": true,
                    onClick: ($event) => unref(router).push("/dict-list")
                  }, null, 8, ["onClick"])
                ])
              ]),
              withDirectives((openBlock(), createBlock("div", { class: "card flex flex-col overflow-hidden" }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("recommend")), 1),
                  createVNode("div", { class: "flex gap-4 items-center" }, [
                    createVNode("div", {
                      class: "color-link cursor-pointer",
                      onClick: ($event) => unref(router).push("/dict-list")
                    }, toDisplayString(_ctx.$t("more")), 9, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "flex gap-4 flex-wrap mt-4 min-h-50" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(recommendDictList), (item, j) => {
                    return openBlock(), createBlock(Book, {
                      "is-add": false,
                      quantifier: "\u8BCD",
                      item,
                      onClick: ($event) => goDictDetail(item)
                    }, null, 8, ["item", "onClick"]);
                  }), 256))
                ])
              ])), [
                [_directive_loading, unref(isFetching)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PracticeSettingDialog, {
        "show-left-option": false,
        modelValue: unref(showPracticeSettingDialog),
        "onUpdate:modelValue": ($event) => isRef(showPracticeSettingDialog) ? showPracticeSettingDialog.value = $event : showPracticeSettingDialog = $event,
        onOk: savePracticeSetting
      }, null, _parent));
      _push(ssrRenderComponent(ChangeLastPracticeIndexDialog, {
        modelValue: unref(showChangeLastPracticeIndexDialog),
        "onUpdate:modelValue": ($event) => isRef(showChangeLastPracticeIndexDialog) ? showChangeLastPracticeIndexDialog.value = $event : showChangeLastPracticeIndexDialog = $event,
        onOk: saveLastPracticeIndex
      }, null, _parent));
      _push(ssrRenderComponent(PracticeWordListDialog, {
        data: unref(currentStudy),
        modelValue: unref(showPracticeWordListDialog),
        "onUpdate:modelValue": ($event) => isRef(showPracticeWordListDialog) ? showPracticeWordListDialog.value = $event : showPracticeWordListDialog = $event
      }, null, _parent));
      _push(ssrRenderComponent(ShufflePracticeSettingDialog, {
        modelValue: unref(showShufflePracticeSettingDialog),
        "onUpdate:modelValue": ($event) => isRef(showShufflePracticeSettingDialog) ? showShufflePracticeSettingDialog.value = $event : showShufflePracticeSettingDialog = $event,
        onOk: onShufflePracticeSettingOk
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(words)/words.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const words = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3bb44370"]]);

export { words as default };
//# sourceMappingURL=words-DLhd6kKW.mjs.map
