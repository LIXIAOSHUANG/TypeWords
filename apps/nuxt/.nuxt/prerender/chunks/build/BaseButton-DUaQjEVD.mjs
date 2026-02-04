import { defineComponent, mergeProps, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, markRaw, createElementBlock, createElementVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { h as Tooltip } from './env-CUoXYOyW.mjs';
import { h as _export_sfc } from './server.mjs';

const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",
      opacity: ".5"
    }, null, -1),
    createElementVNode("path", {
      fill: "currentColor",
      d: "M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
    }, [
      createElementVNode("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        from: "0 12 12",
        repeatCount: "indefinite",
        to: "360 12 12",
        type: "rotate"
      })
    ], -1)
  ])]);
}
const __unplugin_components_7 = markRaw({ name: "eos-icons-loading", render });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    keyboard: null,
    active: { type: Boolean },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    size: { default: "normal" },
    type: { default: "primary" }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconEosIconsLoading = __unplugin_components_7;
      _push(ssrRenderComponent(Tooltip, mergeProps({
        disabled: !__props.keyboard,
        title: `${__props.keyboard}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "base-button" }, _ctx.$attrs, {
              class: [__props.active && "active", __props.size, __props.type, (__props.disabled || __props.loading) && "disabled"]
            }))} data-v-177855a8${_scopeId}><span style="${ssrRenderStyle({ opacity: __props.loading ? 0 : 1 })}" data-v-177855a8${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
            if (__props.loading) {
              _push2(ssrRenderComponent(_component_IconEosIconsLoading, {
                class: "loading",
                width: "18",
                color: __props.type === "info" ? "#000000" : "#ffffff"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", mergeProps({ class: "base-button" }, _ctx.$attrs, {
                onClick: (e) => !__props.disabled && !__props.loading && _ctx.$emit("click", e),
                class: [__props.active && "active", __props.size, __props.type, (__props.disabled || __props.loading) && "disabled"]
              }), [
                createVNode("span", {
                  style: { opacity: __props.loading ? 0 : 1 }
                }, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ], 4),
                __props.loading ? (openBlock(), createBlock(_component_IconEosIconsLoading, {
                  key: 0,
                  class: "loading",
                  width: "18",
                  color: __props.type === "info" ? "#000000" : "#ffffff"
                }, null, 8, ["color"])) : createCommentVNode("", true)
              ], 16, ["onClick"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BaseButton = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-177855a8"]]), { __name: "BaseButton" });

export { BaseButton as B, __unplugin_components_7 as _ };
//# sourceMappingURL=BaseButton-DUaQjEVD.mjs.map
