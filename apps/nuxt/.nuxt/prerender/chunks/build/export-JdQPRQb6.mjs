import { c as useBaseStore, b as useSettingStore, l as loadJsLib, k as shakeCommonDict, T as Toast } from './BaseIcon-Cnj57dgy.mjs';
import { A as APP_NAME, L as LIB_JS_URL, a as APP_VERSION, S as SAVE_DICT_KEY, c as SAVE_SETTING_KEY, d as EXPORT_DATA_KEY, b as LOCAL_FILE_KEY } from './env-CUoXYOyW.mjs';
import { get } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import saveAs from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/file-saver/dist/FileSaver.min.js';
import dayjs from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import { ref } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { a as PRACTICE_ARTICLE_CACHE, P as PRACTICE_WORD_CACHE } from './cache-C4S9Fl6v.mjs';

function useExport() {
  const store = useBaseStore();
  const settingStore = useSettingStore();
  let loading = ref(false);
  async function exportData(notice = "\u5BFC\u51FA\u6210\u529F\uFF01", fileName = `${APP_NAME}-User-Data-${dayjs().format("YYYY-MM-DD HH-mm-ss")}.zip`) {
    if (loading.value) return;
    loading.value = true;
    try {
      const JSZip = await loadJsLib("JSZip", LIB_JS_URL.JSZIP);
      let data = {
        version: EXPORT_DATA_KEY.version,
        val: {
          setting: {
            version: SAVE_SETTING_KEY.version,
            val: settingStore.$state
          },
          dict: {
            version: SAVE_DICT_KEY.version,
            val: shakeCommonDict(store.$state)
          },
          [PRACTICE_WORD_CACHE.key]: {
            version: PRACTICE_WORD_CACHE.version,
            val: {}
          },
          [PRACTICE_ARTICLE_CACHE.key]: {
            version: PRACTICE_ARTICLE_CACHE.version,
            val: {}
          },
          [APP_VERSION.key]: -1
        }
      };
      let d = localStorage.getItem(PRACTICE_WORD_CACHE.key);
      if (d) {
        try {
          data.val[PRACTICE_WORD_CACHE.key] = JSON.parse(d);
        } catch (e) {
        }
      }
      let d1 = localStorage.getItem(PRACTICE_ARTICLE_CACHE.key);
      if (d1) {
        try {
          data.val[PRACTICE_ARTICLE_CACHE.key] = JSON.parse(d1);
        } catch (e) {
        }
      }
      let r = await get(APP_VERSION.key);
      data.val[APP_VERSION.key] = r;
      const zip = new JSZip();
      zip.file("data.json", JSON.stringify(data));
      const mp3 = zip.folder("mp3");
      const allRecords = await get(LOCAL_FILE_KEY);
      for (const rec of allRecords != null ? allRecords : []) {
        mp3.file(rec.id + ".mp3", rec.file);
      }
      let content = await zip.generateAsync({ type: "blob" });
      saveAs(content, fileName);
      notice && Toast.success(notice);
      return content;
    } catch (e) {
      Toast.error((e == null ? void 0 : e.message) || e || "\u5BFC\u51FA\u5931\u8D25");
    } finally {
      loading.value = false;
    }
  }
  return {
    loading,
    exportData
  };
}

export { useExport as u };
//# sourceMappingURL=export-JdQPRQb6.mjs.map
