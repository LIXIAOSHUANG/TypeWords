import { defineComponent, ref, provide, toRef, inject, computed, useSlots, createVNode, createTextVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { h as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormItem",
  props: {
    prop: String,
    label: String
  },
  setup(__props) {
    const props = __props;
    ref("");
    let error = ref("");
    const formModel = inject("formModel");
    inject("registerField");
    const formRules = inject("formRules", {});
    const myRules = computed(() => {
      return (formRules == null ? void 0 : formRules[props.prop]) || [];
    });
    const validate = (rules, isBlur = false) => {
      error.value = "";
      const val = formModel.value[props.prop];
      if (isBlur && val.trim() === "") {
        return true;
      }
      for (const rule of rules) {
        if (rule.required && (!val || !val.toString().trim())) {
          error.value = rule.message;
          return false;
        }
        if (rule.max && val && val.toString().length > rule.max) {
          error.value = rule.message;
          return false;
        }
        if (rule.min && val && val.toString().length < rule.min) {
          error.value = rule.message;
          return false;
        }
        if (rule.max && val && val.toString().length > rule.max) {
          error.value = rule.message;
          return false;
        }
        if (rule.validator) {
          try {
            rule.validator(rule, val);
          } catch (e) {
            error.value = e.message;
            return false;
          }
        }
      }
      return true;
    };
    function handleBlur() {
      const blurRules = myRules.value.filter((r) => r.trigger === "blur");
      if (blurRules.length) validate(blurRules, true);
    }
    function handChange() {
      error.value = "";
    }
    let slot = useSlots();
    function patchVNode(vnode, patchFn) {
      if (!vnode) return vnode;
      if (vnode.type && vnode.type.name) {
        return patchFn(vnode);
      }
      if (Array.isArray(vnode.children)) {
        vnode.children = vnode.children.map((child) => patchVNode(child, patchFn));
      }
      return vnode;
    }
    return () => {
      let DefaultNode = slot.default()[0];
      DefaultNode = patchVNode(DefaultNode, (vnode) => {
        return {
          ...vnode,
          props: {
            ...vnode.props,
            error: !!error.value,
            onBlur: handleBlur,
            onChange: handChange
          }
        };
      });
      return createVNode("div", {
        "class": "form-item   flex gap-space"
      }, [props.label && createVNode("label", {
        "class": "w-20 flex items-start mt-1 justify-end"
      }, [myRules.value.length ? createVNode("span", {
        "class": "form-error"
      }, [createTextVNode("*")]) : null, createTextVNode(" "), props.label]), createVNode("div", {
        "class": "flex-1 relative"
      }, [createVNode(DefaultNode, null, null), createVNode("div", {
        "class": "form-error my-0.5 anim",
        "style": {
          opacity: error.value ? 1 : 0
        }
      }, [error.value, createTextVNode(" \xA0")])])]);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/form/FormItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FormItem = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-85817323"]]), { __name: "FormItem" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    model: Object,
    rules: Object
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const fields = ref([]);
    const registerField = (field) => {
      fields.value.push(field);
    };
    function validate(cb) {
      let valid = true;
      fields.value.forEach((f) => {
        var _a;
        const fieldRules = ((_a = props.rules) == null ? void 0 : _a[f.prop]) || [];
        const res = f.validate(fieldRules);
        if (!res) valid = false;
      });
      cb(valid);
    }
    function validateField(fieldName, cb) {
      var _a;
      const field = fields.value.find((f) => f.prop === fieldName);
      if (field) {
        const fieldRules = ((_a = props.rules) == null ? void 0 : _a[fieldName]) || [];
        const valid = field.validate(fieldRules);
        if (cb) cb(valid);
        return valid;
      }
      if (cb) cb(true);
      return true;
    }
    provide("registerField", registerField);
    provide("formModel", toRef(props, "model"));
    provide("formValidate", validate);
    provide("formRules", props.rules);
    __expose({ validate, validateField });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/form/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = Object.assign(_sfc_main, { __name: "Form" });

export { Form as F, FormItem as a };
//# sourceMappingURL=Form-CH4Dczim.mjs.map
