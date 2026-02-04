import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, ref, computed, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { O as Origin, A as APP_NAME } from "./env-CUoXYOyW.js";
import { u as useRoute, a as useSeoMeta } from "../server.mjs";
import "@floating-ui/dom";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
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
        case "入门":
          return "bg-green-500";
        case "基础":
          return "bg-blue-500";
        case "中级":
          return "bg-purple-500";
        case "进阶":
          return "bg-amber-500";
        case "高级":
          return "bg-red-500";
        case "全级别":
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
        _push(`<div class="text-sm text-gray-600 dark:text-gray-300"><span class="font-medium">🌟 ${ssrInterpolate(_ctx.$t("features"))}</span>${ssrInterpolate(__props.resource.features)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.resource.suitable) {
        _push(`<div class="text-sm text-gray-600 dark:text-gray-300"><span class="font-medium">📌 ${ssrInterpolate(_ctx.$t("suitable_for"))}</span>${ssrInterpolate(__props.resource.suitable)}</div>`);
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
    let title = APP_NAME + " 英语学习资源分享";
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
        name: "新概念英语",
        description: "经典英语教材，适合系统学习",
        resources: [
          {
            name: "新概念资源合集",
            description: "",
            difficulty: "包含后面所有的内容",
            link: "https://pan.quark.cn/s/6b12da160020"
          },
          {
            name: "新概念英语第一册",
            description: "适合英语初学者",
            difficulty: "入门",
            link: "https://pan.quark.cn/s/0d2ece46983f"
          },
          {
            name: "新概念英语第二册",
            description: "基础英语学习，巩固语法和词汇",
            difficulty: "基础",
            link: "https://pan.quark.cn/s/df29bb396728"
          },
          {
            name: "新概念英语第三册",
            description: "提高英语水平，增强阅读能力",
            difficulty: "进阶",
            link: "https://pan.quark.cn/s/ec39dc7cbe5b"
          },
          {
            name: "新概念英语第四册",
            description: "高级英语学习，提升综合能力",
            difficulty: "高级",
            link: "https://pan.quark.cn/s/207a2cc8a320"
          },
          {
            name: "新概念英青少年版",
            description: "儿童读物",
            difficulty: "7岁至14岁",
            link: "https://pan.quark.cn/s/4628b00b39c0"
          },
          {
            name: "新概念英语1-4 教材高清 PDF",
            description: "仅 1-4 册的教材高清扫描版 PDF",
            difficulty: "",
            link: "https://pan.quark.cn/s/f1e7739ed806"
          },
          {
            name: "新概念讲解视频",
            description: "多家机构/个人的讲解视频",
            difficulty: "",
            link: "https://pan.quark.cn/s/07e25ee6de9f"
          }
        ]
      },
      {
        id: "exam",
        name: "电视/电影",
        description: "一些不错的美/英剧，可练听力和口语",
        resources: [
          {
            name: "电视/电影资源合集",
            difficulty: "包含后面所有的内容",
            link: "https://pan.quark.cn/s/84ecb30b700b"
            //159
            // link: 'https://pan.quark.cn/s/e9b62b79c48c',
          },
          {
            name: "老友记",
            description: "",
            difficulty: "喜剧/爱情",
            link: "https://pan.quark.cn/s/c17770edfa15"
          },
          {
            name: "生活大爆炸",
            description: "",
            difficulty: "喜剧/爱情",
            link: "https://pan.quark.cn/s/3e66da8ce1c4"
          },
          {
            name: "是大臣/是首相",
            description: "",
            difficulty: "喜剧/讽刺",
            link: "https://pan.quark.cn/s/2c62ce3e220d"
          },
          {
            name: "破产姐妹",
            description: "",
            difficulty: "喜剧",
            link: "https://pan.quark.cn/s/018600971998"
          },
          {
            name: "绝望主妇",
            description: "",
            difficulty: "悬疑",
            link: "https://pan.quark.cn/s/1c67ae200c2e"
          },
          {
            name: "纸牌屋",
            description: "",
            difficulty: "纸牌屋",
            link: "https://pan.quark.cn/s/5ba146c46180"
          }
        ]
      },
      {
        id: "grammar",
        name: "语法学习",
        description: "",
        subcategories: [
          {
            name: "经典教材",
            description: "",
            resources: [
              {
                name: "英语语法新思维",
                author: "张满胜",
                features: "从思维角度讲解语法，注重理解而非死记硬背，分为初级、中级、高级三册，循序渐进",
                suitable: "希望系统建立语法体系的学习者",
                difficulty: "",
                link: "https://pan.quark.cn/s/d06abef6c737"
              },
              {
                name: "薄冰英语语法",
                author: "薄冰",
                features: "老牌经典,体系完整,分类非常细,查语法点方便",
                suitable: "中学生或基础较弱的学习者",
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
                name: "旋元估文法",
                author: "旋元估",
                features: "以通俗易懂的语言解析复杂语法，强调“理解逻辑”，适合突破语法难点",
                suitable: "对传统语法教学感到枯燥，想轻松掌握核心逻辑的学习者",
                difficulty: "繁体中文版",
                link: "https://pan.quark.cn/s/0d0de559794e"
              }
            ]
          },
          {
            name: "进阶提升",
            description: "",
            resources: [
              {
                name: "剑桥英语语法(English Grammar in Use)",
                author: "剑桥大学出版",
                features: "分为初级、中级、高级三册，经典畅销语法自学书，解释简明且有大量练习",
                suitable: "需要结合国际考试的学习者",
                description: "",
                difficulty: "中文版",
                link: "https://pan.quark.cn/s/d4a6ef53c04d"
              },
              {
                name: "Oxford English Grammar(牛津英语语法)",
                author: "Sidney Greenbaum & Gerald Nelson",
                features: "分为基础、提升、高级三册，英式语法权威，解释清晰、例句地道，适合备考雅思/托福",
                suitable: "想全面系统梳理语法体系的人",
                difficulty: "英文版",
                link: "https://pan.quark.cn/s/ca505875e68c"
              },
              {
                name: "实用英语用法(Practical English Usage)",
                author: "Michael Swan",
                features: "解释非常细致，尤其适合纠正常见错误和困惑",
                suitable: "中高级学习者，适合作为语法问题的工具书",
                difficulty: "中文版/英文版",
                link: "https://pan.quark.cn/s/05006e705a77"
              }
            ]
          }
        ]
      },
      {
        id: "listening",
        name: "听力训练",
        description: "提升英语听力水平",
        resources: [
          {
            name: "VOA慢速英语合集",
            description: "新闻类听力材料，语速适中，内容丰富",
            difficulty: "初级",
            link: "https://pan.quark.cn/s/681794bffc6e"
          },
          // {
          //   name: 'BBC Learning English',
          //   description: 'BBC官方英语学习资源，涵盖多方面内容',
          //   difficulty: '中高级',
          //   link: 'https://pan.baidu.com/s/xxx',
          // },
          {
            name: "TED-ED 科普动画",
            description: "TED-Ed 是一个专为初高中生所设计的在3到5分钟长的科普动画課程",
            difficulty: "初级",
            link: "https://pan.quark.cn/s/d3d83038afb9"
          },
          {
            name: "哈弗演讲",
            description: "高质量演讲，锻炼听力同时开拓视野",
            difficulty: "中高级",
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
            _push2(`<div class="flex flex-col items-center justify-center px-4 py-8"${_scopeId}><div class="text-center mb-8"${_scopeId}><h1 class="text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("resource_sharing"))}</h1><p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"${_scopeId}> 以下是整理的一些英语学习资源，希望对大家有所帮助！ </p></div><div class="card-white flex flex-wrap justify-center gap-2 mb-8 p-4"${_scopeId}>`);
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
            _push2(`<!--]--></div><div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"${_scopeId}><div class="card-white"${_scopeId}><div class="text-xl font-bold mb-4"${_scopeId}>温馨提示</div><ul class="space-y-2 text-gray-600 dark:text-gray-300"${_scopeId}><li${_scopeId}>所有资源均来自互联网收集，仅供学习交流使用</li><li${_scopeId}> 如果链接失效，请及时<a${ssrRenderAttr("href", `https://v.wjx.cn/vm/ev0W7fv.aspx#`)} target="_blank"${_scopeId}>告知</a>，我会尽快更新 </li></ul></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center px-4 py-8" }, [
                createVNode("div", { class: "text-center mb-8" }, [
                  createVNode("h1", { class: "text-4xl font-bold mb-4" }, toDisplayString(_ctx.$t("resource_sharing")), 1),
                  createVNode("p", { class: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" }, " 以下是整理的一些英语学习资源，希望对大家有所帮助！ ")
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
                    createVNode("div", { class: "text-xl font-bold mb-4" }, "温馨提示"),
                    createVNode("ul", { class: "space-y-2 text-gray-600 dark:text-gray-300" }, [
                      createVNode("li", null, "所有资源均来自互联网收集，仅供学习交流使用"),
                      createVNode("li", null, [
                        createTextVNode(" 如果链接失效，请及时"),
                        createVNode("a", {
                          href: `https://v.wjx.cn/vm/ev0W7fv.aspx#`,
                          target: "_blank"
                        }, "告知"),
                        createTextVNode("，我会尽快更新 ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=doc-rst1j7Co.js.map
