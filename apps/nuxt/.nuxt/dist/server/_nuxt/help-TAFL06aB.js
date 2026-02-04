import { defineComponent, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { C as Collapse } from "./Collapse-CqwnsJDu.js";
import { W as WeChat } from "./WeChat-CaY8PzZX.js";
import { O as Origin, G as GITHUB, A as APP_NAME } from "./env-CUoXYOyW.js";
import { C as ConflictNoticeText } from "./ConflictNoticeText-DBXHKUby.js";
import { u as useRoute, a as useSeoMeta } from "../server.mjs";
import "./chevron-left20-filled-B_9PTvDy.js";
import "./Dialog-BoKDmA_Y.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
import "./BaseIcon-Cnj57dgy.js";
import "pinia";
import "idb-keyval";
import "axios";
import "vue-router";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "./BaseButton-DUaQjEVD.js";
import "./wechat-CXtsDFCA.js";
import "#internal/nuxt/paths";
import "@floating-ui/dom";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "help",
  __ssrInlineRender: true,
  setup(__props) {
    let title = APP_NAME + " 常见问题解答";
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
                  _push3(`<div class="flex items-center"${_scopeId2}>${ssrInterpolate(_ctx.$t("wechat_group"))}： `);
                  _push3(ssrRenderComponent(WeChat, null, null, _parent3, _scopeId2));
                  _push3(`</div><p${_scopeId2}>${ssrInterpolate(_ctx.$t("github_address"))}： <a${ssrRenderAttr("href", unref(GITHUB))} target="_blank"${_scopeId2}>${ssrInterpolate(unref(GITHUB))}</a></p><div class=""${_scopeId2}>${ssrInterpolate(_ctx.$t("about_ticket_feedback"))}<a${ssrRenderAttr("href", `https://v.wjx.cn/vm/ev0W7fv.aspx#`)} target="_blank"${_scopeId2}>https://v.wjx.cn/vm/ev0W7fv.aspx#</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createTextVNode(toDisplayString(_ctx.$t("wechat_group")) + "： ", 1),
                      createVNode(WeChat)
                    ]),
                    createVNode("p", null, [
                      createTextVNode(toDisplayString(_ctx.$t("github_address")) + "： ", 1),
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
                          createTextVNode(toDisplayString(_ctx.$t("wechat_group")) + "： ", 1),
                          createVNode(WeChat)
                        ]),
                        createVNode("p", null, [
                          createTextVNode(toDisplayString(_ctx.$t("github_address")) + "： ", 1),
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
export {
  _sfc_main as default
};
//# sourceMappingURL=help-TAFL06aB.js.map
