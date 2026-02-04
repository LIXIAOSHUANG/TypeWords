import { watch } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { a as useRuntimeStore, b as useSettingStore } from './BaseIcon-Cnj57dgy.mjs';

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

export { useStartKeyboardEventListener as a, useDisableEventListener as u };
//# sourceMappingURL=event-qcx2F2JA.mjs.map
