import { _ as __unplugin_components_0 } from "./text-edit-style20-regular-f87qZqzd.js";
import { defineComponent, ref, reactive, computed, watch, createVNode, Fragment, createTextVNode, isVNode, useSSRContext } from "vue";
import { r as request, a as useRuntimeStore, c as useBaseStore, b as useSettingStore, u as useNav, h as _nextTick, B as BaseIcon, m as isMobile, n as convertToWord, T as Toast, o as detail, l as loadJsLib, p as _getDictDataByUrl, q as reverse, t as shuffle, g as getDefaultDict } from "./BaseIcon-Cnj57dgy.js";
import { B as BackIcon } from "./BackIcon-D_XswP1e.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { B as BaseTable, P as PracticeSettingDialog, c as copyOfficialDict } from "./dict-COqWcYxU.js";
import { P as PopConfirm } from "./PopConfirm-BsYq1Crk.js";
import { W as WordItem } from "./WordItem-QVJUwi53.js";
import { B as BaseInput } from "./BaseInput-mlIHP8lZ.js";
import { T as Textarea } from "./Textarea-Ca12-GD2.js";
import { F as Form, a as FormItem } from "./Form-CH4Dczim.js";
import { D as DeleteIcon } from "./DeleteIcon-DU4Q4Alm.js";
import { e as AppEnv, f as DictId, g as Sort, L as LIB_JS_URL, T as TourConfig } from "./env-CUoXYOyW.js";
import { g as getCurrentStudyWord } from "./dict-Dqcdsgfb.js";
import { E as EditBook } from "./EditBook-B01KdRjn.js";
import { M as MessageBox } from "./MessageBox-DbYOvJFb.js";
import { nanoid } from "nanoid";
import { useRouter, useRoute } from "vue-router";
import { P as PRACTICE_WORD_CACHE } from "./cache-C4S9Fl6v.js";
import { s as setInterval } from "./interval-CYUoNYlE.js";
import { g as useI18n, h as _export_sfc } from "../server.mjs";
import "pinia";
import "idb-keyval";
import "axios";
import "vue/server-renderer";
import "dayjs";
import "dayjs/plugin/duration.js";
import "./chevron-left28-filled-DoP3x3Jo.js";
import "./question-circle20-regular-ixBvu_Z4.js";
import "./Checkbox-ChlucEKY.js";
import "./Slider-ibM1Ch1E.js";
import "./search24-regular-Cw07GsNM.js";
import "./MiniDialog-DIRP4Q9a.js";
import "./Empty-DqqzidIv.js";
import "./NuxtImg-BgeLVH9C.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
import "./chevron-left20-filled-B_9PTvDy.js";
import "./Dialog-BoKDmA_Y.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
import "./InputNumber-CwEqYfu9.js";
import "./checkmark-circle16-regular-BfJF9NXt.js";
import "./VolumeIcon--ng6Uza7.js";
import "./volume-low-D-Q_rQNL.js";
import "./sound-fV5MruVn.js";
import "./eye16-regular-Cm9O3Lp0.js";
import "./event-qcx2F2JA.js";
import "@floating-ui/dom";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
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
        message: "请输入单词",
        trigger: "blur"
      }, {
        max: 100,
        message: "名称不能超过100个字符",
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
              Toast.success("修改成功");
            } else {
              Toast.success("修改失败，未找到单词");
              return;
            }
          } else {
            data.id = nanoid(6);
            data.checked = false;
            let r = allList.value.find((v) => v.word === wordForm.value.word);
            if (r) {
              Toast.warning("已有相同名称单词！");
              return;
            } else allList.value.push(data);
            Toast.success("添加成功");
            wordForm.value = getDefaultFormWord();
          }
          syncDictInMyStudyList();
        } else {
          Toast.warning("请填写完整");
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
        let res = await wordDelete(null, {
          wordIds: ids,
          dictId
        });
        if (res.success) {
          tableRef.value.getData();
        } else {
          return Toast.error(res.msg ?? "删除失败");
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
      res.relWords = word.relWords.root ? "词根:" + word.relWords.root + "\n\n" + word.relWords.rels.map((v) => (v.pos + "\n" + v.words.map((v2) => v2.c + ":" + v2.cn).join("\n")).replaceAll('"', "")).join("\n\n") : "";
      res.etymology = word.etymology.map((v) => (v.t + "\n" + v.d).replaceAll('"', "")).join("\n\n");
      return res;
    }
    function editWord(word) {
      isOperate.value = true;
      wordForm.value = word2Str(word);
      if (isMob) activeTab.value = "edit";
    }
    function addWord() {
      isOperate.value = true;
      wordForm.value = getDefaultFormWord();
      if (isMob) activeTab.value = "edit";
    }
    function closeWordForm() {
      isOperate.value = false;
      wordForm.value = getDefaultFormWord();
      if (isMob) activeTab.value = "list";
    }
    let isEdit = ref(false);
    let isAdd = ref(false);
    let activeTab = ref("list");
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
      console.log(1);
      localStorage.removeItem(PRACTICE_WORD_CACHE.key);
      studyLoading.value = true;
      await base.changeDict(runtimeStore.editDict);
      studyLoading.value = false;
      (void 0).umami?.track("startStudyWord", {
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
        return Toast.warning("没有单词可学习！");
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
            if (v["单词"]) {
              let data2 = null;
              try {
                data2 = convertToWord({
                  id: nanoid(6),
                  word: v["单词"],
                  phonetic0: v["音标①"] ?? "",
                  phonetic1: v["音标②"] ?? "",
                  trans: v["翻译"] ?? "",
                  sentences: v["例句"] ?? "",
                  phrases: v["短语"] ?? "",
                  synos: v["近义词"] ?? "",
                  relWords: v["同根词"] ?? "",
                  etymology: v["词源"] ?? ""
                });
              } catch (e2) {
                console.error("导入单词报错" + v["单词"], e2.message);
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
              MessageBox.confirm('单词"' + repeat.map((v) => v.word).join(", ") + '" 已存在，是否覆盖原单词？', "检测到重复单词", () => {
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
                Toast.success("导入成功！");
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
              Toast.success("导入成功！");
            }
          } else {
            Toast.warning("导入失败！原因：没有数据/未认别到数据");
          }
        } else {
          Toast.warning("导入失败！原因：没有数据");
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
          单词: t.word,
          "音标①": t.phonetic0,
          "音标②": t.phonetic1,
          翻译: t.trans,
          例句: t.sentences,
          短语: t.phrases,
          近义词: t.synos,
          同根词: t.relWords,
          词源: t.etymology
        };
      });
      wb.Sheets["Sheet1"] = XLSX.utils.json_to_sheet(sheetData);
      wb.SheetNames = ["Sheet1"];
      XLSX.writeFile(wb, `${filename}.xlsx`);
      Toast.success(filename + " 导出成功！");
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
          text: "点击这里开始学习",
          attachTo: {
            element: "#study",
            on: "bottom"
          },
          buttons: [{
            text: `下一步（3/${TourConfig.total}）`,
            action() {
              tour.next();
              addMyStudyList();
            }
          }]
        });
        tour.addStep({
          id: "step4",
          text: "这里可以选择学习模式、设置学习数量、修改学习进度",
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
            text: `下一步（4/${TourConfig.total}）`,
            action() {
              tour.next();
              startPractice({
                guide: 1
              });
            }
          }]
        });
        const r = localStorage.getItem("tour-guide");
        if (settingStore.first && !r && !isMobile()) {
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
        Toast.success("操作成功");
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
        }, [$t("introduction"), createTextVNode("："), dict2.value.description]), createVNode("div", {
          "class": "line my-3"
        }, null)]), isMob && isOperate.value && createVNode("div", {
          "class": "tab-navigation mb-3"
        }, [createVNode("div", {
          "class": `tab-item ${activeTab.value === "list" ? "active" : ""}`,
          "onClick": () => activeTab.value = "list"
        }, [$t("word_list")]), createVNode("div", {
          "class": `tab-item ${activeTab.value === "edit" ? "active" : ""}`,
          "onClick": () => activeTab.value = "edit"
        }, [wordForm.value.id ? $t("edit") : $t("add"), $t("word")])]), createVNode("div", {
          "class": "flex flex-1 overflow-hidden content-area"
        }, [createVNode("div", {
          "class": `word-list-section ${isMob && isOperate.value && activeTab.value !== "list" ? "mobile-hidden" : ""}`
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
              "title": "编辑"
            }, {
              default: () => [createVNode(__unplugin_components_0, null, null)]
            }), createVNode(PopConfirm, {
              "title": "确认删除？",
              "onConfirm": () => batchDel([val.item.id])
            }, {
              default: () => [createVNode(BaseIcon, {
                "class": "option-icon",
                "title": "删除"
              }, {
                default: () => [createVNode(DeleteIcon, null, null)]
              })]
            })])
          })
        })]), isOperate.value ? createVNode("div", {
          "class": `edit-section flex-1 flex flex-col ${isMob && activeTab.value !== "edit" ? "mobile-hidden" : ""}`
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
            "label": "单词",
            "prop": "word"
          }, {
            default: () => [createVNode(BaseInput, {
              "modelValue": wordForm.value.word,
              "onUpdate:modelValue": (e) => wordForm.value.word = e
            }, null)]
          }), createVNode(FormItem, {
            "label": "英音音标"
          }, {
            default: () => [createVNode(BaseInput, {
              "modelValue": wordForm.value.phonetic0,
              "onUpdate:modelValue": (e) => wordForm.value.phonetic0 = e
            }, null)]
          }), createVNode(FormItem, {
            "label": "美音音标"
          }, {
            default: () => [createVNode(BaseInput, {
              "modelValue": wordForm.value.phonetic1,
              "onUpdate:modelValue": (e) => wordForm.value.phonetic1 = e
            }, null)]
          }), createVNode(FormItem, {
            "label": "翻译"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.trans,
              "onUpdate:modelValue": (e) => wordForm.value.trans = e,
              "placeholder": "一行一个翻译，前面词性，后面内容（如n.取消）；多个翻译请换行",
              "autosize": {
                minRows: 6,
                maxRows: 10
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "例句"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.sentences,
              "onUpdate:modelValue": (e) => wordForm.value.sentences = e,
              "placeholder": "一行原文，一行译文；多个请换两行",
              "autosize": {
                minRows: 6,
                maxRows: 10
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "短语"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.phrases,
              "onUpdate:modelValue": (e) => wordForm.value.phrases = e,
              "placeholder": "一行原文，一行译文；多个请换两行",
              "autosize": {
                minRows: 6,
                maxRows: 10
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "同义词"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.synos,
              "onUpdate:modelValue": (e) => wordForm.value.synos = e,
              "placeholder": "请参考已有单词格式",
              "autosize": {
                minRows: 6,
                maxRows: 20
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "同根词"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.relWords,
              "onUpdate:modelValue": (e) => wordForm.value.relWords = e,
              "placeholder": "请参考已有单词格式",
              "autosize": {
                minRows: 6,
                maxRows: 20
              }
            }, null)]
          }), createVNode(FormItem, {
            "label": "词源"
          }, {
            default: () => [createVNode(Textarea, {
              "modelValue": wordForm.value.etymology,
              "onUpdate:modelValue": (e) => wordForm.value.etymology = e,
              "placeholder": "请参考已有单词格式",
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
export {
  dict as default
};
//# sourceMappingURL=dict-DG3GOhNI.js.map
