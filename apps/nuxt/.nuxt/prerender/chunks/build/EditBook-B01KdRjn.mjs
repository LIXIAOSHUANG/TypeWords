import { T as Textarea } from './Textarea-Ca12-GD2.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { a as useRuntimeStore, c as useBaseStore, d as cloneDeep, g as getDefaultDict, T as Toast, D as addDict } from './BaseIcon-Cnj57dgy.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { B as BaseInput } from './BaseInput-mlIHP8lZ.mjs';
import { F as Form, a as FormItem } from './Form-CH4Dczim.mjs';
import { i as DictType, e as AppEnv, g as DictId } from './env-CUoXYOyW.mjs';
import { nanoid } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import { g as useI18n } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EditBook",
  __ssrInlineRender: true,
  props: {
    isAdd: { type: Boolean },
    isBook: { type: Boolean }
  },
  emits: ["submit", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const runtimeStore = useRuntimeStore();
    const store = useBaseStore();
    const DefaultDictForm = {
      id: "",
      name: "",
      description: "",
      category: "",
      tags: [],
      translateLanguage: "zh-CN",
      language: "en",
      type: DictType.article
    };
    let dictForm = ref(cloneDeep(DefaultDictForm));
    const dictFormRef = ref();
    let loading = ref(false);
    const { t: $t } = useI18n();
    const dictRules = reactive({
      name: [
        { required: true, message: $t("please_enter_name"), trigger: "blur" },
        { max: 20, message: $t("name_max_20_chars"), trigger: "blur" }
      ]
    });
    async function onSubmit() {
      await dictFormRef.value.validate(async (valid) => {
        if (valid) {
          let data = getDefaultDict(dictForm.value);
          data.type = props.isBook ? DictType.article : DictType.word;
          let source = [store.article, store.word][props.isBook ? 0 : 1];
          if (props.isAdd) {
            data.id = "custom-dict-" + Date.now();
            data.custom = true;
            if (source.bookList.find((v) => v.name === data.name)) {
              Toast.warning($t("name_already_exists"));
              return;
            } else {
              if (AppEnv.CAN_REQUEST) {
                loading.value = true;
                let res = await addDict(null, data);
                loading.value = false;
                if (res.success) {
                  data = getDefaultDict(res.data);
                } else {
                  return Toast.error(res.msg);
                }
              }
              source.bookList.push(cloneDeep(data));
              runtimeStore.editDict = data;
              emit("submit");
              Toast.success($t("add_success"));
            }
          } else {
            let rIndex = source.bookList.findIndex((v) => v.id === data.id);
            if (!data.custom && ![DictId.wordKnown, DictId.wordWrong, DictId.wordCollect, DictId.articleCollect].includes(
              data.en_name || data.id
            )) {
              data.custom = true;
              if (!data.id.includes("_custom")) {
                data.id += "_custom_" + nanoid(6);
              }
            }
            runtimeStore.editDict = data;
            if (rIndex > -1) {
              source.bookList[rIndex] = getDefaultDict(data);
              emit("submit");
              Toast.success($t("edit_success"));
            } else {
              source.bookList.push(getDefaultDict(data));
              Toast.success($t("edit_and_add_to_dict"));
            }
          }
          console.log("submit!", data);
        } else {
          Toast.warning($t("please_fill_complete"));
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Textarea = Textarea;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-120 mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(Form, {
        ref_key: "dictFormRef",
        ref: dictFormRef,
        rules: dictRules,
        model: unref(dictForm),
        "label-width": "8rem"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FormItem, {
              label: unref($t)("name"),
              prop: "name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(BaseInput, {
                    modelValue: unref(dictForm).name,
                    "onUpdate:modelValue": ($event) => unref(dictForm).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(BaseInput, {
                      modelValue: unref(dictForm).name,
                      "onUpdate:modelValue": ($event) => unref(dictForm).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(FormItem, {
              label: unref($t)("description")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Textarea, {
                    modelValue: unref(dictForm).description,
                    "onUpdate:modelValue": ($event) => unref(dictForm).description = $event,
                    autosize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Textarea, {
                      modelValue: unref(dictForm).description,
                      "onUpdate:modelValue": ($event) => unref(dictForm).description = $event,
                      autosize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            {
              _push2(`<!---->`);
            }
            {
              _push2(`<!---->`);
            }
            _push2(`<div class="center"${_scopeId}>`);
            _push2(ssrRenderComponent(BaseButton, {
              type: "info",
              onClick: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref($t)("close"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref($t)("close")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BaseButton, {
              type: "primary",
              loading: unref(loading),
              onClick: onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref($t)("confirm"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref($t)("confirm")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(FormItem, {
                label: unref($t)("name"),
                prop: "name"
              }, {
                default: withCtx(() => [
                  createVNode(BaseInput, {
                    modelValue: unref(dictForm).name,
                    "onUpdate:modelValue": ($event) => unref(dictForm).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(FormItem, {
                label: unref($t)("description")
              }, {
                default: withCtx(() => [
                  createVNode(_component_Textarea, {
                    modelValue: unref(dictForm).description,
                    "onUpdate:modelValue": ($event) => unref(dictForm).description = $event,
                    autosize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              createCommentVNode("", true),
              createCommentVNode("", true),
              createVNode("div", { class: "center" }, [
                createVNode(BaseButton, {
                  type: "info",
                  onClick: ($event) => emit("close")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref($t)("close")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(BaseButton, {
                  type: "primary",
                  loading: unref(loading),
                  onClick: onSubmit
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref($t)("confirm")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/EditBook.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EditBook = Object.assign(_sfc_main, { __name: "EditBook" });

export { EditBook as E };
//# sourceMappingURL=EditBook-B01KdRjn.mjs.map
