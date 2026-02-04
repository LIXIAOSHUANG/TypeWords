import { _ as __nuxt_component_0 } from "./NuxtImg-BgeLVH9C.js";
import { defineComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import "./Collapse-CqwnsJDu.js";
import "./WeChat-CaY8PzZX.js";
import { O as Origin, A as APP_NAME } from "./env-CUoXYOyW.js";
import "./ConflictNoticeText-DBXHKUby.js";
import { u as useRoute, a as useSeoMeta } from "../server.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
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
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nce",
  __ssrInlineRender: true,
  setup(__props) {
    let title = APP_NAME + " 新概念英语";
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
      const _component_NuxtImg = __nuxt_component_0;
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><!--[-->`);
            ssrRenderList(4, (i) => {
              _push2(`<div class="card-white flex gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, { src: "imgs/covers/nce-1.png" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><div class="title"${_scopeId}>新概念英语第一册</div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                  return createVNode("div", { class: "card-white flex gap-4" }, [
                    createVNode(_component_NuxtImg, { src: "imgs/covers/nce-1.png" }),
                    createVNode("div", null, [
                      createVNode("div", { class: "title" }, "新概念英语第一册")
                    ])
                  ]);
                }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/nce.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=nce-BjmFBc9K.js.map
