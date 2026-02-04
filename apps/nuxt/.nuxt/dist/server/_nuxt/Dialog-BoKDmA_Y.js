import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, computed, ref, watch, unref, withCtx, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderTeleport, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { k as Tooltip } from "./env-CUoXYOyW.js";
import "./eventBus-C4Xc_Jqv.js";
import { a as useRuntimeStore } from "./BaseIcon-Cnj57dgy.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { g as useI18n, h as _export_sfc } from "../server.mjs";
import "@floating-ui/dom";
import "mitt";
import "pinia";
import "idb-keyval";
import "axios";
import "vue-router";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
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
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "m4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07z"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "fluent-dismiss20-regular", render });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean, default: void 0 },
    showClose: { type: Boolean, default: true },
    title: null,
    content: null,
    fullScreen: { type: Boolean, default: false },
    padding: { type: Boolean },
    footer: { type: Boolean, default: false },
    header: { type: Boolean, default: true },
    confirmButtonText: { default: "" },
    cancelButtonText: { default: "" },
    keyboard: { type: Boolean, default: true },
    closeOnClickBg: { type: Boolean, default: true },
    confirm: null,
    beforeClose: null,
    t: null
  },
  emits: ["update:modelValue", "close", "ok", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const localeT = computed(() => {
      if (props.t) return props.t;
      const { t: i18nT } = useI18n();
      return i18nT;
    });
    const emit = __emit;
    let confirmButtonLoading = ref(false);
    let zIndex = ref(999);
    let visible = ref(false);
    let openTime = ref(Date.now());
    let maskRef = ref(null);
    let modalRef = ref(null);
    const runtimeStore = useRuntimeStore();
    let id = Date.now();
    async function close() {
      if (!visible.value) {
        return;
      }
      if (props.beforeClose) {
        if (!await props.beforeClose()) {
          return;
        }
      }
      let stayTime = Date.now() - openTime.value;
      let closeTime = 300;
      if (stayTime < 500) {
        closeTime += 500 - stayTime;
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          maskRef.value?.classList.toggle("bounce-out");
          modalRef.value?.classList.toggle("bounce-out");
        }, 500 - stayTime);
        setTimeout(() => {
          emit("update:modelValue", false);
          emit("close");
          visible.value = false;
          resolve(true);
          let rIndex = runtimeStore.modalList.findIndex((item) => item.id === id);
          if (rIndex > -1) {
            runtimeStore.modalList.splice(rIndex, 1);
          }
        }, closeTime);
      });
    }
    watch(
      () => props.modelValue,
      (n) => {
        if (n) {
          id = Date.now();
          runtimeStore.modalList.push({ id, close });
          zIndex.value = 999 + runtimeStore.modalList.length;
          visible.value = true;
        } else {
          close();
        }
      }
    );
    async function ok() {
      if (props.confirm) {
        confirmButtonLoading.value = true;
        await props.confirm();
        confirmButtonLoading.value = false;
      }
      emit("ok");
      await close();
    }
    async function cancel() {
      emit("cancel");
      await close();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentDismiss20Regular = __unplugin_components_0;
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(visible)) {
          _push2(`<div class="modal-root" style="${ssrRenderStyle({ "z-index": unref(zIndex) })}" data-v-5e9e5827>`);
          if (!__props.fullScreen) {
            _push2(`<div class="modal-mask" data-v-5e9e5827></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="${ssrRenderClass([[__props.fullScreen ? "full" : "window"], "modal"])}" data-v-5e9e5827>`);
          _push2(ssrRenderComponent(Tooltip, {
            title: localeT.value("close")
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                if (__props.showClose) {
                  _push3(ssrRenderComponent(_component_IconFluentDismiss20Regular, {
                    onClick: close,
                    class: "close cursor-pointer",
                    width: "24"
                  }, null, _parent2, _scopeId));
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  __props.showClose ? (openBlock(), createBlock(_component_IconFluentDismiss20Regular, {
                    key: 0,
                    onClick: close,
                    class: "close cursor-pointer",
                    width: "24"
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.header) {
            _push2(`<div class="modal-header" data-v-5e9e5827><div class="title" data-v-5e9e5827>${ssrInterpolate(props.title)}</div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="${ssrRenderClass([{ padding: __props.padding }, "modal-body"])}" data-v-5e9e5827>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          if (__props.content) {
            _push2(`<div class="content max-h-60vh" data-v-5e9e5827>${ssrInterpolate(__props.content)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
          if (__props.footer) {
            _push2(`<div class="modal-footer" data-v-5e9e5827><div class="left flex items-end" data-v-5e9e5827>`);
            ssrRenderSlot(_ctx.$slots, "footer-left", {}, null, _push2, _parent);
            _push2(`</div><div class="right" data-v-5e9e5827>`);
            _push2(ssrRenderComponent(BaseButton, {
              type: "info",
              onClick: cancel
            }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.cancelButtonText || localeT.value("cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.cancelButtonText || localeT.value("cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push2(ssrRenderComponent(BaseButton, {
              id: "dialog-ok",
              loading: unref(confirmButtonLoading),
              onClick: ok
            }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.confirmButtonText || localeT.value("confirm"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.confirmButtonText || localeT.value("confirm")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push2(`</div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/Dialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dialog = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-5e9e5827"]]), { __name: "Dialog" });
export {
  Dialog as default
};
//# sourceMappingURL=Dialog-BoKDmA_Y.js.map
