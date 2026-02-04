import { defineStore } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import { b as useSettingStore } from './BaseIcon-Cnj57dgy.mjs';
import { l as WordPracticeModeStageMap, m as WordPracticeStageNameMap, n as WordPracticeStage } from './env-CUoXYOyW.mjs';

const usePracticeStore = defineStore("practice", {
  state: () => {
    return {
      stage: WordPracticeStage.FollowWriteNewWord,
      spend: 0,
      startDate: Date.now(),
      total: 0,
      newWordNumber: 0,
      reviewWordNumber: 0,
      writeWordNumber: 0,
      inputWordNumber: 0,
      wrong: 0
    };
  },
  getters: {
    getStageName: (state) => {
      return WordPracticeStageNameMap[state.stage];
    },
    nextStage: (state) => {
      const settingStore = useSettingStore();
      const stages = WordPracticeModeStageMap[settingStore.wordPracticeMode];
      const index = stages.findIndex((v) => v === state.stage);
      return stages[index + 1];
    }
  }
});

export { usePracticeStore as u };
//# sourceMappingURL=practice-DjPnwpm9.mjs.map
