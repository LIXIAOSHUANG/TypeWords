import { P as PracticeLayout, S as SettingDialog, _ as __unplugin_components_2, b as __unplugin_components_8, a as Panel, C as ConflictNotice, c as Space } from './PracticeLayout-bGHxKcR-.mjs';
import { _ as __unplugin_components_7 } from './BaseList-BGyirn9c.mjs';
import { _ as __unplugin_components_10 } from './translate-jzfWdenW.mjs';
import { a as __unplugin_components_4, _ as __unplugin_components_5$1 } from './eye16-regular-Cm9O3Lp0.mjs';
import { defineComponent, ref, watch, computed, provide, resolveDirective, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, isRef, markRaw, createElementBlock, createElementVNode, inject, defineAsyncComponent, useSSRContext, useTemplateRef, nextTick } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { _ as __unplugin_components_5 } from './question-circle20-regular-ixBvu_Z4.mjs';
import { _ as __unplugin_components_6 } from './chevron-left20-filled-B_9PTvDy.mjs';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderDynamicModel } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { c as useBaseStore, a as useRuntimeStore, b as useSettingStore, I as getDefaultArticle, h as _nextTick, P as msToMinute, H as total, B as BaseIcon, g as getDefaultDict, A as resourceWrap, o as _getDictDataByUrl, T as Toast, d as cloneDeep, K as setUserDictProp, M as addStat, J as getDefaultWord, v as msToHourMinute, _ as _dateFormat, m as isMobile, l as loadJsLib, t as shuffle } from './BaseIcon-Cnj57dgy.mjs';
import { o as ShortcutKey, h as Tooltip, r as DICT_LIST, i as DictType, e as AppEnv, P as PracticeArticleWordType, L as LIB_JS_URL, T as TourConfig } from './env-CUoXYOyW.mjs';
import { A as ArticleList } from './ArticleList-qKu_FTcS.mjs';
import { u as usePlaySentenceAudio, g as genArticleSectionData, E as EditArticle } from './EditArticle-CDTYchLT.mjs';
import { c as useArticleOptions, u as useWordOptions } from './dict-Dqcdsgfb.mjs';
import { a as useStartKeyboardEventListener, u as useDisableEventListener } from './event-qcx2F2JA.mjs';
import { u as useTheme } from './theme-4yK9pI7O.mjs';
import { A as ArticleAudio } from './ArticleAudio-HKnHxiX1.mjs';
import { h as _export_sfc, g as useI18n } from './server.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { b as usePlayBeep, d as usePlayKeyboardAudio, a as usePlayWordAudio } from './sound-fV5MruVn.mjs';
import { u as usePracticeStore } from './practice-DjPnwpm9.mjs';
import { u as useEvents, E as EventKey, e as emitter } from './eventBus-C4Xc_Jqv.mjs';
import { c as setPracticeArticleCache, b as getPracticeArticleCache } from './cache-C4S9Fl6v.mjs';
import { useRouter, useRoute } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';
import { nanoid } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import { s as setInterval } from './interval-CYUoNYlE.mjs';
import './settings20-regular-fog7odRI.mjs';
import './text-underline-double20-regular-Urqfz4U4.mjs';
import './WordSetting-BBzklAbh.mjs';
import './Switch-BoRsOuOV.mjs';
import './Textarea-Ca12-GD2.mjs';
import './VolumeIcon--ng6Uza7.mjs';
import './volume-low-D-Q_rQNL.mjs';
import './Slider-ibM1Ch1E.mjs';
import './Radio-WTKpkBn7.mjs';
import './InputNumber-CwEqYfu9.mjs';
import './ConflictNoticeText-DBXHKUby.mjs';
import './WeChat-CaY8PzZX.mjs';
import './Dialog-BoKDmA_Y.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/axios/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/duration.js';
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
import 'node:fs';
import 'node:url';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pathe/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ipx/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-devtools-stub/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/devalue/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/utils.mjs';
import './wechat-CXtsDFCA.mjs';
import './search24-regular-Cw07GsNM.mjs';
import './BaseInput-mlIHP8lZ.mjs';
import './checkmark-circle16-regular-BfJF9NXt.mjs';
import './play20-regular-ozWzgLyX.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/md5/md5.js';
import './Empty-DqqzidIv.mjs';
import './NuxtImg-BgeLVH9C.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/string-comparison/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/copy-to-clipboard/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/mitt/dist/mitt.mjs';

