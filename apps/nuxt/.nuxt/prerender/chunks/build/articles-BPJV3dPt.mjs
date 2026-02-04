import { _ as __unplugin_components_0 } from './arrow-circle-right16-regular-CmXRLB6P.mjs';
import { defineComponent, ref, watch, computed, resolveDirective, withCtx, unref, mergeProps, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, createCommentVNode, Fragment, renderList, withDirectives, isRef, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrGetDirectiveProps } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { u as useNav, c as useBaseStore, b as useSettingStore, a as useRuntimeStore, E as myDictList, o as _getDictDataByUrl, v as msToHourMinute, H as total, A as resourceWrap, B as BaseIcon, g as getDefaultDict, T as Toast } from './BaseIcon-Cnj57dgy.mjs';
import { P as Progress } from './Progress-C93deg99.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { B as BasePage } from './BasePage-DMJ6cvww.mjs';
import { B as Book } from './Book-DpTMFDdY.mjs';
import { D as DeleteIcon } from './DeleteIcon-DU4Q4Alm.mjs';
import { P as PopConfirm } from './PopConfirm-BsYq1Crk.mjs';
import { A as APP_NAME, e as AppEnv, i as DictType, r as DICT_LIST } from './env-CUoXYOyW.mjs';
import { b as getPracticeArticleCache } from './cache-C4S9Fl6v.mjs';
import { useFetch } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@vueuse/core/dist/index.js';
import dayjs from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import isBetween from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/isBetween.js';
import isoWeek from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/isoWeek.js';
import { useRouter } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';
import { h as _export_sfc, j as useHead } from './server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/axios/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/duration.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import './NuxtImg-BgeLVH9C.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs';
import './Checkbox-ChlucEKY.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "articles",
  __ssrInlineRender: true,
  setup(__props) {
    dayjs.extend(isoWeek);
    dayjs.extend(isBetween);
    useHead({
      title: APP_NAME + " \u6587\u7AE0"
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
      () => {
        var _a;
        return (_a = store == null ? void 0 : store.sbook) == null ? void 0 : _a.id;
      },
      (n) => {
      },
      { immediate: true }
    );
    function startStudy() {
      var _a, _b;
      if (base.sbook.id) {
        if (!base.sbook.articles.length) {
          return Toast.warning("\u6CA1\u6709\u6587\u7AE0\u53EF\u5B66\u4E60\uFF01");
        }
        (_a = (void 0).umami) == null ? void 0 : _a.track("startStudyArticle", {
          name: base.sbook.name,
          custom: base.sbook.custom,
          complete: base.sbook.complete,
          s: `name:${base.sbook.name},index:${base.sbook.lastLearnIndex},title:${base.sbook.articles[base.sbook.lastLearnIndex].title}`
        });
        nav("/practice-articles/" + store.sbook.id);
      } else {
        (_b = (void 0).umami) == null ? void 0 : _b.track("no-book");
        Toast.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u672C\u4E66\u7C4D");
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
      Toast.success("\u5220\u9664\u6210\u529F\uFF01");
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
      var _a;
      if ((_a = base.sbook.statistics) == null ? void 0 : _a.length) {
        return msToHourMinute(total(base.sbook.statistics, "spend"));
      }
      return 0;
    });
    const todayTotalSpend = computed(() => {
      var _a;
      if ((_a = base.sbook.statistics) == null ? void 0 : _a.length) {
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
      var _a;
      if ((_a = base.sbook.statistics) == null ? void 0 : _a.length) {
        return new Set(base.sbook.statistics.map((v) => dayjs(v.startDate).format("YYYY-MM-DD"))).size;
      }
      return 0;
    });
    const weekList = computed(() => {
      var _a;
      const list = Array(7).fill(false);
      const startOfWeek = dayjs().startOf("isoWeek");
      const endOfWeek = dayjs().endOf("isoWeek");
      (_a = store.sbook.statistics) == null ? void 0 : _a.forEach((item) => {
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
              _push2(`<div class="mb-4" data-v-2243a901${_scopeId}> \u65B0\u57DF\u540D\u5DF2\u542F\u7528\uFF0C\u540E\u7EED\u8BF7\u8BBF\u95EE <a href="https://typewords.cc/words?from_old_site=1" data-v-2243a901${_scopeId}>https://typewords.cc</a> \u5F53\u524D 2study.top \u57DF\u540D\u5C06\u5728\u4E0D\u4E45\u540E\u505C\u6B62\u4F7F\u7528 </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="card flex flex-col md:flex-row justify-between gap-space p-4 md:p-6" data-v-2243a901${_scopeId}><div class="" data-v-2243a901${_scopeId}>`);
            if (unref(base).sbook.id) {
              _push2(ssrRenderComponent(Book, {
                "is-add": false,
                quantifier: "\u7BC7",
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
              format: () => {
                var _a, _b;
                return `${((_a = unref(base).sbook) == null ? void 0 : _a.lastLearnIndex) || 0}/${((_b = unref(base).sbook) == null ? void 0 : _b.length) || 0}\u7BC7`;
              },
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
                title: "\u786E\u8BA4\u5220\u9664\u6240\u6709\u9009\u4E2D\u4E66\u7C4D\uFF1F",
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
                quantifier: "\u7BC7",
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
                quantifier: "\u7BC7",
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
                createTextVNode(" \u65B0\u57DF\u540D\u5DF2\u542F\u7528\uFF0C\u540E\u7EED\u8BF7\u8BBF\u95EE "),
                createVNode("a", { href: "https://typewords.cc/words?from_old_site=1" }, "https://typewords.cc"),
                createTextVNode(" \u5F53\u524D 2study.top \u57DF\u540D\u5C06\u5728\u4E0D\u4E45\u540E\u505C\u6B62\u4F7F\u7528 ")
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "card flex flex-col md:flex-row justify-between gap-space p-4 md:p-6" }, [
                createVNode("div", { class: "" }, [
                  unref(base).sbook.id ? (openBlock(), createBlock(Book, {
                    key: 0,
                    "is-add": false,
                    quantifier: "\u7BC7",
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
                      format: () => {
                        var _a, _b;
                        return `${((_a = unref(base).sbook) == null ? void 0 : _a.lastLearnIndex) || 0}/${((_b = unref(base).sbook) == null ? void 0 : _b.length) || 0}\u7BC7`;
                      },
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
                      title: "\u786E\u8BA4\u5220\u9664\u6240\u6709\u9009\u4E2D\u4E66\u7C4D\uFF1F",
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
                      quantifier: "\u7BC7",
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
                      quantifier: "\u7BC7",
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

export { articles as default };
//# sourceMappingURL=articles-BPJV3dPt.mjs.map
