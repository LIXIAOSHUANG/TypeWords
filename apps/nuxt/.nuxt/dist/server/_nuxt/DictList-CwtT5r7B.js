import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { B as Book } from "./Book-DpTMFDdY.js";
import { h as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DictList",
  __ssrInlineRender: true,
  props: {
    list: null,
    selectId: null,
    quantifier: null
  },
  emits: ["selectDict", "del", "detail", "add"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 flex-wrap" }, _attrs))} data-v-fcf9190f><!--[-->`);
      ssrRenderList(__props.list, (dict, index) => {
        _push(ssrRenderComponent(Book, {
          "is-add": false,
          onClick: ($event) => emit("selectDict", { dict, index }),
          quantifier: __props.quantifier,
          item: dict
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/DictList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DictList = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-fcf9190f"]]), { __name: "DictList" });
export {
  DictList as D
};
//# sourceMappingURL=DictList-CwtT5r7B.js.map
