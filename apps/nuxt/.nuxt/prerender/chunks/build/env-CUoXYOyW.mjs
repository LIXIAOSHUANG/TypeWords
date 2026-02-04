import { Transition, Teleport, createVNode, Fragment, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { h as _export_sfc } from './server.mjs';
import { offset } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const _sfc_main = {
  name: "Tooltip",
  components: {
    Teleport,
    Transition
  },
  props: {
    title: {
      type: String,
      default() {
        return "";
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPop(e) {
      var _a;
      if (this.disabled) return;
      if (!this.title && !((_a = this.$slots) == null ? void 0 : _a.reference)) return;
      e.stopPropagation();
      let rect = e.target.getBoundingClientRect();
      this.show = true;
      this.$nextTick(() => {
        var _a2, _b;
        let tip = (_b = (_a2 = this.$refs) == null ? void 0 : _a2.tip) == null ? void 0 : _b.getBoundingClientRect();
        if (!tip) return;
        if (rect.top < 50) {
          this.$refs.tip.style.top = rect.top + rect.height + 10 + "px";
        } else {
          this.$refs.tip.style.top = rect.top - tip.height - 10 + "px";
        }
        let tipWidth = tip.width;
        let rectWidth = rect.width;
        this.$refs.tip.style.left = rect.left - (tipWidth - rectWidth) / 2 + "px";
      });
    }
  },
  render() {
    var _a, _b, _c;
    let DefaultNode = this.$slots.default()[0];
    let ReferenceNode = (_c = (_b = (_a = this.$slots) == null ? void 0 : _a.reference) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c[0];
    return createVNode(Fragment, null, [createVNode(Transition, {
      "name": "fade"
    }, {
      default: () => [createVNode(Teleport, {
        "to": "body"
      }, {
        default: () => [this.show && createVNode("div", {
          "ref": "tip",
          "class": "tip"
        }, [ReferenceNode ? createVNode(ReferenceNode, null, null) : this.title])]
      })]
    }), createVNode(DefaultNode, {
      "onmouseenter": (e) => this.showPop(e),
      "onmouseleave": () => this.show = false
    }, null)]);
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tooltip = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-9c1d3364"]]), { __name: "Tooltip" });
var DictType = /* @__PURE__ */ ((DictType2) => {
  DictType2["collect"] = "collect";
  DictType2["simple"] = "simple";
  DictType2["wrong"] = "wrong";
  DictType2["known"] = "known";
  DictType2["word"] = "word";
  DictType2["article"] = "article";
  return DictType2;
})(DictType || {});
var Sort = /* @__PURE__ */ ((Sort2) => {
  Sort2[Sort2["normal"] = 0] = "normal";
  Sort2[Sort2["random"] = 1] = "random";
  Sort2[Sort2["reverse"] = 2] = "reverse";
  Sort2[Sort2["reverseAll"] = 3] = "reverseAll";
  Sort2[Sort2["randomAll"] = 4] = "randomAll";
  return Sort2;
})(Sort || {});
var ShortcutKey = /* @__PURE__ */ ((ShortcutKey2) => {
  ShortcutKey2["ShowWord"] = "ShowWord";
  ShortcutKey2["EditArticle"] = "EditArticle";
  ShortcutKey2["Next"] = "Next";
  ShortcutKey2["Previous"] = "Previous";
  ShortcutKey2["ToggleSimple"] = "ToggleSimple";
  ShortcutKey2["ToggleCollect"] = "ToggleCollect";
  ShortcutKey2["NextChapter"] = "NextChapter";
  ShortcutKey2["PreviousChapter"] = "PreviousChapter";
  ShortcutKey2["RepeatChapter"] = "RepeatChapter";
  ShortcutKey2["DictationChapter"] = "DictationChapter";
  ShortcutKey2["PlayWordPronunciation"] = "PlayWordPronunciation";
  ShortcutKey2["ToggleShowTranslate"] = "ToggleShowTranslate";
  ShortcutKey2["ToggleDictation"] = "ToggleDictation";
  ShortcutKey2["ToggleTheme"] = "ToggleTheme";
  ShortcutKey2["ToggleConciseMode"] = "ToggleConciseMode";
  ShortcutKey2["TogglePanel"] = "TogglePanel";
  ShortcutKey2["RandomWrite"] = "RandomWrite";
  ShortcutKey2["KnowWord"] = "KnowWord";
  ShortcutKey2["UnknownWord"] = "UnknownWord";
  ShortcutKey2["ChooseA"] = "ChooseA";
  ShortcutKey2["ChooseB"] = "ChooseB";
  ShortcutKey2["ChooseC"] = "ChooseC";
  return ShortcutKey2;
})(ShortcutKey || {});
var TranslateEngine = /* @__PURE__ */ ((TranslateEngine2) => {
  TranslateEngine2[TranslateEngine2["Baidu"] = 0] = "Baidu";
  return TranslateEngine2;
})(TranslateEngine || {});
var PracticeArticleWordType = /* @__PURE__ */ ((PracticeArticleWordType2) => {
  PracticeArticleWordType2[PracticeArticleWordType2["Symbol"] = 0] = "Symbol";
  PracticeArticleWordType2[PracticeArticleWordType2["Number"] = 1] = "Number";
  PracticeArticleWordType2[PracticeArticleWordType2["Word"] = 2] = "Word";
  return PracticeArticleWordType2;
})(PracticeArticleWordType || {});
var WordPracticeMode = /* @__PURE__ */ ((WordPracticeMode2) => {
  WordPracticeMode2[WordPracticeMode2["System"] = 0] = "System";
  WordPracticeMode2[WordPracticeMode2["Free"] = 1] = "Free";
  WordPracticeMode2[WordPracticeMode2["IdentifyOnly"] = 2] = "IdentifyOnly";
  WordPracticeMode2[WordPracticeMode2["DictationOnly"] = 3] = "DictationOnly";
  WordPracticeMode2[WordPracticeMode2["ListenOnly"] = 4] = "ListenOnly";
  WordPracticeMode2[WordPracticeMode2["Shuffle"] = 5] = "Shuffle";
  WordPracticeMode2[WordPracticeMode2["Review"] = 6] = "Review";
  return WordPracticeMode2;
})(WordPracticeMode || {});
var WordPracticeType = /* @__PURE__ */ ((WordPracticeType2) => {
  WordPracticeType2[WordPracticeType2["FollowWrite"] = 0] = "FollowWrite";
  WordPracticeType2[WordPracticeType2["Spell"] = 1] = "Spell";
  WordPracticeType2[WordPracticeType2["Identify"] = 2] = "Identify";
  WordPracticeType2[WordPracticeType2["Listen"] = 3] = "Listen";
  WordPracticeType2[WordPracticeType2["Dictation"] = 4] = "Dictation";
  return WordPracticeType2;
})(WordPracticeType || {});
var CodeType = /* @__PURE__ */ ((CodeType2) => {
  CodeType2[CodeType2["Login"] = 0] = "Login";
  CodeType2[CodeType2["Register"] = 1] = "Register";
  CodeType2[CodeType2["ResetPwd"] = 2] = "ResetPwd";
  CodeType2[CodeType2["ChangeEmail"] = 3] = "ChangeEmail";
  CodeType2[CodeType2["ChangePhoneNew"] = 4] = "ChangePhoneNew";
  CodeType2[CodeType2["ChangePhoneOld"] = 5] = "ChangePhoneOld";
  return CodeType2;
})(CodeType || {});
var WordPracticeStage = /* @__PURE__ */ ((WordPracticeStage2) => {
  WordPracticeStage2[WordPracticeStage2["FollowWriteNewWord"] = 0] = "FollowWriteNewWord";
  WordPracticeStage2[WordPracticeStage2["IdentifyNewWord"] = 1] = "IdentifyNewWord";
  WordPracticeStage2[WordPracticeStage2["ListenNewWord"] = 2] = "ListenNewWord";
  WordPracticeStage2[WordPracticeStage2["DictationNewWord"] = 3] = "DictationNewWord";
  WordPracticeStage2[WordPracticeStage2["FollowWriteReview"] = 4] = "FollowWriteReview";
  WordPracticeStage2[WordPracticeStage2["IdentifyReview"] = 5] = "IdentifyReview";
  WordPracticeStage2[WordPracticeStage2["ListenReview"] = 6] = "ListenReview";
  WordPracticeStage2[WordPracticeStage2["DictationReview"] = 7] = "DictationReview";
  WordPracticeStage2[WordPracticeStage2["FollowWriteReviewAll"] = 8] = "FollowWriteReviewAll";
  WordPracticeStage2[WordPracticeStage2["IdentifyReviewAll"] = 9] = "IdentifyReviewAll";
  WordPracticeStage2[WordPracticeStage2["ListenReviewAll"] = 10] = "ListenReviewAll";
  WordPracticeStage2[WordPracticeStage2["DictationReviewAll"] = 11] = "DictationReviewAll";
  WordPracticeStage2[WordPracticeStage2["Shuffle"] = 12] = "Shuffle";
  WordPracticeStage2[WordPracticeStage2["Complete"] = 13] = "Complete";
  return WordPracticeStage2;
})(WordPracticeStage || {});
const GITHUB = "https://github.com/zyronon/TypeWords";
const Host = "typewords.cc";
const EMAIL = "zyronon@163.com";
const Origin = `https://${Host}`;
const APP_NAME = "Type Words";
const common = {
  word_dict_list_version: 1
};
const map = {
  DEV: {
    API: "http://localhost/",
    // RESOURCE_URL: 'https://dicts.2study.top/',
    // RESOURCE_URL: '/',
    RESOURCE_URL: "https://files.2study.top/"
  }
};
const ENV = Object.assign(map["DEV"], common);
let AppEnv = {
  // TOKEN: localStorage.getItem('token') ?? '',
  TOKEN: "",
  IS_OFFICIAL: false,
  IS_LOGIN: false,
  CAN_REQUEST: false
};
AppEnv.IS_LOGIN = !!AppEnv.TOKEN;
AppEnv.CAN_REQUEST = AppEnv.IS_LOGIN && AppEnv.IS_OFFICIAL;
ENV.API + "static";
const DICT_LIST = {
  WORD: {
    ALL: `/list/word.json`,
    RECOMMENDED: `/list/recommend_word.json`
  },
  ARTICLE: {
    ALL: `/list/article.json`,
    RECOMMENDED: `/list/recommend_article.json`
  }
};
const SoundFileOptions = [
  { value: "\u673A\u68B0\u952E\u76D8", label: "\u673A\u68B0\u952E\u76D8" },
  { value: "\u673A\u68B0\u952E\u76D81", label: "\u673A\u68B0\u952E\u76D81" },
  { value: "\u673A\u68B0\u952E\u76D82", label: "\u673A\u68B0\u952E\u76D82" },
  { value: "\u8001\u5F0F\u673A\u68B0\u952E\u76D8", label: "\u8001\u5F0F\u673A\u68B0\u952E\u76D8" },
  { value: "\u7B14\u8BB0\u672C\u952E\u76D8", label: "\u7B14\u8BB0\u672C\u952E\u76D8" }
];
const APP_VERSION = {
  key: "type-words-app-version",
  version: 2
};
const SAVE_DICT_KEY = {
  key: "typing-word-dict",
  version: 4
};
const SAVE_SETTING_KEY = {
  key: "typing-word-setting",
  version: 17
};
const EXPORT_DATA_KEY = {
  key: "typing-word-export",
  version: 4
};
const LOCAL_FILE_KEY = "typing-word-files";
const TourConfig = {
  useModalOverlay: true,
  defaultStepOptions: {
    canClickTarget: false,
    classes: "shadow-md bg-purple-dark",
    cancelIcon: { enabled: true },
    modalOverlayOpeningPadding: 10,
    modalOverlayOpeningRadius: 6,
    floatingUIOptions: {
      middleware: [offset({ mainAxis: 30 })]
    }
  },
  total: 7
};
const IS_DEV = false;
const LIB_JS_URL = {
  SHEPHERD: `${ENV.RESOURCE_URL}/libs/Shepherd.14.5.1.mjs.js`,
  SNAPDOM: `${ENV.RESOURCE_URL}/libs/snapdom.min.js`,
  JSZIP: `${ENV.RESOURCE_URL}/libs/jszip.min.js`,
  XLSX: `${ENV.RESOURCE_URL}/libs/xlsx.full.min.js`
};
const PronunciationApi = "https://dict.youdao.com/dictvoice?audio=";
const DefaultShortcutKeyMap = {
  [ShortcutKey.EditArticle]: "Ctrl+E",
  [ShortcutKey.ShowWord]: "Escape",
  [ShortcutKey.Previous]: "Alt+\u2B05",
  [ShortcutKey.Next]: "Tab",
  [ShortcutKey.ToggleSimple]: "`",
  [ShortcutKey.ToggleCollect]: "Enter",
  [ShortcutKey.PreviousChapter]: "Ctrl+\u2B05",
  [ShortcutKey.NextChapter]: "Ctrl+\u27A1",
  [ShortcutKey.RepeatChapter]: "Ctrl+Enter",
  [ShortcutKey.DictationChapter]: "Alt+Enter",
  [ShortcutKey.PlayWordPronunciation]: "Ctrl+P",
  [ShortcutKey.ToggleShowTranslate]: "Ctrl+Z",
  [ShortcutKey.ToggleDictation]: "Ctrl+I",
  [ShortcutKey.ToggleTheme]: "Ctrl+Q",
  [ShortcutKey.ToggleConciseMode]: "Ctrl+M",
  [ShortcutKey.TogglePanel]: "Ctrl+L",
  [ShortcutKey.RandomWrite]: "Ctrl+R",
  [ShortcutKey.KnowWord]: "1",
  [ShortcutKey.UnknownWord]: "2",
  [ShortcutKey.ChooseA]: "3",
  [ShortcutKey.ChooseB]: "4",
  [ShortcutKey.ChooseC]: "5"
};
const WordPracticeModeStageMap = {
  [WordPracticeMode.Free]: [WordPracticeStage.FollowWriteNewWord, WordPracticeStage.Complete],
  [WordPracticeMode.IdentifyOnly]: [
    WordPracticeStage.IdentifyNewWord,
    WordPracticeStage.IdentifyReview,
    WordPracticeStage.IdentifyReviewAll,
    WordPracticeStage.Complete
  ],
  [WordPracticeMode.DictationOnly]: [
    WordPracticeStage.DictationNewWord,
    WordPracticeStage.DictationReview,
    WordPracticeStage.DictationReviewAll,
    WordPracticeStage.Complete
  ],
  [WordPracticeMode.ListenOnly]: [
    WordPracticeStage.ListenNewWord,
    WordPracticeStage.ListenReview,
    WordPracticeStage.ListenReviewAll,
    WordPracticeStage.Complete
  ],
  [WordPracticeMode.System]: [
    WordPracticeStage.FollowWriteNewWord,
    WordPracticeStage.ListenNewWord,
    WordPracticeStage.DictationNewWord,
    WordPracticeStage.IdentifyReview,
    WordPracticeStage.ListenReview,
    WordPracticeStage.DictationReview,
    WordPracticeStage.IdentifyReviewAll,
    WordPracticeStage.ListenReviewAll,
    WordPracticeStage.DictationReviewAll,
    WordPracticeStage.Complete
  ],
  [WordPracticeMode.Shuffle]: [WordPracticeStage.Shuffle, WordPracticeStage.Complete],
  [WordPracticeMode.Review]: [
    WordPracticeStage.IdentifyReview,
    WordPracticeStage.ListenReview,
    WordPracticeStage.DictationReview,
    WordPracticeStage.IdentifyReviewAll,
    WordPracticeStage.ListenReviewAll,
    WordPracticeStage.DictationReviewAll,
    WordPracticeStage.Complete
  ]
};
const WordPracticeStageNameMap = {
  [WordPracticeStage.FollowWriteNewWord]: "\u8DDF\u5199\u65B0\u8BCD",
  [WordPracticeStage.IdentifyNewWord]: "\u81EA\u6D4B\u65B0\u8BCD",
  [WordPracticeStage.ListenNewWord]: "\u542C\u5199\u65B0\u8BCD",
  [WordPracticeStage.DictationNewWord]: "\u9ED8\u5199\u65B0\u8BCD",
  [WordPracticeStage.FollowWriteReview]: "\u8DDF\u5199\u4E0A\u6B21\u5B66\u4E60",
  [WordPracticeStage.IdentifyReview]: "\u81EA\u6D4B\u4E0A\u6B21\u5B66\u4E60",
  [WordPracticeStage.ListenReview]: "\u542C\u5199\u4E0A\u6B21\u5B66\u4E60",
  [WordPracticeStage.DictationReview]: "\u9ED8\u5199\u4E0A\u6B21\u5B66\u4E60",
  [WordPracticeStage.FollowWriteReviewAll]: "\u8DDF\u5199\u4E4B\u524D\u5B66\u4E60",
  [WordPracticeStage.IdentifyReviewAll]: "\u81EA\u6D4B\u4E4B\u524D\u5B66\u4E60",
  [WordPracticeStage.ListenReviewAll]: "\u542C\u5199\u4E4B\u524D\u5B66\u4E60",
  [WordPracticeStage.DictationReviewAll]: "\u9ED8\u5199\u4E4B\u524D\u5B66\u4E60",
  [WordPracticeStage.Complete]: "\u5B8C\u6210\u5B66\u4E60",
  [WordPracticeStage.Shuffle]: "\u968F\u673A\u590D\u4E60"
};
const WordPracticeModeNameMap = {
  [WordPracticeMode.System]: "\u5B66\u4E60",
  [WordPracticeMode.Free]: "\u81EA\u7531\u7EC3\u4E60",
  [WordPracticeMode.IdentifyOnly]: "\u81EA\u6D4B",
  [WordPracticeMode.DictationOnly]: "\u9ED8\u5199",
  [WordPracticeMode.ListenOnly]: "\u542C\u5199",
  [WordPracticeMode.Shuffle]: "\u968F\u673A\u590D\u4E60",
  [WordPracticeMode.Review]: "\u590D\u4E60"
};
class DictId {
}
__publicField(DictId, "wordCollect", "wordCollect");
__publicField(DictId, "wordWrong", "wordWrong");
__publicField(DictId, "wordKnown", "wordKnown");
__publicField(DictId, "articleCollect", "articleCollect");

export { APP_NAME as A, CodeType as C, DefaultShortcutKeyMap as D, EMAIL as E, GITHUB as G, IS_DEV as I, LIB_JS_URL as L, Origin as O, PracticeArticleWordType as P, SAVE_DICT_KEY as S, TourConfig as T, WordPracticeType as W, APP_VERSION as a, LOCAL_FILE_KEY as b, SAVE_SETTING_KEY as c, EXPORT_DATA_KEY as d, AppEnv as e, Sort as f, DictId as g, Tooltip as h, DictType as i, WordPracticeMode as j, ENV as k, WordPracticeModeStageMap as l, WordPracticeStageNameMap as m, WordPracticeStage as n, ShortcutKey as o, SoundFileOptions as p, PronunciationApi as q, DICT_LIST as r, WordPracticeModeNameMap as s, TranslateEngine as t };
//# sourceMappingURL=env-CUoXYOyW.mjs.map
