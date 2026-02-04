import { h as _export_sfc, g as useI18n, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, unref, useSSRContext, markRaw, openBlock, createElementBlock, createElementVNode, mergeProps, watch, computed, resolveComponent, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, isRef } from "vue";
import { ssrRenderTeleport, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as __unplugin_components_11, a as __unplugin_components_12 } from "./weather-moon16-regular-CzKoL_3H.js";
import { _ as __unplugin_components_10 } from "./translate-jzfWdenW.js";
import { _ as __unplugin_components_7 } from "./home20-regular-BqrUvY-4.js";
import { _ as __unplugin_components_6 } from "./chevron-left20-filled-B_9PTvDy.js";
import { _ as __unplugin_components_5 } from "./question-circle20-regular-ixBvu_Z4.js";
import { _ as __unplugin_components_2 } from "./settings20-regular-fog7odRI.js";
import { _ as __unplugin_components_0, a as __unplugin_components_1 } from "./text-underline-double20-regular-Urqfz4U4.js";
import { b as useSettingStore, c as useBaseStore, a as useRuntimeStore, k as shakeCommonDict, Q as syncSetting, B as BaseIcon } from "./BaseIcon-Cnj57dgy.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { useRouter, useRoute } from "vue-router";
import { a as APP_VERSION, S as SAVE_DICT_KEY, f as DictId, b as LOCAL_FILE_KEY, c as SAVE_SETTING_KEY, e as AppEnv, m as ShortcutKey } from "./env-CUoXYOyW.js";
import { M as MigrateDialog } from "./MigrateDialog-DTKAmkmx.js";
import { u as useTheme } from "./theme-4yK9pI7O.js";
import { u as useUserStore } from "./user-BLvskJR1.js";
import { set, get } from "idb-keyval";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
import "pinia";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "axios";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "@floating-ui/dom";
import "./interval-CYUoNYlE.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IeDialog",
  __ssrInlineRender: true,
  setup(__props) {
    let showIEDialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(showIEDialog)) {
          _push2(`<div class="ie-mask" data-v-290843cb><div class="ie-dialog space-y-4" data-v-290843cb><div class="text-xl font-bold" data-v-290843cb>${ssrInterpolate(_ctx.$t("ie_not_supported"))}</div><div class="text-base" data-v-290843cb>${ssrInterpolate(_ctx.$t("ie_use_modern_browser"))}</div><div class="flex justify-end gap-4" data-v-290843cb><a class="btn" href="https://www.google.cn/chrome/" target="_blank" rel="noreferrer" data-v-290843cb>${ssrInterpolate(_ctx.$t("download_chrome"))}</a><button class="btn-secondary" type="button" data-v-290843cb>${ssrInterpolate(_ctx.$t("i_understand"))}</button></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/IeDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-290843cb"]]), { __name: "IeDialog" });
const _hoisted_1$3 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M4.207 12.267a.75.75 0 0 1 .026-1.06l5.25-5.002a.75.75 0 0 1 1.035 0l5.25 5.001a.75.75 0 0 1-1.034 1.086L10 7.784l-4.734 4.508a.75.75 0 0 1-1.06-.025"
    }, null, -1)
  ])]);
}
const __unplugin_components_9 = markRaw({ name: "fluent-chevron-up20-filled", render: render$3 });
const _hoisted_1$2 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M15.794 7.733a.75.75 0 0 1-.026 1.06l-5.25 5.001a.75.75 0 0 1-1.035 0l-5.25-5a.75.75 0 0 1 1.034-1.087l4.734 4.509l4.733-4.51a.75.75 0 0 1 1.06.027"
    }, null, -1)
  ])]);
}
const __unplugin_components_8 = markRaw({ name: "fluent-chevron-down20-filled", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2zM5 4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm9.793 3H11.5a.5.5 0 0 1-.5-.5V3.207z"
    }, null, -1)
  ])]);
}
const __unplugin_components_4 = markRaw({ name: "fluent-document20-regular", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M17 8.134V5.566C17 4.713 16.296 4 15.4 4H4.6C3.704 4 3 4.713 3 5.566v6.71c0 .853.704 1.566 1.6 1.566h1.6V17h.003l.002-.001l2.167-1.6l-.314 1.254q-.032.128-.046.255l-1.213.895a1.01 1.01 0 0 1-1.4-.199a.98.98 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h10.8C16.836 3 18 4.149 18 5.566V8.69a2.9 2.9 0 0 0-1-.556m-2.193 1.412l-4.83 4.83a2.2 2.2 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.2 2.2 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 1 0-2.645-2.644"
    }, null, -1)
  ])]);
}
const __unplugin_components_3 = markRaw({ name: "fluent-comment-edit20-regular", render });
const _imports_0 = publicAssetsURL("/imgs/logo/logo-text-white.png");
const _imports_1 = publicAssetsURL("/imgs/logo/logo-text-black.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    const settingStore = useSettingStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "center mb-2" }, _attrs))} data-v-1f665f68><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle(unref(settingStore).theme === "dark" ? null : { display: "none" })}" data-v-1f665f68><img${ssrRenderAttr("src", _imports_1)} alt="" style="${ssrRenderStyle(unref(settingStore).theme !== "dark" ? null : { display: "none" })}" data-v-1f665f68></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-1f665f68"]]), { __name: "Logo" });
function useInit() {
  const store = useBaseStore();
  const runtimeStore = useRuntimeStore();
  const settingStore = useSettingStore();
  const userStore = useUserStore();
  let lastAudioFileIdList = [];
  let isInitializing = true;
  watch(store.$state, (n) => {
    console.log("store.$state", store.$state);
    if (isInitializing) return;
    let data = shakeCommonDict(n);
    set(SAVE_DICT_KEY.key, JSON.stringify({ val: data, version: SAVE_DICT_KEY.version }));
    let bookList = data.article.bookList.filter((v) => v.custom || [DictId.articleCollect].includes(v.id));
    let audioFileIdList = [];
    bookList.forEach((v) => {
      v.articles.filter((s) => !s.audioSrc && s.audioFileId).forEach((a) => {
        audioFileIdList.push(a.audioFileId);
      });
    });
    if (audioFileIdList.toString() !== lastAudioFileIdList.toString()) {
      let result = [];
      get(LOCAL_FILE_KEY).then((fileList) => {
        if (fileList && fileList.length > 0) {
          audioFileIdList.forEach((a) => {
            let item = fileList.find((b) => b.id === a);
            item && result.push(item);
          });
          set(LOCAL_FILE_KEY, result);
          lastAudioFileIdList = audioFileIdList;
        }
      });
    }
  });
  watch(
    () => settingStore.$state,
    (n) => {
      if (isInitializing) return;
      set(SAVE_SETTING_KEY.key, JSON.stringify({ val: n, version: SAVE_SETTING_KEY.version }));
      if (AppEnv.CAN_REQUEST) {
        syncSetting(null, settingStore.$state);
      }
    },
    { deep: true }
  );
  async function init() {
    console.log("init");
    isInitializing = true;
    await userStore.init();
    await store.init();
    await settingStore.init();
    store.load = true;
    isInitializing = false;
    if (settingStore.first) {
      set(APP_VERSION.key, APP_VERSION.version);
    } else {
      get(APP_VERSION.key).then((r) => {
        runtimeStore.isNew = r ? APP_VERSION.version > Number(r) : true;
      });
    }
    (void 0).umami?.track("host", { host: (void 0).location.host });
  }
  return init;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { toggleTheme, getTheme } = useTheme();
    useBaseStore();
    const runtimeStore = useRuntimeStore();
    const settingStore = useSettingStore();
    let expand = ref(false);
    const init = useInit();
    function toggleExpand(n) {
      expand.value = n;
      (void 0).documentElement.style.setProperty("--aside-width", n ? "12rem" : "4.5rem");
    }
    watch(() => settingStore.sideExpand, toggleExpand);
    let showTransfer = ref(false);
    const { locales, setLocale } = useI18n();
    const route = useRoute();
    const showIcon = computed(() => {
      return ["/words", "/articles", "/setting", "/help", "/doc", "/feedback"].includes(route.path);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconFluentTextUnderlineDouble20Regular = __unplugin_components_0;
      const _component_IconFluentBookLetter20Regular = __unplugin_components_1;
      const _component_IconFluentSettings20Regular = __unplugin_components_2;
      const _component_IconFluentCommentEdit20Regular = __unplugin_components_3;
      const _component_IconFluentDocument20Regular = __unplugin_components_4;
      const _component_IconFluentQuestionCircle20Regular = __unplugin_components_5;
      const _component_IconFluentChevronLeft20Filled = __unplugin_components_6;
      const _component_IconFluentHome20Regular = __unplugin_components_7;
      const _component_IconFluentChevronDown20Filled = __unplugin_components_8;
      const _component_IconFluentChevronUp20Filled = __unplugin_components_9;
      const _component_IeDialog = __nuxt_component_1;
      const _component_router_view = resolveComponent("router-view");
      const _component_IconPhTranslate = __unplugin_components_10;
      const _component_IconFluentWeatherMoon16Regular = __unplugin_components_11;
      const _component_IconFluentWeatherSunny16Regular = __unplugin_components_12;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout anim" }, _attrs))} data-v-39d3a68a><div class="aside space" data-v-39d3a68a></div><div class="aside anim fixed" data-v-39d3a68a><div class="${ssrRenderClass([!unref(expand) && "hidden-span", "top"])}" data-v-39d3a68a>`);
      if (unref(expand)) {
        _push(ssrRenderComponent(Logo, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/words",
        class: "row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentTextUnderlineDouble20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-39d3a68a${_scopeId}>${ssrInterpolate(_ctx.$t("words"))}</span>`);
          } else {
            return [
              createVNode(_component_IconFluentTextUnderlineDouble20Regular),
              createVNode("span", null, toDisplayString(_ctx.$t("words")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        id: "article",
        to: "/articles",
        class: "row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentBookLetter20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-39d3a68a${_scopeId}>${ssrInterpolate(_ctx.$t("articles"))}</span>`);
          } else {
            return [
              createVNode(_component_IconFluentBookLetter20Regular),
              createVNode("span", null, toDisplayString(_ctx.$t("articles")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/setting",
        class: "row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentSettings20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-39d3a68a${_scopeId}>${ssrInterpolate(_ctx.$t("setting"))}</span>`);
            if (unref(runtimeStore).isNew) {
              _push2(`<div class="${ssrRenderClass([!unref(settingStore).sideExpand && "top-1 right-0", "red-point"])}" data-v-39d3a68a${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_IconFluentSettings20Regular),
              createVNode("span", null, toDisplayString(_ctx.$t("setting")), 1),
              unref(runtimeStore).isNew ? (openBlock(), createBlock("div", {
                key: 0,
                class: ["red-point", !unref(settingStore).sideExpand && "top-1 right-0"]
              }, null, 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/feedback",
        class: "row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentCommentEdit20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-39d3a68a${_scopeId}>${ssrInterpolate(_ctx.$t("feedback"))}</span>`);
          } else {
            return [
              createVNode(_component_IconFluentCommentEdit20Regular),
              createVNode("span", null, toDisplayString(_ctx.$t("feedback")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/doc",
        class: "row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentDocument20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-39d3a68a${_scopeId}>${ssrInterpolate(_ctx.$t("document"))}</span>`);
          } else {
            return [
              createVNode(_component_IconFluentDocument20Regular),
              createVNode("span", null, toDisplayString(_ctx.$t("document")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/help",
        class: "row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentQuestionCircle20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-39d3a68a${_scopeId}>${ssrInterpolate(_ctx.$t("help"))}</span>`);
          } else {
            return [
              createVNode(_component_IconFluentQuestionCircle20Regular),
              createVNode("span", null, toDisplayString(_ctx.$t("help")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bottom flex justify-evenly" data-v-39d3a68a>`);
      _push(ssrRenderComponent(BaseIcon, {
        onClick: ($event) => unref(settingStore).sideExpand = !unref(settingStore).sideExpand
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(expand)) {
              _push2(ssrRenderComponent(_component_IconFluentChevronLeft20Filled, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_IconFluentChevronLeft20Filled, { class: "transform-rotate-180" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(expand) ? (openBlock(), createBlock(_component_IconFluentChevronLeft20Filled, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentChevronLeft20Filled, {
                key: 1,
                class: "transform-rotate-180"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="${ssrRenderClass([{ collapsed: unref(settingStore).mobileNavCollapsed }, "mobile-top-nav"])}" data-v-39d3a68a><div class="nav-items" data-v-39d3a68a><div class="${ssrRenderClass([{ active: unref(route).path === "/" }, "nav-item"])}" data-v-39d3a68a>`);
      _push(ssrRenderComponent(_component_IconFluentHome20Regular, null, null, _parent));
      _push(`<span data-v-39d3a68a>主页</span></div><div class="${ssrRenderClass([{ active: unref(route).path?.includes("/words") }, "nav-item"])}" data-v-39d3a68a>`);
      _push(ssrRenderComponent(_component_IconFluentTextUnderlineDouble20Regular, null, null, _parent));
      _push(`<span data-v-39d3a68a>单词</span></div><div class="${ssrRenderClass([{ active: unref(route).path?.includes("/articles") }, "nav-item"])}" data-v-39d3a68a>`);
      _push(ssrRenderComponent(_component_IconFluentBookLetter20Regular, null, null, _parent));
      _push(`<span data-v-39d3a68a>文章</span></div><div class="${ssrRenderClass([{ active: unref(route).path === "/setting" }, "nav-item"])}" data-v-39d3a68a>`);
      _push(ssrRenderComponent(_component_IconFluentSettings20Regular, null, null, _parent));
      _push(`<span data-v-39d3a68a>设置</span>`);
      if (unref(runtimeStore).isNew) {
        _push(`<div class="red-point" data-v-39d3a68a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="nav-toggle" data-v-39d3a68a>`);
      if (!unref(settingStore).mobileNavCollapsed) {
        _push(ssrRenderComponent(_component_IconFluentChevronDown20Filled, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_IconFluentChevronUp20Filled, null, null, _parent));
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(MigrateDialog, {
        modelValue: unref(showTransfer),
        "onUpdate:modelValue": ($event) => isRef(showTransfer) ? showTransfer.value = $event : showTransfer = $event,
        onOk: unref(init)
      }, null, _parent));
      _push(ssrRenderComponent(_component_IeDialog, null, null, _parent));
      _push(`<div class="flex-1 z-1 relative main-content overflow-x-hidden" data-v-39d3a68a>`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      if (showIcon.value) {
        _push(`<div class="absolute right-4 top-4 flex z-1 gap-2" data-v-39d3a68a><div class="relative group" data-v-39d3a68a>`);
        _push(ssrRenderComponent(BaseIcon, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconPhTranslate, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconPhTranslate)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="space-y-2 pt-2 absolute z-2 right-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 pointer-events-none group-hover:pointer-events-auto" data-v-39d3a68a><div class="card mb-2 py-4 px-6 space-y-3" data-v-39d3a68a><!--[-->`);
        ssrRenderList(unref(locales), (locale) => {
          _push(`<div class="w-full cp break-keep black-link" data-v-39d3a68a>${ssrInterpolate(locale.name)}</div>`);
        });
        _push(`<!--]--></div></div></div>`);
        _push(ssrRenderComponent(BaseIcon, {
          title: `${_ctx.$t("toggle_theme")}(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleTheme]})`,
          onClick: unref(toggleTheme)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(getTheme)() === "light") {
                _push2(ssrRenderComponent(_component_IconFluentWeatherMoon16Regular, null, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_IconFluentWeatherSunny16Regular, null, null, _parent2, _scopeId));
              }
            } else {
              return [
                unref(getTheme)() === "light" ? (openBlock(), createBlock(_component_IconFluentWeatherMoon16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentWeatherSunny16Regular, { key: 1 }))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39d3a68a"]]);
export {
  _default as default
};
//# sourceMappingURL=default-v9PH4nBY.js.map
