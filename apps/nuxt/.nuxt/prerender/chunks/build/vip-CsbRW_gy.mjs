import { defineComponent, ref, computed, watch, withCtx, unref, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, Fragment, renderList, createCommentVNode, markRaw, createElementBlock, createElementVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { _ as __unplugin_components_3 } from './wechat-CXtsDFCA.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { B as BasePage } from './BasePage-DMJ6cvww.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { useRouter } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue-router/vue-router.node.mjs';
import { u as useUserStore } from './user-BLvskJR1.mjs';
import { H as Header } from './Header-SpucEd11.mjs';
import { _ as _dateFormat, T as Toast, h as _nextTick, r as request } from './BaseIcon-Cnj57dgy.mjs';
import { R as RadioGroup, a as Radio } from './Radio-WTKpkBn7.mjs';
import { I as InputNumber } from './InputNumber-CwEqYfu9.mjs';
import { B as BaseInput } from './BaseInput-mlIHP8lZ.mjs';
import { P as PopConfirm } from './PopConfirm-BsYq1Crk.mjs';
import { s as setInterval } from './interval-CYUoNYlE.mjs';
import { h as _export_sfc } from './server.mjs';
import './env-CUoXYOyW.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import './BackIcon-D_XswP1e.mjs';
import './chevron-left28-filled-DoP3x3Jo.mjs';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/axios/index.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/plugin/duration.js';
import 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/nanoid/index.js';
import './eye16-regular-Cm9O3Lp0.mjs';
import './event-qcx2F2JA.mjs';
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

const _hoisted_1$3 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M20 13.692V3.846A3.845 3.845 0 0 0 16.154 0H3.846A3.845 3.845 0 0 0 0 3.846v12.308A3.845 3.845 0 0 0 3.846 20h12.308a3.85 3.85 0 0 0 3.787-3.167c-1.02-.439-5.44-2.347-7.742-3.45c-1.755 2.122-3.589 3.396-6.356 3.396s-4.613-1.703-4.388-3.79c.145-1.368 1.084-3.605 5.161-3.22c2.148.201 3.132.604 4.886 1.182c.45-.83.83-1.745 1.114-2.72H4.847v-.77H8.69V6.077H4V5.23h4.69V3.236s.045-.315.389-.315H11V5.23h5.002v.847H11v1.384h4.078a15.7 15.7 0 0 1-1.654 4.154c1.182.43 6.575 2.077 6.575 2.077M5.538 15.46c-2.925 0-3.384-1.846-3.23-2.617s1.002-1.768 2.625-1.768c1.87 0 3.541.477 5.547 1.454c-1.407 1.837-3.144 2.93-4.942 2.93"
    }, null, -1)
  ])]);
}
const __unplugin_components_4 = markRaw({ name: "uiw-alipay", render: render$3 });
const _hoisted_1$2 = {
  viewBox: "0 0 14 14",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      createElementVNode("path", { d: "M.5 11a1 1 0 0 0 .998 1h11.004a1 1 0 0 0 .998-1V8.966a2.037 2.037 0 0 1 0-3.932V3a1 1 0 0 0-.998-1H1.498A1 1 0 0 0 .5 3v2.03a2.037 2.037 0 0 1 0 3.94zm4.02-1.5l5-5" }),
      createElementVNode("path", { d: "M5.02 5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" })
    ], -1)
  ])]);
}
const __unplugin_components_2 = markRaw({ name: "streamline-discount-percent-coupon", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M16.5 6.671c.116 0 .223.04.308.107l.067.063l.017.02a5 5 0 0 1-3.675 8.135L13 15H7a5 5 0 0 1-.303-.009l1.657 1.655a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-2.5-2.5a.5.5 0 0 1-.057-.638l.057-.07l2.5-2.5a.5.5 0 0 1 .765.638l-.057.07l-1.637 1.636l.14.008L7 14h6a4 4 0 0 0 3.11-6.516a.5.5 0 0 1 .39-.812m-4.854-4.025a.5.5 0 0 1 .638-.057l.07.057l2.5 2.5l.057.07a.5.5 0 0 1 0 .568l-.057.07l-2.5 2.5l-.07.057a.5.5 0 0 1-.568 0l-.07-.057l-.057-.07a.5.5 0 0 1 0-.568l.057-.07l1.637-1.636l-.14-.008L13 6H7a4 4 0 0 0-3.105 6.522a.5.5 0 1 1-.801.601a5 5 0 0 1 3.689-8.119L7 5h6q.153 0 .303.009l-1.657-1.655l-.057-.07a.5.5 0 0 1 .057-.638"
    }, null, -1)
  ])]);
}
const __unplugin_components_1 = markRaw({ name: "fluent-arrow-repeat-all20-regular", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14m3.358 4.646a.5.5 0 0 1 .058.638l-.058.07l-4.004 4.004a.5.5 0 0 1-.638.058l-.07-.058l-2-2a.5.5 0 0 1 .638-.765l.07.058L9 11.298l3.651-3.652a.5.5 0 0 1 .707 0"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "fluent-checkmark-circle20-regular", render });
function orderCreate(params) {
  return request("/member/orderCreate", params, null, "post");
}
function alipayQuery(params) {
  return request("/member/alipayQuery", null, params, "get");
}
function couponInfo(params) {
  return request("/member/couponInfo", null, params, "get");
}
function setAutoRenewApi(params) {
  return request("/member/setAutoRenew", params, null, "post");
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vip",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    let loading = ref(false);
    let selectedPaymentMethod = ref("alipay");
    let selectedPlanId = ref("");
    let duration = ref(1);
    const member = computed(() => {
      var _a, _b;
      return (_b = (_a = userStore.user) == null ? void 0 : _a.member) != null ? _b : {};
    });
    const memberEndDate = computed(() => {
      var _a, _b;
      if (((_a = member.value) == null ? void 0 : _a.endDate) === null) return "\u6C38\u4E45";
      return (_b = member.value) == null ? void 0 : _b.endDate;
    });
    let data = ref({});
    const plans = computed(() => {
      var _a;
      let list = [];
      if ((_a = data.value) == null ? void 0 : _a.level) {
        list.push({
          id: "month",
          name: "\u6708\u4ED8",
          price: data.value.level.price,
          unit: "\u6708"
        });
        list.push({
          id: "month_auto",
          name: "\u8FDE\u7EED\u5305\u6708",
          price: data.value.level.price_auto,
          unit: "\u6708",
          highlight: "\u6027\u4EF7\u6BD4\u66F4\u9AD8",
          autoRenew: true
        });
        list.push({
          id: "year",
          name: "\u5E74\u5EA6\u4F1A\u5458",
          price: data.value.level.yearly_price,
          unit: "\u5E74",
          highlight: "\u5E74\u5EA6\u4F18\u60E0"
        });
      }
      return list;
    });
    const paymentMethods = [
      // {
      //   id: 'wechat',
      //   name: '微信支付',
      //   description: '使用微信支付'
      // },
      {
        id: "alipay",
        name: "\u652F\u4ED8\u5B9D",
        description: "\u4F7F\u7528\u652F\u4ED8\u5B9D\u652F\u4ED8"
      }
    ];
    const currentPlan = computed(() => {
      var _a;
      return (_a = plans.value.find((v) => {
        var _a2;
        return v.id === ((_a2 = member.value) == null ? void 0 : _a2.plan);
      })) != null ? _a : null;
    });
    const selectPlan = computed(() => {
      var _a;
      return (_a = plans.value.find((v) => v.id === selectedPlanId.value)) != null ? _a : null;
    });
    const originalPrice = computed(() => {
      var _a, _b, _c;
      return ((_a = selectPlan.value) == null ? void 0 : _a.id) === "month_auto" ? Number((_b = selectPlan.value) == null ? void 0 : _b.price) : Number(duration.value) * Number((_c = selectPlan.value) == null ? void 0 : _c.price);
    });
    const enoughDiscount = computed(() => {
      if (coupon.value.is_valid) {
        if (coupon.value.min_amount) {
          const minAmount = Number(coupon.value.min_amount);
          return originalPrice.value > minAmount;
        }
        return true;
      }
      return false;
    });
    const endPrice = computed(() => {
      if (!coupon.value.is_valid) {
        return Number(originalPrice.value.toFixed(2));
      }
      if (coupon.value.type === "free_trial") return 0;
      if (!enoughDiscount.value) {
        return Number(originalPrice.value.toFixed(2));
      }
      let discountAmount = 0;
      if (coupon.value.type === "discount") {
        const discountRate = Number(coupon.value.value);
        discountAmount = originalPrice.value * (1 - discountRate);
        if (coupon.value.max_discount) {
          const maxDiscount = Number(coupon.value.max_discount);
          discountAmount = Math.min(discountAmount, maxDiscount);
        }
      } else if (coupon.value.type === "amount") {
        discountAmount = Number(coupon.value.value);
      }
      const finalPrice = Math.max(originalPrice.value - discountAmount, 0);
      return finalPrice.toFixed(2);
    });
    const startDate = computed(() => {
      var _a;
      if ((_a = member.value) == null ? void 0 : _a.active) {
        return member.value.endDate;
      } else {
        return _dateFormat(Date.now());
      }
    });
    let loading2 = ref(false);
    async function toggleAutoRenew() {
      if (loading2.value) return;
      loading2.value = true;
      let res = await setAutoRenewApi({ autoRenew: false });
      if (res.success) {
        Toast.success("\u53D6\u6D88\u6210\u529F");
        userStore.init();
      } else {
        Toast.error(res.msg || "\u53D6\u6D88\u5931\u8D25");
      }
      loading2.value = false;
    }
    function getPlanButtonText(plan) {
      var _a;
      if (plan.id === selectedPlanId.value) return "\u5DF2\u9009\u4E2D";
      if (plan.id === ((_a = currentPlan.value) == null ? void 0 : _a.id)) return "\u5F53\u524D\u8BA1\u5212";
      return "\u9009\u62E9";
    }
    function goPurchase(plan) {
      if (!userStore.isLogin) {
        router.push({ path: "/login", query: { redirect: "/vip" } });
        return;
      }
      selectedPlanId.value = plan.id;
      _nextTick(() => {
        let el = (void 0).getElementById("pay");
        el.scrollIntoView({ behavior: "smooth" });
      });
    }
    let startLoop = ref(false);
    let orderNo = ref("");
    let timer = ref();
    let showCouponInput = ref(false);
    let coupon = ref({ code: "" });
    let checkLoading = ref(false);
    let showCheckBtn = ref(false);
    watch(
      () => startLoop.value,
      (n) => {
        if (n) {
          clearInterval(timer.value);
          timer.value = setInterval();
          setTimeout(() => {
            showCheckBtn.value = true;
          }, 3e3);
        } else {
          clearInterval(timer.value);
          showCheckBtn.value = false;
        }
      }
    );
    async function handlePayment() {
      if (loading.value || startLoop.value) return;
      loading.value = true;
      let data2 = {
        plan: selectedPlanId.value,
        duration: Number(duration.value),
        payment_method: selectedPaymentMethod.value,
        couponCode: coupon.value.is_valid ? coupon.value.code : void 0
      };
      let res = await orderCreate(data2);
      console.log("res", res);
      if (res.success) {
        _nextTick(() => {
          const iframe = (void 0).getElementById("payFrame");
          iframe.src = "about:blank";
          iframe.onload = () => {
            const doc = iframe.contentWindow.document;
            doc.open();
            doc.write(res.data.result);
            doc.close();
          };
          startLoop.value = true;
        });
        orderNo.value = res.data.orderNo;
      } else {
        Toast.error(res.msg || "\u4ED8\u6B3E\u5931\u8D25");
      }
      loading.value = false;
    }
    async function checkOrderStatus() {
      if (checkLoading.value) return;
      checkLoading.value = true;
      let res = await alipayQuery({ orderNo: orderNo.value });
      if (!res.success) {
        Toast.info(res.msg || "\u672A\u4ED8\u6B3E");
      }
      checkLoading.value = false;
    }
    let couponLoading = ref(false);
    async function getCouponInfo() {
      if (showCouponInput.value) {
        if (!coupon.value.code) return Toast.info("\u8BF7\u8F93\u5165\u4F18\u60E0\u5238");
        if (couponLoading.value) return;
        couponLoading.value = true;
        let res = await couponInfo(coupon.value);
        if (res.success) {
          if (res.data.is_valid) {
            coupon.value = res.data;
          } else {
            coupon.value = { code: coupon.value.code };
            Toast.info("\u4F18\u60E0\u5238\u5DF2\u5931\u6548");
          }
        } else {
          coupon.value = { code: coupon.value.code };
          Toast.error(res.msg || "\u4F18\u60E0\u5238\u65E0\u6548");
        }
        couponLoading.value = false;
      } else {
        showCouponInput.value = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentCheckmarkCircle20Regular = __unplugin_components_0;
      const _component_IconFluentArrowRepeatAll20Regular = __unplugin_components_1;
      const _component_IconStreamlineDiscountPercentCoupon = __unplugin_components_2;
      const _component_IconSimpleIconsWechat = __unplugin_components_3;
      const _component_IconUiwAlipay = __unplugin_components_4;
      _push(ssrRenderComponent(BasePage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-ab3bc972${_scopeId}><div class="card-white" data-v-ab3bc972${_scopeId}>`);
            _push2(ssrRenderComponent(Header, { title: "\u4F1A\u5458\u4ECB\u7ECD" }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-3 grid-rows-3 gap-3" data-v-ab3bc972${_scopeId}><!--[-->`);
            ssrRenderList(unref(data).benefits, (f) => {
              var _a2;
              _push2(`<div class="text-lg flex items-center" data-v-ab3bc972${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentCheckmarkCircle20Regular, { class: "mr-2 text-green-600" }, null, _parent2, _scopeId));
              _push2(`<span data-v-ab3bc972${_scopeId}><span data-v-ab3bc972${_scopeId}>${ssrInterpolate(f.name)}</span>`);
              if (f.value !== "true") {
                _push2(`<span data-v-ab3bc972${_scopeId}>${ssrInterpolate(`(${f.value}${(_a2 = f.unit) != null ? _a2 : ""})`)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if ((_a = member.value) == null ? void 0 : _a.active) {
              _push2(`<div class="card-white bg-green-50 dark:bg-item border border-green-200 mt-3 mb-6" data-v-ab3bc972${_scopeId}><div class="flex items-center justify-between" data-v-ab3bc972${_scopeId}><div class="flex items-center" data-v-ab3bc972${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentCheckmarkCircle20Regular, { class: "mr-2 text-green-600" }, null, _parent2, _scopeId));
              _push2(`<div data-v-ab3bc972${_scopeId}><div class="font-semibold text-green-800" data-v-ab3bc972${_scopeId}>\u5F53\u524D\u8BA1\u5212\uFF1A${ssrInterpolate((_b = currentPlan.value) == null ? void 0 : _b.name)}</div><div class="text-sm text-green-600" data-v-ab3bc972${_scopeId}>\u5230\u671F\u65F6\u95F4\uFF1A${ssrInterpolate(memberEndDate.value)}</div></div></div><div class="text-align-end space-y-2" data-v-ab3bc972${_scopeId}>`);
              if (member.value.autoRenew) {
                _push2(`<div class="flex items-center gap-space" data-v-ab3bc972${_scopeId}><div class="flex items-center text-sm text-gray-600" data-v-ab3bc972${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentArrowRepeatAll20Regular, { class: "mr-1" }, null, _parent2, _scopeId));
                _push2(`<span data-v-ab3bc972${_scopeId}>\u81EA\u52A8\u7EED\u8D39\u5DF2\u5F00\u542F</span></div>`);
                _push2(ssrRenderComponent(PopConfirm, {
                  title: "\u786E\u8BA4\u53D6\u6D88\uFF1F",
                  onConfirm: toggleAutoRenew
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(BaseButton, {
                        size: "small",
                        type: "info",
                        loading: unref(loading2)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u5173\u95ED`);
                          } else {
                            return [
                              createTextVNode("\u5173\u95ED")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(BaseButton, {
                          size: "small",
                          type: "info",
                          loading: unref(loading2)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u5173\u95ED")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-between" data-v-ab3bc972${_scopeId}><div class="title" data-v-ab3bc972${_scopeId}>\u9009\u62E9\u9002\u5408\u60A8\u7684\u5957\u9910</div><div class="subtitle" data-v-ab3bc972${_scopeId}>\u4E09\u79CD\u65B9\u6848\uFF0C\u6309\u9700\u9009\u62E9</div></div><div class="plans" data-v-ab3bc972${_scopeId}><!--[-->`);
            ssrRenderList(plans.value, (p) => {
              var _a2, _b2;
              _push2(`<div class="card-white p-0 overflow-hidden flex flex-col" data-v-ab3bc972${_scopeId}><div class="text-2xl font-bold bg-gray-300 dark:bg-third px-6 py-4" data-v-ab3bc972${_scopeId}>${ssrInterpolate(p.name)}</div><div class="p-6 flex flex-col justify-between flex-1" data-v-ab3bc972${_scopeId}><div class="plan-head" data-v-ab3bc972${_scopeId}><div class="price" data-v-ab3bc972${_scopeId}><span class="amount" data-v-ab3bc972${_scopeId}>\xA5${ssrInterpolate(p.price)}</span><span class="unit" data-v-ab3bc972${_scopeId}>/ \u6BCF${ssrInterpolate(p.unit)}</span></div>`);
              if (p.highlight) {
                _push2(`<div class="tag" data-v-ab3bc972${_scopeId}>${ssrInterpolate(p.highlight)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (p.autoRenew) {
                _push2(`<div class="text-sm flex items-center mt-4" data-v-ab3bc972${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentArrowRepeatAll20Regular, { class: "mr-2" }, null, _parent2, _scopeId));
                _push2(` \u5F00\u542F\u81EA\u52A8\u7EED\u8D39\uFF0C\u53EF\u968F\u65F6\u5173\u95ED </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(BaseButton, {
                class: "w-full mt-4",
                size: "large",
                type: p.id === ((_a2 = currentPlan.value) == null ? void 0 : _a2.id) || p.id === unref(selectedPlanId) ? "primary" : "info",
                disabled: p.id === ((_b2 = currentPlan.value) == null ? void 0 : _b2.id),
                onClick: ($event) => goPurchase(p)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(getPlanButtonText(p))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getPlanButtonText(p)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (unref(selectedPlanId)) {
              _push2(`<div id="pay" class="mb-50" data-v-ab3bc972${_scopeId}><div class="text-center mb-6" data-v-ab3bc972${_scopeId}><h1 class="text-xl font-semibold mb-2" data-v-ab3bc972${_scopeId}>\u5B89\u5168\u652F\u4ED8</h1><p class="" data-v-ab3bc972${_scopeId}>\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F\u5B8C\u6210\u8BA2\u5355</p></div><div class="center" data-v-ab3bc972${_scopeId}><div class="card-white w-5/10" data-v-ab3bc972${_scopeId}><div class="flex items-center justify-between gap-6" data-v-ab3bc972${_scopeId}>`);
              if (!unref(showCouponInput)) {
                _push2(`<div class="center gap-2" data-v-ab3bc972${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconStreamlineDiscountPercentCoupon, null, null, _parent2, _scopeId));
                _push2(`<span data-v-ab3bc972${_scopeId}>\u6709\u4F18\u60E0\u5238\uFF1F</span></div>`);
              } else {
                _push2(ssrRenderComponent(BaseInput, {
                  modelValue: unref(coupon).code,
                  "onUpdate:modelValue": ($event) => unref(coupon).code = $event,
                  placeholder: "\u8BF7\u8F93\u5165\u4F18\u60E0\u5238",
                  autofocus: "",
                  clearable: "",
                  onEnter: getCouponInfo
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(BaseButton, {
                size: "large",
                loading: unref(couponLoading),
                onClick: getCouponInfo
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(showCouponInput) ? "\u786E\u5B9A" : "\u5728\u6B64\u5151\u6362!")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(showCouponInput) ? "\u786E\u5B9A" : "\u5728\u6B64\u5151\u6362!"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(coupon).is_valid) {
                _push2(`<div class="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mt-4" data-v-ab3bc972${_scopeId}><div class="font-medium" data-v-ab3bc972${_scopeId}>\u4F18\u60E0\u5238: ${ssrInterpolate(unref(coupon).name)}</div><div class="flex justify-between w-full mt-2" data-v-ab3bc972${_scopeId}>`);
                if (unref(coupon).type === "discount") {
                  _push2(`<span data-v-ab3bc972${_scopeId}>\u6298\u6263\u5238\uFF1A${ssrInterpolate((Number(unref(coupon).value) * 10).toFixed(1))}\u6298</span>`);
                } else if (unref(coupon).type === "amount") {
                  _push2(`<span data-v-ab3bc972${_scopeId}>\u7ACB\u51CF\u5238\uFF1A\uFFE5${ssrInterpolate(Number(unref(coupon).value).toFixed(2))}</span>`);
                } else if (unref(coupon).type === "free_trial") {
                  _push2(`<span data-v-ab3bc972${_scopeId}>\u6298\u6263: -100%</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(coupon).min_amount || unref(coupon).max_discount) {
                  _push2(`<div data-v-ab3bc972${_scopeId}>`);
                  if (unref(coupon).min_amount) {
                    _push2(`<span data-v-ab3bc972${_scopeId}>\u6EE1${ssrInterpolate(Number(unref(coupon).min_amount).toFixed(2))}\u5143\u53EF\u7528</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (unref(coupon).max_discount && unref(coupon).type === "discount") {
                    _push2(`<span data-v-ab3bc972${_scopeId}> \xB7 \u6700\u9AD8\u51CF${ssrInterpolate(Number(unref(coupon).max_discount).toFixed(2))}\u5143 </span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="grid grid-cols-3 gap-8" data-v-ab3bc972${_scopeId}><div class="card-white" data-v-ab3bc972${_scopeId}><div class="text-lg font-medium mb-4" data-v-ab3bc972${_scopeId}>\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F</div>`);
              _push2(ssrRenderComponent(RadioGroup, {
                modelValue: unref(selectedPaymentMethod),
                "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : selectedPaymentMethod = $event
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-3 w-full" data-v-ab3bc972${_scopeId2}><!--[-->`);
                    ssrRenderList(paymentMethods, (method) => {
                      _push3(`<div class="${ssrRenderClass([unref(selectedPaymentMethod) === method.id && "bg-item", "flex p-4 border rounded-lg cp transition-all duration-200 hover:bg-item"])}" data-v-ab3bc972${_scopeId2}><div class="flex items-center flex-1 gap-4" data-v-ab3bc972${_scopeId2}>`);
                      if (method.id === "wechat") {
                        _push3(ssrRenderComponent(_component_IconSimpleIconsWechat, { class: "text-xl color-green-500" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(_component_IconUiwAlipay, { class: "text-xl color-blue" }, null, _parent3, _scopeId2));
                      }
                      _push3(`<div data-v-ab3bc972${_scopeId2}><div class="font-medium color-main" data-v-ab3bc972${_scopeId2}>${ssrInterpolate(method.name)}</div><div class="text-sm text-gray-500" data-v-ab3bc972${_scopeId2}>${ssrInterpolate(method.description)}</div></div></div>`);
                      _push3(ssrRenderComponent(Radio, {
                        value: method.id,
                        label: ""
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-3 w-full" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (method) => {
                          return createVNode("div", {
                            key: method.id,
                            onClick: ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = method.id : selectedPaymentMethod = method.id,
                            class: ["flex p-4 border rounded-lg cp transition-all duration-200 hover:bg-item", unref(selectedPaymentMethod) === method.id && "bg-item"]
                          }, [
                            createVNode("div", { class: "flex items-center flex-1 gap-4" }, [
                              method.id === "wechat" ? (openBlock(), createBlock(_component_IconSimpleIconsWechat, {
                                key: 0,
                                class: "text-xl color-green-500"
                              })) : (openBlock(), createBlock(_component_IconUiwAlipay, {
                                key: 1,
                                class: "text-xl color-blue"
                              })),
                              createVNode("div", null, [
                                createVNode("div", { class: "font-medium color-main" }, toDisplayString(method.name), 1),
                                createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(method.description), 1)
                              ])
                            ]),
                            createVNode(Radio, {
                              value: method.id,
                              label: ""
                            }, null, 8, ["value"])
                          ], 10, ["onClick"]);
                        }), 64))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="card-white" data-v-ab3bc972${_scopeId}><div class="text-lg font-semibold mb-4" data-v-ab3bc972${_scopeId}>\u8BA2\u5355\u6982\u8981</div><div class="mb-4" data-v-ab3bc972${_scopeId}><div class="text-purple-600 text-sm mb-2" data-v-ab3bc972${_scopeId}>\u4ED8\u8D39\u65B9\u6848\uFF08${ssrInterpolate((_c = selectPlan.value) == null ? void 0 : _c.name)}\uFF09\u8BA2\u9605</div><div class="mb-4" data-v-ab3bc972${_scopeId}>\u4ECE ${ssrInterpolate(startDate.value)} \u5F00\u59CB:</div></div><div class="flex justify-between items-center mb-4" data-v-ab3bc972${_scopeId}><div class="flex items-baseline" data-v-ab3bc972${_scopeId}><span class="${ssrRenderClass([((_d = selectPlan.value) == null ? void 0 : _d.id) === "month_auto" ? "text-3xl" : "text-xl", "font-semibold"])}" data-v-ab3bc972${_scopeId}> \uFFE5${ssrInterpolate((_e = selectPlan.value) == null ? void 0 : _e.price)}</span><span class="ml-2" data-v-ab3bc972${_scopeId}>/ ${ssrInterpolate((_f = selectPlan.value) == null ? void 0 : _f.unit)}</span></div>`);
              if (((_g = selectPlan.value) == null ? void 0 : _g.id) !== "month_auto") {
                _push2(`<div data-v-ab3bc972${_scopeId}>`);
                _push2(ssrRenderComponent(InputNumber, {
                  min: 1,
                  modelValue: unref(duration),
                  "onUpdate:modelValue": ($event) => isRef(duration) ? duration.value = $event : duration = $event
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(coupon).is_valid) {
                _push2(`<div class="mb-4" data-v-ab3bc972${_scopeId}>`);
                if (enoughDiscount.value) {
                  _push2(`<div class="flex items-baseline text-gray-500 line-through" data-v-ab3bc972${_scopeId}><span class="text-lg" data-v-ab3bc972${_scopeId}>\u539F\u4EF7\uFF1A\uFFE5${ssrInterpolate(Number(originalPrice.value).toFixed(2))}</span><span class="ml-2" data-v-ab3bc972${_scopeId}>/ ${ssrInterpolate((_h = selectPlan.value) == null ? void 0 : _h.unit)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="text-sm" data-v-ab3bc972${_scopeId}>`);
                if (enoughDiscount.value) {
                  _push2(`<div class="text-green-600 flex items-center" data-v-ab3bc972${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_IconStreamlineDiscountPercentCoupon, { class: "mr-2" }, null, _parent2, _scopeId));
                  _push2(`<span data-v-ab3bc972${_scopeId}>\u5DF2\u4F18\u60E0\uFF1A\uFFE5${ssrInterpolate((Number(originalPrice.value) - Number(endPrice.value)).toFixed(2))}</span></div>`);
                } else {
                  _push2(`<span data-v-ab3bc972${_scopeId}>\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\uFF1A\u672A\u6EE1\u8DB3\u6761\u4EF6</span>`);
                }
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-baseline mb-4" data-v-ab3bc972${_scopeId}><span class="text-2xl font-semibold" data-v-ab3bc972${_scopeId}>\u603B\u8BA1\uFF1A</span><span class="text-3xl font-semibold" data-v-ab3bc972${_scopeId}>\uFFE5${ssrInterpolate(endPrice.value)}</span></div><div class="bg-second text-sm px-4 py-3 rounded-lg mb-4 text-gray-600" data-v-ab3bc972${_scopeId}> \u4F1A\u5458\u5C5E\u4E8E\u865A\u62DF\u670D\u52A1\uFF0C\u4E00\u7ECF\u8D2D\u4E70\u6FC0\u6D3B\u540E\u4E0D\u652F\u6301\u9000\u6B3E\u3002\u8BF7\u5728\u8D2D\u4E70\u524D\u4ED4\u7EC6\u9605\u8BFB\u6743\u76CA\u8BF4\u660E\uFF0C\u786E\u8BA4\u7B26\u5408\u60A8\u7684\u9700\u6C42\u518D\u8FDB\u884C\u652F\u4ED8\u3002 </div>`);
              _push2(ssrRenderComponent(BaseButton, {
                class: "w-full",
                size: "large",
                loading: unref(loading) || unref(startLoop),
                type: !!unref(selectedPaymentMethod) ? "primary" : "info",
                disabled: !unref(selectedPaymentMethod),
                onClick: handlePayment
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4ED8\u6B3E `);
                  } else {
                    return [
                      createTextVNode(" \u4ED8\u6B3E ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="card-white flex flex-col" data-v-ab3bc972${_scopeId}><div class="text-lg font-semibold mb-4" data-v-ab3bc972${_scopeId}>\u626B\u7801\u652F\u4ED8</div><div class="center flex-col relative flex-1" data-v-ab3bc972${_scopeId}>`);
              if (!unref(startLoop)) {
                _push2(`<div class="center h-full w-full absolute left-0 top-0 bg-white z-2" data-v-ab3bc972${_scopeId}><div class="w-5/10" data-v-ab3bc972${_scopeId}>\u8BF7\u70B9\u51FB\u5DE6\u4FA7\u4ED8\u6B3E\u6309\u94AE\u540E\uFF0C\u652F\u4ED8\u4E8C\u7EF4\u7801\u5C06\u81EA\u52A8\u663E\u793A</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<iframe id="payFrame" class="w-[205px] h-[205px] center border-none" data-v-ab3bc972${_scopeId}></iframe><div class="text-center my-4" data-v-ab3bc972${_scopeId}>\u8BF7\u4F7F\u7528\u652F\u4ED8\u5B9D\u626B\u7801\u652F\u4ED8</div>`);
              if (unref(showCheckBtn)) {
                _push2(ssrRenderComponent(BaseButton, {
                  size: "large",
                  loading: unref(checkLoading),
                  onClick: checkOrderStatus
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u6211\u5DF2\u4ED8\u6B3E `);
                    } else {
                      return [
                        createTextVNode(" \u6211\u5DF2\u4ED8\u6B3E ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "card-white" }, [
                  createVNode(Header, { title: "\u4F1A\u5458\u4ECB\u7ECD" }),
                  createVNode("div", { class: "grid grid-cols-3 grid-rows-3 gap-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).benefits, (f) => {
                      var _a2;
                      return openBlock(), createBlock("div", {
                        class: "text-lg flex items-center",
                        key: f.name
                      }, [
                        createVNode(_component_IconFluentCheckmarkCircle20Regular, { class: "mr-2 text-green-600" }),
                        createVNode("span", null, [
                          createVNode("span", null, toDisplayString(f.name), 1),
                          f.value !== "true" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(`(${f.value}${(_a2 = f.unit) != null ? _a2 : ""})`), 1)) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                ((_i = member.value) == null ? void 0 : _i.active) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "card-white bg-green-50 dark:bg-item border border-green-200 mt-3 mb-6"
                }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_IconFluentCheckmarkCircle20Regular, { class: "mr-2 text-green-600" }),
                      createVNode("div", null, [
                        createVNode("div", { class: "font-semibold text-green-800" }, "\u5F53\u524D\u8BA1\u5212\uFF1A" + toDisplayString((_j = currentPlan.value) == null ? void 0 : _j.name), 1),
                        createVNode("div", { class: "text-sm text-green-600" }, "\u5230\u671F\u65F6\u95F4\uFF1A" + toDisplayString(memberEndDate.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "text-align-end space-y-2" }, [
                      member.value.autoRenew ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-space"
                      }, [
                        createVNode("div", { class: "flex items-center text-sm text-gray-600" }, [
                          createVNode(_component_IconFluentArrowRepeatAll20Regular, { class: "mr-1" }),
                          createVNode("span", null, "\u81EA\u52A8\u7EED\u8D39\u5DF2\u5F00\u542F")
                        ]),
                        createVNode(PopConfirm, {
                          title: "\u786E\u8BA4\u53D6\u6D88\uFF1F",
                          onConfirm: toggleAutoRenew
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseButton, {
                              size: "small",
                              type: "info",
                              loading: unref(loading2)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u5173\u95ED")
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "title" }, "\u9009\u62E9\u9002\u5408\u60A8\u7684\u5957\u9910"),
                  createVNode("div", { class: "subtitle" }, "\u4E09\u79CD\u65B9\u6848\uFF0C\u6309\u9700\u9009\u62E9")
                ]),
                createVNode("div", { class: "plans" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(plans.value, (p) => {
                    var _a2, _b2;
                    return openBlock(), createBlock("div", {
                      key: p.id,
                      class: "card-white p-0 overflow-hidden flex flex-col"
                    }, [
                      createVNode("div", { class: "text-2xl font-bold bg-gray-300 dark:bg-third px-6 py-4" }, toDisplayString(p.name), 1),
                      createVNode("div", { class: "p-6 flex flex-col justify-between flex-1" }, [
                        createVNode("div", { class: "plan-head" }, [
                          createVNode("div", { class: "price" }, [
                            createVNode("span", { class: "amount" }, "\xA5" + toDisplayString(p.price), 1),
                            createVNode("span", { class: "unit" }, "/ \u6BCF" + toDisplayString(p.unit), 1)
                          ]),
                          p.highlight ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "tag"
                          }, toDisplayString(p.highlight), 1)) : createCommentVNode("", true)
                        ]),
                        p.autoRenew ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm flex items-center mt-4"
                        }, [
                          createVNode(_component_IconFluentArrowRepeatAll20Regular, { class: "mr-2" }),
                          createTextVNode(" \u5F00\u542F\u81EA\u52A8\u7EED\u8D39\uFF0C\u53EF\u968F\u65F6\u5173\u95ED ")
                        ])) : createCommentVNode("", true),
                        createVNode(BaseButton, {
                          class: "w-full mt-4",
                          size: "large",
                          type: p.id === ((_a2 = currentPlan.value) == null ? void 0 : _a2.id) || p.id === unref(selectedPlanId) ? "primary" : "info",
                          disabled: p.id === ((_b2 = currentPlan.value) == null ? void 0 : _b2.id),
                          onClick: ($event) => goPurchase(p)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getPlanButtonText(p)), 1)
                          ]),
                          _: 2
                        }, 1032, ["type", "disabled", "onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              unref(selectedPlanId) ? (openBlock(), createBlock("div", {
                key: 0,
                id: "pay",
                class: "mb-50"
              }, [
                createVNode("div", { class: "text-center mb-6" }, [
                  createVNode("h1", { class: "text-xl font-semibold mb-2" }, "\u5B89\u5168\u652F\u4ED8"),
                  createVNode("p", { class: "" }, "\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F\u5B8C\u6210\u8BA2\u5355")
                ]),
                createVNode("div", { class: "center" }, [
                  createVNode("div", { class: "card-white w-5/10" }, [
                    createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                      !unref(showCouponInput) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "center gap-2"
                      }, [
                        createVNode(_component_IconStreamlineDiscountPercentCoupon),
                        createVNode("span", null, "\u6709\u4F18\u60E0\u5238\uFF1F")
                      ])) : (openBlock(), createBlock(BaseInput, {
                        key: 1,
                        modelValue: unref(coupon).code,
                        "onUpdate:modelValue": ($event) => unref(coupon).code = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u4F18\u60E0\u5238",
                        autofocus: "",
                        clearable: "",
                        onEnter: getCouponInfo
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                      createVNode(BaseButton, {
                        size: "large",
                        loading: unref(couponLoading),
                        onClick: getCouponInfo
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(showCouponInput) ? "\u786E\u5B9A" : "\u5728\u6B64\u5151\u6362!"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    unref(coupon).is_valid ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-green-50 border border-green-200 rounded-lg px-4 py-3 mt-4"
                    }, [
                      createVNode("div", { class: "font-medium" }, "\u4F18\u60E0\u5238: " + toDisplayString(unref(coupon).name), 1),
                      createVNode("div", { class: "flex justify-between w-full mt-2" }, [
                        unref(coupon).type === "discount" ? (openBlock(), createBlock("span", { key: 0 }, "\u6298\u6263\u5238\uFF1A" + toDisplayString((Number(unref(coupon).value) * 10).toFixed(1)) + "\u6298", 1)) : unref(coupon).type === "amount" ? (openBlock(), createBlock("span", { key: 1 }, "\u7ACB\u51CF\u5238\uFF1A\uFFE5" + toDisplayString(Number(unref(coupon).value).toFixed(2)), 1)) : unref(coupon).type === "free_trial" ? (openBlock(), createBlock("span", { key: 2 }, "\u6298\u6263: -100%")) : createCommentVNode("", true),
                        unref(coupon).min_amount || unref(coupon).max_discount ? (openBlock(), createBlock("div", { key: 3 }, [
                          unref(coupon).min_amount ? (openBlock(), createBlock("span", { key: 0 }, "\u6EE1" + toDisplayString(Number(unref(coupon).min_amount).toFixed(2)) + "\u5143\u53EF\u7528", 1)) : createCommentVNode("", true),
                          unref(coupon).max_discount && unref(coupon).type === "discount" ? (openBlock(), createBlock("span", { key: 1 }, " \xB7 \u6700\u9AD8\u51CF" + toDisplayString(Number(unref(coupon).max_discount).toFixed(2)) + "\u5143 ", 1)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "card-white" }, [
                    createVNode("div", { class: "text-lg font-medium mb-4" }, "\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F"),
                    createVNode(RadioGroup, {
                      modelValue: unref(selectedPaymentMethod),
                      "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : selectedPaymentMethod = $event
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-3 w-full" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (method) => {
                            return createVNode("div", {
                              key: method.id,
                              onClick: ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = method.id : selectedPaymentMethod = method.id,
                              class: ["flex p-4 border rounded-lg cp transition-all duration-200 hover:bg-item", unref(selectedPaymentMethod) === method.id && "bg-item"]
                            }, [
                              createVNode("div", { class: "flex items-center flex-1 gap-4" }, [
                                method.id === "wechat" ? (openBlock(), createBlock(_component_IconSimpleIconsWechat, {
                                  key: 0,
                                  class: "text-xl color-green-500"
                                })) : (openBlock(), createBlock(_component_IconUiwAlipay, {
                                  key: 1,
                                  class: "text-xl color-blue"
                                })),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-medium color-main" }, toDisplayString(method.name), 1),
                                  createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(method.description), 1)
                                ])
                              ]),
                              createVNode(Radio, {
                                value: method.id,
                                label: ""
                              }, null, 8, ["value"])
                            ], 10, ["onClick"]);
                          }), 64))
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "card-white" }, [
                    createVNode("div", { class: "text-lg font-semibold mb-4" }, "\u8BA2\u5355\u6982\u8981"),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("div", { class: "text-purple-600 text-sm mb-2" }, "\u4ED8\u8D39\u65B9\u6848\uFF08" + toDisplayString((_k = selectPlan.value) == null ? void 0 : _k.name) + "\uFF09\u8BA2\u9605", 1),
                      createVNode("div", { class: "mb-4" }, "\u4ECE " + toDisplayString(startDate.value) + " \u5F00\u59CB:", 1)
                    ]),
                    createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                      createVNode("div", { class: "flex items-baseline" }, [
                        createVNode("span", {
                          class: ["font-semibold", ((_l = selectPlan.value) == null ? void 0 : _l.id) === "month_auto" ? "text-3xl" : "text-xl"]
                        }, " \uFFE5" + toDisplayString((_m = selectPlan.value) == null ? void 0 : _m.price), 3),
                        createVNode("span", { class: "ml-2" }, "/ " + toDisplayString((_n = selectPlan.value) == null ? void 0 : _n.unit), 1)
                      ]),
                      ((_o = selectPlan.value) == null ? void 0 : _o.id) !== "month_auto" ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(InputNumber, {
                          min: 1,
                          modelValue: unref(duration),
                          "onUpdate:modelValue": ($event) => isRef(duration) ? duration.value = $event : duration = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true)
                    ]),
                    unref(coupon).is_valid ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-4"
                    }, [
                      enoughDiscount.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-baseline text-gray-500 line-through"
                      }, [
                        createVNode("span", { class: "text-lg" }, "\u539F\u4EF7\uFF1A\uFFE5" + toDisplayString(Number(originalPrice.value).toFixed(2)), 1),
                        createVNode("span", { class: "ml-2" }, "/ " + toDisplayString((_p = selectPlan.value) == null ? void 0 : _p.unit), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "text-sm" }, [
                        enoughDiscount.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-green-600 flex items-center"
                        }, [
                          createVNode(_component_IconStreamlineDiscountPercentCoupon, { class: "mr-2" }),
                          createVNode("span", null, "\u5DF2\u4F18\u60E0\uFF1A\uFFE5" + toDisplayString((Number(originalPrice.value) - Number(endPrice.value)).toFixed(2)), 1)
                        ])) : (openBlock(), createBlock("span", { key: 1 }, "\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\uFF1A\u672A\u6EE1\u8DB3\u6761\u4EF6"))
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-baseline mb-4" }, [
                      createVNode("span", { class: "text-2xl font-semibold" }, "\u603B\u8BA1\uFF1A"),
                      createVNode("span", { class: "text-3xl font-semibold" }, "\uFFE5" + toDisplayString(endPrice.value), 1)
                    ]),
                    createVNode("div", { class: "bg-second text-sm px-4 py-3 rounded-lg mb-4 text-gray-600" }, " \u4F1A\u5458\u5C5E\u4E8E\u865A\u62DF\u670D\u52A1\uFF0C\u4E00\u7ECF\u8D2D\u4E70\u6FC0\u6D3B\u540E\u4E0D\u652F\u6301\u9000\u6B3E\u3002\u8BF7\u5728\u8D2D\u4E70\u524D\u4ED4\u7EC6\u9605\u8BFB\u6743\u76CA\u8BF4\u660E\uFF0C\u786E\u8BA4\u7B26\u5408\u60A8\u7684\u9700\u6C42\u518D\u8FDB\u884C\u652F\u4ED8\u3002 "),
                    createVNode(BaseButton, {
                      class: "w-full",
                      size: "large",
                      loading: unref(loading) || unref(startLoop),
                      type: !!unref(selectedPaymentMethod) ? "primary" : "info",
                      disabled: !unref(selectedPaymentMethod),
                      onClick: handlePayment
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4ED8\u6B3E ")
                      ]),
                      _: 1
                    }, 8, ["loading", "type", "disabled"])
                  ]),
                  createVNode("div", { class: "card-white flex flex-col" }, [
                    createVNode("div", { class: "text-lg font-semibold mb-4" }, "\u626B\u7801\u652F\u4ED8"),
                    createVNode("div", { class: "center flex-col relative flex-1" }, [
                      !unref(startLoop) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "center h-full w-full absolute left-0 top-0 bg-white z-2"
                      }, [
                        createVNode("div", { class: "w-5/10" }, "\u8BF7\u70B9\u51FB\u5DE6\u4FA7\u4ED8\u6B3E\u6309\u94AE\u540E\uFF0C\u652F\u4ED8\u4E8C\u7EF4\u7801\u5C06\u81EA\u52A8\u663E\u793A")
                      ])) : createCommentVNode("", true),
                      createVNode("iframe", {
                        id: "payFrame",
                        class: "w-[205px] h-[205px] center border-none"
                      }),
                      createVNode("div", { class: "text-center my-4" }, "\u8BF7\u4F7F\u7528\u652F\u4ED8\u5B9D\u626B\u7801\u652F\u4ED8"),
                      unref(showCheckBtn) ? (openBlock(), createBlock(BaseButton, {
                        key: 1,
                        size: "large",
                        loading: unref(checkLoading),
                        onClick: checkOrderStatus
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6211\u5DF2\u4ED8\u6B3E ")
                        ]),
                        _: 1
                      }, 8, ["loading"])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(user)/vip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vip = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab3bc972"]]);

export { vip as default };
//# sourceMappingURL=vip-CsbRW_gy.mjs.map
