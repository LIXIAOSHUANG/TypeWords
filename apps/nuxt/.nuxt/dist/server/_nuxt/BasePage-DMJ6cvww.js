import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { h as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))} data-v-d4bbffa5><div class="page 3xl:w-[50vw] 2xl:w-[60vw] xl:w-[70vw] lg:w-[75vw]" data-v-d4bbffa5>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BasePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BasePage = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d4bbffa5"]]), { __name: "BasePage" });
export {
  BasePage as B
};
//# sourceMappingURL=BasePage-DMJ6cvww.js.map
