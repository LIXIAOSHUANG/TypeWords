import { defineComponent, withCtx, createVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { B as BasePage } from './BasePage-DMJ6cvww.mjs';
import { A as About } from './About-CeikHbbF.mjs';
import { O as Origin, A as APP_NAME } from './env-CUoXYOyW.mjs';
import { u as useRoute, a as useSeoMeta } from './server.mjs';
import './ChannelIcons-BDL8HMec.mjs';
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
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pathe/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ipx/dist/index.mjs';
import './BaseIcon-Cnj57dgy.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/axios/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/duration.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import './BaseButton-DUaQjEVD.mjs';
import './practice-DjPnwpm9.mjs';
import './user-BLvskJR1.mjs';
import './Progress-C93deg99.mjs';
import './WeChat-CaY8PzZX.mjs';
import './Dialog-BoKDmA_Y.mjs';
import './wechat-CXtsDFCA.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-devtools-stub/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/devalue/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "feedback",
  __ssrInlineRender: true,
  setup(__props) {
    let route = useRoute();
    let title = APP_NAME + " \u53CD\u9988";
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

export { _sfc_main as default };
//# sourceMappingURL=feedback-DpYDrwpr.mjs.map
