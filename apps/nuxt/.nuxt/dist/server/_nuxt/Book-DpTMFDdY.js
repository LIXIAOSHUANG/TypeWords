import { _ as __nuxt_component_0 } from "./NuxtImg-BgeLVH9C.js";
import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { P as Progress } from "./Progress-C93deg99.js";
import { C as Checkbox } from "./Checkbox-ChlucEKY.js";
import { h as _export_sfc } from "../server.mjs";
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
      return Number((props.item?.lastLearnIndex / props.item?.length * 100).toFixed());
    });
    const studyProgress = computed(() => {
      if (!props.showProgress) return;
      return props.item?.lastLearnIndex ? props.item?.lastLearnIndex + "/" : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_IconFluentAdd16Regular = __unplugin_components_3;
      if (!__props.isAdd) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: __props.item?.id
        }, _attrs))} data-v-c664c692><div class="book overflow-hidden relative" data-v-c664c692>`);
        if (__props.item?.cover) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            class: "absolute top-0 left-0 w-full object-cover",
            src: __props.item.cover,
            alt: ""
          }, null, _parent));
        } else {
          _push(`<div class="text-base mt-1" data-v-c664c692>${ssrInterpolate(__props.item?.name)}</div>`);
        }
        _push(`<div class="${ssrRenderClass([__props.item?.cover && "color-white", "absolute bottom-4 right-3 z-1"])}" data-v-c664c692><div data-v-c664c692>${ssrInterpolate(studyProgress.value)}${ssrInterpolate(__props.item?.length)}${ssrInterpolate(__props.quantifier)}</div></div><div class="absolute bottom-2 left-3 right-3" data-v-c664c692>`);
        if (__props.item?.lastLearnIndex && __props.showProgress) {
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
        if (__props.item?.cover) {
          _push(`<div class="text-base mt-1" data-v-c664c692>${ssrInterpolate(__props.item?.name)}</div>`);
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
export {
  Book as B,
  __unplugin_components_3 as _
};
//# sourceMappingURL=Book-DpTMFDdY.js.map
