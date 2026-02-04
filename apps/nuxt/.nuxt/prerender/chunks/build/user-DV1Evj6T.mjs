import { defineComponent, ref, computed, resolveComponent, withCtx, unref, createTextVNode, createVNode, isRef, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, markRaw, createElementBlock, createElementVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { _ as __unplugin_components_4 } from './chevron-left28-filled-DoP3x3Jo.mjs';
import { B as BaseInput, _ as __unplugin_components_3 } from './BaseInput-mlIHP8lZ.mjs';
import { _ as __unplugin_components_0$1 } from './text-edit-style20-regular-f87qZqzd.mjs';
import { _ as __unplugin_components_0 } from './person20-regular-CLEO4hFD.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { u as useUserStore, a as updateUserInfoApi, c as changePhoneApi, b as changeEmailApi, s as setPassword } from './user-BLvskJR1.mjs';
import { useRouter } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';
import { B as BasePage } from './BasePage-DMJ6cvww.mjs';
import { C as CodeType, A as APP_NAME, E as EMAIL } from './env-CUoXYOyW.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { p as phoneRules, a as passwordRules, c as codeRules, P as PHONE_CONFIG, C as Code, e as emailRules, b as PASSWORD_CONFIG } from './Code-Dwe33Fdb.mjs';
import { d as cloneDeep, B as BaseIcon, j as jump2Feedback, T as Toast } from './BaseIcon-Cnj57dgy.mjs';
import { F as Form, a as FormItem } from './Form-CH4Dczim.mjs';
import { M as MessageBox } from './MessageBox-DbYOvJFb.mjs';
import { h as _export_sfc } from './server.mjs';
import './eye16-regular-Cm9O3Lp0.mjs';
import './event-qcx2F2JA.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import './interval-CYUoNYlE.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/axios/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/duration.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import './Dialog-BoKDmA_Y.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/h3/dist/index.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/ufo/dist/index.mjs';
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
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/defu/dist/defu.mjs';
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
            var _a, _b;
            if (((_a = userStore.user) == null ? void 0 : _a.phone) && value === ((_b = userStore.user) == null ? void 0 : _b.phone)) {
              throw new Error("\u65B0\u624B\u673A\u53F7\u4E0E\u539F\u624B\u673A\u53F7\u4E00\u81F4");
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
              Toast.success("\u4FEE\u6539\u6210\u529F");
              await userStore.fetchUserInfo();
              showChangePhone.value = false;
            } else {
              Toast.error(res.msg || "\u4FEE\u6539\u5931\u8D25");
            }
          } catch (error) {
            Toast.error(error || "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
          } finally {
            loading.value = false;
          }
        }
      });
    }
    let changeUsernameFormRef = ref();
    let changeUsernameForm = ref({ username: "" });
    let changeUsernameFormRules = {
      username: [{ required: true, message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", trigger: "blur" }]
    };
    function showChangeUsernameForm() {
      var _a, _b;
      showChangePhone.value = showChangeUsername.value = showChangeEmail.value = showChangePwd.value = false;
      showChangeUsername.value = true;
      changeUsernameForm.value = cloneDeep({ username: (_b = (_a = userStore.user) == null ? void 0 : _a.username) != null ? _b : "" });
    }
    function changeUsername() {
      changeUsernameFormRef.value.validate(async (valid) => {
        if (valid) {
          try {
            loading.value = true;
            const res = await updateUserInfoApi(changeUsernameForm.value);
            if (res.success) {
              Toast.success("\u4FEE\u6539\u6210\u529F");
              await userStore.fetchUserInfo();
              showChangeUsername.value = false;
            } else {
              Toast.error(res.msg || "\u4FEE\u6539\u5931\u8D25");
            }
          } catch (error) {
            Toast.error(error || "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
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
            var _a, _b;
            if (((_a = userStore.user) == null ? void 0 : _a.email) && value === ((_b = userStore.user) == null ? void 0 : _b.email)) {
              throw new Error("\u8BE5\u90AE\u7BB1\u4E0E\u5F53\u524D\u4E00\u81F4");
            }
          },
          trigger: "blur"
        }
      ],
      pwd: passwordRules,
      code: codeRules
    };
    function showChangeEmailForm() {
      var _a, _b;
      showChangePhone.value = showChangeUsername.value = showChangeEmail.value = showChangePwd.value = false;
      showChangeEmail.value = true;
      changeEmailForm.value = cloneDeep({ email: (_b = (_a = userStore.user) == null ? void 0 : _a.email) != null ? _b : "", pwd: "", code: "" });
    }
    function changeEmail() {
      changeEmailFormRef.value.validate(async (valid) => {
        if (valid) {
          try {
            loading.value = true;
            const res = await changeEmailApi(changeEmailForm.value);
            if (res.success) {
              Toast.success("\u4FEE\u6539\u6210\u529F");
              await userStore.fetchUserInfo();
              showChangeEmail.value = false;
            } else {
              Toast.error(res.msg || "\u4FEE\u6539\u5931\u8D25");
            }
          } catch (error) {
            Toast.error(error || "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
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
        { required: true, message: "\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801", trigger: "blur" },
        {
          validator: (rule, value) => {
            if (value !== changePwdForm.value.newPwd) {
              throw new Error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4");
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
              Toast.success("\u5BC6\u7801\u8BBE\u7F6E\u6210\u529F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
              showChangePwd.value = false;
              userStore.logout();
            } else {
              Toast.error(res.msg || "\u8BBE\u7F6E\u5931\u8D25");
            }
          } catch (error) {
            Toast.error(error || "\u8BBE\u7F6E\u5BC6\u7801\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
          } finally {
            loading.value = false;
          }
        }
      });
    }
    const member = computed(() => {
      var _a, _b;
      return (_b = (_a = userStore.user) == null ? void 0 : _a.member) != null ? _b : {};
    });
    const memberEndDate = computed(() => {
      var _a, _b;
      if (((_a = member.value) == null ? void 0 : _a.endDate) === null) return "\u6C38\u4E45";
      return (_b = member.value) == null ? void 0 : _b.endDate;
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
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
          if (_push2) {
            if (!unref(userStore).isLogin) {
              _push2(`<div class="center h-screen" data-v-1543348a${_scopeId}><div class="card-white text-center flex-col gap-6 w-110" data-v-1543348a${_scopeId}><div class="w-20 h-20 bg-blue-100 rounded-full center mx-auto" data-v-1543348a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentPerson20Regular, { class: "text-3xl text-blue-600" }, null, _parent2, _scopeId));
              _push2(`</div><h1 class="text-2xl font-bold" data-v-1543348a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentHandWave20Regular, { class: "text-xl translate-y-1 mr-2 shrink-0" }, null, _parent2, _scopeId));
              _push2(`<span data-v-1543348a${_scopeId}>\u6B22\u8FCE\u4F7F\u7528</span></h1><p class="" data-v-1543348a${_scopeId}>\u767B\u5F55\uFF0C\u5F00\u542F\u60A8\u7684\u5B66\u4E60\u4E4B\u65C5</p><div data-v-1543348a${_scopeId}>\u4FDD\u5B58\u8FDB\u5EA6\u3001\u540C\u6B65\u6570\u636E\u3001\u89E3\u9501\u4E2A\u6027\u5316\u5185\u5BB9</div>`);
              _push2(ssrRenderComponent(BaseButton, {
                onClick: ($event) => unref(router).push("/login"),
                size: "large",
                class: "w-full mt-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u767B\u5F55 `);
                  } else {
                    return [
                      createTextVNode(" \u767B\u5F55 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-sm text-gray-500" data-v-1543348a${_scopeId}> \u8FD8\u6CA1\u6709\u8D26\u6237\uFF1F `);
              _push2(ssrRenderComponent(_component_router_link, {
                to: "/login?register=1",
                class: "line"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u7ACB\u5373\u6CE8\u518C`);
                  } else {
                    return [
                      createTextVNode("\u7ACB\u5373\u6CE8\u518C")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p></div></div>`);
            } else {
              _push2(`<div class="w-full flex gap-4" data-v-1543348a${_scopeId}><div class="card-white flex-1 flex flex-col gap-2 px-6" data-v-1543348a${_scopeId}><h1 class="text-2xl font-bold mt-0" data-v-1543348a${_scopeId}>\u5E10\u6237</h1><div class="item" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="mb-2" data-v-1543348a${_scopeId}>\u7528\u6237\u540D</div>`);
              if ((_a = unref(userStore).user) == null ? void 0 : _a.username) {
                _push2(`<div class="flex items-center gap-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentPerson20Regular, { class: "text-base" }, null, _parent2, _scopeId));
                _push2(`<span data-v-1543348a${_scopeId}>${ssrInterpolate((_b = unref(userStore).user) == null ? void 0 : _b.username)}</span></div>`);
              } else {
                _push2(`<div class="text-xs" data-v-1543348a${_scopeId}>\u5728\u6B64\u8BBE\u7F6E\u7528\u6237\u540D</div>`);
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
                              placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
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
                                placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
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
                              placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
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
                      _push3(`\u53D6\u6D88`);
                    } else {
                      return [
                        createTextVNode("\u53D6\u6D88")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(BaseButton, { onClick: changeUsername }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u4FDD\u5B58`);
                    } else {
                      return [
                        createTextVNode("\u4FDD\u5B58")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="line" data-v-1543348a${_scopeId}></div><div class="item" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="mb-2" data-v-1543348a${_scopeId}>\u624B\u673A\u53F7</div>`);
              if ((_c = unref(userStore).user) == null ? void 0 : _c.phone) {
                _push2(`<div class="flex items-center gap-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentMail20Regular, { class: "text-base" }, null, _parent2, _scopeId));
                _push2(`<span data-v-1543348a${_scopeId}>${ssrInterpolate((_d = unref(userStore).user) == null ? void 0 : _d.phone)}</span></div>`);
              } else {
                _push2(`<div class="text-xs" data-v-1543348a${_scopeId}>\u5728\u6B64\u8BBE\u7F6E\u624B\u673A\u53F7</div>`);
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
                    var _a2, _b2, _c2, _d2;
                    if (_push3) {
                      if ((_a2 = unref(userStore).user) == null ? void 0 : _a2.phone) {
                        _push3(ssrRenderComponent(FormItem, { prop: "oldCode" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="flex gap-2" data-v-1543348a${_scopeId3}>`);
                              _push4(ssrRenderComponent(BaseInput, {
                                modelValue: unref(changePhoneForm).oldCode,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).oldCode = $event,
                                type: "code",
                                autofocus: "",
                                placeholder: "\u8BF7\u8F93\u5165\u539F\u624B\u673A\u53F7\u9A8C\u8BC1\u7801",
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
                                    placeholder: "\u8BF7\u8F93\u5165\u539F\u624B\u673A\u53F7\u9A8C\u8BC1\u7801",
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
                              placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(BaseInput, {
                                modelValue: unref(changePhoneForm).phone,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).phone = $event,
                                type: "tel",
                                size: "large",
                                placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7"
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
                              placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7\u9A8C\u8BC1\u7801",
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
                                  placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7\u9A8C\u8BC1\u7801",
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
                      if (!((_b2 = unref(userStore).user) == null ? void 0 : _b2.phone)) {
                        _push3(ssrRenderComponent(FormItem, { prop: "pwd" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(BaseInput, {
                                modelValue: unref(changePhoneForm).pwd,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).pwd = $event,
                                type: "password",
                                size: "large",
                                placeholder: "\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(BaseInput, {
                                  modelValue: unref(changePhoneForm).pwd,
                                  "onUpdate:modelValue": ($event) => unref(changePhoneForm).pwd = $event,
                                  type: "password",
                                  size: "large",
                                  placeholder: "\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"
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
                        ((_c2 = unref(userStore).user) == null ? void 0 : _c2.phone) ? (openBlock(), createBlock(FormItem, {
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
                                placeholder: "\u8BF7\u8F93\u5165\u539F\u624B\u673A\u53F7\u9A8C\u8BC1\u7801",
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
                              placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7"
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
                                placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7\u9A8C\u8BC1\u7801",
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
                        !((_d2 = unref(userStore).user) == null ? void 0 : _d2.phone) ? (openBlock(), createBlock(FormItem, {
                          key: 1,
                          prop: "pwd"
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePhoneForm).pwd,
                              "onUpdate:modelValue": ($event) => unref(changePhoneForm).pwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"
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
                if ((_e = unref(userStore).user) == null ? void 0 : _e.phone) {
                  _push2(`<span class="link text-sm cp" data-v-1543348a${_scopeId}>\u539F\u624B\u673A\u53F7\u4E0D\u53EF\u7528\uFF0C\u70B9\u6B64\u7533\u8BC9</span>`);
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
                      _push3(`\u53D6\u6D88`);
                    } else {
                      return [
                        createTextVNode("\u53D6\u6D88")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(BaseButton, { onClick: changePhone }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u4FDD\u5B58`);
                    } else {
                      return [
                        createTextVNode("\u4FDD\u5B58")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="line" data-v-1543348a${_scopeId}></div><div class="item" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="mb-2" data-v-1543348a${_scopeId}>\u7535\u5B50\u90AE\u7BB1</div>`);
              if ((_f = unref(userStore).user) == null ? void 0 : _f.email) {
                _push2(`<div class="flex items-center gap-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentMail20Regular, { class: "text-base" }, null, _parent2, _scopeId));
                _push2(`<span data-v-1543348a${_scopeId}>${ssrInterpolate((_g = unref(userStore).user) == null ? void 0 : _g.email)}</span></div>`);
              } else {
                _push2(`<div class="text-xs" data-v-1543348a${_scopeId}>\u5728\u6B64\u8BBE\u7F6E\u90AE\u7BB1</div>`);
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
                    var _a2, _b2;
                    if (_push3) {
                      _push3(ssrRenderComponent(FormItem, { prop: "email" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(BaseInput, {
                              modelValue: unref(changeEmailForm).email,
                              "onUpdate:modelValue": ($event) => unref(changeEmailForm).email = $event,
                              type: "email",
                              size: "large",
                              placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",
                              autofocus: ""
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(BaseInput, {
                                modelValue: unref(changeEmailForm).email,
                                "onUpdate:modelValue": ($event) => unref(changeEmailForm).email = $event,
                                type: "email",
                                size: "large",
                                placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",
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
                              placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
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
                                  placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
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
                      if ((_a2 = unref(userStore).user) == null ? void 0 : _a2.hasPwd) {
                        _push3(ssrRenderComponent(FormItem, { prop: "pwd" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(BaseInput, {
                                modelValue: unref(changePwdForm).pwd,
                                "onUpdate:modelValue": ($event) => unref(changePwdForm).pwd = $event,
                                type: "password",
                                size: "large",
                                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(BaseInput, {
                                  modelValue: unref(changePwdForm).pwd,
                                  "onUpdate:modelValue": ($event) => unref(changePwdForm).pwd = $event,
                                  type: "password",
                                  size: "large",
                                  placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
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
                              placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",
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
                                placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
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
                        ((_b2 = unref(userStore).user) == null ? void 0 : _b2.hasPwd) ? (openBlock(), createBlock(FormItem, {
                          key: 0,
                          prop: "pwd"
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseInput, {
                              modelValue: unref(changePwdForm).pwd,
                              "onUpdate:modelValue": ($event) => unref(changePwdForm).pwd = $event,
                              type: "password",
                              size: "large",
                              placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
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
                      _push3(`\u53D6\u6D88`);
                    } else {
                      return [
                        createTextVNode("\u53D6\u6D88")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(BaseButton, { onClick: changeEmail }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u4FDD\u5B58`);
                    } else {
                      return [
                        createTextVNode("\u4FDD\u5B58")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="line" data-v-1543348a${_scopeId}></div><div class="item" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="mb-2" data-v-1543348a${_scopeId}>\u8BBE\u7F6E\u5BC6\u7801</div><div class="text-xs" data-v-1543348a${_scopeId}>\u5728\u6B64\u8F93\u5165\u5BC6\u7801</div></div>`);
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
                                placeholder: "\u65E7\u5BC6\u7801",
                                type: "password",
                                size: "large",
                                autofocus: ""
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(BaseInput, {
                                  modelValue: unref(changePwdForm).oldPwd,
                                  "onUpdate:modelValue": ($event) => unref(changePwdForm).oldPwd = $event,
                                  placeholder: "\u65E7\u5BC6\u7801",
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
                              placeholder: `\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801\uFF08${unref(PASSWORD_CONFIG).minLength}-${unref(PASSWORD_CONFIG).maxLength}\u4F4D\uFF09`,
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
                                placeholder: `\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801\uFF08${unref(PASSWORD_CONFIG).minLength}-${unref(PASSWORD_CONFIG).maxLength}\u4F4D\uFF09`,
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
                              placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801",
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
                                placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801",
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
                              placeholder: "\u65E7\u5BC6\u7801",
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
                              placeholder: `\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801\uFF08${unref(PASSWORD_CONFIG).minLength}-${unref(PASSWORD_CONFIG).maxLength}\u4F4D\uFF09`,
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
                              placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801",
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
                      _push3(`\u53D6\u6D88`);
                    } else {
                      return [
                        createTextVNode("\u53D6\u6D88")
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
                      _push3(`\u4FDD\u5B58`);
                    } else {
                      return [
                        createTextVNode("\u4FDD\u5B58")
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
              _push2(`<div class="item cp relative" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}><div class="" data-v-1543348a${_scopeId}>\u540C\u6B65\u8FDB\u5EA6</div></div>`);
              _push2(ssrRenderComponent(_component_IconFluentChevronLeft28Filled, { class: "rotate-180" }, null, _parent2, _scopeId));
              _push2(`<input type="file" accept=".json,.zip,application/json,application/zip" class="absolute left-0 top-0 w-full h-full bg-red cp opacity-0" data-v-1543348a${_scopeId}></div><div class="line" data-v-1543348a${_scopeId}></div><div class="item cp" data-v-1543348a${_scopeId}><div class="flex-1" data-v-1543348a${_scopeId}>\u7ED9 ${ssrInterpolate(unref(APP_NAME))} \u63D0\u4EA4\u610F\u89C1</div>`);
              _push2(ssrRenderComponent(_component_IconFluentChevronLeft28Filled, { class: "rotate-180" }, null, _parent2, _scopeId));
              _push2(`</div><div class="line" data-v-1543348a${_scopeId}></div><div class="center w-full mt-4" data-v-1543348a${_scopeId}>`);
              _push2(ssrRenderComponent(BaseButton, {
                onClick: handleLogout,
                size: "large",
                class: "w-[40%]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u767B\u51FA `);
                  } else {
                    return [
                      createTextVNode(" \u767B\u51FA ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-xs text-center mt-2" data-v-1543348a${_scopeId}><a href="/user-agreement.html" target="_blank" class="text-gray-500 hover:text-gray-700" data-v-1543348a${_scopeId}>\u7528\u6237\u534F\u8BAE</a> \u3001 <a href="/privacy-policy.html" target="_blank" class="text-gray-500 hover:text-gray-700" data-v-1543348a${_scopeId}>\u9690\u79C1\u653F\u7B56</a></div></div><div class="card-white w-80" data-v-1543348a${_scopeId}><div class="flex items-center gap-3 mb-4" data-v-1543348a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentCrown20Regular, { class: "text-2xl text-yellow-500" }, null, _parent2, _scopeId));
              _push2(`<div class="text-lg font-bold" data-v-1543348a${_scopeId}>\u8BA2\u9605\u4FE1\u606F</div></div><div class="space-y-4" data-v-1543348a${_scopeId}>`);
              if ((_h = unref(userStore).user) == null ? void 0 : _h.member) {
                _push2(`<!--[--><div data-v-1543348a${_scopeId}><div class="mb-1" data-v-1543348a${_scopeId}>\u5F53\u524D\u8BA1\u5212</div><div class="text-base font-bold" data-v-1543348a${_scopeId}>${ssrInterpolate((_i = member.value) == null ? void 0 : _i.planDesc)}</div></div><div data-v-1543348a${_scopeId}><div class="mb-1" data-v-1543348a${_scopeId}>\u72B6\u6001</div><div class="flex items-center gap-2" data-v-1543348a${_scopeId}><div class="${ssrRenderClass([((_j = member.value) == null ? void 0 : _j.active) ? "bg-green-500" : "bg-red-500", "w-2 h-2 rounded-full"])}" data-v-1543348a${_scopeId}></div><span class="${ssrRenderClass([((_k = member.value) == null ? void 0 : _k.active) ? "text-green-700" : "text-red-700", "text-base font-medium"])}" data-v-1543348a${_scopeId}>${ssrInterpolate((_l = member.value) == null ? void 0 : _l.status)}</span></div></div><div data-v-1543348a${_scopeId}><div class="mb-1" data-v-1543348a${_scopeId}>\u5230\u671F\u65F6\u95F4</div><div class="flex items-center gap-2" data-v-1543348a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentCalendarDate20Regular, { class: "text-lg" }, null, _parent2, _scopeId));
                _push2(`<span class="text-base font-medium" data-v-1543348a${_scopeId}>${ssrInterpolate(memberEndDate.value)}</span></div></div><div data-v-1543348a${_scopeId}><div class="mb-1" data-v-1543348a${_scopeId}>\u81EA\u52A8\u7EED\u8D39</div><div class="flex items-center gap-2" data-v-1543348a${_scopeId}><div class="${ssrRenderClass([((_m = member.value) == null ? void 0 : _m.autoRenew) ? "bg-blue-500" : "bg-gray-400", "w-2 h-2 rounded-full"])}" data-v-1543348a${_scopeId}></div><span class="${ssrRenderClass([((_n = member.value) == null ? void 0 : _n.autoRenew) ? "text-blue-700" : "text-gray-600", "text-base font-medium"])}" data-v-1543348a${_scopeId}>${ssrInterpolate(((_o = member.value) == null ? void 0 : _o.autoRenew) ? "\u5DF2\u5F00\u542F" : "\u5DF2\u5173\u95ED")}</span></div></div><!--]-->`);
              } else {
                _push2(`<div class="text-base" data-v-1543348a${_scopeId}>\u5F53\u524D\u65E0\u8BA2\u9605</div>`);
              }
              _push2(ssrRenderComponent(BaseButton, {
                class: "w-full",
                size: "large",
                onClick: subscribe
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`${ssrInterpolate(((_a2 = unref(userStore).user) == null ? void 0 : _a2.member) ? "\u7BA1\u7406\u8BA2\u9605" : "\u4F1A\u5458\u4ECB\u7ECD")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(((_b2 = unref(userStore).user) == null ? void 0 : _b2.member) ? "\u7BA1\u7406\u8BA2\u9605" : "\u4F1A\u5458\u4ECB\u7ECD"), 1)
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
                    createVNode("span", null, "\u6B22\u8FCE\u4F7F\u7528")
                  ]),
                  createVNode("p", { class: "" }, "\u767B\u5F55\uFF0C\u5F00\u542F\u60A8\u7684\u5B66\u4E60\u4E4B\u65C5"),
                  createVNode("div", null, "\u4FDD\u5B58\u8FDB\u5EA6\u3001\u540C\u6B65\u6570\u636E\u3001\u89E3\u9501\u4E2A\u6027\u5316\u5185\u5BB9"),
                  createVNode(BaseButton, {
                    onClick: ($event) => unref(router).push("/login"),
                    size: "large",
                    class: "w-full mt-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u767B\u5F55 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("p", { class: "text-sm text-gray-500" }, [
                    createTextVNode(" \u8FD8\u6CA1\u6709\u8D26\u6237\uFF1F "),
                    createVNode(_component_router_link, {
                      to: "/login?register=1",
                      class: "line"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u7ACB\u5373\u6CE8\u518C")
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
                  createVNode("h1", { class: "text-2xl font-bold mt-0" }, "\u5E10\u6237"),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "mb-2" }, "\u7528\u6237\u540D"),
                      ((_p = unref(userStore).user) == null ? void 0 : _p.username) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_IconFluentPerson20Regular, { class: "text-base" }),
                        createVNode("span", null, toDisplayString((_q = unref(userStore).user) == null ? void 0 : _q.username), 1)
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-xs"
                      }, "\u5728\u6B64\u8BBE\u7F6E\u7528\u6237\u540D"))
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
                              placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
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
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(BaseButton, { onClick: changeUsername }, {
                        default: withCtx(() => [
                          createTextVNode("\u4FDD\u5B58")
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "line" }),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "mb-2" }, "\u624B\u673A\u53F7"),
                      ((_r = unref(userStore).user) == null ? void 0 : _r.phone) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_IconFluentMail20Regular, { class: "text-base" }),
                        createVNode("span", null, toDisplayString((_s = unref(userStore).user) == null ? void 0 : _s.phone), 1)
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-xs"
                      }, "\u5728\u6B64\u8BBE\u7F6E\u624B\u673A\u53F7"))
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
                      default: withCtx(() => {
                        var _a2, _b2;
                        return [
                          ((_a2 = unref(userStore).user) == null ? void 0 : _a2.phone) ? (openBlock(), createBlock(FormItem, {
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
                                  placeholder: "\u8BF7\u8F93\u5165\u539F\u624B\u673A\u53F7\u9A8C\u8BC1\u7801",
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
                                placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7"
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
                                  placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7\u9A8C\u8BC1\u7801",
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
                          !((_b2 = unref(userStore).user) == null ? void 0 : _b2.phone) ? (openBlock(), createBlock(FormItem, {
                            key: 1,
                            prop: "pwd"
                          }, {
                            default: withCtx(() => [
                              createVNode(BaseInput, {
                                modelValue: unref(changePhoneForm).pwd,
                                "onUpdate:modelValue": ($event) => unref(changePhoneForm).pwd = $event,
                                type: "password",
                                size: "large",
                                placeholder: "\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }, 8, ["rules", "model"]),
                    createVNode("div", { class: "flex justify-between items-end mb-2" }, [
                      ((_t = unref(userStore).user) == null ? void 0 : _t.phone) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "link text-sm cp",
                        onClick: ($event) => unref(MessageBox).notice(`\u8BF7\u63D0\u4F9B\u8BC1\u660E\u4FE1\u606F\u53D1\u9001\u90AE\u4EF6\u5230 ${unref(EMAIL)} \u8FDB\u884C\u7533\u8BC9`, "\u4EBA\u5DE5\u7533\u8BC9")
                      }, "\u539F\u624B\u673A\u53F7\u4E0D\u53EF\u7528\uFF0C\u70B9\u6B64\u7533\u8BC9", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 1 })),
                      createVNode("div", null, [
                        createVNode(BaseButton, {
                          type: "info",
                          onClick: ($event) => isRef(showChangePhone) ? showChangePhone.value = false : showChangePhone = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u53D6\u6D88")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(BaseButton, { onClick: changePhone }, {
                          default: withCtx(() => [
                            createTextVNode("\u4FDD\u5B58")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "line" }),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "mb-2" }, "\u7535\u5B50\u90AE\u7BB1"),
                      ((_u = unref(userStore).user) == null ? void 0 : _u.email) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_IconFluentMail20Regular, { class: "text-base" }),
                        createVNode("span", null, toDisplayString((_v = unref(userStore).user) == null ? void 0 : _v.email), 1)
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-xs"
                      }, "\u5728\u6B64\u8BBE\u7F6E\u90AE\u7BB1"))
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
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(FormItem, { prop: "email" }, {
                            default: withCtx(() => [
                              createVNode(BaseInput, {
                                modelValue: unref(changeEmailForm).email,
                                "onUpdate:modelValue": ($event) => unref(changeEmailForm).email = $event,
                                type: "email",
                                size: "large",
                                placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",
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
                                  placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
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
                          ((_a2 = unref(userStore).user) == null ? void 0 : _a2.hasPwd) ? (openBlock(), createBlock(FormItem, {
                            key: 0,
                            prop: "pwd"
                          }, {
                            default: withCtx(() => [
                              createVNode(BaseInput, {
                                modelValue: unref(changePwdForm).pwd,
                                "onUpdate:modelValue": ($event) => unref(changePwdForm).pwd = $event,
                                type: "password",
                                size: "large",
                                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }, 8, ["rules", "model"]),
                    createVNode("div", { class: "text-align-end mb-2" }, [
                      createVNode(BaseButton, {
                        type: "info",
                        onClick: ($event) => isRef(showChangeEmail) ? showChangeEmail.value = false : showChangeEmail = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(BaseButton, { onClick: changeEmail }, {
                        default: withCtx(() => [
                          createTextVNode("\u4FDD\u5B58")
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "line" }),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "mb-2" }, "\u8BBE\u7F6E\u5BC6\u7801"),
                      createVNode("div", { class: "text-xs" }, "\u5728\u6B64\u8F93\u5165\u5BC6\u7801")
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
                              placeholder: "\u65E7\u5BC6\u7801",
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
                              placeholder: `\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801\uFF08${unref(PASSWORD_CONFIG).minLength}-${unref(PASSWORD_CONFIG).maxLength}\u4F4D\uFF09`,
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
                              placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801",
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
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(BaseButton, {
                        loading: unref(loading),
                        onClick: changePwd
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u4FDD\u5B58")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "line" }),
                  createCommentVNode("", true),
                  createVNode("div", { class: "item cp relative" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "" }, "\u540C\u6B65\u8FDB\u5EA6")
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
                    createVNode("div", { class: "flex-1" }, "\u7ED9 " + toDisplayString(unref(APP_NAME)) + " \u63D0\u4EA4\u610F\u89C1", 1),
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
                        createTextVNode(" \u767B\u51FA ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "text-xs text-center mt-2" }, [
                    createVNode("a", {
                      href: "/user-agreement.html",
                      target: "_blank",
                      class: "text-gray-500 hover:text-gray-700"
                    }, "\u7528\u6237\u534F\u8BAE"),
                    createTextVNode(" \u3001 "),
                    createVNode("a", {
                      href: "/privacy-policy.html",
                      target: "_blank",
                      class: "text-gray-500 hover:text-gray-700"
                    }, "\u9690\u79C1\u653F\u7B56")
                  ])
                ]),
                createVNode("div", { class: "card-white w-80" }, [
                  createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                    createVNode(_component_IconFluentCrown20Regular, { class: "text-2xl text-yellow-500" }),
                    createVNode("div", { class: "text-lg font-bold" }, "\u8BA2\u9605\u4FE1\u606F")
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    ((_w = unref(userStore).user) == null ? void 0 : _w.member) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1" }, "\u5F53\u524D\u8BA1\u5212"),
                        createVNode("div", { class: "text-base font-bold" }, toDisplayString((_x = member.value) == null ? void 0 : _x.planDesc), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1" }, "\u72B6\u6001"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("div", {
                            class: ["w-2 h-2 rounded-full", ((_y = member.value) == null ? void 0 : _y.active) ? "bg-green-500" : "bg-red-500"]
                          }, null, 2),
                          createVNode("span", {
                            class: ["text-base font-medium", ((_z = member.value) == null ? void 0 : _z.active) ? "text-green-700" : "text-red-700"]
                          }, toDisplayString((_A = member.value) == null ? void 0 : _A.status), 3)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1" }, "\u5230\u671F\u65F6\u95F4"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_IconFluentCalendarDate20Regular, { class: "text-lg" }),
                          createVNode("span", { class: "text-base font-medium" }, toDisplayString(memberEndDate.value), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1" }, "\u81EA\u52A8\u7EED\u8D39"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("div", {
                            class: ["w-2 h-2 rounded-full", ((_B = member.value) == null ? void 0 : _B.autoRenew) ? "bg-blue-500" : "bg-gray-400"]
                          }, null, 2),
                          createVNode("span", {
                            class: ["text-base font-medium", ((_C = member.value) == null ? void 0 : _C.autoRenew) ? "text-blue-700" : "text-gray-600"]
                          }, toDisplayString(((_D = member.value) == null ? void 0 : _D.autoRenew) ? "\u5DF2\u5F00\u542F" : "\u5DF2\u5173\u95ED"), 3)
                        ])
                      ])
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-base"
                    }, "\u5F53\u524D\u65E0\u8BA2\u9605")),
                    createVNode(BaseButton, {
                      class: "w-full",
                      size: "large",
                      onClick: subscribe
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createTextVNode(toDisplayString(((_a2 = unref(userStore).user) == null ? void 0 : _a2.member) ? "\u7BA1\u7406\u8BA2\u9605" : "\u4F1A\u5458\u4ECB\u7ECD"), 1)
                        ];
                      }),
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

export { user as default };
//# sourceMappingURL=user-DV1Evj6T.mjs.map
