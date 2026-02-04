import { Transition, Teleport, createVNode, Fragment, useSSRContext } from "vue";
import { h as _export_sfc } from "../server.mjs";
import { offset } from "@floating-ui/dom";
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
      if (this.disabled) return;
      if (!this.title && !this.$slots?.reference) return;
      e.stopPropagation();
      let rect = e.target.getBoundingClientRect();
      this.show = true;
      this.$nextTick(() => {
        let tip = this.$refs?.tip?.getBoundingClientRect();
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
    let DefaultNode = this.$slots.default()[0];
    let ReferenceNode = this.$slots?.reference?.()?.[0];
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
  { value: "机械键盘", label: "机械键盘" },
  { value: "机械键盘1", label: "机械键盘1" },
  { value: "机械键盘2", label: "机械键盘2" },
  { value: "老式机械键盘", label: "老式机械键盘" },
  { value: "笔记本键盘", label: "笔记本键盘" }
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
  [ShortcutKey.Previous]: "Alt+⬅",
  [ShortcutKey.Next]: "Tab",
  [ShortcutKey.ToggleSimple]: "`",
  [ShortcutKey.ToggleCollect]: "Enter",
  [ShortcutKey.PreviousChapter]: "Ctrl+⬅",
  [ShortcutKey.NextChapter]: "Ctrl+➡",
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
  [WordPracticeStage.FollowWriteNewWord]: "跟写新词",
  [WordPracticeStage.IdentifyNewWord]: "自测新词",
  [WordPracticeStage.ListenNewWord]: "听写新词",
  [WordPracticeStage.DictationNewWord]: "默写新词",
  [WordPracticeStage.FollowWriteReview]: "跟写上次学习",
  [WordPracticeStage.IdentifyReview]: "自测上次学习",
  [WordPracticeStage.ListenReview]: "听写上次学习",
  [WordPracticeStage.DictationReview]: "默写上次学习",
  [WordPracticeStage.FollowWriteReviewAll]: "跟写之前学习",
  [WordPracticeStage.IdentifyReviewAll]: "自测之前学习",
  [WordPracticeStage.ListenReviewAll]: "听写之前学习",
  [WordPracticeStage.DictationReviewAll]: "默写之前学习",
  [WordPracticeStage.Complete]: "完成学习",
  [WordPracticeStage.Shuffle]: "随机复习"
};
const WordPracticeModeNameMap = {
  [WordPracticeMode.System]: "学习",
  [WordPracticeMode.Free]: "自由练习",
  [WordPracticeMode.IdentifyOnly]: "自测",
  [WordPracticeMode.DictationOnly]: "默写",
  [WordPracticeMode.ListenOnly]: "听写",
  [WordPracticeMode.Shuffle]: "随机复习",
  [WordPracticeMode.Review]: "复习"
};
class DictId {
  static wordCollect = "wordCollect";
  static wordWrong = "wordWrong";
  static wordKnown = "wordKnown";
  static articleCollect = "articleCollect";
}
export {
  APP_NAME as A,
  CodeType as C,
  DefaultShortcutKeyMap as D,
  EMAIL as E,
  GITHUB as G,
  IS_DEV as I,
  LIB_JS_URL as L,
  Origin as O,
  PracticeArticleWordType as P,
  SAVE_DICT_KEY as S,
  TourConfig as T,
  WordPracticeMode as W,
  APP_VERSION as a,
  LOCAL_FILE_KEY as b,
  SAVE_SETTING_KEY as c,
  EXPORT_DATA_KEY as d,
  AppEnv as e,
  DictId as f,
  Sort as g,
  WordPracticeModeNameMap as h,
  DICT_LIST as i,
  ENV as j,
  Tooltip as k,
  DictType as l,
  ShortcutKey as m,
  SoundFileOptions as n,
  WordPracticeStage as o,
  WordPracticeStageNameMap as p,
  WordPracticeType as q,
  WordPracticeModeStageMap as r,
  TranslateEngine as s,
  PronunciationApi as t
};
//# sourceMappingURL=env-CUoXYOyW.js.map
