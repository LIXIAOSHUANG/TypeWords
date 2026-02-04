import { defineComponent, ref, computed, mergeProps, unref, useSSRContext, withCtx, createVNode, createTextVNode, toDisplayString } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderAttr } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { B as BasePage } from './BasePage-DMJ6cvww.mjs';
import { _ as __unplugin_components_6 } from './chevron-left20-filled-B_9PTvDy.mjs';
import { W as WeChat } from './WeChat-CaY8PzZX.mjs';
import { O as Origin, G as GITHUB, A as APP_NAME } from './env-CUoXYOyW.mjs';
import { C as ConflictNoticeText } from './ConflictNoticeText-DBXHKUby.mjs';
import { u as useRoute, a as useSeoMeta } from './server.mjs';
import './Dialog-BoKDmA_Y.mjs';
import './BaseIcon-Cnj57dgy.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/axios/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/duration.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import './BaseButton-DUaQjEVD.mjs';
import './wechat-CXtsDFCA.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/scule/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pathe/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ipx/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-devtools-stub/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/devalue/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/utils.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Collapse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Collapse = Object.assign(_sfc_main$1, { __name: "Collapse" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "help",
  __ssrInlineRender: true,
  setup(__props) {
    let title = APP_NAME + " \u5E38\u89C1\u95EE\u9898\u89E3\u7B54";
    let route = useRoute();
    useSeoMeta({
      title,
      description: title,
      ogTitle: title,
      ogDescription: title,
      ogUrl: Origin + route.fullPath,
      twitterTitle: title,
      twitterDescription: title
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="center"${_scopeId}><div class="card-white qa w-2/3"${_scopeId}><div class="font-bold text-2xl mb-6"${_scopeId}>${ssrInterpolate(_ctx.$t("faq"))}</div><div class="list"${_scopeId}>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa1_a"),
              a: [_ctx.$t("qa1_q1"), _ctx.$t("qa1_q2")]
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa2_a")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(ConflictNoticeText, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(ConflictNoticeText)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa3_a"),
              a: [_ctx.$t("qa3_q1"), _ctx.$t("qa3_q2"), _ctx.$t("qa3_q3")]
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa4_a"),
              a: [_ctx.$t("qa4_q1"), _ctx.$t("qa4_q2")]
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa5_a"),
              a: [_ctx.$t("qa5_q1"), _ctx.$t("qa5_q2"), _ctx.$t("qa5_q3"), _ctx.$t("qa5_q4")]
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa6_a"),
              a: _ctx.$t("qa5_q4")
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa7_a"),
              a: [_ctx.$t("qa7_q1"), _ctx.$t("qa7_q2"), _ctx.$t("qa7_q3")]
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa8_a"),
              a: [_ctx.$t("qa8_q1"), _ctx.$t("qa8_q2"), _ctx.$t("qa8_q3")]
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa9_a"),
              a: _ctx.$t("qa9_q")
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa10_a"),
              a: [_ctx.$t("qa10_q1"), _ctx.$t("qa10_q2")]
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa11_a"),
              a: _ctx.$t("qa11_q")
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa12_a"),
              a: _ctx.$t("qa12_q")
            }, null, _parent2, _scopeId));
            _push2(`<div class="line"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Collapse, {
              q: _ctx.$t("qa13_a"),
              a: [_ctx.$t("qa13_q1"), _ctx.$t("qa13_q2"), _ctx.$t("qa13_q3"), _ctx.$t("qa13_q4")]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>${ssrInterpolate(_ctx.$t("wechat_group"))}\uFF1A `);
                  _push3(ssrRenderComponent(WeChat, null, null, _parent3, _scopeId2));
                  _push3(`</div><p${_scopeId2}>${ssrInterpolate(_ctx.$t("github_address"))}\uFF1A <a${ssrRenderAttr("href", unref(GITHUB))} target="_blank"${_scopeId2}>${ssrInterpolate(unref(GITHUB))}</a></p><div class=""${_scopeId2}>${ssrInterpolate(_ctx.$t("about_ticket_feedback"))}<a${ssrRenderAttr("href", `https://v.wjx.cn/vm/ev0W7fv.aspx#`)} target="_blank"${_scopeId2}>https://v.wjx.cn/vm/ev0W7fv.aspx#</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createTextVNode(toDisplayString(_ctx.$t("wechat_group")) + "\uFF1A ", 1),
                      createVNode(WeChat)
                    ]),
                    createVNode("p", null, [
                      createTextVNode(toDisplayString(_ctx.$t("github_address")) + "\uFF1A ", 1),
                      createVNode("a", {
                        href: unref(GITHUB),
                        target: "_blank"
                      }, toDisplayString(unref(GITHUB)), 9, ["href"])
                    ]),
                    createVNode("div", { class: "" }, [
                      createTextVNode(toDisplayString(_ctx.$t("about_ticket_feedback")), 1),
                      createVNode("a", {
                        href: `https://v.wjx.cn/vm/ev0W7fv.aspx#`,
                        target: "_blank"
                      }, "https://v.wjx.cn/vm/ev0W7fv.aspx#")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "center" }, [
                createVNode("div", { class: "card-white qa w-2/3" }, [
                  createVNode("div", { class: "font-bold text-2xl mb-6" }, toDisplayString(_ctx.$t("faq")), 1),
                  createVNode("div", { class: "list" }, [
                    createVNode(Collapse, {
                      q: _ctx.$t("qa1_a"),
                      a: [_ctx.$t("qa1_q1"), _ctx.$t("qa1_q2")]
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa2_a")
                    }, {
                      default: withCtx(() => [
                        createVNode(ConflictNoticeText)
                      ]),
                      _: 1
                    }, 8, ["q"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa3_a"),
                      a: [_ctx.$t("qa3_q1"), _ctx.$t("qa3_q2"), _ctx.$t("qa3_q3")]
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa4_a"),
                      a: [_ctx.$t("qa4_q1"), _ctx.$t("qa4_q2")]
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa5_a"),
                      a: [_ctx.$t("qa5_q1"), _ctx.$t("qa5_q2"), _ctx.$t("qa5_q3"), _ctx.$t("qa5_q4")]
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa6_a"),
                      a: _ctx.$t("qa5_q4")
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa7_a"),
                      a: [_ctx.$t("qa7_q1"), _ctx.$t("qa7_q2"), _ctx.$t("qa7_q3")]
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa8_a"),
                      a: [_ctx.$t("qa8_q1"), _ctx.$t("qa8_q2"), _ctx.$t("qa8_q3")]
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa9_a"),
                      a: _ctx.$t("qa9_q")
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa10_a"),
                      a: [_ctx.$t("qa10_q1"), _ctx.$t("qa10_q2")]
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa11_a"),
                      a: _ctx.$t("qa11_q")
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa12_a"),
                      a: _ctx.$t("qa12_q")
                    }, null, 8, ["q", "a"]),
                    createVNode("div", { class: "line" }),
                    createVNode(Collapse, {
                      q: _ctx.$t("qa13_a"),
                      a: [_ctx.$t("qa13_q1"), _ctx.$t("qa13_q2"), _ctx.$t("qa13_q3"), _ctx.$t("qa13_q4")]
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createTextVNode(toDisplayString(_ctx.$t("wechat_group")) + "\uFF1A ", 1),
                          createVNode(WeChat)
                        ]),
                        createVNode("p", null, [
                          createTextVNode(toDisplayString(_ctx.$t("github_address")) + "\uFF1A ", 1),
                          createVNode("a", {
                            href: unref(GITHUB),
                            target: "_blank"
                          }, toDisplayString(unref(GITHUB)), 9, ["href"])
                        ]),
                        createVNode("div", { class: "" }, [
                          createTextVNode(toDisplayString(_ctx.$t("about_ticket_feedback")), 1),
                          createVNode("a", {
                            href: `https://v.wjx.cn/vm/ev0W7fv.aspx#`,
                            target: "_blank"
                          }, "https://v.wjx.cn/vm/ev0W7fv.aspx#")
                        ])
                      ]),
                      _: 1
                    }, 8, ["q", "a"])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/help.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=help-TAFL06aB.mjs.map
