import { c as useArticleOptions, _ as __unplugin_components_1, a as __unplugin_components_5 } from './dict-Dqcdsgfb.mjs';
import { _ as __unplugin_components_0 } from './search24-regular-Cw07GsNM.mjs';
import { defineComponent, ref, computed, mergeProps, isRef, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, withModifiers, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { B as BaseList } from './BaseList-BGyirn9c.mjs';
import { B as BaseInput } from './BaseInput-mlIHP8lZ.mjs';
import { B as BaseIcon } from './BaseIcon-Cnj57dgy.mjs';
import { h as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleList",
  __ssrInlineRender: true,
  props: {
    list: { default: () => [] },
    showTranslate: { type: Boolean, default: true },
    showDesc: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    let searchKey = ref("");
    let localList = computed(() => {
      if (searchKey.value) {
        let t = searchKey.value.toLowerCase();
        let strings = t.split(" ").filter((v) => v);
        let res = props.list.filter((item) => {
          return strings.some((value) => {
            return item.title.toLowerCase().includes(value) || item.titleTranslate.toLowerCase().includes(value);
          });
        });
        try {
          let d = Number(t);
          if (!isNaN(d)) {
            if (d - 1 < props.list.length) {
              res.push(props.list[d - 1]);
            }
          }
        } catch (err) {
        }
        return res.sort((a, b) => {
          const aMatch = a.title.toLowerCase().includes(t);
          const bMatch = b.title.toLowerCase().includes(t);
          if (aMatch && !bMatch) return -1;
          if (!aMatch && bMatch) return 1;
          return 0;
        });
      } else {
        return props.list;
      }
    });
    const listRef = ref(null);
    function scrollToBottom() {
      var _a;
      (_a = listRef.value) == null ? void 0 : _a.scrollToBottom();
    }
    function scrollToItem(index) {
      var _a;
      (_a = listRef.value) == null ? void 0 : _a.scrollToItem(index);
    }
    const { isArticleCollect, toggleArticleCollect } = useArticleOptions();
    __expose({ scrollToBottom, scrollToItem });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentSearch24Regular = __unplugin_components_0;
      const _component_IconFluentStar16Regular = __unplugin_components_1;
      const _component_IconFluentStar16Filled = __unplugin_components_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "list" }, _attrs))} data-v-57bf482a><div class="search" data-v-57bf482a>`);
      _push(ssrRenderComponent(BaseInput, {
        clearable: "",
        modelValue: unref(searchKey),
        "onUpdate:modelValue": ($event) => isRef(searchKey) ? searchKey.value = $event : searchKey = $event
      }, {
        subfix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentSearch24Regular, { class: "text-lg text-gray" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconFluentSearch24Regular, { class: "text-lg text-gray" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(BaseList, mergeProps({
        ref_key: "listRef",
        ref: listRef,
        onClick: (e) => emit("click", e),
        list: unref(localList)
      }, _ctx.$attrs), {
        default: withCtx(({ item, index, active }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ active }, "common-list-item"])}" data-v-57bf482a${_scopeId}><div class="left" data-v-57bf482a${_scopeId}><div class="title-wrapper" data-v-57bf482a${_scopeId}><div class="item-title" data-v-57bf482a${_scopeId}><div class="name" data-v-57bf482a${_scopeId}>`);
            if (index != void 0 && !unref(searchKey)) {
              _push2(`<span class="text-sm text-gray-500" data-v-57bf482a${_scopeId}>${ssrInterpolate(item.id == -1 ? "" : index - (props.showDesc ? 1 : 0) + ".")}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(item.title)}</div></div>`);
            if (item.titleTranslate && __props.showTranslate) {
              _push2(`<div class="item-sub-title" data-v-57bf482a${_scopeId}><div class="item-translate" data-v-57bf482a${_scopeId}>${ssrInterpolate(` ${item.titleTranslate}`)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="right" data-v-57bf482a${_scopeId}>`);
            _push2(ssrRenderComponent(BaseIcon, {
              class: !unref(isArticleCollect)(item) ? "collect" : "fill",
              onClick: ($event) => unref(toggleArticleCollect)(item),
              title: !unref(isArticleCollect)(item) ? _ctx.$t("collect") : _ctx.$t("uncollect")
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(isArticleCollect)(item)) {
                    _push3(ssrRenderComponent(_component_IconFluentStar16Regular, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_IconFluentStar16Filled, null, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    !unref(isArticleCollect)(item) ? (openBlock(), createBlock(_component_IconFluentStar16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentStar16Filled, { key: 1 }))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["common-list-item", { active }]
              }, [
                createVNode("div", { class: "left" }, [
                  createVNode("div", { class: "title-wrapper" }, [
                    createVNode("div", { class: "item-title" }, [
                      createVNode("div", { class: "name" }, [
                        index != void 0 && !unref(searchKey) ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-sm text-gray-500"
                        }, toDisplayString(item.id == -1 ? "" : index - (props.showDesc ? 1 : 0) + "."), 1)) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(item.title), 1)
                      ])
                    ]),
                    item.titleTranslate && __props.showTranslate ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "item-sub-title"
                    }, [
                      createVNode("div", { class: "item-translate" }, toDisplayString(` ${item.titleTranslate}`), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "right" }, [
                  createVNode(BaseIcon, {
                    class: !unref(isArticleCollect)(item) ? "collect" : "fill",
                    onClick: withModifiers(($event) => unref(toggleArticleCollect)(item), ["stop"]),
                    title: !unref(isArticleCollect)(item) ? _ctx.$t("collect") : _ctx.$t("uncollect")
                  }, {
                    default: withCtx(() => [
                      !unref(isArticleCollect)(item) ? (openBlock(), createBlock(_component_IconFluentStar16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentStar16Filled, { key: 1 }))
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick", "title"])
                ])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/ArticleList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticleList = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-57bf482a"]]), { __name: "ArticleList" });

export { ArticleList as A };
//# sourceMappingURL=ArticleList-qKu_FTcS.mjs.map
