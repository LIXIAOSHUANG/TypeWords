import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { A as About } from "./About-CeikHbbF.js";
import { O as Origin, A as APP_NAME } from "./env-CUoXYOyW.js";
import { u as useRoute, a as useSeoMeta } from "../server.mjs";
import "./ChannelIcons-BDL8HMec.js";
import "#internal/nuxt/paths";
import "./BaseIcon-Cnj57dgy.js";
import "pinia";
import "idb-keyval";
import "axios";
import "vue-router";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "./BaseButton-DUaQjEVD.js";
import "./practice-DjPnwpm9.js";
import "./user-BLvskJR1.js";
import "./Progress-C93deg99.js";
import "./WeChat-CaY8PzZX.js";
import "./Dialog-BoKDmA_Y.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
import "./wechat-CXtsDFCA.js";
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
  __name: "feedback",
  __ssrInlineRender: true,
  setup(__props) {
    let route = useRoute();
    let title = APP_NAME + " 反馈";
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
            _push2(`<div class="center"${_scopeId}><div class="card-white w-2/3 center-col pb-20"${_scopeId}>`);
            _push2(ssrRenderComponent(About, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "center" }, [
                createVNode("div", { class: "card-white w-2/3 center-col pb-20" }, [
                  createVNode(About)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feedback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=feedback-DpYDrwpr.js.map
