import { markRaw, defineComponent, mergeProps, unref, ref, provide, computed, withCtx, createVNode, defineAsyncComponent, watch, isRef, openBlock, createBlock, toDisplayString, createCommentVNode, createElementBlock, createElementVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { _ as __unplugin_components_2$1 } from './settings20-regular-fog7odRI.mjs';
import { _ as __unplugin_components_0, a as __unplugin_components_1 } from './text-underline-double20-regular-Urqfz4U4.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { b as useSettingStore, C as Close, B as BaseIcon } from './BaseIcon-Cnj57dgy.mjs';
import { C as CommonSetting, W as WordSetting, A as ArticleSetting } from './WordSetting-BBzklAbh.mjs';
import { u as useDisableEventListener } from './event-qcx2F2JA.mjs';
import { h as _export_sfc } from './server.mjs';
import { h as Tooltip, o as ShortcutKey } from './env-CUoXYOyW.mjs';
import { C as ConflictNoticeText } from './ConflictNoticeText-DBXHKUby.mjs';

const _hoisted_1$1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M4.958 1.3a.5.5 0 0 0-.916 0L2.734 4.29l-.01.02l-.432.99a.5.5 0 1 0 .916.4l.307-.7h1.97l.307.7a.5.5 0 1 0 .916-.4l-.433-.99l-.009-.02zM4.5 2.747L5.048 4H3.952zM3 7.5a.5.5 0 0 1 .5-.5h1.25a1.5 1.5 0 0 1 1.228 2.362A1.5 1.5 0 0 1 5 12H3.5a.5.5 0 0 1-.5-.5zM4 9h.75a.5.5 0 1 0 0-1H4zm1.5 1.5A.5.5 0 0 0 5 10H4v1h1a.5.5 0 0 0 .5-.5m-2 5c0-.47.125-.85.327-1.1c.19-.237.481-.4.923-.4c.44 0 .732.163.923.4l.022.03c.133.176.321.32.542.32c.346 0 .605-.328.441-.633a2 2 0 0 0-.226-.343C6.06 13.287 5.476 13 4.75 13c-.725 0-1.31.285-1.702.772c-.381.473-.548 1.094-.548 1.728s.167 1.255.548 1.728c.393.487.977.772 1.702.772c.726 0 1.31-.287 1.702-.774q.13-.161.226-.343c.164-.305-.095-.633-.44-.633c-.222 0-.41.144-.543.32l-.022.03c-.191.237-.482.4-.923.4s-.732-.163-.923-.4c-.202-.25-.327-.63-.327-1.1M8.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z"
    }, null, -1)
  ])]);
}
const __unplugin_components_8 = markRaw({ name: "fluent-text-list-abc-uppercase-ltr20-regular", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M2.5 6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0V7.707l7.146 7.147a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L10.5 13.793L3.707 7H9.5a.5.5 0 0 0 0-1z"
    }, null, -1)
  ])]);
}
const __unplugin_components_2 = markRaw({ name: "fluent-arrow-bounce20-regular", render });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SettingDialog",
  __ssrInlineRender: true,
  props: {
    type: null
  },
  setup(__props) {
    const Dialog = defineAsyncComponent(() => import('./Dialog-BoKDmA_Y.mjs'));
    const props = __props;
    const tabIndex = ref(props.type === "word" ? 1 : 2);
    let show = ref(false);
    useDisableEventListener(() => show.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentTextUnderlineDouble20Regular = __unplugin_components_0;
      const _component_IconFluentBookLetter20Regular = __unplugin_components_1;
      const _component_IconFluentSettings20Regular = __unplugin_components_2$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Dialog), {
        modelValue: unref(show),
        "onUpdate:modelValue": ($event) => isRef(show) ? show.value = $event : show = $event,
        title: _ctx.$t("settings"),
        padding: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="setting text-lg w-200 h-[60vh] text-md flex flex-col" data-v-d9855f02${_scopeId}><div class="flex flex-1 overflow-hidden" data-v-d9855f02${_scopeId}><div class="left" data-v-d9855f02${_scopeId}><div class="tabs" data-v-d9855f02${_scopeId}>`);
            if (__props.type === "word") {
              _push2(`<div class="${ssrRenderClass([tabIndex.value === 1 && "active", "tab"])}" data-v-d9855f02${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentTextUnderlineDouble20Regular, { width: "20" }, null, _parent2, _scopeId));
              _push2(`<span data-v-d9855f02${_scopeId}>${ssrInterpolate(_ctx.$t("word_settings"))}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.type === "article") {
              _push2(`<div class="${ssrRenderClass([tabIndex.value === 2 && "active", "tab"])}" data-v-d9855f02${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentBookLetter20Regular, { width: "20" }, null, _parent2, _scopeId));
              _push2(`<span data-v-d9855f02${_scopeId}>${ssrInterpolate(_ctx.$t("article_settings"))}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass([tabIndex.value === 0 && "active", "tab"])}" data-v-d9855f02${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentSettings20Regular, { width: "20" }, null, _parent2, _scopeId));
            _push2(`<span data-v-d9855f02${_scopeId}>${ssrInterpolate(_ctx.$t("general_settings"))}</span></div></div></div><div class="content" data-v-d9855f02${_scopeId}>`);
            if (tabIndex.value === 0) {
              _push2(ssrRenderComponent(CommonSetting, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (tabIndex.value === 1) {
              _push2(ssrRenderComponent(WordSetting, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (tabIndex.value === 2) {
              _push2(ssrRenderComponent(ArticleSetting, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "setting text-lg w-200 h-[60vh] text-md flex flex-col" }, [
                createVNode("div", { class: "flex flex-1 overflow-hidden" }, [
                  createVNode("div", { class: "left" }, [
                    createVNode("div", { class: "tabs" }, [
                      __props.type === "word" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["tab", tabIndex.value === 1 && "active"],
                        onClick: ($event) => tabIndex.value = 1
                      }, [
                        createVNode(_component_IconFluentTextUnderlineDouble20Regular, { width: "20" }),
                        createVNode("span", null, toDisplayString(_ctx.$t("word_settings")), 1)
                      ], 10, ["onClick"])) : createCommentVNode("", true),
                      __props.type === "article" ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ["tab", tabIndex.value === 2 && "active"],
                        onClick: ($event) => tabIndex.value = 2
                      }, [
                        createVNode(_component_IconFluentBookLetter20Regular, { width: "20" }),
                        createVNode("span", null, toDisplayString(_ctx.$t("article_settings")), 1)
                      ], 10, ["onClick"])) : createCommentVNode("", true),
                      createVNode("div", {
                        class: ["tab", tabIndex.value === 0 && "active"],
                        onClick: ($event) => tabIndex.value = 0
                      }, [
                        createVNode(_component_IconFluentSettings20Regular, { width: "20" }),
                        createVNode("span", null, toDisplayString(_ctx.$t("general_settings")), 1)
                      ], 10, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "content" }, [
                    tabIndex.value === 0 ? (openBlock(), createBlock(CommonSetting, { key: 0 })) : createCommentVNode("", true),
                    tabIndex.value === 1 ? (openBlock(), createBlock(WordSetting, { key: 1 })) : createCommentVNode("", true),
                    tabIndex.value === 2 ? (openBlock(), createBlock(ArticleSetting, { key: 2 })) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BaseIcon, {
        title: _ctx.$t("settings"),
        onClick: ($event) => {
          isRef(show) ? show.value = true : show = true;
          tabIndex.value = props.type === "word" ? 1 : 2;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentSettings20Regular, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconFluentSettings20Regular)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/SettingDialog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SettingDialog = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-d9855f02"]]), { __name: "SettingDialog" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Panel",
  __ssrInlineRender: true,
  setup(__props) {
    const settingStore = useSettingStore();
    let tabIndex = ref(0);
    provide("tabIndex", computed(() => tabIndex.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "panel anim" }, _ctx.$attrs, _attrs, {
        style: unref(settingStore).showPanel ? null : { display: "none" }
      }))} data-v-729ffc13><header class="flex justify-between items-center py-3 px-space" data-v-729ffc13><div class="color-main" data-v-729ffc13>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(Tooltip, {
        title: `${_ctx.$t("close")}(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).TogglePanel]})`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Close, {
              onClick: ($event) => unref(settingStore).showPanel = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Close, {
                onClick: ($event) => unref(settingStore).showPanel = false
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><div class="flex-1 overflow-auto" data-v-729ffc13>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Panel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Panel = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-729ffc13"]]), { __name: "Panel" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Space",
  __ssrInlineRender: true,
  props: {
    isWrong: { type: Boolean, default: false },
    isWait: { type: Boolean },
    isShake: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const settingStore = useSettingStore();
    const isMoveBottom = computed(() => {
      return settingStore.dictation && !props.isWrong;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isWrong) {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "word-space wrong" }, _attrs))} data-v-58f32ac5></span>`);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, _attrs))} data-v-58f32ac5><span class="${ssrRenderClass([[
          __props.isWait ? "opacity-100" : " opacity-0",
          __props.isShake ? isMoveBottom.value ? "shakeBottom" : "shake" : "",
          isMoveBottom.value && "to-bottom"
        ], "word-space wait"])}" data-v-58f32ac5></span></span>`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/Space.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Space = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-58f32ac5"]]), { __name: "Space" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConflictNotice",
  __ssrInlineRender: true,
  setup(__props) {
    const Dialog = defineAsyncComponent(() => import('./Dialog-BoKDmA_Y.mjs'));
    let settingStore = useSettingStore();
    let show = ref(false);
    watch(
      () => settingStore.load,
      (n) => {
        if (n && settingStore.conflictNotice) {
          setTimeout(() => {
            show.value = true;
          }, 300);
        }
      },
      { immediate: true }
    );
    useDisableEventListener(() => show.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Dialog), mergeProps({
        modelValue: unref(show),
        "onUpdate:modelValue": ($event) => isRef(show) ? show.value = $event : show = $event,
        title: _ctx.$t("important_notice"),
        footer: "",
        padding: "",
        closeOnClickBg: false,
        "cancel-button-text": _ctx.$t("dont_remind"),
        "confirm-button-text": _ctx.$t("close"),
        onCancel: ($event) => unref(settingStore).conflictNotice = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-150 center flex-col color-main"${_scopeId}>`);
            _push2(ssrRenderComponent(ConflictNoticeText, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-150 center flex-col color-main" }, [
                createVNode(ConflictNoticeText)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConflictNotice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ConflictNotice = Object.assign(_sfc_main$1, { __name: "ConflictNotice" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PracticeLayout",
  __ssrInlineRender: true,
  props: {
    panelLeft: null
  },
  setup(__props) {
    const settingStore = useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex justify-center relative", !unref(settingStore).showToolbar && "footer-hide"]
      }, _attrs))} data-v-df3f532c><div class="wrap" data-v-df3f532c>`);
      ssrRenderSlot(_ctx.$slots, "practice", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle({ left: __props.panelLeft })}" class="${ssrRenderClass([{ "has-panel": unref(settingStore).showPanel }, "panel-wrap"])}" data-v-df3f532c>`);
      ssrRenderSlot(_ctx.$slots, "panel", {}, null, _push, _parent);
      _push(`</div><div class="footer-wrap" data-v-df3f532c>`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PracticeLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PracticeLayout = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-df3f532c"]]), { __name: "PracticeLayout" });

export { ConflictNotice as C, PracticeLayout as P, SettingDialog as S, __unplugin_components_2 as _, Panel as a, __unplugin_components_8 as b, Space as c };
//# sourceMappingURL=PracticeLayout-bGHxKcR-.mjs.map
