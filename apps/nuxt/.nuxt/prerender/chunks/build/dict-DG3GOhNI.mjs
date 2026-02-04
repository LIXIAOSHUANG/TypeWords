import { _ as __unplugin_components_0 } from './text-edit-style20-regular-f87qZqzd.mjs';
import { defineComponent, ref, reactive, computed, watch, createVNode, Fragment, createTextVNode, isVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { a as useRuntimeStore, c as useBaseStore, b as useSettingStore, u as useNav, h as _nextTick, B as BaseIcon, m as isMobile, T as Toast, l as loadJsLib, n as convertToWord, o as _getDictDataByUrl, p as detail, g as getDefaultDict, q as reverse, r as request, t as shuffle } from './BaseIcon-Cnj57dgy.mjs';
import { B as BackIcon } from './BackIcon-D_XswP1e.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { B as BasePage } from './BasePage-DMJ6cvww.mjs';
import { B as BaseTable, P as PracticeSettingDialog, c as copyOfficialDict } from './dict-COqWcYxU.mjs';
import { P as PopConfirm } from './PopConfirm-BsYq1Crk.mjs';
import { W as WordItem } from './WordItem-QVJUwi53.mjs';
import { B as BaseInput } from './BaseInput-mlIHP8lZ.mjs';
import { T as Textarea } from './Textarea-Ca12-GD2.mjs';
import { F as Form, a as FormItem } from './Form-CH4Dczim.mjs';
import { D as DeleteIcon } from './DeleteIcon-DU4Q4Alm.mjs';
import { e as AppEnv, f as Sort, g as DictId, L as LIB_JS_URL, T as TourConfig } from './env-CUoXYOyW.mjs';
import { g as getCurrentStudyWord } from './dict-Dqcdsgfb.mjs';
import { E as EditBook } from './EditBook-B01KdRjn.mjs';
import { M as MessageBox } from './MessageBox-DbYOvJFb.mjs';
import { nanoid } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import { useRouter, useRoute } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';
import { P as PRACTICE_WORD_CACHE } from './cache-C4S9Fl6v.mjs';
import { s as setInterval } from './interval-CYUoNYlE.mjs';
import { h as _export_sfc, g as useI18n } from './server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/axios/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/duration.js';
import './chevron-left28-filled-DoP3x3Jo.mjs';
import './question-circle20-regular-ixBvu_Z4.mjs';
import './Checkbox-ChlucEKY.mjs';
import './Slider-ibM1Ch1E.mjs';
import './search24-regular-Cw07GsNM.mjs';
import './MiniDialog-DIRP4Q9a.mjs';
import './Empty-DqqzidIv.mjs';
import './NuxtImg-BgeLVH9C.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs';
import './chevron-left20-filled-B_9PTvDy.mjs';
import './Dialog-BoKDmA_Y.mjs';
import './InputNumber-CwEqYfu9.mjs';
import './checkmark-circle16-regular-BfJF9NXt.mjs';
import './VolumeIcon--ng6Uza7.mjs';
import './volume-low-D-Q_rQNL.mjs';
import './sound-fV5MruVn.mjs';
import './eye16-regular-Cm9O3Lp0.mjs';
import './event-qcx2F2JA.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/scule/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pathe/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ipx/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-devtools-stub/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/server.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/devalue/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unhead/dist/utils.mjs';

function wordDelete(params, data) {
  return request("word/delete", data, params, "post");
}
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dict",
  setup(__props) {
    const runtimeStore = useRuntimeStore();
    const base = useBaseStore();
    const router = useRouter();
    useRoute();
    const isMob = isMobile();
    const {
      t: $t
    } = useI18n();
    let loading = ref(false);
    let allList = ref([]);
    const getDefaultFormWord = () => {
      return {
        id: "",
        word: "",
        phonetic0: "",
        phonetic1: "",
        trans: "",
        sentences: "",
        phrases: "",
        synos: "",
        relWords: "",
        etymology: ""
      };
    };
    let isOperate = ref(false);
    let wordForm = ref(getDefaultFormWord());
    let wordFormRef = ref();
    const wordRules = reactive({
      word: [{
        required: true,
        message: "\u8BF7\u8F93\u5165\u5355\u8BCD",
        trigger: "blur"
      }, {
        max: 100,
        message: "\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7100\u4E2A\u5B57\u7B26",
        trigger: "blur"
      }]
    });
    let studyLoading = ref(false);
    function syncDictInMyStudyList(study = false) {
      _nextTick(() => {
        let rIndex = base.word.bookList.findIndex((v) => v.id === runtimeStore.editDict.id);
        runtimeStore.editDict.words = allList.value;
        let temp = runtimeStore.editDict;
        if (!temp.custom && ![DictId.wordKnown, DictId.wordWrong, DictId.wordCollect].includes(temp.id)) {
          temp.custom = true;
          if (!temp.id.includes("_custom")) {
            temp.id += "_custom_" + nanoid(6);
          }
        }
        temp.length = temp.words.length;
        if (rIndex > -1) {
          base.word.bookList[rIndex] = getDefaultDict(temp);
          if (study) base.word.studyIndex = rIndex;
        } else {
          base.word.bookList.push(getDefaultDict(temp));
          if (study) base.word.studyIndex = base.word.bookList.length - 1;
        }
      }, 100);
    }
    async function onSubmitWord() {
      await wordFormRef.value.validate((valid) => {
        if (valid) {
          let data = convertToWord(wordForm.value);
          if (data.id) {
            let r = allList.value.find((v) => v.id === data.id);
            if (r) {
              Object.assign(r, data);
              Toast.success("\u4FEE\u6539\u6210\u529F");
            } else {
              Toast.success("\u4FEE\u6539\u5931\u8D25\uFF0C\u672A\u627E\u5230\u5355\u8BCD");
              return;
            }
          } else {
            data.id = nanoid(6);
            data.checked = false;
            let r = allList.value.find((v) => v.word === wordForm.value.word);
            if (r) {
              Toast.warning("\u5DF2\u6709\u76F8\u540C\u540D\u79F0\u5355\u8BCD\uFF01");
              return;
            } else allList.value.push(data);
            Toast.success("\u6DFB\u52A0\u6210\u529F");
            wordForm.value = getDefaultFormWord();
          }
          syncDictInMyStudyList();
        } else {
          Toast.warning("\u8BF7\u586B\u5199\u5B8C\u6574");
        }
      });
    }
    async function batchDel(ids) {
      let localHandle = () => {
        ids.map((id) => {
          let rIndex2 = allList.value.findIndex((v) => v.id === id);
          if (rIndex2 > -1) {
            if (id === wordForm.value.id) {
              wordForm.value = getDefaultFormWord();
            }
            allList.value.splice(rIndex2, 1);
          }
        });
        tableRef.value.getData();
        syncDictInMyStudyList();
      };
      let cloudHandle = async (dictId) => {
        var _a;
        let res = await wordDelete(null, {
          wordIds: ids,
          dictId
        });
        if (res.success) {
          tableRef.value.getData();
        } else {
          return Toast.error((_a = res.msg) != null ? _a : "\u5220\u9664\u5931\u8D25");
        }
      };
      if (AppEnv.CAN_REQUEST) {
        if (dict2.value.custom) {
          if (dict2.value.sync) {
            await cloudHandle(dict2.value.id);
          } else {
            localHandle();
          }
        } else {
          let r = await copyOfficialDict(null, {
            id: dict2.value.id
          });
          if (r.success) {
            await cloudHandle(r.data.id);
            getDetail(r.data.id);
          } else {
            return Toast.error(r.msg);
          }
        }
      } else {
        localHandle();
      }
    }
    function word2Str(word) {
      let res = getDefaultFormWord();
      res.id = word.id;
      res.word = word.word;
      res.phonetic1 = word.phonetic1;
      res.phonetic0 = word.phonetic0;
      res.trans = word.trans.map((v) => (v.pos + v.cn).replaceAll('"', "")).join("\n");
      res.sentences = word.sentences.map((v) => (v.c + "\n" + v.cn).replaceAll('"', "")).join("\n\n");
      res.phrases = word.phrases.map((v) => (v.c + "\n" + v.cn).replaceAll('"', "")).join("\n\n");
      res.synos = word.synos.map((v) => (v.pos + v.cn + "\n" + v.ws.join("/")).replaceAll('"', "")).join("\n\n");
      res.relWords = word.relWords.root ? "\u8BCD\u6839:" + word.relWords.root + "\n\n" + word.relWords.rels.map((v) => (v.pos + "\n" + v.words.map((v2) => v2.c + ":" + v2.cn).join("\n")).replaceAll('"', "")).join("\n\n") : "";
      res.etymology = word.etymology.map((v) => (v.t + "\n" + v.d).replaceAll('"', "")).join("\n\n");
      return res;
    }
    function editWord(word) {
      isOperate.value = true;
      wordForm.value = word2Str(word);
    }
    function addWord() {
      isOperate.value = true;
      wordForm.value = getDefaultFormWord();
    }
    function closeWordForm() {
      isOperate.value = false;
      wordForm.value = getDefaultFormWord();
    }
    let isEdit = ref(false);
    let isAdd = ref(false);
    ref("list");
    const showBookDetail = computed(() => {
      return !(isAdd.value || isEdit.value);
    });
    async function getDetail(id) {
      let res = await detail({
        id
      });
      if (res.success) {
        runtimeStore.editDict = res.data;
      }
    }
    function formClose() {
      if (isEdit.value) isEdit.value = false;
      else router.back();
    }
    let showPracticeSettingDialog = ref(false);
    const store = useBaseStore();
    const settingStore = useSettingStore();
    const {
      nav
    } = useNav();
    async function startPractice(query = {}) {
      var _a;
      console.log(1);
      localStorage.removeItem(PRACTICE_WORD_CACHE.key);
      studyLoading.value = true;
      await base.changeDict(runtimeStore.editDict);
      studyLoading.value = false;
      (_a = (void 0).umami) == null ? void 0 : _a.track("startStudyWord", {
        name: store.sdict.name,
        index: store.sdict.lastLearnIndex,
        perDayStudyNumber: store.sdict.perDayStudyNumber,
        custom: store.sdict.custom,
        complete: store.sdict.complete,
        wordPracticeMode: settingStore.wordPracticeMode
      });
      let currentStudy = getCurrentStudyWord();
      nav("practice-words/" + store.sdict.id, query, {
        taskWords: currentStudy
      });
    }
    async function addMyStudyList() {
      if (!runtimeStore.editDict.words.length) {
        return Toast.warning("\u6CA1\u6709\u5355\u8BCD\u53EF\u5B66\u4E60\uFF01");
      }
      if (!settingStore.disableShowPracticeSettingDialog) {
        showPracticeSettingDialog.value = true;
        return;
      }
      startPractice();
    }
    async function startTest() {
      loading.value = true;
      await base.changeDict(runtimeStore.editDict);
      loading.value = false;
      nav("words-test/" + store.sdict.id);
    }
    let exportLoading = ref(false);
    let importLoading = ref(false);
    let tableRef = ref();
    function importData(e) {
      let file = e.target.files[0];
      if (!file) return;
      let reader = new FileReader();
      reader.onload = async function(s) {
        let data = s.target.result;
        importLoading.value = true;
        const XLSX = await loadJsLib("XLSX", LIB_JS_URL.XLSX);
        let workbook = XLSX.read(data, {
          type: "binary"
        });
        let res = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"]);
        if (res.length) {
          let words = res.map((v) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (v["\u5355\u8BCD"]) {
              let data2 = null;
              try {
                data2 = convertToWord({
                  id: nanoid(6),
                  word: v["\u5355\u8BCD"],
                  phonetic0: (_a = v["\u97F3\u6807\u2460"]) != null ? _a : "",
                  phonetic1: (_b = v["\u97F3\u6807\u2461"]) != null ? _b : "",
                  trans: (_c = v["\u7FFB\u8BD1"]) != null ? _c : "",
                  sentences: (_d = v["\u4F8B\u53E5"]) != null ? _d : "",
                  phrases: (_e = v["\u77ED\u8BED"]) != null ? _e : "",
                  synos: (_f = v["\u8FD1\u4E49\u8BCD"]) != null ? _f : "",
                  relWords: (_g = v["\u540C\u6839\u8BCD"]) != null ? _g : "",
                  etymology: (_h = v["\u8BCD\u6E90"]) != null ? _h : ""
                });
              } catch (e2) {
                console.error("\u5BFC\u5165\u5355\u8BCD\u62A5\u9519" + v["\u5355\u8BCD"], e2.message);
              }
              return data2;
            }
          }).filter((v) => v);
          if (words.length) {
            let repeat = [];
            let noRepeat = [];
            words.map((v) => {
              let rIndex = runtimeStore.editDict.words.findIndex((s2) => s2.word === v.word);
              if (rIndex > -1) {
                v.index = rIndex;
                repeat.push(v);
              } else {
                noRepeat.push(v);
              }
            });
            runtimeStore.editDict.words = runtimeStore.editDict.words.concat(noRepeat);
            if (repeat.length) {
              MessageBox.confirm('\u5355\u8BCD"' + repeat.map((v) => v.word).join(", ") + '" \u5DF2\u5B58\u5728\uFF0C\u662F\u5426\u8986\u76D6\u539F\u5355\u8BCD\uFF1F', "\u68C0\u6D4B\u5230\u91CD\u590D\u5355\u8BCD", () => {
                repeat.map((v) => {
                  runtimeStore.editDict.words[v.index] = v;
                  delete runtimeStore.editDict.words[v.index]["index"];
                });
              }, null, () => {
                tableRef.value.closeImportDialog();
                e.target.value = "";
                importLoading.value = false;
                allList.value = runtimeStore.editDict.words;
                tableRef.value.getData();
                syncDictInMyStudyList();
                Toast.success("\u5BFC\u5165\u6210\u529F\uFF01");
              }, {
                t: $t
              });
            } else {
              tableRef.value.closeImportDialog();
              e.target.value = "";
              importLoading.value = false;
              allList.value = runtimeStore.editDict.words;
              tableRef.value.getData();
              syncDictInMyStudyList();
              Toast.success("\u5BFC\u5165\u6210\u529F\uFF01");
            }
          } else {
            Toast.warning("\u5BFC\u5165\u5931\u8D25\uFF01\u539F\u56E0\uFF1A\u6CA1\u6709\u6570\u636E/\u672A\u8BA4\u522B\u5230\u6570\u636E");
          }
        } else {
          Toast.warning("\u5BFC\u5165\u5931\u8D25\uFF01\u539F\u56E0\uFF1A\u6CA1\u6709\u6570\u636E");
        }
        e.target.value = "";
        importLoading.value = false;
      };
      reader.readAsBinaryString(file);
    }
    async function exportData() {
      exportLoading.value = true;
      const XLSX = await loadJsLib("XLSX", LIB_JS_URL.XLSX);
      let list = runtimeStore.editDict.words;
      let filename = runtimeStore.editDict.name;
      let wb = XLSX.utils.book_new();
      let sheetData = list.map((v) => {
        let t = word2Str(v);
        return {
          \u5355\u8BCD: t.word,
          "\u97F3\u6807\u2460": t.phonetic0,
          "\u97F3\u6807\u2461": t.phonetic1,
          \u7FFB\u8BD1: t.trans,
          \u4F8B\u53E5: t.sentences,
          \u77ED\u8BED: t.phrases,
          \u8FD1\u4E49\u8BCD: t.synos,
          \u540C\u6839\u8BCD: t.relWords,
          \u8BCD\u6E90: t.etymology
        };
      });
      wb.Sheets["Sheet1"] = XLSX.utils.json_to_sheet(sheetData);
      wb.SheetNames = ["Sheet1"];
      XLSX.writeFile(wb, `${filename}.xlsx`);
      Toast.success(filename + " \u5BFC\u51FA\u6210\u529F\uFF01");
      exportLoading.value = false;
    }
    watch(() => loading.value, (val) => {
      if (!val) return;
      _nextTick(async () => {
        const Shepherd = await loadJsLib("Shepherd", LIB_JS_URL.SHEPHERD);
        const tour = new Shepherd.Tour(TourConfig);
        tour.on("cancel", () => {
          localStorage.setItem("tour-guide", "1");
        });
        tour.addStep({
          id: "step3",
          text: "\u70B9\u51FB\u8FD9\u91CC\u5F00\u59CB\u5B66\u4E60",
          attachTo: {
            element: "#study",
            on: "bottom"
          },
          buttons: [{
            text: `\u4E0B\u4E00\u6B65\uFF083/${TourConfig.total}\uFF09`,
            action() {
              tour.next();
              addMyStudyList();
            }
          }]
        });
        tour.addStep({
          id: "step4",
          text: "\u8FD9\u91CC\u53EF\u4EE5\u9009\u62E9\u5B66\u4E60\u6A21\u5F0F\u3001\u8BBE\u7F6E\u5B66\u4E60\u6570\u91CF\u3001\u4FEE\u6539\u5B66\u4E60\u8FDB\u5EA6",
          attachTo: {
            element: "#mode",
            on: "bottom"
          },
          beforeShowPromise() {
            return new Promise((resolve) => {
              setInterval();
            });
          },
          buttons: [{
            text: `\u4E0B\u4E00\u6B65\uFF084/${TourConfig.total}\uFF09`,
            action() {
              tour.next();
              startPractice({
                guide: 1
              });
            }
          }]
        });
        const r = localStorage.getItem("tour-guide");
        if (settingStore.first && !r && true) {
          tour.start();
        }
      }, 500);
    });
    const dict2 = computed(() => runtimeStore.editDict);
    function getLocalList({
      pageNo,
      pageSize,
      searchKey
    }) {
      let list = allList.value;
      let total = allList.value.length;
      if (searchKey.trim()) {
        list = allList.value.filter((v) => v.word.toLowerCase().includes(searchKey.trim().toLowerCase()));
        total = list.length;
      }
      list = list.slice((pageNo - 1) * pageSize, (pageNo - 1) * pageSize + pageSize);
      return {
        list,
        total
      };
    }
    async function requestList({
      pageNo,
      pageSize,
      searchKey
    }) {
      if (!dict2.value.custom && ![DictId.wordCollect, DictId.wordWrong, DictId.wordKnown].includes(dict2.value.en_name || dict2.value.id)) {
        if (!allList.value.length) {
          let r = await _getDictDataByUrl(dict2.value);
          allList.value = r.words;
        }
        return getLocalList({
          pageNo,
          pageSize,
          searchKey
        });
      } else {
        if (AppEnv.CAN_REQUEST) {
          if (dict2.value.sync || true) {
            let res = await detail({
              id: dict2.value.id,
              pageNo,
              pageSize
            });
            if (res.success) {
              return {
                list: res.data.words,
                total: res.data.length
              };
            }
            return {
              list: [],
              total: 0
            };
          }
        } else {
          allList.value = dict2.value.words;
        }
        return getLocalList({
          pageNo,
          pageSize,
          searchKey
        });
      }
    }
    function onSort(type, pageNo, pageSize) {
      if (AppEnv.CAN_REQUEST) ;
      else {
        let fun = reverse;
        if ([Sort.reverse, Sort.reverseAll].includes(type)) {
          fun = reverse;
        } else if ([Sort.random, Sort.randomAll].includes(type)) {
          fun = shuffle;
        }
        allList.value = allList.value.slice(0, pageSize * (pageNo - 1)).concat(fun(allList.value.slice(pageSize * (pageNo - 1), pageSize * (pageNo - 1) + pageSize))).concat(allList.value.slice(pageSize * (pageNo - 1) + pageSize));
        runtimeStore.editDict.words = allList.value;
        Toast.success("\u64CD\u4F5C\u6210\u529F");
        tableRef.value.getData();
        syncDictInMyStudyList();
      }
    }
    return () => {
      let _slot, _slot2, _slot3, _slot4, _slot5;
      return createVNode(BasePage, null, {
        default: () => [showBookDetail.value ? createVNode("div", {
          "className": "card mb-0 dict-detail-card flex flex-col"
        }, [createVNode("div", {
          "class": "dict-header flex justify-between items-center relative"
        }, [createVNode(BackIcon, {
          "class": "dict-back z-2"
        }, null), createVNode("div", {
          "class": "dict-title absolute page-title text-align-center w-full"
        }, [runtimeStore.editDict.name]), createVNode("div", {
          "class": "dict-actions flex"
        }, [createVNode(BaseButton, {
          "loading": studyLoading.value || loading.value,
          "type": "info",
          "onClick": () => isEdit.value = true
        }, _isSlot(_slot = $t("edit")) ? _slot : {
          default: () => [_slot]
        }), createVNode(BaseButton, {
          "loading": studyLoading.value || loading.value,
          "type": "info",
          "onClick": startTest
        }, _isSlot(_slot2 = $t("test")) ? _slot2 : {
          default: () => [_slot2]
        }), createVNode(BaseButton, {
          "id": "study",
          "loading": studyLoading.value || loading.value,
          "onClick": addMyStudyList
        }, _isSlot(_slot3 = $t("learn")) ? _slot3 : {
          default: () => [_slot3]
        })])]), dict2.value.description && createVNode(Fragment, null, [createVNode("div", {
          "class": "text-lg  mt-2"
        }, [$t("introduction"), createTextVNode("\uFF1A"), dict2.value.description]), createVNode("div", {
          "class": "line my-3"
        }, null)]), isMob, createVNode("div", {
          "class": "flex flex-1 overflow-hidden content-area"
        }, [createVNode("div", {
          "class": `word-list-section ${""}`
        }, [createVNode(BaseTable, {
          "ref": tableRef,
          "class": "h-full",
          "request": requestList,
          "onDel": batchDel,
          "onSort": onSort,
          "onAdd": addWord,
          "onImport": importData,
          "onExport": exportData,
          "exportLoading": exportLoading.value,
          "importLoading": importLoading.value
        }, {
          default: (val) => createVNode(WordItem, {
            "showTransPop": false,
            "onClick": () => editWord(val.item),
            "index": val.index,
            "showCollectIcon": false,
            "showMarkIcon": false,
            "item": val.item
          }, {
            prefix: () => val.checkbox(val.item),
            suffix: () => createVNode("div", {
              "class": "flex flex-col"
            }, [createVNode(BaseIcon, {
              "class": "option-icon",
              "onClick": () => editWord(val.item),
              "title": "\u7F16\u8F91"
            }, {
              default: () => [createVNode(__unplugin_components_0, null, null)]
            }), createVNode(PopConfirm, {
              "title": "\u786E\u8BA4\u5220\u9664\uFF1F",
              "onConfirm": () => batchDel([val.item.id])
            }, {
              default: () => [createVNode(BaseIcon, {
                "class": "option-icon",
                "title": "\u5220\u9664"
              }, {
                default: () => [createVNode(DeleteIcon, null, null)]
              })]
            })])
          })
        })]), isOperate.value ? createVNode("div", {
          "class": `edit-section flex-1 flex flex-col ${""}`
        }, [createVNode("div", {
          "class": "common-title"
        }, [wordForm.value.id ? $t("edit") : $t("add"), $t("word")]), createVNode(Form, {
          "class": "flex-1 overflow-auto pr-2",
          "ref": (e) => wordFormRef.value = e,
          "rules": wordRules,
          "model": wordForm.value,
          "label-width": "7rem"
        }, {
          default: () => [createVNode(FormItem, {
            "label": "\u5355\u8BCD",
            "prop": "word"
          }, {
            default: () => [createVNode(BaseInput, {
              "modelValue": wordForm.value.word,
              "onUpdate:modelValue": (e) => wordForm.value.word = e
            }, null)]
          }), createVNode(FormItem, {
            "label": "\u82F1\u97F3\u97F3\u6807"
          }, {
            default: () => [createVNode(BaseInput, {
              "modelValue": wordForm.value.phonetic0,
              "onUpdate:modelValue": (e) => wordForm.value.phonetic0 = e
            }, null)]
          }), createVNode(FormItem, {
            "label": "\u7F8E\u97F3\u97F3\u6807"
          }, {
            default: () => [createVNode(BaseInput, {
              "modelValue": wordForm.value.phonetic1,
              "onUpdate:modelValue": (e) => wordForm.value.phonetic1 = e
            }, null)]
          }), createVNode(FormItem, {
            "label": "\u7FFB\u8BD1"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.trans,
              "onUpdate:modelValue": (e) => wordForm.value.trans = e,
              "placeholder": "\u4E00\u884C\u4E00\u4E2A\u7FFB\u8BD1\uFF0C\u524D\u9762\u8BCD\u6027\uFF0C\u540E\u9762\u5185\u5BB9\uFF08\u5982n.\u53D6\u6D88\uFF09\uFF1B\u591A\u4E2A\u7FFB\u8BD1\u8BF7\u6362\u884C",
              "autosize": {
                minRows: 6,
                maxRows: 10
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "\u4F8B\u53E5"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.sentences,
              "onUpdate:modelValue": (e) => wordForm.value.sentences = e,
              "placeholder": "\u4E00\u884C\u539F\u6587\uFF0C\u4E00\u884C\u8BD1\u6587\uFF1B\u591A\u4E2A\u8BF7\u6362\u4E24\u884C",
              "autosize": {
                minRows: 6,
                maxRows: 10
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "\u77ED\u8BED"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.phrases,
              "onUpdate:modelValue": (e) => wordForm.value.phrases = e,
              "placeholder": "\u4E00\u884C\u539F\u6587\uFF0C\u4E00\u884C\u8BD1\u6587\uFF1B\u591A\u4E2A\u8BF7\u6362\u4E24\u884C",
              "autosize": {
                minRows: 6,
                maxRows: 10
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "\u540C\u4E49\u8BCD"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.synos,
              "onUpdate:modelValue": (e) => wordForm.value.synos = e,
              "placeholder": "\u8BF7\u53C2\u8003\u5DF2\u6709\u5355\u8BCD\u683C\u5F0F",
              "autosize": {
                minRows: 6,
                maxRows: 20
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "\u540C\u6839\u8BCD"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.relWords,
              "onUpdate:modelValue": (e) => wordForm.value.relWords = e,
              "placeholder": "\u8BF7\u53C2\u8003\u5DF2\u6709\u5355\u8BCD\u683C\u5F0F",
              "autosize": {
                minRows: 6,
                maxRows: 20
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "\u8BCD\u6E90"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.etymology,
              "onUpdate:modelValue": (e) => wordForm.value.etymology = e,
              "placeholder": "\u8BF7\u53C2\u8003\u5DF2\u6709\u5355\u8BCD\u683C\u5F0F",
              "autosize": {
                minRows: 6,
                maxRows: 10
              }
            }, null)]
          })]
        }), createVNode("div", {
          "class": "center"
        }, [createVNode(BaseButton, {
          "type": "info",
          "onClick": closeWordForm
        }, _isSlot(_slot4 = $t("close")) ? _slot4 : {
          default: () => [_slot4]
        }), createVNode(BaseButton, {
          "type": "primary",
          "onClick": onSubmitWord
        }, _isSlot(_slot5 = $t("save")) ? _slot5 : {
          default: () => [_slot5]
        })])]) : null])]) : createVNode("div", {
          "class": "card mb-0 dict-detail-card"
        }, [createVNode("div", {
          "class": "dict-header flex justify-between items-center relative"
        }, [createVNode(BackIcon, {
          "class": "dict-back z-2",
          "onClick": () => {
            if (isAdd.value) {
              router.back();
            } else {
              isEdit.value = false;
            }
          }
        }, null), createVNode("div", {
          "class": "dict-title absolute page-title text-align-center w-full"
        }, [runtimeStore.editDict.id ? $t("edit_dict") : $t("create_dict")])]), createVNode("div", {
          "class": "center"
        }, [createVNode(EditBook, {
          "isAdd": isAdd.value,
          "isBook": false,
          "onClose": formClose,
          "onSubmit": () => isEdit.value = isAdd.value = false
        }, null)])]), createVNode(PracticeSettingDialog, {
          "showLeftOption": true,
          "modelValue": showPracticeSettingDialog.value,
          "onUpdate:modelValue": (val) => showPracticeSettingDialog.value = val,
          "onOk": startPractice
        }, null)]
      });
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(words)/dict.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dict = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2a21002"]]);

export { dict as default };
//# sourceMappingURL=dict-DG3GOhNI.mjs.map
