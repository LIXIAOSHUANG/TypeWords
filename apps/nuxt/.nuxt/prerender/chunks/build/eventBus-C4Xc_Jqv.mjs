import mitt from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/mitt/dist/mitt.mjs';

const emitter = mitt();
const EventKey = {
  resetWord: "resetWord",
  openStatModal: "openStatModal",
  openWordListModal: "openWordListModal",
  closeOther: "closeOther",
  keydown: "keydown",
  keyup: "keyup",
  onTyping: "onTyping",
  repeatStudy: "repeatStudy",
  continueStudy: "continueStudy",
  write: "write",
  editDict: "editDict",
  openMyDictDialog: "openMyDictDialog",
  stateInitEnd: "stateInitEnd"
};
function useEvents(arrs) {
}

export { EventKey as E, emitter as e, useEvents as u };
//# sourceMappingURL=eventBus-C4Xc_Jqv.mjs.map
