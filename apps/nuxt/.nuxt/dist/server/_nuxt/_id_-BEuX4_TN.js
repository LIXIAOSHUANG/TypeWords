import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, defineAsyncComponent, useModel, ref, inject, watch, computed, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, Fragment, renderList, createCommentVNode, useSSRContext, isRef, resolveDirective, withDirectives, nextTick, provide } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrRenderStyle, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as __unplugin_components_7$2 } from "./home20-regular-BqrUvY-4.js";
import { _ as __unplugin_components_7$1 } from "./play20-regular-ozWzgLyX.js";
import { _ as __unplugin_components_4$1 } from "./arrow-clockwise20-regular-RJbPEZbx.js";
import { c as useBaseStore, b as useSettingStore, G as addStat, T as Toast, C as msToHourMinute, B as BaseIcon, h as _nextTick, H as getDefaultWord, I as last, a as useRuntimeStore, g as getDefaultDict, w as resourceWrap, p as _getDictDataByUrl, l as loadJsLib, m as isMobile, t as shuffle, d as cloneDeep, J as setUserDictProp } from "./BaseIcon-Cnj57dgy.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { u as useEvents, E as EventKey, e as emitter } from "./eventBus-C4Xc_Jqv.js";
import { u as usePracticeStore } from "./practice-DjPnwpm9.js";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween.js";
import isoWeek from "dayjs/plugin/isoWeek.js";
import { P as Progress } from "./Progress-C93deg99.js";
import { C as ChannelIcons } from "./ChannelIcons-BDL8HMec.js";
import { W as WordPracticeMode, e as AppEnv, m as ShortcutKey, n as SoundFileOptions, k as Tooltip, o as WordPracticeStage, h as WordPracticeModeNameMap, p as WordPracticeStageNameMap, q as WordPracticeType, i as DICT_LIST, T as TourConfig, r as WordPracticeModeStageMap, L as LIB_JS_URL } from "./env-CUoXYOyW.js";
import { g as useI18n, h as _export_sfc } from "../server.mjs";
import { u as useStartKeyboardEventListener, a as useDisableEventListener } from "./event-qcx2F2JA.js";
import { u as useTheme } from "./theme-4yK9pI7O.js";
import { _ as __unplugin_components_5, a as useWordOptions, g as getCurrentStudyWord } from "./dict-Dqcdsgfb.js";
import { useRouter, useRoute } from "vue-router";
import { S as SettingDialog, _ as __unplugin_components_2$2, a as __unplugin_components_8, b as Space, P as PracticeLayout, c as Panel, C as ConflictNotice } from "./PracticeLayout-bGHxKcR-.js";
import { _ as __unplugin_components_7$3, B as BaseList } from "./BaseList-BGyirn9c.js";
import { _ as __unplugin_components_10 } from "./translate-jzfWdenW.js";
import { _ as __unplugin_components_4$2, a as __unplugin_components_5$1 } from "./eye16-regular-Cm9O3Lp0.js";
import { _ as __unplugin_components_3$1, W as WordItem } from "./WordItem-QVJUwi53.js";
import { _ as __unplugin_components_9 } from "./checkmark-circle16-regular-BfJF9NXt.js";
import { _ as __unplugin_components_6 } from "./chevron-left20-filled-B_9PTvDy.js";
import { S as Switch } from "./Switch-BoRsOuOV.js";
import { S as Select, O as Option } from "./Textarea-Ca12-GD2.js";
import { M as MiniDialog } from "./MiniDialog-DIRP4Q9a.js";
import { V as VolumeIcon } from "./VolumeIcon--ng6Uza7.js";
import { c as usePlayAudio, g as getAudioFileUrl, u as usePlayBeep, a as usePlayCorrect, d as usePlayKeyboardAudio, b as usePlayWordAudio, e as useTTsPlayAudio } from "./sound-fV5MruVn.js";
import { E as Empty } from "./Empty-DqqzidIv.js";
import { watchOnce } from "@vueuse/core";
import { R as RadioGroup, a as Radio } from "./Radio-WTKpkBn7.js";
import { g as getPracticeWordCache, s as setPracticeWordCache } from "./cache-C4S9Fl6v.js";
import { s as setInterval } from "./interval-CYUoNYlE.js";
import "pinia";
import "idb-keyval";
import "axios";
import "dayjs/plugin/duration.js";
import "nanoid";
import "mitt";
import "#internal/nuxt/paths";
import "./user-BLvskJR1.js";
import "./WeChat-CaY8PzZX.js";
import "./Dialog-BoKDmA_Y.js";
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
import "./settings20-regular-fog7odRI.js";
import "./text-underline-double20-regular-Urqfz4U4.js";
import "./WordSetting-BBzklAbh.js";
import "./Slider-ibM1Ch1E.js";
import "./InputNumber-CwEqYfu9.js";
import "./ConflictNoticeText-DBXHKUby.js";
import "./volume-low-D-Q_rQNL.js";
import "./NuxtImg-BgeLVH9C.js";
const _hoisted_1$9 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M12.354 3.646a.5.5 0 0 0-.708.708l.65.65C9.972 5.076 8.516 6.4 7.2 7.596l-.036.033C5.777 8.89 4.534 10 2.5 10a.5.5 0 0 0 0 1c2.444 0 3.946-1.366 5.3-2.597l.036-.033c1.338-1.217 2.542-2.292 4.453-2.366l-.643.642a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM2.5 5c1.829 0 3.13.765 4.237 1.666l-.246.224q-.262.24-.507.455C5 6.565 3.951 6 2.5 6a.5.5 0 0 1 0-1m9.796 5.997c-1.723-.055-2.968-.796-4.033-1.663l.246-.224q.262-.24.507-.455c.936.742 1.93 1.289 3.273 1.341l-.643-.642a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708z"
    }, null, -1)
  ])]);
}
const __unplugin_components_2$1 = markRaw({ name: "fluent-arrow-shuffle16-regular", render: render$9 });
const _hoisted_1$8 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M2.5 7.5a.5.5 0 1 0 0 1h9.697l-4.031 3.628a.5.5 0 1 0 .668.744l5-4.5a.5.5 0 0 0 0-.744l-5-4.5a.5.5 0 0 0-.668.744L12.197 7.5z"
    }, null, -1)
  ])]);
}
const __unplugin_components_1$1 = markRaw({ name: "fluent-arrow-right16-regular", render: render$8 });
const _hoisted_1$7 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M13.5 8.5a.5.5 0 0 0 0-1H3.803l4.031-3.628a.5.5 0 1 0-.668-.744l-5 4.5a.5.5 0 0 0 0 .744l5 4.5a.5.5 0 1 0 .668-.744L3.803 8.5z"
    }, null, -1)
  ])]);
}
const __unplugin_components_0$2 = markRaw({ name: "fluent-arrow-left16-regular", render: render$7 });
const _hoisted_1$6 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M6 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1 0v1h6V5zM4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1z"
    }, null, -1)
  ])]);
}
const __unplugin_components_3 = markRaw({ name: "fluent-book20-regular", render: render$6 });
const _hoisted_1$5 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M7.398 12.809a1.04 1.04 0 0 0 1.204-.003c.178-.13.313-.31.387-.518l.447-1.373a2.34 2.34 0 0 1 1.477-1.479l1.391-.45a1.045 1.045 0 0 0-.044-1.98l-1.375-.448a2.34 2.34 0 0 1-1.48-1.477l-.452-1.388a1.044 1.044 0 0 0-1.973.017l-.457 1.4a2.34 2.34 0 0 1-1.44 1.45l-1.39.447a1.045 1.045 0 0 0 .016 1.974l1.374.445a2.33 2.33 0 0 1 1.481 1.488l.452 1.391c.072.204.206.38.382.504m.085-7.415l.527-1.377l.44 1.377a3.33 3.33 0 0 0 2.117 2.114l1.406.53l-1.382.447a3.34 3.34 0 0 0-2.115 2.117l-.523 1.378l-.449-1.379a3.34 3.34 0 0 0-.8-1.31a3.4 3.4 0 0 0-1.312-.812l-1.378-.522l1.386-.45a3.36 3.36 0 0 0 1.29-.813a3.4 3.4 0 0 0 .793-1.3m6.052 11.457a.806.806 0 0 0 1.226-.398l.248-.762a1.1 1.1 0 0 1 .26-.42c.118-.12.262-.208.42-.26l.772-.252a.8.8 0 0 0-.023-1.52l-.764-.25a1.08 1.08 0 0 1-.68-.678l-.252-.773a.8.8 0 0 0-1.518.01l-.247.762a1.07 1.07 0 0 1-.665.679l-.773.252a.8.8 0 0 0 .008 1.518l.763.247c.16.054.304.143.422.261c.119.119.207.263.258.422l.253.774a.8.8 0 0 0 .292.388m-.913-2.793L12.443 14l.184-.064a2.11 2.11 0 0 0 1.3-1.317l.058-.178l.06.181a2.08 2.08 0 0 0 1.316 1.316l.195.063l-.18.06a2.08 2.08 0 0 0-1.317 1.32l-.059.181l-.058-.18a2.08 2.08 0 0 0-1.32-1.323"
    }, null, -1)
  ])]);
}
const __unplugin_components_2 = markRaw({ name: "fluent-sparkle20-regular", render: render$5 });
const _hoisted_1$4 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5 10a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-8 4a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14"
    }, null, -1)
  ])]);
}
const __unplugin_components_1 = markRaw({ name: "fluent-target20-regular", render: render$4 });
const _hoisted_1$3 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14m-.5 2a.5.5 0 0 1 .492.41L10 5.5V10h2.5a.5.5 0 0 1 .09.992L12.5 11h-3a.5.5 0 0 1-.492-.41L9 10.5v-5a.5.5 0 0 1 .5-.5"
    }, null, -1)
  ])]);
}
const __unplugin_components_0$1 = markRaw({ name: "fluent-clock20-regular", render: render$3 });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Statistics",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: false },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    dayjs.extend(isoWeek);
    const { t: $t } = useI18n();
    dayjs.extend(isBetween);
    const Dialog = defineAsyncComponent(() => import("./Dialog-BoKDmA_Y.js"));
    const store = useBaseStore();
    const settingStore = useSettingStore();
    const statStore = usePracticeStore();
    const model = useModel(__props, "modelValue");
    let list = ref([]);
    let dictIsEnd = ref(false);
    let practiceTaskWords = inject("practiceTaskWords");
    function calcWeekList() {
      const startOfWeek = dayjs().startOf("isoWeek");
      const endOfWeek = dayjs().endOf("isoWeek");
      const weekList = Array(7).fill(false);
      store.sdict.statistics.forEach((item) => {
        const date = dayjs(item.startDate);
        if (date.isBetween(startOfWeek, endOfWeek, null, "[]")) {
          let idx = date.day();
          if (idx === 0) {
            idx = 6;
          } else {
            idx = idx - 1;
          }
          weekList[idx] = true;
        }
      });
      list.value = weekList;
    }
    watch(model, async (newVal) => {
      if (newVal) {
        dictIsEnd.value = false;
        let data = {
          spend: statStore.spend,
          //修正计时
          startDate: Date.now() - statStore.spend,
          total: statStore.total,
          wrong: statStore.wrong,
          new: statStore.newWordNumber,
          review: statStore.reviewWordNumber + statStore.writeWordNumber
        };
        (void 0).umami?.track("endStudyWord", {
          name: store.sdict.name,
          spend: Number(statStore.spend / 1e3 / 60).toFixed(1),
          index: store.sdict.lastLearnIndex,
          perDayStudyNumber: store.sdict.perDayStudyNumber,
          custom: store.sdict.custom,
          complete: store.sdict.complete,
          str: `name:${store.sdict.name},per:${store.sdict.perDayStudyNumber},spend:${Number(statStore.spend / 1e3 / 60).toFixed(1)},index:${store.sdict.lastLearnIndex}`
        });
        if (settingStore.wordPracticeMode !== WordPracticeMode.Shuffle) {
          store.sdict.lastLearnIndex = store.sdict.lastLearnIndex + statStore.newWordNumber;
          let ignoreList = [store.allIgnoreWords, store.knownWords][settingStore.ignoreSimpleWord ? 0 : 1];
          const ignoreCount = ignoreList.filter(
            (word) => store.sdict.words.slice(store.sdict.lastLearnIndex).some((w) => w.word.toLowerCase() === word)
          ).length;
          if (store.sdict.lastLearnIndex + ignoreCount >= store.sdict.length) {
            dictIsEnd.value = true;
            store.sdict.complete = true;
            store.sdict.lastLearnIndex = store.sdict.length;
          }
        }
        if (AppEnv.CAN_REQUEST) {
          let res = await addStat({
            ...data,
            type: "word",
            perDayStudyNumber: store.sdict.perDayStudyNumber,
            lastLearnIndex: store.sdict.lastLearnIndex,
            complete: store.sdict.complete
          });
          if (!res.success) {
            Toast.error(res.msg);
          }
        }
        store.sdict.statistics.push(data);
        calcWeekList();
      }
    });
    const close = () => model.value = false;
    useEvents([
      //特意注释掉，因为在练习界面用快捷键下一组时，需要判断是否在结算界面
      // [ShortcutKey.NextChapter, close],
      [ShortcutKey.RepeatChapter, close],
      [ShortcutKey.DictationChapter, close]
    ]);
    function options(emitType) {
      emitter.emit(EventKey[emitType]);
      close();
    }
    const studyProgress = computed(() => {
      if (!store.sdict.length) return 0;
      return Math.round(store.sdict.lastLearnIndex / store.sdict.length * 100);
    });
    const accuracyRate = computed(() => {
      if (statStore.total === 0) return 100;
      return Math.round((statStore.total - statStore.wrong) / statStore.total * 100);
    });
    const encouragementText = computed(() => {
      const rate = accuracyRate.value;
      if (rate >= 95) return "🎉 " + $t("encouragement_95");
      if (rate >= 85) return "👍 " + $t("encouragement_85");
      if (rate >= 70) return "💪 " + $t("encouragement_70");
      return "🌟 " + $t("encouragement_default");
    });
    const formattedStudyTime = computed(() => {
      const time = msToHourMinute(statStore.spend);
      return time.replace("小时", "h ").replace("分钟", "m");
    });
    calcWeekList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentClock20Regular = __unplugin_components_0$1;
      const _component_IconFluentTarget20Regular = __unplugin_components_1;
      const _component_IconFluentSparkle20Regular = __unplugin_components_2;
      const _component_IconFluentBook20Regular = __unplugin_components_3;
      const _component_IconFluentArrowClockwise20Regular = __unplugin_components_4$1;
      const _component_IconFluentPlay20Regular = __unplugin_components_7$1;
      const _component_IconFluentHome20Regular = __unplugin_components_7$2;
      _push(ssrRenderComponent(unref(Dialog), mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "close-on-click-bg": false,
        header: false,
        keyboard: false,
        "show-close": false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-8 pr-3 bg-[var(--bg-card-primary)] rounded-2xl space-y-6" data-v-76143484${_scopeId}><div class="text-center relative" data-v-76143484${_scopeId}><div class="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent" data-v-76143484${_scopeId}>`);
            if (unref(practiceTaskWords).shuffle.length) {
              _push2(`<!--[--> 🎯 ${ssrInterpolate(unref($t)("review_complete"))}<!--]-->`);
            } else {
              _push2(`<!--[--> 🎉 ${ssrInterpolate(unref($t)("daily_task_complete"))}<!--]-->`);
            }
            _push2(`</div><p class="font-medium text-lg" data-v-76143484${_scopeId}>${ssrInterpolate(encouragementText.value)}</p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-76143484${_scopeId}><div class="item" data-v-76143484${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentClock20Regular, { class: "text-purple-500" }, null, _parent2, _scopeId));
            _push2(`<div class="text-sm mb-1 font-medium" data-v-76143484${_scopeId}>${ssrInterpolate(unref($t)("study_duration"))}</div><div class="text-xl font-bold" data-v-76143484${_scopeId}>${ssrInterpolate(formattedStudyTime.value)}</div></div><div class="item" data-v-76143484${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentTarget20Regular, { class: "text-purple-500" }, null, _parent2, _scopeId));
            _push2(`<div class="text-sm mb-1 font-medium" data-v-76143484${_scopeId}>${ssrInterpolate(unref($t)("accuracy_rate"))}</div><div class="text-xl font-bold" data-v-76143484${_scopeId}>${ssrInterpolate(accuracyRate.value)}%</div></div><div class="item" data-v-76143484${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentSparkle20Regular, { class: "text-purple-500" }, null, _parent2, _scopeId));
            _push2(`<div class="text-sm mb-1 font-medium" data-v-76143484${_scopeId}>${ssrInterpolate(unref($t)("new_words"))}</div><div class="text-xl font-bold" data-v-76143484${_scopeId}>${ssrInterpolate(unref(statStore).newWordNumber)}</div></div><div class="item" data-v-76143484${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentBook20Regular, { class: "text-purple-500" }, null, _parent2, _scopeId));
            _push2(`<div class="text-sm mb-1 font-medium" data-v-76143484${_scopeId}>${ssrInterpolate(unref($t)("review"))}</div><div class="text-xl font-bold" data-v-76143484${_scopeId}>${ssrInterpolate(unref(statStore).reviewWordNumber + unref(statStore).writeWordNumber)}</div></div></div><div class="w-full gap-3 flex" data-v-76143484${_scopeId}><div class="space-y-6 flex-1" data-v-76143484${_scopeId}><div class="bg-[--bg-card-secend] rounded-xl p-2" data-v-76143484${_scopeId}><div class="text-center mb-4" data-v-76143484${_scopeId}><div class="text-xl font-semibold mb-1" data-v-76143484${_scopeId}>${ssrInterpolate(unref($t)("weekly_record"))}</div></div><div class="flex justify-between gap-4" data-v-76143484${_scopeId}><!--[-->`);
            ssrRenderList(unref(list), (item, i) => {
              _push2(`<div class="${ssrRenderClass([item ? "bg-green-500 text-white shadow-lg" : "bg-white text-gray-700", "flex-1 text-center px-2 py-3 rounded-lg"])}" data-v-76143484${_scopeId}><div class="font-semibold mb-1" data-v-76143484${_scopeId}>${ssrInterpolate(i + 1)}</div><div class="${ssrRenderClass([item ? "bg-white bg-opacity-30" : "bg-gray-300", "w-2 h-2 rounded-full mx-auto mb-1"])}" data-v-76143484${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="bg-[var(--bg-card-secend)] rounded-xl py-2 px-6" data-v-76143484${_scopeId}><div class="flex justify-between items-center mb-3" data-v-76143484${_scopeId}><div class="text-xl font-semibold" data-v-76143484${_scopeId}>${ssrInterpolate(unref($t)("study_progress"))}</div><div class="text-2xl font-bold text-purple-600" data-v-76143484${_scopeId}>${ssrInterpolate(studyProgress.value)}%</div></div>`);
            _push2(ssrRenderComponent(Progress, {
              percentage: studyProgress.value,
              size: "large",
              "show-text": false
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-between text-sm font-medium mt-4" data-v-76143484${_scopeId}><span data-v-76143484${_scopeId}>${ssrInterpolate(unref($t)("learned"))}: ${ssrInterpolate(unref(store).sdict.lastLearnIndex)}</span><span data-v-76143484${_scopeId}>${ssrInterpolate(unref($t)("total_words"))}: ${ssrInterpolate(unref(store).sdict.length)}</span></div></div></div>`);
            _push2(ssrRenderComponent(ChannelIcons, null, null, _parent2, _scopeId));
            _push2(`</div><div class="flex min-w-130 justify-center" data-v-76143484${_scopeId}>`);
            _push2(ssrRenderComponent(BaseButton, {
              keyboard: unref(settingStore).shortcutKeyMap[unref(ShortcutKey).RepeatChapter],
              onClick: ($event) => options(unref(EventKey).repeatStudy)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="center gap-2" data-v-76143484${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconFluentArrowClockwise20Regular, null, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref($t)("relearn"))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "center gap-2" }, [
                      createVNode(_component_IconFluentArrowClockwise20Regular),
                      createTextVNode(" " + toDisplayString(unref($t)("relearn")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Review) {
              _push2(ssrRenderComponent(BaseButton, {
                keyboard: unref(settingStore).shortcutKeyMap[unref(ShortcutKey).NextChapter],
                onClick: ($event) => options(unref(EventKey).continueStudy)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="center gap-2" data-v-76143484${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconFluentPlay20Regular, null, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(unref(dictIsEnd) ? unref($t)("start_from_beginning") : unref($t)("another_group"))}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "center gap-2" }, [
                        createVNode(_component_IconFluentPlay20Regular),
                        createTextVNode(" " + toDisplayString(unref(dictIsEnd) ? unref($t)("start_from_beginning") : unref($t)("another_group")), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(BaseButton, {
              onClick: _ctx.$router.back
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="center gap-2" data-v-76143484${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconFluentHome20Regular, null, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref($t)("back_to_home"))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "center gap-2" }, [
                      createVNode(_component_IconFluentHome20Regular),
                      createTextVNode(" " + toDisplayString(unref($t)("back_to_home")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-8 pr-3 bg-[var(--bg-card-primary)] rounded-2xl space-y-6" }, [
                createVNode("div", { class: "text-center relative" }, [
                  createVNode("div", { class: "text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent" }, [
                    unref(practiceTaskWords).shuffle.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" 🎯 " + toDisplayString(unref($t)("review_complete")), 1)
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(" 🎉 " + toDisplayString(unref($t)("daily_task_complete")), 1)
                    ], 64))
                  ]),
                  createVNode("p", { class: "font-medium text-lg" }, toDisplayString(encouragementText.value), 1)
                ]),
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                  createVNode("div", { class: "item" }, [
                    createVNode(_component_IconFluentClock20Regular, { class: "text-purple-500" }),
                    createVNode("div", { class: "text-sm mb-1 font-medium" }, toDisplayString(unref($t)("study_duration")), 1),
                    createVNode("div", { class: "text-xl font-bold" }, toDisplayString(formattedStudyTime.value), 1)
                  ]),
                  createVNode("div", { class: "item" }, [
                    createVNode(_component_IconFluentTarget20Regular, { class: "text-purple-500" }),
                    createVNode("div", { class: "text-sm mb-1 font-medium" }, toDisplayString(unref($t)("accuracy_rate")), 1),
                    createVNode("div", { class: "text-xl font-bold" }, toDisplayString(accuracyRate.value) + "%", 1)
                  ]),
                  createVNode("div", { class: "item" }, [
                    createVNode(_component_IconFluentSparkle20Regular, { class: "text-purple-500" }),
                    createVNode("div", { class: "text-sm mb-1 font-medium" }, toDisplayString(unref($t)("new_words")), 1),
                    createVNode("div", { class: "text-xl font-bold" }, toDisplayString(unref(statStore).newWordNumber), 1)
                  ]),
                  createVNode("div", { class: "item" }, [
                    createVNode(_component_IconFluentBook20Regular, { class: "text-purple-500" }),
                    createVNode("div", { class: "text-sm mb-1 font-medium" }, toDisplayString(unref($t)("review")), 1),
                    createVNode("div", { class: "text-xl font-bold" }, toDisplayString(unref(statStore).reviewWordNumber + unref(statStore).writeWordNumber), 1)
                  ])
                ]),
                createVNode("div", { class: "w-full gap-3 flex" }, [
                  createVNode("div", { class: "space-y-6 flex-1" }, [
                    createVNode("div", { class: "bg-[--bg-card-secend] rounded-xl p-2" }, [
                      createVNode("div", { class: "text-center mb-4" }, [
                        createVNode("div", { class: "text-xl font-semibold mb-1" }, toDisplayString(unref($t)("weekly_record")), 1)
                      ]),
                      createVNode("div", { class: "flex justify-between gap-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(list), (item, i) => {
                          return openBlock(), createBlock("div", {
                            key: i,
                            class: ["flex-1 text-center px-2 py-3 rounded-lg", item ? "bg-green-500 text-white shadow-lg" : "bg-white text-gray-700"]
                          }, [
                            createVNode("div", { class: "font-semibold mb-1" }, toDisplayString(i + 1), 1),
                            createVNode("div", {
                              class: ["w-2 h-2 rounded-full mx-auto mb-1", item ? "bg-white bg-opacity-30" : "bg-gray-300"]
                            }, null, 2)
                          ], 2);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "bg-[var(--bg-card-secend)] rounded-xl py-2 px-6" }, [
                      createVNode("div", { class: "flex justify-between items-center mb-3" }, [
                        createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(unref($t)("study_progress")), 1),
                        createVNode("div", { class: "text-2xl font-bold text-purple-600" }, toDisplayString(studyProgress.value) + "%", 1)
                      ]),
                      createVNode(Progress, {
                        percentage: studyProgress.value,
                        size: "large",
                        "show-text": false
                      }, null, 8, ["percentage"]),
                      createVNode("div", { class: "flex justify-between text-sm font-medium mt-4" }, [
                        createVNode("span", null, toDisplayString(unref($t)("learned")) + ": " + toDisplayString(unref(store).sdict.lastLearnIndex), 1),
                        createVNode("span", null, toDisplayString(unref($t)("total_words")) + ": " + toDisplayString(unref(store).sdict.length), 1)
                      ])
                    ])
                  ]),
                  createVNode(ChannelIcons)
                ]),
                createVNode("div", { class: "flex min-w-130 justify-center" }, [
                  createVNode(BaseButton, {
                    keyboard: unref(settingStore).shortcutKeyMap[unref(ShortcutKey).RepeatChapter],
                    onClick: ($event) => options(unref(EventKey).repeatStudy)
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "center gap-2" }, [
                        createVNode(_component_IconFluentArrowClockwise20Regular),
                        createTextVNode(" " + toDisplayString(unref($t)("relearn")), 1)
                      ])
                    ]),
                    _: 1
                  }, 8, ["keyboard", "onClick"]),
                  unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Review ? (openBlock(), createBlock(BaseButton, {
                    key: 0,
                    keyboard: unref(settingStore).shortcutKeyMap[unref(ShortcutKey).NextChapter],
                    onClick: ($event) => options(unref(EventKey).continueStudy)
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "center gap-2" }, [
                        createVNode(_component_IconFluentPlay20Regular),
                        createTextVNode(" " + toDisplayString(unref(dictIsEnd) ? unref($t)("start_from_beginning") : unref($t)("another_group")), 1)
                      ])
                    ]),
                    _: 1
                  }, 8, ["keyboard", "onClick"])) : createCommentVNode("", true),
                  createVNode(BaseButton, {
                    onClick: _ctx.$router.back
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "center gap-2" }, [
                        createVNode(_component_IconFluentHome20Regular),
                        createTextVNode(" " + toDisplayString(unref($t)("back_to_home")), 1)
                      ])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/word/Statistics.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Statistics = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["__scopeId", "data-v-76143484"]]), { __name: "Statistics" });
const _hoisted_1$2 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m-42 76h44v52h-44ZM70 40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v50h-44V80a14 14 0 0 0-14-14H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m162 42H72a2 2 0 0 1-2-2v-26h74a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2M70.18 153.46l-12-48a6 6 0 1 1 11.64-2.92l8.07 32.27l8.74-17.49a6 6 0 0 1 10.74 0l8.74 17.49l8.07-32.27a6 6 0 1 1 11.64 2.92l-12 48a6 6 0 0 1-5.17 4.5a5 5 0 0 1-.65 0a6 6 0 0 1-5.37-3.32L92 133.42l-10.63 21.26a6 6 0 0 1-11.19-1.22"
    }, null, -1)
  ])]);
}
const __unplugin_components_7 = markRaw({ name: "ph-microsoft-word-logo-light", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M8.808 2.101a.9.9 0 0 0-1.614 0L5.673 5.183l-3.401.495a.9.9 0 0 0-.5 1.535l2.462 2.399l-.581 3.387a.9.9 0 0 0 1.306.949l.91-.479a5.5 5.5 0 0 1-.461-.887l-.735.387l.555-3.24a.9.9 0 0 0-.258-.797L2.616 6.638l3.253-.473a.9.9 0 0 0 .677-.492l1.455-2.947L9.2 5.154a5.5 5.5 0 0 1 1.041-.148zM5 10.5v-.103v.205zm10 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 1 0 1 0V11h1.5a.5.5 0 1 0 0-1H11z"
    }, null, -1)
  ])]);
}
const __unplugin_components_4 = markRaw({ name: "fluent-star-add16-regular", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M23.41 25.25a1 1 0 0 1-.54-1.85a6.21 6.21 0 0 0-.19-10.65a1 1 0 1 1 1-1.73a8.21 8.21 0 0 1 .24 14.06a1 1 0 0 1-.51.17",
      class: "clr-i-outline clr-i-outline-path-1"
    }, null, -1),
    createElementVNode("path", {
      fill: "currentColor",
      d: "M25.62 31.18a1 1 0 0 1-.45-1.89A12.44 12.44 0 0 0 25 6.89a1 1 0 1 1 .87-1.8a14.44 14.44 0 0 1 .24 26a1 1 0 0 1-.49.09",
      class: "clr-i-outline clr-i-outline-path-2"
    }, null, -1),
    createElementVNode("path", {
      fill: "currentColor",
      d: "M18 32.06a2 2 0 0 1-1.42-.59L9.14 24H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.22l7.33-7.39A2 2 0 0 1 20 6v24a2 2 0 0 1-1.24 1.85a2 2 0 0 1-.76.21M4 14v8h5.56a1 1 0 0 1 .71.3L18 30.06V6l-7.65 7.7a1 1 0 0 1-.71.3Zm14-8",
      class: "clr-i-outline clr-i-outline-path-3"
    }, null, -1),
    createElementVNode("path", {
      fill: "none",
      d: "M0 0h36v36H0z"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "clarity-volume-up-line", render });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VolumeSettingMiniDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const settingStore = useSettingStore();
    let timer = 0;
    let selectIsOpen = false;
    let show = ref(false);
    function toggle(val) {
      if (selectIsOpen) return;
      clearTimeout(timer);
      if (val) {
        emitter.emit(EventKey.closeOther);
        show.value = val;
      } else {
        timer = setTimeout(() => {
          show.value = val;
        }, 100);
      }
    }
    function selectToggle(e) {
      setTimeout(() => selectIsOpen = e);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconClarityVolumeUpLine = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "setting" }, _attrs))} data-v-eb2a6ee7>`);
      _push(ssrRenderComponent(BaseIcon, {
        onMouseenter: ($event) => toggle(true),
        onMouseleave: ($event) => toggle(false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconClarityVolumeUpLine, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconClarityVolumeUpLine)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MiniDialog, {
        width: "18rem",
        onMouseenter: ($event) => toggle(true),
        onMouseleave: ($event) => toggle(false),
        modelValue: unref(show),
        "onUpdate:modelValue": ($event) => isRef(show) ? show.value = $event : show = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mini-row-title" data-v-eb2a6ee7${_scopeId}>音效设置</div><div class="mini-row" data-v-eb2a6ee7${_scopeId}><label class="item-title" data-v-eb2a6ee7${_scopeId}>单词自动发音</label><div class="wrapper" data-v-eb2a6ee7${_scopeId}>`);
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).wordSound,
              "onUpdate:modelValue": ($event) => unref(settingStore).wordSound = $event,
              "inline-prompt": "",
              "active-text": "开",
              "inactive-text": "关"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mini-row" data-v-eb2a6ee7${_scopeId}><label class="item-title" data-v-eb2a6ee7${_scopeId}>单词发音口音</label><div class="wrapper" data-v-eb2a6ee7${_scopeId}>`);
            _push2(ssrRenderComponent(Select, {
              modelValue: unref(settingStore).soundType,
              "onUpdate:modelValue": ($event) => unref(settingStore).soundType = $event,
              onToggle: selectToggle,
              placeholder: "请选择",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Option, {
                    label: "美音",
                    value: "us"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Option, {
                    label: "英音",
                    value: "uk"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Option, {
                      label: "美音",
                      value: "us"
                    }),
                    createVNode(Option, {
                      label: "英音",
                      value: "uk"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mini-row" data-v-eb2a6ee7${_scopeId}><label class="item-title" data-v-eb2a6ee7${_scopeId}>按键音</label><div class="wrapper" data-v-eb2a6ee7${_scopeId}>`);
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).keyboardSound,
              "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSound = $event,
              "inline-prompt": "",
              "active-text": "开",
              "inactive-text": "关"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mini-row" data-v-eb2a6ee7${_scopeId}><label class="item-title" data-v-eb2a6ee7${_scopeId}>按键音效</label><div class="wrapper" data-v-eb2a6ee7${_scopeId}>`);
            _push2(ssrRenderComponent(Select, {
              modelValue: unref(settingStore).keyboardSoundFile,
              "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSoundFile = $event,
              onToggle: selectToggle,
              placeholder: "请选择",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(SoundFileOptions), (item) => {
                    _push3(ssrRenderComponent(Option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="el-option-row" data-v-eb2a6ee7${_scopeId3}><span data-v-eb2a6ee7${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                          _push4(ssrRenderComponent(VolumeIcon, {
                            time: 100,
                            onClick: ($event) => unref(usePlayAudio)(unref(getAudioFileUrl)(item.value)[0])
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "el-option-row" }, [
                              createVNode("span", null, toDisplayString(item.label), 1),
                              createVNode(VolumeIcon, {
                                time: 100,
                                onClick: ($event) => unref(usePlayAudio)(unref(getAudioFileUrl)(item.value)[0])
                              }, null, 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(SoundFileOptions), (item) => {
                      return openBlock(), createBlock(Option, {
                        key: item.value,
                        label: item.label,
                        value: item.value
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "el-option-row" }, [
                            createVNode("span", null, toDisplayString(item.label), 1),
                            createVNode(VolumeIcon, {
                              time: 100,
                              onClick: ($event) => unref(usePlayAudio)(unref(getAudioFileUrl)(item.value)[0])
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mini-row" data-v-eb2a6ee7${_scopeId}><label class="item-title" data-v-eb2a6ee7${_scopeId}>效果音</label><div class="wrapper" data-v-eb2a6ee7${_scopeId}>`);
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).effectSound,
              "onUpdate:modelValue": ($event) => unref(settingStore).effectSound = $event,
              "inline-prompt": "",
              "active-text": "开",
              "inactive-text": "关"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mini-row-title" }, "音效设置"),
              createVNode("div", { class: "mini-row" }, [
                createVNode("label", { class: "item-title" }, "单词自动发音"),
                createVNode("div", { class: "wrapper" }, [
                  createVNode(Switch, {
                    modelValue: unref(settingStore).wordSound,
                    "onUpdate:modelValue": ($event) => unref(settingStore).wordSound = $event,
                    "inline-prompt": "",
                    "active-text": "开",
                    "inactive-text": "关"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "mini-row" }, [
                createVNode("label", { class: "item-title" }, "单词发音口音"),
                createVNode("div", { class: "wrapper" }, [
                  createVNode(Select, {
                    modelValue: unref(settingStore).soundType,
                    "onUpdate:modelValue": ($event) => unref(settingStore).soundType = $event,
                    onToggle: selectToggle,
                    placeholder: "请选择",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createVNode(Option, {
                        label: "美音",
                        value: "us"
                      }),
                      createVNode(Option, {
                        label: "英音",
                        value: "uk"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "mini-row" }, [
                createVNode("label", { class: "item-title" }, "按键音"),
                createVNode("div", { class: "wrapper" }, [
                  createVNode(Switch, {
                    modelValue: unref(settingStore).keyboardSound,
                    "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSound = $event,
                    "inline-prompt": "",
                    "active-text": "开",
                    "inactive-text": "关"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "mini-row" }, [
                createVNode("label", { class: "item-title" }, "按键音效"),
                createVNode("div", { class: "wrapper" }, [
                  createVNode(Select, {
                    modelValue: unref(settingStore).keyboardSoundFile,
                    "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSoundFile = $event,
                    onToggle: selectToggle,
                    placeholder: "请选择",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(SoundFileOptions), (item) => {
                        return openBlock(), createBlock(Option, {
                          key: item.value,
                          label: item.label,
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "el-option-row" }, [
                              createVNode("span", null, toDisplayString(item.label), 1),
                              createVNode(VolumeIcon, {
                                time: 100,
                                onClick: ($event) => unref(usePlayAudio)(unref(getAudioFileUrl)(item.value)[0])
                              }, null, 8, ["onClick"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["label", "value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "mini-row" }, [
                createVNode("label", { class: "item-title" }, "效果音"),
                createVNode("div", { class: "wrapper" }, [
                  createVNode(Switch, {
                    modelValue: unref(settingStore).effectSound,
                    "onUpdate:modelValue": ($event) => unref(settingStore).effectSound = $event,
                    "inline-prompt": "",
                    "active-text": "开",
                    "inactive-text": "关"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/word/VolumeSettingMiniDialog.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const VolumeSettingMiniDialog = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["__scopeId", "data-v-eb2a6ee7"]]), { __name: "VolumeSettingMiniDialog" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "StageProgress",
  __ssrInlineRender: true,
  props: {
    stages: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-5 w-full h-3" }, _attrs))}><!--[-->`);
      ssrRenderList(props.stages, (i) => {
        _push(`<!--[-->`);
        if (i?.children?.length && i.active) {
          _push(`<div class="flex gap-1" style="${ssrRenderStyle({ width: i.ratio + "%" })}"><!--[-->`);
          ssrRenderList(i.children, (j) => {
            _push(ssrRenderComponent(Tooltip, {
              title: j.name
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(Progress, {
                    style: { width: j.ratio + "%" },
                    percentage: j.percentage,
                    "stroke-width": 8,
                    color: j.active ? "#72c240" : "#69b1ff",
                    active: j.active,
                    "show-text": false
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(Progress, {
                      style: { width: j.ratio + "%" },
                      percentage: j.percentage,
                      "stroke-width": 8,
                      color: j.active ? "#72c240" : "#69b1ff",
                      active: j.active,
                      "show-text": false
                    }, null, 8, ["style", "percentage", "color", "active"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(ssrRenderComponent(Tooltip, {
            title: i.name
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(Progress, {
                  style: { width: i.ratio + "%" },
                  percentage: i.percentage,
                  "stroke-width": 8,
                  color: i.active && props.stages.length > 1 ? "#72c240" : "#69b1ff",
                  active: i.active,
                  "show-text": false
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(Progress, {
                    style: { width: i.ratio + "%" },
                    percentage: i.percentage,
                    "stroke-width": 8,
                    color: i.active && props.stages.length > 1 ? "#72c240" : "#69b1ff",
                    active: i.active,
                    "show-text": false
                  }, null, 8, ["style", "percentage", "color", "active"])
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StageProgress.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const StageProgress = Object.assign(_sfc_main$6, { __name: "StageProgress" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    showEdit: { type: Boolean },
    isCollect: { type: Boolean },
    isSimple: { type: Boolean }
  },
  emits: ["toggleCollect", "toggleSimple", "edit", "skip", "skipStep"],
  setup(__props, { emit: __emit }) {
    const statStore = usePracticeStore();
    const { t: $t } = useI18n();
    useBaseStore();
    const settingStore = useSettingStore();
    const emit = __emit;
    let practiceData = inject("practiceData");
    function format(val, suffix = "", check = -1) {
      return val === check ? "-" : val + suffix;
    }
    const status = computed(() => {
      if (settingStore.wordPracticeMode === WordPracticeMode.Free) return $t("free_practice");
      if (practiceData.isTypingWrongWord) return $t("review_wrong_words");
      return statStore.getStageName;
    });
    computed(() => {
      if (!practiceData.words.length) return 0;
      return practiceData.index / practiceData.words.length * 100;
    });
    const stages = computed(() => {
      let DEFAULT_BAR = {
        name: "",
        ratio: 100,
        percentage: practiceData.index / practiceData.words.length * 100,
        active: true
      };
      if ([WordPracticeMode.Shuffle, WordPracticeMode.Free].includes(settingStore.wordPracticeMode)) {
        return [DEFAULT_BAR];
      } else {
        const stageMap = {
          [WordPracticeStage.FollowWriteNewWord]: { stageIndex: 0, childIndex: 0 },
          [WordPracticeStage.IdentifyNewWord]: { stageIndex: 0, childIndex: 0 },
          [WordPracticeStage.ListenNewWord]: { stageIndex: 0, childIndex: 1 },
          [WordPracticeStage.DictationNewWord]: { stageIndex: 0, childIndex: 2 },
          [WordPracticeStage.IdentifyReview]: { stageIndex: 1, childIndex: 0 },
          [WordPracticeStage.ListenReview]: { stageIndex: 1, childIndex: 1 },
          [WordPracticeStage.DictationReview]: { stageIndex: 1, childIndex: 2 },
          [WordPracticeStage.IdentifyReviewAll]: { stageIndex: 2, childIndex: 0 },
          [WordPracticeStage.ListenReviewAll]: { stageIndex: 2, childIndex: 1 },
          [WordPracticeStage.DictationReviewAll]: { stageIndex: 2, childIndex: 2 }
        };
        const currentStageConfig = stageMap[statStore.stage];
        if (!currentStageConfig) {
          return stages.value;
        }
        const { stageIndex, childIndex } = currentStageConfig;
        const currentProgress = practiceData.index / practiceData.words.length * 100;
        if ([WordPracticeMode.IdentifyOnly, WordPracticeMode.DictationOnly, WordPracticeMode.ListenOnly].includes(
          settingStore.wordPracticeMode
        )) {
          const stages2 = [
            {
              name: `新词：${WordPracticeModeNameMap[settingStore.wordPracticeMode]}`,
              ratio: 33,
              percentage: 0,
              active: false
            },
            {
              name: `上次学习：${WordPracticeModeNameMap[settingStore.wordPracticeMode]}`,
              ratio: 33,
              percentage: 0,
              active: false
            },
            {
              name: `之前学习：${WordPracticeModeNameMap[settingStore.wordPracticeMode]}`,
              ratio: 33,
              percentage: 0,
              active: false
            }
          ];
          for (let i = 0; i < stageIndex; i++) {
            stages2[i].percentage = 100;
            stages2[i].ratio = 33;
          }
          stages2[stageIndex].active = true;
          stages2[stageIndex].percentage = practiceData.index / practiceData.words.length * 100;
          return stages2;
        } else {
          const stageConfigs = [
            {
              name: "新词",
              ratio: 70,
              children: [{ name: "新词：跟写" }, { name: "新词：听写" }, { name: "新词：默写" }]
            },
            {
              name: "上次学习：复习",
              ratio: 15,
              children: [{ name: "上次学习：自测" }, { name: "上次学习：听写" }, { name: "上次学习：默写" }]
            },
            {
              name: "之前学习：复习",
              ratio: 15,
              children: [{ name: "之前学习：自测" }, { name: "之前学习：听写" }, { name: "之前学习：默写" }]
            }
          ];
          const stages2 = stageConfigs.map((config) => ({
            name: config.name,
            percentage: 0,
            ratio: config.ratio,
            active: false,
            children: config.children.map((child) => ({
              name: child.name,
              percentage: 0,
              ratio: 33,
              active: false
            }))
          }));
          for (let i = 0; i < stageIndex; i++) {
            stages2[i].percentage = 100;
            stages2[i].ratio = 15;
          }
          stages2[stageIndex].ratio = 70;
          stages2[stageIndex].active = true;
          const currentStageChildren = stages2[stageIndex].children;
          if (childIndex === 0) {
            currentStageChildren[0].active = true;
            currentStageChildren[0].percentage = currentProgress;
          } else if (childIndex === 1) {
            currentStageChildren[0].active = false;
            currentStageChildren[1].active = true;
            currentStageChildren[2].active = false;
            currentStageChildren[0].percentage = 100;
            currentStageChildren[1].percentage = currentProgress;
            currentStageChildren[2].percentage = 0;
          } else if (childIndex === 2) {
            currentStageChildren[0].active = false;
            currentStageChildren[1].active = false;
            currentStageChildren[2].active = true;
            currentStageChildren[0].percentage = 100;
            currentStageChildren[1].percentage = 100;
            currentStageChildren[2].percentage = currentProgress;
          }
          if (settingStore.wordPracticeMode === WordPracticeMode.System) {
            return stages2;
          }
          if (settingStore.wordPracticeMode === WordPracticeMode.Review) {
            stages2.shift();
            if (stageIndex === 1) stages2[1].ratio = 30;
            if (stageIndex === 2) stages2[0].ratio = 30;
            console.log("stages", stages2, childIndex);
            return stages2;
          }
        }
      }
      return [DEFAULT_BAR];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentChevronLeft20Filled = __unplugin_components_6;
      const _component_IconFluentArrowRight16Regular = __unplugin_components_1$1;
      const _component_IconFluentCheckmarkCircle16Regular = __unplugin_components_9;
      const _component_IconFluentCheckmarkCircle16Filled = __unplugin_components_3$1;
      const _component_IconFluentStarAdd16Regular = __unplugin_components_4;
      const _component_IconFluentStar16Filled = __unplugin_components_5;
      const _component_IconFluentArrowBounce20Regular = __unplugin_components_2$2;
      const _component_IconPhMicrosoftWordLogoLight = __unplugin_components_7;
      const _component_IconFluentEyeOff16Regular = __unplugin_components_4$2;
      const _component_IconFluentEye16Regular = __unplugin_components_5$1;
      const _component_IconPhTranslate = __unplugin_components_10;
      const _component_IconFluentTranslateOff16Regular = __unplugin_components_7$3;
      const _component_IconFluentTextListAbcUppercaseLtr20Regular = __unplugin_components_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-1a55cb74>`);
      _push(ssrRenderComponent(Tooltip, {
        title: unref(settingStore).showToolbar ? unref($t)("collapse") : unref($t)("expand")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentChevronLeft20Filled, {
              onClick: ($event) => unref(settingStore).showToolbar = !unref(settingStore).showToolbar,
              class: ["arrow", !unref(settingStore).showToolbar && "down"],
              color: "#999"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconFluentChevronLeft20Filled, {
                onClick: ($event) => unref(settingStore).showToolbar = !unref(settingStore).showToolbar,
                class: ["arrow", !unref(settingStore).showToolbar && "down"],
                color: "#999"
              }, null, 8, ["onClick", "class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bottom" data-v-1a55cb74>`);
      _push(ssrRenderComponent(StageProgress, { stages: stages.value }, null, _parent));
      _push(`<div class="flex justify-between items-center" data-v-1a55cb74><div class="stat" data-v-1a55cb74><div class="row" data-v-1a55cb74><div class="num" data-v-1a55cb74>${ssrInterpolate(`${unref(practiceData).index + 1}/${unref(practiceData).words.length}`)}</div><div class="line" data-v-1a55cb74></div><div class="name" data-v-1a55cb74>${ssrInterpolate(status.value)}</div></div><div class="row" data-v-1a55cb74><div class="num" data-v-1a55cb74>${ssrInterpolate(Math.floor(unref(statStore).spend / 1e3 / 60))}${ssrInterpolate(unref($t)("minutes"))}</div><div class="line" data-v-1a55cb74></div><div class="name" data-v-1a55cb74>${ssrInterpolate(unref($t)("time"))}</div></div><div class="row" data-v-1a55cb74><div class="num" data-v-1a55cb74>${ssrInterpolate(unref(statStore).total)}</div><div class="line" data-v-1a55cb74></div><div class="name" data-v-1a55cb74>${ssrInterpolate(unref($t)("total_words"))}</div></div><div class="row" data-v-1a55cb74><div class="num" data-v-1a55cb74>${ssrInterpolate(format(unref(statStore).wrong, "", 0))}</div><div class="line" data-v-1a55cb74></div><div class="name" data-v-1a55cb74>${ssrInterpolate(unref($t)("errors"))}</div></div></div><div class="flex gap-2 justify-center items-center" id="toolbar-icons" data-v-1a55cb74>`);
      _push(ssrRenderComponent(SettingDialog, { type: "word" }, null, _parent));
      _push(ssrRenderComponent(VolumeSettingMiniDialog, null, null, _parent));
      if (unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Free) {
        _push(ssrRenderComponent(BaseIcon, {
          onClick: ($event) => emit("skipStep"),
          title: `${unref($t)("skip_to_next_stage")}:${unref(WordPracticeStageNameMap)[unref(statStore).nextStage]}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconFluentArrowRight16Regular, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconFluentArrowRight16Regular)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative z-999 group" data-v-1a55cb74><div class="space-y-2 btn-no-margin pb-2 left-1/2 -transform-translate-x-1/2 absolute z-999 bottom-full scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto" data-v-1a55cb74>`);
      _push(ssrRenderComponent(BaseButton, {
        size: "normal",
        type: "info",
        class: "w-full",
        onClick: ($event) => _ctx.$emit("toggleSimple")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2" data-v-1a55cb74${_scopeId}>`);
            if (!__props.isSimple) {
              _push2(ssrRenderComponent(_component_IconFluentCheckmarkCircle16Regular, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_IconFluentCheckmarkCircle16Filled, null, null, _parent2, _scopeId));
            }
            _push2(`<span data-v-1a55cb74${_scopeId}>${ssrInterpolate((!__props.isSimple ? unref($t)("mark_mastered") : unref($t)("unmark_mastered")) + `(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleSimple]})`)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                !__props.isSimple ? (openBlock(), createBlock(_component_IconFluentCheckmarkCircle16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentCheckmarkCircle16Filled, { key: 1 })),
                createVNode("span", null, toDisplayString((!__props.isSimple ? unref($t)("mark_mastered") : unref($t)("unmark_mastered")) + `(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleSimple]})`), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BaseButton, {
        size: "normal",
        type: "info",
        class: "w-full",
        onClick: ($event) => _ctx.$emit("toggleCollect")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2" data-v-1a55cb74${_scopeId}>`);
            if (!__props.isCollect) {
              _push2(ssrRenderComponent(_component_IconFluentStarAdd16Regular, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_IconFluentStar16Filled, null, null, _parent2, _scopeId));
            }
            _push2(`<span data-v-1a55cb74${_scopeId}>${ssrInterpolate((!__props.isCollect ? unref($t)("collect") : unref($t)("uncollect")) + `(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleCollect]})`)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                !__props.isCollect ? (openBlock(), createBlock(_component_IconFluentStarAdd16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentStar16Filled, { key: 1 })),
                createVNode("span", null, toDisplayString((!__props.isCollect ? unref($t)("collect") : unref($t)("uncollect")) + `(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleCollect]})`), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BaseButton, {
        size: "normal",
        type: "info",
        class: "w-full",
        onClick: ($event) => _ctx.$emit("skip")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2" data-v-1a55cb74${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentArrowBounce20Regular, { class: "transform-rotate-180" }, null, _parent2, _scopeId));
            _push2(`<span data-v-1a55cb74${_scopeId}>${ssrInterpolate(unref($t)("skip_word"))}(${ssrInterpolate(unref(settingStore).shortcutKeyMap[unref(ShortcutKey).Next])})</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_IconFluentArrowBounce20Regular, { class: "transform-rotate-180" }),
                createVNode("span", null, toDisplayString(unref($t)("skip_word")) + "(" + toDisplayString(unref(settingStore).shortcutKeyMap[unref(ShortcutKey).Next]) + ")", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(BaseIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconPhMicrosoftWordLogoLight, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconPhMicrosoftWordLogoLight)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(BaseIcon, {
        onClick: ($event) => unref(settingStore).dictation = !unref(settingStore).dictation,
        title: `${unref($t)("toggle_dictation_mode")}(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleDictation]})`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(settingStore).dictation) {
              _push2(ssrRenderComponent(_component_IconFluentEyeOff16Regular, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_IconFluentEye16Regular, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(settingStore).dictation ? (openBlock(), createBlock(_component_IconFluentEyeOff16Regular, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentEye16Regular, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BaseIcon, {
        title: `${unref($t)("toggle_translation")}(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ToggleShowTranslate]})`,
        onClick: ($event) => unref(settingStore).translate = !unref(settingStore).translate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(settingStore).translate) {
              _push2(ssrRenderComponent(_component_IconPhTranslate, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_IconFluentTranslateOff16Regular, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(settingStore).translate ? (openBlock(), createBlock(_component_IconPhTranslate, { key: 0 })) : (openBlock(), createBlock(_component_IconFluentTranslateOff16Regular, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BaseIcon, {
        onClick: ($event) => unref(settingStore).showPanel = !unref(settingStore).showPanel,
        title: `${unref($t)("word_list")}(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).TogglePanel]})`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentTextListAbcUppercaseLtr20Regular, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconFluentTextListAbcUppercaseLtr20Regular)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="progress-wrap flex gap-3 items-center color-gray" data-v-1a55cb74><span class="shrink-0" data-v-1a55cb74>${ssrInterpolate(status.value)}</span>`);
      _push(ssrRenderComponent(StageProgress, { stages: stages.value }, null, _parent));
      _push(`<div class="num" data-v-1a55cb74>${ssrInterpolate(`${unref(practiceData).index + 1}/${unref(practiceData).words.length}`)}</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/word/Footer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-1a55cb74"]]), { __name: "Footer" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "WordList",
  __ssrInlineRender: true,
  props: {
    list: { default: [] },
    showTranslate: { type: Boolean, default: true },
    showWord: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const listRef = ref(null);
    function scrollToBottom() {
      listRef.value?.scrollToBottom();
    }
    function scrollToItem(index) {
      listRef.value?.scrollToItem(index);
    }
    __expose({ scrollToBottom, scrollToItem });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BaseList, mergeProps({
        ref_key: "listRef",
        ref: listRef,
        onClick: (e) => emit("click", e),
        list: __props.list
      }, _ctx.$attrs, _attrs), {
        default: withCtx(({ item, index, active }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(WordItem, {
              "show-translate": __props.showTranslate,
              "show-word": __props.showWord,
              item,
              index,
              active
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(WordItem, {
                "show-translate": __props.showTranslate,
                "show-word": __props.showWord,
                item,
                index,
                active
              }, null, 8, ["show-translate", "show-word", "item", "index", "active"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/WordList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WordList = Object.assign(_sfc_main$4, { __name: "WordList" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SentenceHightLightWord",
  __ssrInlineRender: true,
  props: {
    text: { default: "" },
    dictation: { type: Boolean, default: false },
    highLight: { type: Boolean, default: true },
    word: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const highlightedText = computed(() => {
      if (!props.text || !props.word) {
        return props.text;
      }
      const regex = new RegExp(`\\b${escapeRegExp(props.word)}\\b`, "gi");
      return props.text.replace(regex, (match) => {
        return `<span class="${props.highLight && "highlight-word"} ${props.dictation && "word-shadow"}">${match}</span>`;
      });
    });
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a2ddf398>${highlightedText.value ?? ""}</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/word/SentenceHightLightWord.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SentenceHightLightWord = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-a2ddf398"]]), { __name: "SentenceHightLightWord" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TypeWord",
  __ssrInlineRender: true,
  props: {
    word: { default: () => getDefaultWord() }
  },
  emits: ["complete", "wrong", "know"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t: $t } = useI18n();
    const props = __props;
    const emit = __emit;
    let input = ref("");
    let wrong = ref("");
    let showFullWord = ref(false);
    let inputLock = false;
    let wordRepeatCount = 0;
    let wordCompletedTime = 0;
    let jumpTimer = -1;
    let cursor = ref({
      top: 0,
      left: 0
    });
    const settingStore = useSettingStore();
    const statStore = usePracticeStore();
    const playBeep = usePlayBeep();
    const playCorrect = usePlayCorrect();
    const playKeyboardAudio = usePlayKeyboardAudio();
    const playWordAudio = usePlayWordAudio();
    const ttsPlayAudio = useTTsPlayAudio();
    const volumeIconRef = ref();
    const typingWordRef = ref();
    let displayWord = computed(() => {
      return props.word.word.slice(input.value.length + wrong.value.length);
    });
    function updateCurrentWordInfo() {
      (void 0).__CURRENT_WORD_INFO__ = {
        word: props.word.word,
        input: input.value,
        inputLock,
        containsSpace: props.word.word.includes(" ")
      };
    }
    watch(() => props.word, reset, { deep: true });
    function reset() {
      wrong.value = input.value = "";
      wordRepeatCount = 0;
      showWordResult.value = inputLock = false;
      wordCompletedTime = 0;
      if (settingStore.wordSound) {
        if (settingStore.wordPracticeType !== WordPracticeType.Dictation) {
          volumeIconRef.value?.play(400, true);
        }
      }
      updateCurrentWordInfo();
      checkCursorPosition();
    }
    watch(
      () => input.value,
      () => {
        updateCurrentWordInfo();
      }
    );
    function repeat() {
      setTimeout(() => {
        wrong.value = input.value = "";
        wordRepeatCount++;
        inputLock = false;
        if (settingStore.wordSound) volumeIconRef.value?.play();
      }, settingStore.waitTimeForChangeWord);
    }
    let showWordResult = ref(false);
    let pressNumber = 0;
    const right = computed(() => {
      if (settingStore.ignoreCase) {
        return input.value.toLowerCase() === props.word.word.toLowerCase();
      } else {
        return input.value === props.word.word;
      }
    });
    let showNotice = false;
    function know(e) {
      if (settingStore.wordPracticeType === WordPracticeType.Identify) {
        if (!showWordResult.value) {
          inputLock = showWordResult.value = true;
          input.value = props.word.word;
          emit("know");
          if (!showNotice) {
            Toast.info($t("know_word_tip"), { duration: 5e3 });
            showNotice = true;
          }
          return;
        }
      }
      onTyping(e);
    }
    function unknown(e) {
      if (settingStore.wordPracticeType === WordPracticeType.Identify) {
        if (!showWordResult.value) {
          showWordResult.value = true;
          emit("wrong");
          if (settingStore.wordSound) volumeIconRef.value?.play();
          return;
        }
      }
      onTyping(e);
    }
    async function onTyping(e) {
      debugger;
      let word = props.word.word;
      if (inputLock) {
        if (e.code === "Space") {
          if (right.value) {
            clearInterval(jumpTimer);
            if (wordCompletedTime && Date.now() - wordCompletedTime < 300) {
              return;
            }
            showWordResult.value = inputLock = false;
            if (shouldRepeat()) {
              repeat();
            } else {
              emit("complete");
            }
          } else {
            if (showWordResult.value) {
              pressNumber++;
              if (pressNumber >= 3) {
                Toast.info($t("press_delete_reinput"), { duration: 2e3 });
                pressNumber = 0;
              }
            }
          }
        } else {
          if (right.value) {
            pressNumber++;
            if (pressNumber >= 3) {
              Toast.info($t("press_space_continue"), { duration: 2e3 });
              pressNumber = 0;
            }
          } else {
            showWordResult.value = inputLock = false;
            input.value = wrong.value = "";
            onTyping(e);
          }
        }
        return;
      }
      inputLock = true;
      let letter = e.key;
      if (settingStore.wordPracticeType === WordPracticeType.Dictation) {
        if (e.code === "Space") {
          if (input.value.length && (input.value.length >= word.length || !word.includes(" "))) {
            if (input.value.toLowerCase() === word.toLowerCase()) {
              if (showWordResult.value) {
                return emit("complete");
              } else {
                playCorrect();
                if (settingStore.wordSound) volumeIconRef.value?.play();
              }
            } else {
              playBeep();
              if (settingStore.wordSound) volumeIconRef.value?.play();
              emit("wrong");
            }
            showWordResult.value = true;
            return;
          }
        }
        input.value += letter;
        wrong.value = "";
        playKeyboardAudio();
        updateCurrentWordInfo();
        inputLock = false;
      } else if (settingStore.wordPracticeType === WordPracticeType.Identify && !showWordResult.value) {
        showWordResult.value = true;
        emit("wrong");
        if (settingStore.wordSound) volumeIconRef.value?.play();
        inputLock = false;
        onTyping(e);
      } else {
        let right2 = false;
        if (settingStore.ignoreCase) {
          right2 = letter.toLowerCase() === word[input.value.length].toLowerCase();
        } else {
          right2 = letter === word[input.value.length];
        }
        if (e.shiftKey && ("！" === word[input.value.length] && e.code === "Digit1" || "￥" === word[input.value.length] && e.code === "Digit4" || "…" === word[input.value.length] && e.code === "Digit6" || "（" === word[input.value.length] && e.code === "Digit9" || "—" === word[input.value.length] && e.code === "Minus" || "？" === word[input.value.length] && e.code === "Slash" || "》" === word[input.value.length] && e.code === "Period" || "《" === word[input.value.length] && e.code === "Comma" || "“" === word[input.value.length] && e.code === "Quote" || "：" === word[input.value.length] && e.code === "Semicolon" || "）" === word[input.value.length] && e.code === "Digit0")) {
          right2 = true;
          letter = word[input.value.length];
        }
        if (!e.shiftKey && ("【" === word[input.value.length] && e.code === "BracketLeft" || "、" === word[input.value.length] && e.code === "Slash" || "。" === word[input.value.length] && e.code === "Period" || "，" === word[input.value.length] && e.code === "Comma" || "‘" === word[input.value.length] && e.code === "Quote" || "；" === word[input.value.length] && e.code === "Semicolon" || "【" === word[input.value.length] && e.code === "BracketLeft" || "】" === word[input.value.length] && e.code === "BracketRight")) {
          right2 = true;
          letter = word[input.value.length];
        }
        if (right2) {
          input.value += letter;
          wrong.value = "";
          playKeyboardAudio();
        } else {
          emit("wrong");
          wrong.value = letter;
          playBeep();
          if (settingStore.wordSound) volumeIconRef.value?.play();
          setTimeout(() => {
            if (settingStore.inputWrongClear) input.value = "";
            wrong.value = "";
          }, 500);
        }
        updateCurrentWordInfo();
        if (input.value.toLowerCase() === word.toLowerCase()) {
          wordCompletedTime = Date.now();
          playCorrect();
          if ([WordPracticeType.Listen, WordPracticeType.Identify].includes(settingStore.wordPracticeType) && !showWordResult.value) {
            showWordResult.value = true;
          }
          if ([WordPracticeType.FollowWrite, WordPracticeType.Spell].includes(settingStore.wordPracticeType)) {
            if (settingStore.autoNextWord) {
              if (shouldRepeat()) {
                repeat();
              } else {
                jumpTimer = setTimeout(() => emit("complete"), settingStore.waitTimeForChangeWord);
              }
            }
          }
        } else {
          inputLock = false;
        }
      }
    }
    function shouldRepeat() {
      if (settingStore.wordPracticeType === WordPracticeType.FollowWrite) {
        if (settingStore.repeatCount == 100) {
          return settingStore.repeatCustomCount > wordRepeatCount + 1;
        } else {
          return settingStore.repeatCount > wordRepeatCount + 1;
        }
      } else {
        return false;
      }
    }
    function del() {
      playKeyboardAudio();
      inputLock = false;
      if (showWordResult.value) {
        input.value = "";
        showWordResult.value = false;
      } else {
        if (wrong.value) {
          wrong.value = "";
        } else {
          input.value = input.value.slice(0, -1);
        }
      }
      updateCurrentWordInfo();
    }
    function showWord() {
      if (settingStore.allowWordTip) {
        if (settingStore.wordPracticeType === WordPracticeType.Dictation || settingStore.dictation) {
          emit("wrong");
        }
        showFullWord.value = true;
        if (statStore.stage !== WordPracticeStage.FollowWriteNewWord) {
          emit("wrong");
        }
      }
    }
    function hideWord() {
      showFullWord.value = false;
    }
    function play() {
      if (settingStore.wordPracticeType === WordPracticeType.Dictation || settingStore.dictation) {
        emit("wrong");
      }
      volumeIconRef.value?.play();
    }
    __expose({ del, showWord, hideWord, play });
    function mouseleave() {
      setTimeout(() => {
        showFullWord.value = false;
      }, 50);
    }
    function hideWordInTranslation(text, word) {
      if (!text || !word) {
        return text;
      }
      const wordBase = word.toLowerCase();
      const patterns = [
        `\\b${escapeRegExp(wordBase)}\\b`,
        // 单词本身
        `\\b${escapeRegExp(wordBase)}s\\b`,
        // 复数形式
        `\\b${escapeRegExp(wordBase)}es\\b`,
        // 复数形式
        `\\b${escapeRegExp(wordBase)}ed\\b`,
        // 过去式
        `\\b${escapeRegExp(wordBase)}ing\\b`
        // 进行时
      ];
      let result = text;
      patterns.forEach((pattern) => {
        const regex = new RegExp(pattern, "gi");
        result = result.replace(regex, (match) => `<span class="word-shadow">${match}</span>`);
      });
      return result;
    }
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    watch([() => input.value, () => showFullWord.value, () => settingStore.dictation], checkCursorPosition);
    function checkCursorPosition() {
      _nextTick(() => {
        const cursorEl = (void 0).querySelector(`.cursor`);
        const inputList = (void 0).querySelectorAll(`.l`);
        if (!typingWordRef.value) return;
        const typingWordRect = typingWordRef.value.getBoundingClientRect();
        if (inputList.length) {
          let inputRect = last(Array.from(inputList)).getBoundingClientRect();
          cursor.value = {
            top: inputRect.top + inputRect.height - cursorEl.clientHeight - typingWordRect.top,
            left: inputRect.right - typingWordRect.left - 3
          };
        } else {
          const dictation = (void 0).querySelector(`.dictation`);
          let elRect;
          if (dictation) {
            elRect = dictation.getBoundingClientRect();
          } else {
            const letter = (void 0).querySelector(`.letter`);
            elRect = letter.getBoundingClientRect();
          }
          cursor.value = {
            top: elRect.top + elRect.height - cursorEl.clientHeight - typingWordRect.top,
            left: elRect.left - typingWordRect.left - 3
          };
        }
      });
    }
    useEvents([
      [ShortcutKey.KnowWord, know],
      [ShortcutKey.UnknownWord, unknown]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_opacity = resolveDirective("opacity");
      if (__props.word.word.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "typing-word",
          ref_key: "typingWordRef",
          ref: typingWordRef
        }, _attrs))} data-v-ff0bc64a><div class="flex flex-col items-center" data-v-ff0bc64a><div class="flex gap-1 mt-30" data-v-ff0bc64a>`);
        if (unref(settingStore).soundType === "uk" && __props.word.phonetic0) {
          _push(`<div class="${ssrRenderClass([
            (unref(settingStore).dictation || [unref(WordPracticeType).Spell, unref(WordPracticeType).Listen, unref(WordPracticeType).Dictation].includes(
              unref(settingStore).wordPracticeType
            )) && !unref(showFullWord) && !unref(showWordResult) && "word-shadow",
            "phonetic"
          ])}" data-v-ff0bc64a> [${ssrInterpolate(__props.word.phonetic0)}] </div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(settingStore).soundType === "us" && __props.word.phonetic1) {
          _push(`<div class="${ssrRenderClass([
            (unref(settingStore).dictation || [unref(WordPracticeType).Spell, unref(WordPracticeType).Listen, unref(WordPracticeType).Dictation].includes(
              unref(settingStore).wordPracticeType
            )) && !unref(showFullWord) && !unref(showWordResult) && "word-shadow",
            "phonetic"
          ])}" data-v-ff0bc64a> [${ssrInterpolate(__props.word.phonetic1)}] </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VolumeIcon, {
          title: `发音(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).PlayWordPronunciation]})`,
          ref_key: "volumeIconRef",
          ref: volumeIconRef,
          simple: true,
          cb: () => unref(playWordAudio)(__props.word.word)
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(Tooltip, {
          title: unref(settingStore).dictation ? `可以按快捷键 ${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ShowWord]} 显示单词` : ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div id="word" class="${ssrRenderClass([unref(wrong) && "is-wrong", "word my-1"])}" style="${ssrRenderStyle({ fontSize: unref(settingStore).fontSize.wordForeignFontSize + "px" })}" data-v-ff0bc64a${_scopeId}>`);
              if (unref(settingStore).wordPracticeType === unref(WordPracticeType).Dictation) {
                _push2(`<div data-v-ff0bc64a${_scopeId}><div${ssrRenderAttrs(mergeProps({ class: "letter text-align-center w-full inline-block" }, ssrGetDirectiveProps(_ctx, _directive_opacity, !unref(settingStore).dictation || unref(showWordResult) || unref(showFullWord))))} data-v-ff0bc64a${_scopeId}>${ssrInterpolate(__props.word.word)}</div><div style="${ssrRenderStyle({ minHeight: unref(settingStore).fontSize.wordForeignFontSize + "px" })}" class="${ssrRenderClass([unref(showWordResult) ? right.value ? "right" : "wrong" : "", "mt-2 w-120 dictation"])}" data-v-ff0bc64a${_scopeId}><!--[-->`);
                ssrRenderList(unref(input), (i) => {
                  _push2(`<!--[-->`);
                  if (i !== " ") {
                    _push2(`<span class="l" data-v-ff0bc64a${_scopeId}>${ssrInterpolate(i)}</span>`);
                  } else {
                    _push2(ssrRenderComponent(Space, {
                      class: "l",
                      "is-wrong": unref(showWordResult) ? !right.value : false,
                      "is-wait": !unref(showWordResult)
                    }, null, _parent2, _scopeId));
                  }
                  _push2(`<!--]-->`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!--[-->`);
                if (unref(input)) {
                  _push2(`<span class="input" data-v-ff0bc64a${_scopeId}>${ssrInterpolate(unref(input))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(wrong)) {
                  _push2(`<span class="wrong" data-v-ff0bc64a${_scopeId}>${ssrInterpolate(unref(wrong))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(settingStore).dictation && !unref(showFullWord)) {
                  _push2(`<span class="letter" data-v-ff0bc64a${_scopeId}>${ssrInterpolate(unref(displayWord).split("").map((v) => v === " " ? " " : "_").join(""))}</span>`);
                } else {
                  _push2(`<span class="letter" data-v-ff0bc64a${_scopeId}>${ssrInterpolate(unref(displayWord))}</span>`);
                }
                _push2(`<!--]-->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  id: "word",
                  class: ["word my-1", unref(wrong) && "is-wrong"],
                  style: { fontSize: unref(settingStore).fontSize.wordForeignFontSize + "px" },
                  onMouseenter: showWord,
                  onMouseleave: mouseleave
                }, [
                  unref(settingStore).wordPracticeType === unref(WordPracticeType).Dictation ? (openBlock(), createBlock("div", { key: 0 }, [
                    withDirectives((openBlock(), createBlock("div", { class: "letter text-align-center w-full inline-block" }, [
                      createTextVNode(toDisplayString(__props.word.word), 1)
                    ])), [
                      [_directive_opacity, !unref(settingStore).dictation || unref(showWordResult) || unref(showFullWord)]
                    ]),
                    createVNode("div", {
                      class: ["mt-2 w-120 dictation", unref(showWordResult) ? right.value ? "right" : "wrong" : ""],
                      style: { minHeight: unref(settingStore).fontSize.wordForeignFontSize + "px" }
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(input), (i) => {
                        return openBlock(), createBlock(Fragment, null, [
                          i !== " " ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "l"
                          }, toDisplayString(i), 1)) : (openBlock(), createBlock(Space, {
                            key: 1,
                            class: "l",
                            "is-wrong": unref(showWordResult) ? !right.value : false,
                            "is-wait": !unref(showWordResult)
                          }, null, 8, ["is-wrong", "is-wait"]))
                        ], 64);
                      }), 256))
                    ], 6)
                  ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    unref(input) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "input"
                    }, toDisplayString(unref(input)), 1)) : createCommentVNode("", true),
                    unref(wrong) ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "wrong"
                    }, toDisplayString(unref(wrong)), 1)) : createCommentVNode("", true),
                    unref(settingStore).dictation && !unref(showFullWord) ? (openBlock(), createBlock("span", {
                      key: 2,
                      class: "letter"
                    }, toDisplayString(unref(displayWord).split("").map((v) => v === " " ? " " : "_").join("")), 1)) : (openBlock(), createBlock("span", {
                      key: 3,
                      class: "letter"
                    }, toDisplayString(unref(displayWord)), 1))
                  ], 64))
                ], 38)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(settingStore).wordPracticeType === unref(WordPracticeType).Identify && !unref(showWordResult)) {
          _push(`<div class="mt-4 flex gap-4" data-v-ff0bc64a>`);
          _push(ssrRenderComponent(BaseButton, {
            keyboard: `${unref($t)("shortcut")}(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).KnowWord]})`,
            size: "large",
            onClick: know
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref($t)("i_know"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref($t)("i_know")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(BaseButton, {
            keyboard: `${unref($t)("shortcut")}(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).UnknownWord]})`,
            size: "large",
            onClick: unknown
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref($t)("i_dont_know"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref($t)("i_dont_know")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "translate flex flex-col gap-2 my-3",
          style: {
            fontSize: unref(settingStore).fontSize.wordTranslateFontSize + "px"
          }
        }, ssrGetDirectiveProps(_ctx, _directive_opacity, unref(settingStore).translate || unref(showWordResult) || unref(showFullWord))))} data-v-ff0bc64a><!--[-->`);
        ssrRenderList(__props.word.trans, (v) => {
          _push(`<div class="flex" data-v-ff0bc64a><div class="${ssrRenderClass([v.pos ? "w-12 en-article-family" : "-ml-3", "shrink-0"])}" data-v-ff0bc64a>${ssrInterpolate(v.pos)}</div>`);
          if (!unref(settingStore).dictation || unref(showWordResult) || unref(showFullWord)) {
            _push(`<span data-v-ff0bc64a>${ssrInterpolate(v.cn)}</span>`);
          } else {
            _push(`<span data-v-ff0bc64a>${hideWordInTranslation(v.cn, __props.word.word) ?? ""}</span>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div><div${ssrRenderAttrs(mergeProps({ class: "other anim" }, ssrGetDirectiveProps(
          _ctx,
          _directive_opacity,
          ![unref(WordPracticeType).Listen, unref(WordPracticeType).Dictation, unref(WordPracticeType).Identify].includes(
            unref(settingStore).wordPracticeType
          ) || unref(showFullWord) || unref(showWordResult)
        )))} data-v-ff0bc64a><div class="line-white my-3" data-v-ff0bc64a></div>`);
        if (__props.word?.sentences?.length) {
          _push(`<div class="flex flex-col gap-3" data-v-ff0bc64a><!--[-->`);
          ssrRenderList(__props.word.sentences, (item) => {
            _push(`<div class="sentence" data-v-ff0bc64a><div class="flex gap-space" data-v-ff0bc64a>`);
            _push(ssrRenderComponent(SentenceHightLightWord, {
              class: "text-xl",
              text: item.c,
              word: __props.word.word,
              dictation: !(!unref(settingStore).dictation || unref(showFullWord) || unref(showWordResult))
            }, null, _parent));
            _push(ssrRenderComponent(VolumeIcon, {
              title: `发音`,
              simple: false,
              onClick: ($event) => unref(ttsPlayAudio)(item.c)
            }, null, _parent));
            _push(`</div><div${ssrRenderAttrs(mergeProps({ class: "text-base anim" }, ssrGetDirectiveProps(_ctx, _directive_opacity, unref(settingStore).translate || unref(showFullWord) || unref(showWordResult))))} data-v-ff0bc64a>${ssrInterpolate(item.cn)}</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.word?.phrases?.length) {
          _push(`<!--[--><div class="line-white my-3" data-v-ff0bc64a></div><div class="flex" data-v-ff0bc64a><div class="label" data-v-ff0bc64a>${ssrInterpolate(unref($t)("phrases"))}</div><div class="flex flex-col" data-v-ff0bc64a><!--[-->`);
          ssrRenderList(__props.word.phrases, (item) => {
            _push(`<div class="flex items-center gap-4" data-v-ff0bc64a>`);
            _push(ssrRenderComponent(SentenceHightLightWord, {
              class: "en",
              text: item.c,
              word: __props.word.word,
              dictation: !(!unref(settingStore).dictation || unref(showFullWord) || unref(showWordResult))
            }, null, _parent));
            _push(`<div${ssrRenderAttrs(mergeProps({ class: "cn anim" }, ssrGetDirectiveProps(_ctx, _directive_opacity, unref(settingStore).translate || unref(showFullWord) || unref(showWordResult))))} data-v-ff0bc64a>${ssrInterpolate(item.cn)}</div></div>`);
          });
          _push(`<!--]--></div></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(settingStore).translate || !unref(settingStore).dictation) {
          _push(`<!--[-->`);
          if (__props.word?.synos?.length) {
            _push(`<!--[--><div class="line-white my-3" data-v-ff0bc64a></div><div class="flex" data-v-ff0bc64a><div class="label" data-v-ff0bc64a>${ssrInterpolate(unref($t)("synonyms"))}</div><div class="flex flex-col gap-3" data-v-ff0bc64a><!--[-->`);
            ssrRenderList(__props.word.synos, (item) => {
              _push(`<div class="flex" data-v-ff0bc64a><div class="pos line-height-1.4rem!" data-v-ff0bc64a>${ssrInterpolate(item.pos)}</div><div data-v-ff0bc64a><div${ssrRenderAttrs(mergeProps({ class: "cn anim" }, ssrGetDirectiveProps(_ctx, _directive_opacity, unref(settingStore).translate || unref(showFullWord) || unref(showWordResult))))} data-v-ff0bc64a>${ssrInterpolate(item.cn)}</div><div${ssrRenderAttrs(mergeProps({ class: "anim" }, ssrGetDirectiveProps(_ctx, _directive_opacity, !unref(settingStore).dictation || unref(showFullWord) || unref(showWordResult))))} data-v-ff0bc64a><!--[-->`);
              ssrRenderList(item.ws, (i, j) => {
                _push(`<span class="en" data-v-ff0bc64a>${ssrInterpolate(i)} ${ssrInterpolate(j !== item.ws.length - 1 ? " / " : "")}</span>`);
              });
              _push(`<!--]--></div></div></div>`);
            });
            _push(`<!--]--></div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "anim" }, ssrGetDirectiveProps(_ctx, _directive_opacity, unref(settingStore).translate && !unref(settingStore).dictation || unref(showFullWord) || unref(showWordResult))))} data-v-ff0bc64a>`);
        if (__props.word?.etymology?.length) {
          _push(`<!--[--><div class="line-white my-3" data-v-ff0bc64a></div><div class="flex" data-v-ff0bc64a><div class="label" data-v-ff0bc64a>${ssrInterpolate(unref($t)("etymology"))}</div><div class="text-base" data-v-ff0bc64a><!--[-->`);
          ssrRenderList(__props.word.etymology, (item) => {
            _push(`<div class="mb-2" data-v-ff0bc64a><div class="" data-v-ff0bc64a>${ssrInterpolate(item.t)}</div><div class="" data-v-ff0bc64a>${ssrInterpolate(item.d)}</div></div>`);
          });
          _push(`<!--]--></div></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (__props.word?.relWords?.root && false) ;
        else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="cursor" style="${ssrRenderStyle({
          top: unref(cursor).top + "px",
          left: unref(cursor).left + "px",
          height: unref(settingStore).fontSize.wordForeignFontSize + "px"
        })}" data-v-ff0bc64a></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/word/TypeWord.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TypeWord = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-ff0bc64a"]]), { __name: "TypeWord" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GroupList",
  __ssrInlineRender: true,
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const store = useBaseStore();
    const isVisible = ref(false);
    const scrollContainer = ref(null);
    const itemRefs = ref([]);
    const getGroupWordCount = (groupIndex) => {
      const totalLength = store.sdict.length;
      const perDay = store.sdict.perDayStudyNumber;
      const totalGroups = store.groupLength;
      if (groupIndex === totalGroups && totalLength % perDay !== 0) {
        return totalLength % perDay;
      }
      return perDay;
    };
    watch(isVisible, async (newVal) => {
      if (newVal) {
        await nextTick();
        const currentIndex = store.currentGroup - 1;
        const targetItem = itemRefs.value[currentIndex];
        const container = scrollContainer.value;
        if (targetItem && container) {
          const itemTop = targetItem.offsetTop;
          const itemHeight = targetItem.offsetHeight;
          const containerHeight = container.clientHeight;
          container.scrollTo({
            top: itemTop - containerHeight / 2 + itemHeight / 2
          });
        }
      }
    });
    const setItemRef = (el, index) => {
      if (el) {
        itemRefs.value[index] = el;
      }
    };
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-999" }, _attrs))} data-v-bab7604e><div class="${ssrRenderClass([{
        "opacity-0 scale-95 pointer-events-none": !isVisible.value,
        "opacity-100 scale-100 pointer-events-auto": isVisible.value
      }, "pt-2 left-1/2 -transform-translate-x-1/2 absolute z-999 top-full transition-all duration-300"])}" data-v-bab7604e>`);
      _push(ssrRenderComponent(RadioGroup, {
        "model-value": unref(store).currentGroup
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-white" data-v-bab7604e${_scopeId}><div class="max-h-70 overflow-y-auto space-y-2" data-v-bab7604e${_scopeId}><!--[-->`);
            ssrRenderList(unref(store).groupLength, (value) => {
              _push2(`<div class="${ssrRenderClass([{
                "bg-card-active!": value === unref(store).currentGroup
              }, "break-keep flex bg-primary px-3 py-1 rounded-md hover:bg-card-active anim border border-solid border-item"])}" data-v-bab7604e${_scopeId}>`);
              _push2(ssrRenderComponent(Radio, {
                value,
                label: `第${value}组`
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm ml-2" data-v-bab7604e${_scopeId}>${ssrInterpolate(getGroupWordCount(value))}词</span></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-white" }, [
                createVNode("div", {
                  ref_key: "scrollContainer",
                  ref: scrollContainer,
                  class: "max-h-70 overflow-y-auto space-y-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(store).groupLength, (value) => {
                    return openBlock(), createBlock("div", {
                      ref_for: true,
                      ref: (el) => setItemRef(el, value - 1),
                      class: ["break-keep flex bg-primary px-3 py-1 rounded-md hover:bg-card-active anim border border-solid border-item", {
                        "bg-card-active!": value === unref(store).currentGroup
                      }],
                      onClick: ($event) => emit("click", value),
                      key: value
                    }, [
                      createVNode(Radio, {
                        value,
                        label: `第${value}组`
                      }, null, 8, ["value", "label"]),
                      createVNode("span", { class: "text-sm ml-2" }, toDisplayString(getGroupWordCount(value)) + "词", 1)
                    ], 10, ["onClick"]);
                  }), 128))
                ], 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="target" data-v-bab7604e>第${ssrInterpolate(unref(store).currentGroup)}组</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/word/GroupList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GroupList = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-bab7604e"]]), { __name: "GroupList" });
const groupSize = 7;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { isWordCollect, toggleWordCollect, isWordSimple, toggleWordSimple } = useWordOptions();
    const settingStore = useSettingStore();
    const runtimeStore = useRuntimeStore();
    const { toggleTheme } = useTheme();
    const router = useRouter();
    const route = useRoute();
    const store = useBaseStore();
    const statStore = usePracticeStore();
    const typingRef = ref();
    let showConflictNotice = ref(false);
    let allWrongWords = /* @__PURE__ */ new Set();
    let showStatDialog = ref(false);
    let loading = ref(false);
    let timer = ref(0);
    let taskWords = ref({
      new: [],
      review: [],
      write: [],
      shuffle: []
    });
    let data = ref({
      index: 0,
      words: [],
      wrongWords: [],
      excludeWords: [],
      isTypingWrongWord: false
    });
    provide("practiceData", data.value);
    provide("practiceTaskWords", taskWords.value);
    async function loadDict() {
      let dict = getDefaultDict();
      let dictId = route.params.id;
      if (dictId) {
        dict = store.word.bookList.find((v) => v.id === dictId);
        let r = await fetch(resourceWrap(DICT_LIST.WORD.ALL));
        let dict_list = await r.json();
        if (!dict) dict = dict_list.flat().find((v) => v.id === dictId);
        if (dict && dict.id) {
          if (!dict.custom) dict = await _getDictDataByUrl(dict);
          if (!dict.words.length) {
            router.push("/words");
            return Toast.warning("没有单词可学习！");
          }
          store.changeDict(dict);
          initData(getCurrentStudyWord(), true);
          loading.value = false;
        } else {
          router.push("/words");
        }
      } else {
        router.push("/words");
      }
    }
    watch(
      [() => store.load, () => loading.value],
      ([a, b]) => {
        if (a && b) loadDict();
      },
      { immediate: true }
    );
    watchOnce(
      () => data.value.words.length,
      (newVal, oldVal) => {
        if (!oldVal && newVal) {
          _nextTick(async () => {
            const Shepherd = await loadJsLib("Shepherd", LIB_JS_URL.SHEPHERD);
            const tour = new Shepherd.Tour(TourConfig);
            tour.on("cancel", () => {
              localStorage.setItem("tour-guide", "1");
            });
            tour.addStep({
              id: "step5",
              text: "这里可以练习拼写单词，只需要按下键盘上对应的按键即可，没有输入框！",
              attachTo: { element: "#word", on: "bottom" },
              buttons: [
                {
                  text: `下一步（5/${TourConfig.total}）`,
                  action: tour.next
                }
              ]
            });
            tour.addStep({
              id: "step6",
              text: "这里是文章练习",
              attachTo: { element: "#article", on: "top" },
              buttons: [
                {
                  text: `下一步（6/${TourConfig.total}）`,
                  action() {
                    tour.next();
                    router.push("/articles");
                  }
                }
              ]
            });
            const r = localStorage.getItem("tour-guide");
            if (settingStore.first && !r && !isMobile()) {
              tour.start();
            }
          }, 500);
        }
      }
    );
    useStartKeyboardEventListener();
    useDisableEventListener(() => loading.value);
    function initData(initVal, init = false) {
      let d = getPracticeWordCache();
      if (d && init) {
        taskWords.value = Object.assign(taskWords.value, d.taskWords);
        data.value = Object.assign(data.value, d.practiceData);
        statStore.$patch(d.statStoreData);
      } else {
        taskWords.value = Object.assign(taskWords.value, initVal);
        if (settingStore.wordPracticeMode === WordPracticeMode.Shuffle) {
          settingStore.wordPracticeType = WordPracticeType.Dictation;
          data.value.words = taskWords.value.shuffle;
          statStore.stage = WordPracticeStage.Shuffle;
          statStore.total = taskWords.value.shuffle.length;
          statStore.newWordNumber = 0;
          statStore.reviewWordNumber = 0;
          statStore.writeWordNumber = statStore.total;
        } else if (settingStore.wordPracticeMode === WordPracticeMode.Review) {
          if (taskWords.value.review.length) {
            data.value.words = taskWords.value.review;
            statStore.stage = WordPracticeStage.IdentifyReview;
          } else if (taskWords.value.write.length) {
            data.value.words = taskWords.value.write;
            statStore.stage = WordPracticeStage.IdentifyReviewAll;
          }
          statStore.total = taskWords.value.review.length + taskWords.value.write.length;
          statStore.newWordNumber = 0;
          statStore.reviewWordNumber = taskWords.value.review.length;
          statStore.writeWordNumber = taskWords.value.write.length;
        } else {
          if (taskWords.value.new.length === 0) {
            if (taskWords.value.review.length) {
              data.value.words = taskWords.value.review;
              if (settingStore.wordPracticeMode === WordPracticeMode.System) {
                statStore.stage = WordPracticeStage.IdentifyReview;
              } else if (settingStore.wordPracticeMode === WordPracticeMode.Free) {
                statStore.stage = WordPracticeModeStageMap[settingStore.wordPracticeMode][0];
              } else if (settingStore.wordPracticeMode === WordPracticeMode.IdentifyOnly) {
                statStore.stage = WordPracticeStage.IdentifyReview;
              } else if (settingStore.wordPracticeMode === WordPracticeMode.DictationOnly) {
                statStore.stage = WordPracticeStage.DictationReview;
              } else if (settingStore.wordPracticeMode === WordPracticeMode.ListenOnly) {
                statStore.stage = WordPracticeStage.ListenReview;
              }
            } else {
              if (taskWords.value.write.length) {
                data.value.words = taskWords.value.write;
                if (settingStore.wordPracticeMode === WordPracticeMode.System) {
                  statStore.stage = WordPracticeStage.IdentifyReviewAll;
                } else if (settingStore.wordPracticeMode === WordPracticeMode.Free) {
                  statStore.stage = WordPracticeModeStageMap[settingStore.wordPracticeMode][0];
                } else if (settingStore.wordPracticeMode === WordPracticeMode.IdentifyOnly) {
                  statStore.stage = WordPracticeStage.IdentifyReviewAll;
                } else if (settingStore.wordPracticeMode === WordPracticeMode.DictationOnly) {
                  statStore.stage = WordPracticeStage.DictationReviewAll;
                } else if (settingStore.wordPracticeMode === WordPracticeMode.ListenOnly) {
                  statStore.stage = WordPracticeStage.ListenReviewAll;
                }
              } else {
                Toast.warning("没有可学习的单词！");
                router.push("/words");
              }
            }
          } else {
            data.value.words = taskWords.value.new;
            statStore.stage = WordPracticeModeStageMap[settingStore.wordPracticeMode][0];
          }
          statStore.total = taskWords.value.review.length + taskWords.value.new.length + taskWords.value.write.length;
          statStore.newWordNumber = taskWords.value.new.length;
          statStore.reviewWordNumber = taskWords.value.review.length;
          statStore.writeWordNumber = taskWords.value.write.length;
        }
        data.value.index = 0;
        data.value.wrongWords = [];
        data.value.excludeWords = [];
        allWrongWords.clear();
        statStore.startDate = Date.now();
        statStore.inputWordNumber = 0;
        statStore.wrong = 0;
        statStore.spend = 0;
        data.value.isTypingWrongWord = false;
        watchStage(statStore.stage);
        watchPracticeType(settingStore.wordPracticeType);
      }
      clearInterval(timer.value);
      timer.value = setInterval();
    }
    const word = computed(() => {
      return data.value.words[data.value.index] ?? getDefaultWord();
    });
    const prevWord = computed(() => {
      return data.value.words?.[data.value.index - 1] ?? void 0;
    });
    const nextWord = computed(() => {
      return data.value.words?.[data.value.index + 1] ?? void 0;
    });
    function watchStage(n) {
      switch (n) {
        case WordPracticeStage.DictationNewWord:
        case WordPracticeStage.DictationReview:
        case WordPracticeStage.DictationReviewAll:
        case WordPracticeStage.Shuffle:
          settingStore.wordPracticeType = WordPracticeType.Dictation;
          break;
        case WordPracticeStage.ListenNewWord:
        case WordPracticeStage.ListenReview:
        case WordPracticeStage.ListenReviewAll:
          settingStore.wordPracticeType = WordPracticeType.Listen;
          break;
        case WordPracticeStage.FollowWriteNewWord:
        case WordPracticeStage.FollowWriteReview:
        case WordPracticeStage.FollowWriteReviewAll:
          settingStore.wordPracticeType = WordPracticeType.FollowWrite;
          break;
        case WordPracticeStage.IdentifyNewWord:
        case WordPracticeStage.IdentifyReview:
        case WordPracticeStage.IdentifyReviewAll:
          settingStore.wordPracticeType = WordPracticeType.Identify;
          break;
      }
    }
    function watchPracticeType(n) {
      if (settingStore.wordPracticeMode === WordPracticeMode.Free) return;
      switch (n) {
        case WordPracticeType.Spell:
        case WordPracticeType.Dictation:
          settingStore.dictation = true;
          settingStore.translate = true;
          break;
        case WordPracticeType.Listen:
          settingStore.dictation = true;
          settingStore.translate = false;
          break;
        case WordPracticeType.FollowWrite:
          settingStore.dictation = false;
          settingStore.translate = true;
          break;
        case WordPracticeType.Identify:
          settingStore.dictation = false;
          settingStore.translate = false;
          break;
      }
    }
    watch(
      () => statStore.stage,
      (n) => {
        watchStage(n);
      }
    );
    watch(
      () => settingStore.wordPracticeType,
      (n) => {
        watchPracticeType(n);
      }
    );
    function wordLoop() {
      if (settingStore.wordPracticeType === WordPracticeType.FollowWrite) {
        data.value.index++;
        if (data.value.index % groupSize === 0) {
          settingStore.wordPracticeType = WordPracticeType.Spell;
          data.value.index -= groupSize;
        }
      } else {
        data.value.index++;
        if (data.value.index % groupSize === 0) {
          settingStore.wordPracticeType = WordPracticeType.FollowWrite;
        }
      }
    }
    let toastInstance = null;
    function nextStage(originList, log = "", toast = false) {
      let list = originList.filter((v) => !data.value.excludeWords.includes(v.word));
      console.log(log);
      statStore.stage = statStore.nextStage;
      if (list.length) {
        if (toast) {
          if (toastInstance) toastInstance.close();
          toastInstance = Toast.info("输入完成后按空格键切换下一个", { duration: 5e3 });
        }
        data.value.words = list;
        data.value.index = 0;
      } else {
        console.log(log + ":无单词略过");
        next(false);
      }
    }
    async function next(isTyping = true) {
      debugger;
      const complete = () => {
        console.log("全完学完了");
        showStatDialog.value = true;
        clearInterval(timer.value);
        setTimeout(() => setPracticeWordCache(null), 300);
      };
      if (isTyping) statStore.inputWordNumber++;
      if (settingStore.wordPracticeMode === WordPracticeMode.Free) {
        if (data.value.index === data.value.words.length - 1) {
          data.value.wrongWords = data.value.wrongWords.filter((v) => !data.value.excludeWords.includes(v.word));
          if (data.value.wrongWords.length) {
            data.value.isTypingWrongWord = true;
            settingStore.wordPracticeType = WordPracticeType.FollowWrite;
            console.log("当前学完了，但还有错词");
            data.value.words = shuffle(cloneDeep(data.value.wrongWords));
            data.value.index = 0;
            data.value.wrongWords = [];
          } else {
            data.value.isTypingWrongWord = false;
            complete();
          }
        } else {
          data.value.index++;
        }
      } else {
        if (data.value.index === data.value.words.length - 1) {
          if ((statStore.stage === WordPracticeStage.FollowWriteNewWord || data.value.isTypingWrongWord) && true) {
            if (settingStore.wordPracticeType !== WordPracticeType.Spell) {
              data.value.index = Math.floor(data.value.index / groupSize) * groupSize;
              emitter.emit(EventKey.resetWord);
              settingStore.wordPracticeType = WordPracticeType.Spell;
              if (isWordSimple(word.value)) next(false);
              return;
            }
          }
          data.value.wrongWords = data.value.wrongWords.filter((v) => !data.value.excludeWords.includes(v.word));
          if (data.value.wrongWords.length) {
            data.value.isTypingWrongWord = true;
            settingStore.wordPracticeType = WordPracticeType.FollowWrite;
            console.log("当前学完了，但还有错词");
            data.value.words = shuffle(cloneDeep(data.value.wrongWords));
            data.value.index = 0;
            data.value.wrongWords = [];
          } else {
            data.value.isTypingWrongWord = false;
            console.log("当前学完了，没错词", statStore.total, statStore.stage, data.value.index);
            if (settingStore.wordPracticeMode === WordPracticeMode.System) {
              if (statStore.stage === WordPracticeStage.FollowWriteNewWord) {
                nextStage(shuffle(taskWords.value.new), "开始听写新词", true);
              } else if (statStore.stage === WordPracticeStage.ListenNewWord) {
                nextStage(shuffle(taskWords.value.new), "开始默写新词");
              } else if (statStore.stage === WordPracticeStage.DictationNewWord) {
                nextStage(taskWords.value.review, "开始自测昨日");
              } else if (statStore.stage === WordPracticeStage.IdentifyReview) {
                nextStage(shuffle(taskWords.value.review), "开始听写上次", true);
              } else if (statStore.stage === WordPracticeStage.ListenReview) {
                nextStage(shuffle(taskWords.value.review), "开始默写上次");
              } else if (statStore.stage === WordPracticeStage.DictationReview) {
                nextStage(taskWords.value.write, "开始自测之前");
              } else if (statStore.stage === WordPracticeStage.IdentifyReviewAll) {
                nextStage(shuffle(taskWords.value.write), "开始听写之前", true);
              } else if (statStore.stage === WordPracticeStage.ListenReviewAll) {
                nextStage(shuffle(taskWords.value.write), "开始默写之前");
              } else if (statStore.stage === WordPracticeStage.DictationReviewAll) {
                complete();
              }
            } else if (settingStore.wordPracticeMode === WordPracticeMode.ListenOnly) {
              if (statStore.stage === WordPracticeStage.ListenNewWord) {
                nextStage(taskWords.value.review, "开始听写昨日", true);
              } else if (statStore.stage === WordPracticeStage.ListenReview) {
                nextStage(taskWords.value.write, "开始听写之前");
              } else if (statStore.stage === WordPracticeStage.ListenReviewAll) complete();
            } else if (settingStore.wordPracticeMode === WordPracticeMode.DictationOnly) {
              if (statStore.stage === WordPracticeStage.DictationNewWord) {
                nextStage(taskWords.value.review, "开始默写昨日", true);
              } else if (statStore.stage === WordPracticeStage.DictationReview) {
                nextStage(taskWords.value.write, "开始默写之前");
              } else if (statStore.stage === WordPracticeStage.DictationReviewAll) complete();
            } else if (settingStore.wordPracticeMode === WordPracticeMode.IdentifyOnly) {
              if (statStore.stage === WordPracticeStage.IdentifyNewWord) {
                nextStage(taskWords.value.review, "开始自测昨日");
              } else if (statStore.stage === WordPracticeStage.IdentifyReview) {
                nextStage(taskWords.value.write, "开始自测之前");
              } else if (statStore.stage === WordPracticeStage.IdentifyReviewAll) complete();
            } else if (settingStore.wordPracticeMode === WordPracticeMode.Shuffle) {
              if (statStore.stage === WordPracticeStage.Shuffle) complete();
            } else if (settingStore.wordPracticeMode === WordPracticeMode.Review) {
              if (statStore.stage === WordPracticeStage.IdentifyReview) {
                nextStage(shuffle(taskWords.value.review), "开始听写昨日", true);
              } else if (statStore.stage === WordPracticeStage.ListenReview) {
                nextStage(shuffle(taskWords.value.review), "开始默写昨日");
              } else if (statStore.stage === WordPracticeStage.DictationReview) {
                nextStage(taskWords.value.write, "开始自测之前");
              } else if (statStore.stage === WordPracticeStage.IdentifyReviewAll) {
                nextStage(shuffle(taskWords.value.write), "开始听写之前", true);
              } else if (statStore.stage === WordPracticeStage.ListenReviewAll) {
                nextStage(shuffle(taskWords.value.write), "开始默写之前");
              } else if (statStore.stage === WordPracticeStage.DictationReviewAll) complete();
            }
          }
        } else {
          if (statStore.stage === WordPracticeStage.FollowWriteNewWord) {
            wordLoop();
          } else {
            if (data.value.isTypingWrongWord) wordLoop();
            else data.value.index++;
          }
        }
      }
      if (isWordSimple(word.value)) next(false);
    }
    function skipStep() {
      data.value.index = data.value.words.length - 1;
      data.value.wrongWords = [];
      next(false);
    }
    function onWordKnow() {
      let rIndex = data.value.excludeWords.findIndex((v) => v === word.value.word);
      if (rIndex < 0) {
        data.value.excludeWords.push(word.value.word);
      }
    }
    function onTypeWrong() {
      let temp = word.value.word.toLowerCase();
      if (!allWrongWords.has(word.value.word.toLowerCase())) {
        allWrongWords.add(word.value.word.toLowerCase());
        statStore.wrong++;
      }
      if (!store.wrong.words.find((v) => v.word.toLowerCase() === temp)) {
        store.wrong.words.push(word.value);
        store.wrong.length = store.wrong.words.length;
      }
      if (!data.value.wrongWords.find((v) => v.word.toLowerCase() === temp)) {
        data.value.wrongWords.push(word.value);
      }
      savePracticeData();
    }
    function savePracticeData() {
      setPracticeWordCache({
        taskWords: taskWords.value,
        practiceData: data.value,
        statStoreData: statStore.$state
      });
    }
    watch(() => data.value.index, savePracticeData);
    function repeat() {
      console.log("重学一遍");
      setPracticeWordCache(null);
      let temp = cloneDeep(taskWords.value);
      let ignoreList = [store.allIgnoreWords, store.knownWords][settingStore.ignoreSimpleWord ? 0 : 1];
      if (settingStore.wordPracticeMode === WordPracticeMode.Shuffle) {
        temp.shuffle = shuffle(temp.shuffle.filter((v) => !ignoreList.includes(v.word)));
      } else {
        store.sdict.lastLearnIndex = store.sdict.lastLearnIndex - statStore.newWordNumber;
        temp.new = temp.new.filter((v) => !ignoreList.includes(v.word));
        temp.review = temp.review.filter((v) => !ignoreList.includes(v.word));
        temp.write = temp.write.filter((v) => !ignoreList.includes(v.word));
      }
      emitter.emit(EventKey.resetWord);
      initData(temp);
    }
    function prev() {
      if (data.value.index === 0) {
        Toast.warning("已经是第一个了~");
      } else {
        data.value.index--;
      }
    }
    function skip(e) {
      next(false);
    }
    function show(e) {
      if (![WordPracticeType.FollowWrite].includes(settingStore.wordPracticeType)) onTypeWrong();
      typingRef.value.showWord();
    }
    function collect(e) {
      toggleWordCollect(word.value);
    }
    function play() {
      typingRef.value.play();
    }
    function toggleWordSimpleWrapper() {
      if (!isWordSimple(word.value)) {
        setTimeout(() => next(false));
      }
      let rIndex = data.value.excludeWords.findIndex((v) => v === word.value.word);
      if (rIndex > -1) {
        data.value.excludeWords.splice(rIndex, 1);
      } else {
        data.value.excludeWords.push(word.value.word);
      }
      toggleWordSimple(word.value);
    }
    function toggleTranslate() {
      settingStore.translate = !settingStore.translate;
    }
    function toggleDictation() {
      settingStore.dictation = !settingStore.dictation;
    }
    function toggleConciseMode() {
      settingStore.showToolbar = !settingStore.showToolbar;
      settingStore.showPanel = settingStore.showToolbar;
    }
    function togglePanel() {
      settingStore.showPanel = !settingStore.showPanel;
    }
    async function continueStudy() {
      setPracticeWordCache(null);
      let temp = cloneDeep(taskWords.value);
      let ignoreList = [store.allIgnoreWords, store.knownWords][settingStore.ignoreSimpleWord ? 0 : 1];
      if (settingStore.wordPracticeMode === WordPracticeMode.Shuffle) {
        temp.shuffle = shuffle(store.sdict.words.filter((v) => !ignoreList.includes(v.word))).slice(
          0,
          runtimeStore.routeData.total ?? temp.shuffle.length
        );
        if (showStatDialog.value) showStatDialog.value = false;
      } else {
        if (!showStatDialog.value) {
          console.log("没学完，强行跳过");
          store.sdict.lastLearnIndex = store.sdict.lastLearnIndex + statStore.newWordNumber;
          const ignoreCount = ignoreList.filter((word2) => store.sdict.words.some((w) => w.word.toLowerCase() === word2)).length;
          if (store.sdict.lastLearnIndex + ignoreCount >= store.sdict.length) {
            store.sdict.complete = true;
            store.sdict.lastLearnIndex = store.sdict.length;
          }
        } else {
          console.log("学完了，正常下一组");
          showStatDialog.value = false;
        }
        temp = getCurrentStudyWord();
      }
      emitter.emit(EventKey.resetWord);
      initData(temp);
      if (AppEnv.CAN_REQUEST) {
        let res = await setUserDictProp(null, { ...store.sdict, type: "word" });
        if (!res.success) {
          Toast.error(res.msg);
        }
      }
    }
    async function jumpToGroup(group) {
      setPracticeWordCache(null);
      console.log("没学完，强行跳过", group);
      store.sdict.lastLearnIndex = (group - 1) * store.sdict.perDayStudyNumber;
      emitter.emit(EventKey.resetWord);
      initData(getCurrentStudyWord());
      if (AppEnv.CAN_REQUEST) {
        let res = await setUserDictProp(null, { ...store.sdict, type: "word" });
        if (!res.success) {
          Toast.error(res.msg);
        }
      }
    }
    function randomWrite() {
      console.log("随机默写");
      data.value.words = shuffle(data.value.words);
      data.value.index = 0;
      settingStore.dictation = true;
    }
    useEvents([
      [EventKey.repeatStudy, repeat],
      [EventKey.continueStudy, continueStudy],
      [ShortcutKey.ShowWord, show],
      [ShortcutKey.Previous, prev],
      [ShortcutKey.Next, skip],
      [ShortcutKey.ToggleCollect, collect],
      [ShortcutKey.ToggleSimple, toggleWordSimpleWrapper],
      [ShortcutKey.PlayWordPronunciation, play],
      [ShortcutKey.RepeatChapter, repeat],
      [ShortcutKey.NextChapter, continueStudy],
      [ShortcutKey.ToggleShowTranslate, toggleTranslate],
      [ShortcutKey.ToggleDictation, toggleDictation],
      [ShortcutKey.ToggleTheme, toggleTheme],
      [ShortcutKey.ToggleConciseMode, toggleConciseMode],
      [ShortcutKey.TogglePanel, togglePanel],
      [ShortcutKey.RandomWrite, randomWrite]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentArrowLeft16Regular = __unplugin_components_0$2;
      const _component_IconFluentArrowRight16Regular = __unplugin_components_1$1;
      const _component_IconFluentArrowShuffle16Regular = __unplugin_components_2$1;
      const _directive_loading = resolveDirective("loading");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PracticeLayout, mergeProps({ panelLeft: "var(--word-panel-margin-left)" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))), {
        practice: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="practice-word mb-50" data-v-b633895f${_scopeId}>`);
            if (unref(settingStore).showNearWord) {
              _push2(`<div class="fixed z-1 top-4 w-full" style="${ssrRenderStyle({ "left": "calc(50vw + var(--aside-width) / 2 - var(--toolbar-width) / 2)", "width": "var(--toolbar-width)" })}" data-v-b633895f${_scopeId}>`);
              if (prevWord.value) {
                _push2(`<div class="center gap-2 cursor-pointer float-left" data-v-b633895f${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentArrowLeft16Regular, {
                  class: "arrow",
                  width: "22"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(Tooltip, {
                  title: `上一个(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).Previous]})`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="word" data-v-b633895f${_scopeId2}>${ssrInterpolate(prevWord.value.word)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "word" }, toDisplayString(prevWord.value.word), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (nextWord.value) {
                _push2(`<div class="center gap-2 cursor-pointer float-right mr-3" data-v-b633895f${_scopeId}>`);
                _push2(ssrRenderComponent(Tooltip, {
                  title: `下一个(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).Next]})`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass([unref(settingStore).dictation && "word-shadow", "word"])}" data-v-b633895f${_scopeId2}>${ssrInterpolate(nextWord.value.word)}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ["word", unref(settingStore).dictation && "word-shadow"]
                        }, toDisplayString(nextWord.value.word), 3)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_IconFluentArrowRight16Regular, {
                  class: "arrow",
                  width: "22"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(TypeWord, {
              ref_key: "typingRef",
              ref: typingRef,
              word: word.value,
              onWrong: onTypeWrong,
              onComplete: next,
              onKnow: onWordKnow
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "practice-word mb-50" }, [
                unref(settingStore).showNearWord ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fixed z-1 top-4 w-full",
                  style: { "left": "calc(50vw + var(--aside-width) / 2 - var(--toolbar-width) / 2)", "width": "var(--toolbar-width)" }
                }, [
                  prevWord.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "center gap-2 cursor-pointer float-left",
                    onClick: prev
                  }, [
                    createVNode(_component_IconFluentArrowLeft16Regular, {
                      class: "arrow",
                      width: "22"
                    }),
                    createVNode(Tooltip, {
                      title: `上一个(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).Previous]})`
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "word" }, toDisplayString(prevWord.value.word), 1)
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ])) : createCommentVNode("", true),
                  nextWord.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "center gap-2 cursor-pointer float-right mr-3",
                    onClick: ($event) => next(false)
                  }, [
                    createVNode(Tooltip, {
                      title: `下一个(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).Next]})`
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: ["word", unref(settingStore).dictation && "word-shadow"]
                        }, toDisplayString(nextWord.value.word), 3)
                      ]),
                      _: 1
                    }, 8, ["title"]),
                    createVNode(_component_IconFluentArrowRight16Regular, {
                      class: "arrow",
                      width: "22"
                    })
                  ], 8, ["onClick"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createVNode(TypeWord, {
                  ref_key: "typingRef",
                  ref: typingRef,
                  word: word.value,
                  onWrong: onTypeWrong,
                  onComplete: next,
                  onKnow: onWordKnow
                }, null, 8, ["word"])
              ])
            ];
          }
        }),
        panel: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Panel, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="center gap-1" data-v-b633895f${_scopeId2}><span data-v-b633895f${_scopeId2}>${ssrInterpolate(unref(store).sdict.name)}</span>`);
                  if (unref(taskWords).new.length && unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Shuffle) {
                    _push3(ssrRenderComponent(GroupList, { onClick: jumpToGroup }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(taskWords).new.length && ![unref(WordPracticeMode).Review, unref(WordPracticeMode).Shuffle].includes(unref(settingStore).wordPracticeMode)) {
                    _push3(ssrRenderComponent(BaseIcon, {
                      onClick: continueStudy,
                      title: `下一组(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).NextChapter]})`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_IconFluentArrowRight16Regular, {
                            class: "arrow",
                            width: "22"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_IconFluentArrowRight16Regular, {
                              class: "arrow",
                              width: "22"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(BaseIcon, {
                    onClick: randomWrite,
                    title: `随机默写(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).RandomWrite]})`
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconFluentArrowShuffle16Regular, {
                          class: "arrow",
                          width: "22"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_IconFluentArrowShuffle16Regular, {
                            class: "arrow",
                            width: "22"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "center gap-1" }, [
                      createVNode("span", null, toDisplayString(unref(store).sdict.name), 1),
                      unref(taskWords).new.length && unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Shuffle ? (openBlock(), createBlock(GroupList, {
                        key: 0,
                        onClick: jumpToGroup
                      })) : createCommentVNode("", true),
                      unref(taskWords).new.length && ![unref(WordPracticeMode).Review, unref(WordPracticeMode).Shuffle].includes(unref(settingStore).wordPracticeMode) ? (openBlock(), createBlock(BaseIcon, {
                        key: 1,
                        onClick: continueStudy,
                        title: `下一组(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).NextChapter]})`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFluentArrowRight16Regular, {
                            class: "arrow",
                            width: "22"
                          })
                        ]),
                        _: 1
                      }, 8, ["title"])) : createCommentVNode("", true),
                      createVNode(BaseIcon, {
                        onClick: randomWrite,
                        title: `随机默写(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).RandomWrite]})`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconFluentArrowShuffle16Regular, {
                            class: "arrow",
                            width: "22"
                          })
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="panel-page-item pl-4" data-v-b633895f${_scopeId2}>`);
                  if (unref(data).words.length) {
                    _push3(ssrRenderComponent(WordList, {
                      "is-active": unref(settingStore).showPanel,
                      static: false,
                      "show-word": !unref(settingStore).dictation,
                      "show-translate": unref(settingStore).translate,
                      list: unref(data).words,
                      activeIndex: unref(data).index,
                      onClick: (val) => unref(data).index = val.index
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(Empty, null, null, _parent3, _scopeId2));
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "panel-page-item pl-4" }, [
                      unref(data).words.length ? (openBlock(), createBlock(WordList, {
                        key: 0,
                        "is-active": unref(settingStore).showPanel,
                        static: false,
                        "show-word": !unref(settingStore).dictation,
                        "show-translate": unref(settingStore).translate,
                        list: unref(data).words,
                        activeIndex: unref(data).index,
                        onClick: (val) => unref(data).index = val.index
                      }, null, 8, ["is-active", "show-word", "show-translate", "list", "activeIndex", "onClick"])) : (openBlock(), createBlock(Empty, { key: 1 }))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Panel, null, {
                title: withCtx(() => [
                  createVNode("div", { class: "center gap-1" }, [
                    createVNode("span", null, toDisplayString(unref(store).sdict.name), 1),
                    unref(taskWords).new.length && unref(settingStore).wordPracticeMode !== unref(WordPracticeMode).Shuffle ? (openBlock(), createBlock(GroupList, {
                      key: 0,
                      onClick: jumpToGroup
                    })) : createCommentVNode("", true),
                    unref(taskWords).new.length && ![unref(WordPracticeMode).Review, unref(WordPracticeMode).Shuffle].includes(unref(settingStore).wordPracticeMode) ? (openBlock(), createBlock(BaseIcon, {
                      key: 1,
                      onClick: continueStudy,
                      title: `下一组(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).NextChapter]})`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFluentArrowRight16Regular, {
                          class: "arrow",
                          width: "22"
                        })
                      ]),
                      _: 1
                    }, 8, ["title"])) : createCommentVNode("", true),
                    createVNode(BaseIcon, {
                      onClick: randomWrite,
                      title: `随机默写(${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).RandomWrite]})`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFluentArrowShuffle16Regular, {
                          class: "arrow",
                          width: "22"
                        })
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "panel-page-item pl-4" }, [
                    unref(data).words.length ? (openBlock(), createBlock(WordList, {
                      key: 0,
                      "is-active": unref(settingStore).showPanel,
                      static: false,
                      "show-word": !unref(settingStore).dictation,
                      "show-translate": unref(settingStore).translate,
                      list: unref(data).words,
                      activeIndex: unref(data).index,
                      onClick: (val) => unref(data).index = val.index
                    }, null, 8, ["is-active", "show-word", "show-translate", "list", "activeIndex", "onClick"])) : (openBlock(), createBlock(Empty, { key: 1 }))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Footer, {
              "is-simple": unref(isWordSimple)(word.value),
              onToggleSimple: toggleWordSimpleWrapper,
              "is-collect": unref(isWordCollect)(word.value),
              onToggleCollect: ($event) => unref(toggleWordCollect)(word.value),
              onSkip: ($event) => next(false),
              onSkipStep: skipStep
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Footer, {
                "is-simple": unref(isWordSimple)(word.value),
                onToggleSimple: toggleWordSimpleWrapper,
                "is-collect": unref(isWordCollect)(word.value),
                onToggleCollect: ($event) => unref(toggleWordCollect)(word.value),
                onSkip: ($event) => next(false),
                onSkipStep: skipStep
              }, null, 8, ["is-simple", "is-collect", "onToggleCollect", "onSkip"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Statistics, {
        modelValue: unref(showStatDialog),
        "onUpdate:modelValue": ($event) => isRef(showStatDialog) ? showStatDialog.value = $event : showStatDialog = $event
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(words)/practice-words/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b633895f"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-BEuX4_TN.js.map
