import { defineEventHandler } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs';

const articles_get = defineEventHandler(() => {
  return $fetch("https://typewords.cc/list/article.json");
});

export { articles_get as default };
//# sourceMappingURL=articles.get.mjs.map
