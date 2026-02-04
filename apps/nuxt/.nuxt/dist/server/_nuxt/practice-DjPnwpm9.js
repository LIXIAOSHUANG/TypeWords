import { defineStore } from "pinia";
import { b as useSettingStore } from "./BaseIcon-Cnj57dgy.js";
import { r as WordPracticeModeStageMap, p as WordPracticeStageNameMap, o as WordPracticeStage } from "./env-CUoXYOyW.js";
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
export {
  usePracticeStore as u
};
//# sourceMappingURL=practice-DjPnwpm9.js.map
