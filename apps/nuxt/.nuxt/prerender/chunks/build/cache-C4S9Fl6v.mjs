import { I as IS_DEV } from './env-CUoXYOyW.mjs';

const PRACTICE_WORD_CACHE = {
  key: "PracticeSaveWord",
  version: 1
};
const PRACTICE_ARTICLE_CACHE = {
  key: "PracticeSaveArticle",
  version: 1
};
function getPracticeWordCache() {
  let d = localStorage.getItem(PRACTICE_WORD_CACHE.key);
  if (d) {
    try {
      if (IS_DEV) ;
      let obj = JSON.parse(d);
      if (obj.version !== PRACTICE_WORD_CACHE.version) {
        throw new Error();
      }
      return obj.val;
    } catch (e) {
      localStorage.removeItem(PRACTICE_WORD_CACHE.key);
    }
  }
  return null;
}
function getPracticeArticleCache() {
  let d = localStorage.getItem(PRACTICE_ARTICLE_CACHE.key);
  if (d) {
    try {
      let obj = JSON.parse(d);
      if (obj.version !== PRACTICE_ARTICLE_CACHE.version) {
        throw new Error();
      }
      return obj.val;
    } catch (e) {
      localStorage.removeItem(PRACTICE_ARTICLE_CACHE.key);
    }
  }
  return null;
}
function setPracticeWordCache(cache) {
  if (cache) {
    localStorage.setItem(
      PRACTICE_WORD_CACHE.key,
      JSON.stringify({
        version: PRACTICE_WORD_CACHE.version,
        val: cache
      })
    );
  } else {
    localStorage.removeItem(PRACTICE_WORD_CACHE.key);
  }
}
function setPracticeArticleCache(cache) {
  if (cache) {
    localStorage.setItem(
      PRACTICE_ARTICLE_CACHE.key,
      JSON.stringify({
        version: PRACTICE_ARTICLE_CACHE.version,
        val: cache
      })
    );
  } else {
    localStorage.removeItem(PRACTICE_ARTICLE_CACHE.key);
  }
}

export { PRACTICE_WORD_CACHE as P, PRACTICE_ARTICLE_CACHE as a, getPracticeArticleCache as b, setPracticeArticleCache as c, getPracticeWordCache as g, setPracticeWordCache as s };
//# sourceMappingURL=cache-C4S9Fl6v.mjs.map
