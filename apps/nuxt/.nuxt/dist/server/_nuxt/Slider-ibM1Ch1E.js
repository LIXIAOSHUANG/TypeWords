import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { h as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    modelValue: null,
    min: null,
    max: null,
    step: null,
    disabled: { type: Boolean },
    showText: { type: Boolean },
    showValue: { type: Boolean },
    unit: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const min = props.min ?? 0;
    const max = props.max ?? 100;
    props.step ?? 1;
    ref(null);
    ref(false);
    ref(0);
    ref(0);
    const currentValue = ref(props.modelValue);
    watch(() => props.modelValue, (val) => {
      currentValue.value = val;
    });
    const valueToPercent = (value) => (value - min) / (max - min) * 100;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex" }, _attrs))} data-v-90f946de><div class="flex-1" data-v-90f946de><div class="${ssrRenderClass([{ "is-disabled": __props.disabled }, "custom-slider"])}" data-v-90f946de><div class="custom-slider__track" data-v-90f946de></div><div class="custom-slider__fill" style="${ssrRenderStyle({ width: valueToPercent(currentValue.value) + "%" })}" data-v-90f946de></div><div class="custom-slider__thumb" style="${ssrRenderStyle({ left: valueToPercent(currentValue.value) + "%" })}" tabindex="0" role="slider"${ssrRenderAttr("aria-valuemin", unref(min))}${ssrRenderAttr("aria-valuemax", unref(max))}${ssrRenderAttr("aria-valuenow", currentValue.value)}${ssrRenderAttr("aria-disabled", __props.disabled)} data-v-90f946de></div></div>`);
      if (__props.showText) {
        _push(`<div class="text flex justify-between text-sm color-gray" data-v-90f946de><span data-v-90f946de>${ssrInterpolate(unref(min))}</span><span data-v-90f946de>${ssrInterpolate(unref(max))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.showValue) {
        _push(`<div class="w-10 pl-5" data-v-90f946de>${ssrInterpolate(currentValue.value)}${ssrInterpolate(__props.unit)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Slider = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-90f946de"]]), { __name: "Slider" });
export {
  Slider as S
};
//# sourceMappingURL=Slider-ibM1Ch1E.js.map
