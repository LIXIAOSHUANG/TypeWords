import { g as useI18n, _ as __nuxt_component_0, h as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./NuxtImg-BgeLVH9C.js";
import { _ as __unplugin_components_4, C as ChannelIcons } from "./ChannelIcons-BDL8HMec.js";
import { _ as __unplugin_components_11, a as __unplugin_components_12 } from "./weather-moon16-regular-CzKoL_3H.js";
import { _ as __unplugin_components_10 } from "./translate-jzfWdenW.js";
import { _ as __unplugin_components_5 } from "./question-circle20-regular-ixBvu_Z4.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { G as GITHUB, A as APP_NAME } from "./env-CUoXYOyW.js";
import { B as BaseIcon } from "./BaseIcon-Cnj57dgy.js";
import { s as swapTheme, g as getSystemTheme, a as setTheme } from "./theme-4yK9pI7O.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
import "pinia";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "./BaseButton-DUaQjEVD.js";
import "./practice-DjPnwpm9.js";
import "dayjs";
import "./user-BLvskJR1.js";
import "./Progress-C93deg99.js";
import "./WeChat-CaY8PzZX.js";
import "./Dialog-BoKDmA_Y.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
import "./wechat-CXtsDFCA.js";
import "@floating-ui/dom";
import "idb-keyval";
import "axios";
import "dayjs/plugin/duration.js";
import "nanoid";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let theme = ref("light");
    function toggleTheme() {
      theme.value = swapTheme(theme.value === "auto" ? getSystemTheme() : theme.value);
      setTheme(theme.value);
    }
    const { locales, setLocale, locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconFluentQuestionCircle20Regular = __unplugin_components_5;
      const _component_IconPhTranslate = __unplugin_components_10;
      const _component_IconFluentWeatherMoon16Regular = __unplugin_components_11;
      const _component_IconFluentWeatherSunny16Regular = __unplugin_components_12;
      const _component_IconSimpleIconsGithub = __unplugin_components_4;
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_channel_icons = ChannelIcons;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["wrapper bg-primary2 text-lg", unref(theme)],
        id: "wrapper"
      }, _attrs))} data-v-85533fb4><div class="center relative h-14" data-v-85533fb4><div class="flex gap-10" data-v-85533fb4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/words",
        class: "black-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("words"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("words")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/articles",
        class: "black-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("articles"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("articles")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/doc",
        class: "black-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("english_document"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("english_document")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="absolute right-6 flex items-center gap-2 color-reverse-black" data-v-85533fb4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/help",
        class: "color-reverse-black",
        "aria-label": "Help page"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BaseIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconFluentQuestionCircle20Regular, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconFluentQuestionCircle20Regular)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(BaseIcon, null, {
                default: withCtx(() => [
                  createVNode(_component_IconFluentQuestionCircle20Regular)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative group" data-v-85533fb4><div class="more w-10 rounded-r-lg h-full center box-border transition-all duration-300" data-v-85533fb4>`);
      _push(ssrRenderComponent(_component_IconPhTranslate, null, null, _parent));
      _push(`</div><div class="space-y-2 btn-no-margin pt-2 absolute z-2 right-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 pointer-events-none group-hover:pointer-events-auto" data-v-85533fb4><div class="card p-4! space-y-2" data-v-85533fb4><!--[-->`);
      ssrRenderList(unref(locales), (locale2) => {
        _push(`<div class="w-full cp break-keep black-link" data-v-85533fb4>${ssrInterpolate(locale2.name)}</div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(BaseIcon, {
        title: _ctx.$t("toggle_theme"),
        onClick: toggleTheme
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(theme) === "light") {
              _push2(ssrRenderComponent(_component_IconFluentWeatherMoon16Regular, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_IconFluentWeatherSunny16Regular, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(theme) === "light" ? (openBlock(), createBlock(_component_IconFluentWeatherMoon16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentWeatherSunny16Regular, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="flex gap-2 relative color-reverse-black"${ssrRenderAttr("href", unref(GITHUB))} target="_blank" aria-label="Github project address" data-v-85533fb4>`);
      _push(ssrRenderComponent(BaseIcon, {
        class: "z-1",
        title: "Github",
        noBg: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconSimpleIconsGithub, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconSimpleIconsGithub)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "z-0 shrink-0 h-8 -ml-4",
        src: `https://img.shields.io/github/stars/zyronon/typing-word?style=flat-square&label=%20&color=${unref(theme) === "light" ? "white" : "black"}`
      }, null, _parent));
      _push(`</a></div></div><div class="line" data-v-85533fb4></div><div class="content" data-v-85533fb4><h1 data-v-85533fb4>${ssrInterpolate(unref(APP_NAME))}</h1><h2 class="font-normal m-0" data-v-85533fb4>${ssrInterpolate(_ctx.$t("app_desc"))}</h2><div class="" data-v-85533fb4><div class="base-button" data-v-85533fb4>${ssrInterpolate(_ctx.$t("start_word_practice"))}</div><div class="base-button" data-v-85533fb4>${ssrInterpolate(_ctx.$t("start_article_practice"))}</div></div><div class="w-70vw mb-4 mt-20" data-v-85533fb4><div class="text-4xl font-bold mb-8" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_word_practice"))}</div><div class="flex gap-10" data-v-85533fb4><ul class="p-0 m-0 list-none space-y-2 max-w-80" data-v-85533fb4><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_word_practice_desc1"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_word_practice_desc2"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_word_practice_desc3"))}</li></ul><div class="flex-1" data-v-85533fb4>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/imgs/words.png",
        class: "rounded-xl w-full"
      }, null, _parent));
      _push(`</div></div><div class="text-4xl font-bold mb-8 mt-20 text-right" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_article_practice"))}</div><div class="flex gap-14 w-full" data-v-85533fb4><div class="flex-1" data-v-85533fb4>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/imgs/articles.png",
        class: "rounded-xl w-full"
      }, null, _parent));
      _push(`</div><ul class="p-0 m-0 list-none space-y-2 max-w-80" data-v-85533fb4><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_article_practice_desc1"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_article_practice_desc2"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_article_practice_desc3"))}</li></ul></div><div class="text-4xl font-bold mb-8 mt-20 text-center" data-v-85533fb4>${ssrInterpolate(_ctx.$t("function_desc"))}</div><div class="card-wrap" data-v-85533fb4><div class="card1 hover" data-v-85533fb4><div class="emoji" data-v-85533fb4>📕</div><div class="title" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_collection"))}</div><div class="desc" data-v-85533fb4><ul data-v-85533fb4><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_collection_desc1"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_collection_desc2"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_collection_desc3"))}</li></ul></div></div><div class="card1 hover" data-v-85533fb4><div class="emoji" data-v-85533fb4>🌐</div><div class="title" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_vocabulary"))}</div><div class="desc" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_vocabulary_desc"))}</div></div><div class="card1 hover" data-v-85533fb4><div class="emoji" data-v-85533fb4>🆓</div><div class="title" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_free_opensource"))}</div><div class="desc" data-v-85533fb4><ul data-v-85533fb4><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_free_opensource_desc1"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_free_opensource_desc2"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_free_opensource_desc3"))}</li></ul></div></div></div><div class="card-wrap" data-v-85533fb4><div class="card1 hover" data-v-85533fb4><div class="emoji" data-v-85533fb4>⚙️</div><div class="title" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_customization"))}</div><div class="desc" data-v-85533fb4><ul data-v-85533fb4><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_customization_desc1"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_customization_desc2"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_customization_desc3"))}</li></ul></div></div><div class="card1 hover" data-v-85533fb4><div class="emoji" data-v-85533fb4>🎨</div><div class="title" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_design"))}</div><div class="desc" data-v-85533fb4><ul data-v-85533fb4><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_design_desc1"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_design_desc2"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_design_desc3"))}</li></ul></div></div><div class="card1 hover" data-v-85533fb4><div class="emoji" data-v-85533fb4>🎯</div><div class="title" data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_personalized"))}</div><div class="desc" data-v-85533fb4><ul data-v-85533fb4><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_personalized_desc1"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_personalized_desc2"))}</li><li data-v-85533fb4>${ssrInterpolate(_ctx.$t("home_personalized_desc3"))}</li></ul></div></div></div></div></div><div class="line" data-v-85533fb4></div><div class="w-full center gap-4 h-20" data-v-85533fb4>`);
      _push(ssrRenderComponent(_component_channel_icons, {
        type: "horizontal",
        share: false
      }, null, _parent));
      if (unref(locale) === "zh") {
        _push(`<!--[--><a href="https://beian.mps.gov.cn/#/query/webSearch?code=51015602001426" target="_blank" class="black-link text-sm" data-v-85533fb4>${ssrInterpolate(_ctx.$t("cn_limit_no1"))}</a><a href="https://beian.miit.gov.cn/" class="black-link text-sm" target="_blank" data-v-85533fb4>${ssrInterpolate(_ctx.$t("cn_limit_no2"))}</a><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85533fb4"]]);
export {
  index as default
};
//# sourceMappingURL=index-DnaQa4E0.js.map
