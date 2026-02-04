import { defineComponent, defineAsyncComponent, useModel, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, mergeModels, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { T as Toast } from './BaseIcon-Cnj57dgy.mjs';
import { O as Origin } from './env-CUoXYOyW.mjs';
import { set } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/idb-keyval/dist/index.js';
import { s as setInterval } from './interval-CYUoNYlE.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MigrateDialog",
  __ssrInlineRender: true,
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["ok"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const Dialog = defineAsyncComponent(() => import('./Dialog-BoKDmA_Y.mjs'));
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
        if (!migrateWin) return reject("\u5F39\u7A97\u88AB\u963B\u6B62\uFF0C\u8BF7\u5728\u7F51\u5740\u8F93\u5165\u680F\u6700\u53F3\u8FB9\uFF0C\u70B9\u51FB\u5141\u8BB8\u5F39\u7A97");
        async function onMessage(event) {
          var _a;
          if (event.origin !== OLD_ORIGIN) return;
          if (((_a = event.data) == null ? void 0 : _a.type) !== "MIGRATION_RESULT") return;
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
        console.log("\u8FC1\u79FB\u5B8C\u6210");
        Toast.success("\u8FC1\u79FB\u5B8C\u6210");
        model.value = false;
        emit("ok");
      } catch (e) {
        Toast.error("\u8FC1\u79FB\u5931\u8D25\uFF1A" + e);
        console.error("\u8FC1\u79FB\u5931\u8D25", e);
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
            _push2(`<div class="px-4 flex-col center w-100"${_scopeId}><h2 class="text-align-center text-2xl"${_scopeId}>${ssrInterpolate(_ctx.$t("migrate_new_domain"))} <span class="color-blue"${_scopeId}>${ssrInterpolate(unref(Origin))}</span></h2><h3${_scopeId}>${ssrInterpolate(_ctx.$t("migrate_old_domain_notice"))}</h3><div${_scopeId}> \u5982\u679C\u60A8\u4E0D\u60F3\u6B64\u65F6\u8FC1\u79FB\uFF0C\u5173\u95ED\u5F39\u7A97\u540E\uFF0C\u60A8\u53EF\u968F\u65F6\u5728\u201C\u8BBE\u7F6E\u201D -&gt; \u201C\u6570\u636E\u7BA1\u7406\u201D \u91CC\u9762\u518D\u6B21\u8FDB\u884C </div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 flex-col center w-100" }, [
                createVNode("h2", { class: "text-align-center text-2xl" }, [
                  createTextVNode(toDisplayString(_ctx.$t("migrate_new_domain")) + " ", 1),
                  createVNode("span", { class: "color-blue" }, toDisplayString(unref(Origin)), 1)
                ]),
                createVNode("h3", null, toDisplayString(_ctx.$t("migrate_old_domain_notice")), 1),
                createVNode("div", null, " \u5982\u679C\u60A8\u4E0D\u60F3\u6B64\u65F6\u8FC1\u79FB\uFF0C\u5173\u95ED\u5F39\u7A97\u540E\uFF0C\u60A8\u53EF\u968F\u65F6\u5728\u201C\u8BBE\u7F6E\u201D -> \u201C\u6570\u636E\u7BA1\u7406\u201D \u91CC\u9762\u518D\u6B21\u8FDB\u884C ")
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

export { MigrateDialog as M };
//# sourceMappingURL=MigrateDialog-DTKAmkmx.mjs.map
