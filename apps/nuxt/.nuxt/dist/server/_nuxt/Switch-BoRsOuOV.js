import { defineComponent, ref, watch, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { h as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean },
    width: null,
    activeText: { default: "开" },
    inactiveText: { default: "关" }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isChecked = ref(props.modelValue);
    watch(() => props.modelValue, (val) => {
      isChecked.value = val;
    });
    const switchWidth = computed(() => props.width ?? 40);
    const switchHeight = computed(() => switchWidth.value / 2 | 0);
    const ballSize = computed(() => switchHeight.value - 4);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["switch", { "checked": isChecked.value, "disabled": __props.disabled }],
        tabindex: __props.disabled ? -1 : 0,
        role: "switch",
        "aria-checked": isChecked.value,
        style: { width: switchWidth.value + "px", height: switchHeight.value + "px", borderRadius: switchHeight.value + "px" }
      }, _attrs))} data-v-cb882b1b>`);
      if (isChecked.value && __props.activeText) {
        _push(`<span class="text left" data-v-cb882b1b>${ssrInterpolate(__props.activeText)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ball" style="${ssrRenderStyle({
        width: ballSize.value + "px",
        height: ballSize.value + "px",
        transform: isChecked.value ? "translateX(" + (switchWidth.value - ballSize.value - 2) + "px)" : "translateX(2px)"
      })}" data-v-cb882b1b></div>`);
      if (!isChecked.value && __props.inactiveText) {
        _push(`<span class="text right" data-v-cb882b1b>${ssrInterpolate(__props.inactiveText)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Switch = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-cb882b1b"]]), { __name: "Switch" });
export {
  Switch as S
};
//# sourceMappingURL=Switch-BoRsOuOV.js.map
