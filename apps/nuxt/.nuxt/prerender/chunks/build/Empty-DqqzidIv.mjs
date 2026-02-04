import { _ as __nuxt_component_0 } from './NuxtImg-BgeLVH9C.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { h as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Empty",
  __ssrInlineRender: true,
  props: {
    text: null,
    showAdd: { type: Boolean }
  },
  emits: ["add"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "empty" }, _attrs))} data-v-808b823e>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/imgs/empty.svg",
        alt: ""
      }, null, _parent));
      _push(`<span data-v-808b823e>${ssrInterpolate((_a = __props.text) != null ? _a : _ctx.$t("empty_placeholder"))}</span>`);
      if (__props.showAdd) {
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => _ctx.$emit("add")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("add"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("add")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Empty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Empty = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-808b823e"]]), { __name: "Empty" });

export { Empty as E };
//# sourceMappingURL=Empty-DqqzidIv.mjs.map
