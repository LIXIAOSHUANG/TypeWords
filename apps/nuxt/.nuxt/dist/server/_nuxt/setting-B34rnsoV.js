import { _ as __unplugin_components_0$1 } from "./person20-regular-CLEO4hFD.js";
import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, unref, useSSRContext, ref, computed, watch, nextTick, withCtx, createTextVNode, toDisplayString, isRef, createVNode, createBlock, createCommentVNode, Fragment, renderList, withModifiers } from "vue";
import { _ as __unplugin_components_0, a as __unplugin_components_1 } from "./text-underline-double20-regular-Urqfz4U4.js";
import { _ as __unplugin_components_2 } from "./settings20-regular-fog7odRI.js";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { b as useSettingStore, a as useRuntimeStore, c as useBaseStore, d as cloneDeep, T as Toast, s as sleep, l as loadJsLib, e as checkAndUpgradeSaveSetting, f as checkAndUpgradeSaveDict } from "./BaseIcon-Cnj57dgy.js";
import "./eventBus-C4Xc_Jqv.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { O as Origin, A as APP_NAME, a as APP_VERSION, D as DefaultShortcutKeyMap, L as LIB_JS_URL, b as LOCAL_FILE_KEY } from "./env-CUoXYOyW.js";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { set } from "idb-keyval";
import { u as useExport } from "./export-JdQPRQb6.js";
import { M as MigrateDialog } from "./MigrateDialog-DTKAmkmx.js";
import { h as _export_sfc, u as useRoute, a as useSeoMeta, i as useRuntimeConfig } from "../server.mjs";
import { A as About } from "./About-CeikHbbF.js";
import { C as CommonSetting, W as WordSetting, A as ArticleSetting } from "./WordSetting-BBzklAbh.js";
import { P as PRACTICE_WORD_CACHE, a as PRACTICE_ARTICLE_CACHE } from "./cache-C4S9Fl6v.js";
import "pinia";
import "axios";
import "vue-router";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "mitt";
import "@floating-ui/dom";
import "file-saver";
import "./interval-CYUoNYlE.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
import "./ChannelIcons-BDL8HMec.js";
import "./practice-DjPnwpm9.js";
import "./user-BLvskJR1.js";
import "./Progress-C93deg99.js";
import "./WeChat-CaY8PzZX.js";
import "./Dialog-BoKDmA_Y.js";
import "./wechat-CXtsDFCA.js";
import "./sound-fV5MruVn.js";
import "./Switch-BoRsOuOV.js";
import "./Textarea-Ca12-GD2.js";
import "./chevron-left20-filled-B_9PTvDy.js";
import "./VolumeIcon--ng6Uza7.js";
import "./volume-low-D-Q_rQNL.js";
import "./Slider-ibM1Ch1E.js";
import "./Radio-WTKpkBn7.js";
import "./InputNumber-CwEqYfu9.js";
const _hoisted_1$2 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M6.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6.75 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M9 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM9 13.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v8.5A2.75 2.75 0 0 1 14.25 17h-8.5A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3M4 5.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 16 14.25v-8.5A1.75 1.75 0 0 0 14.25 4h-8.5A1.75 1.75 0 0 0 4 5.75"
    }, null, -1)
  ])]);
}
const __unplugin_components_5 = markRaw({ name: "fluent-text-bullet-list-square20-regular", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m6.502-4.495a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m3.753-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m-9.753.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505M7.75 8.752a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m2.252.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m3.757-.753a.752.752 0 1 1-1.504 0a.752.752 0 0 1 1.504 0M8.503 7.005a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v8a1.5 1.5 0 0 1-1.5 1.5H11a1 1 0 1 1-2 0H3.5A1.5 1.5 0 0 1 2 12.5zM3.5 13h13a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5M2 16.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5"
    }, null, -1)
  ])]);
}
const __unplugin_components_4 = markRaw({ name: "fluent-keyboard-layout-float20-regular", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M4 5c0-1.007.875-1.755 1.904-2.223C6.978 2.289 8.427 2 10 2s3.022.289 4.096.777C15.125 3.245 16 3.993 16 5v4.041a3 3 0 0 0-1 0V6.698a5 5 0 0 1-.904.525C13.022 7.711 11.573 8 10 8s-3.022-.289-4.096-.777A5 5 0 0 1 5 6.698V15c0 .374.356.875 1.318 1.313c.916.416 2.218.687 3.682.687q.533 0 1.031-.046c.047.334.146.663.3.975Q10.686 18 10 18c-1.573 0-3.022-.289-4.096-.777C4.875 16.755 4 16.007 4 15zm1 0c0 .374.356.875 1.318 1.313C7.234 6.729 8.536 7 10 7s2.766-.27 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313C12.766 3.271 11.464 3 10 3s-2.766.27-3.682.687C5.356 4.125 5 4.627 5 5m12.5 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"
    }, null, -1)
  ])]);
}
const __unplugin_components_3 = markRaw({ name: "fluent-database-person20-regular", render });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Log",
  __ssrInlineRender: true,
  setup(__props) {
    let logList = [
      {
        date: "2026/02/02",
        content: "修改项目架构；添加例句发音功能"
      },
      {
        date: "2026/01/19",
        content: "文章练习界面添加自动滚动; 修复练习界面，打开设置弹窗事件冲突"
      },
      {
        date: "2026/01/16",
        content: "用 Nuxt 重构"
      },
      {
        date: "2026/01/06",
        content: "优化书籍详情页面"
      },
      {
        date: "2025/12/30",
        content: "移除“继续默写”选项"
      },
      {
        date: "2025/12/29",
        content: "单词练习界面，底部工具栏新增音频设置按钮"
      },
      {
        date: "2025/12/27",
        content: "优化进度条展示，现可展示当前阶段、所有阶段"
      },
      {
        date: "2025/12/23",
        content: "新增复习、自测、默写、听写模式"
      },
      {
        date: "2025/12/20",
        content: "新增资源分享页面"
      },
      {
        date: "2025/12/17",
        content: "新增帮助页面"
      },
      {
        date: "2025/12/16",
        content: "修复弹框内边距太小；单词、文章、通用设置在设置页面、练习界面均可进行设置"
      },
      {
        date: "2025/12/15",
        content: "修复在黑暗模式下，翻译颜色不正确；支持中文符号输入"
      },
      {
        date: "2025/12/11",
        content: "修复音标显示错误问题，优化反馈页面"
      },
      {
        date: "2025/12/10",
        content: "新增选项：复习比(单词练习时，复习词与新词的比例)"
      },
      {
        date: "2025/12/5",
        content: "解决练习界面无法复制、全选的问题"
      },
      {
        date: "2025/12/3",
        content: "单词、文章设置修改为弹框，更方便"
      },
      {
        date: "2025/12/3",
        content: "录入新概念（三、四）部分音频，优化文章相关功能"
      },
      {
        date: "2025/12/2",
        content: "完成新概念（一）音频，优化文章管理页面"
      },
      {
        date: "2025/11/30",
        content: "文章里的单词可点击播放"
      },
      {
        date: "2025/11/29",
        content: "修改 Slider 组件显示bug，新增 IE 浏览器检测提示"
      },
      {
        date: "2025/11/28",
        content: "新增引导框、 新增词典测试模式（由大佬hebeihang 开发）"
      },
      {
        date: "2025/11/25",
        content: "文章练习新增人名忽略功能（新概念一已全部适配），上传了新概念（一）1-18 音频"
      },
      {
        date: "2025/11/23",
        content: "优化练习完成结算界面，新增分享功能"
      },
      {
        date: "2025/11/22",
        content: "适配移动端"
      },
      {
        date: "2025/11/16",
        content: "自测单词时，不认识单词可以直接输入，自动标识为错误单词，无需按2"
      },
      {
        date: "2025/11/15",
        content: "练习单词时，底部工具栏新增“跳到下一阶段”按钮"
      },
      {
        date: "2025/11/14",
        content: "新增文章练习时可跳过空格：如果在单词的最后一位上，不按空格直接输入下一个字母的话，自动跳下一个单词，按空格也自动跳下一个单词"
      },
      {
        date: "2025/11/13",
        content: "新增文章练习时“输入时忽略符号/数字”选项"
      },
      {
        date: "2025/11/6",
        content: "新增随机复习功能"
      },
      {
        date: "2025/10/30",
        content: "集成PWA基础配置，支持用户以类App形式打开项目"
      },
      {
        date: "2025/10/26",
        content: "进一步完善单词练习，解决复习数量太多的问题"
      },
      {
        date: "2025/10/8",
        content: "文章支持自动播放下一篇"
      },
      {
        date: "2025/9/14",
        content: "完善文章编辑、导入、导出等功能"
      },
      {
        date: "2025/8/10",
        content: "2.0版本发布，全新UI，全新逻辑，新增短语、例句、近义词等功能"
      },
      {
        date: "2025/7/19",
        content: "1.0版本发布"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ba179447><!--[-->`);
      ssrRenderList(unref(logList), (item) => {
        _push(`<div class="log-item" data-v-ba179447><div class="mb-2" data-v-ba179447><div data-v-ba179447><div data-v-ba179447>日期：${ssrInterpolate(item.date)}</div><div data-v-ba179447>内容：${ssrInterpolate(item.content)}</div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/Log.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Log = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-ba179447"]]), { __name: "Log" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting",
  __ssrInlineRender: true,
  emits: ["toggleDisabledDialogEscKey"],
  setup(__props, { emit: __emit }) {
    let route = useRoute();
    let title = APP_NAME + " 设置";
    useSeoMeta({
      title,
      description: title,
      ogTitle: title,
      ogDescription: title,
      ogUrl: Origin + route.fullPath,
      twitterTitle: title,
      twitterDescription: title
    });
    const emit = __emit;
    const tabIndex = ref(0);
    const settingStore = useSettingStore();
    const runtimeStore = useRuntimeStore();
    const store = useBaseStore();
    const config = useRuntimeConfig();
    const gitLastCommitHash = ref(config?.public?.latestCommitHash);
    let editShortcutKey = ref("");
    const disabledDefaultKeyboardEvent = computed(() => {
      return editShortcutKey.value && tabIndex.value === 3;
    });
    watch(
      () => disabledDefaultKeyboardEvent.value,
      (v) => {
        emit("toggleDisabledDialogEscKey", !!v);
      }
    );
    watch(
      () => editShortcutKey.value,
      (newVal) => {
        if (newVal) {
          nextTick(() => {
            focusShortcutInput();
          });
        }
      }
    );
    function handleInputBlur() {
      editShortcutKey.value = "";
    }
    function focusShortcutInput() {
      const inputElements = (void 0).querySelectorAll(".set-key input");
      if (inputElements && inputElements.length > 0) {
        const inputElement = inputElements[0];
        inputElement.focus();
      }
    }
    function getShortcutKeyName(key) {
      const shortcutKeyNameMap = {
        ShowWord: "显示单词",
        EditArticle: "编辑文章",
        Next: "下一个",
        Previous: "上一个",
        ToggleSimple: "切换已掌握状态",
        ToggleCollect: "切换收藏状态",
        NextChapter: "下一组",
        PreviousChapter: "上一组",
        RepeatChapter: "重复本组",
        DictationChapter: "默写本组",
        PlayWordPronunciation: "播放发音",
        ToggleShowTranslate: "切换显示翻译",
        ToggleDictation: "切换默写模式",
        ToggleTheme: "切换主题",
        ToggleConciseMode: "切换简洁模式",
        TogglePanel: "切换面板",
        RandomWrite: "随机默写",
        NextRandomWrite: "继续随机默写",
        KnowWord: "认识单词",
        UnknownWord: "不认识单词"
      };
      return shortcutKeyNameMap[key] || key;
    }
    function resetShortcutKeyMap() {
      editShortcutKey.value = "";
      settingStore.shortcutKeyMap = cloneDeep(DefaultShortcutKeyMap);
      Toast.success("恢复成功");
    }
    let importLoading = ref(false);
    const { loading: exportLoading, exportData } = useExport();
    function importJson(str, notice = true) {
      importLoading.value = true;
      let obj = {
        version: -1,
        val: {
          setting: {},
          dict: {},
          [PRACTICE_WORD_CACHE.key]: {},
          [PRACTICE_ARTICLE_CACHE.key]: {},
          [APP_VERSION.key]: {}
        }
      };
      try {
        obj = JSON.parse(str);
        let data = obj.val;
        let settingState = checkAndUpgradeSaveSetting(data.setting);
        settingState.load = true;
        settingStore.setState(settingState);
        let baseState = checkAndUpgradeSaveDict(data.dict);
        baseState.load = true;
        store.setState(baseState);
        if (obj.version >= 4) {
          try {
            let save = obj.val[PRACTICE_WORD_CACHE.key] || {};
            if (save.val && Object.keys(save.val).length > 0) {
              localStorage.setItem(PRACTICE_WORD_CACHE.key, JSON.stringify(obj.val[PRACTICE_WORD_CACHE.key]));
            }
          } catch (e) {
          }
          try {
            let save = obj.val[PRACTICE_ARTICLE_CACHE.key] || {};
            if (save.val && Object.keys(save.val).length > 0) {
              localStorage.setItem(PRACTICE_ARTICLE_CACHE.key, JSON.stringify(obj.val[PRACTICE_ARTICLE_CACHE.key]));
            }
          } catch (e) {
          }
          try {
            let r = obj.val[APP_VERSION.key] || -1;
            set(APP_VERSION.key, r);
            runtimeStore.isNew = r ? APP_VERSION.version > Number(r) : true;
          } catch (e) {
          }
        }
        notice && Toast.success("导入成功！");
      } catch (err) {
        return Toast.error("导入失败！");
      } finally {
        importLoading.value = false;
      }
    }
    let timer = -1;
    async function beforeImport() {
      {
        importLoading.value = true;
        await exportData("已自动备份数据", "TypeWords数据备份.zip");
        await sleep(1500);
      }
      let d = (void 0).querySelector("#import");
      d.click();
      timer = setTimeout(() => importLoading.value = false, 1e3);
    }
    async function importData(e) {
      clearTimeout(timer);
      importLoading.value = true;
      let file = e.target.files[0];
      if (!file) return importLoading.value = false;
      if (file.name.endsWith(".json")) {
        let reader = new FileReader();
        reader.onload = function(v) {
          let str = v.target.result;
          if (str) {
            importJson(str);
          }
        };
        reader.readAsText(file);
      } else if (file.name.endsWith(".zip")) {
        try {
          const JSZip = await loadJsLib("JSZip", LIB_JS_URL.JSZIP);
          const zip = await JSZip.loadAsync(file);
          const dataFile = zip.file("data.json");
          if (!dataFile) {
            return Toast.error("缺少 data.json，导入失败");
          }
          const mp3Folder = zip.folder("mp3");
          if (mp3Folder) {
            const records = [];
            for (const filename in zip.files) {
              if (filename.startsWith("mp3/") && filename.endsWith(".mp3")) {
                const entry = zip.file(filename);
                if (!entry) continue;
                const blob = await entry.async("blob");
                const id = filename.replace(/^mp3\//, "").replace(/\.mp3$/, "");
                records.push({ id, file: blob });
              }
            }
            await set(LOCAL_FILE_KEY, records);
          }
          const str = await dataFile.async("string");
          importJson(str, false);
          Toast.success("导入成功！");
        } catch (e2) {
          Toast.error(e2?.message || e2 || "导入失败");
        } finally {
          importLoading.value = false;
        }
      } else {
        Toast.error("不支持的文件类型");
      }
      importLoading.value = false;
    }
    let isNewHost = ref(false);
    let showTransfer = ref(false);
    function transferOk() {
      setTimeout(() => {
        (void 0).location.href = "/words";
      }, 1500);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentSettings20Regular = __unplugin_components_2;
      const _component_IconFluentTextUnderlineDouble20Regular = __unplugin_components_0;
      const _component_IconFluentBookLetter20Regular = __unplugin_components_1;
      const _component_IconFluentDatabasePerson20Regular = __unplugin_components_3;
      const _component_IconFluentKeyboardLayoutFloat20Regular = __unplugin_components_4;
      const _component_IconFluentTextBulletListSquare20Regular = __unplugin_components_5;
      const _component_IconFluentPerson20Regular = __unplugin_components_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(BasePage, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="setting text-md card flex flex-col" style="${ssrRenderStyle({ "height": "calc(100vh - 3rem)" })}" data-v-f15aab14${_scopeId}><div class="page-title text-align-center" data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("setting"))}</div><div class="flex flex-1 overflow-hidden gap-4" data-v-f15aab14${_scopeId}><div class="left" data-v-f15aab14${_scopeId}><div class="tabs" data-v-f15aab14${_scopeId}><div class="${ssrRenderClass([unref(tabIndex) === 0 && "active", "tab"])}" data-v-f15aab14${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentSettings20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("general_settings"))}</span></div><div class="${ssrRenderClass([unref(tabIndex) === 1 && "active", "tab"])}" data-v-f15aab14${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentTextUnderlineDouble20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("word_settings"))}</span></div><div class="${ssrRenderClass([unref(tabIndex) === 2 && "active", "tab"])}" data-v-f15aab14${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentBookLetter20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("article_settings"))}</span></div><div class="${ssrRenderClass([unref(tabIndex) === 4 && "active", "tab"])}" data-v-f15aab14${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentDatabasePerson20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("data_management"))}</span></div><div class="${ssrRenderClass([unref(tabIndex) === 3 && "active", "tab"])}" data-v-f15aab14${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentKeyboardLayoutFloat20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("shortcut_settings"))}</span></div><div class="${ssrRenderClass([unref(tabIndex) === 5 && "active", "tab"])}" data-v-f15aab14${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentTextBulletListSquare20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("update_log"))}</span>`);
            if (unref(runtimeStore).isNew) {
              _push2(`<div class="red-point" data-v-f15aab14${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([unref(tabIndex) === 6 && "active", "tab"])}" data-v-f15aab14${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFluentPerson20Regular, null, null, _parent2, _scopeId));
            _push2(`<span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("about"))}</span></div></div></div><div class="col-line" data-v-f15aab14${_scopeId}></div><div class="flex-1 overflow-y-auto overflow-x-hidden pr-4 content" data-v-f15aab14${_scopeId}>`);
            if (unref(tabIndex) === 0) {
              _push2(ssrRenderComponent(CommonSetting, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(tabIndex) === 1) {
              _push2(ssrRenderComponent(WordSetting, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(tabIndex) === 2) {
              _push2(ssrRenderComponent(ArticleSetting, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(tabIndex) === 3) {
              _push2(`<div class="body" data-v-f15aab14${_scopeId}><div class="row" data-v-f15aab14${_scopeId}><label class="main-title" data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("function"))}</label><div class="wrapper" data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("shortcut_key"))}</div></div><div class="scroll" data-v-f15aab14${_scopeId}><!--[-->`);
              ssrRenderList(Object.entries(unref(settingStore).shortcutKeyMap), (item) => {
                _push2(`<div class="row" data-v-f15aab14${_scopeId}><label class="item-title" data-v-f15aab14${_scopeId}>${ssrInterpolate(getShortcutKeyName(item[0]))}</label><div class="wrapper" data-v-f15aab14${_scopeId}>`);
                if (unref(editShortcutKey) === item[0]) {
                  _push2(`<div class="set-key" data-v-f15aab14${_scopeId}><input${ssrRenderAttr("value", item[1] ? item[1] : _ctx.$t("no_shortcut_set"))} readonly type="text" data-v-f15aab14${_scopeId}><span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("press_key_to_set"))}，<span class="text-red!" data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("click_here_when_done"))}</span></span></div>`);
                } else {
                  _push2(`<div data-v-f15aab14${_scopeId}>`);
                  if (item[1]) {
                    _push2(`<div data-v-f15aab14${_scopeId}>${ssrInterpolate(item[1])}</div>`);
                  } else {
                    _push2(`<span data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("no_shortcut_set"))}</span>`);
                  }
                  _push2(`</div>`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div><div class="row" data-v-f15aab14${_scopeId}><label class="item-title" data-v-f15aab14${_scopeId}></label><div class="wrapper" data-v-f15aab14${_scopeId}>`);
              _push2(ssrRenderComponent(BaseButton, { onClick: resetShortcutKeyMap }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("restore_default"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("restore_default")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(tabIndex) === 4) {
              _push2(`<div data-v-f15aab14${_scopeId}><div data-v-f15aab14${_scopeId}>${ssrInterpolate(_ctx.$t("data_saved_locally"))}。如果您需要在不同的设备、浏览器上使用 ${ssrInterpolate(unref(APP_NAME))}， 您需要手动进行数据导出和导入 </div>`);
              _push2(ssrRenderComponent(BaseButton, {
                loading: unref(exportLoading),
                size: "large",
                class: "mt-3",
                onClick: ($event) => unref(exportData)()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("export_data_backup"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("export_data_backup")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="text-gray text-sm mt-2" data-v-f15aab14${_scopeId}>💾 导出的ZIP文件包含所有学习数据，可在其他设备上导入恢复</div><div class="line mt-15 mb-3" data-v-f15aab14${_scopeId}></div><div data-v-f15aab14${_scopeId}> 请注意，导入数据将<b class="text-red" data-v-f15aab14${_scopeId}> 完全覆盖 </b>当前所有数据，请谨慎操作。执行导入操作时，会先自动备份当前数据到您的电脑中，供您随时恢复 </div><div class="flex gap-space mt-3" data-v-f15aab14${_scopeId}>`);
              _push2(ssrRenderComponent(BaseButton, {
                size: "large",
                onClick: beforeImport,
                loading: unref(importLoading)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("import_data_restore"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("import_data_restore")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<input type="file" id="import" class="w-0 h-0 opacity-0" accept="application/json,.zip,application/zip" data-v-f15aab14${_scopeId}></div>`);
              if (unref(isNewHost)) {
                _push2(`<!--[--><div class="line my-3" data-v-f15aab14${_scopeId}></div><div data-v-f15aab14${_scopeId}> 请注意，如果本地已有使用记录，请先备份当前数据，迁移数据后将<b class="text-red" data-v-f15aab14${_scopeId}> 完全覆盖 </b>当前所有数据，请谨慎操作。 </div><div class="flex gap-space mt-3" data-v-f15aab14${_scopeId}>`);
                _push2(ssrRenderComponent(BaseButton, {
                  onClick: ($event) => isRef(showTransfer) ? showTransfer.value = true : showTransfer = true
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`迁移 2study.top 网站数据`);
                    } else {
                      return [
                        createTextVNode("迁移 2study.top 网站数据")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(tabIndex) === 5) {
              _push2(ssrRenderComponent(Log, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(tabIndex) === 6) {
              _push2(`<div class="center flex-col" data-v-f15aab14${_scopeId}>`);
              _push2(ssrRenderComponent(About, null, null, _parent2, _scopeId));
              _push2(`<div class="text-md color-gray mt-10" data-v-f15aab14${_scopeId}>Build ${ssrInterpolate(gitLastCommitHash.value)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "setting text-md card flex flex-col",
                style: { "height": "calc(100vh - 3rem)" }
              }, [
                createVNode("div", { class: "page-title text-align-center" }, toDisplayString(_ctx.$t("setting")), 1),
                createVNode("div", { class: "flex flex-1 overflow-hidden gap-4" }, [
                  createVNode("div", { class: "left" }, [
                    createVNode("div", { class: "tabs" }, [
                      createVNode("div", {
                        class: ["tab", unref(tabIndex) === 0 && "active"],
                        onClick: ($event) => tabIndex.value = 0
                      }, [
                        createVNode(_component_IconFluentSettings20Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("general_settings")), 1)
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["tab", unref(tabIndex) === 1 && "active"],
                        onClick: ($event) => tabIndex.value = 1
                      }, [
                        createVNode(_component_IconFluentTextUnderlineDouble20Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("word_settings")), 1)
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["tab", unref(tabIndex) === 2 && "active"],
                        onClick: ($event) => tabIndex.value = 2
                      }, [
                        createVNode(_component_IconFluentBookLetter20Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("article_settings")), 1)
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["tab", unref(tabIndex) === 4 && "active"],
                        onClick: ($event) => tabIndex.value = 4
                      }, [
                        createVNode(_component_IconFluentDatabasePerson20Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("data_management")), 1)
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["tab", unref(tabIndex) === 3 && "active"],
                        onClick: ($event) => tabIndex.value = 3
                      }, [
                        createVNode(_component_IconFluentKeyboardLayoutFloat20Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("shortcut_settings")), 1)
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["tab", unref(tabIndex) === 5 && "active"],
                        onClick: () => {
                          tabIndex.value = 5;
                          unref(runtimeStore).isNew = false;
                          unref(set)(unref(APP_VERSION).key, unref(APP_VERSION).version);
                        }
                      }, [
                        createVNode(_component_IconFluentTextBulletListSquare20Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("update_log")), 1),
                        unref(runtimeStore).isNew ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "red-point"
                        })) : createCommentVNode("", true)
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["tab", unref(tabIndex) === 6 && "active"],
                        onClick: ($event) => tabIndex.value = 6
                      }, [
                        createVNode(_component_IconFluentPerson20Regular),
                        createVNode("span", null, toDisplayString(_ctx.$t("about")), 1)
                      ], 10, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "col-line" }),
                  createVNode("div", { class: "flex-1 overflow-y-auto overflow-x-hidden pr-4 content" }, [
                    unref(tabIndex) === 0 ? (openBlock(), createBlock(CommonSetting, { key: 0 })) : createCommentVNode("", true),
                    unref(tabIndex) === 1 ? (openBlock(), createBlock(WordSetting, { key: 1 })) : createCommentVNode("", true),
                    unref(tabIndex) === 2 ? (openBlock(), createBlock(ArticleSetting, { key: 2 })) : createCommentVNode("", true),
                    unref(tabIndex) === 3 ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "body"
                    }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("label", { class: "main-title" }, toDisplayString(_ctx.$t("function")), 1),
                        createVNode("div", { class: "wrapper" }, toDisplayString(_ctx.$t("shortcut_key")), 1)
                      ]),
                      createVNode("div", { class: "scroll" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(Object.entries(unref(settingStore).shortcutKeyMap), (item) => {
                          return openBlock(), createBlock("div", { class: "row" }, [
                            createVNode("label", { class: "item-title" }, toDisplayString(getShortcutKeyName(item[0])), 1),
                            createVNode("div", {
                              class: "wrapper",
                              onClick: ($event) => isRef(editShortcutKey) ? editShortcutKey.value = item[0] : editShortcutKey = item[0]
                            }, [
                              unref(editShortcutKey) === item[0] ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "set-key"
                              }, [
                                createVNode("input", {
                                  ref_for: true,
                                  ref: "shortcutInput",
                                  value: item[1] ? item[1] : _ctx.$t("no_shortcut_set"),
                                  readonly: "",
                                  type: "text",
                                  onBlur: handleInputBlur
                                }, null, 40, ["value"]),
                                createVNode("span", {
                                  onClick: withModifiers(($event) => isRef(editShortcutKey) ? editShortcutKey.value = "" : editShortcutKey = "", ["stop"])
                                }, [
                                  createTextVNode(toDisplayString(_ctx.$t("press_key_to_set")) + "，", 1),
                                  createVNode("span", { class: "text-red!" }, toDisplayString(_ctx.$t("click_here_when_done")), 1)
                                ], 8, ["onClick"])
                              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                item[1] ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(item[1]), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("no_shortcut_set")), 1))
                              ]))
                            ], 8, ["onClick"])
                          ]);
                        }), 256))
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("label", { class: "item-title" }),
                        createVNode("div", { class: "wrapper" }, [
                          createVNode(BaseButton, { onClick: resetShortcutKeyMap }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("restore_default")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])) : createCommentVNode("", true),
                    unref(tabIndex) === 4 ? (openBlock(), createBlock("div", { key: 4 }, [
                      createVNode("div", null, toDisplayString(_ctx.$t("data_saved_locally")) + "。如果您需要在不同的设备、浏览器上使用 " + toDisplayString(unref(APP_NAME)) + "， 您需要手动进行数据导出和导入 ", 1),
                      createVNode(BaseButton, {
                        loading: unref(exportLoading),
                        size: "large",
                        class: "mt-3",
                        onClick: ($event) => unref(exportData)()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("export_data_backup")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode("div", { class: "text-gray text-sm mt-2" }, "💾 导出的ZIP文件包含所有学习数据，可在其他设备上导入恢复"),
                      createVNode("div", { class: "line mt-15 mb-3" }),
                      createVNode("div", null, [
                        createTextVNode(" 请注意，导入数据将"),
                        createVNode("b", { class: "text-red" }, " 完全覆盖 "),
                        createTextVNode("当前所有数据，请谨慎操作。执行导入操作时，会先自动备份当前数据到您的电脑中，供您随时恢复 ")
                      ]),
                      createVNode("div", { class: "flex gap-space mt-3" }, [
                        createVNode(BaseButton, {
                          size: "large",
                          onClick: beforeImport,
                          loading: unref(importLoading)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("import_data_restore")), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"]),
                        createVNode("input", {
                          type: "file",
                          id: "import",
                          class: "w-0 h-0 opacity-0",
                          accept: "application/json,.zip,application/zip",
                          onChange: importData
                        }, null, 32)
                      ]),
                      unref(isNewHost) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("div", { class: "line my-3" }),
                        createVNode("div", null, [
                          createTextVNode(" 请注意，如果本地已有使用记录，请先备份当前数据，迁移数据后将"),
                          createVNode("b", { class: "text-red" }, " 完全覆盖 "),
                          createTextVNode("当前所有数据，请谨慎操作。 ")
                        ]),
                        createVNode("div", { class: "flex gap-space mt-3" }, [
                          createVNode(BaseButton, {
                            onClick: ($event) => isRef(showTransfer) ? showTransfer.value = true : showTransfer = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode("迁移 2study.top 网站数据")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ], 64)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    unref(tabIndex) === 5 ? (openBlock(), createBlock(Log, { key: 5 })) : createCommentVNode("", true),
                    unref(tabIndex) === 6 ? (openBlock(), createBlock("div", {
                      key: 6,
                      class: "center flex-col"
                    }, [
                      createVNode(About),
                      createVNode("div", { class: "text-md color-gray mt-10" }, "Build " + toDisplayString(gitLastCommitHash.value), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MigrateDialog, {
        modelValue: unref(showTransfer),
        "onUpdate:modelValue": ($event) => isRef(showTransfer) ? showTransfer.value = $event : showTransfer = $event,
        onOk: transferOk
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f15aab14"]]);
export {
  setting as default
};
//# sourceMappingURL=setting-B34rnsoV.js.map