const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M4.255 6a7 7 0 1 1-1.242 3.568A.53.53 0 0 0 2.5 9a.474.474 0 0 0-.48.435q-.018.28-.02.565a8 8 0 1 0 1.5-4.665V3.5a.5.5 0 0 0-1 0v3A.5.5 0 0 0 3 7h3a.5.5 0 0 0 0-1zM8 7.751a1 1 0 0 1 1.49-.87l3.998 2.25a1 1 0 0 1 0 1.742l-3.997 2.25A1 1 0 0 1 8 12.254zm4.997 2.251L9 7.752v4.5z"
    }, null, -1)
  ])]);
}
const __unplugin_components_3 = markRaw({ name: "fluent-replay20-regular", render });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "EditSingleArticleModal",
  __ssrInlineRender: true,
  props: {
    article: { default: () => getDefaultArticle() },
    modelValue: { type: Boolean, default: false }
  },
  emits: ["save", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const Dialog = defineAsyncComponent(() => import('./Dialog-BoKDmA_Y.mjs'));
    const props = __props;
    const emit = __emit;
    useDisableEventListener(() => props.modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Dialog), mergeProps({
        header: false,
        "model-value": props.modelValue,
        onClose: ($event) => emit("update:modelValue", false),
        "full-screen": true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="wrapper" data-v-0e855ee3${_scopeId}>`);
            _push2(ssrRenderComponent(EditArticle, {
              article: __props.article,
              onSave: (val) => emit("save", val)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "wrapper" }, [
                createVNode(EditArticle, {
                  article: __props.article,
                  onSave: (val) => emit("save", val)
                }, null, 8, ["article", "onSave"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/EditSingleArticleModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const EditSingleArticleModal = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-0e855ee3"]]), { __name: "EditSingleArticleModal" });
const _sfc_main$4 = {
  __name: "QuestionItem",
  __ssrInlineRender: true,
  props: {
    stem: String,
    options: Array,
    correctAnswer: Array,
    // ['a', 'b']
    explanation: String,
    immediateFeedback: Boolean,
    questionIndex: Number,
    randomize: Boolean
  },
  emits: ["answered"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const originalOptions = props.options;
    const shuffledOptions = ref([]);
    const answerMap = ref([]);
    const isMultiple = computed(() => props.correctAnswer.length > 1);
    const userSelection = ref(isMultiple.value ? [] : "");
    const isSubmitted = ref(false);
    const isCorrect = ref(null);
    const initOptions = () => {
      const indices = originalOptions.map((_, i) => i);
      const shuffledIndices = props.randomize ? shuffle(indices) : indices;
      shuffledOptions.value = shuffledIndices.map((i) => originalOptions[i]);
      answerMap.value = shuffledIndices;
    };
    initOptions();
    const getLetter = (index) => ["a", "b", "c", "d"][index];
    const getOriginalLetter = (shuffledIndex) => getLetter(answerMap.value[shuffledIndex]);
    const submit = () => {
      isSubmitted.value = true;
      const selectedLetters = isMultiple.value ? userSelection.value.map((val) => getOriginalLetter(shuffledOptions.value.indexOf(val))) : [getOriginalLetter(shuffledOptions.value.indexOf(userSelection.value))];
      isCorrect.value = selectedLetters.sort().join() === props.correctAnswer.sort().join();
    };
    const feedbackClass = (i) => {
      if (!isSubmitted.value) return "";
      const selected = isMultiple.value ? userSelection.value.includes(shuffledOptions.value[i]) : userSelection.value === shuffledOptions.value[i];
      const correct = props.correctAnswer.includes(getOriginalLetter(i));
      if (correct) return "bg-green-200";
      if (selected && !correct) return "bg-red-200";
      return "";
    };
    const noChoseClass = computed(() => {
      if (!isSubmitted.value) return "";
      const selected = isMultiple.value ? userSelection.value.length : userSelection.value;
      return !selected && "bg-red-400";
    });
    __expose({
      submit,
      getResult: () => {
        const selectedLetters = isMultiple.value ? userSelection.value.map((val) => getOriginalLetter(shuffledOptions.value.indexOf(val))) : [getOriginalLetter(shuffledOptions.value.indexOf(userSelection.value))];
        return {
          index: props.questionIndex,
          selected: selectedLetters,
          isCorrect: selectedLetters.sort().join() === props.correctAnswer.sort().join()
        };
      }
    });
    const optionRefs = ref([]);
    const container = ref(null);
    const layoutClass = ref("");
    const calculateLayout = () => {
      if (!container.value || optionRefs.value.length === 0) return;
      const containerWidth = container.value.clientWidth;
      const widths = optionRefs.value.map((el) => el.getBoundingClientRect().width);
      const totalWidth = widths.reduce((sum, w) => sum + w, 0);
      if (widths.some((w) => w > containerWidth / 2)) {
        layoutClass.value = "grid-cols-1";
        return;
      }
      if (totalWidth + 80 * (widths.length - 1) <= containerWidth) {
        layoutClass.value = "grid-cols-4";
        return;
      }
      layoutClass.value = "grid-cols-2";
    };
    watch(() => props.options, async () => {
      await nextTick();
      calculateLayout();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "question-item mb-4"
      }, _attrs))} data-v-cdc3ca7f><div class="${ssrRenderClass([noChoseClass.value, "mb-1"])}" data-v-cdc3ca7f><span class="font-family" data-v-cdc3ca7f>${ssrInterpolate(__props.questionIndex)}</span>. ${ssrInterpolate(__props.stem)}</div><div class="${ssrRenderClass([layoutClass.value, "grid gap-1"])}" data-v-cdc3ca7f><!--[-->`);
      ssrRenderList(shuffledOptions.value, (opt, i) => {
        _push(`<label class="${ssrRenderClass([feedbackClass(i), "option border rounded cursor-pointer hover:bg-gray-300"])}" data-v-cdc3ca7f><input${ssrRenderAttr("type", isMultiple.value ? "checkbox" : "radio")}${ssrRenderAttr("name", `question-${__props.questionIndex}`)} class="mr-2"${ssrRenderAttr("value", opt)}${ssrRenderDynamicModel(isMultiple.value ? "checkbox" : "radio", userSelection.value, opt)} data-v-cdc3ca7f><span data-v-cdc3ca7f>(<span class="italic" data-v-cdc3ca7f>${ssrInterpolate(["a", "b", "c", "d"][i])}</span>) ${ssrInterpolate(opt)}</span></label>`);
      });
      _push(`<!--]--></div>`);
      if (__props.explanation && isSubmitted.value) {
        _push(`<div class="mt-2 text-xl text-gray-600" data-v-cdc3ca7f>${ssrInterpolate(_ctx.$t("explanation"))}\uFF1A${ssrInterpolate(__props.explanation)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/QuestionItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const QuestionItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cdc3ca7f"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "QuestionForm",
  __ssrInlineRender: true,
  props: {
    questions: { default: [] },
    duration: { default: 300 },
    immediateFeedback: { default: false },
    randomize: { default: false }
  },
  setup(__props) {
    const props = __props;
    useTemplateRef("questionRefs1");
    ref(false);
    ref(props.duration || 300);
    const onAnswered = (res) => {
      console.log("Answered:", res);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question-form en-article-family" }, _attrs))}><div class="flex items-center justify-between"><div class="font-bold">Multiple choice questions ${ssrInterpolate(_ctx.$t("multiple_choice"))}</div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div><form><!--[-->`);
      ssrRenderList(__props.questions, (q, i) => {
        _push(ssrRenderComponent(QuestionItem, {
          key: i,
          ref_for: true,
          ref: "questionRefs1",
          "question-index": i + 1,
          stem: q.stem,
          options: q.options,
          "correct-answer": q.correctAnswer,
          explanation: q.explanation,
          "immediate-feedback": props.immediateFeedback,
          randomize: props.randomize,
          onAnswered
        }, null, _parent));
      });
      _push(`<!--]--></form><div class="center items-center gap-2 mt-10"><button class="bg-green-600 text-white px-6 py-2 rounded">${ssrInterpolate(_ctx.$t("submit_exam"))}</button><span class="text-xl">${ssrInterpolate(_ctx.$t("exam_color_hint"))}</span></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/QuestionForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
Object.assign(_sfc_main$3, { __name: "QuestionForm" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TypingWord",
  props: {
    word: null,
    isTyping: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const settingStore = useSettingStore();
    function compare(a, b) {
      return settingStore.ignoreCase ? a.toLowerCase() === b.toLowerCase() : a === b;
    }
    const isHide = computed(() => {
      if (settingStore.dictation && props.word.type === PracticeArticleWordType.Word) return "hide";
      return "";
    });
    const list = computed(() => {
      let t = [];
      let right = "";
      let wrong = "";
      if (props.word.input.length) {
        if (props.word.input.length === props.word.word.length) {
          if (settingStore.ignoreCase ? props.word.input.toLowerCase() === props.word.word.toLowerCase() : props.word.input === props.word.word) {
            t.push({
              type: "word-complete",
              val: props.word.input
            });
            return t;
          }
        }
        props.word.input.split("").forEach((k, i) => {
          if (k === " ") {
            right = wrong = "";
            t.push({
              type: "space"
            });
          } else {
            if (compare(k, props.word.word[i])) {
              right += k;
              wrong = "";
              if (t.length) {
                let last = t[t.length - 1];
                if (last.type === "input-right") {
                  last.val = right;
                } else {
                  t.push({
                    type: "input-right",
                    val: right
                  });
                }
              } else {
                t.push({
                  type: "input-right",
                  val: right
                });
              }
            } else {
              wrong += k;
              right = "";
              if (t.length) {
                let last = t[t.length - 1];
                if (last.type === "input-wrong") {
                  last.val = wrong;
                } else {
                  t.push({
                    type: "input-wrong",
                    val: wrong
                  });
                }
              } else {
                t.push({
                  type: "input-wrong",
                  val: wrong
                });
              }
            }
          }
        });
        if (props.word.input.length < props.word.word.length) {
          t.push({
            type: "word-end",
            val: props.word.word.slice(props.word.input.length)
          });
        }
      } else {
        t.push({
          type: "word-end",
          val: props.word.word
        });
      }
      return t;
    });
    return () => {
      return list.value.map((item, i) => {
        if (item.type === "word-complete") {
          return createVNode("span", null, [item.val]);
        }
        if (item.type === "word-end") {
          return createVNode("span", {
            "className": "word-end " + isHide.value
          }, [item.val]);
        }
        if (item.type === "input-right") {
          return createVNode("span", {
            "className": props.isTyping ? "input-right" : ""
          }, [item.val]);
        }
        if (item.type === "input-wrong") {
          return createVNode("span", {
            "className": "input-wrong"
          }, [item.val]);
        }
        if (item.type === "space") {
          return createVNode(Space, {
            "isWrong": true
          }, null);
        }
      });
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/TypingWord.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TypingWord = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-b18e25c7"]]), { __name: "TypingWord" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TypingArticle",
  __ssrInlineRender: true,
  props: {
    article: { default: () => getDefaultArticle() },
    sectionIndex: { default: 0 },
    sentenceIndex: { default: 0 },
    wordIndex: { default: 0 },
    stringIndex: { default: 0 }
  },
  emits: ["ignore", "wrong", "play", "nextWord", "complete", "next", "replay"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t: $t } = useI18n();
    const props = __props;
    const emit = __emit;
    let typeArticleRef = ref();
    ref();
    let articleWrapperRef = ref(null);
    let sectionIndex = ref(0);
    let sentenceIndex = ref(0);
    let wordIndex = ref(0);
    let stringIndex = ref(0);
    let input = ref("");
    let wrong = ref("");
    let isSpace = ref(false);
    let isEnd = ref(false);
    let hoverIndex = ref({
      sectionIndex: -1,
      sentenceIndex: -1,
      wordIndex: -1
    });
    let cursor = ref({
      top: 0,
      left: 0
    });
    const currentIndex = computed(() => {
      return `${sectionIndex.value}${sentenceIndex.value}${wordIndex.value}`;
    });
    const playBeep = usePlayBeep();
    const playKeyboardAudio = usePlayKeyboardAudio();
    usePlayWordAudio();
    useWordOptions();
    const store = useBaseStore();
    const settingStore = useSettingStore();
    const statStore = usePracticeStore();
    const isMob = isMobile();
    watch([() => sectionIndex.value, () => sentenceIndex.value, () => wordIndex.value, () => stringIndex.value], ([a, b, c]) => {
      if (a !== 0 || b !== 0 || c !== 0) {
        setPracticeArticleCache({
          practiceData: {
            sectionIndex: sectionIndex.value,
            sentenceIndex: sentenceIndex.value,
            wordIndex: wordIndex.value
          },
          statStoreData: statStore.$state
        });
      }
      checkCursorPosition(a, b, c);
    });
    watch(
      () => settingStore.translate,
      () => {
        checkTranslateLocation().then(() => checkCursorPosition());
      }
    );
    watch(
      () => isEnd.value,
      (n) => {
        if (n) {
          _nextTick(() => {
            (void 0).scrollTo({
              top: (void 0).documentElement.scrollHeight,
              behavior: "smooth"
            });
          });
        } else {
          (void 0).scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    );
    function init() {
      if (!props.article.id) return;
      isSpace.value = isEnd.value = false;
      let d = getPracticeArticleCache();
      if (d) {
        sectionIndex.value = d.practiceData.sectionIndex;
        sentenceIndex.value = d.practiceData.sentenceIndex;
        wordIndex.value = d.practiceData.wordIndex;
        jump(sectionIndex.value, sentenceIndex.value, wordIndex.value);
        statStore.$patch(d.statStoreData);
      } else {
        wrong.value = input.value = "";
        sectionIndex.value = 0;
        sentenceIndex.value = 0;
        wordIndex.value = 0;
        stringIndex.value = 0;
        props.article.sections.map((v) => {
          v.map((w) => {
            w.words.map((s) => {
              s.input = "";
            });
          });
        });
        (void 0).scrollTo({ top: 0 });
      }
      _nextTick(() => {
        emit("play", { sentence: props.article.sections[sectionIndex.value][sentenceIndex.value], handle: false });
        if (isNameWord()) next();
      });
      checkTranslateLocation().then(() => checkCursorPosition());
    }
    function checkCursorPosition(a = sectionIndex.value, b = sentenceIndex.value, c = wordIndex.value) {
      _nextTick(() => {
        const currentWord = (void 0).querySelector(
          `.section:nth-of-type(${a + 1}) .sentence:nth-of-type(${b + 1}) .word:nth-of-type(${c + 1})`
        );
        if (currentWord) {
          const end = currentWord.querySelector(".word-end");
          if (end) {
            const articleRect = articleWrapperRef.value.getBoundingClientRect();
            const endRect = end.getBoundingClientRect();
            const isInViewport = endRect.top >= 0 && endRect.top <= (void 0).innerHeight;
            if (isInViewport) {
              if (endRect.y > (void 0).innerHeight * 0.7) {
                (void 0).scrollTo({
                  top: (void 0).documentElement.scrollTop + (void 0).innerHeight * 0.3,
                  behavior: "smooth"
                });
              }
            } else {
              (void 0).scrollTo({
                top: (void 0).documentElement.scrollTop + endRect.top - (void 0).innerHeight / 2,
                behavior: "smooth"
              });
            }
            cursor.value = {
              top: endRect.top - articleRect.top,
              left: endRect.left - articleRect.left
            };
          }
        }
      });
    }
    function checkTranslateLocation() {
      return new Promise((resolve) => {
        _nextTick(() => {
          let articleRect = articleWrapperRef.value.getBoundingClientRect();
          props.article.sections.map((v, i) => {
            v.map((w, j) => {
              let location = i + "-" + j;
              let wordClassName = `.word${location}`;
              let word = (void 0).querySelector(wordClassName);
              let wordRect = word.getBoundingClientRect();
              let translateClassName = `.translate${location}`;
              let translate = (void 0).querySelector(translateClassName);
              translate.style.opacity = "1";
              translate.style.top = wordRect.top - articleRect.top + 24 + "px";
              translate.firstChild.style.width = wordRect.left - articleRect.left + "px";
            });
          });
          resolve();
        }, 300);
      });
    }
    const normalize = (s) => s.toLowerCase().trim();
    const namePatterns = computed(() => {
      var _a, _b;
      return Array.from(
        new Set(
          ((_b = (_a = props.article) == null ? void 0 : _a.nameList) != null ? _b : []).map(normalize).filter(Boolean).map((s) => s.split(/\s+/).filter(Boolean)).flat().concat(["Mr", "Mrs", "Ms", "Dr", "Miss"].map(normalize))
        )
      );
    });
    const isNameWord = () => {
      let currentSection = props.article.sections[sectionIndex.value];
      let currentSentence = currentSection[sentenceIndex.value];
      let w = currentSentence.words[wordIndex.value];
      return (w == null ? void 0 : w.type) === PracticeArticleWordType.Word && namePatterns.value.length > 0 && namePatterns.value.includes(normalize(w.word));
    };
    let isTyping = false;
    let lock = false;
    function nextSentence() {
      if (lock || isEnd.value) return;
      checkTranslateLocation();
      lock = true;
      let currentSection = props.article.sections[sectionIndex.value];
      let currentSentence = currentSection[sentenceIndex.value];
      currentSentence.words.forEach((word, i) => {
        var _a, _b;
        word.input = word.input + word.word.slice((_b = (_a = word.input) == null ? void 0 : _a.length) != null ? _b : 0);
      });
      isSpace.value = false;
      input.value = wrong.value = "";
      stringIndex.value = 0;
      wordIndex.value = 0;
      sentenceIndex.value++;
      if (!currentSection[sentenceIndex.value]) {
        sentenceIndex.value = 0;
        sectionIndex.value++;
        if (!props.article.sections[sectionIndex.value]) {
          console.log("\u6253\u5B8C\u4E86");
          isEnd.value = true;
          emit("complete");
        } else {
          if (isNameWord()) next();
          emit("play", { sentence: props.article.sections[sectionIndex.value][0], handle: false });
        }
      } else {
        if (isNameWord()) next();
        emit("play", { sentence: currentSection[sentenceIndex.value], handle: false });
      }
      lock = false;
    }
    const next = () => {
      isSpace.value = false;
      input.value = wrong.value = "";
      stringIndex.value = 0;
      let currentSection = props.article.sections[sectionIndex.value];
      let currentSentence = currentSection[sentenceIndex.value];
      let currentWord = currentSentence.words[wordIndex.value];
      if (wordIndex.value + 1 < currentSentence.words.length) {
        wordIndex.value++;
        currentWord = currentSentence.words[wordIndex.value];
        currentSentence.words.slice(0, wordIndex.value).forEach((word, i) => {
          var _a, _b;
          word.input = word.input + word.word.slice((_b = (_a = word.input) == null ? void 0 : _a.length) != null ? _b : 0);
        });
        if ([PracticeArticleWordType.Symbol, PracticeArticleWordType.Number].includes(currentWord.type) && settingStore.ignoreSymbol) {
          next();
        } else if (isNameWord()) {
          next();
        } else {
          emit("nextWord", currentWord);
        }
      } else {
        nextSentence();
      }
    };
    function onTyping(e) {
      debugger;
      if (!props.article.sections.length) return;
      if (isTyping || isEnd.value) return;
      isTyping = true;
      try {
        let currentSection = props.article.sections[sectionIndex.value];
        let currentSentence = currentSection[sentenceIndex.value];
        let currentWord = currentSentence.words[wordIndex.value];
        wrong.value = "";
        if (isSpace.value) {
          if (e.code === "Space") {
            next();
          } else {
            next();
            isTyping = false;
            onTyping(e);
          }
        } else {
          let letter = e.key;
          let key = currentWord.word[stringIndex.value];
          let isRight = false;
          if (settingStore.ignoreCase) {
            isRight = key.toLowerCase() === letter.toLowerCase();
          } else {
            isRight = key === letter;
          }
          if (!isRight) {
            if (currentWord.type === PracticeArticleWordType.Word) {
              emit("wrong", currentWord);
            }
            playBeep();
          }
          input.value += letter;
          currentWord.input = input.value;
          stringIndex.value++;
          if (!currentWord.word[stringIndex.value]) {
            input.value = "";
            if (currentWord.nextSpace) {
              isSpace.value = true;
            } else {
              next();
            }
          }
        }
        playKeyboardAudio();
        e.preventDefault();
      } catch (e2) {
        setPracticeArticleCache(null);
        init();
      } finally {
        isTyping = false;
      }
    }
    function play() {
      let currentSection = props.article.sections[sectionIndex.value];
      emit("play", { sentence: currentSection[sentenceIndex.value], handle: true });
    }
    function del() {
      if (wrong.value) {
        wrong.value = "";
      } else {
        if (isEnd.value) return;
        if (isSpace.value) {
          isSpace.value = false;
        }
        let endSentence = false;
        let endWord = false;
        let endString = false;
        if (stringIndex.value === 0) {
          if (wordIndex.value === 0) {
            if (sentenceIndex.value === 0) {
              if (sectionIndex.value === 0) {
                return;
              } else {
                endSentence = endString = endWord = true;
                sectionIndex.value--;
              }
            } else {
              endString = endWord = true;
              sentenceIndex.value--;
            }
          } else {
            endString = true;
            wordIndex.value--;
          }
        } else stringIndex.value--;
        let currentSection = props.article.sections[sectionIndex.value];
        if (endSentence) sentenceIndex.value = currentSection.length - 1;
        let currentSentence = currentSection[sentenceIndex.value];
        if (endWord) wordIndex.value = currentSentence.words.length - 1;
        let currentWord = currentSentence.words[wordIndex.value];
        if (endString) {
          checkTranslateLocation();
          if (currentWord.nextSpace) {
            isSpace.value = true;
            stringIndex.value = currentWord.word.length;
          } else {
            stringIndex.value = currentWord.word.length - 1;
          }
        }
        input.value = currentWord.input = currentWord.input.slice(0, stringIndex.value);
        checkCursorPosition();
      }
    }
    function showSentence(i1 = sectionIndex.value, i2 = sentenceIndex.value, i3 = wordIndex.value) {
      hoverIndex.value = { sectionIndex: i1, sentenceIndex: i2, wordIndex: i3 };
    }
    function hideSentence() {
      hoverIndex.value = { sectionIndex: -1, sentenceIndex: -1, wordIndex: -1 };
    }
    function jump(i, j, w, sentence) {
      sectionIndex.value = i;
      sentenceIndex.value = j;
      wordIndex.value = w;
      stringIndex.value = 0;
      input.value = wrong.value = "";
      isEnd.value = isSpace.value = false;
      props.article.sections.map((v, i2) => {
        v.map((w2, j2) => {
          w2.words.map((v2, k) => {
            if (i2 <= sectionIndex.value && j2 <= sentenceIndex.value && k < wordIndex.value) {
              v2.input = v2.word;
            } else {
              v2.input = "";
            }
          });
        });
      });
    }
    useEvents([
      [ShortcutKey.KnowWord, onTyping],
      [ShortcutKey.UnknownWord, onTyping]
    ]);
    __expose({
      showSentence,
      play,
      del,
      hideSentence,
      nextSentence,
      init,
      getIndex: () => {
        return {
          sectionIndex: sectionIndex.value,
          sentenceIndex: sentenceIndex.value,
          wordIndex: wordIndex.value,
          stringIndex: stringIndex.value
        };
      }
    });
    function isCurrent(i, j, w) {
      return `${i}${j}${w}` === currentIndex.value;
    }
    ref(false);
    const currentPractice = inject("currentPractice", []);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "typing-article",
        ref_key: "typeArticleRef",
        ref: typeArticleRef
      }, _attrs))} data-v-ee853700>`);
      if (unref(isMob)) {
        _push(`<input class="mobile-input" type="text" inputmode="text" autocomplete="off" autocorrect="off" autocapitalize="none" data-v-ee853700>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<header class="pt-10 pb-6" data-v-ee853700><div class="text-center" data-v-ee853700><span class="text-3xl" data-v-ee853700>${ssrInterpolate(unref(store).sbook.lastLearnIndex + 1)}. </span><span class="text-3xl" data-v-ee853700>${ssrInterpolate((_b = (_a = props.article) == null ? void 0 : _a.title) != null ? _b : "")}</span>`);
      if (unref(settingStore).translate) {
        _push(`<span class="ml-6 text-2xl" data-v-ee853700>${ssrInterpolate((_c = props.article) == null ? void 0 : _c.titleTranslate)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if ((_e = (_d = props.article) == null ? void 0 : _d.question) == null ? void 0 : _e.text) {
        _push(`<div class="mt-2 text-2xl" data-v-ee853700><div data-v-ee853700>Question: ${ssrInterpolate((_g = (_f = props.article) == null ? void 0 : _f.question) == null ? void 0 : _g.text)}</div>`);
        if (unref(settingStore).translate) {
          _push(`<div class="text-xl color-translate-second" data-v-ee853700> \u95EE\u9898: ${ssrInterpolate((_i = (_h = props.article) == null ? void 0 : _h.question) == null ? void 0 : _i.translate)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div id="article-content" class="${ssrRenderClass([[unref(settingStore).translate && "tall", unref(settingStore).dictation && "dictation"], "article-content"])}" data-v-ee853700><article data-v-ee853700><!--[-->`);
      ssrRenderList(props.article.sections, (section, indexI) => {
        _push(`<div class="section" data-v-ee853700><!--[-->`);
        ssrRenderList(section, (sentence, indexJ) => {
          _push(`<span class="sentence" data-v-ee853700><!--[-->`);
          ssrRenderList(sentence.words, (word, indexW) => {
            _push(`<span class="${ssrRenderClass([[
              unref(sectionIndex) > indexI ? "wrote" : unref(sectionIndex) >= indexI && unref(sentenceIndex) > indexJ ? "wrote" : unref(sectionIndex) >= indexI && unref(sentenceIndex) >= indexJ && unref(wordIndex) > indexW ? "wrote" : unref(sectionIndex) >= indexI && unref(sentenceIndex) >= indexJ && unref(wordIndex) >= indexW && unref(stringIndex) >= word.word.length ? "wrote" : "",
              indexW === 0 && `word${indexI}-${indexJ}`
            ], "word"])}" data-v-ee853700><span class="${ssrRenderClass([[
              unref(hoverIndex).sectionIndex === indexI && unref(hoverIndex).sentenceIndex === indexJ && unref(hoverIndex).wordIndex === indexW && "hover-show",
              word.type === unref(PracticeArticleWordType).Number && "font-family text-xl"
            ], "word-wrap"])}" data-v-ee853700>`);
            if (isCurrent(indexI, indexJ, indexW) && !unref(isSpace)) {
              _push(ssrRenderComponent(TypingWord, {
                word,
                "is-typing": true
              }, null, _parent));
            } else {
              _push(ssrRenderComponent(TypingWord, {
                word,
                "is-typing": false
              }, null, _parent));
            }
            if (unref(settingStore).dictation) {
              _push(`<span class="border-bottom" data-v-ee853700></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
            if (word.nextSpace) {
              _push(ssrRenderComponent(Space, {
                class: "word-end",
                "is-wrong": false,
                "is-wait": isCurrent(indexI, indexJ, indexW) && unref(isSpace),
                "is-shake": isCurrent(indexI, indexJ, indexW) && unref(isSpace) && unref(wrong) !== ""
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          });
          _push(`<!--]-->`);
          if (unref(isMob) && unref(settingStore).translate && sentence.translate) {
            _push(`<span class="sentence-translate-mobile" data-v-ee853700>${ssrInterpolate(sentence.translate)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></article><div class="translate" style="${ssrRenderStyle(unref(settingStore).translate ? null : { display: "none" })}" data-v-ee853700><!--[-->`);
      ssrRenderList(props.article.sections, (v, indexI) => {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(v, (item, indexJ) => {
          _push(`<div class="${ssrRenderClass([[
            `translate${indexI + "-" + indexJ}`,
            unref(sectionIndex) > indexI ? "wrote" : unref(sectionIndex) >= indexI && unref(sentenceIndex) > indexJ ? "wrote" : ""
          ], "row"])}" data-v-ee853700><span class="space" data-v-ee853700></span>`);
          if (item.translate) {
            _push(`<span class="text" data-v-ee853700>${ssrInterpolate(item.translate)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></div>`);
      if (!unref(isEnd)) {
        _push(`<div class="cursor" style="${ssrRenderStyle({ top: unref(cursor).top + "px", left: unref(cursor).left + "px" })}" data-v-ee853700></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(isEnd)) {
        _push(`<div class="options flex justify-center" data-v-ee853700>`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("replay")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref($t)("restart_practice"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref($t)("restart_practice")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(store).sbook.lastLearnIndex < unref(store).sbook.articles.length - 1) {
          _push(ssrRenderComponent(BaseButton, {
            onClick: ($event) => emit("next")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref($t)("next_article"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref($t)("next_article")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(currentPractice).length && unref(isEnd)) {
        _push(`<div class="font-family text-base pr-2 mb-50 mt-10" data-v-ee853700><div class="text-2xl font-bold" data-v-ee853700>${ssrInterpolate(unref($t)("learning_record"))}</div><div class="mt-1 mb-3" data-v-ee853700>${ssrInterpolate(unref($t)("total_learning_time"))}\uFF1A${ssrInterpolate(unref(msToHourMinute)(unref(total)(unref(currentPractice), "spend")))}</div><!--[-->`);
        ssrRenderList(unref(currentPractice), (item, i) => {
          _push(`<div class="${ssrRenderClass([i === unref(currentPractice).length - 1 && "color-red!", "item border border-item border-solid mt-2 p-2 bg-[var(--bg-history)] rounded-md flex justify-between"])}" data-v-ee853700><span class="${ssrRenderClass(i === unref(currentPractice).length - 1 ? "color-red" : "color-gray")}" data-v-ee853700>${ssrInterpolate(i === unref(currentPractice).length - 1 ? unref($t)("current") : i + 1)}.\xA0\xA0${ssrInterpolate(unref(_dateFormat)(item.startDate))}</span><span data-v-ee853700>${ssrInterpolate(unref(msToHourMinute)(item.spend))}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/TypingArticle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TypingArticle = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-ee853700"]]), { __name: "TypingArticle" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useBaseStore();
    useRuntimeStore();
    const settingStore = useSettingStore();
    const statStore = usePracticeStore();
    const { toggleTheme } = useTheme();
    let articleData = ref({
      list: [],
      article: getDefaultArticle()
    });
    let showEditArticle = ref(false);
    let typingArticleRef = ref();
    let showConflictNotice = ref(false);
    let loading = ref(false);
    let allWrongWords = /* @__PURE__ */ new Set();
    let editArticle = ref(getDefaultArticle());
    let audioRef = ref();
    let timer = ref(0);
    let isTyped = ref(false);
    function write() {
      settingStore.dictation = true;
      repeat();
    }
    function repeat() {
      getCurrentPractice();
    }
    function prev() {
      if (store.sbook.lastLearnIndex === 0) {
        Toast.warning("\u5DF2\u7ECF\u5728\u7B2C\u4E00\u7AE0\u4E86~");
      } else {
        store.sbook.lastLearnIndex--;
        getCurrentPractice();
      }
    }
    const toggleShowTranslate = () => settingStore.translate = !settingStore.translate;
    const toggleDictation = () => settingStore.dictation = !settingStore.dictation;
    const togglePanel = () => settingStore.showPanel = !settingStore.showPanel;
    const skip = () => {
      var _a;
      return (_a = typingArticleRef.value) == null ? void 0 : _a.nextSentence();
    };
    const collect = () => toggleArticleCollect(articleData.value.article);
    const shortcutKeyEdit = () => edit();
    function toggleConciseMode() {
      settingStore.showToolbar = !settingStore.showToolbar;
      settingStore.showPanel = settingStore.showToolbar;
    }
    function next() {
      setPracticeArticleCache(null);
      if (store.sbook.lastLearnIndex >= articleData.value.list.length - 1) {
        store.sbook.complete = true;
        store.sbook.lastLearnIndex = 0;
      } else store.sbook.lastLearnIndex++;
      getCurrentPractice();
    }
    const router = useRouter();
    const route = useRoute();
    async function init() {
      let dict = getDefaultDict();
      let dictId = route.params.id;
      if (dictId) {
        dict = store.article.bookList.find((v) => v.id == dictId);
        let r = await fetch(resourceWrap(DICT_LIST.ARTICLE.ALL));
        let book_list = await r.json();
        if (!dict) dict = book_list.find((v) => v.id === dictId);
        if (dict && dict.id) {
          if (!dict.custom) dict = await _getDictDataByUrl(dict, DictType.article);
          if (!dict.articles.length) {
            router.push("/articles");
            return Toast.warning("\u6CA1\u6709\u6587\u7AE0\u53EF\u5B66\u4E60\uFF01");
          }
          await store.changeBook(dict);
          articleData.value.list = cloneDeep(store.sbook.articles);
          getCurrentPractice();
          loading.value = false;
        } else {
          router.push("/articles");
        }
      } else {
        router.push("/articles");
      }
    }
    const initAudio = () => {
      _nextTick(() => {
        return;
      });
    };
    const handleVolumeUpdate = (volume) => {
      settingStore.articleSoundVolume = volume;
    };
    const handleSpeedUpdate = (speed) => {
      settingStore.articleSoundSpeed = speed;
    };
    watch(
      [() => store.load, () => loading.value],
      ([a, b]) => {
        if (a && b) init();
      },
      { immediate: true }
    );
    watch(
      () => {
        var _a, _b;
        return (_b = (_a = articleData.value) == null ? void 0 : _a.article) == null ? void 0 : _b.id;
      },
      (id) => {
        if (id) {
          _nextTick(async () => {
            const Shepherd = await loadJsLib("Shepherd", LIB_JS_URL.SHEPHERD);
            const tour = new Shepherd.Tour(TourConfig);
            tour.on("cancel", () => {
              localStorage.setItem("tour-guide", "1");
            });
            tour.addStep({
              id: "step8",
              text: "\u8FD9\u91CC\u53EF\u4EE5\u7EC3\u4E60\u6587\u7AE0\uFF0C\u53EA\u9700\u8981\u6309\u4E0B\u952E\u76D8\u4E0A\u5BF9\u5E94\u7684\u6309\u952E\u5373\u53EF\uFF0C\u6CA1\u6709\u8F93\u5165\u6846\uFF01",
              attachTo: {
                element: "#article-content",
                on: "auto"
              },
              buttons: [
                {
                  text: `\u5173\u95ED`,
                  action() {
                    settingStore.first = false;
                    tour.next();
                    setTimeout(() => {
                      showConflictNotice.value = true;
                    }, 1500);
                  }
                }
              ]
            });
            const r = localStorage.getItem("tour-guide");
            if (settingStore.first && !r && true) {
              tour.start();
            }
          }, 500);
        }
      }
    );
    watch(
      () => settingStore.$state,
      (n) => {
        initAudio();
      },
      { immediate: true, deep: true }
    );
    useStartKeyboardEventListener();
    useDisableEventListener(() => loading.value);
    function setArticle(val) {
      var _a;
      statStore.wrong = 0;
      statStore.total = 0;
      statStore.startDate = Date.now();
      statStore.spend = 0;
      allWrongWords = /* @__PURE__ */ new Set();
      articleData.value.list[store.sbook.lastLearnIndex] = val;
      articleData.value.article = val;
      let ignoreList = [store.allIgnoreWords, store.knownWords][settingStore.ignoreSimpleWord ? 0 : 1];
      articleData.value.article.sections.map((v, i) => {
        v.map((w) => {
          w.words.map((s) => {
            if (!ignoreList.includes(s.word.toLowerCase()) && s.type === PracticeArticleWordType.Word) {
              statStore.total++;
            }
          });
        });
      });
      isTyped.value = false;
      clearInterval(timer.value);
      timer.value = setInterval();
      _nextTick((_a = typingArticleRef.value) == null ? void 0 : _a.init);
    }
    async function complete() {
      var _a;
      clearInterval(timer.value);
      setTimeout(() => {
        setPracticeArticleCache(null);
      }, 1500);
      let data = {
        articleId: articleData.value.article.id,
        title: articleData.value.article.title,
        spend: statStore.spend,
        //修正计时
        startDate: Date.now() - statStore.spend,
        total: statStore.total,
        wrong: statStore.wrong
      };
      let reportData = {
        name: store.sbook.name,
        index: store.sbook.lastLearnIndex,
        custom: store.sbook.custom,
        complete: store.sbook.complete,
        title: articleData.value.article.title,
        spend: Number(statStore.spend / 1e3 / 60).toFixed(1),
        s: ""
      };
      reportData.s = `name:${store.sbook.name},title:${store.sbook.lastLearnIndex}.${data.title},spend:${Number(statStore.spend / 1e3 / 60).toFixed(1)}`;
      (_a = (void 0).umami) == null ? void 0 : _a.track("endStudyArticle", reportData);
      if (store.sbook.lastLearnIndex >= store.sbook.length - 1) {
        store.sdict.complete = true;
      }
      if (AppEnv.CAN_REQUEST) {
        let res = await addStat({
          ...data,
          type: "article",
          complete: store.sdict.complete
        });
        if (!res.success) {
          Toast.error(res.msg);
        }
      }
      store.sbook.statistics.push(data);
      statStore.wrong = 0;
      statStore.startDate = Date.now();
    }
    function getCurrentPractice() {
      emitter.emit(EventKey.resetWord);
      let currentArticle = articleData.value.list[store.sbook.lastLearnIndex];
      let article = getDefaultArticle(currentArticle);
      if (article.sections.length) {
        setArticle(article);
      } else {
        genArticleSectionData(article);
        setArticle(article);
      }
    }
    function saveArticle(val) {
      console.log("saveArticle", val, JSON.stringify(val.lrcPosition));
      console.log("saveArticle", val.textTranslate);
      showEditArticle.value = false;
      let rIndex = store.sbook.articles.findIndex((v) => v.id === val.id);
      if (rIndex > -1) {
        store.sbook.articles[rIndex] = cloneDeep(val);
      }
      setArticle(val);
      store.sbook.custom = true;
      if (!store.sbook.id.includes("_custom")) {
        store.sbook.id += "_custom_" + nanoid(6);
      }
    }
    function edit(val = articleData.value.article) {
      editArticle.value = val;
      showEditArticle.value = true;
    }
    function wrong(word) {
      let temp = word.word.toLowerCase();
      if (settingStore.ignoreSimpleWord) {
        if (store.simpleWords.includes(temp)) return;
      }
      if (!allWrongWords.has(temp)) {
        allWrongWords.add(temp);
        statStore.wrong++;
      }
      if (!store.wrong.words.find((v) => v.word.toLowerCase() === temp)) {
        store.wrong.words.push(getDefaultWord(word));
        store.wrong.length = store.wrong.words.length;
      }
    }
    function nextWord(word) {
      if (!store.allIgnoreWords.includes(word.word.toLowerCase()) && word.type === PracticeArticleWordType.Word) {
        statStore.inputWordNumber++;
      }
    }
    async function changeArticle(val) {
      setPracticeArticleCache(null);
      let rIndex = articleData.value.list.findIndex((v) => v.id === val.item.id);
      if (rIndex > -1) {
        store.sbook.lastLearnIndex = rIndex;
        getCurrentPractice();
        if (AppEnv.CAN_REQUEST) {
          let res = await setUserDictProp(null, store.sbook);
          if (!res.success) {
            Toast.error(res.msg);
          }
        }
      }
      initAudio();
    }
    const { toggleArticleCollect } = useArticleOptions();
    function play() {
      var _a;
      (_a = typingArticleRef.value) == null ? void 0 : _a.play();
    }
    function show() {
      var _a;
      (_a = typingArticleRef.value) == null ? void 0 : _a.showSentence();
    }
    useEvents([
      [EventKey.write, write],
      [EventKey.repeatStudy, repeat],
      [EventKey.continueStudy, next],
      [ShortcutKey.PreviousChapter, prev],
      [ShortcutKey.RepeatChapter, repeat],
      [ShortcutKey.DictationChapter, write],
      [ShortcutKey.ToggleShowTranslate, toggleShowTranslate],
      [ShortcutKey.ToggleDictation, toggleDictation],
      [ShortcutKey.ToggleTheme, toggleTheme],
      [ShortcutKey.ToggleConciseMode, toggleConciseMode],
      [ShortcutKey.TogglePanel, togglePanel],
      [ShortcutKey.NextChapter, next],
      [ShortcutKey.PlayWordPronunciation, play],
      [ShortcutKey.ShowWord, show],
      [ShortcutKey.Next, skip],
      [ShortcutKey.ToggleCollect, collect],
      [ShortcutKey.EditArticle, shortcutKeyEdit]
    ]);
    const { playSentenceAudio } = usePlaySentenceAudio();
    function play2(e) {
      _nextTick(() => {
        if (settingStore.articleSound || e.handle) {
          playSentenceAudio(e.sentence, audioRef.value);
        }
      });
    }
    const currentPractice = computed(() => {
      var _a;
      if ((_a = store.sbook.statistics) == null ? void 0 : _a.length) {
        return store.sbook.statistics.filter((v) => v.title === articleData.value.article.title);
      }
      return [];
    });
    provide("currentPractice", currentPractice);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentChevronLeft20Filled = __unplugin_components_6;
      const _component_IconFluentQuestionCircle20Regular = __unplugin_components_5;
      const _component_IconFluentArrowBounce20Regular = __unplugin_components_2;
      const _component_IconFluentReplay20Regular = __unplugin_components_3;
      const _component_IconFluentEyeOff16Regular = __unplugin_components_4;
      const _component_IconFluentEye16Regular = __unplugin_components_5$1;
      const _component_IconPhTranslate = __unplugin_components_10;
      const _component_IconFluentTranslateOff16Regular = __unplugin_components_7;
      const _component_IconFluentTextListAbcUppercaseLtr20Regular = __unplugin_components_8;
      const _directive_loading = resolveDirective("loading");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PracticeLayout, mergeProps({ panelLeft: "var(--article-panel-margin-left)" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))), {
        practice: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(TypingArticle, {
              ref_key: "typingArticleRef",
              ref: typingArticleRef,
              onWrong: wrong,
              onNext: next,
              onNextWord: nextWord,
              onPlay: play2,
              onReplay: ($event) => setArticle(unref(articleData).article),
              onComplete: complete,
              article: unref(articleData).article
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(TypingArticle, {
                ref_key: "typingArticleRef",
                ref: typingArticleRef,
                onWrong: wrong,
                onNext: next,
                onNextWord: nextWord,
                onPlay: play2,
                onReplay: ($event) => setArticle(unref(articleData).article),
                onComplete: complete,
                article: unref(articleData).article
              }, null, 8, ["onReplay", "article"])
            ];
          }
        }),
        panel: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Panel, { style: { width: "var(--article-panel-width)" } }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-a9ae140a${_scopeId2}>${ssrInterpolate(unref(store).sbook.name)} (${ssrInterpolate(unref(store).sbook.lastLearnIndex + 1)} / ${ssrInterpolate(unref(articleData).list.length)})</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref(store).sbook.name) + " (" + toDisplayString(unref(store).sbook.lastLearnIndex + 1) + " / " + toDisplayString(unref(articleData).list.length) + ")", 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="panel-page-item pl-4" data-v-a9ae140a${_scopeId2}>`);
                  _push3(ssrRenderComponent(ArticleList, {
                    isActive: unref(settingStore).showPanel,
                    static: false,
                    "show-translate": unref(settingStore).translate,
                    onClick: changeArticle,
                    "active-id": (_a = unref(articleData).article.id) != null ? _a : "",
                    list: unref(articleData).list
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "panel-page-item pl-4" }, [
                      createVNode(ArticleList, {
                        isActive: unref(settingStore).showPanel,
                        static: false,
                        "show-translate": unref(settingStore).translate,
                        onClick: changeArticle,
                        "active-id": (_b = unref(articleData).article.id) != null ? _b : "",
                        list: unref(articleData).list
                      }, null, 8, ["isActive", "show-translate", "active-id", "list"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Panel, { style: { width: "var(--article-panel-width)" } }, {
                title: withCtx(() => [
                  createVNode("span", null, toDisplayString(unref(store).sbook.name) + " (" + toDisplayString(unref(store).sbook.lastLearnIndex + 1) + " / " + toDisplayString(unref(articleData).list.length) + ")", 1)
                ]),
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "panel-page-item pl-4" }, [
                      createVNode(ArticleList, {
                        isActive: unref(settingStore).showPanel,
                        static: false,
                        "show-translate": unref(settingStore).translate,
                        onClick: changeArticle,
                        "active-id": (_a = unref(articleData).article.id) != null ? _a : "",
                        list: unref(articleData).list
                      }, null, 8, ["isActive", "show-translate", "active-id", "list"])
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="footer pb-3" data-v-a9ae140a${_scopeId}><div class="center h-10" data-v-a9ae140a${_scopeId}>`);
            _push2(ssrRenderComponent(Tooltip, {
              title: unref(settingStore).showToolbar ? "\u6536\u8D77" : "\u5C55\u5F00"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconFluentChevronLeft20Filled, {
                    onClick: ($event) => unref(settingStore).showToolbar = !unref(settingStore).showToolbar,
                    class: [!unref(settingStore).showToolbar && "down", "arrow"],
                    color: "#999"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconFluentChevronLeft20Filled, {
                      onClick: ($event) => unref(settingStore).showToolbar = !unref(settingStore).showToolbar,
                      class: [!unref(settingStore).showToolbar && "down", "arrow"],
                      color: "#999"
                    }, null, 8, ["onClick", "class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bottom" data-v-a9ae140a${_scopeId}><div class="flex justify-between items-center gap-2" data-v-a9ae140a${_scopeId}><div class="stat" data-v-a9ae140a${_scopeId}><div class="row" data-v-a9ae140a${_scopeId}><div class="num" data-v-a9ae140a${_scopeId}>${ssrInterpolate(currentPractice.value.length)}\u6B21/${ssrInterpolate(unref(msToMinute)(unref(total)(currentPractice.value, "spend")))}</div><div class="line" data-v-a9ae140a${_scopeId}></div><div class="name" data-v-a9ae140a${_scopeId}>\u8BB0\u5F55</div></div><div class="row" data-v-a9ae140a${_scopeId}><div class="num" data-v-a9ae140a${_scopeId}>${ssrInterpolate(Math.floor(unref(statStore).spend / 1e3 / 60))}\u5206\u949F</div><div class="line" data-v-a9ae140a${_scopeId}></div><div class="name" data-v-a9ae140a${_scopeId}>\u65F6\u95F4</div></div><div class="row" data-v-a9ae140a${_scopeId}><div class="num center gap-1" data-v-a9ae140a${_scopeId}>${ssrInterpolate(unref(statStore).total)} `);
            _push2(ssrRenderComponent(Tooltip, null, {
              reference: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-a9ae140a${_scopeId2}> \u7EDF\u8BA1\u8BCD\u6570${ssrInterpolate(unref(settingStore).ignoreSimpleWord ? "\u4E0D\u5305\u542B" : "\u5305\u542B")}\u7B80\u5355\u8BCD\uFF0C\u4E0D\u5305\u542B\u5DF2\u638C\u63E1 <div data-v-a9ae140a${_scopeId2}>\u7B80\u5355\u8BCD\u53EF\u5728\u8BBE\u7F6E -&gt; \u7EC3\u4E60\u8BBE\u7F6E -&gt; \u7B80\u5355\u8BCD\u8FC7\u6EE4\u4E2D\u4FEE\u6539</div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createTextVNode(" \u7EDF\u8BA1\u8BCD\u6570" + toDisplayString(unref(settingStore).ignoreSimpleWord ? "\u4E0D\u5305\u542B" : "\u5305\u542B") + "\u7B80\u5355\u8BCD\uFF0C\u4E0D\u5305\u542B\u5DF2\u638C\u63E1 ", 1),
                      createVNode("div", null, "\u7B80\u5355\u8BCD\u53EF\u5728\u8BBE\u7F6E -> \u7EC3\u4E60\u8BBE\u7F6E -> \u7B80\u5355\u8BCD\u8FC7\u6EE4\u4E2D\u4FEE\u6539")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconFluentQuestionCircle20Regular, { width: "18" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconFluentQuestionCircle20Regular, { width: "18" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="line" data-v-a9ae140a${_scopeId}></div><div class="name" data-v-a9ae140a${_scopeId}>\u5355\u8BCD\u603B\u6570</div></div></div>`);
            _push2(ssrRenderComponent(ArticleAudio, {
              ref_key: "audioRef",
              ref: audioRef,
              article: unref(articleData).article,
              onUpdateSpeed: handleSpeedUpdate,
              onUpdateVolume: handleVolumeUpdate
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-center justify-center gap-1" data-v-a9ae140a${_scopeId}><div class="flex gap-2 center" data-v-a9ae140a${_scopeId}>`);
            _push2(ssrRenderComponent(SettingDialog, { type: "article" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseIcon, {
              title: `\u4E0B\u4E00\u53E5(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).Next]})`,
              onClick: skip
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconFluentArrowBounce20Regular, { class: "transform-rotate-180" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconFluentArrowBounce20Regular, { class: "transform-rotate-180" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseIcon, {
              title: `\u64AD\u653E\u5F53\u524D\u53E5\u5B50(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).PlayWordPronunciation]})`,
              onClick: play
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconFluentReplay20Regular, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconFluentReplay20Regular)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseIcon, {
              onClick: ($event) => unref(settingStore).dictation = !unref(settingStore).dictation,
              title: `\u5F00\u5173\u9ED8\u5199\u6A21\u5F0F(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleDictation]})`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(settingStore).dictation) {
                    _push3(ssrRenderComponent(_component_IconFluentEyeOff16Regular, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_IconFluentEye16Regular, null, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(settingStore).dictation ? (openBlock(), createBlock(_component_IconFluentEyeOff16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentEye16Regular, { key: 1 }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseIcon, {
              title: `\u5F00\u5173\u91CA\u4E49\u663E\u793A(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleShowTranslate]})`,
              onClick: ($event) => unref(settingStore).translate = !unref(settingStore).translate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(settingStore).translate) {
                    _push3(ssrRenderComponent(_component_IconPhTranslate, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_IconFluentTranslateOff16Regular, null, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(settingStore).translate ? (openBlock(), createBlock(_component_IconPhTranslate, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentTranslateOff16Regular, { key: 1 }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseIcon, {
              onClick: ($event) => unref(settingStore).showPanel = !unref(settingStore).showPanel,
              title: `\u9762\u677F(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).TogglePanel]})`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconFluentTextListAbcUppercaseLtr20Regular, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconFluentTextListAbcUppercaseLtr20Regular)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "footer pb-3" }, [
                createVNode("div", { class: "center h-10" }, [
                  createVNode(Tooltip, {
                    title: unref(settingStore).showToolbar ? "\u6536\u8D77" : "\u5C55\u5F00"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_IconFluentChevronLeft20Filled, {
                        onClick: ($event) => unref(settingStore).showToolbar = !unref(settingStore).showToolbar,
                        class: [!unref(settingStore).showToolbar && "down", "arrow"],
                        color: "#999"
                      }, null, 8, ["onClick", "class"])
                    ]),
                    _: 1
                  }, 8, ["title"])
                ]),
                createVNode("div", { class: "bottom" }, [
                  createVNode("div", { class: "flex justify-between items-center gap-2" }, [
                    createVNode("div", { class: "stat" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "num" }, toDisplayString(currentPractice.value.length) + "\u6B21/" + toDisplayString(unref(msToMinute)(unref(total)(currentPractice.value, "spend"))), 1),
                        createVNode("div", { class: "line" }),
                        createVNode("div", { class: "name" }, "\u8BB0\u5F55")
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "num" }, toDisplayString(Math.floor(unref(statStore).spend / 1e3 / 60)) + "\u5206\u949F", 1),
                        createVNode("div", { class: "line" }),
                        createVNode("div", { class: "name" }, "\u65F6\u95F4")
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "num center gap-1" }, [
                          createTextVNode(toDisplayString(unref(statStore).total) + " ", 1),
                          createVNode(Tooltip, null, {
                            reference: withCtx(() => [
                              createVNode("div", null, [
                                createTextVNode(" \u7EDF\u8BA1\u8BCD\u6570" + toDisplayString(unref(settingStore).ignoreSimpleWord ? "\u4E0D\u5305\u542B" : "\u5305\u542B") + "\u7B80\u5355\u8BCD\uFF0C\u4E0D\u5305\u542B\u5DF2\u638C\u63E1 ", 1),
                                createVNode("div", null, "\u7B80\u5355\u8BCD\u53EF\u5728\u8BBE\u7F6E -> \u7EC3\u4E60\u8BBE\u7F6E -> \u7B80\u5355\u8BCD\u8FC7\u6EE4\u4E2D\u4FEE\u6539")
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_IconFluentQuestionCircle20Regular, { width: "18" })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "line" }),
                        createVNode("div", { class: "name" }, "\u5355\u8BCD\u603B\u6570")
                      ])
                    ]),
                    createVNode(ArticleAudio, {
                      ref_key: "audioRef",
                      ref: audioRef,
                      article: unref(articleData).article,
                      onUpdateSpeed: handleSpeedUpdate,
                      onUpdateVolume: handleVolumeUpdate
                    }, null, 8, ["article"]),
                    createVNode("div", { class: "flex flex-col items-center justify-center gap-1" }, [
                      createVNode("div", { class: "flex gap-2 center" }, [
                        createVNode(SettingDialog, { type: "article" }),
                        createVNode(BaseIcon, {
                          title: `\u4E0B\u4E00\u53E5(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).Next]})`,
                          onClick: skip
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_IconFluentArrowBounce20Regular, { class: "transform-rotate-180" })
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(BaseIcon, {
                          title: `\u64AD\u653E\u5F53\u524D\u53E5\u5B50(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).PlayWordPronunciation]})`,
                          onClick: play
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_IconFluentReplay20Regular)
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(BaseIcon, {
                          onClick: ($event) => unref(settingStore).dictation = !unref(settingStore).dictation,
                          title: `\u5F00\u5173\u9ED8\u5199\u6A21\u5F0F(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleDictation]})`
                        }, {
                          default: withCtx(() => [
                            unref(settingStore).dictation ? (openBlock(), createBlock(_component_IconFluentEyeOff16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentEye16Regular, { key: 1 }))
                          ]),
                          _: 1
                        }, 8, ["onClick", "title"]),
                        createVNode(BaseIcon, {
                          title: `\u5F00\u5173\u91CA\u4E49\u663E\u793A(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleShowTranslate]})`,
                          onClick: ($event) => unref(settingStore).translate = !unref(settingStore).translate
                        }, {
                          default: withCtx(() => [
                            unref(settingStore).translate ? (openBlock(), createBlock(_component_IconPhTranslate, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentTranslateOff16Regular, { key: 1 }))
                          ]),
                          _: 1
                        }, 8, ["title", "onClick"]),
                        createVNode(BaseIcon, {
                          onClick: ($event) => unref(settingStore).showPanel = !unref(settingStore).showPanel,
                          title: `\u9762\u677F(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).TogglePanel]})`
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_IconFluentTextListAbcUppercaseLtr20Regular)
                          ]),
                          _: 1
                        }, 8, ["onClick", "title"])
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
      _push(ssrRenderComponent(EditSingleArticleModal, {
        modelValue: unref(showEditArticle),
        "onUpdate:modelValue": ($event) => isRef(showEditArticle) ? showEditArticle.value = $event : showEditArticle = $event,
        article: unref(editArticle),
        onSave: saveArticle
      }, null, _parent));
      if (unref(showConflictNotice)) {
        _push(ssrRenderComponent(ConflictNotice, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(articles)/practice-articles/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a9ae140a"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-ChwchOew.mjs.map
