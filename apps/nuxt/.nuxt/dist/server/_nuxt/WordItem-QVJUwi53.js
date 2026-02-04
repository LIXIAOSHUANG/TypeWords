import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, useSSRContext } from "vue";
import { _ as __unplugin_components_9 } from "./checkmark-circle16-regular-BfJF9NXt.js";
import { a as useWordOptions, b as __unplugin_components_1, _ as __unplugin_components_5 } from "./dict-Dqcdsgfb.js";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { V as VolumeIcon } from "./VolumeIcon--ng6Uza7.js";
import { b as usePlayWordAudio } from "./sound-fV5MruVn.js";
import { k as Tooltip } from "./env-CUoXYOyW.js";
import { B as BaseIcon } from "./BaseIcon-Cnj57dgy.js";
const _hoisted_1 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m9.854-1.146a.5.5 0 0 0-.708-.708L7.25 9.043L5.854 7.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0z"
    }, null, -1)
  ])]);
}
const __unplugin_components_3 = markRaw({ name: "fluent-checkmark-circle16-filled", render });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WordItem",
  __ssrInlineRender: true,
  props: {
    item: null,
    showTranslate: { type: Boolean, default: true },
    showWord: { type: Boolean, default: true },
    showTransPop: { type: Boolean, default: true },
    showOption: { type: Boolean, default: true },
    showCollectIcon: { type: Boolean, default: true },
    showMarkIcon: { type: Boolean, default: true },
    index: null,
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    const playWordAudio = usePlayWordAudio();
    const { isWordCollect, toggleWordCollect, isWordSimple, toggleWordSimple } = useWordOptions();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentStar16Regular = __unplugin_components_1;
      const _component_IconFluentStar16Filled = __unplugin_components_5;
      const _component_IconFluentCheckmarkCircle16Regular = __unplugin_components_9;
      const _component_IconFluentCheckmarkCircle16Filled = __unplugin_components_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["common-list-item", { active: __props.active }]
      }, _attrs))}><div class="left">`);
      ssrRenderSlot(_ctx.$slots, "prefix", { item: __props.item }, null, _push, _parent);
      _push(`<div class="title-wrapper"><div class="item-title">`);
      if (__props.index != void 0) {
        _push(`<span class="text-sm translate-y-0.5 text-gray-500">${ssrInterpolate(__props.index)}.</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="${ssrRenderClass([!__props.showWord && "word-shadow", "word"])}">${ssrInterpolate(__props.item.word)}</span><span class="${ssrRenderClass([!__props.showWord && "word-shadow", "phonetic text-gray"])}">${ssrInterpolate(__props.item.phonetic0)}</span>`);
      _push(ssrRenderComponent(VolumeIcon, {
        class: "volume",
        onClick: ($event) => unref(playWordAudio)(__props.item.word)
      }, null, _parent));
      _push(`</div>`);
      if (__props.item.trans.length && __props.showTranslate) {
        _push(`<div class="item-sub-title flex flex-col gap-2"><!--[-->`);
        ssrRenderList(__props.item.trans, (v) => {
          _push(`<div>`);
          if (v.cn.length > 30 && __props.showTransPop) {
            _push(ssrRenderComponent(Tooltip, {
              title: v.pos + "  " + v.cn
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(v.pos + "  " + v.cn.slice(0, 30) + "...")}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(v.pos + "  " + v.cn.slice(0, 30) + "..."), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<span>${ssrInterpolate(v.pos + "  " + v.cn)}</span>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.showOption) {
        _push(`<div class="right">`);
        ssrRenderSlot(_ctx.$slots, "suffix", { item: __props.item }, null, _push, _parent);
        if (__props.showCollectIcon) {
          _push(ssrRenderComponent(BaseIcon, {
            class: !unref(isWordCollect)(__props.item) ? "collect" : "fill",
            onClick: ($event) => unref(toggleWordCollect)(__props.item),
            title: !unref(isWordCollect)(__props.item) ? _ctx.$t("collect") : _ctx.$t("uncollect")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (!unref(isWordCollect)(__props.item)) {
                  _push2(ssrRenderComponent(_component_IconFluentStar16Regular, null, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_IconFluentStar16Filled, null, null, _parent2, _scopeId));
                }
              } else {
                return [
                  !unref(isWordCollect)(__props.item) ? (openBlock(), createBlock(_component_IconFluentStar16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentStar16Filled, { key: 1 }))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.showMarkIcon) {
          _push(ssrRenderComponent(BaseIcon, {
            class: !unref(isWordSimple)(__props.item) ? "collect" : "fill",
            onClick: ($event) => unref(toggleWordSimple)(__props.item),
            title: !unref(isWordSimple)(__props.item) ? _ctx.$t("mark_mastered") : _ctx.$t("unmark_mastered")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (!unref(isWordSimple)(__props.item)) {
                  _push2(ssrRenderComponent(_component_IconFluentCheckmarkCircle16Regular, null, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_IconFluentCheckmarkCircle16Filled, null, null, _parent2, _scopeId));
                }
              } else {
                return [
                  !unref(isWordSimple)(__props.item) ? (openBlock(), createBlock(_component_IconFluentCheckmarkCircle16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentCheckmarkCircle16Filled, { key: 1 }))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WordItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WordItem = Object.assign(_sfc_main, { __name: "WordItem" });
export {
  WordItem as W,
  __unplugin_components_3 as _
};
//# sourceMappingURL=WordItem-QVJUwi53.js.map
