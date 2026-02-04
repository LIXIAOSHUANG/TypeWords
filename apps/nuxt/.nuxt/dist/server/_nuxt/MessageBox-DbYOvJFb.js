import { createVNode, render } from "vue";
import Dialog from "./Dialog-BoKDmA_Y.js";
class MessageBox {
  static confirm(content, title, onOk = () => void 0, onCancel = () => void 0, onClose = () => void 0, config = {}) {
    let container = (void 0).createElement("div");
    const close = () => {
      render(null, container);
      container.remove();
      onClose?.();
    };
    const vNode = createVNode(Dialog, {
      title,
      content,
      onCancel,
      confirm: onOk,
      onClose: close,
      footer: true,
      ...config
    });
    render(vNode, container);
    (void 0).body.append(container);
  }
  static notice(content, title) {
    let container = (void 0).createElement("div");
    let tempOnCancel = () => {
      render(null, container);
      container.remove();
    };
    const vNode = createVNode(Dialog, {
      title,
      content,
      onCancel: tempOnCancel
    });
    render(vNode, container);
    (void 0).body.append(container);
  }
}
export {
  MessageBox as M
};
//# sourceMappingURL=MessageBox-DbYOvJFb.js.map
