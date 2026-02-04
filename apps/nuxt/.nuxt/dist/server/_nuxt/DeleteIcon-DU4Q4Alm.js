import { markRaw, openBlock, createElementBlock, createElementVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { h as _export_sfc } from "../server.mjs";
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "fluent-delete20-regular", render });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconFluentDelete20Regular = __unplugin_components_0;
  _push(ssrRenderComponent(_component_IconFluentDelete20Regular, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/DeleteIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DeleteIcon = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "DeleteIcon" });
export {
  DeleteIcon as D
};
//# sourceMappingURL=DeleteIcon-DU4Q4Alm.js.map
