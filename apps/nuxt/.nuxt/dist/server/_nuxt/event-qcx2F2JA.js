import { watch } from "vue";
import "./eventBus-C4Xc_Jqv.js";
import { a as useRuntimeStore, b as useSettingStore } from "./BaseIcon-Cnj57dgy.js";
function useStartKeyboardEventListener() {
  useRuntimeStore();
  useSettingStore();
}
function useDisableEventListener(watchVal) {
  const runtimeStore = useRuntimeStore();
  watch(watchVal, (n) => {
    runtimeStore.disableEventListener = n;
  });
}
export {
  useDisableEventListener as a,
  useStartKeyboardEventListener as u
};
//# sourceMappingURL=event-qcx2F2JA.js.map
