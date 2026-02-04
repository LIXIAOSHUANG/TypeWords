import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, ref, computed, resolveComponent, withCtx, unref, createTextVNode, createVNode, isRef, createBlock, createCommentVNode, toDisplayString, Fragment, useSSRContext } from "vue";
import { _ as __unplugin_components_4 } from "./chevron-left28-filled-DoP3x3Jo.js";
import { B as BaseInput, _ as __unplugin_components_3 } from "./BaseInput-mlIHP8lZ.js";
import { _ as __unplugin_components_0$1 } from "./text-edit-style20-regular-f87qZqzd.js";
import { _ as __unplugin_components_0 } from "./person20-regular-CLEO4hFD.js";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { u as useUserStore, c as changePhoneApi, a as updateUserInfoApi, b as changeEmailApi, s as setPassword } from "./user-BLvskJR1.js";
import { useRouter } from "vue-router";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { C as CodeType, A as APP_NAME, E as EMAIL } from "./env-CUoXYOyW.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { p as passwordRules, c as codeRules, a as phoneRules, P as PHONE_CONFIG, C as Code, e as emailRules, b as PASSWORD_CONFIG } from "./Code-Dwe33Fdb.js";
import { d as cloneDeep, B as BaseIcon, j as jump2Feedback, T as Toast } from "./BaseIcon-Cnj57dgy.js";
import { F as Form, a as FormItem } from "./Form-CH4Dczim.js";
import { M as MessageBox } from "./MessageBox-DbYOvJFb.js";
import { h as _export_sfc } from "../server.mjs";
import "./eye16-regular-Cm9O3Lp0.js";
import "./event-qcx2F2JA.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
import "pinia";
import "@floating-ui/dom";
import "./interval-CYUoNYlE.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
import "idb-keyval";
import "axios";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "./Dialog-BoKDmA_Y.js";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/unctx/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/klona/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/destr/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ohash/dist/index.mjs";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
const _hoisted_1$2 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M14.5 3a2.5 2.5 0 0 1 2.495 2.336L17 5.5v9a2.5 2.5 0 0 1-2.336 2.495L14.5 17h-9a2.5 2.5 0 0 1-2.495-2.336L3 14.5v-9a2.5 2.5 0 0 1 2.336-2.495L5.5 3zM16 7H4v7.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16h9a1.5 1.5 0 0 0 1.493-1.355L16 14.5zm-4.484 1.234q.8 0 1.27.426q.469.426.469 1.152q0 .419-.215.745a1.5 1.5 0 0 1-.586.513q.445.207.685.567t.24.812q0 .75-.507 1.19q-.509.44-1.352.44q-.847 0-1.357-.442t-.51-1.188q0-.457.242-.82t.68-.559a1.5 1.5 0 0 1-.58-.513a1.33 1.33 0 0 1-.213-.745q0-.726.469-1.152t1.265-.426m-3.02.059V14h-.945V9.434l-1.395.476v-.8l2.219-.817zm3.016 3.168q-.413 0-.662.258q-.248.258-.248.683q0 .419.245.668q.244.25.673.25t.67-.242t.24-.676q0-.42-.252-.681q-.252-.26-.666-.26m.004-2.465q-.363 0-.574.229q-.21.228-.21.623q0 .39.212.62q.213.231.576.231q.364 0 .577-.23t.212-.621a.88.88 0 0 0-.214-.612a.74.74 0 0 0-.579-.24M14.5 4h-9a1.5 1.5 0 0 0-1.493 1.356L4 5.5V6h12v-.5a1.5 1.5 0 0 0-1.355-1.493z"
    }, null, -1)
  ])]);
}
const __unplugin_components_6 = markRaw({ name: "fluent-calendar-date20-regular", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M11.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M8.737 5.31L6.609 8.046a.5.5 0 0 1-.619.14L3.865 7.123a1.5 1.5 0 1 0-1.672.845l1.692 8.04A1.25 1.25 0 0 0 5.11 17h9.782a1.25 1.25 0 0 0 1.224-.992l1.692-8.04a1.5 1.5 0 1 0-1.672-.845L14.01 8.186a.5.5 0 0 1-.619-.14L11.263 5.31a1.5 1.5 0 1 0-2.526 0M10 5.313l2.602 3.346a1.5 1.5 0 0 0 1.855.42l2.34-1.17l-1.66 7.892a.25.25 0 0 1-.245.198H5.109a.25.25 0 0 1-.245-.198L3.203 7.91l2.34 1.17a1.5 1.5 0 0 0 1.855-.42z"
    }, null, -1)
  ])]);
}
const __unplugin_components_5 = markRaw({ name: "fluent-crown20-regular", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M15.848 1.143a.49.49 0 0 0-.702.001a.51.51 0 0 0 .008.712a6.57 6.57 0 0 1 1.855 5.567a.51.51 0 0 0 .42.574a.49.49 0 0 0 .563-.42a7.6 7.6 0 0 0-2.144-6.434M4.626 3.033a1.6 1.6 0 0 1 3.042-.626a1.6 1.6 0 0 1 2.588.699l.088.27a1.6 1.6 0 0 1 2.546.734l1.066 3.23l.584 1.704a8.5 8.5 0 0 1 .38 3.9l-.27 1.988a2.5 2.5 0 0 1-1.513 1.97l-2.158.901c-.972.406-2.068.148-2.804-.557c-3.11-2.982-5.879-3.97-6.64-4.199c-.358-.108-.664-.52-.474-.972c.15-.356.51-.98 1.281-1.321c.593-.263 1.361-.33 2.35-.068L2.765 5.101a1.613 1.613 0 0 1 1.027-2.028c.28-.091.566-.1.833-.04m2.151 3.645l.555 1.679a.5.5 0 1 1-.95.314l-.568-1.72l-.952-2.519l-.004-.01a.607.607 0 0 0-.756-.398a.613.613 0 0 0-.386.764l2.257 6.548a.5.5 0 0 1-.67.622c-1.332-.57-2.113-.486-2.556-.29c-.294.13-.49.333-.616.52c1.134.388 3.8 1.522 6.736 4.336c.474.454 1.153.596 1.727.357l2.157-.902a1.5 1.5 0 0 0 .908-1.181l.27-1.988a7.5 7.5 0 0 0-.335-3.442l-.585-1.707l-.002-.005l-1.067-3.234V4.42a.6.6 0 0 0-1.162.29l.855 2.633a.5.5 0 0 1-.95.312l-.005.001l-.83-2.556a2 2 0 0 1-.036-.13l-.506-1.554a.6.6 0 0 0-1.141.37l.603 1.856q.018.056.023.112l.527 1.592a.5.5 0 1 1-.95.314L6.794 2.91a.6.6 0 0 0-1.139.378l1.102 3.33l.023.06zm7.467-3.608a.5.5 0 0 1 .686.173l.296.495c.498.834.766 1.785.775 2.757a.5.5 0 1 1-1 .009a4.47 4.47 0 0 0-.633-2.253l-.296-.495a.5.5 0 0 1 .172-.686"
    }, null, -1)
  ])]);
}
const __unplugin_components_1 = markRaw({ name: "fluent-hand-wave20-regular", render });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter();
    let showChangePwd = ref(false);
    let showChangeEmail = ref(false);
    let showChangeUsername = ref(false);
    let showChangePhone = ref(false);
    let loading = ref(false);
    const handleLogout = () => {
      userStore.logout();
      router.push("/login");
    };
    let changePhoneFormRef = ref();
    let defaultFrom = { oldCode: "", phone: "", code: "", pwd: "" };
    let changePhoneForm = ref(cloneDeep(defaultFrom));
    let changePhoneFormRules = {
      oldCode: codeRules,
      phone: [
        ...phoneRules,
        {
          validator: (rule, value) => {
            if (userStore.user?.phone && value === userStore.user?.phone) {
              throw new Error("新手机号与原手机号一致");
            }
          },
          trigger: "blur"
        }
      ],
      code: codeRules,
      pwd: passwordRules
    };
    function showChangePhoneForm() {
      showChangePhone.value = showChangeUsername.value = showChangeEmail.value = showChangePwd.value = false;
      showChangePhone.value = true;
      changePhoneForm.value = cloneDeep(defaultFrom);
    }
    function changePhone() {
      changePhoneFormRef.value.validate(async (valid) => {
        if (valid) {
          try {
            loading.value = true;
            const res = await changePhoneApi(changePhoneForm.value);
            if (res.success) {
              Toast.success("修改成功");
              await userStore.fetchUserInfo();
              showChangePhone.value = false;
            } else {
              Toast.error(res.msg || "修改失败");
            }
          } catch (error) {
            Toast.error(error || "修改失败，请重试");
          } finally {
            loading.value = false;
          }
        }
      });
    }
    let changeUsernameFormRef = ref();
    let changeUsernameForm = ref({ username: "" });
    let changeUsernameFormRules = {
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }]
    };
    function showChangeUsernameForm() {
      showChangePhone.value = showChangeUsername.value = showChangeEmail.value = showChangePwd.value = false;
      showChangeUsername.value = true;
      changeUsernameForm.value = cloneDeep({ username: userStore.user?.username ?? "" });
    }
    function changeUsername() {
      changeUsernameFormRef.value.validate(async (valid) => {
        if (valid) {
          try {
            loading.value = true;
            const res = await updateUserInfoApi(changeUsernameForm.value);
            if (res.success) {
              Toast.success("修改成功");
              await userStore.fetchUserInfo();
              showChangeUsername.value = false;
            } else {
              Toast.error(res.msg || "修改失败");
            }
          } catch (error) {
            Toast.error(error || "修改失败，请重试");
          } finally {
            loading.value = false;
          }
        }
      });
    }
    let changeEmailFormRef = ref();
    let changeEmailForm = ref({
      email: "",
      pwd: "",
      code: ""
    });
    let changeEmailFormRules = {
      email: [
        ...emailRules,
        {
          validator: (rule, value) => {
            if (userStore.user?.email && value === userStore.user?.email) {
              throw new Error("该邮箱与当前一致");
            }
          },
          trigger: "blur"
        }
      ],
      pwd: passwordRules,
      code: codeRules
    };
    function showChangeEmailForm() {
      showChangePhone.value = showChangeUsername.value = showChangeEmail.value = showChangePwd.value = false;
      showChangeEmail.value = true;
      changeEmailForm.value = cloneDeep({ email: userStore.user?.email ?? "", pwd: "", code: "" });
    }
    function changeEmail() {
      changeEmailFormRef.value.validate(async (valid) => {
        if (valid) {
          try {
            loading.value = true;
            const res = await changeEmailApi(changeEmailForm.value);
            if (res.success) {
              Toast.success("修改成功");
              await userStore.fetchUserInfo();
              showChangeEmail.value = false;
            } else {
              Toast.error(res.msg || "修改失败");
            }
          } catch (error) {
            Toast.error(error || "修改失败，请重试");
          } finally {
            loading.value = false;
          }
        }
      });
    }
    let changePwdFormRef = ref();
    const defaultChangePwdForm = {
      oldPwd: "",
      newPwd: "",
      confirmPwd: ""
    };
    let changePwdForm = ref(cloneDeep(defaultChangePwdForm));
    let changePwdFormRules = {
      oldPwd: passwordRules,
      newPwd: passwordRules,
      confirmPwd: [
        { required: true, message: "请再次输入新密码", trigger: "blur" },
        {
          validator: (rule, value) => {
            if (value !== changePwdForm.value.newPwd) {
              throw new Error("两次密码输入不一致");
            }
          },
          trigger: "blur"
        }
      ]
    };
    function showChangePwdForm() {
      showChangePhone.value = showChangeUsername.value = showChangeEmail.value = showChangePwd.value = false;
      showChangePwd.value = true;
      changePwdForm.value = cloneDeep(defaultChangePwdForm);
    }
    function changePwd() {
      changePwdFormRef.value.validate(async (valid) => {
        if (valid) {
          try {
            loading.value = true;
            const res = await setPassword(changePwdForm.value);
            if (res.success) {
              Toast.success("密码设置成功，请重新登录");
              showChangePwd.value = false;
              userStore.logout();
            } else {
              Toast.error(res.msg || "设置失败");
            }
          } catch (error) {
            Toast.error(error || "设置密码失败，请重试");
          } finally {
            loading.value = false;
          }
        }
      });
    }
    const member = computed(() => userStore.user?.member ?? {});
    const memberEndDate = computed(() => {
      if (member.value?.endDate === null) return "永久";
      return member.value?.endDate;
    });
    function subscribe() {
      router.push("/vip");
    }
    function onFileChange(e) {
      console.log("e", e);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentPerson20Regular = __unplugin_components_0;
      const _component_IconFluentHandWave20Regular = __unplugin_components_1;
      const _component_router_link = resolveComponent("router-link");
      const _component_IconFluentTextEditStyle20Regular = __unplugin_components_0$1;
      const _component_IconFluentMail20Regular = __unplugin_components_3;
      const _component_IconFluentChevronLeft28Filled = __unplugin_components_4;
      const _component_IconFluentCrown20Regular = __unplugin_components_5;
      const _component_IconFluentCalendarDate20Regular = __unplugin_components_6;
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(userStore).isLogin) {
              _push2(`<div class="center h-screen" data-v-1543348a${_scopeId}><div class="card-white text-center flex-col gap-6 w-110" data-v-1543348a${_scopeId}><div class="w-20 h-20 bg-blue-100 rounded-full center mx-auto" data-v-1543348a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentPerson20Regular, { class: "text-3xl text-blue-600" }, null, _parent2, _scopeId));
              _push2(`</div><h1 class="text-2xl font-bold" data-v-1543348a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentHandWave20Regular, { class: "text-xl translate-y-1 mr-2 shrink-0" }, null, _parent2, _scopeId));
              _push2(`<span data-v-1543348a${_scopeId}>欢迎使用</span></h1><p class="" data-v-1543348a${_scopeId}>登录，开启您的学习之旅</p><div data-v-1543348a${_scopeId}>保存进度、同步数据、解锁个性化内容</div>`);
              _push2(ssrRenderComponent(BaseButton, {
                onClick: ($event) => unref(router).push("/login"),
                size: "large",
                class: "w-full mt-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 登录 `);
                  } else {
                    return [
                      createTextVNode(" 登录 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-sm text-gray-500" data-v-1543348a${_scopeId}> 还没有账户？ `);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/login?register=1",
                class: "line"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`立即注册`);
                  } else {
                    return [
                      createTextVNode("立即注册")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p></div></div>`);
            } else {
              _push2(`<div class="w-full flex gap-4" data-v-1543348a${_scopeId}><div class="card-white flex-1 flex flex-col gap-2 px-6" data-v-1543348a${_scopeId}><h1 class="text-2xl font-bold mt-0" data-v-1543348a${_scopeId}>帐户</h1><div class="item" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="mb-2" data-v-1543348a${_scopeId}>用户名</div>`);
              if (unref(userStore).user?.username) {
                _push2(`<div class="flex items-center gap-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentPerson20Regular, { class: "text-base" }, null, _parent2, _scopeId));
                _push2(`<span data-v-1543348a${_scopeId}>${ssrInterpolate(unref(userStore).user?.username)}</span></div>`);
              } else {
                _push2(`<div class="text-xs" data-v-1543348a${_scopeId}>在此设置用户名</div>`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(BaseIcon, { onClick: showChangeUsernameForm }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconFluentTextEditStyle20Regular, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_IconFluentTextEditStyle20Regular)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(showChangeUsername)) {
                _push2(`<div data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(Form, {
                  ref_key: "changeUsernameFormRef",
                  ref: changeUsernameFormRef,
                  rules: unref(changeUsernameFormRules),
                  model: unref(changeUsernameForm)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(FormItem, { prop: "username" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(BaseInput, {
                              modelValue: unref(changeUsernameForm).username,
                              "onUpdate:modelValue": ($event) => unref(changeUsernameForm).username = $event,
                              type: "text",
                              size: "large",
                              placeholder: "请输入用户名",
                              autofocus: ""
                            }, {
                              preIcon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_IconFluentPerson20Regular, { class: "text-base" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_IconFluentPerson20Regular, { class: "text-base" })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(BaseInput, {
                                modelValue: unref(changeUsernameForm).username,
                                "onUpdate:modelValue": ($event) => unref(changeUsernameForm).username = $event,
                                type: "text",
                                size: "large",
                                placeholder: "请输入用户名",
                                autofocus: ""
                              }, {
                                preIcon: withCtx(() => [
                                  createVNode(_component_IconFluentPerson20Regular, { class: "text-base" })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(FormItem, { prop: "username" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changeUsernameForm).username,
                              "onUpdate:modelValue": ($event) => unref(changeUsernameForm).username = $event,
                              type: "text",
                              size: "large",
                              placeholder: "请输入用户名",
                              autofocus: ""
                            }, {
                              preIcon: withCtx(() => [
                                createVNode(_component_IconFluentPerson20Regular, { class: "text-base" })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="text-align-end mb-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(BaseButton, {
                  type: "info",
                  onClick: ($event) => isRef(showChangeUsername) ? showChangeUsername.value = false : showChangeUsername = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`取消`);
                    } else {
                      return [
                        createTextVNode("取消")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(BaseButton, { onClick: changeUsername }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`保存`);
                    } else {
                      return [
                        createTextVNode("保存")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="line" data-v-1543348a${_scopeId}></div><div class="item" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="mb-2" data-v-1543348a${_scopeId}>手机号</div>`);
              if (unref(userStore).user?.phone) {
                _push2(`<div class="flex items-center gap-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentMail20Regular, { class: "text-base" }, null, _parent2, _scopeId));
                _push2(`<span data-v-1543348a${_scopeId}>${ssrInterpolate(unref(userStore).user?.phone)}</span></div>`);
              } else {
                _push2(`<div class="text-xs" data-v-1543348a${_scopeId}>在此设置手机号</div>`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(BaseIcon, { onClick: showChangePhoneForm }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconFluentTextEditStyle20Regular, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_IconFluentTextEditStyle20Regular)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(showChangePhone)) {
                _push2(`<div data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(Form, {
                  ref_key: "changePhoneFormRef",
                  ref: changePhoneFormRef,
                  rules: unref(changePhoneFormRules),
                  model: unref(changePhoneForm)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (unref(userStore).user?.phone) {
                        _push3(ssrRenderComponent(FormItem, { prop: "oldCode" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="flex gap-2" data-v-1543348a${_scopeId3}>`);
                              _push4(ssrRenderComponent(BaseInput, {
                                modelValue: unref(changePhoneForm).oldCode,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).oldCode = $event,
                                type: "code",
                                autofocus: "",
                                placeholder: "请输入原手机号验证码",
                                "max-length": unref(PHONE_CONFIG).codeLength
                              }, null, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(Code, {
                                "validate-field": () => true,
                                type: unref(CodeType).ChangePhoneOld,
                                val: unref(userStore).user.phone
                              }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode(BaseInput, {
                                    modelValue: unref(changePhoneForm).oldCode,
                                    "onUpdate:modelValue": ($event) => unref(changePhoneForm).oldCode = $event,
                                    type: "code",
                                    autofocus: "",
                                    placeholder: "请输入原手机号验证码",
                                    "max-length": unref(PHONE_CONFIG).codeLength
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                                  createVNode(Code, {
                                    "validate-field": () => true,
                                    type: unref(CodeType).ChangePhoneOld,
                                    val: unref(userStore).user.phone
                                  }, null, 8, ["type", "val"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(FormItem, { prop: "phone" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(BaseInput, {
                              modelValue: unref(changePhoneForm).phone,
                              "onUpdate:modelValue": ($event) => unref(changePhoneForm).phone = $event,
                              type: "tel",
                              size: "large",
                              placeholder: "请输入新手机号"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(BaseInput, {
                                modelValue: unref(changePhoneForm).phone,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).phone = $event,
                                type: "tel",
                                size: "large",
                                placeholder: "请输入新手机号"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(FormItem, { prop: "code" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex gap-2" data-v-1543348a${_scopeId3}>`);
                            _push4(ssrRenderComponent(BaseInput, {
                              modelValue: unref(changePhoneForm).code,
                              "onUpdate:modelValue": ($event) => unref(changePhoneForm).code = $event,
                              type: "code",
                              placeholder: "请输入新手机号验证码",
                              "max-length": unref(PHONE_CONFIG).codeLength
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(Code, {
                              "validate-field": () => unref(changePhoneFormRef).validateField("phone"),
                              type: unref(CodeType).ChangePhoneNew,
                              val: unref(changePhoneForm).phone
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode(BaseInput, {
                                  modelValue: unref(changePhoneForm).code,
                                  "onUpdate:modelValue": ($event) => unref(changePhoneForm).code = $event,
                                  type: "code",
                                  placeholder: "请输入新手机号验证码",
                                  "max-length": unref(PHONE_CONFIG).codeLength
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                                createVNode(Code, {
                                  "validate-field": () => unref(changePhoneFormRef).validateField("phone"),
                                  type: unref(CodeType).ChangePhoneNew,
                                  val: unref(changePhoneForm).phone
                                }, null, 8, ["validate-field", "type", "val"])
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      if (!unref(userStore).user?.phone) {
                        _push3(ssrRenderComponent(FormItem, { prop: "pwd" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(BaseInput, {
                                modelValue: unref(changePhoneForm).pwd,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).pwd = $event,
                                type: "password",
                                size: "large",
                                placeholder: "请输入原密码"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(BaseInput, {
                                  modelValue: unref(changePhoneForm).pwd,
                                  "onUpdate:modelValue": ($event) => unref(changePhoneForm).pwd = $event,
                                  type: "password",
                                  size: "large",
                                  placeholder: "请输入原密码"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        unref(userStore).user?.phone ? (openBlock(), createBlock(FormItem, {
                          key: 0,
                          prop: "oldCode"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(BaseInput, {
                                modelValue: unref(changePhoneForm).oldCode,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).oldCode = $event,
                                type: "code",
                                autofocus: "",
                                placeholder: "请输入原手机号验证码",
                                "max-length": unref(PHONE_CONFIG).codeLength
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                              createVNode(Code, {
                                "validate-field": () => true,
                                type: unref(CodeType).ChangePhoneOld,
                                val: unref(userStore).user.phone
                              }, null, 8, ["type", "val"])
                            ])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(FormItem, { prop: "phone" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePhoneForm).phone,
                              "onUpdate:modelValue": ($event) => unref(changePhoneForm).phone = $event,
                              type: "tel",
                              size: "large",
                              placeholder: "请输入新手机号"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(FormItem, { prop: "code" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(BaseInput, {
                                modelValue: unref(changePhoneForm).code,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).code = $event,
                                type: "code",
                                placeholder: "请输入新手机号验证码",
                                "max-length": unref(PHONE_CONFIG).codeLength
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                              createVNode(Code, {
                                "validate-field": () => unref(changePhoneFormRef).validateField("phone"),
                                type: unref(CodeType).ChangePhoneNew,
                                val: unref(changePhoneForm).phone
                              }, null, 8, ["validate-field", "type", "val"])
                            ])
                          ]),
                          _: 1
                        }),
                        !unref(userStore).user?.phone ? (openBlock(), createBlock(FormItem, {
                          key: 1,
                          prop: "pwd"
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePhoneForm).pwd,
                              "onUpdate:modelValue": ($event) => unref(changePhoneForm).pwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "请输入原密码"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="flex justify-between items-end mb-2" data-v-1543348a${_scopeId}>`);
                if (unref(userStore).user?.phone) {
                  _push2(`<span class="link text-sm cp" data-v-1543348a${_scopeId}>原手机号不可用，点此申诉</span>`);
                } else {
                  _push2(`<span data-v-1543348a${_scopeId}></span>`);
                }
                _push2(`<div data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(BaseButton, {
                  type: "info",
                  onClick: ($event) => isRef(showChangePhone) ? showChangePhone.value = false : showChangePhone = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`取消`);
                    } else {
                      return [
                        createTextVNode("取消")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(BaseButton, { onClick: changePhone }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`保存`);
                    } else {
                      return [
                        createTextVNode("保存")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="line" data-v-1543348a${_scopeId}></div><div class="item" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="mb-2" data-v-1543348a${_scopeId}>电子邮箱</div>`);
              if (unref(userStore).user?.email) {
                _push2(`<div class="flex items-center gap-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentMail20Regular, { class: "text-base" }, null, _parent2, _scopeId));
                _push2(`<span data-v-1543348a${_scopeId}>${ssrInterpolate(unref(userStore).user?.email)}</span></div>`);
              } else {
                _push2(`<div class="text-xs" data-v-1543348a${_scopeId}>在此设置邮箱</div>`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(BaseIcon, { onClick: showChangeEmailForm }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconFluentTextEditStyle20Regular, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_IconFluentTextEditStyle20Regular)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(showChangeEmail)) {
                _push2(`<div data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(Form, {
                  ref_key: "changeEmailFormRef",
                  ref: changeEmailFormRef,
                  rules: unref(changeEmailFormRules),
                  model: unref(changeEmailForm)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(FormItem, { prop: "email" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(BaseInput, {
                              modelValue: unref(changeEmailForm).email,
                              "onUpdate:modelValue": ($event) => unref(changeEmailForm).email = $event,
                              type: "email",
                              size: "large",
                              placeholder: "请输入邮箱地址",
                              autofocus: ""
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(BaseInput, {
                                modelValue: unref(changeEmailForm).email,
                                "onUpdate:modelValue": ($event) => unref(changeEmailForm).email = $event,
                                type: "email",
                                size: "large",
                                placeholder: "请输入邮箱地址",
                                autofocus: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(FormItem, { prop: "code" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex gap-2" data-v-1543348a${_scopeId3}>`);
                            _push4(ssrRenderComponent(BaseInput, {
                              modelValue: unref(changeEmailForm).code,
                              "onUpdate:modelValue": ($event) => unref(changeEmailForm).code = $event,
                              type: "code",
                              placeholder: "请输入验证码",
                              "max-length": unref(PHONE_CONFIG).codeLength
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(Code, {
                              "validate-field": () => unref(changeEmailFormRef).validateField("email"),
                              type: unref(CodeType).ChangeEmail,
                              val: unref(changeEmailForm).email
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode(BaseInput, {
                                  modelValue: unref(changeEmailForm).code,
                                  "onUpdate:modelValue": ($event) => unref(changeEmailForm).code = $event,
                                  type: "code",
                                  placeholder: "请输入验证码",
                                  "max-length": unref(PHONE_CONFIG).codeLength
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                                createVNode(Code, {
                                  "validate-field": () => unref(changeEmailFormRef).validateField("email"),
                                  type: unref(CodeType).ChangeEmail,
                                  val: unref(changeEmailForm).email
                                }, null, 8, ["validate-field", "type", "val"])
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      if (unref(userStore).user?.hasPwd) {
                        _push3(ssrRenderComponent(FormItem, { prop: "pwd" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(BaseInput, {
                                modelValue: unref(changePwdForm).pwd,
                                "onUpdate:modelValue": ($event) => unref(changePwdForm).pwd = $event,
                                type: "password",
                                size: "large",
                                placeholder: "请输入密码"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(BaseInput, {
                                  modelValue: unref(changePwdForm).pwd,
                                  "onUpdate:modelValue": ($event) => unref(changePwdForm).pwd = $event,
                                  type: "password",
                                  size: "large",
                                  placeholder: "请输入密码"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode(FormItem, { prop: "email" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changeEmailForm).email,
                              "onUpdate:modelValue": ($event) => unref(changeEmailForm).email = $event,
                              type: "email",
                              size: "large",
                              placeholder: "请输入邮箱地址",
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(FormItem, { prop: "code" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(BaseInput, {
                                modelValue: unref(changeEmailForm).code,
                                "onUpdate:modelValue": ($event) => unref(changeEmailForm).code = $event,
                                type: "code",
                                placeholder: "请输入验证码",
                                "max-length": unref(PHONE_CONFIG).codeLength
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                              createVNode(Code, {
                                "validate-field": () => unref(changeEmailFormRef).validateField("email"),
                                type: unref(CodeType).ChangeEmail,
                                val: unref(changeEmailForm).email
                              }, null, 8, ["validate-field", "type", "val"])
                            ])
                          ]),
                          _: 1
                        }),
                        unref(userStore).user?.hasPwd ? (openBlock(), createBlock(FormItem, {
                          key: 0,
                          prop: "pwd"
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).pwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).pwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "请输入密码"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="text-align-end mb-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(BaseButton, {
                  type: "info",
                  onClick: ($event) => isRef(showChangeEmail) ? showChangeEmail.value = false : showChangeEmail = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`取消`);
                    } else {
                      return [
                        createTextVNode("取消")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(BaseButton, { onClick: changeEmail }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`保存`);
                    } else {
                      return [
                        createTextVNode("保存")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="line" data-v-1543348a${_scopeId}></div><div class="item" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="mb-2" data-v-1543348a${_scopeId}>设置密码</div><div class="text-xs" data-v-1543348a${_scopeId}>在此输入密码</div></div>`);
              _push2(ssrRenderComponent(BaseIcon, { onClick: showChangePwdForm }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconFluentTextEditStyle20Regular, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_IconFluentTextEditStyle20Regular)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(showChangePwd)) {
                _push2(`<div data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(Form, {
                  ref_key: "changePwdFormRef",
                  ref: changePwdFormRef,
                  rules: unref(changePwdFormRules),
                  model: unref(changePwdForm)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (unref(userStore).user.hasPwd) {
                        _push3(ssrRenderComponent(FormItem, { prop: "oldPwd" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(BaseInput, {
                                modelValue: unref(changePwdForm).oldPwd,
                                "onUpdate:modelValue": ($event) => unref(changePwdForm).oldPwd = $event,
                                placeholder: "旧密码",
                                type: "password",
                                size: "large",
                                autofocus: ""
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(BaseInput, {
                                  modelValue: unref(changePwdForm).oldPwd,
                                  "onUpdate:modelValue": ($event) => unref(changePwdForm).oldPwd = $event,
                                  placeholder: "旧密码",
                                  type: "password",
                                  size: "large",
                                  autofocus: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(FormItem, { prop: "newPwd" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(BaseInput, {
                              modelValue: unref(changePwdForm).newPwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).newPwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: `请输入新密码（${unref(PASSWORD_CONFIG).minLength}-${unref(PASSWORD_CONFIG).maxLength}位）`,
                              min: unref(PASSWORD_CONFIG).minLength,
                              max: unref(PASSWORD_CONFIG).maxLength,
                              autofocus: ""
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(BaseInput, {
                                modelValue: unref(changePwdForm).newPwd,
                                "onUpdate:modelValue": ($event) => unref(changePwdForm).newPwd = $event,
                                type: "password",
                                size: "large",
                                placeholder: `请输入新密码（${unref(PASSWORD_CONFIG).minLength}-${unref(PASSWORD_CONFIG).maxLength}位）`,
                                min: unref(PASSWORD_CONFIG).minLength,
                                max: unref(PASSWORD_CONFIG).maxLength,
                                autofocus: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "min", "max"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(FormItem, { prop: "confirmPwd" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(BaseInput, {
                              modelValue: unref(changePwdForm).confirmPwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).confirmPwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "请再次输入新密码",
                              min: unref(PASSWORD_CONFIG).minLength,
                              max: unref(PASSWORD_CONFIG).maxLength
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(BaseInput, {
                                modelValue: unref(changePwdForm).confirmPwd,
                                "onUpdate:modelValue": ($event) => unref(changePwdForm).confirmPwd = $event,
                                type: "password",
                                size: "large",
                                placeholder: "请再次输入新密码",
                                min: unref(PASSWORD_CONFIG).minLength,
                                max: unref(PASSWORD_CONFIG).maxLength
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "max"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        unref(userStore).user.hasPwd ? (openBlock(), createBlock(FormItem, {
                          key: 0,
                          prop: "oldPwd"
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).oldPwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).oldPwd = $event,
                              placeholder: "旧密码",
                              type: "password",
                              size: "large",
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(FormItem, { prop: "newPwd" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).newPwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).newPwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: `请输入新密码（${unref(PASSWORD_CONFIG).minLength}-${unref(PASSWORD_CONFIG).maxLength}位）`,
                              min: unref(PASSWORD_CONFIG).minLength,
                              max: unref(PASSWORD_CONFIG).maxLength,
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "min", "max"])
                          ]),
                          _: 1
                        }),
                        createVNode(FormItem, { prop: "confirmPwd" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).confirmPwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).confirmPwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "请再次输入新密码",
                              min: unref(PASSWORD_CONFIG).minLength,
                              max: unref(PASSWORD_CONFIG).maxLength
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "max"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="text-align-end mb-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(BaseButton, {
                  type: "info",
                  onClick: ($event) => isRef(showChangePwd) ? showChangePwd.value = false : showChangePwd = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`取消`);
                    } else {
                      return [
                        createTextVNode("取消")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(BaseButton, {
                  loading: unref(loading),
                  onClick: changePwd
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`保存`);
                    } else {
                      return [
                        createTextVNode("保存")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="line" data-v-1543348a${_scopeId}></div>`);
              {
                _push2(`<!---->`);
              }
              _push2(`<div class="item cp relative" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="" data-v-1543348a${_scopeId}>同步进度</div></div>`);
              _push2(ssrRenderComponent(_component_IconFluentChevronLeft28Filled, { class: "rotate-180" }, null, _parent2, _scopeId));
              _push2(`<input type="file" accept=".json,.zip,application/json,application/zip" class="absolute left-0 top-0 w-full h-full bg-red cp opacity-0" data-v-1543348a${_scopeId}></div><div class="line" data-v-1543348a${_scopeId}></div><div class="item cp" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}>给 ${ssrInterpolate(unref(APP_NAME))} 提交意见</div>`);
              _push2(ssrRenderComponent(_component_IconFluentChevronLeft28Filled, { class: "rotate-180" }, null, _parent2, _scopeId));
              _push2(`</div><div class="line" data-v-1543348a${_scopeId}></div><div class="center w-full mt-4" data-v-1543348a${_scopeId}>`);
              _push2(ssrRenderComponent(BaseButton, {
                onClick: handleLogout,
                size: "large",
                class: "w-[40%]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 登出 `);
                  } else {
                    return [
                      createTextVNode(" 登出 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-xs text-center mt-2" data-v-1543348a${_scopeId}><a href="/user-agreement.html" target="_blank" class="text-gray-500 hover:text-gray-700" data-v-1543348a${_scopeId}>用户协议</a> 、 <a href="/privacy-policy.html" target="_blank" class="text-gray-500 hover:text-gray-700" data-v-1543348a${_scopeId}>隐私政策</a></div></div><div class="card-white w-80" data-v-1543348a${_scopeId}><div class="flex items-center gap-3 mb-4" data-v-1543348a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentCrown20Regular, { class: "text-2xl text-yellow-500" }, null, _parent2, _scopeId));
              _push2(`<div class="text-lg font-bold" data-v-1543348a${_scopeId}>订阅信息</div></div><div class="space-y-4" data-v-1543348a${_scopeId}>`);
              if (unref(userStore).user?.member) {
                _push2(`<!--[--><div data-v-1543348a${_scopeId}><div class="mb-1" data-v-1543348a${_scopeId}>当前计划</div><div class="text-base font-bold" data-v-1543348a${_scopeId}>${ssrInterpolate(member.value?.planDesc)}</div></div><div data-v-1543348a${_scopeId}><div class="mb-1" data-v-1543348a${_scopeId}>状态</div><div class="flex items-center gap-2" data-v-1543348a${_scopeId}><div class="${ssrRenderClass([member.value?.active ? "bg-green-500" : "bg-red-500", "w-2 h-2 rounded-full"])}" data-v-1543348a${_scopeId}></div><span class="${ssrRenderClass([member.value?.active ? "text-green-700" : "text-red-700", "text-base font-medium"])}" data-v-1543348a${_scopeId}>${ssrInterpolate(member.value?.status)}</span></div></div><div data-v-1543348a${_scopeId}><div class="mb-1" data-v-1543348a${_scopeId}>到期时间</div><div class="flex items-center gap-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentCalendarDate20Regular, { class: "text-lg" }, null, _parent2, _scopeId));
                _push2(`<span class="text-base font-medium" data-v-1543348a${_scopeId}>${ssrInterpolate(memberEndDate.value)}</span></div></div><div data-v-1543348a${_scopeId}><div class="mb-1" data-v-1543348a${_scopeId}>自动续费</div><div class="flex items-center gap-2" data-v-1543348a${_scopeId}><div class="${ssrRenderClass([member.value?.autoRenew ? "bg-blue-500" : "bg-gray-400", "w-2 h-2 rounded-full"])}" data-v-1543348a${_scopeId}></div><span class="${ssrRenderClass([member.value?.autoRenew ? "text-blue-700" : "text-gray-600", "text-base font-medium"])}" data-v-1543348a${_scopeId}>${ssrInterpolate(member.value?.autoRenew ? "已开启" : "已关闭")}</span></div></div><!--]-->`);
              } else {
                _push2(`<div class="text-base" data-v-1543348a${_scopeId}>当前无订阅</div>`);
              }
              _push2(ssrRenderComponent(BaseButton, {
                class: "w-full",
                size: "large",
                onClick: subscribe
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(userStore).user?.member ? "管理订阅" : "会员介绍")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(userStore).user?.member ? "管理订阅" : "会员介绍"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            }
          } else {
            return [
              !unref(userStore).isLogin ? (openBlock(), createBlock("div", {
                key: 0,
                class: "center h-screen"
              }, [
                createVNode("div", { class: "card-white text-center flex-col gap-6 w-110" }, [
                  createVNode("div", { class: "w-20 h-20 bg-blue-100 rounded-full center mx-auto" }, [
                    createVNode(_component_IconFluentPerson20Regular, { class: "text-3xl text-blue-600" })
                  ]),
                  createVNode("h1", { class: "text-2xl font-bold" }, [
                    createVNode(_component_IconFluentHandWave20Regular, { class: "text-xl translate-y-1 mr-2 shrink-0" }),
                    createVNode("span", null, "欢迎使用")
                  ]),
                  createVNode("p", { class: "" }, "登录，开启您的学习之旅"),
                  createVNode("div", null, "保存进度、同步数据、解锁个性化内容"),
                  createVNode(BaseButton, {
                    onClick: ($event) => unref(router).push("/login"),
                    size: "large",
                    class: "w-full mt-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 登录 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("p", { class: "text-sm text-gray-500" }, [
                    createTextVNode(" 还没有账户？ "),
                    createVNode(_component_router_link, {
                      to: "/login?register=1",
                      class: "line"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("立即注册")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "w-full flex gap-4"
              }, [
                createVNode("div", { class: "card-white flex-1 flex flex-col gap-2 px-6" }, [
                  createVNode("h1", { class: "text-2xl font-bold mt-0" }, "帐户"),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "mb-2" }, "用户名"),
                      unref(userStore).user?.username ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_IconFluentPerson20Regular, { class: "text-base" }),
                        createVNode("span", null, toDisplayString(unref(userStore).user?.username), 1)
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-xs"
                      }, "在此设置用户名"))
                    ]),
                    createVNode(BaseIcon, { onClick: showChangeUsernameForm }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFluentTextEditStyle20Regular)
                      ]),
                      _: 1
                    })
                  ]),
                  unref(showChangeUsername) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(Form, {
                      ref_key: "changeUsernameFormRef",
                      ref: changeUsernameFormRef,
                      rules: unref(changeUsernameFormRules),
                      model: unref(changeUsernameForm)
                    }, {
                      default: withCtx(() => [
                        createVNode(FormItem, { prop: "username" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changeUsernameForm).username,
                              "onUpdate:modelValue": ($event) => unref(changeUsernameForm).username = $event,
                              type: "text",
                              size: "large",
                              placeholder: "请输入用户名",
                              autofocus: ""
                            }, {
                              preIcon: withCtx(() => [
                                createVNode(_component_IconFluentPerson20Regular, { class: "text-base" })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["rules", "model"]),
                    createVNode("div", { class: "text-align-end mb-2" }, [
                      createVNode(BaseButton, {
                        type: "info",
                        onClick: ($event) => isRef(showChangeUsername) ? showChangeUsername.value = false : showChangeUsername = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("取消")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(BaseButton, { onClick: changeUsername }, {
                        default: withCtx(() => [
                          createTextVNode("保存")
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "line" }),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "mb-2" }, "手机号"),
                      unref(userStore).user?.phone ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_IconFluentMail20Regular, { class: "text-base" }),
                        createVNode("span", null, toDisplayString(unref(userStore).user?.phone), 1)
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-xs"
                      }, "在此设置手机号"))
                    ]),
                    createVNode(BaseIcon, { onClick: showChangePhoneForm }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFluentTextEditStyle20Regular)
                      ]),
                      _: 1
                    })
                  ]),
                  unref(showChangePhone) ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(Form, {
                      ref_key: "changePhoneFormRef",
                      ref: changePhoneFormRef,
                      rules: unref(changePhoneFormRules),
                      model: unref(changePhoneForm)
                    }, {
                      default: withCtx(() => [
                        unref(userStore).user?.phone ? (openBlock(), createBlock(FormItem, {
                          key: 0,
                          prop: "oldCode"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(BaseInput, {
                                modelValue: unref(changePhoneForm).oldCode,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).oldCode = $event,
                                type: "code",
                                autofocus: "",
                                placeholder: "请输入原手机号验证码",
                                "max-length": unref(PHONE_CONFIG).codeLength
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                              createVNode(Code, {
                                "validate-field": () => true,
                                type: unref(CodeType).ChangePhoneOld,
                                val: unref(userStore).user.phone
                              }, null, 8, ["type", "val"])
                            ])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(FormItem, { prop: "phone" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePhoneForm).phone,
                              "onUpdate:modelValue": ($event) => unref(changePhoneForm).phone = $event,
                              type: "tel",
                              size: "large",
                              placeholder: "请输入新手机号"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(FormItem, { prop: "code" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(BaseInput, {
                                modelValue: unref(changePhoneForm).code,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).code = $event,
                                type: "code",
                                placeholder: "请输入新手机号验证码",
                                "max-length": unref(PHONE_CONFIG).codeLength
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                              createVNode(Code, {
                                "validate-field": () => unref(changePhoneFormRef).validateField("phone"),
                                type: unref(CodeType).ChangePhoneNew,
                                val: unref(changePhoneForm).phone
                              }, null, 8, ["validate-field", "type", "val"])
                            ])
                          ]),
                          _: 1
                        }),
                        !unref(userStore).user?.phone ? (openBlock(), createBlock(FormItem, {
                          key: 1,
                          prop: "pwd"
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePhoneForm).pwd,
                              "onUpdate:modelValue": ($event) => unref(changePhoneForm).pwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "请输入原密码"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["rules", "model"]),
                    createVNode("div", { class: "flex justify-between items-end mb-2" }, [
                      unref(userStore).user?.phone ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "link text-sm cp",
                        onClick: ($event) => unref(MessageBox).notice(`请提供证明信息发送邮件到 ${unref(EMAIL)} 进行申诉`, "人工申诉")
                      }, "原手机号不可用，点此申诉", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 1 })),
                      createVNode("div", null, [
                        createVNode(BaseButton, {
                          type: "info",
                          onClick: ($event) => isRef(showChangePhone) ? showChangePhone.value = false : showChangePhone = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("取消")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(BaseButton, { onClick: changePhone }, {
                          default: withCtx(() => [
                            createTextVNode("保存")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "line" }),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "mb-2" }, "电子邮箱"),
                      unref(userStore).user?.email ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_IconFluentMail20Regular, { class: "text-base" }),
                        createVNode("span", null, toDisplayString(unref(userStore).user?.email), 1)
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-xs"
                      }, "在此设置邮箱"))
                    ]),
                    createVNode(BaseIcon, { onClick: showChangeEmailForm }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFluentTextEditStyle20Regular)
                      ]),
                      _: 1
                    })
                  ]),
                  unref(showChangeEmail) ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(Form, {
                      ref_key: "changeEmailFormRef",
                      ref: changeEmailFormRef,
                      rules: unref(changeEmailFormRules),
                      model: unref(changeEmailForm)
                    }, {
                      default: withCtx(() => [
                        createVNode(FormItem, { prop: "email" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changeEmailForm).email,
                              "onUpdate:modelValue": ($event) => unref(changeEmailForm).email = $event,
                              type: "email",
                              size: "large",
                              placeholder: "请输入邮箱地址",
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(FormItem, { prop: "code" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(BaseInput, {
                                modelValue: unref(changeEmailForm).code,
                                "onUpdate:modelValue": ($event) => unref(changeEmailForm).code = $event,
                                type: "code",
                                placeholder: "请输入验证码",
                                "max-length": unref(PHONE_CONFIG).codeLength
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max-length"]),
                              createVNode(Code, {
                                "validate-field": () => unref(changeEmailFormRef).validateField("email"),
                                type: unref(CodeType).ChangeEmail,
                                val: unref(changeEmailForm).email
                              }, null, 8, ["validate-field", "type", "val"])
                            ])
                          ]),
                          _: 1
                        }),
                        unref(userStore).user?.hasPwd ? (openBlock(), createBlock(FormItem, {
                          key: 0,
                          prop: "pwd"
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).pwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).pwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "请输入密码"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["rules", "model"]),
                    createVNode("div", { class: "text-align-end mb-2" }, [
                      createVNode(BaseButton, {
                        type: "info",
                        onClick: ($event) => isRef(showChangeEmail) ? showChangeEmail.value = false : showChangeEmail = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("取消")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(BaseButton, { onClick: changeEmail }, {
                        default: withCtx(() => [
                          createTextVNode("保存")
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "line" }),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "mb-2" }, "设置密码"),
                      createVNode("div", { class: "text-xs" }, "在此输入密码")
                    ]),
                    createVNode(BaseIcon, { onClick: showChangePwdForm }, {
                      default: withCtx(() => [
                        createVNode(_component_IconFluentTextEditStyle20Regular)
                      ]),
                      _: 1
                    })
                  ]),
                  unref(showChangePwd) ? (openBlock(), createBlock("div", { key: 3 }, [
                    createVNode(Form, {
                      ref_key: "changePwdFormRef",
                      ref: changePwdFormRef,
                      rules: unref(changePwdFormRules),
                      model: unref(changePwdForm)
                    }, {
                      default: withCtx(() => [
                        unref(userStore).user.hasPwd ? (openBlock(), createBlock(FormItem, {
                          key: 0,
                          prop: "oldPwd"
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).oldPwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).oldPwd = $event,
                              placeholder: "旧密码",
                              type: "password",
                              size: "large",
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(FormItem, { prop: "newPwd" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).newPwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).newPwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: `请输入新密码（${unref(PASSWORD_CONFIG).minLength}-${unref(PASSWORD_CONFIG).maxLength}位）`,
                              min: unref(PASSWORD_CONFIG).minLength,
                              max: unref(PASSWORD_CONFIG).maxLength,
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "min", "max"])
                          ]),
                          _: 1
                        }),
                        createVNode(FormItem, { prop: "confirmPwd" }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).confirmPwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).confirmPwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "请再次输入新密码",
                              min: unref(PASSWORD_CONFIG).minLength,
                              max: unref(PASSWORD_CONFIG).maxLength
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "max"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["rules", "model"]),
                    createVNode("div", { class: "text-align-end mb-2" }, [
                      createVNode(BaseButton, {
                        type: "info",
                        onClick: ($event) => isRef(showChangePwd) ? showChangePwd.value = false : showChangePwd = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("取消")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(BaseButton, {
                        loading: unref(loading),
                        onClick: changePwd
                      }, {
                        default: withCtx(() => [
                          createTextVNode("保存")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "line" }),
                  createCommentVNode("", true),
                  createVNode("div", { class: "item cp relative" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "" }, "同步进度")
                    ]),
                    createVNode(_component_IconFluentChevronLeft28Filled, { class: "rotate-180" }),
                    createVNode("input", {
                      type: "file",
                      accept: ".json,.zip,application/json,application/zip",
                      onChange: onFileChange,
                      class: "absolute left-0 top-0 w-full h-full bg-red cp opacity-0"
                    }, null, 32)
                  ]),
                  createVNode("div", { class: "line" }),
                  createVNode("div", {
                    class: "item cp",
                    onClick: ($event) => unref(jump2Feedback)()
                  }, [
                    createVNode("div", { class: "flex-1" }, "给 " + toDisplayString(unref(APP_NAME)) + " 提交意见", 1),
                    createVNode(_component_IconFluentChevronLeft28Filled, { class: "rotate-180" })
                  ], 8, ["onClick"]),
                  createVNode("div", { class: "line" }),
                  createVNode("div", { class: "center w-full mt-4" }, [
                    createVNode(BaseButton, {
                      onClick: handleLogout,
                      size: "large",
                      class: "w-[40%]"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 登出 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "text-xs text-center mt-2" }, [
                    createVNode("a", {
                      href: "/user-agreement.html",
                      target: "_blank",
                      class: "text-gray-500 hover:text-gray-700"
                    }, "用户协议"),
                    createTextVNode(" 、 "),
                    createVNode("a", {
                      href: "/privacy-policy.html",
                      target: "_blank",
                      class: "text-gray-500 hover:text-gray-700"
                    }, "隐私政策")
                  ])
                ]),
                createVNode("div", { class: "card-white w-80" }, [
                  createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                    createVNode(_component_IconFluentCrown20Regular, { class: "text-2xl text-yellow-500" }),
                    createVNode("div", { class: "text-lg font-bold" }, "订阅信息")
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    unref(userStore).user?.member ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1" }, "当前计划"),
                        createVNode("div", { class: "text-base font-bold" }, toDisplayString(member.value?.planDesc), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1" }, "状态"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("div", {
                            class: ["w-2 h-2 rounded-full", member.value?.active ? "bg-green-500" : "bg-red-500"]
                          }, null, 2),
                          createVNode("span", {
                            class: ["text-base font-medium", member.value?.active ? "text-green-700" : "text-red-700"]
                          }, toDisplayString(member.value?.status), 3)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1" }, "到期时间"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_IconFluentCalendarDate20Regular, { class: "text-lg" }),
                          createVNode("span", { class: "text-base font-medium" }, toDisplayString(memberEndDate.value), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1" }, "自动续费"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("div", {
                            class: ["w-2 h-2 rounded-full", member.value?.autoRenew ? "bg-blue-500" : "bg-gray-400"]
                          }, null, 2),
                          createVNode("span", {
                            class: ["text-base font-medium", member.value?.autoRenew ? "text-blue-700" : "text-gray-600"]
                          }, toDisplayString(member.value?.autoRenew ? "已开启" : "已关闭"), 3)
                        ])
                      ])
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-base"
                    }, "当前无订阅")),
                    createVNode(BaseButton, {
                      class: "w-full",
                      size: "large",
                      onClick: subscribe
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(userStore).user?.member ? "管理订阅" : "会员介绍"), 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(user)/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1543348a"]]);
export {
  user as default
};
//# sourceMappingURL=user-DV1Evj6T.js.map
