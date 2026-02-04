import { defineComponent, ref, watch, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { h as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputNumber",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: [Number, String], default: null },
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity },
    step: { type: Number, default: 1 },
    precision: { type: Number },
    disabled: { type: Boolean, default: false },
    stepStrictly: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "input", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    ref(null);
    const inner = ref(normalizeToNumber(props.modelValue));
    watch(() => props.modelValue, (value) => {
      inner.value = value;
    });
    const displayValue = computed({
      get: () => inner.value === null ? "" : format(inner.value),
      set: (v) => {
        const n = parseInput(v);
        if (n === "editing") return;
        setValue(n);
      }
    });
    const isMin = computed(() => inner.value !== null && inner.value <= props.min);
    const isMax = computed(() => inner.value !== null && inner.value >= props.max);
    function normalizeToNumber(v) {
      const n = Number(v);
      return Number.isFinite(n) ? n : null;
    }
    function clamp(n) {
      if (n === null) return null;
      if (n < props.min) return props.min;
      if (n > props.max) return props.max;
      return n;
    }
    function format(n) {
      return props.precision != null ? n.toFixed(props.precision) : String(n);
    }
    function parseInput(s) {
      const trimmed = s.trim();
      if (["", "-", "+", ".", "-.", "+."].includes(trimmed)) return "editing";
      const n = Number(trimmed);
      return Number.isFinite(n) ? n : "editing";
    }
    function applyStepStrict(n) {
      if (n === null) return null;
      if (!props.stepStrictly) return n;
      const base = Number.isFinite(props.min) ? props.min : 0;
      const k = Math.round((n - base) / props.step);
      return base + k * props.step;
    }
    function toPrecision(n) {
      return props.precision != null ? Number(n.toFixed(props.precision)) : n;
    }
    function setValue(n) {
      const v = clamp(toPrecision(applyStepStrict(n)));
      inner.value = v;
      emit("update:modelValue", v);
      emit("input", v);
      emit("change", v);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["input-number inline-center select-none anim", { "is-disabled": __props.disabled }]
      }, _attrs))} data-v-14952904><button class="btn minus-btn inline-center cursor-pointer anim border-none outline-none w-8 h-8" type="button"${ssrIncludeBooleanAttr(__props.disabled || isMin.value) ? " disabled" : ""} aria-label="decrease" data-v-14952904>- </button><input class="flex-1 h-8 px-2 text-center border-none outline-none bg-transparent input-inner w-14"${ssrRenderAttr("value", displayValue.value)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} inputmode="decimal" data-v-14952904><button class="btn plus-btn inline-center cursor-pointer anim border-none outline-none w-8 h-8" type="button"${ssrIncludeBooleanAttr(__props.disabled || isMax.value) ? " disabled" : ""} aria-label="increase" data-v-14952904>+ </button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/InputNumber.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputNumber = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-14952904"]]), { __name: "InputNumber" });
export {
  InputNumber as I
};
//# sourceMappingURL=InputNumber-CwEqYfu9.js.map
