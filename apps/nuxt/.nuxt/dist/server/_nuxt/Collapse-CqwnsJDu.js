import { _ as __unplugin_components_6 } from "./chevron-left20-filled-B_9PTvDy.js";
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Collapse",
  __ssrInlineRender: true,
  props: {
    q: null,
    a: null
  },
  setup(__props) {
    const props = __props;
    let show = ref(false);
    let isArray = computed(() => typeof props.a !== "string");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentChevronLeft20Filled = __unplugin_components_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "qa-item my-6" }, _attrs))}><header class="flex justify-between items-center cp font-bold text-lg"><span>${ssrInterpolate(__props.q)}</span>`);
      _push(ssrRenderComponent(_component_IconFluentChevronLeft20Filled, {
        class: ["anim", unref(show) ? "transform-rotate-270" : "transform-rotate-180"]
      }, null, _parent));
      _push(`</header>`);
      if (unref(show)) {
        _push(`<div class="content mt-4 text-base">`);
        if (unref(isArray)) {
          _push(`<!--[-->`);
          ssrRenderList(__props.a, (v, i) => {
            _push(`<p>${ssrInterpolate(__props.a.length > 1 ? `${i + 1}. ` : "")}${ssrInterpolate(v)}</p>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<span>${ssrInterpolate(__props.a)}</span>`);
        }
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Collapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Collapse = Object.assign(_sfc_main, { __name: "Collapse" });
export {
  Collapse as C
};
//# sourceMappingURL=Collapse-CqwnsJDu.js.map
