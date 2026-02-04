import { defineComponent, ref, computed, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, mergeProps, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { B as BasePage } from './BasePage-DMJ6cvww.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { O as Origin, A as APP_NAME } from './env-CUoXYOyW.mjs';
import { u as useRoute, a as useSeoMeta } from './server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs';
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
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-devtools-stub/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/devalue/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/utils.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResourceCard",
  __ssrInlineRender: true,
  props: {
    resource: null
  },
  emits: ["openLink"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const getDifficultyClass = (difficulty) => {
      switch (difficulty) {
        case "\u5165\u95E8":
          return "bg-green-500";
        case "\u57FA\u7840":
          return "bg-blue-500";
        case "\u4E2D\u7EA7":
          return "bg-purple-500";
        case "\u8FDB\u9636":
          return "bg-amber-500";
        case "\u9AD8\u7EA7":
          return "bg-red-500";
        case "\u5168\u7EA7\u522B":
          return "bg-gray-500";
        default:
          return "bg-blue-500";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-white min-h-45 mb-0 flex flex-col justify-between" }, _attrs))}><div><div class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">${ssrInterpolate(__props.resource.name)}</div><div class="space-y-2 mb-4">`);
      if (__props.resource.author) {
        _push(`<div class="text-sm text-gray-600 dark:text-gray-300"><span class="font-medium">${ssrInterpolate(_ctx.$t("author"))}</span>${ssrInterpolate(__props.resource.author)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.resource.features) {
        _push(`<div class="text-sm text-gray-600 dark:text-gray-300"><span class="font-medium">\u{1F31F} ${ssrInterpolate(_ctx.$t("features"))}</span>${ssrInterpolate(__props.resource.features)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.resource.suitable) {
        _push(`<div class="text-sm text-gray-600 dark:text-gray-300"><span class="font-medium">\u{1F4CC} ${ssrInterpolate(_ctx.$t("suitable_for"))}</span>${ssrInterpolate(__props.resource.suitable)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.resource.description) {
        _push(`<div class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(__props.resource.description)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.resource.difficulty) {
        _push(`<span class="${ssrRenderClass([getDifficultyClass(__props.resource.difficulty), "inline-block px-3 py-1 rounded-full text-xs font-medium text-white"])}">${ssrInterpolate(__props.resource.difficulty)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex flex-col gap-3">`);
      _push(ssrRenderComponent(BaseButton, {
        type: "primary",
        onClick: ($event) => emit("openLink", __props.resource.link)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("open_link"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("open_link")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResourceCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ResourceCard = Object.assign(_sfc_main$1, { __name: "ResourceCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "doc",
  __ssrInlineRender: true,
  setup(__props) {
    let route = useRoute();
    let title = APP_NAME + " \u82F1\u8BED\u5B66\u4E60\u8D44\u6E90\u5206\u4EAB";
    useSeoMeta({
      title,
      description: title,
      ogTitle: title,
      ogDescription: title,
      ogUrl: Origin + route.fullPath,
      twitterTitle: title,
      twitterDescription: title
    });
    const categories = ref([
      {
        id: "new-concept",
        name: "\u65B0\u6982\u5FF5\u82F1\u8BED",
        description: "\u7ECF\u5178\u82F1\u8BED\u6559\u6750\uFF0C\u9002\u5408\u7CFB\u7EDF\u5B66\u4E60",
        resources: [
          {
            name: "\u65B0\u6982\u5FF5\u8D44\u6E90\u5408\u96C6",
            description: "",
            difficulty: "\u5305\u542B\u540E\u9762\u6240\u6709\u7684\u5185\u5BB9",
            link: "https://pan.quark.cn/s/6b12da160020"
          },
          {
            name: "\u65B0\u6982\u5FF5\u82F1\u8BED\u7B2C\u4E00\u518C",
            description: "\u9002\u5408\u82F1\u8BED\u521D\u5B66\u8005",
            difficulty: "\u5165\u95E8",
            link: "https://pan.quark.cn/s/0d2ece46983f"
          },
          {
            name: "\u65B0\u6982\u5FF5\u82F1\u8BED\u7B2C\u4E8C\u518C",
            description: "\u57FA\u7840\u82F1\u8BED\u5B66\u4E60\uFF0C\u5DE9\u56FA\u8BED\u6CD5\u548C\u8BCD\u6C47",
            difficulty: "\u57FA\u7840",
            link: "https://pan.quark.cn/s/df29bb396728"
          },
          {
            name: "\u65B0\u6982\u5FF5\u82F1\u8BED\u7B2C\u4E09\u518C",
            description: "\u63D0\u9AD8\u82F1\u8BED\u6C34\u5E73\uFF0C\u589E\u5F3A\u9605\u8BFB\u80FD\u529B",
            difficulty: "\u8FDB\u9636",
            link: "https://pan.quark.cn/s/ec39dc7cbe5b"
          },
          {
            name: "\u65B0\u6982\u5FF5\u82F1\u8BED\u7B2C\u56DB\u518C",
            description: "\u9AD8\u7EA7\u82F1\u8BED\u5B66\u4E60\uFF0C\u63D0\u5347\u7EFC\u5408\u80FD\u529B",
            difficulty: "\u9AD8\u7EA7",
            link: "https://pan.quark.cn/s/207a2cc8a320"
          },
          {
            name: "\u65B0\u6982\u5FF5\u82F1\u9752\u5C11\u5E74\u7248",
            description: "\u513F\u7AE5\u8BFB\u7269",
            difficulty: "7\u5C81\u81F314\u5C81",
            link: "https://pan.quark.cn/s/4628b00b39c0"
          },
          {
            name: "\u65B0\u6982\u5FF5\u82F1\u8BED1-4 \u6559\u6750\u9AD8\u6E05 PDF",
            description: "\u4EC5 1-4 \u518C\u7684\u6559\u6750\u9AD8\u6E05\u626B\u63CF\u7248 PDF",
            difficulty: "",
            link: "https://pan.quark.cn/s/f1e7739ed806"
          },
          {
            name: "\u65B0\u6982\u5FF5\u8BB2\u89E3\u89C6\u9891",
            description: "\u591A\u5BB6\u673A\u6784/\u4E2A\u4EBA\u7684\u8BB2\u89E3\u89C6\u9891",
            difficulty: "",
            link: "https://pan.quark.cn/s/07e25ee6de9f"
          }
        ]
      },
      {
        id: "exam",
        name: "\u7535\u89C6/\u7535\u5F71",
        description: "\u4E00\u4E9B\u4E0D\u9519\u7684\u7F8E/\u82F1\u5267\uFF0C\u53EF\u7EC3\u542C\u529B\u548C\u53E3\u8BED",
        resources: [
          {
            name: "\u7535\u89C6/\u7535\u5F71\u8D44\u6E90\u5408\u96C6",
            difficulty: "\u5305\u542B\u540E\u9762\u6240\u6709\u7684\u5185\u5BB9",
            link: "https://pan.quark.cn/s/84ecb30b700b"
            //159
            // link: 'https://pan.quark.cn/s/e9b62b79c48c',
          },
          {
            name: "\u8001\u53CB\u8BB0",
            description: "",
            difficulty: "\u559C\u5267/\u7231\u60C5",
            link: "https://pan.quark.cn/s/c17770edfa15"
          },
          {
            name: "\u751F\u6D3B\u5927\u7206\u70B8",
            description: "",
            difficulty: "\u559C\u5267/\u7231\u60C5",
            link: "https://pan.quark.cn/s/3e66da8ce1c4"
          },
          {
            name: "\u662F\u5927\u81E3/\u662F\u9996\u76F8",
            description: "",
            difficulty: "\u559C\u5267/\u8BBD\u523A",
            link: "https://pan.quark.cn/s/2c62ce3e220d"
          },
          {
            name: "\u7834\u4EA7\u59D0\u59B9",
            description: "",
            difficulty: "\u559C\u5267",
            link: "https://pan.quark.cn/s/018600971998"
          },
          {
            name: "\u7EDD\u671B\u4E3B\u5987",
            description: "",
            difficulty: "\u60AC\u7591",
            link: "https://pan.quark.cn/s/1c67ae200c2e"
          },
          {
            name: "\u7EB8\u724C\u5C4B",
            description: "",
            difficulty: "\u7EB8\u724C\u5C4B",
            link: "https://pan.quark.cn/s/5ba146c46180"
          }
        ]
      },
      {
        id: "grammar",
        name: "\u8BED\u6CD5\u5B66\u4E60",
        description: "",
        subcategories: [
          {
            name: "\u7ECF\u5178\u6559\u6750",
            description: "",
            resources: [
              {
                name: "\u82F1\u8BED\u8BED\u6CD5\u65B0\u601D\u7EF4",
                author: "\u5F20\u6EE1\u80DC",
                features: "\u4ECE\u601D\u7EF4\u89D2\u5EA6\u8BB2\u89E3\u8BED\u6CD5\uFF0C\u6CE8\u91CD\u7406\u89E3\u800C\u975E\u6B7B\u8BB0\u786C\u80CC\uFF0C\u5206\u4E3A\u521D\u7EA7\u3001\u4E2D\u7EA7\u3001\u9AD8\u7EA7\u4E09\u518C\uFF0C\u5FAA\u5E8F\u6E10\u8FDB",
                suitable: "\u5E0C\u671B\u7CFB\u7EDF\u5EFA\u7ACB\u8BED\u6CD5\u4F53\u7CFB\u7684\u5B66\u4E60\u8005",
                difficulty: "",
                link: "https://pan.quark.cn/s/d06abef6c737"
              },
              {
                name: "\u8584\u51B0\u82F1\u8BED\u8BED\u6CD5",
                author: "\u8584\u51B0",
                features: "\u8001\u724C\u7ECF\u5178,\u4F53\u7CFB\u5B8C\u6574,\u5206\u7C7B\u975E\u5E38\u7EC6,\u67E5\u8BED\u6CD5\u70B9\u65B9\u4FBF",
                suitable: "\u4E2D\u5B66\u751F\u6216\u57FA\u7840\u8F83\u5F31\u7684\u5B66\u4E60\u8005",
                difficulty: "",
                link: "https://pan.quark.cn/s/30777ceba5b9"
              },
              // {
              //   name: '实用英语语法',
              //   author: '张道真',
              //   features: '国内经典语法教材，内容详实全面，例句丰富，适合作为工具书查阅',
              //   suitable: '需要权威参考书的学生或教师',
              //   difficulty: '',
              //   link: 'https://pan.baidu.com/s/xxx',
              // },
              {
                name: "\u65CB\u5143\u4F30\u6587\u6CD5",
                author: "\u65CB\u5143\u4F30",
                features: "\u4EE5\u901A\u4FD7\u6613\u61C2\u7684\u8BED\u8A00\u89E3\u6790\u590D\u6742\u8BED\u6CD5\uFF0C\u5F3A\u8C03\u201C\u7406\u89E3\u903B\u8F91\u201D\uFF0C\u9002\u5408\u7A81\u7834\u8BED\u6CD5\u96BE\u70B9",
                suitable: "\u5BF9\u4F20\u7EDF\u8BED\u6CD5\u6559\u5B66\u611F\u5230\u67AF\u71E5\uFF0C\u60F3\u8F7B\u677E\u638C\u63E1\u6838\u5FC3\u903B\u8F91\u7684\u5B66\u4E60\u8005",
                difficulty: "\u7E41\u4F53\u4E2D\u6587\u7248",
                link: "https://pan.quark.cn/s/0d0de559794e"
              }
            ]
          },
          {
            name: "\u8FDB\u9636\u63D0\u5347",
            description: "",
            resources: [
              {
                name: "\u5251\u6865\u82F1\u8BED\u8BED\u6CD5(English Grammar in Use)",
                author: "\u5251\u6865\u5927\u5B66\u51FA\u7248",
                features: "\u5206\u4E3A\u521D\u7EA7\u3001\u4E2D\u7EA7\u3001\u9AD8\u7EA7\u4E09\u518C\uFF0C\u7ECF\u5178\u7545\u9500\u8BED\u6CD5\u81EA\u5B66\u4E66\uFF0C\u89E3\u91CA\u7B80\u660E\u4E14\u6709\u5927\u91CF\u7EC3\u4E60",
                suitable: "\u9700\u8981\u7ED3\u5408\u56FD\u9645\u8003\u8BD5\u7684\u5B66\u4E60\u8005",
                description: "",
                difficulty: "\u4E2D\u6587\u7248",
                link: "https://pan.quark.cn/s/d4a6ef53c04d"
              },
              {
                name: "Oxford English Grammar(\u725B\u6D25\u82F1\u8BED\u8BED\u6CD5)",
                author: "Sidney Greenbaum & Gerald Nelson",
                features: "\u5206\u4E3A\u57FA\u7840\u3001\u63D0\u5347\u3001\u9AD8\u7EA7\u4E09\u518C\uFF0C\u82F1\u5F0F\u8BED\u6CD5\u6743\u5A01\uFF0C\u89E3\u91CA\u6E05\u6670\u3001\u4F8B\u53E5\u5730\u9053\uFF0C\u9002\u5408\u5907\u8003\u96C5\u601D/\u6258\u798F",
                suitable: "\u60F3\u5168\u9762\u7CFB\u7EDF\u68B3\u7406\u8BED\u6CD5\u4F53\u7CFB\u7684\u4EBA",
                difficulty: "\u82F1\u6587\u7248",
                link: "https://pan.quark.cn/s/ca505875e68c"
              },
              {
                name: "\u5B9E\u7528\u82F1\u8BED\u7528\u6CD5(Practical English Usage)",
                author: "Michael Swan",
                features: "\u89E3\u91CA\u975E\u5E38\u7EC6\u81F4\uFF0C\u5C24\u5176\u9002\u5408\u7EA0\u6B63\u5E38\u89C1\u9519\u8BEF\u548C\u56F0\u60D1",
                suitable: "\u4E2D\u9AD8\u7EA7\u5B66\u4E60\u8005\uFF0C\u9002\u5408\u4F5C\u4E3A\u8BED\u6CD5\u95EE\u9898\u7684\u5DE5\u5177\u4E66",
                difficulty: "\u4E2D\u6587\u7248/\u82F1\u6587\u7248",
                link: "https://pan.quark.cn/s/05006e705a77"
              }
            ]
          }
        ]
      },
      {
        id: "listening",
        name: "\u542C\u529B\u8BAD\u7EC3",
        description: "\u63D0\u5347\u82F1\u8BED\u542C\u529B\u6C34\u5E73",
        resources: [
          {
            name: "VOA\u6162\u901F\u82F1\u8BED\u5408\u96C6",
            description: "\u65B0\u95FB\u7C7B\u542C\u529B\u6750\u6599\uFF0C\u8BED\u901F\u9002\u4E2D\uFF0C\u5185\u5BB9\u4E30\u5BCC",
            difficulty: "\u521D\u7EA7",
            link: "https://pan.quark.cn/s/681794bffc6e"
          },
          // {
          //   name: 'BBC Learning English',
          //   description: 'BBC官方英语学习资源，涵盖多方面内容',
          //   difficulty: '中高级',
          //   link: 'https://pan.baidu.com/s/xxx',
          // },
          {
            name: "TED-ED \u79D1\u666E\u52A8\u753B",
            description: "TED-Ed \u662F\u4E00\u4E2A\u4E13\u4E3A\u521D\u9AD8\u4E2D\u751F\u6240\u8BBE\u8BA1\u7684\u57283\u52305\u5206\u949F\u957F\u7684\u79D1\u666E\u52A8\u753B\u8AB2\u7A0B",
            difficulty: "\u521D\u7EA7",
            link: "https://pan.quark.cn/s/d3d83038afb9"
          },
          {
            name: "\u54C8\u5F17\u6F14\u8BB2",
            description: "\u9AD8\u8D28\u91CF\u6F14\u8BB2\uFF0C\u953B\u70BC\u542C\u529B\u540C\u65F6\u5F00\u62D3\u89C6\u91CE",
            difficulty: "\u4E2D\u9AD8\u7EA7",
            link: "https://pan.quark.cn/s/62e8d536a34f"
          }
        ]
      }
    ]);
    const selectedCategory = ref("all");
    const filteredResources = computed(() => {
      if (selectedCategory.value === "all") {
        return categories.value;
      }
      return categories.value.filter((cat) => cat.id === selectedCategory.value);
    });
    const openLink = (url) => {
      (void 0).open(url, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center px-4 py-8"${_scopeId}><div class="text-center mb-8"${_scopeId}><h1 class="text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("resource_sharing"))}</h1><p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"${_scopeId}> \u4EE5\u4E0B\u662F\u6574\u7406\u7684\u4E00\u4E9B\u82F1\u8BED\u5B66\u4E60\u8D44\u6E90\uFF0C\u5E0C\u671B\u5BF9\u5927\u5BB6\u6709\u6240\u5E2E\u52A9\uFF01 </p></div><div class="card-white flex flex-wrap justify-center gap-2 mb-8 p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(BaseButton, {
              type: selectedCategory.value === "all" ? "primary" : "info",
              onClick: ($event) => selectedCategory.value = "all"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("all_resources"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("all_resources")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(categories.value, (category) => {
              _push2(ssrRenderComponent(BaseButton, {
                key: category.id,
                type: selectedCategory.value === category.id ? "primary" : "info",
                onClick: ($event) => selectedCategory.value = category.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(category.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(category.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="w-full"${_scopeId}><!--[-->`);
            ssrRenderList(filteredResources.value, (category) => {
              _push2(`<div class="mb-12"${_scopeId}><div class="text-center mb-6"${_scopeId}><h2 class="text-2xl font-bold mb-2"${_scopeId}>${ssrInterpolate(category.icon)} ${ssrInterpolate(category.name)}</h2>`);
              if (category.description) {
                _push2(`<p class="text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(category.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (category.subcategories) {
                _push2(`<!--[-->`);
                ssrRenderList(category.subcategories, (subcategory) => {
                  _push2(`<div class="mb-10"${_scopeId}><div class="text-center mb-4"${_scopeId}><h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(subcategory.name)}</h3>`);
                  if (subcategory.description) {
                    _push2(`<p class="text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(subcategory.description)}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"${_scopeId}><!--[-->`);
                  ssrRenderList(subcategory.resources, (resource) => {
                    _push2(ssrRenderComponent(ResourceCard, {
                      key: resource.name,
                      resource,
                      onOpenLink: openLink
                    }, null, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"${_scopeId}><!--[-->`);
                ssrRenderList(category.resources, (resource) => {
                  _push2(ssrRenderComponent(ResourceCard, {
                    key: resource.name,
                    resource,
                    onOpenLink: openLink
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"${_scopeId}><div class="card-white"${_scopeId}><div class="text-xl font-bold mb-4"${_scopeId}>\u6E29\u99A8\u63D0\u793A</div><ul class="space-y-2 text-gray-600 dark:text-gray-300"${_scopeId}><li${_scopeId}>\u6240\u6709\u8D44\u6E90\u5747\u6765\u81EA\u4E92\u8054\u7F51\u6536\u96C6\uFF0C\u4EC5\u4F9B\u5B66\u4E60\u4EA4\u6D41\u4F7F\u7528</li><li${_scopeId}> \u5982\u679C\u94FE\u63A5\u5931\u6548\uFF0C\u8BF7\u53CA\u65F6<a${ssrRenderAttr("href", `https://v.wjx.cn/vm/ev0W7fv.aspx#`)} target="_blank"${_scopeId}>\u544A\u77E5</a>\uFF0C\u6211\u4F1A\u5C3D\u5FEB\u66F4\u65B0 </li></ul></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center px-4 py-8" }, [
                createVNode("div", { class: "text-center mb-8" }, [
                  createVNode("h1", { class: "text-4xl font-bold mb-4" }, toDisplayString(_ctx.$t("resource_sharing")), 1),
                  createVNode("p", { class: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" }, " \u4EE5\u4E0B\u662F\u6574\u7406\u7684\u4E00\u4E9B\u82F1\u8BED\u5B66\u4E60\u8D44\u6E90\uFF0C\u5E0C\u671B\u5BF9\u5927\u5BB6\u6709\u6240\u5E2E\u52A9\uFF01 ")
                ]),
                createVNode("div", { class: "card-white flex flex-wrap justify-center gap-2 mb-8 p-4" }, [
                  createVNode(BaseButton, {
                    type: selectedCategory.value === "all" ? "primary" : "info",
                    onClick: ($event) => selectedCategory.value = "all"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("all_resources")), 1)
                    ]),
                    _: 1
                  }, 8, ["type", "onClick"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                    return openBlock(), createBlock(BaseButton, {
                      key: category.id,
                      type: selectedCategory.value === category.id ? "primary" : "info",
                      onClick: ($event) => selectedCategory.value = category.id
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(category.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["type", "onClick"]);
                  }), 128))
                ]),
                createVNode("div", { class: "w-full" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(filteredResources.value, (category) => {
                    return openBlock(), createBlock("div", {
                      key: category.id,
                      class: "mb-12"
                    }, [
                      createVNode("div", { class: "text-center mb-6" }, [
                        createVNode("h2", { class: "text-2xl font-bold mb-2" }, toDisplayString(category.icon) + " " + toDisplayString(category.name), 1),
                        category.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-gray-600 dark:text-gray-300"
                        }, toDisplayString(category.description), 1)) : createCommentVNode("", true)
                      ]),
                      category.subcategories ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(category.subcategories, (subcategory) => {
                        return openBlock(), createBlock("div", {
                          key: subcategory.name,
                          class: "mb-10"
                        }, [
                          createVNode("div", { class: "text-center mb-4" }, [
                            createVNode("h3", { class: "text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200" }, toDisplayString(subcategory.name), 1),
                            subcategory.description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-gray-600 dark:text-gray-300"
                            }, toDisplayString(subcategory.description), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(subcategory.resources, (resource) => {
                              return openBlock(), createBlock(ResourceCard, {
                                key: resource.name,
                                resource,
                                onOpenLink: openLink
                              }, null, 8, ["resource"]);
                            }), 128))
                          ])
                        ]);
                      }), 128)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(category.resources, (resource) => {
                          return openBlock(), createBlock(ResourceCard, {
                            key: resource.name,
                            resource,
                            onOpenLink: openLink
                          }, null, 8, ["resource"]);
                        }), 128))
                      ]))
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "mt-12 pt-8 border-t border-gray-200 dark:border-gray-700" }, [
                  createVNode("div", { class: "card-white" }, [
                    createVNode("div", { class: "text-xl font-bold mb-4" }, "\u6E29\u99A8\u63D0\u793A"),
                    createVNode("ul", { class: "space-y-2 text-gray-600 dark:text-gray-300" }, [
                      createVNode("li", null, "\u6240\u6709\u8D44\u6E90\u5747\u6765\u81EA\u4E92\u8054\u7F51\u6536\u96C6\uFF0C\u4EC5\u4F9B\u5B66\u4E60\u4EA4\u6D41\u4F7F\u7528"),
                      createVNode("li", null, [
                        createTextVNode(" \u5982\u679C\u94FE\u63A5\u5931\u6548\uFF0C\u8BF7\u53CA\u65F6"),
                        createVNode("a", {
                          href: `https://v.wjx.cn/vm/ev0W7fv.aspx#`,
                          target: "_blank"
                        }, "\u544A\u77E5"),
                        createTextVNode("\uFF0C\u6211\u4F1A\u5C3D\u5FEB\u66F4\u65B0 ")
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=doc-rst1j7Co.mjs.map
