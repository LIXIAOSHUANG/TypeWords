import { defineComponent, computed, mergeProps, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { h as _export_sfc } from './server.mjs';

const progressTextSize = 18;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Progress",
  __ssrInlineRender: true,
  props: {
    percentage: null,
    showText: { type: Boolean, default: true },
    textInside: { type: Boolean, default: false },
    strokeWidth: { default: 6 },
    color: { default: "#409eff" },
    active: { type: Boolean, default: true },
    format: { type: Function, default: (percentage) => `${percentage}%` },
    size: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const barStyle = computed(() => {
      return {
        width: `${props.percentage}%`,
        backgroundColor: props.color
      };
    });
    const trackStyle = computed(() => {
      const height = props.size === "large" ? props.strokeWidth * 2.5 : props.strokeWidth;
      return {
        height: `${height}px`,
        opacity: props.active ? 1 : 0.4
      };
    });
    const content = computed(() => {
      if (typeof props.format === "function") {
        return props.format(props.percentage) || "";
      } else {
        return `${props.percentage}%`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "progress",
        role: "progressbar",
        "aria-valuenow": __props.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, _attrs))} data-v-f77d0646><div class="progress-bar" style="${ssrRenderStyle(trackStyle.value)}" data-v-f77d0646><div class="progress-bar-inner" style="${ssrRenderStyle(barStyle.value)}" data-v-f77d0646>`);
      if (__props.showText && __props.textInside) {
        _push(`<div class="progress-bar-text" style="${ssrRenderStyle({ fontSize: progressTextSize + "px" })}" data-v-f77d0646>${ssrInterpolate(content.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.showText && !__props.textInside) {
        _push(`<div class="progress-bar-text" style="${ssrRenderStyle({ fontSize: progressTextSize + "px" })}" data-v-f77d0646>${ssrInterpolate(content.value)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Progress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Progress = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-f77d0646"]]), { __name: "Progress" });

export { Progress as P };
//# sourceMappingURL=Progress-C93deg99.mjs.map
