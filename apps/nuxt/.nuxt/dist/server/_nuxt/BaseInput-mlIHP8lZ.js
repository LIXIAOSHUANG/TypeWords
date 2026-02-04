import { a as __unplugin_components_5, _ as __unplugin_components_4 } from "./eye16-regular-Cm9O3Lp0.js";
import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, useAttrs, ref, computed, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
import { L as Close } from "./BaseIcon-Cnj57dgy.js";
import { a as useDisableEventListener } from "./event-qcx2F2JA.js";
import { h as _export_sfc } from "../server.mjs";
const _hoisted_1$3 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M8.99 2.598a.5.5 0 0 0-.98-.196l-.92 4.602H3.5a.5.5 0 1 0 0 1h3.39l-.8 3.993H2.5a.5.5 0 0 0 0 1h3.39l-.88 4.405a.5.5 0 1 0 .98.196l.92-4.601h5.004L11.01 17.4a.5.5 0 0 0 .98.2l.945-4.603h3.568a.5.5 0 0 0 0-1H13.14l.82-3.992h3.54a.5.5 0 1 0 0-1h-3.334l.901-4.391a.5.5 0 1 0-.98-.201l-.942 4.591H8.109zM7.91 8.004h5.03l-.82 3.993H7.11z"
    }, null, -1)
  ])]);
}
const __unplugin_components_3$1 = markRaw({ name: "fluent-number-symbol20-regular", render: render$3 });
const _hoisted_1$2 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
    }, null, -1)
  ])]);
}
const __unplugin_components_2 = markRaw({ name: "fluent-phone20-regular", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M15.5 4A2.5 2.5 0 0 1 18 6.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4zM17 7.961l-6.746 3.97a.5.5 0 0 1-.426.038l-.082-.038L3 7.963V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5zM15.5 5h-11A1.5 1.5 0 0 0 3 6.5v.302l7 4.118l7-4.12v-.3A1.5 1.5 0 0 0 15.5 5"
    }, null, -1)
  ])]);
}
const __unplugin_components_3 = markRaw({ name: "fluent-mail20-regular", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10 1a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v6a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-6a2.5 2.5 0 0 1 2-2.45V5a4 4 0 0 1 4-4M6.5 8A1.5 1.5 0 0 0 5 9.5v6A1.5 1.5 0 0 0 6.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 13.5 8zm3.5 3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2M10 2a3 3 0 0 0-3 3v2h6V5a3 3 0 0 0-3-3"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "fluent-lock-closed20-regular", render });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "BaseInput"
  },
  __name: "BaseInput",
  __ssrInlineRender: true,
  props: {
    modelValue: [String, Number],
    placeholder: String,
    disabled: Boolean,
    autofocus: Boolean,
    error: Boolean,
    type: {
      type: String,
      default: "text"
    },
    clearable: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    maxLength: Number,
    size: {
      type: String,
      default: "normal",
      validator: (value) => ["normal", "large"].includes(value)
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "validation", "enter"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const attrs = useAttrs();
    const inputValue = ref(props.modelValue);
    let focus = ref(false);
    let inputEl = ref();
    const passwordVisible = ref(false);
    const inputType = computed(() => {
      if (props.type === "password") {
        return passwordVisible.value ? "text" : "password";
      }
      return props.type;
    });
    watch(() => props.modelValue, (val) => {
      inputValue.value = val;
    });
    const clearInput = () => {
      inputValue.value = "";
      emit("update:modelValue", "");
    };
    useDisableEventListener(() => focus.value);
    const vFocus = {
      mounted: (el, bind) => {
        if (bind.value) {
          el.focus();
          setTimeout(() => focus.value = true);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentLockClosed20Regular = __unplugin_components_0;
      const _component_IconFluentMail20Regular = __unplugin_components_3;
      const _component_IconFluentPhone20Regular = __unplugin_components_2;
      const _component_IconFluentNumberSymbol20Regular = __unplugin_components_3$1;
      const _component_IconFluentEye16Regular = __unplugin_components_5;
      const _component_IconFluentEyeOff16Regular = __unplugin_components_4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["base-input", { "is-disabled": __props.disabled, "error": props.error, focus: unref(focus), [`base-input--${__props.size}`]: true }],
        ref_key: "inputEl",
        ref: inputEl
      }, _attrs))} data-v-588676d7>`);
      ssrRenderSlot(_ctx.$slots, "subfix", {}, null, _push, _parent);
      if (_ctx.$slots.preIcon) {
        _push(`<div class="pre-icon" data-v-588676d7>`);
        ssrRenderSlot(_ctx.$slots, "preIcon", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "password") {
        _push(ssrRenderComponent(_component_IconFluentLockClosed20Regular, { class: "pre-icon" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "email") {
        _push(ssrRenderComponent(_component_IconFluentMail20Regular, { class: "pre-icon" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "tel") {
        _push(ssrRenderComponent(_component_IconFluentPhone20Regular, { class: "pre-icon" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "code") {
        _push(ssrRenderComponent(_component_IconFluentNumberSymbol20Regular, { class: "pre-icon" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: inputType.value,
        placeholder: __props.placeholder,
        disabled: __props.disabled,
        value: inputValue.value,
        class: "inner",
        maxlength: __props.maxLength
      }, ssrGetDirectiveProps(_ctx, vFocus, __props.autofocus)))} data-v-588676d7>`);
      ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
      if (__props.clearable && inputValue.value && !__props.disabled) {
        _push(ssrRenderComponent(Close, { onClick: clearInput }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "password" && !__props.disabled) {
        _push(`<div class="password-toggle"${ssrRenderAttr("title", passwordVisible.value ? "隐藏密码" : "显示密码")} data-v-588676d7>`);
        if (!passwordVisible.value) {
          _push(ssrRenderComponent(_component_IconFluentEye16Regular, null, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_IconFluentEyeOff16Regular, null, null, _parent));
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BaseInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BaseInput = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-588676d7"]]), { __name: "BaseInput" });
export {
  BaseInput as B,
  __unplugin_components_3 as _
};
//# sourceMappingURL=BaseInput-mlIHP8lZ.js.map
