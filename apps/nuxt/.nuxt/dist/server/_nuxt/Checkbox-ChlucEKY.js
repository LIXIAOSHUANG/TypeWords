import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderSlot } from "vue/server-renderer";
import { h as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    modelValue: Boolean
  },
  emits: ["update:modelValue", "click", "onChange"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "checkbox" }, _attrs))} data-v-b167a3e9><input type="checkbox"${ssrIncludeBooleanAttr(__props.modelValue) ? " checked" : ""} data-v-b167a3e9><span class="checkbox-box" data-v-b167a3e9><span class="checkbox-inner" data-v-b167a3e9></span></span><span class="checkbox-label" data-v-b167a3e9>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span></label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/checkbox/Checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Checkbox = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-b167a3e9"]]), { __name: "Checkbox" });
export {
  Checkbox as C
};
//# sourceMappingURL=Checkbox-ChlucEKY.js.map
