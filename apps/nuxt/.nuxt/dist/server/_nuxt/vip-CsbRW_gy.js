import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, ref, computed, watch, withCtx, unref, createTextVNode, createVNode, toDisplayString, isRef, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { _ as __unplugin_components_3 } from "./wechat-CXtsDFCA.js";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { B as BasePage } from "./BasePage-DMJ6cvww.js";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { useRouter } from "vue-router";
import { u as useUserStore } from "./user-BLvskJR1.js";
import { H as Header } from "./Header-SpucEd11.js";
import { r as request, _ as _dateFormat, T as Toast, h as _nextTick } from "./BaseIcon-Cnj57dgy.js";
import { R as RadioGroup, a as Radio } from "./Radio-WTKpkBn7.js";
import { I as InputNumber } from "./InputNumber-CwEqYfu9.js";
import { B as BaseInput } from "./BaseInput-mlIHP8lZ.js";
import { P as PopConfirm } from "./PopConfirm-BsYq1Crk.js";
import { s as setInterval } from "./interval-CYUoNYlE.js";
import { h as _export_sfc } from "../server.mjs";
import "./env-CUoXYOyW.js";
import "@floating-ui/dom";
import "pinia";
import "./BackIcon-D_XswP1e.js";
import "./chevron-left28-filled-DoP3x3Jo.js";
import "idb-keyval";
import "axios";
import "dayjs";
import "dayjs/plugin/duration.js";
import "nanoid";
import "./eye16-regular-Cm9O3Lp0.js";
import "./event-qcx2F2JA.js";
import "./eventBus-C4Xc_Jqv.js";
import "mitt";
import "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/hookable/dist/index.mjs";
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
    const member = computed(() => userStore.user?.member ?? {});
    const memberEndDate = computed(() => {
      if (member.value?.endDate === null) return "永久";
      return member.value?.endDate;
    });
    let data = ref({});
    const plans = computed(() => {
      let list = [];
      if (data.value?.level) {
        list.push({
          id: "month",
          name: "月付",
          price: data.value.level.price,
          unit: "月"
        });
        list.push({
          id: "month_auto",
          name: "连续包月",
          price: data.value.level.price_auto,
          unit: "月",
          highlight: "性价比更高",
          autoRenew: true
        });
        list.push({
          id: "year",
          name: "年度会员",
          price: data.value.level.yearly_price,
          unit: "年",
          highlight: "年度优惠"
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
        name: "支付宝",
        description: "使用支付宝支付"
      }
    ];
    const currentPlan = computed(() => {
      return plans.value.find((v) => v.id === member.value?.plan) ?? null;
    });
    const selectPlan = computed(() => {
      return plans.value.find((v) => v.id === selectedPlanId.value) ?? null;
    });
    const originalPrice = computed(() => {
      return selectPlan.value?.id === "month_auto" ? Number(selectPlan.value?.price) : Number(duration.value) * Number(selectPlan.value?.price);
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
      if (member.value?.active) {
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
        Toast.success("取消成功");
        userStore.init();
      } else {
        Toast.error(res.msg || "取消失败");
      }
      loading2.value = false;
    }
    function getPlanButtonText(plan) {
      if (plan.id === selectedPlanId.value) return "已选中";
      if (plan.id === currentPlan.value?.id) return "当前计划";
      return "选择";
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
        Toast.error(res.msg || "付款失败");
      }
      loading.value = false;
    }
    async function checkOrderStatus() {
      if (checkLoading.value) return;
      checkLoading.value = true;
      let res = await alipayQuery({ orderNo: orderNo.value });
      if (!res.success) {
        Toast.info(res.msg || "未付款");
      }
      checkLoading.value = false;
    }
    let couponLoading = ref(false);
    async function getCouponInfo() {
      if (showCouponInput.value) {
        if (!coupon.value.code) return Toast.info("请输入优惠券");
        if (couponLoading.value) return;
        couponLoading.value = true;
        let res = await couponInfo(coupon.value);
        if (res.success) {
          if (res.data.is_valid) {
            coupon.value = res.data;
          } else {
            coupon.value = { code: coupon.value.code };
            Toast.info("优惠券已失效");
          }
        } else {
          coupon.value = { code: coupon.value.code };
          Toast.error(res.msg || "优惠券无效");
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
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-ab3bc972${_scopeId}><div class="card-white" data-v-ab3bc972${_scopeId}>`);
            _push2(ssrRenderComponent(Header, { title: "会员介绍" }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-3 grid-rows-3 gap-3" data-v-ab3bc972${_scopeId}><!--[-->`);
            ssrRenderList(unref(data).benefits, (f) => {
              _push2(`<div class="text-lg flex items-center" data-v-ab3bc972${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentCheckmarkCircle20Regular, { class: "mr-2 text-green-600" }, null, _parent2, _scopeId));
              _push2(`<span data-v-ab3bc972${_scopeId}><span data-v-ab3bc972${_scopeId}>${ssrInterpolate(f.name)}</span>`);
              if (f.value !== "true") {
                _push2(`<span data-v-ab3bc972${_scopeId}>${ssrInterpolate(`(${f.value}${f.unit ?? ""})`)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (member.value?.active) {
              _push2(`<div class="card-white bg-green-50 dark:bg-item border border-green-200 mt-3 mb-6" data-v-ab3bc972${_scopeId}><div class="flex items-center justify-between" data-v-ab3bc972${_scopeId}><div class="flex items-center" data-v-ab3bc972${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconFluentCheckmarkCircle20Regular, { class: "mr-2 text-green-600" }, null, _parent2, _scopeId));
              _push2(`<div data-v-ab3bc972${_scopeId}><div class="font-semibold text-green-800" data-v-ab3bc972${_scopeId}>当前计划：${ssrInterpolate(currentPlan.value?.name)}</div><div class="text-sm text-green-600" data-v-ab3bc972${_scopeId}>到期时间：${ssrInterpolate(memberEndDate.value)}</div></div></div><div class="text-align-end space-y-2" data-v-ab3bc972${_scopeId}>`);
              if (member.value.autoRenew) {
                _push2(`<div class="flex items-center gap-space" data-v-ab3bc972${_scopeId}><div class="flex items-center text-sm text-gray-600" data-v-ab3bc972${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentArrowRepeatAll20Regular, { class: "mr-1" }, null, _parent2, _scopeId));
                _push2(`<span data-v-ab3bc972${_scopeId}>自动续费已开启</span></div>`);
                _push2(ssrRenderComponent(PopConfirm, {
                  title: "确认取消？",
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
                            _push4(`关闭`);
                          } else {
                            return [
                              createTextVNode("关闭")
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
                            createTextVNode("关闭")
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
            _push2(`<div class="flex justify-between" data-v-ab3bc972${_scopeId}><div class="title" data-v-ab3bc972${_scopeId}>选择适合您的套餐</div><div class="subtitle" data-v-ab3bc972${_scopeId}>三种方案，按需选择</div></div><div class="plans" data-v-ab3bc972${_scopeId}><!--[-->`);
            ssrRenderList(plans.value, (p) => {
              _push2(`<div class="card-white p-0 overflow-hidden flex flex-col" data-v-ab3bc972${_scopeId}><div class="text-2xl font-bold bg-gray-300 dark:bg-third px-6 py-4" data-v-ab3bc972${_scopeId}>${ssrInterpolate(p.name)}</div><div class="p-6 flex flex-col justify-between flex-1" data-v-ab3bc972${_scopeId}><div class="plan-head" data-v-ab3bc972${_scopeId}><div class="price" data-v-ab3bc972${_scopeId}><span class="amount" data-v-ab3bc972${_scopeId}>¥${ssrInterpolate(p.price)}</span><span class="unit" data-v-ab3bc972${_scopeId}>/ 每${ssrInterpolate(p.unit)}</span></div>`);
              if (p.highlight) {
                _push2(`<div class="tag" data-v-ab3bc972${_scopeId}>${ssrInterpolate(p.highlight)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (p.autoRenew) {
                _push2(`<div class="text-sm flex items-center mt-4" data-v-ab3bc972${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconFluentArrowRepeatAll20Regular, { class: "mr-2" }, null, _parent2, _scopeId));
                _push2(` 开启自动续费，可随时关闭 </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(BaseButton, {
                class: "w-full mt-4",
                size: "large",
                type: p.id === currentPlan.value?.id || p.id === unref(selectedPlanId) ? "primary" : "info",
                disabled: p.id === currentPlan.value?.id,
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
              _push2(`<div id="pay" class="mb-50" data-v-ab3bc972${_scopeId}><div class="text-center mb-6" data-v-ab3bc972${_scopeId}><h1 class="text-xl font-semibold mb-2" data-v-ab3bc972${_scopeId}>安全支付</h1><p class="" data-v-ab3bc972${_scopeId}>选择支付方式完成订单</p></div><div class="center" data-v-ab3bc972${_scopeId}><div class="card-white w-5/10" data-v-ab3bc972${_scopeId}><div class="flex items-center justify-between gap-6" data-v-ab3bc972${_scopeId}>`);
              if (!unref(showCouponInput)) {
                _push2(`<div class="center gap-2" data-v-ab3bc972${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconStreamlineDiscountPercentCoupon, null, null, _parent2, _scopeId));
                _push2(`<span data-v-ab3bc972${_scopeId}>有优惠券？</span></div>`);
              } else {
                _push2(ssrRenderComponent(BaseInput, {
                  modelValue: unref(coupon).code,
                  "onUpdate:modelValue": ($event) => unref(coupon).code = $event,
                  placeholder: "请输入优惠券",
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
                    _push3(`${ssrInterpolate(unref(showCouponInput) ? "确定" : "在此兑换!")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(showCouponInput) ? "确定" : "在此兑换!"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(coupon).is_valid) {
                _push2(`<div class="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mt-4" data-v-ab3bc972${_scopeId}><div class="font-medium" data-v-ab3bc972${_scopeId}>优惠券: ${ssrInterpolate(unref(coupon).name)}</div><div class="flex justify-between w-full mt-2" data-v-ab3bc972${_scopeId}>`);
                if (unref(coupon).type === "discount") {
                  _push2(`<span data-v-ab3bc972${_scopeId}>折扣券：${ssrInterpolate((Number(unref(coupon).value) * 10).toFixed(1))}折</span>`);
                } else if (unref(coupon).type === "amount") {
                  _push2(`<span data-v-ab3bc972${_scopeId}>立减券：￥${ssrInterpolate(Number(unref(coupon).value).toFixed(2))}</span>`);
                } else if (unref(coupon).type === "free_trial") {
                  _push2(`<span data-v-ab3bc972${_scopeId}>折扣: -100%</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(coupon).min_amount || unref(coupon).max_discount) {
                  _push2(`<div data-v-ab3bc972${_scopeId}>`);
                  if (unref(coupon).min_amount) {
                    _push2(`<span data-v-ab3bc972${_scopeId}>满${ssrInterpolate(Number(unref(coupon).min_amount).toFixed(2))}元可用</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (unref(coupon).max_discount && unref(coupon).type === "discount") {
                    _push2(`<span data-v-ab3bc972${_scopeId}> · 最高减${ssrInterpolate(Number(unref(coupon).max_discount).toFixed(2))}元 </span>`);
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
              _push2(`</div></div><div class="grid grid-cols-3 gap-8" data-v-ab3bc972${_scopeId}><div class="card-white" data-v-ab3bc972${_scopeId}><div class="text-lg font-medium mb-4" data-v-ab3bc972${_scopeId}>选择支付方式</div>`);
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
              _push2(`</div><div class="card-white" data-v-ab3bc972${_scopeId}><div class="text-lg font-semibold mb-4" data-v-ab3bc972${_scopeId}>订单概要</div><div class="mb-4" data-v-ab3bc972${_scopeId}><div class="text-purple-600 text-sm mb-2" data-v-ab3bc972${_scopeId}>付费方案（${ssrInterpolate(selectPlan.value?.name)}）订阅</div><div class="mb-4" data-v-ab3bc972${_scopeId}>从 ${ssrInterpolate(startDate.value)} 开始:</div></div><div class="flex justify-between items-center mb-4" data-v-ab3bc972${_scopeId}><div class="flex items-baseline" data-v-ab3bc972${_scopeId}><span class="${ssrRenderClass([selectPlan.value?.id === "month_auto" ? "text-3xl" : "text-xl", "font-semibold"])}" data-v-ab3bc972${_scopeId}> ￥${ssrInterpolate(selectPlan.value?.price)}</span><span class="ml-2" data-v-ab3bc972${_scopeId}>/ ${ssrInterpolate(selectPlan.value?.unit)}</span></div>`);
              if (selectPlan.value?.id !== "month_auto") {
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
                  _push2(`<div class="flex items-baseline text-gray-500 line-through" data-v-ab3bc972${_scopeId}><span class="text-lg" data-v-ab3bc972${_scopeId}>原价：￥${ssrInterpolate(Number(originalPrice.value).toFixed(2))}</span><span class="ml-2" data-v-ab3bc972${_scopeId}>/ ${ssrInterpolate(selectPlan.value?.unit)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="text-sm" data-v-ab3bc972${_scopeId}>`);
                if (enoughDiscount.value) {
                  _push2(`<div class="text-green-600 flex items-center" data-v-ab3bc972${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_IconStreamlineDiscountPercentCoupon, { class: "mr-2" }, null, _parent2, _scopeId));
                  _push2(`<span data-v-ab3bc972${_scopeId}>已优惠：￥${ssrInterpolate((Number(originalPrice.value) - Number(endPrice.value)).toFixed(2))}</span></div>`);
                } else {
                  _push2(`<span data-v-ab3bc972${_scopeId}>优惠券不可用：未满足条件</span>`);
                }
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-baseline mb-4" data-v-ab3bc972${_scopeId}><span class="text-2xl font-semibold" data-v-ab3bc972${_scopeId}>总计：</span><span class="text-3xl font-semibold" data-v-ab3bc972${_scopeId}>￥${ssrInterpolate(endPrice.value)}</span></div><div class="bg-second text-sm px-4 py-3 rounded-lg mb-4 text-gray-600" data-v-ab3bc972${_scopeId}> 会员属于虚拟服务，一经购买激活后不支持退款。请在购买前仔细阅读权益说明，确认符合您的需求再进行支付。 </div>`);
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
                    _push3(` 付款 `);
                  } else {
                    return [
                      createTextVNode(" 付款 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="card-white flex flex-col" data-v-ab3bc972${_scopeId}><div class="text-lg font-semibold mb-4" data-v-ab3bc972${_scopeId}>扫码支付</div><div class="center flex-col relative flex-1" data-v-ab3bc972${_scopeId}>`);
              if (!unref(startLoop)) {
                _push2(`<div class="center h-full w-full absolute left-0 top-0 bg-white z-2" data-v-ab3bc972${_scopeId}><div class="w-5/10" data-v-ab3bc972${_scopeId}>请点击左侧付款按钮后，支付二维码将自动显示</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<iframe id="payFrame" class="w-[205px] h-[205px] center border-none" data-v-ab3bc972${_scopeId}></iframe><div class="text-center my-4" data-v-ab3bc972${_scopeId}>请使用支付宝扫码支付</div>`);
              if (unref(showCheckBtn)) {
                _push2(ssrRenderComponent(BaseButton, {
                  size: "large",
                  loading: unref(checkLoading),
                  onClick: checkOrderStatus
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` 我已付款 `);
                    } else {
                      return [
                        createTextVNode(" 我已付款 ")
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
                  createVNode(Header, { title: "会员介绍" }),
                  createVNode("div", { class: "grid grid-cols-3 grid-rows-3 gap-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).benefits, (f) => {
                      return openBlock(), createBlock("div", {
                        class: "text-lg flex items-center",
                        key: f.name
                      }, [
                        createVNode(_component_IconFluentCheckmarkCircle20Regular, { class: "mr-2 text-green-600" }),
                        createVNode("span", null, [
                          createVNode("span", null, toDisplayString(f.name), 1),
                          f.value !== "true" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(`(${f.value}${f.unit ?? ""})`), 1)) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                member.value?.active ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "card-white bg-green-50 dark:bg-item border border-green-200 mt-3 mb-6"
                }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_IconFluentCheckmarkCircle20Regular, { class: "mr-2 text-green-600" }),
                      createVNode("div", null, [
                        createVNode("div", { class: "font-semibold text-green-800" }, "当前计划：" + toDisplayString(currentPlan.value?.name), 1),
                        createVNode("div", { class: "text-sm text-green-600" }, "到期时间：" + toDisplayString(memberEndDate.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "text-align-end space-y-2" }, [
                      member.value.autoRenew ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-space"
                      }, [
                        createVNode("div", { class: "flex items-center text-sm text-gray-600" }, [
                          createVNode(_component_IconFluentArrowRepeatAll20Regular, { class: "mr-1" }),
                          createVNode("span", null, "自动续费已开启")
                        ]),
                        createVNode(PopConfirm, {
                          title: "确认取消？",
                          onConfirm: toggleAutoRenew
                        }, {
                          default: withCtx(() => [
                            createVNode(BaseButton, {
                              size: "small",
                              type: "info",
                              loading: unref(loading2)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("关闭")
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
                  createVNode("div", { class: "title" }, "选择适合您的套餐"),
                  createVNode("div", { class: "subtitle" }, "三种方案，按需选择")
                ]),
                createVNode("div", { class: "plans" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(plans.value, (p) => {
                    return openBlock(), createBlock("div", {
                      key: p.id,
                      class: "card-white p-0 overflow-hidden flex flex-col"
                    }, [
                      createVNode("div", { class: "text-2xl font-bold bg-gray-300 dark:bg-third px-6 py-4" }, toDisplayString(p.name), 1),
                      createVNode("div", { class: "p-6 flex flex-col justify-between flex-1" }, [
                        createVNode("div", { class: "plan-head" }, [
                          createVNode("div", { class: "price" }, [
                            createVNode("span", { class: "amount" }, "¥" + toDisplayString(p.price), 1),
                            createVNode("span", { class: "unit" }, "/ 每" + toDisplayString(p.unit), 1)
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
                          createTextVNode(" 开启自动续费，可随时关闭 ")
                        ])) : createCommentVNode("", true),
                        createVNode(BaseButton, {
                          class: "w-full mt-4",
                          size: "large",
                          type: p.id === currentPlan.value?.id || p.id === unref(selectedPlanId) ? "primary" : "info",
                          disabled: p.id === currentPlan.value?.id,
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
                  createVNode("h1", { class: "text-xl font-semibold mb-2" }, "安全支付"),
                  createVNode("p", { class: "" }, "选择支付方式完成订单")
                ]),
                createVNode("div", { class: "center" }, [
                  createVNode("div", { class: "card-white w-5/10" }, [
                    createVNode("div", { class: "flex items-center justify-between gap-6" }, [
                      !unref(showCouponInput) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "center gap-2"
                      }, [
                        createVNode(_component_IconStreamlineDiscountPercentCoupon),
                        createVNode("span", null, "有优惠券？")
                      ])) : (openBlock(), createBlock(BaseInput, {
                        key: 1,
                        modelValue: unref(coupon).code,
                        "onUpdate:modelValue": ($event) => unref(coupon).code = $event,
                        placeholder: "请输入优惠券",
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
                          createTextVNode(toDisplayString(unref(showCouponInput) ? "确定" : "在此兑换!"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    unref(coupon).is_valid ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-green-50 border border-green-200 rounded-lg px-4 py-3 mt-4"
                    }, [
                      createVNode("div", { class: "font-medium" }, "优惠券: " + toDisplayString(unref(coupon).name), 1),
                      createVNode("div", { class: "flex justify-between w-full mt-2" }, [
                        unref(coupon).type === "discount" ? (openBlock(), createBlock("span", { key: 0 }, "折扣券：" + toDisplayString((Number(unref(coupon).value) * 10).toFixed(1)) + "折", 1)) : unref(coupon).type === "amount" ? (openBlock(), createBlock("span", { key: 1 }, "立减券：￥" + toDisplayString(Number(unref(coupon).value).toFixed(2)), 1)) : unref(coupon).type === "free_trial" ? (openBlock(), createBlock("span", { key: 2 }, "折扣: -100%")) : createCommentVNode("", true),
                        unref(coupon).min_amount || unref(coupon).max_discount ? (openBlock(), createBlock("div", { key: 3 }, [
                          unref(coupon).min_amount ? (openBlock(), createBlock("span", { key: 0 }, "满" + toDisplayString(Number(unref(coupon).min_amount).toFixed(2)) + "元可用", 1)) : createCommentVNode("", true),
                          unref(coupon).max_discount && unref(coupon).type === "discount" ? (openBlock(), createBlock("span", { key: 1 }, " · 最高减" + toDisplayString(Number(unref(coupon).max_discount).toFixed(2)) + "元 ", 1)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "card-white" }, [
                    createVNode("div", { class: "text-lg font-medium mb-4" }, "选择支付方式"),
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
                    createVNode("div", { class: "text-lg font-semibold mb-4" }, "订单概要"),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("div", { class: "text-purple-600 text-sm mb-2" }, "付费方案（" + toDisplayString(selectPlan.value?.name) + "）订阅", 1),
                      createVNode("div", { class: "mb-4" }, "从 " + toDisplayString(startDate.value) + " 开始:", 1)
                    ]),
                    createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                      createVNode("div", { class: "flex items-baseline" }, [
                        createVNode("span", {
                          class: ["font-semibold", selectPlan.value?.id === "month_auto" ? "text-3xl" : "text-xl"]
                        }, " ￥" + toDisplayString(selectPlan.value?.price), 3),
                        createVNode("span", { class: "ml-2" }, "/ " + toDisplayString(selectPlan.value?.unit), 1)
                      ]),
                      selectPlan.value?.id !== "month_auto" ? (openBlock(), createBlock("div", { key: 0 }, [
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
                        createVNode("span", { class: "text-lg" }, "原价：￥" + toDisplayString(Number(originalPrice.value).toFixed(2)), 1),
                        createVNode("span", { class: "ml-2" }, "/ " + toDisplayString(selectPlan.value?.unit), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "text-sm" }, [
                        enoughDiscount.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-green-600 flex items-center"
                        }, [
                          createVNode(_component_IconStreamlineDiscountPercentCoupon, { class: "mr-2" }),
                          createVNode("span", null, "已优惠：￥" + toDisplayString((Number(originalPrice.value) - Number(endPrice.value)).toFixed(2)), 1)
                        ])) : (openBlock(), createBlock("span", { key: 1 }, "优惠券不可用：未满足条件"))
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-baseline mb-4" }, [
                      createVNode("span", { class: "text-2xl font-semibold" }, "总计："),
                      createVNode("span", { class: "text-3xl font-semibold" }, "￥" + toDisplayString(endPrice.value), 1)
                    ]),
                    createVNode("div", { class: "bg-second text-sm px-4 py-3 rounded-lg mb-4 text-gray-600" }, " 会员属于虚拟服务，一经购买激活后不支持退款。请在购买前仔细阅读权益说明，确认符合您的需求再进行支付。 "),
                    createVNode(BaseButton, {
                      class: "w-full",
                      size: "large",
                      loading: unref(loading) || unref(startLoop),
                      type: !!unref(selectedPaymentMethod) ? "primary" : "info",
                      disabled: !unref(selectedPaymentMethod),
                      onClick: handlePayment
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 付款 ")
                      ]),
                      _: 1
                    }, 8, ["loading", "type", "disabled"])
                  ]),
                  createVNode("div", { class: "card-white flex flex-col" }, [
                    createVNode("div", { class: "text-lg font-semibold mb-4" }, "扫码支付"),
                    createVNode("div", { class: "center flex-col relative flex-1" }, [
                      !unref(startLoop) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "center h-full w-full absolute left-0 top-0 bg-white z-2"
                      }, [
                        createVNode("div", { class: "w-5/10" }, "请点击左侧付款按钮后，支付二维码将自动显示")
                      ])) : createCommentVNode("", true),
                      createVNode("iframe", {
                        id: "payFrame",
                        class: "w-[205px] h-[205px] center border-none"
                      }),
                      createVNode("div", { class: "text-center my-4" }, "请使用支付宝扫码支付"),
                      unref(showCheckBtn) ? (openBlock(), createBlock(BaseButton, {
                        key: 1,
                        size: "large",
                        loading: unref(checkLoading),
                        onClick: checkOrderStatus
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 我已付款 ")
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
export {
  vip as default
};
//# sourceMappingURL=vip-CsbRW_gy.js.map
