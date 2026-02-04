import { defineStore } from "pinia";
import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, mergeProps, withCtx, createVNode, useSSRContext, ref, computed, render as render$4, shallowReactive, nextTick, renderSlot } from "vue";
import { get } from "idb-keyval";
import { k as Tooltip, j as ENV, e as AppEnv, S as SAVE_DICT_KEY, f as DictId, c as SAVE_SETTING_KEY, q as WordPracticeType, W as WordPracticeMode, D as DefaultShortcutKeyMap, l as DictType, P as PracticeArticleWordType } from "./env-CUoXYOyW.js";
import axios from "axios";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { h as _export_sfc } from "../server.mjs";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";
import { nanoid } from "nanoid";
const _hoisted_1$3 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.354 5.646a.5.5 0 1 0-.708.708L7.293 8L5.646 9.646a.5.5 0 0 0 .708.708L8 8.707l1.646 1.647a.5.5 0 0 0 .708-.708L8.707 8l1.647-1.646a.5.5 0 0 0-.708-.708L8 7.293z"
    }, null, -1)
  ])]);
}
const __unplugin_components_0$1 = markRaw({ name: "fluent-dismiss-circle16-regular", render: render$3 });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Close",
  __ssrInlineRender: true,
  props: {
    title: null
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentDismissCircle16Regular = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "close" }, _attrs))} data-v-ec2aef6e>`);
      _push(ssrRenderComponent(Tooltip, { title: __props.title }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentDismissCircle16Regular, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconFluentDismissCircle16Regular)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Close.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Close = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-ec2aef6e"]]), { __name: "Close" });
const _hoisted_1$2 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16M7.81 7.114a.5.5 0 0 0-.638.058l-.058.069a.5.5 0 0 0 .058.638L9.292 10l-2.12 2.121l-.058.07a.5.5 0 0 0 .058.637l.069.058a.5.5 0 0 0 .638-.058L10 10.708l2.121 2.12l.07.058a.5.5 0 0 0 .637-.058l.058-.069a.5.5 0 0 0-.058-.638L10.708 10l2.12-2.121l.058-.07a.5.5 0 0 0-.058-.637l-.069-.058a.5.5 0 0 0-.638.058L10 9.292l-2.121-2.12z"
    }, null, -1)
  ])]);
}
const __unplugin_components_2 = markRaw({ name: "fluent-dismiss-circle20-filled", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 10.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M10 6a.5.5 0 0 0-.492.41L9.5 6.5V11l.008.09a.5.5 0 0 0 .984 0L10.5 11V6.5l-.008-.09A.5.5 0 0 0 10 6"
    }, null, -1)
  ])]);
}
const __unplugin_components_1 = markRaw({ name: "fluent-error-circle20-filled", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m3.358 5.646a.5.5 0 0 0-.637-.057l-.07.057L9 11.298L7.354 9.651l-.07-.058a.5.5 0 0 0-.695.696l.057.07l2 2l.07.057a.5.5 0 0 0 .568 0l.07-.058l4.004-4.004l.058-.07a.5.5 0 0 0-.058-.638"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "fluent-checkmark-circle20-filled", render });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ToastComponent",
  __ssrInlineRender: true,
  props: {
    message: null,
    type: { default: "info" },
    duration: { default: 3e3 },
    showClose: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visible = ref(false);
    const style = computed(() => ({
      // 移除offset，现在由容器管理位置
    }));
    const startTimer = () => {
      if (props.duration > 0) {
        setTimeout(close, props.duration);
      }
    };
    const close = () => {
      visible.value = false;
      setTimeout(() => {
        emit("close");
      }, 300);
    };
    __expose({
      close,
      show: () => {
        visible.value = true;
        startTimer();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentCheckmarkCircle20Filled = __unplugin_components_0;
      const _component_IconFluentErrorCircle20Filled = __unplugin_components_1;
      const _component_IconFluentDismissCircle20Filled = __unplugin_components_2;
      const _component_Close = Close;
      _push(`<template>`);
      if (visible.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["message", __props.type],
          style: style.value
        }, _attrs))} data-v-12df8096><div class="message-content" data-v-12df8096>`);
        if (props.type === "success") {
          _push(ssrRenderComponent(_component_IconFluentCheckmarkCircle20Filled, { class: "message-icon" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (props.type === "warning") {
          _push(ssrRenderComponent(_component_IconFluentErrorCircle20Filled, { class: "message-icon" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (props.type === "info") {
          _push(ssrRenderComponent(_component_IconFluentErrorCircle20Filled, { class: "message-icon" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (props.type === "error") {
          _push(ssrRenderComponent(_component_IconFluentDismissCircle20Filled, { class: "message-icon" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="message-text" data-v-12df8096>${ssrInterpolate(__props.message)}</span>`);
        if (__props.showClose) {
          _push(ssrRenderComponent(_component_Close, {
            class: "message-close",
            onClick: close
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</template>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/toast/ToastComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ToastComponent = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-12df8096"]]), { __name: "ToastComponent" });
let toastContainers = [];
let toastIdCounter = 0;
const createToastContainer = () => {
  const container = (void 0).createElement("div");
  container.className = "toast-container";
  container.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    pointer-events: none;
  `;
  return container;
};
const updateToastPositions = () => {
  toastContainers.forEach((toastContainer, index) => {
    const offset = index * 70;
    toastContainer.offset = offset;
    toastContainer.container.style.marginTop = `${offset}px`;
  });
};
const removeToastContainer = (id) => {
  const index = toastContainers.findIndex((container) => container.id === id);
  if (index > -1) {
    const container = toastContainers[index];
    setTimeout(() => {
      render$4(null, container.container);
      container.container.remove();
      const currentIndex = toastContainers.findIndex((c) => c.id === id);
      if (currentIndex > -1) {
        toastContainers.splice(currentIndex, 1);
        updateToastPositions();
      }
    }, 300);
  }
};
const Toast = (options) => {
  const toastOptions = typeof options === "string" ? { message: options } : options;
  const id = `toast-${++toastIdCounter}`;
  const container = createToastContainer();
  (void 0).body.appendChild(container);
  const vnode = createVNode(ToastComponent, {
    ...toastOptions,
    onClose: () => {
      removeToastContainer(id);
    }
  });
  render$4(vnode, container);
  const instance = {
    close: () => {
      vnode.component?.exposed?.close?.();
    }
  };
  const toastContainer = {
    id,
    container,
    instance,
    offset: 0
  };
  toastContainers.push(toastContainer);
  updateToastPositions();
  return instance;
};
Toast.success = (message, options) => {
  return Toast({ message, type: "success", ...options });
};
Toast.warning = (message, options) => {
  return Toast({ message, type: "warning", ...options });
};
Toast.info = (message, options) => {
  return Toast({ message, type: "info", ...options });
};
Toast.error = (message, options) => {
  return Toast({ message, type: "error", ...options });
};
Toast.closeAll = () => {
  toastContainers.forEach((container) => container.instance.close());
  toastContainers = [];
};
const axiosInstance = axios.create({
  baseURL: ENV.API,
  timeout: 15e3
});
axiosInstance.interceptors.request.use(
  (config) => {
    if (AppEnv.CAN_REQUEST) config.headers.token = AppEnv.TOKEN;
    return config;
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  // 响应正常的处理
  (response) => {
    const { data } = response;
    if (response.status !== 200) {
      Toast.warning(response.statusText);
      return Promise.reject(data);
    }
    if (data === null) {
      return Promise.resolve({
        code: 500,
        msg: "系统出现错误",
        data: {},
        success: false
      });
    }
    if (typeof data !== "object") {
      return Promise.resolve({
        data,
        success: true,
        code: 200
      });
    }
    return Promise.resolve(data);
  },
  // 请求出错的处理
  (error) => {
    if (error.response === void 0 && error.status === void 0) {
      return Promise.resolve({
        code: 500,
        msg: "服务器响应超时",
        data: null,
        success: false
      });
    }
    if (error.response.status >= 500) {
      return Promise.resolve({
        code: 500,
        msg: "服务器出现错误",
        data: null,
        success: false
      });
    }
    if (error.response.status === 401) {
      return Promise.resolve({
        code: 500,
        msg: "用户名或密码不正确",
        data: null
      });
    }
    const { data } = error.response;
    if (data.code !== void 0) {
      return Promise.resolve({
        code: data.code,
        msg: data.msg,
        success: false
      });
    }
    return Promise.resolve({
      code: 500,
      success: false,
      msg: data.msg,
      data: null
    });
  }
);
async function request(url, data = {}, params = {}, method) {
  return axiosInstance({
    url,
    method,
    data,
    params
  });
}
function remove(data) {
  if (data) {
    let s = cloneDeep(data);
    delete s.words;
    delete s.articles;
    delete s.statistics;
    return s;
  }
}
function dictListVersion() {
  return request("dict/dictListVersion", null, null, "get");
}
function myDictList(params) {
  return request("dict/myDictList", null, params, "get");
}
function add2MyDict(data) {
  return request("dict/add2MyDict", remove(data), null, "post");
}
function addStat(data) {
  return request("dict/addStat", data, null, "post");
}
function detail(params, data) {
  return request("dict/detail", data, params, "get");
}
function setUserDictProp(params, data) {
  return request("dict/setUserDictProp", remove(data), remove(params), "post");
}
function syncSetting(params, data) {
  return request("dict/syncSetting", remove(data), remove(params), "post");
}
function getSetting(params, data) {
  return request("dict/getSetting", remove(data), remove(params), "get");
}
function addDict(params, data) {
  return request("dict/addDict", remove(data), remove(params), "post");
}
const getDefaultBaseState = () => ({
  simpleWords: [
    "a",
    "an",
    "i",
    "my",
    "me",
    "you",
    "your",
    "he",
    "his",
    "she",
    "her",
    "it",
    "what",
    "who",
    "where",
    "how",
    "when",
    "which",
    "be",
    "am",
    "is",
    "was",
    "are",
    "were",
    "do",
    "did",
    "can",
    "could",
    "will",
    "would",
    "the",
    "that",
    "this",
    "and",
    "not",
    "no",
    "yes",
    "to",
    "of",
    "for",
    "at",
    "in"
  ],
  load: false,
  word: {
    bookList: [
      getDefaultDict({ id: DictId.wordCollect, en_name: DictId.wordCollect, name: "收藏" }),
      getDefaultDict({ id: DictId.wordWrong, en_name: DictId.wordCollect, name: "错词" }),
      getDefaultDict({
        id: DictId.wordKnown,
        en_name: DictId.wordCollect,
        name: "已掌握",
        description: "已掌握后的单词不会出现在练习中"
      })
    ],
    studyIndex: -1
  },
  article: {
    bookList: [getDefaultDict({ id: DictId.articleCollect, en_name: DictId.articleCollect, name: "收藏" })],
    studyIndex: -1
  },
  dictListVersion: 1
});
const useBaseStore = defineStore("base", {
  state: () => {
    return getDefaultBaseState();
  },
  getters: {
    collectWord() {
      return this.word.bookList[0];
    },
    collectArticle() {
      return this.article.bookList[0];
    },
    wrong() {
      return this.word.bookList[1];
    },
    known() {
      return this.word.bookList[2];
    },
    knownWords() {
      return this.known.words.map((v) => v.word.toLowerCase());
    },
    allIgnoreWords() {
      return this.known.words.map((v) => v.word.toLowerCase()).concat(this.simpleWords.map((v) => v.toLowerCase()));
    },
    sdict() {
      if (this.word.studyIndex >= 0) {
        return this.word.bookList[this.word.studyIndex] ?? getDefaultDict();
      }
      return getDefaultDict();
    },
    groupLength() {
      return Math.ceil(this.sdict.length / this.sdict.perDayStudyNumber);
    },
    currentGroup() {
      let s = this.sdict.lastLearnIndex % this.sdict.perDayStudyNumber;
      let d = this.sdict.lastLearnIndex / this.sdict.perDayStudyNumber;
      return Math.floor(s === 0 ? d + 1 : d);
    },
    currentStudyProgress() {
      if (!this.sdict.length) return 0;
      return _getStudyProgress(this.sdict.lastLearnIndex, this.sdict.length);
    },
    getDictCompleteDate() {
      if (!this.sdict.length) return 0;
      if (!this.sdict.perDayStudyNumber) return 0;
      return Math.ceil((this.sdict.length - this.sdict.lastLearnIndex) / this.sdict.perDayStudyNumber);
    },
    sbook() {
      return this.article.bookList[this.article.studyIndex] ?? {};
    },
    currentBookProgress() {
      if (!this.sbook.length) return 0;
      if (this.sbook.complete) return 100;
      return _getStudyProgress(this.sbook.lastLearnIndex, this.sbook.length);
    }
  },
  actions: {
    setState(obj) {
      obj.word.bookList.map((book) => {
        book.words = shallowReactive(book.words);
        book.articles = shallowReactive(book.articles);
        book.statistics = shallowReactive(book.statistics);
      });
      obj.article.bookList.map((book) => {
        book.words = shallowReactive(book.words);
        book.articles = shallowReactive(book.articles);
        book.statistics = shallowReactive(book.statistics);
      });
      this.$patch(obj);
    },
    async init() {
      return new Promise(async (resolve) => {
        try {
          let configStr = await get(SAVE_DICT_KEY.key);
          let data = checkAndUpgradeSaveDict(configStr);
          if (AppEnv.IS_OFFICIAL) ;
          if (AppEnv.CAN_REQUEST) {
            let res = await myDictList();
            if (res.success) {
              data.word.bookList = data.word.bookList.filter((v) => !v.sync);
              data.article.bookList = data.article.bookList.filter((v) => !v.sync);
              Object.assign(data, res.data);
            }
          }
          this.setState(data);
        } catch (e) {
          console.error("读取本地dict数据失败", e);
        }
        resolve(true);
      });
    },
    //改变词典
    async changeDict(val) {
      if (AppEnv.CAN_REQUEST) {
        let r = await add2MyDict({
          id: val.id,
          perDayStudyNumber: val.perDayStudyNumber,
          lastLearnIndex: val.lastLearnIndex,
          complete: val.complete
        });
        if (!r.success) return Toast.error(r.msg);
        else val.userDictId = r.data;
      }
      this.word.bookList.slice(3).map((v) => {
        if (!v.custom) {
          v.words = shallowReactive([]);
        }
      });
      let rIndex = this.word.bookList.findIndex((v) => v.id === val.id);
      if (val.words.length < val.perDayStudyNumber) {
        val.perDayStudyNumber = val.words.length;
      }
      if (rIndex > -1) {
        this.word.studyIndex = rIndex;
        this.word.bookList[this.word.studyIndex].words = shallowReactive(val.words);
        this.word.bookList[this.word.studyIndex].perDayStudyNumber = val.perDayStudyNumber;
        this.word.bookList[this.word.studyIndex].lastLearnIndex = val.lastLearnIndex;
        this.word.bookList[this.word.studyIndex].userDictId = val.userDictId;
        this.word.bookList[this.word.studyIndex].complete = val.complete;
      } else {
        this.word.bookList.push(getDefaultDict(val));
        this.word.studyIndex = this.word.bookList.length - 1;
      }
    },
    //改变书籍
    async changeBook(val) {
      if (AppEnv.CAN_REQUEST) {
        let r = await add2MyDict({
          id: val.id,
          perDayStudyNumber: val.perDayStudyNumber,
          lastLearnIndex: val.lastLearnIndex,
          complete: val.complete
        });
        if (!r.success) {
          return Toast.error(r.msg);
        }
      }
      this.article.bookList.slice(1).map((v) => {
        if (!v.custom) {
          v.articles = shallowReactive([]);
        }
      });
      let rIndex = this.article.bookList.findIndex((v) => v.id === val.id);
      if (rIndex > -1) {
        this.article.studyIndex = rIndex;
        this.article.bookList[this.article.studyIndex].articles = shallowReactive(val.articles);
        this.article.bookList[this.article.studyIndex].cover = val.cover;
        this.article.bookList[this.article.studyIndex].name = val.name;
        this.article.bookList[this.article.studyIndex].description = val.description;
      } else {
        this.article.bookList.push(getDefaultDict(val));
        this.article.studyIndex = this.article.bookList.length - 1;
      }
    }
  }
});
const getDefaultSettingState = () => ({
  soundType: "us",
  wordSound: true,
  wordSoundVolume: 100,
  wordSoundSpeed: 1,
  wordReviewRatio: 4,
  articleSound: true,
  articleAutoPlayNext: false,
  articleSoundVolume: 100,
  articleSoundSpeed: 1,
  keyboardSound: true,
  keyboardSoundVolume: 100,
  keyboardSoundFile: "笔记本键盘",
  effectSound: true,
  effectSoundVolume: 100,
  repeatCount: 1,
  repeatCustomCount: null,
  dictation: false,
  translate: true,
  showNearWord: true,
  ignoreCase: true,
  allowWordTip: true,
  waitTimeForChangeWord: 300,
  fontSize: {
    articleForeignFontSize: 48,
    articleTranslateFontSize: 20,
    wordForeignFontSize: 48,
    wordTranslateFontSize: 20
  },
  showToolbar: true,
  showPanel: true,
  sideExpand: false,
  theme: "auto",
  shortcutKeyMap: cloneDeep(DefaultShortcutKeyMap),
  first: true,
  firstTime: Date.now(),
  load: false,
  conflictNotice: true,
  ignoreSimpleWord: false,
  wordPracticeMode: WordPracticeMode.System,
  wordPracticeType: WordPracticeType.FollowWrite,
  disableShowPracticeSettingDialog: false,
  autoNextWord: true,
  inputWrongClear: false,
  mobileNavCollapsed: false,
  ignoreSymbol: true
});
const useSettingStore = defineStore("setting", {
  state: () => {
    return getDefaultSettingState();
  },
  actions: {
    setState(obj) {
      this.$patch(obj);
    },
    init() {
      return new Promise(async (resolve) => {
        let configStr = await get(SAVE_SETTING_KEY.key);
        let data = checkAndUpgradeSaveSetting(configStr);
        if (AppEnv.CAN_REQUEST) {
          let res = await getSetting();
          if (res.success) {
            Object.assign(data, res.data);
          }
        }
        this.setState({ ...data, load: true });
        resolve(true);
      });
    }
  }
});
dayjs.extend(duration);
function checkRiskKey(origin, target) {
  for (const [key, value] of Object.entries(origin)) {
    if (target[key] !== void 0) origin[key] = target[key];
  }
  return origin;
}
function checkAndUpgradeSaveDict(val) {
  let defaultState = getDefaultBaseState();
  if (val) {
    try {
      let data;
      if (typeof val === "string") {
        data = JSON.parse(val);
      } else {
        data = val;
      }
      if (!data.version) {
        console.warn("数据缺少版本号，返回默认状态");
        return defaultState;
      }
      let state = data.val;
      if (typeof state !== "object") {
        console.warn("数据格式无效，返回默认状态");
        return defaultState;
      }
      state.load = false;
      let version = Number(data.version);
      if (version === SAVE_DICT_KEY.version) {
        checkRiskKey(defaultState, state);
        defaultState.article.bookList = defaultState.article.bookList.map((v) => {
          return getDefaultDict(checkRiskKey(getDefaultDict(), v));
        });
        defaultState.word.bookList = defaultState.word.bookList.map((v) => {
          return getDefaultDict(checkRiskKey(getDefaultDict(), v));
        });
        return defaultState;
      } else {
        console.warn(`数据版本不匹配: 当前版本 ${version}, 期望版本 ${SAVE_DICT_KEY.version}，尝试保留数据`);
        try {
          checkRiskKey(defaultState, state);
          if (state.word && state.word.bookList && Array.isArray(state.word.bookList)) {
            defaultState.word.bookList = state.word.bookList.map((v) => {
              return getDefaultDict(checkRiskKey(getDefaultDict(), v));
            });
          }
          if (state.article && state.article.bookList && Array.isArray(state.article.bookList)) {
            defaultState.article.bookList = state.article.bookList.map((v) => {
              return getDefaultDict(checkRiskKey(getDefaultDict(), v));
            });
          }
          return defaultState;
        } catch (upgradeError) {
          console.error("数据升级失败，返回默认状态", upgradeError);
          return defaultState;
        }
      }
    } catch (e) {
      console.error("数据解析异常，返回默认状态", e);
      return defaultState;
    }
  }
  return defaultState;
}
function checkAndUpgradeSaveSetting(val) {
  let defaultState = getDefaultSettingState();
  if (val) {
    try {
      let data;
      if (typeof val === "string") {
        data = JSON.parse(val);
      } else {
        data = val;
      }
      if (!data.version) return defaultState;
      let state = data.val;
      if (typeof state !== "object") return defaultState;
      state.load = false;
      let version = Number(data.version);
      if (version === SAVE_SETTING_KEY.version) {
        checkRiskKey(defaultState.shortcutKeyMap, state.shortcutKeyMap);
        delete state.shortcutKeyMap;
        checkRiskKey(defaultState, state);
        return defaultState;
      } else {
        if (version === 13) {
          defaultState.soundType = state.soundType;
        }
        checkRiskKey(defaultState.shortcutKeyMap, state.shortcutKeyMap);
        delete state.shortcutKeyMap;
        checkRiskKey(defaultState, state);
        return defaultState;
      }
    } catch (e) {
      return defaultState;
    }
  }
  return defaultState;
}
function shakeCommonDict(n) {
  let data = cloneDeep(n);
  data.word.bookList.map((v) => {
    if (!v.custom && ![DictId.wordKnown, DictId.wordWrong, DictId.wordCollect].includes(v.id)) v.words = [];
  });
  data.article.bookList.map((v) => {
    if (!v.custom && ![DictId.articleCollect].includes(v.id)) v.articles = [];
    else {
      v.articles.map((a) => {
        a.sections = [];
      });
    }
  });
  return data;
}
function isMobile() {
  return false;
}
function useNav() {
  const router = useRouter();
  const runtimeStore = useRuntimeStore();
  function nav(path, query = {}, data) {
    if (data) {
      runtimeStore.routeData = cloneDeep(data);
    }
    router.push({ path, query });
  }
  return { nav, push: nav, back: router.back };
}
function _dateFormat(val, format = "YYYY/MM/DD HH:mm") {
  if (!val) return;
  if (String(val).length === 10) {
    val = val * 1e3;
  }
  const d = new Date(Number(val));
  return dayjs(d).format(format);
}
function msToHourMinute(ms) {
  const d = dayjs.duration(ms);
  const hours = d.hours();
  const minutes = d.minutes();
  const seconds = d.seconds();
  if (hours) return `${hours}小时${minutes}分钟`;
  if (minutes) return `${minutes}分钟`;
  return `${seconds}秒`;
}
function msToMinute(ms) {
  return `${Math.floor(dayjs.duration(ms).asMinutes())}分钟`;
}
function _getAccomplishDays(total2, dayNumber) {
  return Math.ceil(total2 / dayNumber);
}
function _getAccomplishDate(total2, dayNumber) {
  if (dayNumber <= 0) return "-";
  let d = _getAccomplishDays(total2, dayNumber);
  return dayjs().add(d, "day").format("YYYY-MM-DD");
}
function _getStudyProgress(index, total2) {
  return Number((index / total2 * 100).toFixed());
}
function _nextTick(cb, time) {
  if (time) {
    nextTick(() => setTimeout(cb, time));
  } else {
    nextTick(cb);
  }
}
function _parseLRC(lrc) {
  const lines = lrc.split("\n").filter((line) => line.trim() !== "");
  const regex = /\[(\d{2}):(\d{2}\.\d{2})\](.*)/;
  let parsed = [];
  for (let i = 0; i < lines.length; i++) {
    let match = lines[i].match(regex);
    if (match) {
      let start = parseFloat(match[1]) * 60 + parseFloat(match[2]);
      let text = match[3].trim();
      let nextMatch = lines[i + 1] ? lines[i + 1].match(regex) : null;
      let end = nextMatch ? parseFloat(nextMatch[1]) * 60 + parseFloat(nextMatch[2]) : null;
      parsed.push({ start, end, text });
    }
  }
  return parsed;
}
async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function _getDictDataByUrl(val, type = DictType.word) {
  let dictResourceUrl = ENV.RESOURCE_URL + `dicts/${val.language}/word/${val.url}`;
  if (type === DictType.article) {
    dictResourceUrl = ENV.RESOURCE_URL + `dicts/${val.language}/article/${val.url}`;
  }
  let s = await fetch(resourceWrap(dictResourceUrl, val.version)).then((r) => r.json());
  if (s) {
    if (type === DictType.word) {
      return getDefaultDict({ ...val, words: s });
    } else {
      return getDefaultDict({ ...val, articles: s });
    }
  }
  return getDefaultDict();
}
function convertToWord(raw) {
  const safeString = (str) => typeof str === "string" ? str.trim() : "";
  const safeSplit = (str, sep) => safeString(str) ? safeString(str).split(sep).filter(Boolean) : [];
  const trans = safeSplit(raw.trans, "\n").map((line) => {
    const match = safeString(line).match(/^([^\s.]+\.?)\s*(.*)$/);
    if (match) {
      let pos = safeString(match[1]);
      let cn = safeString(match[2]);
      if (!/^[a-zA-Z]+\.?$/.test(pos)) {
        cn = safeString(line);
        pos = "";
      }
      return { pos, cn };
    }
    return { pos: "", cn: safeString(line) };
  });
  const sentences = safeSplit(raw.sentences, "\n\n").map((block) => {
    const [c, cn] = block.split("\n");
    return { c: safeString(c), cn: safeString(cn) };
  });
  const phrases = safeSplit(raw.phrases, "\n\n").map((block) => {
    const [c, cn] = block.split("\n");
    return { c: safeString(c), cn: safeString(cn) };
  });
  const synos = safeSplit(raw.synos, "\n\n").map((block) => {
    const lines = block.split("\n").map(safeString);
    const [posCn, wsStr] = lines;
    let pos = "";
    let cn = "";
    if (posCn) {
      const posMatch = posCn.match(/^([a-zA-Z.]+)(.*)$/);
      pos = posMatch ? safeString(posMatch[1]) : "";
      cn = posMatch ? safeString(posMatch[2]) : safeString(posCn);
    }
    const ws = wsStr ? wsStr.split("/").map(safeString) : [];
    return { pos, cn, ws };
  });
  const relWordsText = safeString(raw.relWords);
  let root = "";
  const rels = [];
  if (relWordsText) {
    const relLines = relWordsText.split("\n").filter(Boolean);
    if (relLines.length > 0) {
      root = safeString(relLines[0].replace(/^词根:/, ""));
      let currentPos = "";
      let currentWords = [];
      for (let i = 1; i < relLines.length; i++) {
        const line = relLines[i].trim();
        if (!line) continue;
        if (/^[a-z]+\./i.test(line)) {
          if (currentPos && currentWords.length > 0) {
            rels.push({ pos: currentPos, words: currentWords });
          }
          currentPos = safeString(line.replace(":", ""));
          currentWords = [];
        } else if (line.includes(":")) {
          const [c, cn] = line.split(":");
          currentWords.push({ c: safeString(c), cn: safeString(cn) });
        }
      }
      if (currentPos && currentWords.length > 0) {
        rels.push({ pos: currentPos, words: currentWords });
      }
    }
  }
  const etymology = safeSplit(raw.etymology, "\n\n").map((block) => {
    const lines = block.split("\n").map(safeString);
    const t = lines.shift() || "";
    const d = lines.join("\n").trim();
    return { t, d };
  });
  return getDefaultWord({
    id: raw.id,
    word: safeString(raw.word),
    phonetic0: safeString(raw.phonetic0),
    phonetic1: safeString(raw.phonetic1),
    trans,
    sentences,
    phrases,
    synos,
    relWords: { root, rels },
    etymology,
    custom: true
  });
}
function cloneDeep(val) {
  return JSON.parse(JSON.stringify(val));
}
function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function last(array) {
  return array.length > 0 ? array[array.length - 1] : void 0;
}
function debounce(func, wait) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
function reverse(array) {
  return array.slice().reverse();
}
function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    (result[groupKey] ||= []).push(item);
    return result;
  }, {});
}
function getRandomN(arr, n) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}
function splitIntoN(arr, n) {
  const result = [];
  const len = arr.length;
  const base = Math.floor(len / n);
  let extra = len % n;
  let index = 0;
  for (let i = 0; i < n; i++) {
    const size = base + (extra > 0 ? 1 : 0);
    result.push(arr.slice(index, index + size));
    index += size;
    if (extra > 0) extra--;
  }
  return result;
}
async function loadJsLib(key, url) {
  if ((void 0)[key]) return (void 0)[key];
  return new Promise((resolve, reject) => {
    const script = (void 0).createElement("script");
    if (url.includes(".mjs")) {
      script.type = "module";
      script.src = url;
      script.onload = async () => {
        try {
          const module = await import(url);
          (void 0)[key] = module.default || module;
          resolve((void 0)[key]);
        } catch (err) {
          reject(`${key} 加载失败: ${err.message}`);
        }
      };
    } else {
      script.src = url;
      script.onload = () => resolve((void 0)[key]);
    }
    script.onerror = () => reject(key + " 加载失败");
    (void 0).head.appendChild(script);
  });
}
function total(arr, key) {
  return arr.reduce((a, b) => {
    a += b[key];
    return a;
  }, 0);
}
function resourceWrap(resource, version) {
  return resource;
}
function jump2Feedback() {
  (void 0).open("https://v.wjx.cn/vm/ev0W7fv.aspx#", "_blank");
}
function getDefaultWord(val = {}) {
  return {
    custom: false,
    id: nanoid(6),
    word: "",
    phonetic0: "",
    phonetic1: "",
    trans: [],
    sentences: [],
    phrases: [],
    synos: [],
    relWords: {
      root: "",
      rels: []
    },
    etymology: [],
    ...val
  };
}
function getDefaultArticleWord(val = {}) {
  return getDefaultWord({
    nextSpace: true,
    symbolPosition: "",
    input: "",
    type: PracticeArticleWordType.Word,
    ...val
  });
}
function getDefaultArticle(val = {}) {
  return {
    id: null,
    title: "",
    titleTranslate: "",
    text: "",
    textTranslate: "",
    newWords: [],
    sections: [],
    audioSrc: "",
    audioFileId: "",
    lrcPosition: [],
    questions: [],
    nameList: [],
    ...cloneDeep(val)
  };
}
function getDefaultDict(val = {}) {
  return {
    id: "",
    name: "",
    description: "",
    url: "",
    length: 0,
    category: "",
    tags: [],
    translateLanguage: "",
    type: DictType.word,
    language: "en",
    lastLearnIndex: 0,
    perDayStudyNumber: 20,
    custom: false,
    complete: false,
    createdBy: "",
    en_name: "",
    category_id: null,
    is_default: false,
    update: false,
    cover: "",
    sync: false,
    ...val,
    words: shallowReactive(val.words ?? []),
    articles: shallowReactive(val.articles ?? []),
    statistics: shallowReactive(val.statistics ?? [])
  };
}
const useRuntimeStore = defineStore("runtime", {
  state: () => {
    return {
      routeData: null,
      disableEventListener: false,
      modalList: [],
      editDict: getDefaultDict(),
      showDictModal: false,
      excludeRoutes: [],
      isNew: false
    };
  },
  actions: {
    updateExcludeRoutes(val) {
      if (val.type === "add") {
        if (!this.excludeRoutes.find((v) => v === val.value)) {
          this.excludeRoutes.push(val.value);
        }
      } else {
        let resIndex = this.excludeRoutes.findIndex((v) => v === val.value);
        if (resIndex !== -1) {
          this.excludeRoutes.splice(resIndex, 1);
        }
      }
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  __ssrInlineRender: true,
  props: {
    title: null,
    disabled: { type: Boolean },
    noBg: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Tooltip, mergeProps({ title: __props.title }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
              class: ["icon-wrapper", { disabled: __props.disabled, noBg: __props.noBg }]
            }))} data-v-d5794936${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", mergeProps(_ctx.$attrs, {
                onClick: (e) => !__props.disabled && emit("click", e),
                class: ["icon-wrapper", { disabled: __props.disabled, noBg: __props.noBg }]
              }), [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ], 16, ["onClick"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BaseIcon = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-d5794936"]]), { __name: "BaseIcon" });
export {
  groupBy as A,
  BaseIcon as B,
  msToHourMinute as C,
  total as D,
  getDefaultArticle as E,
  addDict as F,
  addStat as G,
  getDefaultWord as H,
  last as I,
  setUserDictProp as J,
  msToMinute as K,
  Close as L,
  splitIntoN as M,
  getRandomN as N,
  getDefaultArticleWord as O,
  _parseLRC as P,
  syncSetting as Q,
  Toast as T,
  _dateFormat as _,
  useRuntimeStore as a,
  useSettingStore as b,
  useBaseStore as c,
  cloneDeep as d,
  checkAndUpgradeSaveSetting as e,
  checkAndUpgradeSaveDict as f,
  getDefaultDict as g,
  _nextTick as h,
  __unplugin_components_0 as i,
  jump2Feedback as j,
  shakeCommonDict as k,
  loadJsLib as l,
  isMobile as m,
  convertToWord as n,
  detail as o,
  _getDictDataByUrl as p,
  reverse as q,
  request as r,
  sleep as s,
  shuffle as t,
  useNav as u,
  myDictList as v,
  resourceWrap as w,
  _getAccomplishDate as x,
  debounce as y,
  _getAccomplishDays as z
};
//# sourceMappingURL=BaseIcon-Cnj57dgy.js.map
