import { defineComponent, useAttrs, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { B as BackIcon } from "./BackIcon-D_XswP1e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    title: { default: "" },
    showBackIcon: { type: Boolean, default: true }
  },
  setup(__props) {
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-3 text-xl font-bold relative min-h-8" }, _attrs))}>`);
      if (__props.showBackIcon) {
        _push(ssrRenderComponent(BackIcon, mergeProps({ class: "z-2 relative" }, unref(attrs)), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="absolute text-center w-full left-0">${ssrInterpolate(__props.title)}</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = Object.assign(_sfc_main, { __name: "Header" });
export {
  Header as H
};
//# sourceMappingURL=Header-SpucEd11.js.map
