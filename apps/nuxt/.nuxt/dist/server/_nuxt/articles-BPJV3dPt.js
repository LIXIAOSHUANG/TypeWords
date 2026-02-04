import { _ as __unplugin_components_0 } from "./arrow-circle-right16-regular-CmXRLB6P.js";
import { defineComponent, ref, watch, computed, resolveDirective, withCtx, unref, mergeProps, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, createCommentVNode, Fragment, renderList, withDirectives, isRef, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrGetDirectiveProps } from "vue/server-renderer";
import { u as useNav, c as useBaseStore, b as useSettingStore, a as useRuntimeStore, v as myDictList, p as _getDictDataByUrl, C as msToHourMinute, D as total, w as resourceWrap, B as BaseIcon, T as Toast, g as getDefaultDict } from "./BaseIcon-Cnj57dgy.js";
import { P as Progress } from "./Progress-C93deg99.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { B as Book } from "./Book-DpTMFDdY.js";
import { D as DeleteIcon } from "./DeleteIcon-DU4Q4Alm.js";
import { P as PopConfirm } from "./PopConfirm-BsYq1Crk.js";
import { e as AppEnv, A as APP_NAME, l as DictType, i as DICT_LIST } from "./env-CUoXYOyW.js";
import { b as getPracticeArticleCache } from "./cache-C4S9Fl6v.js";
import { useFetch } from "@vueuse/core";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween.js";
import isoWeek from "dayjs/plugin/isoWeek.js";
import { useRouter } from "vue-router";
import { j as useHead, h as _export_sfc } from "../server.mjs";
import "pinia";
import "idb-keyval";
import "axios";
import "dayjs/plugin/duration.js";
import "nanoid";
import "./NuxtImg-BgeLVH9C.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
import "./Checkbox-ChlucEKY.js";
import "@floating-ui/dom";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "articles",
  __ssrInlineRender: true,
  setup(__props) {
    dayjs.extend(isoWeek);
    dayjs.extend(isBetween);
    useHead({
      title: APP_NAME + " 文章"
    });
    const { nav } = useNav();
    const base = useBaseStore();
    const store = useBaseStore();
    useSettingStore();
    const router = useRouter();
    const runtimeStore = useRuntimeStore();
    let isSaveData = ref(false);
    watch(
      () => store.load,
      (n) => {
        if (n) init();
      },
      { immediate: true }
    );
    async function init() {
      if (AppEnv.CAN_REQUEST) {
        let res = await myDictList({ type: "article" });
        if (res.success) {
          store.setState(Object.assign(store.$state, res.data));
        }
      }
      if (store.article.studyIndex >= 1) {
        if (!store.sbook.custom && !store.sbook.articles.length) {
          store.article.bookList[store.article.studyIndex] = await _getDictDataByUrl(store.sbook, DictType.article);
        }
      }
      let d = getPracticeArticleCache();
      if (d) {
        isSaveData.value = true;
      }
    }
    watch(
      () => store?.sbook?.id,
      (n) => {
      },
      { immediate: true }
    );
    function startStudy() {
      if (base.sbook.id) {
        if (!base.sbook.articles.length) {
          return Toast.warning("没有文章可学习！");
        }
        (void 0).umami?.track("startStudyArticle", {
          name: base.sbook.name,
          custom: base.sbook.custom,
          complete: base.sbook.complete,
          s: `name:${base.sbook.name},index:${base.sbook.lastLearnIndex},title:${base.sbook.articles[base.sbook.lastLearnIndex].title}`
        });
        nav("/practice-articles/" + store.sbook.id);
      } else {
        (void 0).umami?.track("no-book");
        Toast.warning("请先选择一本书籍");
      }
    }
    let isMultiple = ref(false);
    let selectIds = ref([]);
    function handleBatchDel() {
      selectIds.value.forEach((id) => {
        let r = base.article.bookList.findIndex((v) => v.id === id);
        if (r !== -1) {
          if (base.article.studyIndex === r) {
            base.article.studyIndex = -1;
          }
          if (base.article.studyIndex > r) {
            base.article.studyIndex--;
          }
          base.article.bookList.splice(r, 1);
        }
      });
      selectIds.value = [];
      Toast.success("删除成功！");
    }
    function toggleSelect(item) {
      let rIndex = selectIds.value.findIndex((v) => v === item.id);
      if (rIndex > -1) {
        selectIds.value.splice(rIndex, 1);
      } else {
        selectIds.value.push(item.id);
      }
    }
    async function goBookDetail(val) {
      runtimeStore.editDict = getDefaultDict(val);
      nav("/book/" + val.id);
    }
    const totalSpend = computed(() => {
      if (base.sbook.statistics?.length) {
        return msToHourMinute(total(base.sbook.statistics, "spend"));
      }
      return 0;
    });
    const todayTotalSpend = computed(() => {
      if (base.sbook.statistics?.length) {
        return msToHourMinute(
          total(
            base.sbook.statistics.filter((v) => dayjs(v.startDate).isSame(dayjs(), "day")),
            "spend"
          )
        );
      }
      return 0;
    });
    const totalDay = computed(() => {
      if (base.sbook.statistics?.length) {
        return new Set(base.sbook.statistics.map((v) => dayjs(v.startDate).format("YYYY-MM-DD"))).size;
      }
      return 0;
    });
    const weekList = computed(() => {
      const list = Array(7).fill(false);
      const startOfWeek = dayjs().startOf("isoWeek");
      const endOfWeek = dayjs().endOf("isoWeek");
      store.sbook.statistics?.forEach((item) => {
        const date = dayjs(item.startDate);
        if (date.isBetween(startOfWeek, endOfWeek, null, "[]")) {
          let idx = date.day();
          if (idx === 0) {
            idx = 6;
          } else {
            idx = idx - 1;
          }
          list[idx] = true;
        }
      });
      return list;
    });
    const { data: recommendBookList, isFetching } = useFetch(resourceWrap(DICT_LIST.ARTICLE.RECOMMENDED)).json();
    let isNewHost = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentArrowCircleRight16Regular = __unplugin_components_0;
      const _directive_opacity = resolveDirective("opacity");
      const _directive_loading = resolveDirective("loading");
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(isNewHost)) {
              _push2(`<div class="mb-4" data-v-2243a901${_scopeId}> 新域名已启用，后续请访问 <a href="https://typewords.cc/words?from_old_site=1" data-v-2243a901${_scopeId}>https://typewords.cc</a> 当前 2study.top 域名将在不久后停止使用 </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="card flex flex-col md:flex-row justify-between gap-space p-4 md:p-6" data-v-2243a901${_scopeId}><div class="" data-v-2243a901${_scopeId}>`);
            if (unref(base).sbook.id) {
              _push2(ssrRenderComponent(Book, {
                "is-add": false,
                quantifier: "篇",
                item: unref(base).sbook,
                "show-progress": false,
                onClick: ($event) => goBookDetail(unref(base).sbook)
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(Book, {
                "is-add": true,
                onClick: ($event) => unref(router).push("/book-list")
              }, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="flex-1" data-v-2243a901${_scopeId}><div class="flex justify-between items-start" data-v-2243a901${_scopeId}><div class="flex items-center min-w-0" data-v-2243a901${_scopeId}><div class="title mr-4 truncate" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("this_week_record"))}</div><div class="flex gap-4 color-gray" data-v-2243a901${_scopeId}><!--[-->`);
            ssrRenderList(weekList.value, (item, i) => {
              _push2(`<div class="${ssrRenderClass([item ? "bg-[#409eff] color-white" : "bg-gray-200", "w-6 h-6 md:w-8 md:h-8 rounded-md center text-sm md:text-base"])}" data-v-2243a901${_scopeId}>${ssrInterpolate(i + 1)}</div>`);
            });
            _push2(`<!--]--></div></div><div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 items-center" }, ssrGetDirectiveProps(_ctx, _directive_opacity, unref(base).sbook.id)))} data-v-2243a901${_scopeId}><div class="color-link cursor-pointer" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("change_book"))}</div></div></div><div class="flex flex-col sm:flex-row gap-3 items-center mt-3 gap-space w-full" data-v-2243a901${_scopeId}><div class="w-full sm:flex-1 rounded-xl p-4 box-border relative bg-[var(--bg-history)] border border-gray-200" data-v-2243a901${_scopeId}><div class="text-[#409eff] text-xl font-bold" data-v-2243a901${_scopeId}>${ssrInterpolate(todayTotalSpend.value)}</div><div class="text-gray-500" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("today_study_time"))}</div></div><div class="w-full sm:flex-1 rounded-xl p-4 box-border relative bg-[var(--bg-history)] border border-gray-200" data-v-2243a901${_scopeId}><div class="text-[#409eff] text-xl font-bold" data-v-2243a901${_scopeId}>${ssrInterpolate(totalDay.value)}</div><div class="text-gray-500" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("total_study_days"))}</div></div><div class="w-full sm:flex-1 rounded-xl p-4 box-border relative bg-[var(--bg-history)] border border-gray-200" data-v-2243a901${_scopeId}><div class="text-[#409eff] text-xl font-bold" data-v-2243a901${_scopeId}>${ssrInterpolate(totalSpend.value)}</div><div class="text-gray-500" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("total_study_time"))}</div></div></div><div class="flex gap-3 mt-3" data-v-2243a901${_scopeId}>`);
            _push2(ssrRenderComponent(Progress, {
              class: "w-full md:w-auto",
              size: "large",
              percentage: unref(base).currentBookProgress,
              format: () => `${unref(base).sbook?.lastLearnIndex || 0}/${unref(base).sbook?.length || 0}篇`,
              "show-text": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseButton, {
              size: "large",
              class: "w-full md:w-auto",
              onClick: startStudy,
              disabled: !unref(base).sbook.name
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 justify-center w-full" data-v-2243a901${_scopeId2}><span class="line-height-[2]" data-v-2243a901${_scopeId2}>${ssrInterpolate(unref(isSaveData) ? _ctx.$t("continue_learning") : _ctx.$t("start_learning"))}</span>`);
                  _push3(ssrRenderComponent(_component_IconFluentArrowCircleRight16Regular, { class: "text-xl" }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2 justify-center w-full" }, [
                      createVNode("span", { class: "line-height-[2]" }, toDisplayString(unref(isSaveData) ? _ctx.$t("continue_learning") : _ctx.$t("start_learning")), 1),
                      createVNode(_component_IconFluentArrowCircleRight16Regular, { class: "text-xl" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="card flex flex-col" data-v-2243a901${_scopeId}><div class="flex justify-between" data-v-2243a901${_scopeId}><div class="title" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("my_books"))}</div><div class="flex gap-4 items-center" data-v-2243a901${_scopeId}>`);
            if (unref(selectIds).length) {
              _push2(ssrRenderComponent(PopConfirm, {
                title: "确认删除所有选中书籍？",
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
            if (unref(base).article.bookList.length > 1) {
              _push2(`<div class="color-link cursor-pointer" data-v-2243a901${_scopeId}>${ssrInterpolate(unref(isMultiple) ? _ctx.$t("cancel") : _ctx.$t("manage_books"))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="color-link cursor-pointer" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("create_personal_book"))}</div></div></div><div class="flex gap-4 flex-wrap mt-4" data-v-2243a901${_scopeId}><!--[-->`);
            ssrRenderList(unref(base).article.bookList, (item, j) => {
              _push2(ssrRenderComponent(Book, {
                "is-add": false,
                "is-user": true,
                quantifier: "篇",
                item,
                checked: unref(selectIds).includes(item.id),
                onCheck: () => toggleSelect(item),
                "show-checkbox": unref(isMultiple) && j >= 1,
                onClick: ($event) => goBookDetail(item)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(Book, {
              "is-add": true,
              onClick: ($event) => unref(router).push("/book-list")
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "card flex flex-col min-h-50" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isFetching))))} data-v-2243a901${_scopeId}><div class="flex justify-between" data-v-2243a901${_scopeId}><div class="title" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("recommend"))}</div><div class="flex gap-4 items-center" data-v-2243a901${_scopeId}><div class="color-link cursor-pointer" data-v-2243a901${_scopeId}>${ssrInterpolate(_ctx.$t("more"))}</div></div></div><div class="flex gap-4 flex-wrap mt-4" data-v-2243a901${_scopeId}><!--[-->`);
            ssrRenderList(unref(recommendBookList), (item, j) => {
              _push2(ssrRenderComponent(Book, {
                "is-add": false,
                quantifier: "篇",
                item,
                onClick: ($event) => goBookDetail(item)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              !unref(isNewHost) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4"
              }, [
                createTextVNode(" 新域名已启用，后续请访问 "),
                createVNode("a", { href: "https://typewords.cc/words?from_old_site=1" }, "https://typewords.cc"),
                createTextVNode(" 当前 2study.top 域名将在不久后停止使用 ")
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "card flex flex-col md:flex-row justify-between gap-space p-4 md:p-6" }, [
                createVNode("div", { class: "" }, [
                  unref(base).sbook.id ? (openBlock(), createBlock(Book, {
                    key: 0,
                    "is-add": false,
                    quantifier: "篇",
                    item: unref(base).sbook,
                    "show-progress": false,
                    onClick: ($event) => goBookDetail(unref(base).sbook)
                  }, null, 8, ["item", "onClick"])) : (openBlock(), createBlock(Book, {
                    key: 1,
                    "is-add": true,
                    onClick: ($event) => unref(router).push("/book-list")
                  }, null, 8, ["onClick"]))
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex justify-between items-start" }, [
                    createVNode("div", { class: "flex items-center min-w-0" }, [
                      createVNode("div", { class: "title mr-4 truncate" }, toDisplayString(_ctx.$t("this_week_record")), 1),
                      createVNode("div", { class: "flex gap-4 color-gray" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(weekList.value, (item, i) => {
                          return openBlock(), createBlock("div", {
                            class: ["w-6 h-6 md:w-8 md:h-8 rounded-md center text-sm md:text-base", item ? "bg-[#409eff] color-white" : "bg-gray-200"],
                            key: i
                          }, toDisplayString(i + 1), 3);
                        }), 128))
                      ])
                    ]),
                    withDirectives((openBlock(), createBlock("div", { class: "flex gap-4 items-center" }, [
                      createVNode("div", {
                        class: "color-link cursor-pointer",
                        onClick: ($event) => unref(router).push("/book-list")
                      }, toDisplayString(_ctx.$t("change_book")), 9, ["onClick"])
                    ])), [
                      [_directive_opacity, unref(base).sbook.id]
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col sm:flex-row gap-3 items-center mt-3 gap-space w-full" }, [
                    createVNode("div", { class: "w-full sm:flex-1 rounded-xl p-4 box-border relative bg-[var(--bg-history)] border border-gray-200" }, [
                      createVNode("div", { class: "text-[#409eff] text-xl font-bold" }, toDisplayString(todayTotalSpend.value), 1),
                      createVNode("div", { class: "text-gray-500" }, toDisplayString(_ctx.$t("today_study_time")), 1)
                    ]),
                    createVNode("div", { class: "w-full sm:flex-1 rounded-xl p-4 box-border relative bg-[var(--bg-history)] border border-gray-200" }, [
                      createVNode("div", { class: "text-[#409eff] text-xl font-bold" }, toDisplayString(totalDay.value), 1),
                      createVNode("div", { class: "text-gray-500" }, toDisplayString(_ctx.$t("total_study_days")), 1)
                    ]),
                    createVNode("div", { class: "w-full sm:flex-1 rounded-xl p-4 box-border relative bg-[var(--bg-history)] border border-gray-200" }, [
                      createVNode("div", { class: "text-[#409eff] text-xl font-bold" }, toDisplayString(totalSpend.value), 1),
                      createVNode("div", { class: "text-gray-500" }, toDisplayString(_ctx.$t("total_study_time")), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex gap-3 mt-3" }, [
                    createVNode(Progress, {
                      class: "w-full md:w-auto",
                      size: "large",
                      percentage: unref(base).currentBookProgress,
                      format: () => `${unref(base).sbook?.lastLearnIndex || 0}/${unref(base).sbook?.length || 0}篇`,
                      "show-text": true
                    }, null, 8, ["percentage", "format"]),
                    createVNode(BaseButton, {
                      size: "large",
                      class: "w-full md:w-auto",
                      onClick: startStudy,
                      disabled: !unref(base).sbook.name
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2 justify-center w-full" }, [
                          createVNode("span", { class: "line-height-[2]" }, toDisplayString(unref(isSaveData) ? _ctx.$t("continue_learning") : _ctx.$t("start_learning")), 1),
                          createVNode(_component_IconFluentArrowCircleRight16Regular, { class: "text-xl" })
                        ])
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ])
              ]),
              createVNode("div", { class: "card flex flex-col" }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("my_books")), 1),
                  createVNode("div", { class: "flex gap-4 items-center" }, [
                    unref(selectIds).length ? (openBlock(), createBlock(PopConfirm, {
                      key: 0,
                      title: "确认删除所有选中书籍？",
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
                    unref(base).article.bookList.length > 1 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "color-link cursor-pointer",
                      onClick: () => {
                        isRef(isMultiple) ? isMultiple.value = !unref(isMultiple) : isMultiple = !unref(isMultiple);
                        isRef(selectIds) ? selectIds.value = [] : selectIds = [];
                      }
                    }, toDisplayString(unref(isMultiple) ? _ctx.$t("cancel") : _ctx.$t("manage_books")), 9, ["onClick"])) : createCommentVNode("", true),
                    createVNode("div", {
                      class: "color-link cursor-pointer",
                      onClick: ($event) => unref(nav)("/book", { isAdd: true })
                    }, toDisplayString(_ctx.$t("create_personal_book")), 9, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "flex gap-4 flex-wrap mt-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(base).article.bookList, (item, j) => {
                    return openBlock(), createBlock(Book, {
                      "is-add": false,
                      "is-user": true,
                      quantifier: "篇",
                      item,
                      checked: unref(selectIds).includes(item.id),
                      onCheck: () => toggleSelect(item),
                      "show-checkbox": unref(isMultiple) && j >= 1,
                      onClick: ($event) => goBookDetail(item)
                    }, null, 8, ["item", "checked", "onCheck", "show-checkbox", "onClick"]);
                  }), 256)),
                  createVNode(Book, {
                    "is-add": true,
                    onClick: ($event) => unref(router).push("/book-list")
                  }, null, 8, ["onClick"])
                ])
              ]),
              withDirectives((openBlock(), createBlock("div", { class: "card flex flex-col min-h-50" }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("recommend")), 1),
                  createVNode("div", { class: "flex gap-4 items-center" }, [
                    createVNode("div", {
                      class: "color-link cursor-pointer",
                      onClick: ($event) => unref(router).push("/book-list")
                    }, toDisplayString(_ctx.$t("more")), 9, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "flex gap-4 flex-wrap mt-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(recommendBookList), (item, j) => {
                    return openBlock(), createBlock(Book, {
                      "is-add": false,
                      quantifier: "篇",
                      item,
                      onClick: ($event) => goBookDetail(item)
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(articles)/articles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const articles = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2243a901"]]);
export {
  articles as default
};
//# sourceMappingURL=articles-BPJV3dPt.js.map
