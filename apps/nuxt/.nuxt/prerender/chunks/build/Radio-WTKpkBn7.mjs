import { defineComponent, ref, provide, watch, mergeProps, inject, computed, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { h as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: [String, Number, Boolean],
    disabled: { type: Boolean, default: false },
    size: { type: String, default: "default" }
    // small / default / large
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const groupValue = ref(props.modelValue);
    provide("radioGroupSize", props.size);
    provide("radioGroupValue", groupValue);
    provide("radioGroupDisabled", props.disabled);
    provide("updateRadioGroupValue", (val) => {
      if (props.disabled) return;
      emit("update:modelValue", val);
    });
    watch(() => props.modelValue, (val) => {
      groupValue.value = val;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-5" }, _ctx.$attrs, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/radio/RadioGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RadioGroup = Object.assign(_sfc_main$1, { __name: "RadioGroup" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Radio",
  __ssrInlineRender: true,
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const radioGroupValue = inject("radioGroupValue", null);
    const radioGroupSize = inject("radioGroupSize", "default");
    const radioGroupDisabled = inject("radioGroupDisabled", false);
    inject("updateRadioGroupValue", null);
    const sizeClass = computed(() => `radio--${radioGroupSize}`);
    const isDisabled = computed(() => props.disabled || radioGroupDisabled);
    const isChecked = computed(() => (radioGroupValue == null ? void 0 : radioGroupValue.value) === props.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["radio", sizeClass.value, { "is-disabled": isDisabled.value, "is-checked": isChecked.value }]
      }, _attrs))} data-v-79b075be><input type="radio" class="hidden"${ssrRenderAttr("value", __props.value)}${ssrIncludeBooleanAttr(isDisabled.value) ? " disabled" : ""} data-v-79b075be><span class="radio__inner" data-v-79b075be></span><span class="text-sm" data-v-79b075be>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.label)}`);
      }, _push, _parent);
      _push(`</span></label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/radio/Radio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Radio = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-79b075be"]]), { __name: "Radio" });

export { RadioGroup as R, Radio as a };
//# sourceMappingURL=Radio-WTKpkBn7.mjs.map
