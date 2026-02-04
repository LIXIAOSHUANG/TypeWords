import { defineComponent, ref, watch, nextTick, mergeProps, unref, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MiniDialog",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean, default: true },
    width: { default: "180rem" }
  },
  setup(__props) {
    let props = __props;
    let modalRef = ref(null);
    let style = ref({ top: "2.4rem", bottom: "unset" });
    watch(() => props.modelValue, (n) => {
      if (n)
        nextTick(() => {
          if (modalRef.value) {
            const modal = modalRef.value;
            if (modal.getBoundingClientRect().bottom > (void 0).innerHeight) {
              style.value = { top: "unset", "bottom": "2.5rem" };
            }
          }
        });
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.modelValue) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          ref_key: "modalRef",
          ref: modalRef,
          class: "mini-modal",
          style: { width: __props.width, ...unref(style) }
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/MiniDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MiniDialog = Object.assign(_sfc_main, { __name: "MiniDialog" });

export { MiniDialog as M };
//# sourceMappingURL=MiniDialog-DIRP4Q9a.mjs.map
