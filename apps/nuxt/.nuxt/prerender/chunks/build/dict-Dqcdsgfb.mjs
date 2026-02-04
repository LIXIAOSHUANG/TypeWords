import { ref, watch, computed, markRaw, openBlock, createElementBlock, createElementVNode } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { c as useBaseStore, b as useSettingStore, t as shuffle, d as cloneDeep, y as splitIntoN, z as getRandomN, a as useRuntimeStore, g as getDefaultDict, A as resourceWrap, o as _getDictDataByUrl, p as detail } from './BaseIcon-Cnj57dgy.mjs';
import { r as DICT_LIST, g as DictId, i as DictType, e as AppEnv } from './env-CUoXYOyW.mjs';
import { useRoute, useRouter } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';

const _hoisted_1$1 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M7.194 2.101a.9.9 0 0 1 1.614 0l1.521 3.082l3.401.495a.9.9 0 0 1 .5 1.535l-2.462 2.399l.581 3.387a.9.9 0 0 1-1.306.949l-3.042-1.6l-3.042 1.6a.9.9 0 0 1-1.306-.949l.58-3.387l-2.46-2.4a.9.9 0 0 1 .499-1.534l3.4-.495z"
    }, null, -1)
  ])]);
}
const __unplugin_components_5 = markRaw({ name: "fluent-star16-filled", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M7.194 2.101a.9.9 0 0 1 1.614 0l1.521 3.082l3.401.495a.9.9 0 0 1 .5 1.535l-2.462 2.399l.581 3.387a.9.9 0 0 1-1.306.949l-3.042-1.6l-3.042 1.6a.9.9 0 0 1-1.306-.949l.58-3.387l-2.46-2.4a.9.9 0 0 1 .499-1.534l3.4-.495zM8 2.726L6.546 5.673a.9.9 0 0 1-.677.492l-3.253.473L4.97 8.932a.9.9 0 0 1 .258.797l-.555 3.24l2.91-1.53a.9.9 0 0 1 .837 0l2.91 1.53l-.556-3.24a.9.9 0 0 1 .258-.797l2.354-2.294l-3.253-.473a.9.9 0 0 1-.677-.492z"
    }, null, -1)
  ])]);
}
const __unplugin_components_1 = markRaw({ name: "fluent-star16-regular", render });
function useWordOptions() {
  const store = useBaseStore();
  function isWordCollect(val) {
    return !!store.collectWord.words.find((v) => v.word.toLowerCase() === val.word.toLowerCase());
  }
  function toggleWordCollect(val) {
    let rIndex = store.collectWord.words.findIndex((v) => v.word.toLowerCase() === val.word.toLowerCase());
    if (rIndex > -1) {
      store.collectWord.words.splice(rIndex, 1);
    } else {
      store.collectWord.words.push(val);
    }
    store.collectWord.length = store.collectWord.words.length;
  }
  function isWordSimple(val) {
    return !!store.knownWords.includes(val.word.toLowerCase());
  }
  function toggleWordSimple(val) {
    let rIndex = store.knownWords.findIndex((v) => v === val.word.toLowerCase());
    if (rIndex > -1) {
      store.known.words.splice(rIndex, 1);
    } else {
      store.known.words.push(val);
    }
    store.known.length = store.known.words.length;
  }
  function delWrongWord(val) {
    let rIndex = store.wrong.words.findIndex((v) => v.word.toLowerCase() === val.word.toLowerCase());
    if (rIndex > -1) {
      store.wrong.words.splice(rIndex, 1);
    }
    store.wrong.length = store.wrong.words.length;
  }
  function delSimpleWord(val) {
    let rIndex = store.known.words.findIndex((v) => v.word.toLowerCase() === val.word.toLowerCase());
    if (rIndex > -1) {
      store.known.words.splice(rIndex, 1);
    }
    store.known.length = store.known.words.length;
  }
  return {
    isWordCollect,
    toggleWordCollect,
    isWordSimple,
    toggleWordSimple,
    delWrongWord,
    delSimpleWord
  };
}
function useArticleOptions() {
  const store = useBaseStore();
  function isArticleCollect(val) {
    var _a, _b;
    return !!((_b = (_a = store.collectArticle) == null ? void 0 : _a.articles) == null ? void 0 : _b.find((v) => v.id === val.id));
  }
  function toggleArticleCollect(val) {
    let rIndex = store.collectArticle.articles.findIndex((v) => v.id === val.id);
    if (rIndex > -1) {
      store.collectArticle.articles.splice(rIndex, 1);
    } else {
      store.collectArticle.articles.push(val);
    }
    store.collectArticle.length = store.collectArticle.articles.length;
  }
  return {
    isArticleCollect,
    toggleArticleCollect
  };
}
function getCurrentStudyWord() {
  const store = useBaseStore();
  let data = { new: [], review: [], write: [], shuffle: [] };
  let dict = store.sdict;
  let words = dict.words.slice();
  if (words == null ? void 0 : words.length) {
    const settingStore = useSettingStore();
    let ignoreList = [store.allIgnoreWords, store.knownWords][settingStore.ignoreSimpleWord ? 0 : 1];
    const perDay = dict.perDayStudyNumber;
    let start = dict.lastLearnIndex;
    let complete = dict.complete;
    let isEnd = start >= dict.length - 1;
    if (complete && isEnd) {
      let ratio = settingStore.wordReviewRatio || 1;
      let ignoreList2 = [store.allIgnoreWords, store.knownWords][settingStore.ignoreSimpleWord ? 0 : 1];
      let shuffled = shuffle(cloneDeep(dict.words));
      let count = 0;
      data.write = [];
      for (let item of shuffled) {
        if (!ignoreList2.includes(item.word.toLowerCase())) {
          data.write.push(item);
          count++;
          if (count >= perDay * ratio) {
            break;
          }
        }
      }
      return data;
    }
    let end = start;
    let list = dict.words.slice(start);
    for (let item of list) {
      if (!ignoreList.includes(item.word.toLowerCase())) {
        if (data.new.length < perDay) {
          data.new.push(item);
        } else break;
      }
      end++;
    }
    if (settingStore.wordReviewRatio >= 1 || complete) {
      list = dict.words.slice(0, start).reverse();
      if (complete) list = list.concat(dict.words.slice(end).reverse());
      for (let item of list) {
        if (!ignoreList.includes(item.word.toLowerCase())) {
          if (data.review.length < perDay) {
            data.review.push(item);
          } else break;
        }
        start--;
      }
    }
    if (settingStore.wordReviewRatio >= 2) {
      let candidateWords = dict.words.slice(0, start).reverse();
      if (complete) candidateWords = candidateWords.concat(dict.words.slice(end).reverse());
      candidateWords = candidateWords.filter((w) => !ignoreList.includes(w.word.toLowerCase()));
      const totalNeed = perDay * (settingStore.wordReviewRatio - 1);
      if (candidateWords.length <= totalNeed) {
        data.write = candidateWords;
      } else {
        let days = 6;
        const groups = splitIntoN(candidateWords.slice(0, days * perDay), 6);
        const ratio = Array.from({ length: days }, (_, i) => i + 1).reverse();
        const ratioSum = ratio.reduce((a, b) => a + b, 0);
        const realRatio = ratio.map((r) => Math.round(r / ratioSum * totalNeed));
        let writeWords = [];
        groups.map((v, i) => {
          writeWords = writeWords.concat(getRandomN(v, realRatio[i]));
        });
        data.write = writeWords;
      }
    }
  }
  return data;
}
function useGetDict() {
  const store = useBaseStore();
  const runtimeStore = useRuntimeStore();
  let waiting = ref(false);
  let fetching = ref(false);
  const route = useRoute();
  const router = useRouter();
  watch(
    [() => store.load, () => waiting.value],
    ([a, b]) => {
      if (a && b) {
        loadDict();
      }
    },
    { immediate: true }
  );
  async function loadDict(dict) {
    var _a;
    if (!dict) {
      dict = getDefaultDict();
      let dictId = route.params.id;
      dict = store.article.bookList.find((v) => v.id === dictId);
      let r = await fetch(resourceWrap(DICT_LIST.ARTICLE.ALL));
      let dict_list = await r.json();
      if (!dict) dict = dict_list.flat().find((v) => v.id === dictId);
    }
    if (dict && dict.id) {
      if (!((_a = dict == null ? void 0 : dict.articles) == null ? void 0 : _a.length) && !(dict == null ? void 0 : dict.custom) && ![DictId.articleCollect].includes(dict.en_name || dict.id) && !(dict == null ? void 0 : dict.is_default)) {
        fetching.value = true;
        let r = await _getDictDataByUrl(dict, DictType.article);
        runtimeStore.editDict = r;
      }
      if (store.article.bookList.find((book) => book.id === runtimeStore.editDict.id)) {
        if (AppEnv.CAN_REQUEST) {
          let res = await detail({ id: runtimeStore.editDict.id });
          if (res.success) {
            runtimeStore.editDict.statistics = res.data.statistics;
            if (res.data.articles.length) {
              runtimeStore.editDict.articles = res.data.articles;
            }
          }
        }
      }
    } else {
      router.push("/articles");
    }
    waiting.value = false;
    fetching.value = false;
  }
  const loading = computed(() => waiting.value || fetching.value);
  return { loading };
}

export { __unplugin_components_1 as _, __unplugin_components_5 as a, useGetDict as b, useArticleOptions as c, getCurrentStudyWord as g, useWordOptions as u };
//# sourceMappingURL=dict-Dqcdsgfb.mjs.map
