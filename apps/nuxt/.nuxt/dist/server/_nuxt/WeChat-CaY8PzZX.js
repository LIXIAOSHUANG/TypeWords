import Dialog from "./Dialog-BoKDmA_Y.js";
import { _ as __unplugin_components_3 } from "./wechat-CXtsDFCA.js";
import { defineComponent, ref, isRef, withCtx, createVNode, unref, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { B as BaseIcon } from "./BaseIcon-Cnj57dgy.js";
const _imports_0 = publicAssetsURL("/imgs/channel/wechat.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WeChat",
  __ssrInlineRender: true,
  setup(__props) {
    let showWechatDialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconSimpleIconsWechat = __unplugin_components_3;
      const _component_Dialog = Dialog;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(BaseIcon, {
        title: _ctx.$t("wechat_group"),
        onClick: ($event) => isRef(showWechatDialog) ? showWechatDialog.value = true : showWechatDialog = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconSimpleIconsWechat, { class: "color-green-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconSimpleIconsWechat, { class: "color-green-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        modelValue: unref(showWechatDialog),
        "onUpdate:modelValue": ($event) => isRef(showWechatDialog) ? showWechatDialog.value = $event : showWechatDialog = $event,
        title: _ctx.$t("wechat_group")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-120 p-6 pt-0"${_scopeId}><div class="mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("community_desc"))}</div><div class="text-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", _ctx.$t("wechat_qrcode"))} class="w-70 rounded-xl shadow-lg"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-120 p-6 pt-0" }, [
                createVNode("div", { class: "mb-4" }, toDisplayString(_ctx.$t("community_desc")), 1),
                createVNode("div", { class: "text-center" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: _ctx.$t("wechat_qrcode"),
                    class: "w-70 rounded-xl shadow-lg"
                  }, null, 8, ["alt"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/channel-icons/WeChat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WeChat = Object.assign(_sfc_main, { __name: "WeChat" });
export {
  WeChat as W
};
//# sourceMappingURL=WeChat-CaY8PzZX.js.map
