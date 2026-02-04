import { _ as __unplugin_components_4 } from "./chevron-left28-filled-DoP3x3Jo.js";
import { defineComponent, useAttrs, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useNav, B as BaseIcon } from "./BaseIcon-Cnj57dgy.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
    const router = useNav();
    function onClick() {
      if (!attrs.onClick) {
        router.back();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentChevronLeft28Filled = __unplugin_components_4;
      _push(ssrRenderComponent(BaseIcon, mergeProps({
        title: _ctx.$t("back"),
        onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentChevronLeft28Filled, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconFluentChevronLeft28Filled)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackIcon = Object.assign(_sfc_main, { __name: "BackIcon" });
export {
  BackIcon as B
};
//# sourceMappingURL=BackIcon-D_XswP1e.js.map
