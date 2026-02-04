import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, ref, computed, mergeProps, isRef, unref, withCtx, createVNode, useSSRContext, createBlock, toDisplayString, createCommentVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { B as BaseIcon, a as useRuntimeStore, E as getDefaultArticle, d as cloneDeep, T as Toast, l as loadJsLib } from "./BaseIcon-Cnj57dgy.js";
import { _ as __unplugin_components_0 } from "./search24-regular-Cw07GsNM.js";
import { D as DeleteIcon } from "./DeleteIcon-DU4Q4Alm.js";
import { B as BaseInput } from "./BaseInput-mlIHP8lZ.js";
import { h as _export_sfc } from "../server.mjs";
import "./eventBus-C4Xc_Jqv.js";
import { M as MessageBox } from "./MessageBox-DbYOvJFb.js";
import { nanoid } from "nanoid";
import { E as EditArticle, s as syncBookInMyStudyList } from "./EditArticle-CDTYchLT.js";
import { B as BackIcon } from "./BackIcon-D_XswP1e.js";
import { M as MiniDialog } from "./MiniDialog-DIRP4Q9a.js";
import { L as LIB_JS_URL } from "./env-CUoXYOyW.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "pinia";
import "idb-keyval";
import "axios";
import "vue-router";
import "dayjs";
import "dayjs/plugin/duration.js";
import "./eye16-regular-Cm9O3Lp0.js";
import "./event-qcx2F2JA.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
import "mitt";
import "./Dialog-BoKDmA_Y.js";
import "./checkmark-circle16-regular-BfJF9NXt.js";
import "./play20-regular-ozWzgLyX.js";
import "./question-circle20-regular-ixBvu_Z4.js";
import "./settings20-regular-fog7odRI.js";
import "./Textarea-Ca12-GD2.js";
import "./chevron-left20-filled-B_9PTvDy.js";
import "md5";
import "./interval-CYUoNYlE.js";
import "./sound-fV5MruVn.js";
import "./Empty-DqqzidIv.js";
import "./NuxtImg-BgeLVH9C.js";
import "string-comparison";
import "copy-to-clipboard";
import "./InputNumber-CwEqYfu9.js";
import "./ArticleAudio-HKnHxiX1.js";
import "./volume-low-D-Q_rQNL.js";
import "./chevron-left28-filled-DoP3x3Jo.js";
import "@floating-ui/dom";
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10.354 2.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L9.5 3.707V7.5a.5.5 0 0 0 1 0V3.707l1.646 1.647a.5.5 0 0 0 .708-.708zm-8.208 7.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L3.707 10.5H7.5a.5.5 0 0 0 0-1H3.707l1.647-1.646a.5.5 0 1 0-.708-.708zM10 18a.5.5 0 0 1-.354-.146l-2.5-2.5a.5.5 0 0 1 .708-.708L9.5 16.293V12.5a.5.5 0 0 1 1 0v3.793l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5A.5.5 0 0 1 10 18m7.854-7.646a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L16.293 9.5H12.5a.5.5 0 0 0 0 1h3.793l-1.647 1.646a.5.5 0 0 0 .708.708z"
    }, null, -1)
  ])]);
}
const __unplugin_components_1 = markRaw({ name: "fluent-arrow-move20-regular", render });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    list: null,
    selectItem: null
  },
  emits: ["selectItem", "delSelectItem", "update:searchKey", "update:list"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    let dragItem = ref({ id: "" });
    let searchKey = ref("");
    let draggable = ref(false);
    let localList = computed({
      get() {
        if (searchKey.value) {
          return props.list.filter((item) => {
            return searchKey.value.toLowerCase().split(" ").filter((v) => v).some((value) => {
              return item.title.toLowerCase().includes(value) || item.titleTranslate.toLowerCase().includes(value);
            });
          });
        } else {
          return props.list;
        }
      },
      set(newValue) {
        emit("update:list", newValue);
      }
    });
    function delItem(item) {
      if (item.id === props.selectItem.id) {
        emit("delSelectItem");
      }
      let rIndex = props.list.findIndex((v) => v.id === item.id);
      if (rIndex > -1) {
        localList.value.splice(rIndex, 1);
        localList.value = localList.value;
      }
    }
    let el = ref();
    function scrollBottom() {
      el.value.scrollTo({
        top: el.value.scrollHeight,
        left: 0,
        behavior: "smooth"
      });
    }
    __expose({ scrollBottom });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentSearch24Regular = __unplugin_components_0;
      const _component_IconFluentArrowMove20Regular = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "list-wrapper",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-a55ab5a2><div class="search" data-v-a55ab5a2>`);
      _push(ssrRenderComponent(BaseInput, {
        clearable: "",
        modelValue: unref(searchKey),
        "onUpdate:modelValue": ($event) => isRef(searchKey) ? searchKey.value = $event : searchKey = $event
      }, {
        subfix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentSearch24Regular, { class: "text-lg text-gray" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconFluentSearch24Regular, { class: "text-lg text-gray" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div${ssrRenderAttrs({
        name: "drag",
        class: "space-y-3"
      })} data-v-a55ab5a2>`);
      ssrRenderList(unref(localList), (item, index) => {
        _push(`<div class="${ssrRenderClass([[
          __props.selectItem.id === item.id && "active",
          unref(draggable) && "draggable",
          unref(dragItem).id === item.id && "active"
        ], "common-list-item"])}"${ssrRenderAttr("draggable", unref(draggable))} data-v-a55ab5a2><div class="left" data-v-a55ab5a2>`);
        ssrRenderSlot(_ctx.$slots, "default", {
          item,
          index
        }, null, _push, _parent);
        _push(`</div><div class="right" data-v-a55ab5a2>`);
        _push(ssrRenderComponent(BaseIcon, {
          onClick: ($event) => delItem(item),
          title: _ctx.$t("delete")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(DeleteIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(DeleteIcon)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div data-v-a55ab5a2>`);
        _push(ssrRenderComponent(BaseIcon, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconFluentArrowMove20Regular, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconFluentArrowMove20Regular)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/List.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const List = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-a55ab5a2"]]), { __name: "List" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "batch-edit-article",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeStore = useRuntimeStore();
    let article = ref(getDefaultArticle());
    let editArticleRef = ref();
    let listEl = ref();
    async function selectArticle(item) {
      let r = await checkDataChange();
      if (r) {
        article.value = cloneDeep(item);
      }
    }
    function checkDataChange() {
      return new Promise((resolve) => {
        let editArticle = editArticleRef.value.getEditArticle();
        if (editArticle.id !== "-1") {
          editArticle.title = editArticle.title.trim();
          editArticle.titleTranslate = editArticle.titleTranslate.trim();
          editArticle.text = editArticle.text.trim();
          editArticle.textTranslate = editArticle.textTranslate.trim();
          if (editArticle.title !== article.value.title || editArticle.titleTranslate !== article.value.titleTranslate || editArticle.text !== article.value.text || editArticle.textTranslate !== article.value.textTranslate) {
            return MessageBox.confirm(
              "检测到数据有变动，是否保存？",
              "提示",
              async () => {
                let r = await editArticleRef.value.save("save");
                if (r) resolve(true);
              },
              () => resolve(true)
            );
          }
        } else {
          if (editArticle.title.trim() && editArticle.text.trim()) {
            return MessageBox.confirm(
              "检测到数据有变动，是否保存？",
              "提示",
              async () => {
                let r = await editArticleRef.value.save("save");
                if (r) resolve(true);
              },
              () => resolve(true)
            );
          }
        }
        resolve(true);
      });
    }
    async function add() {
      let r = await checkDataChange();
      if (r) {
        article.value = getDefaultArticle();
      }
    }
    function saveArticle(val) {
      if (val.id) {
        let rIndex = runtimeStore.editDict.articles.findIndex((v) => v.id === val.id);
        if (rIndex > -1) {
          runtimeStore.editDict.articles[rIndex] = cloneDeep(val);
        }
      } else {
        let has = runtimeStore.editDict.articles.find((item) => item.title === val.title);
        if (has) {
          Toast.error("已存在同名文章！");
          return false;
        }
        val.id = nanoid(6);
        runtimeStore.editDict.articles.push(val);
        setTimeout(() => {
          listEl.value.scrollBottom();
        });
      }
      article.value = cloneDeep(val);
      Toast.success("保存成功！");
      syncBookInMyStudyList();
      return true;
    }
    function saveAndNext(val) {
      if (saveArticle(val)) {
        add();
      }
    }
    let showExport = ref(false);
    let exportLoading = ref(false);
    let importLoading = ref(false);
    async function exportData(val) {
      exportLoading.value = true;
      const XLSX = await loadJsLib("XLSX", LIB_JS_URL.XLSX);
      const { type, data } = val;
      let list = [];
      let filename = "";
      if (type === "item") {
        if (!data.id) {
          return Toast.error("请选择文章");
        }
        list = [data];
        filename = runtimeStore.editDict.name + `-${data.title}`;
      } else {
        list = runtimeStore.editDict.articles;
        filename = runtimeStore.editDict.name;
      }
      let wb = XLSX.utils.book_new();
      let sheetData = list.map((v) => {
        return {
          原文标题: v.title,
          原文正文: v.text,
          译文标题: v.titleTranslate,
          译文正文: v.textTranslate,
          音频地址: v.audioSrc
        };
      });
      wb.Sheets["Sheet1"] = XLSX.utils.json_to_sheet(sheetData);
      wb.SheetNames = ["Sheet1"];
      XLSX.writeFile(wb, `${filename}.xlsx`);
      Toast.success(filename + " 导出成功！");
      showExport.value = false;
      exportLoading.value = false;
    }
    function updateList(e) {
      runtimeStore.editDict.articles = e;
      syncBookInMyStudyList();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "add-article" }, _attrs))} data-v-73f1e089><div class="aslide" data-v-73f1e089><header class="flex gap-2 items-center" data-v-73f1e089>`);
      _push(ssrRenderComponent(BackIcon, null, null, _parent));
      _push(`<div class="text-xl" data-v-73f1e089>${ssrInterpolate(unref(runtimeStore).editDict.name)}</div></header>`);
      _push(ssrRenderComponent(List, {
        ref_key: "listEl",
        ref: listEl,
        list: unref(runtimeStore).editDict.articles,
        "onUpdate:list": updateList,
        "select-item": unref(article),
        onDelSelectItem: ($event) => isRef(article) ? article.value = unref(getDefaultArticle)() : article = unref(getDefaultArticle)(),
        onSelectItem: selectArticle
      }, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-73f1e089${_scopeId}><div class="name" data-v-73f1e089${_scopeId}>`);
            if (index != void 0) {
              _push2(`<span class="text-sm text-gray-500" data-v-73f1e089${_scopeId}>${ssrInterpolate(index + 1)}. </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(item.title)}</div><div class="translate-name" data-v-73f1e089${_scopeId}>${ssrInterpolate(`   ${item.titleTranslate}`)}</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "name" }, [
                  index != void 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-sm text-gray-500"
                  }, toDisplayString(index + 1) + ". ", 1)) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(item.title), 1)
                ]),
                createVNode("div", { class: "translate-name" }, toDisplayString(`   ${item.titleTranslate}`), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(article).title) {
        _push(`<div class="add" data-v-73f1e089>正在添加新文章...</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="footer" data-v-73f1e089><div class="import" data-v-73f1e089>`);
      _push(ssrRenderComponent(BaseButton, { loading: unref(importLoading) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`导入`);
          } else {
            return [
              createTextVNode("导入")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" data-v-73f1e089></div><div class="export" style="${ssrRenderStyle({ "position": "relative" })}" data-v-73f1e089>`);
      _push(ssrRenderComponent(BaseButton, {
        onClick: ($event) => isRef(showExport) ? showExport.value = true : showExport = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`导出`);
          } else {
            return [
              createTextVNode("导出")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MiniDialog, {
        modelValue: unref(showExport),
        "onUpdate:modelValue": ($event) => isRef(showExport) ? showExport.value = $event : showExport = $event,
        style: { "width": "8rem", "bottom": "calc(100% + 1rem)", "top": "unset" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mini-row-title" data-v-73f1e089${_scopeId}>导出选项</div><div class="flex" data-v-73f1e089${_scopeId}>`);
            _push2(ssrRenderComponent(BaseButton, {
              loading: unref(exportLoading),
              onClick: ($event) => exportData({ type: "all" })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`全部`);
                } else {
                  return [
                    createTextVNode("全部")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseButton, {
              loading: unref(exportLoading),
              disabled: !unref(article).id,
              onClick: ($event) => exportData({ type: "item", data: unref(article) })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`当前 `);
                } else {
                  return [
                    createTextVNode("当前 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mini-row-title" }, "导出选项"),
              createVNode("div", { class: "flex" }, [
                createVNode(BaseButton, {
                  loading: unref(exportLoading),
                  onClick: ($event) => exportData({ type: "all" })
                }, {
                  default: withCtx(() => [
                    createTextVNode("全部")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"]),
                createVNode(BaseButton, {
                  loading: unref(exportLoading),
                  disabled: !unref(article).id,
                  onClick: ($event) => exportData({ type: "item", data: unref(article) })
                }, {
                  default: withCtx(() => [
                    createTextVNode("当前 ")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(BaseButton, { onClick: add }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`新增`);
          } else {
            return [
              createTextVNode("新增")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(EditArticle, {
        ref_key: "editArticleRef",
        ref: editArticleRef,
        type: "batch",
        onSave: saveArticle,
        onSaveAndNext: saveAndNext,
        article: unref(article)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(articles)/batch-edit-article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const batchEditArticle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73f1e089"]]);
export {
  batchEditArticle as default
};
//# sourceMappingURL=batch-edit-article-ChI7QISp.js.map
