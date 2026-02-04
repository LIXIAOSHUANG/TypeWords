import { _ as __nuxt_component_0 } from './NuxtImg-BgeLVH9C.mjs';
import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, computed, mergeProps, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { P as Progress } from './Progress-C93deg99.mjs';
import { C as Checkbox } from './Checkbox-ChlucEKY.mjs';
import { h as _export_sfc } from './server.mjs';

const _hoisted_1 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
    }, null, -1)
  ])]);
}
const __unplugin_components_3 = markRaw({ name: "fluent-add16-regular", render });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Book",
  __ssrInlineRender: true,
  props: {
    item: null,
    quantifier: null,
    isAdd: { type: Boolean },
    showCheckbox: { type: Boolean },
    checked: { type: Boolean },
    showProgress: { type: Boolean, default: true },
    isUser: { type: Boolean, default: false }
  },
  emits: ["check"],
  setup(__props) {
    const props = __props;
    const progress = computed(() => {
      var _a, _b;
      return Number((((_a = props.item) == null ? void 0 : _a.lastLearnIndex) / ((_b = props.item) == null ? void 0 : _b.length) * 100).toFixed());
    });
    const studyProgress = computed(() => {
      var _a, _b;
      if (!props.showProgress) return;
      return ((_a = props.item) == null ? void 0 : _a.lastLearnIndex) ? ((_b = props.item) == null ? void 0 : _b.lastLearnIndex) + "/" : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtImg = __nuxt_component_0;
      const _component_IconFluentAdd16Regular = __unplugin_components_3;
      if (!__props.isAdd) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: (_a = __props.item) == null ? void 0 : _a.id
        }, _attrs))} data-v-c664c692><div class="book overflow-hidden relative" data-v-c664c692>`);
        if ((_b = __props.item) == null ? void 0 : _b.cover) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            class: "absolute top-0 left-0 w-full object-cover",
            src: __props.item.cover,
            alt: ""
          }, null, _parent));
        } else {
          _push(`<div class="text-base mt-1" data-v-c664c692>${ssrInterpolate((_c = __props.item) == null ? void 0 : _c.name)}</div>`);
        }
        _push(`<div class="${ssrRenderClass([((_d = __props.item) == null ? void 0 : _d.cover) && "color-white", "absolute bottom-4 right-3 z-1"])}" data-v-c664c692><div data-v-c664c692>${ssrInterpolate(studyProgress.value)}${ssrInterpolate((_e = __props.item) == null ? void 0 : _e.length)}${ssrInterpolate(__props.quantifier)}</div></div><div class="absolute bottom-2 left-3 right-3" data-v-c664c692>`);
        if (((_f = __props.item) == null ? void 0 : _f.lastLearnIndex) && __props.showProgress) {
          _push(ssrRenderComponent(Progress, {
            class: "mt-1",
            percentage: progress.value,
            "show-text": false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (__props.showCheckbox) {
          _push(ssrRenderComponent(Checkbox, {
            "model-value": __props.checked,
            onChange: ($event) => _ctx.$emit("check"),
            class: "absolute left-3 bottom-3 z-2"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.item.custom) {
          _push(`<div class="custom z-1" data-v-c664c692>${ssrInterpolate(_ctx.$t("custom"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if ((_g = __props.item) == null ? void 0 : _g.cover) {
          _push(`<div class="text-base mt-1" data-v-c664c692>${ssrInterpolate((_h = __props.item) == null ? void 0 : _h.name)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "book",
          id: "no-book"
        }, _attrs))} data-v-c664c692><div class="h-full center text-2xl" data-v-c664c692>`);
        _push(ssrRenderComponent(_component_IconFluentAdd16Regular, null, null, _parent));
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Book.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Book = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-c664c692"]]), { __name: "Book" });

export { Book as B, __unplugin_components_3 as _ };
//# sourceMappingURL=Book-DpTMFDdY.mjs.map
