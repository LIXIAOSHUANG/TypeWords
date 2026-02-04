import { c as useBaseStore, b as useSettingStore, l as loadJsLib, k as shakeCommonDict, T as Toast } from "./BaseIcon-Cnj57dgy.js";
import { A as APP_NAME, L as LIB_JS_URL, a as APP_VERSION, S as SAVE_DICT_KEY, c as SAVE_SETTING_KEY, d as EXPORT_DATA_KEY, b as LOCAL_FILE_KEY } from "./env-CUoXYOyW.js";
import { get } from "idb-keyval";
import saveAs from "file-saver";
import dayjs from "dayjs";
import { ref } from "vue";
import { a as PRACTICE_ARTICLE_CACHE, P as PRACTICE_WORD_CACHE } from "./cache-C4S9Fl6v.js";
function useExport() {
  const store = useBaseStore();
  const settingStore = useSettingStore();
  let loading = ref(false);
  async function exportData(notice = "导出成功！", fileName = `${APP_NAME}-User-Data-${dayjs().format("YYYY-MM-DD HH-mm-ss")}.zip`) {
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
      for (const rec of allRecords ?? []) {
        mp3.file(rec.id + ".mp3", rec.file);
      }
      let content = await zip.generateAsync({ type: "blob" });
      saveAs(content, fileName);
      notice && Toast.success(notice);
      return content;
    } catch (e) {
      Toast.error(e?.message || e || "导出失败");
    } finally {
      loading.value = false;
    }
  }
  return {
    loading,
    exportData
  };
}
export {
  useExport as u
};
//# sourceMappingURL=export-JdQPRQb6.js.map
