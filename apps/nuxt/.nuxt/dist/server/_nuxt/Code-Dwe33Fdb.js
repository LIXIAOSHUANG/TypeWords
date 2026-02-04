import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { B as BaseButton } from "./BaseButton-DUaQjEVD.js";
import { e as sendCode } from "./user-BLvskJR1.js";
import { T as Toast } from "./BaseIcon-Cnj57dgy.js";
import { s as setInterval } from "./interval-CYUoNYlE.js";
import { g as useI18n } from "../server.mjs";
const PHONE_CONFIG = {
  // 验证码长度
  codeLength: 6,
  // 验证码发送间隔（秒）
  sendInterval: 60,
  // 手机号正则表达式（中国大陆）
  phoneRegex: /^1[2-9]\d{9}$/
};
const EMAIL_CONFIG = {
  // 邮箱正则表达式
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};
const PASSWORD_CONFIG = {
  // 密码最小长度
  minLength: 9,
  // 密码最大长度
  maxLength: 20
};
const validateEmail = (email) => {
  return EMAIL_CONFIG.emailRegex.test(email);
};
const validatePhone = (phone) => {
  return PHONE_CONFIG.phoneRegex.test(phone);
};
const codeRules = [
  { required: true, message: "请输入验证码", trigger: "blur" },
  { min: PHONE_CONFIG.codeLength, message: `请输入 ${PHONE_CONFIG.codeLength} 位验证码`, trigger: "blur" }
];
const accountRules = [
  { required: true, message: "请输入手机号/邮箱地址", trigger: "blur" },
  {
    validator: (rule, value) => {
      if (!validatePhone(value) && !validateEmail(value)) {
        throw new Error("请输入有效的手机号或邮箱地址");
      }
    },
    trigger: "blur"
  }
];
const emailRules = [
  { required: true, message: "请输入邮箱地址", trigger: "blur" },
  {
    validator: (rule, value) => {
      if (!validateEmail(value)) {
        throw new Error("请输入有效的邮箱地址");
      }
    },
    trigger: "blur"
  }
];
const phoneRules = [
  { required: true, message: "请输入手机号", trigger: "blur" },
  {
    validator: (rule, value) => {
      if (!validatePhone(value)) {
        throw new Error("请输入有效的手机号");
      }
    },
    trigger: "blur"
  }
];
const passwordRules = [
  { required: true, message: "请输入密码", trigger: "blur" },
  {
    min: PASSWORD_CONFIG.minLength,
    max: PASSWORD_CONFIG.maxLength,
    message: `密码长度为 ${PASSWORD_CONFIG.minLength}-${PASSWORD_CONFIG.maxLength} 位`,
    trigger: "blur"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Code",
  __ssrInlineRender: true,
  props: {
    validateField: { type: Function },
    type: null,
    val: null,
    size: { default: "large" }
  },
  setup(__props) {
    const { t: $t } = useI18n();
    let isSendingCode = ref(false);
    let codeCountdown = ref(0);
    const props = __props;
    async function sendVerificationCode() {
      let res = props.validateField();
      if (res) {
        try {
          isSendingCode.value = true;
          const res2 = await sendCode({ val: props.val, type: props.type });
          if (res2.success) {
            codeCountdown.value = PHONE_CONFIG.sendInterval;
            const timer = setInterval(() => {
              codeCountdown.value--;
              if (codeCountdown.value <= 0) {
                clearInterval(timer);
              }
            }, 1e3);
          } else {
            Toast.error(res2.msg || $t("send_failed"));
          }
        } catch (error) {
          console.error("Send code error:", error);
          Toast.error($t("send_code_failed"));
        } finally {
          isSendingCode.value = false;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BaseButton, mergeProps({
        onClick: sendVerificationCode,
        disabled: unref(isSendingCode) || unref(codeCountdown) > 0,
        type: "info",
        size: props.size,
        style: { "border": "1px solid var(--color-input-border)" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(codeCountdown) > 0 ? `${unref(codeCountdown)}s` : unref(isSendingCode) ? unref($t)("sending") : unref($t)("send_code"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(codeCountdown) > 0 ? `${unref(codeCountdown)}s` : unref(isSendingCode) ? unref($t)("sending") : unref($t)("send_code")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/Code.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Code = Object.assign(_sfc_main, { __name: "Code" });
export {
  Code as C,
  PHONE_CONFIG as P,
  phoneRules as a,
  PASSWORD_CONFIG as b,
  codeRules as c,
  accountRules as d,
  emailRules as e,
  passwordRules as p
};
//# sourceMappingURL=Code-Dwe33Fdb.js.map
