import { _ as __unplugin_components_6 } from "./chevron-left20-filled-B_9PTvDy.js";
import { defineComponent, ref, useSlots, computed, provide, watch, mergeProps, useSSRContext, inject, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderTeleport, ssrRenderStyle, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "./eventBus-C4Xc_Jqv.js";
import "./BaseIcon-Cnj57dgy.js";
import { h as _export_sfc } from "../server.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    modelValue: null,
    placeholder: null,
    disabled: { type: Boolean },
    options: null
  },
  emits: ["update:modelValue", "toggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isOpen = ref(false);
    ref(false);
    const dropdownStyle = ref({});
    const selectedOption = ref(null);
    const selectRef = ref(null);
    ref(null);
    const slots = useSlots();
    const displayValue = computed(() => {
      return selectedOption.value ? selectedOption.value.label : props.placeholder || "请选择";
    });
    const selectOption = (value, label) => {
      selectedOption.value = { value, label };
      emit("update:modelValue", value);
      isOpen.value = false;
      emit("toggle", isOpen.value);
    };
    let selectValue = ref(props.modelValue);
    provide("selectValue", selectValue);
    provide("selectHandler", selectOption);
    watch(
      () => props.modelValue,
      (newValue) => {
        selectValue.value = newValue;
        if (slots.default) {
          let slot = slots.default();
          let list = [];
          if (slot.length === 1) {
            list = Array.from(slot[0].children);
          } else {
            list = slot;
          }
          const option = list.find((opt) => opt.props.value === newValue);
          if (option) {
            selectedOption.value = option.props;
          }
          return;
        }
        if (props.options) {
          const option = props.options.find((opt) => opt.value === newValue);
          if (option) {
            selectedOption.value = option;
          }
        }
      },
      { immediate: true }
    );
    watch(
      () => props.options,
      (newOptions) => {
        if (newOptions && props.modelValue) {
          const option = newOptions.find((opt) => opt.value === props.modelValue);
          if (option) {
            selectedOption.value = option;
          }
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentChevronLeft20Filled = __unplugin_components_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "select",
        ref_key: "selectRef",
        ref: selectRef
      }, _attrs))} data-v-d5389803><div class="${ssrRenderClass([{ disabled: __props.disabled, active: isOpen.value }, "select__wrapper"])}" data-v-d5389803><div class="${ssrRenderClass([{ "is-placeholder": !selectedOption.value }, "select__label"])}" data-v-d5389803>${ssrInterpolate(displayValue.value)}</div>`);
      _push(ssrRenderComponent(_component_IconFluentChevronLeft20Filled, {
        class: ["select__arrow", { "is-reverse": isOpen.value }],
        width: "16"
      }, null, _parent));
      _push(`</div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (isOpen.value) {
          _push2(`<div class="select__dropdown" style="${ssrRenderStyle(dropdownStyle.value)}" data-v-d5389803>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/select/Select.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Select = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-d5389803"]]), { __name: "Select" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Option",
  __ssrInlineRender: true,
  props: {
    label: null,
    value: null,
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const selectValue = inject("selectValue", null);
    inject("selectHandler", null);
    const isSelected = computed(() => {
      return selectValue.value === props.value;
    });
    watch(() => props.value, () => {
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["option", {
          "is-selected": isSelected.value,
          "is-disabled": __props.disabled
        }]
      }, _attrs))} data-v-6a3169d0>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<span class="option__label" data-v-6a3169d0>${ssrInterpolate(__props.label)}</span>`);
      }, _push, _parent);
      _push(`</li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/select/Option.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Option = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a3169d0"]]), { __name: "Option" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    modelValue: null,
    placeholder: null,
    maxlength: null,
    rows: null,
    autosize: { type: Boolean },
    showWordLimit: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const innerValue = ref(props.modelValue ?? "");
    watch(
      () => props.modelValue,
      (v) => innerValue.value = v ?? ""
    );
    const textareaRef = ref();
    const textareaStyle = computed(() => {
      return props.autosize ? { height: "auto" } : {};
    });
    const resizeTextarea = () => {
      if (!textareaRef.value) return;
      const el = textareaRef.value;
      el.style.height = "auto";
      let height = el.scrollHeight;
      let overflow = "hidden";
      if (typeof props.autosize === "object") {
        const { minRows, maxRows } = props.autosize;
        const lineHeight = 24;
        if (minRows) height = Math.max(height, minRows * lineHeight);
        if (maxRows) {
          const maxHeight = maxRows * lineHeight;
          if (height > maxHeight) {
            height = maxHeight;
            overflow = "auto";
          }
        }
      }
      el.style.height = height + "px";
      el.style.overflowY = overflow;
    };
    watch(
      innerValue,
      () => {
        if (props.autosize) nextTick(resizeTextarea);
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["inline-flex w-full relative", [__props.disabled && "disabled"]]
      }, _attrs))} data-v-182780c4><textarea${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("maxlength", __props.maxlength)}${ssrRenderAttr("rows", __props.rows)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} style="${ssrRenderStyle(textareaStyle.value)}" class="w-full px-3 py-2 border border-gray-300 rounded-md outline-none resize-none transition-colors duration-200 box-border" data-v-182780c4>${ssrInterpolate(innerValue.value)}</textarea>`);
      if (__props.showWordLimit && __props.maxlength) {
        _push(`<span class="absolute bottom-1 right-2 text-xs text-gray-400 select-none" data-v-182780c4>${ssrInterpolate(innerValue.value.length)} / ${ssrInterpolate(__props.maxlength)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Textarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Textarea = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-182780c4"]]), { __name: "Textarea" });
export {
  Option as O,
  Select as S,
  Textarea as T
};
//# sourceMappingURL=Textarea-Ca12-GD2.js.map
