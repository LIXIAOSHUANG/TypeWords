import { defineComponent, defineAsyncComponent, useModel, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, mergeModels, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { T as Toast } from "./BaseIcon-Cnj57dgy.js";
import { O as Origin } from "./env-CUoXYOyW.js";
import { set } from "idb-keyval";
import { s as setInterval } from "./interval-CYUoNYlE.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MigrateDialog",
  __ssrInlineRender: true,
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["ok"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const Dialog = defineAsyncComponent(() => import("./Dialog-BoKDmA_Y.js"));
    const model = useModel(__props, "modelValue");
    const emit = __emit;
    async function migrateFromOldSite() {
      return new Promise(async (resolve, reject) => {
        var OLD_ORIGIN = "https://2study.top";
        var IDB_KEYS = [
          "type-words-app-version",
          "typing-word-dict",
          "typing-word-setting",
          "typing-word-files"
        ];
        var LS_KEYS = [
          "PracticeSaveWord",
          "PracticeSaveArticle"
        ];
        const migrateWin = (void 0).open(`${OLD_ORIGIN}/migrate.html`, "_blank", "width=400,height=400");
        if (!migrateWin) return reject("弹窗被阻止，请在网址输入栏最右边，点击允许弹窗");
        async function onMessage(event) {
          if (event.origin !== OLD_ORIGIN) return;
          if (event.data?.type !== "MIGRATION_RESULT") return;
          const payload = event.data.payload;
          console.log("payload", payload);
          LS_KEYS.forEach((key) => {
            if (payload.localStorage[key] !== void 0) {
              localStorage.setItem(key, payload.localStorage[key]);
            }
          });
          for (let key of IDB_KEYS) {
            if (payload.indexedDB[key] !== void 0) {
              await set(key, payload.indexedDB[key]);
            }
          }
          (void 0).removeEventListener("message", onMessage);
          resolve(true);
        }
        (void 0).addEventListener("message", onMessage);
        setInterval();
      });
    }
    async function transfer() {
      try {
        await migrateFromOldSite();
        localStorage.setItem("__migrated_from_2study_top__", "1");
        console.log("迁移完成");
        Toast.success("迁移完成");
        model.value = false;
        emit("ok");
      } catch (e) {
        Toast.error("迁移失败：" + e);
        console.error("迁移失败", e);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Dialog), mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        footer: true,
        onOk: transfer,
        confirmButtonText: _ctx.$t("migrate_data"),
        title: _ctx.$t("migrate_data")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 flex-col center w-100"${_scopeId}><h2 class="text-align-center text-2xl"${_scopeId}>${ssrInterpolate(_ctx.$t("migrate_new_domain"))} <span class="color-blue"${_scopeId}>${ssrInterpolate(unref(Origin))}</span></h2><h3${_scopeId}>${ssrInterpolate(_ctx.$t("migrate_old_domain_notice"))}</h3><div${_scopeId}> 如果您不想此时迁移，关闭弹窗后，您可随时在“设置” -&gt; “数据管理” 里面再次进行 </div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 flex-col center w-100" }, [
                createVNode("h2", { class: "text-align-center text-2xl" }, [
                  createTextVNode(toDisplayString(_ctx.$t("migrate_new_domain")) + " ", 1),
                  createVNode("span", { class: "color-blue" }, toDisplayString(unref(Origin)), 1)
                ]),
                createVNode("h3", null, toDisplayString(_ctx.$t("migrate_old_domain_notice")), 1),
                createVNode("div", null, " 如果您不想此时迁移，关闭弹窗后，您可随时在“设置” -> “数据管理” 里面再次进行 ")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MigrateDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MigrateDialog = Object.assign(_sfc_main, { __name: "MigrateDialog" });
export {
  MigrateDialog as M
};
//# sourceMappingURL=MigrateDialog-DTKAmkmx.js.map
