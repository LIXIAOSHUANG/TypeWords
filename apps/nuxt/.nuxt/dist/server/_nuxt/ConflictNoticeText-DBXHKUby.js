import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "./BaseIcon-Cnj57dgy.js";
import { W as WeChat } from "./WeChat-CaY8PzZX.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConflictNoticeText",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text" }, _attrs))}><div class="title">${ssrInterpolate(_ctx.$t("conflict_notice_title"))}</div><ul><li><div class="title">${ssrInterpolate(_ctx.$t("keyboard_no_response"))}</div><div><div class="text">${ssrInterpolate(_ctx.$t("check_plugins_installed"))} <span class="text-xl font-bold text-red-500">${ssrInterpolate(_ctx.$t("conflict_plugin_names"))}</span> ${ssrInterpolate(_ctx.$t("plugins_intercept_keyboard"))}<span class="font-bold text-red">${ssrInterpolate(_ctx.$t("cause_no_response"))}</span>${ssrInterpolate(_ctx.$t("follow_steps_to_resolve"))}</div><ul class="m-0"><li>${ssrInterpolate(_ctx.$t("try_incognito_mode"))}</li><li>${ssrInterpolate(_ctx.$t("incognito_not_working"))}<span class="color-link mx-1 cp">${ssrInterpolate(_ctx.$t("click_here"))}</span>${ssrInterpolate(_ctx.$t("feedback_or_wechat"))}`);
      _push(ssrRenderComponent(WeChat, null, null, _parent));
      _push(`</li><li>${ssrInterpolate(_ctx.$t("incognito_working"))}</li><li>${ssrInterpolate(_ctx.$t("disable_plugin_or_exclude"))}</li><li>${ssrInterpolate(_ctx.$t("install_extension_manager"))} <a href="https://chromewebstore.google.com/detail/one-click-extensions-mana/pbgjpgbpljobkekbhnnmlikbbfhbhmem" target="_blank">${ssrInterpolate(_ctx.$t("chrome_extension"))}</a>, <a href="https://microsoftedge.microsoft.com/addons/detail/%E5%BF%AB%E6%8D%B7%E6%89%A9%E5%B1%95%E7%AE%A1%E7%90%86/jdodenbllldnoogfmbmmgpieafbnaogm" target="_blank">${ssrInterpolate(_ctx.$t("edge_extension"))}</a>, ${ssrInterpolate(_ctx.$t("to_manage_extensions"))}</li></ul></div></li><li><div class="title">${ssrInterpolate(_ctx.$t("delete_key_goes_back"))}</div><div>${ssrInterpolate(_ctx.$t("browser_360_shortcut"))}</div><div>${ssrInterpolate(_ctx.$t("change_browser_or_shortcut"))}</div></li></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConflictNoticeText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ConflictNoticeText = Object.assign(_sfc_main, { __name: "ConflictNoticeText" });
export {
  ConflictNoticeText as C
};
//# sourceMappingURL=ConflictNoticeText-DBXHKUby.js.map
