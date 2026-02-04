import { defineComponent, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { V as VolumeIcon } from "./VolumeIcon--ng6Uza7.js";
import { useRoute, useRouter } from "vue-router";
import { c as useBaseStore, a as useRuntimeStore, b as useSettingStore } from "./BaseIcon-Cnj57dgy.js";
import { u as usePlayBeep, a as usePlayCorrect, b as usePlayWordAudio } from "./sound-fV5MruVn.js";
import { u as useEvents } from "./eventBus-C4Xc_Jqv.js";
import { u as useStartKeyboardEventListener } from "./event-qcx2F2JA.js";
import { m as ShortcutKey } from "./env-CUoXYOyW.js";
import { h as _export_sfc } from "../server.mjs";
import "./volume-low-D-Q_rQNL.js";
import "pinia";
import "idb-keyval";
import "axios";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "mitt";
import "@floating-ui/dom";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    const base = useBaseStore();
    useRuntimeStore();
    const playBeep = usePlayBeep();
    const playCorrect = usePlayCorrect();
    const playWordAudio = usePlayWordAudio();
    ref(false);
    let dict = ref();
    let questions = ref([]);
    let index = ref(0);
    function select(i) {
      let q = questions.value[index.value];
      if (!q || q.submitted) return;
      q.selectedIndex = i;
      q.submitted = true;
      if (i === q.correctIndex) {
        playCorrect();
      } else {
        playBeep();
        let temp = q.stem.word.toLowerCase();
        if (!base.wrong.words.find((v) => v.word.toLowerCase() === temp)) {
          base.wrong.words.push(q.stem);
          base.wrong.length = base.wrong.words.length;
        }
      }
    }
    function next() {
      if (index.value < questions.value.length - 1) index.value++;
    }
    function end() {
      router.back();
    }
    useStartKeyboardEventListener();
    useEvents([
      [ShortcutKey.ChooseA, () => select(0)],
      [ShortcutKey.ChooseB, () => select(1)],
      [ShortcutKey.ChooseC, () => select(2)],
      [ShortcutKey.Next, () => next()]
    ]);
    const settingStore = useSettingStore();
    let aShortcutKey = settingStore.shortcutKeyMap[ShortcutKey.ChooseA];
    let bShortcutKey = settingStore.shortcutKeyMap[ShortcutKey.ChooseB];
    let cShortcutKey = settingStore.shortcutKeyMap[ShortcutKey.ChooseC];
    let nextShortcutKey = settingStore.shortcutKeyMap[ShortcutKey.Next];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card flex flex-col" data-v-453c0006${_scopeId}><div class="flex items-center justify-between" data-v-453c0006${_scopeId}><div class="page-title" data-v-453c0006${_scopeId}>测试：${ssrInterpolate(unref(dict)?.name)}</div><div class="text-base" data-v-453c0006${_scopeId}>${ssrInterpolate(unref(index) + 1)} / ${ssrInterpolate(unref(questions).length)}</div></div><div class="line my-2" data-v-453c0006${_scopeId}></div>`);
            if (unref(questions).length) {
              _push2(`<div class="flex flex-col gap-4" data-v-453c0006${_scopeId}><div class="text-2xl en-article-family flex items-center gap-2" data-v-453c0006${_scopeId}><span data-v-453c0006${_scopeId}>题目：${ssrInterpolate(unref(questions)[unref(index)].stem.word)}</span>`);
              _push2(ssrRenderComponent(VolumeIcon, {
                simple: true,
                title: "发音",
                cb: () => unref(playWordAudio)(unref(questions)[unref(index)].stem.word)
              }, null, _parent2, _scopeId));
              _push2(`</div><div style="${ssrRenderStyle({ "height": "20px" })}" data-v-453c0006${_scopeId}></div><div class="grid gap-2" data-v-453c0006${_scopeId}><!--[-->`);
              ssrRenderList(unref(questions)[unref(index)].optionTexts, (opt, i) => {
                _push2(`<div class="${ssrRenderClass([{
                  "text-green-600": unref(questions)[unref(index)].submitted && i === unref(questions)[unref(index)].correctIndex,
                  "text-red-600": unref(questions)[unref(index)].submitted && i === unref(questions)[unref(index)].selectedIndex && i !== unref(questions)[unref(index)].correctIndex
                }, "option border rounded p-2 cursor-pointer"])}" data-v-453c0006${_scopeId}><span data-v-453c0006${_scopeId}><span class="italic" data-v-453c0006${_scopeId}>${ssrInterpolate(["A", "B", "C"][i])}</span> [<span data-v-453c0006${_scopeId}>${ssrInterpolate([unref(aShortcutKey), unref(bShortcutKey), unref(cShortcutKey)][i])}</span>] ${ssrInterpolate(opt)}</span></div>`);
              });
              _push2(`<!--]--></div>`);
              if (unref(questions)[unref(index)].submitted) {
                _push2(`<div class="mt-4" data-v-453c0006${_scopeId}><div class="mb-2 text-base" data-v-453c0006${_scopeId}>选项解析：</div><div class="grid gap-2 grid-cols-1 md:grid-cols-3" data-v-453c0006${_scopeId}><!--[-->`);
                ssrRenderList(unref(questions)[unref(index)].candidates, (c, i) => {
                  _push2(`<div class="p-2 rounded bg-[--bg-card-secend]" data-v-453c0006${_scopeId}><div class="en-article-family text-lg" data-v-453c0006${_scopeId}>${ssrInterpolate(c.word)}</div><div class="mt-1 text-sm" data-v-453c0006${_scopeId}>${ssrInterpolate(c.wordObj?.trans?.map((v) => v.cn).join("；") || "当前词典未收录释义")}</div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="mt-6 flex" data-v-453c0006${_scopeId}>`);
              _push2(ssrRenderComponent(BaseButton, {
                type: "primary",
                onClick: next
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`继续测试[${ssrInterpolate(unref(nextShortcutKey))}]`);
                  } else {
                    return [
                      createTextVNode("继续测试[" + toDisplayString(unref(nextShortcutKey)) + "]", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(BaseButton, {
                type: "info",
                onClick: end
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`结束`);
                  } else {
                    return [
                      createTextVNode("结束")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card flex flex-col" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", { class: "page-title" }, "测试：" + toDisplayString(unref(dict)?.name), 1),
                  createVNode("div", { class: "text-base" }, toDisplayString(unref(index) + 1) + " / " + toDisplayString(unref(questions).length), 1)
                ]),
                createVNode("div", { class: "line my-2" }),
                unref(questions).length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col gap-4"
                }, [
                  createVNode("div", { class: "text-2xl en-article-family flex items-center gap-2" }, [
                    createVNode("span", null, "题目：" + toDisplayString(unref(questions)[unref(index)].stem.word), 1),
                    createVNode(VolumeIcon, {
                      simple: true,
                      title: "发音",
                      cb: () => unref(playWordAudio)(unref(questions)[unref(index)].stem.word)
                    }, null, 8, ["cb"])
                  ]),
                  createVNode("div", { style: { "height": "20px" } }),
                  createVNode("div", { class: "grid gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(questions)[unref(index)].optionTexts, (opt, i) => {
                      return openBlock(), createBlock("div", {
                        key: i,
                        class: ["option border rounded p-2 cursor-pointer", {
                          "text-green-600": unref(questions)[unref(index)].submitted && i === unref(questions)[unref(index)].correctIndex,
                          "text-red-600": unref(questions)[unref(index)].submitted && i === unref(questions)[unref(index)].selectedIndex && i !== unref(questions)[unref(index)].correctIndex
                        }],
                        onClick: ($event) => select(i)
                      }, [
                        createVNode("span", null, [
                          createVNode("span", { class: "italic" }, toDisplayString(["A", "B", "C"][i]), 1),
                          createTextVNode(" ["),
                          createVNode("span", null, toDisplayString([unref(aShortcutKey), unref(bShortcutKey), unref(cShortcutKey)][i]), 1),
                          createTextVNode("] " + toDisplayString(opt), 1)
                        ])
                      ], 10, ["onClick"]);
                    }), 128))
                  ]),
                  unref(questions)[unref(index)].submitted ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4"
                  }, [
                    createVNode("div", { class: "mb-2 text-base" }, "选项解析："),
                    createVNode("div", { class: "grid gap-2 grid-cols-1 md:grid-cols-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(questions)[unref(index)].candidates, (c, i) => {
                        return openBlock(), createBlock("div", {
                          key: i,
                          class: "p-2 rounded bg-[--bg-card-secend]"
                        }, [
                          createVNode("div", { class: "en-article-family text-lg" }, toDisplayString(c.word), 1),
                          createVNode("div", { class: "mt-1 text-sm" }, toDisplayString(c.wordObj?.trans?.map((v) => v.cn).join("；") || "当前词典未收录释义"), 1)
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "mt-6 flex" }, [
                    createVNode(BaseButton, {
                      type: "primary",
                      onClick: next
                    }, {
                      default: withCtx(() => [
                        createTextVNode("继续测试[" + toDisplayString(unref(nextShortcutKey)) + "]", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(BaseButton, {
                      type: "info",
                      onClick: end
                    }, {
                      default: withCtx(() => [
                        createTextVNode("结束")
                      ]),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(words)/words-test/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-453c0006"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CyLE3HAV.js.map
