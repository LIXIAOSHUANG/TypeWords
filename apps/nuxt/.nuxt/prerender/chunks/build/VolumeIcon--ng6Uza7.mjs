import { _ as __unplugin_components_1, a as __unplugin_components_2 } from './volume-low-D-Q_rQNL.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, openBlock, createBlock, createCommentVNode, markRaw, createElementBlock, createElementVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { B as BaseIcon } from './BaseIcon-Cnj57dgy.mjs';

const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M4 17h2.697l5.748 3.832a1 1 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2m0-8h3c.033 0 .061-.016.093-.019a1 1 0 0 0 .379-.116c.026-.014.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.018-.056-.02-.082-.033a1 1 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4z"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "bx-volume", render });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VolumeIcon",
  __ssrInlineRender: true,
  props: {
    time: { default: 300 },
    simple: { type: Boolean, default: false },
    title: null,
    cb: { type: Function }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    let step = ref(2);
    let count = ref(0);
    function play(time = props.time, reset = false) {
      var _a;
      if (reset) {
        step.value = 2;
        count.value = 0;
      }
      if (count.value === 0) {
        (_a = props == null ? void 0 : props.cb) == null ? void 0 : _a.call(props);
      }
      count.value++;
      setTimeout(() => {
        if (step.value === 2) {
          if (count.value === 1) {
            step.value = 0;
            play(time + 100);
          } else {
            count.value = 0;
          }
        } else {
          step.value++;
          play(time + 100);
        }
      }, time);
    }
    function click() {
      emit("click");
      play();
    }
    __expose({ play });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBxVolume = __unplugin_components_0;
      const _component_IconBxVolumeLow = __unplugin_components_1;
      const _component_IconBxVolumeFull = __unplugin_components_2;
      if (props.simple) {
        _push(ssrRenderComponent(BaseIcon, mergeProps({
          title: __props.title,
          onClick: click,
          "no-bg": ""
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(step) === 0) {
                _push2(ssrRenderComponent(_component_IconBxVolume, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(step) === 1) {
                _push2(ssrRenderComponent(_component_IconBxVolumeLow, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(step) === 2) {
                _push2(ssrRenderComponent(_component_IconBxVolumeFull, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(step) === 0 ? (openBlock(), createBlock(_component_IconBxVolume, { key: 0 })) : createCommentVNode("", true),
                unref(step) === 1 ? (openBlock(), createBlock(_component_IconBxVolumeLow, { key: 1 })) : createCommentVNode("", true),
                unref(step) === 2 ? (openBlock(), createBlock(_component_IconBxVolumeFull, { key: 2 })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(BaseIcon, mergeProps({
          title: __props.title,
          onClick: click
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(step) === 0) {
                _push2(ssrRenderComponent(_component_IconBxVolume, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(step) === 1) {
                _push2(ssrRenderComponent(_component_IconBxVolumeLow, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(step) === 2) {
                _push2(ssrRenderComponent(_component_IconBxVolumeFull, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(step) === 0 ? (openBlock(), createBlock(_component_IconBxVolume, { key: 0 })) : createCommentVNode("", true),
                unref(step) === 1 ? (openBlock(), createBlock(_component_IconBxVolumeLow, { key: 1 })) : createCommentVNode("", true),
                unref(step) === 2 ? (openBlock(), createBlock(_component_IconBxVolumeFull, { key: 2 })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/VolumeIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VolumeIcon = Object.assign(_sfc_main, { __name: "VolumeIcon" });

export { VolumeIcon as V };
//# sourceMappingURL=VolumeIcon--ng6Uza7.mjs.map
