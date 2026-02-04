import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, ref, computed, watch, nextTick, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { b as useSettingStore } from "./BaseIcon-Cnj57dgy.js";
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
      d: "m13.082 13.789l1.064 1.065a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.411 1.41a.5.5 0 0 0 .677.677l1.053 1.053c-.457.033-.925.138-1.315.377c-1.46.894-1.247 3.178.454 3.7c.761.235 1.5.055 2.07-.186c.178-.075.347-.16.502-.244v.355a.5.5 0 1 0 1 0v-1.29L8.99 9.697a3.2 3.2 0 0 0-.754.974c-.395.802-.36 1.725.2 2.299c.38.386.924.428 1.398.322q.324-.072.651-.238l.044.12a.5.5 0 0 0 .937-.349a5 5 0 0 1-.122-.37q.105-.095.205-.199l.775.775l-.006.002a.5.5 0 0 0 .359.934q.21-.082.405-.178m-3.383-3.383l.364.364c.031.487.089.914.16 1.285c-.22.136-.428.222-.607.261c-.298.067-.425-.005-.464-.045c-.176-.18-.289-.61-.019-1.157a2.3 2.3 0 0 1 .566-.708m-4.38-4.38l.68.68v.77a6 6 0 0 1-.891.488c-.469.197-.947.287-1.389.152c-.84-.259-.984-1.428-.225-1.893c.401-.246 1.067-.28 1.734-.207zm3.637.809l1.025 1.024l.192-.003l-.021.175l1.503 1.502a4 4 0 0 1 .243-.037a5 5 0 0 1-.053.227l.795.796a5.5 5.5 0 0 0 .268-.98q.155.04.285.096c.44.19.705.527.808.915c.093.349.056.773-.145 1.185l.734.734c.434-.682.567-1.46.378-2.175a2.36 2.36 0 0 0-1.378-1.577a3 3 0 0 0-.593-.182V8.5a.5.5 0 0 0-1-.018a5 5 0 0 0-.901.151q.034-.4.093-.838a14 14 0 0 0 1.923-.308a.5.5 0 0 0-.229-.974c-.484.114-1.003.202-1.53.26q.06-.325.133-.668a.5.5 0 0 0-.978-.21q-.105.494-.185.956c-.442.017-.878.012-1.292-.017h-.075m-4.17-4.171l2.198 2.199a3.2 3.2 0 0 0-.157-.83c-.192-.544-.593-1.019-1.334-1.236a3.6 3.6 0 0 0-.708-.133"
    }, null, -1)
  ])]);
}
const __unplugin_components_7 = markRaw({ name: "fluent-translate-off16-regular", render });
const limit = 200;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseList",
  __ssrInlineRender: true,
  props: {
    list: { default: [] },
    activeIndex: { default: -1 },
    activeId: { default: "" },
    isActive: { type: Boolean, default: false },
    static: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const settingStore = useSettingStore();
    const listRef = ref();
    const localActiveIndex = computed(() => {
      if (props.activeId) {
        return props.list.findIndex((v) => v.id === props.activeId);
      }
      return props.activeIndex;
    });
    function scrollViewToCenter(index) {
      if (index === -1) return;
      nextTick(() => {
        if (props.list.length > limit) {
          listRef.value?.scrollToItem(index);
        } else {
          listRef.value?.children[index]?.scrollIntoView({ block: "center", behavior: "smooth" });
        }
      });
    }
    watch(
      () => localActiveIndex.value,
      (n) => {
        if (props.static) return;
        if (settingStore.showPanel) {
          scrollViewToCenter(n);
        }
      },
      { immediate: true }
    );
    watch(
      () => props.isActive,
      (n) => {
        if (props.static) return;
        if (n) {
          setTimeout(() => scrollViewToCenter(localActiveIndex.value), 300);
        }
      }
    );
    watch(
      () => props.list,
      () => {
        if (props.static) return;
        nextTick(() => {
          if (props.list.length > limit) {
            listRef.value?.scrollToItem(0);
          } else {
            listRef.value?.scrollTo(0, 0);
          }
        });
      }
    );
    function scrollToBottom() {
      nextTick(() => {
        if (props.list.length > limit) {
          listRef.value.scrollToBottom();
        } else {
          listRef.value?.scrollTo(0, listRef.value.scrollHeight);
        }
      });
    }
    function scrollToItem(index) {
      nextTick(() => {
        if (props.list.length > limit) {
          listRef.value?.scrollToItem(index);
        } else {
          listRef.value?.children[index]?.scrollIntoView({ block: "center", behavior: "smooth" });
        }
      });
    }
    function itemIsActive(item, index) {
      return props.activeId ? props.activeId == item.id : props.activeIndex === index;
    }
    __expose({ scrollToBottom, scrollToItem });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DynamicScroller = resolveComponent("DynamicScroller");
      const _component_DynamicScrollerItem = resolveComponent("DynamicScrollerItem");
      if (__props.list.length > limit) {
        _push(ssrRenderComponent(_component_DynamicScroller, mergeProps({
          items: __props.list,
          ref_key: "listRef",
          ref: listRef,
          "min-item-size": 90,
          class: "scroller"
        }, _attrs), {
          default: withCtx(({ item, index, active }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DynamicScrollerItem, {
                item,
                active,
                "size-dependencies": [item.id],
                "data-index": index
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="list-item-wrapper" data-v-9ef99687${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {
                      item,
                      index: index + 1,
                      active: itemIsActive(item, index)
                    }, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "list-item-wrapper",
                        onClick: ($event) => emit("click", { item, index })
                      }, [
                        renderSlot(_ctx.$slots, "default", {
                          item,
                          index: index + 1,
                          active: itemIsActive(item, index)
                        }, void 0, true)
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DynamicScrollerItem, {
                  item,
                  active,
                  "size-dependencies": [item.id],
                  "data-index": index
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "list-item-wrapper",
                      onClick: ($event) => emit("click", { item, index })
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index: index + 1,
                        active: itemIsActive(item, index)
                      }, void 0, true)
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["item", "active", "size-dependencies", "data-index"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "scroller",
          style: { "overflow": "auto" },
          ref_key: "listRef",
          ref: listRef
        }, _attrs))} data-v-9ef99687><!--[-->`);
        ssrRenderList(props.list, (item, index) => {
          _push(`<div class="list-item-wrapper" data-v-9ef99687>`);
          ssrRenderSlot(_ctx.$slots, "default", {
            item,
            index: index + 1,
            active: itemIsActive(item, index)
          }, null, _push, _parent);
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/BaseList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BaseList = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-9ef99687"]]), { __name: "BaseList" });
export {
  BaseList as B,
  __unplugin_components_7 as _
};
//# sourceMappingURL=BaseList-BGyirn9c.js.map
