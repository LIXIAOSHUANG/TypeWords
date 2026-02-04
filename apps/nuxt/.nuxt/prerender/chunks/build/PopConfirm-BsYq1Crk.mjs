import { Transition, Teleport, createVNode, isVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { B as BaseButton } from './BaseButton-DUaQjEVD.mjs';
import { h as _export_sfc } from './server.mjs';

function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const _sfc_main = {
  name: "PopConfirm",
  components: {
    Teleport,
    Transition,
    BaseButton
  },
  props: {
    title: {
      type: [String, Array],
      default() {
        return "";
      },
      validator(value) {
        if (Array.isArray(value)) {
          return value.every((item) => typeof item === "object" && item !== null && typeof item.text === "string" && ["normal", "bold", "red", "redBold"].includes(item.type));
        }
        return typeof value === "string";
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    titleItems() {
      if (typeof this.title === "string") {
        return [{
          text: this.title,
          type: "normal"
        }];
      }
      if (Array.isArray(this.title)) {
        return this.title;
      }
      return [];
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    (void 0).addEventListener("click", () => {
      this.show = false;
    });
    (void 0).addEventListener("keydown", () => {
      this.show = false;
    });
  },
  methods: {
    getTextStyle(type) {
      const styles = {
        normal: {
          fontWeight: "normal",
          color: "inherit"
        },
        bold: {
          fontWeight: "bold",
          color: "inherit"
        },
        red: {
          fontWeight: "normal",
          color: "red"
        },
        redBold: {
          fontWeight: "bold",
          color: "red"
        }
      };
      return styles[type] || styles.normal;
    },
    showPop(e) {
      if (this.disabled) return this.$emit("confirm");
      e == null ? void 0 : e.stopPropagation();
      let rect = e.target.getBoundingClientRect();
      this.show = true;
      this.$nextTick(() => {
        var _a, _b;
        let tip = (_b = (_a = this.$refs) == null ? void 0 : _a.tip) == null ? void 0 : _b.getBoundingClientRect();
        if (!tip) return;
        if (rect.top < 150) {
          this.$refs.tip.style.top = rect.top + rect.height + tip.height + 30 + "px";
        } else {
          this.$refs.tip.style.top = rect.top - 10 + "px";
        }
        this.$refs.tip.style.left = rect.left + rect.width / 2 - 50 + "px";
      });
    },
    confirm() {
      this.show = false;
      this.$emit("confirm");
    }
  },
  render() {
    let _slot, _slot2;
    let Vnode = this.$slots.default()[0];
    return createVNode("div", {
      "class": "pop-confirm leading-none"
    }, [createVNode(Teleport, {
      "to": "body"
    }, {
      default: () => [createVNode(Transition, {
        "name": "fade"
      }, {
        default: () => [this.show && createVNode("div", {
          "ref": "tip",
          "class": "pop-confirm-content shadow-2xl"
        }, [createVNode("div", {
          "class": "w-52 title-content"
        }, [this.titleItems.map((item, index) => createVNode("div", {
          "key": index,
          "style": this.getTextStyle(item.type),
          "class": "title-item"
        }, [item.text]))]), createVNode("div", {
          "class": "options"
        }, [createVNode(BaseButton, {
          "type": "info",
          "size": "small",
          "onClick": () => this.show = false
        }, _isSlot(_slot = this.$t("cancel")) ? _slot : {
          default: () => [_slot]
        }), createVNode(BaseButton, {
          "size": "small",
          "onClick": () => this.confirm()
        }, _isSlot(_slot2 = this.$t("confirm")) ? _slot2 : {
          default: () => [_slot2]
        })])])]
      })]
    }), createVNode(Vnode, {
      "onClick": (e) => this.showPop(e)
    }, null)]);
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopConfirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PopConfirm = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-baca95b3"]]), { __name: "PopConfirm" });

export { PopConfirm as P };
//# sourceMappingURL=PopConfirm-BsYq1Crk.mjs.map
