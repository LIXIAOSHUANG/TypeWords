import { defineComponent, mergeProps, useSSRContext, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { m as ShortcutKey, n as SoundFileOptions } from "./env-CUoXYOyW.js";
import { c as usePlayAudio, g as getAudioFileUrl } from "./sound-fV5MruVn.js";
import { S as Switch } from "./Switch-BoRsOuOV.js";
import { T as Textarea, S as Select, O as Option } from "./Textarea-Ca12-GD2.js";
import { V as VolumeIcon } from "./VolumeIcon--ng6Uza7.js";
import { S as Slider } from "./Slider-ibM1Ch1E.js";
import { b as useSettingStore, c as useBaseStore } from "./BaseIcon-Cnj57dgy.js";
import { R as RadioGroup, a as Radio } from "./Radio-WTKpkBn7.js";
import { I as InputNumber } from "./InputNumber-CwEqYfu9.js";
import { h as _export_sfc } from "../server.mjs";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SettingItem",
  __ssrInlineRender: true,
  props: {
    mainTitle: null,
    title: null,
    desc: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["setting-item", { "has-desc": !!__props.desc }]
      }, _ctx.$attrs, _attrs))} data-v-5b65d0f1><div class="setting-item__main" data-v-5b65d0f1><div class="setting-item__label" data-v-5b65d0f1>`);
      if (__props.mainTitle) {
        _push(`<span class="setting-item__main-title" data-v-5b65d0f1>${ssrInterpolate(__props.mainTitle)}</span>`);
      } else if (__props.title) {
        _push(`<span class="setting-item__title" data-v-5b65d0f1>${ssrInterpolate(__props.title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="setting-item__control" data-v-5b65d0f1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (__props.desc) {
        _push(`<div class="setting-item__desc" data-v-5b65d0f1>${ssrInterpolate(__props.desc)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/SettingItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SettingItem = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-5b65d0f1"]]), { __name: "SettingItem" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommonSetting",
  __ssrInlineRender: true,
  setup(__props) {
    const settingStore = useSettingStore();
    const store = useBaseStore();
    const simpleWords = computed({
      get: () => store.simpleWords.join(","),
      set: (v) => {
        try {
          store.simpleWords = v.split(",");
        } catch (e) {
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("ignore_case"),
        desc: "开启后，输入时不区分大小写，如输入“hello”和“Hello”都会被认为是正确的"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).ignoreCase,
              "onUpdate:modelValue": ($event) => unref(settingStore).ignoreCase = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).ignoreCase,
                "onUpdate:modelValue": ($event) => unref(settingStore).ignoreCase = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("allow_dictation_tip"),
        desc: `${_ctx.$t("allow_dictation_tip_desc")} ${unref(settingStore).shortcutKeyMap[unref(ShortcutKey).ShowWord]}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).allowWordTip,
              "onUpdate:modelValue": ($event) => unref(settingStore).allowWordTip = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).allowWordTip,
                "onUpdate:modelValue": ($event) => unref(settingStore).allowWordTip = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="line"></div>`);
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("simple_word_filter"),
        desc: _ctx.$t("simple_word_filter_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).ignoreSimpleWord,
              "onUpdate:modelValue": ($event) => unref(settingStore).ignoreSimpleWord = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).ignoreSimpleWord,
                "onUpdate:modelValue": ($event) => unref(settingStore).ignoreSimpleWord = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(settingStore).ignoreSimpleWord) {
        _push(ssrRenderComponent(SettingItem, {
          title: _ctx.$t("simple_word_list"),
          class: "items-start!"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(Textarea, {
                placeholder: _ctx.$t("words_comma_separated"),
                modelValue: simpleWords.value,
                "onUpdate:modelValue": ($event) => simpleWords.value = $event,
                autosize: { minRows: 6, maxRows: 10 }
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(Textarea, {
                  placeholder: _ctx.$t("words_comma_separated"),
                  modelValue: simpleWords.value,
                  "onUpdate:modelValue": ($event) => simpleWords.value = $event,
                  autosize: { minRows: 6, maxRows: 10 }
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="line"></div>`);
      _push(ssrRenderComponent(SettingItem, {
        "main-title": _ctx.$t("sound_effect")
      }, null, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("pronunciation_accent"),
        desc: _ctx.$t("pronunciation_accent_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Select, {
              modelValue: unref(settingStore).soundType,
              "onUpdate:modelValue": ($event) => unref(settingStore).soundType = $event,
              placeholder: _ctx.$t("please_select"),
              class: "w-50!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Option, {
                    label: _ctx.$t("us_accent"),
                    value: "us"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Option, {
                    label: _ctx.$t("uk_accent"),
                    value: "uk"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Option, {
                      label: _ctx.$t("us_accent"),
                      value: "us"
                    }, null, 8, ["label"]),
                    createVNode(Option, {
                      label: _ctx.$t("uk_accent"),
                      value: "uk"
                    }, null, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Select, {
                modelValue: unref(settingStore).soundType,
                "onUpdate:modelValue": ($event) => unref(settingStore).soundType = $event,
                placeholder: _ctx.$t("please_select"),
                class: "w-50!"
              }, {
                default: withCtx(() => [
                  createVNode(Option, {
                    label: _ctx.$t("us_accent"),
                    value: "us"
                  }, null, 8, ["label"]),
                  createVNode(Option, {
                    label: _ctx.$t("uk_accent"),
                    value: "uk"
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="line"></div>`);
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("keyboard_sound")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).keyboardSound,
              "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSound = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).keyboardSound,
                "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSound = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("keyboard_sound_effect")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Select, {
              modelValue: unref(settingStore).keyboardSoundFile,
              "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSoundFile = $event,
              placeholder: _ctx.$t("please_select"),
              class: "w-50!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(SoundFileOptions), (item) => {
                    _push3(ssrRenderComponent(Option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex justify-between items-center w-full"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                          _push4(ssrRenderComponent(VolumeIcon, {
                            time: 100,
                            onClick: ($event) => unref(usePlayAudio)(unref(getAudioFileUrl)(item.value)[0])
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-between items-center w-full" }, [
                              createVNode("span", null, toDisplayString(item.label), 1),
                              createVNode(VolumeIcon, {
                                time: 100,
                                onClick: ($event) => unref(usePlayAudio)(unref(getAudioFileUrl)(item.value)[0])
                              }, null, 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(SoundFileOptions), (item) => {
                      return openBlock(), createBlock(Option, {
                        key: item.value,
                        label: item.label,
                        value: item.value
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-between items-center w-full" }, [
                            createVNode("span", null, toDisplayString(item.label), 1),
                            createVNode(VolumeIcon, {
                              time: 100,
                              onClick: ($event) => unref(usePlayAudio)(unref(getAudioFileUrl)(item.value)[0])
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Select, {
                modelValue: unref(settingStore).keyboardSoundFile,
                "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSoundFile = $event,
                placeholder: _ctx.$t("please_select"),
                class: "w-50!"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(SoundFileOptions), (item) => {
                    return openBlock(), createBlock(Option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", null, toDisplayString(item.label), 1),
                          createVNode(VolumeIcon, {
                            time: 100,
                            onClick: ($event) => unref(usePlayAudio)(unref(getAudioFileUrl)(item.value)[0])
                          }, null, 8, ["onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["label", "value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("volume")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, {
              modelValue: unref(settingStore).keyboardSoundVolume,
              "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSoundVolume = $event,
              showText: "",
              showValue: "",
              unit: "%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Slider, {
                modelValue: unref(settingStore).keyboardSoundVolume,
                "onUpdate:modelValue": ($event) => unref(settingStore).keyboardSoundVolume = $event,
                showText: "",
                showValue: "",
                unit: "%"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/CommonSetting.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CommonSetting = Object.assign(_sfc_main$2, { __name: "CommonSetting" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArticleSetting",
  __ssrInlineRender: true,
  setup(__props) {
    const settingStore = useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SettingItem, {
        mainTitle: _ctx.$t("sound_effect")
      }, null, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("auto_play_sentence")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).articleSound,
              "onUpdate:modelValue": ($event) => unref(settingStore).articleSound = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).articleSound,
                "onUpdate:modelValue": ($event) => unref(settingStore).articleSound = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("play_next_after_end")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).articleAutoPlayNext,
              "onUpdate:modelValue": ($event) => unref(settingStore).articleAutoPlayNext = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).articleAutoPlayNext,
                "onUpdate:modelValue": ($event) => unref(settingStore).articleAutoPlayNext = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("volume")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, {
              modelValue: unref(settingStore).articleSoundVolume,
              "onUpdate:modelValue": ($event) => unref(settingStore).articleSoundVolume = $event,
              showText: "",
              showValue: "",
              unit: "%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Slider, {
                modelValue: unref(settingStore).articleSoundVolume,
                "onUpdate:modelValue": ($event) => unref(settingStore).articleSoundVolume = $event,
                showText: "",
                showValue: "",
                unit: "%"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("speed")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, {
              modelValue: unref(settingStore).articleSoundSpeed,
              "onUpdate:modelValue": ($event) => unref(settingStore).articleSoundSpeed = $event,
              step: 0.1,
              min: 0.5,
              max: 3,
              showText: "",
              showValue: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Slider, {
                modelValue: unref(settingStore).articleSoundSpeed,
                "onUpdate:modelValue": ($event) => unref(settingStore).articleSoundSpeed = $event,
                step: 0.1,
                min: 0.5,
                max: 3,
                showText: "",
                showValue: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="line"></div>`);
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("ignore_symbols_numbers_names")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).ignoreSymbol,
              "onUpdate:modelValue": ($event) => unref(settingStore).ignoreSymbol = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).ignoreSymbol,
                "onUpdate:modelValue": ($event) => unref(settingStore).ignoreSymbol = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/ArticleSetting.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticleSetting = Object.assign(_sfc_main$1, { __name: "ArticleSetting" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WordSetting",
  __ssrInlineRender: true,
  setup(__props) {
    const settingStore = useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("show_prev_next_word"),
        desc: _ctx.$t("show_prev_next_word_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).showNearWord,
              "onUpdate:modelValue": ($event) => unref(settingStore).showNearWord = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).showNearWord,
                "onUpdate:modelValue": ($event) => unref(settingStore).showNearWord = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("disable_practice_setting_dialog"),
        desc: _ctx.$t("disable_practice_setting_dialog_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).disableShowPracticeSettingDialog,
              "onUpdate:modelValue": ($event) => unref(settingStore).disableShowPracticeSettingDialog = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).disableShowPracticeSettingDialog,
                "onUpdate:modelValue": ($event) => unref(settingStore).disableShowPracticeSettingDialog = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("clear_input_on_error")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).inputWrongClear,
              "onUpdate:modelValue": ($event) => unref(settingStore).inputWrongClear = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).inputWrongClear,
                "onUpdate:modelValue": ($event) => unref(settingStore).inputWrongClear = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("word_repeat_setting"),
        class: "gap-0!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(RadioGroup, {
              modelValue: unref(settingStore).repeatCount,
              "onUpdate:modelValue": ($event) => unref(settingStore).repeatCount = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Radio, {
                    value: 1,
                    size: "default"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`1`);
                      } else {
                        return [
                          createTextVNode("1")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Radio, {
                    value: 2,
                    size: "default"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`2`);
                      } else {
                        return [
                          createTextVNode("2")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Radio, {
                    value: 3,
                    size: "default"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`3`);
                      } else {
                        return [
                          createTextVNode("3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Radio, {
                    value: 5,
                    size: "default"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`5`);
                      } else {
                        return [
                          createTextVNode("5")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Radio, {
                    value: 100,
                    size: "default"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("custom"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("custom")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Radio, {
                      value: 1,
                      size: "default"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("1")
                      ]),
                      _: 1
                    }),
                    createVNode(Radio, {
                      value: 2,
                      size: "default"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("2")
                      ]),
                      _: 1
                    }),
                    createVNode(Radio, {
                      value: 3,
                      size: "default"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("3")
                      ]),
                      _: 1
                    }),
                    createVNode(Radio, {
                      value: 5,
                      size: "default"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("5")
                      ]),
                      _: 1
                    }),
                    createVNode(Radio, {
                      value: 100,
                      size: "default"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("custom")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(settingStore).repeatCount === 100) {
              _push2(`<div class="ml-2 center gap-space"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("repeat_count"))}</span>`);
              _push2(ssrRenderComponent(InputNumber, {
                modelValue: unref(settingStore).repeatCustomCount,
                "onUpdate:modelValue": ($event) => unref(settingStore).repeatCustomCount = $event,
                min: 6,
                max: 15,
                type: "number"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(RadioGroup, {
                modelValue: unref(settingStore).repeatCount,
                "onUpdate:modelValue": ($event) => unref(settingStore).repeatCount = $event
              }, {
                default: withCtx(() => [
                  createVNode(Radio, {
                    value: 1,
                    size: "default"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("1")
                    ]),
                    _: 1
                  }),
                  createVNode(Radio, {
                    value: 2,
                    size: "default"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("2")
                    ]),
                    _: 1
                  }),
                  createVNode(Radio, {
                    value: 3,
                    size: "default"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("3")
                    ]),
                    _: 1
                  }),
                  createVNode(Radio, {
                    value: 5,
                    size: "default"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("5")
                    ]),
                    _: 1
                  }),
                  createVNode(Radio, {
                    value: 100,
                    size: "default"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("custom")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              unref(settingStore).repeatCount === 100 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "ml-2 center gap-space"
              }, [
                createVNode("span", null, toDisplayString(_ctx.$t("repeat_count")), 1),
                createVNode(InputNumber, {
                  modelValue: unref(settingStore).repeatCustomCount,
                  "onUpdate:modelValue": ($event) => unref(settingStore).repeatCustomCount = $event,
                  min: 6,
                  max: 15,
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("review_ratio"),
        desc: _ctx.$t("review_ratio_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(InputNumber, {
              min: 0,
              max: 10,
              modelValue: unref(settingStore).wordReviewRatio,
              "onUpdate:modelValue": ($event) => unref(settingStore).wordReviewRatio = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(InputNumber, {
                min: 0,
                max: 10,
                modelValue: unref(settingStore).wordReviewRatio,
                "onUpdate:modelValue": ($event) => unref(settingStore).wordReviewRatio = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="line"></div>`);
      _push(ssrRenderComponent(SettingItem, {
        mainTitle: _ctx.$t("sound_effect")
      }, null, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("word_auto_pronunciation")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).wordSound,
              "onUpdate:modelValue": ($event) => unref(settingStore).wordSound = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).wordSound,
                "onUpdate:modelValue": ($event) => unref(settingStore).wordSound = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("volume")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, {
              modelValue: unref(settingStore).wordSoundVolume,
              "onUpdate:modelValue": ($event) => unref(settingStore).wordSoundVolume = $event,
              showText: "",
              showValue: "",
              unit: "%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Slider, {
                modelValue: unref(settingStore).wordSoundVolume,
                "onUpdate:modelValue": ($event) => unref(settingStore).wordSoundVolume = $event,
                showText: "",
                showValue: "",
                unit: "%"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("speed")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, {
              modelValue: unref(settingStore).wordSoundSpeed,
              "onUpdate:modelValue": ($event) => unref(settingStore).wordSoundSpeed = $event,
              step: 0.1,
              min: 0.5,
              max: 3,
              showText: "",
              showValue: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Slider, {
                modelValue: unref(settingStore).wordSoundSpeed,
                "onUpdate:modelValue": ($event) => unref(settingStore).wordSoundSpeed = $event,
                step: 0.1,
                min: 0.5,
                max: 3,
                showText: "",
                showValue: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="line"></div>`);
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("effect_sound")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).effectSound,
              "onUpdate:modelValue": ($event) => unref(settingStore).effectSound = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).effectSound,
                "onUpdate:modelValue": ($event) => unref(settingStore).effectSound = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("volume")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, {
              modelValue: unref(settingStore).effectSoundVolume,
              "onUpdate:modelValue": ($event) => unref(settingStore).effectSoundVolume = $event,
              showText: "",
              showValue: "",
              unit: "%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Slider, {
                modelValue: unref(settingStore).effectSoundVolume,
                "onUpdate:modelValue": ($event) => unref(settingStore).effectSoundVolume = $event,
                showText: "",
                showValue: "",
                unit: "%"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="line"></div>`);
      _push(ssrRenderComponent(SettingItem, {
        mainTitle: _ctx.$t("auto_switch")
      }, null, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("auto_next_word"),
        desc: _ctx.$t("auto_next_word_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Switch, {
              modelValue: unref(settingStore).autoNextWord,
              "onUpdate:modelValue": ($event) => unref(settingStore).autoNextWord = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Switch, {
                modelValue: unref(settingStore).autoNextWord,
                "onUpdate:modelValue": ($event) => unref(settingStore).autoNextWord = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("auto_next_word_time"),
        desc: _ctx.$t("auto_next_word_time_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(InputNumber, {
              modelValue: unref(settingStore).waitTimeForChangeWord,
              "onUpdate:modelValue": ($event) => unref(settingStore).waitTimeForChangeWord = $event,
              disabled: !unref(settingStore).autoNextWord,
              min: 0,
              max: 1e4,
              step: 100,
              type: "number"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-4"${_scopeId}>${ssrInterpolate(_ctx.$t("milliseconds"))}</span>`);
          } else {
            return [
              createVNode(InputNumber, {
                modelValue: unref(settingStore).waitTimeForChangeWord,
                "onUpdate:modelValue": ($event) => unref(settingStore).waitTimeForChangeWord = $event,
                disabled: !unref(settingStore).autoNextWord,
                min: 0,
                max: 1e4,
                step: 100,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
              createVNode("span", { class: "ml-4" }, toDisplayString(_ctx.$t("milliseconds")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="line"></div>`);
      _push(ssrRenderComponent(SettingItem, {
        mainTitle: _ctx.$t("font_setting")
      }, null, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("foreign_font")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, {
              min: 10,
              max: 100,
              modelValue: unref(settingStore).fontSize.wordForeignFontSize,
              "onUpdate:modelValue": ($event) => unref(settingStore).fontSize.wordForeignFontSize = $event,
              showText: "",
              showValue: "",
              unit: "px"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Slider, {
                min: 10,
                max: 100,
                modelValue: unref(settingStore).fontSize.wordForeignFontSize,
                "onUpdate:modelValue": ($event) => unref(settingStore).fontSize.wordForeignFontSize = $event,
                showText: "",
                showValue: "",
                unit: "px"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SettingItem, {
        title: _ctx.$t("chinese_font")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, {
              min: 10,
              max: 100,
              modelValue: unref(settingStore).fontSize.wordTranslateFontSize,
              "onUpdate:modelValue": ($event) => unref(settingStore).fontSize.wordTranslateFontSize = $event,
              showText: "",
              showValue: "",
              unit: "px"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Slider, {
                min: 10,
                max: 100,
                modelValue: unref(settingStore).fontSize.wordTranslateFontSize,
                "onUpdate:modelValue": ($event) => unref(settingStore).fontSize.wordTranslateFontSize = $event,
                showText: "",
                showValue: "",
                unit: "px"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/WordSetting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WordSetting = Object.assign(_sfc_main, { __name: "WordSetting" });
export {
  ArticleSetting as A,
  CommonSetting as C,
  WordSetting as W
};
//# sourceMappingURL=WordSetting-BBzklAbh.js.map
