import { defineComponent, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { G as GITHUB } from "./env-CUoXYOyW.js";
import { C as ChannelIcons } from "./ChannelIcons-BDL8HMec.js";
import { W as WeChat } from "./WeChat-CaY8PzZX.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Type Words</h1><div class="w-120"><p class="text-xl">${ssrInterpolate(_ctx.$t("about_thanks"))}</p><p>${ssrInterpolate(_ctx.$t("github_address"))}<a${ssrRenderAttr("href", unref(GITHUB))} target="_blank">${ssrInterpolate(unref(GITHUB))}</a></p><div class="flex flex-col gap-2 mt-20"><div class="flex items-center">${ssrInterpolate(_ctx.$t("about_wechat_feedback"))}`);
      _push(ssrRenderComponent(WeChat, null, null, _parent));
      _push(`</div><div class="">${ssrInterpolate(_ctx.$t("about_ticket_feedback"))}<a${ssrRenderAttr("href", `https://v.wjx.cn/vm/ev0W7fv.aspx#`)} target="_blank">https://v.wjx.cn/vm/ev0W7fv.aspx#</a></div><div class="flex items-center">${ssrInterpolate(_ctx.$t("about_other_channels"))} `);
      _push(ssrRenderComponent(ChannelIcons, {
        type: "horizontal",
        share: false,
        wechat: false,
        github: false
      }, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = Object.assign(_sfc_main, { __name: "About" });
export {
  About as A
};
//# sourceMappingURL=About-CeikHbbF.js.map
