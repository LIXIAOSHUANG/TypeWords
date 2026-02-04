import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, defineAsyncComponent, ref, isRef, withCtx, createVNode, unref, toDisplayString, mergeProps, computed, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { B as BaseIcon, c as useBaseStore, v as msToHourMinute, l as loadJsLib, T as Toast } from './BaseIcon-Cnj57dgy.mjs';
import { _ as __unplugin_components_7 } from './BaseButton-DUaQjEVD.mjs';
import { G as GITHUB, O as Origin, A as APP_NAME, L as LIB_JS_URL } from './env-CUoXYOyW.mjs';
import { u as usePracticeStore } from './practice-DjPnwpm9.mjs';
import dayjs from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/dayjs/dayjs.min.js';
import { u as useUserStore } from './user-BLvskJR1.mjs';
import { P as Progress } from './Progress-C93deg99.mjs';
import { h as _export_sfc } from './server.mjs';
import { W as WeChat } from './WeChat-CaY8PzZX.mjs';

const _hoisted_1$8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
    }, null, -1)
  ])]);
}
const __unplugin_components_3 = markRaw({ name: "material-symbols-mail", render: render$8 });
const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"
    }, null, -1)
  ])]);
}
const __unplugin_components_2$1 = markRaw({ name: "ri-twitter-fill", render: render$7 });
const _hoisted_1$6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972a.794.794 0 0 0-.884-.618a.795.795 0 0 0-.692.794c0 .101-.002.666.001.777m-11.509 4.808c-.203.001-1.353.004-1.685.003a2.5 2.5 0 0 1-.766-.126a.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124c.66.01 1.32.002 1.981 0q.017 0 .023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01l-.01.08c-.027.397-.038.495-.234 3.06c-.012.24-.034.389-.135.607c-.026.057-.033.042.003.112c.046.092.681 1.523.787 1.74c.008.015.011.02.017.02c.008 0 .033-.026.047-.044q.219-.282.371-.606c.306-.635.44-1.325.486-1.706c.014-.11.021-.22.03-.33l.204-2.616l.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.4 1.4 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.4.4 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293q.114 1.473.233 2.946c.05.4.186 1.085.487 1.706c.103.215.223.419.37.606c.015.018.037.051.048.049c.02-.003.742-1.642.804-1.765c.036-.07.03-.055.003-.112m3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56q-.017 0-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.5.5 0 0 0-.02.191a.46.46 0 0 0 .23.378a1 1 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.5.5 0 0 0-.023.172a.47.47 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001q.017 0 .023-.015l.575-1.28a.025.025 0 0 0-.024-.035m-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829c0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047c.001.037.465 1.064.555 1.263c.01.02.03.033.051.033c.157.003.767.009.938-.014c.153-.02.3-.06.438-.132c.3-.156.49-.419.595-.765c.052-.172.075-.353.075-.533q.003-3.495-.007-6.991a.03.03 0 0 0-.032-.032zm11.784 6.896q-.002-.02-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084c-.37 0-1.11-.002-1.304 0c-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036s.013.008.058.008q2.622.003 5.243.002c.03-.001.034-.006.035-.033zm4.177-3.43q0 .021-.02.024c-.346.006-.692.004-1.037.004q-.021-.003-.022-.024q-.006-.651-.01-1.303c0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015c.093.025.16.107.165.204c.006.431.002 1.153.001 1.153m2.67.244a1.95 1.95 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21q.001-.198-.025-.394a1.8 1.8 0 0 0-.153-.53a1.53 1.53 0 0 0-.677-.71a2.2 2.2 0 0 0-1-.258c-.153-.003-.567 0-.72 0c-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007q-.008.008-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128v1.148s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003a.7.7 0 0 1 .28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185c0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033q.276.655.57 1.303a.05.05 0 0 0 .04.026c.17.005.34.002.51.003c.15-.002.517.004.666-.01a2 2 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981q.001-.191-.034-.38c0 .078-.029-.641-.724-.998"
    }, null, -1)
  ])]);
}
const __unplugin_components_1 = markRaw({ name: "simple-icons-xiaohongshu", render: render$6 });
const _hoisted_1$5 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M18.496 13.607c-.134-1.931-1.372-3.55-2.088-4.387c.1-.243.341-1.653-.593-2.615q.003-.035.002-.068C15.817 2.743 13.237.012 10 0C6.763.013 4.183 2.743 4.183 6.537q0 .035.002.068c-.934.962-.692 2.372-.593 2.615c-.715.837-1.953 2.456-2.088 4.387c-.024.508.051 1.248.288 1.577c.289.4 1.081-.081 1.648-1.362c.158.594.521 1.5 1.345 2.649c-1.378.33-1.771 1.752-1.307 2.53c.327.548 1.075.999 2.365.999c2.296 0 3.31-.645 3.763-1.095q.138-.147.394-.146q.256-.001.394.146c.453.45 1.467 1.095 3.762 1.095c1.29 0 2.039-.45 2.366-.999c.464-.778.07-2.2-1.307-2.53c.824-1.15 1.188-2.055 1.345-2.649c.567 1.281 1.36 1.763 1.648 1.362c.237-.33.312-1.07.288-1.577"
    }, null, -1)
  ])]);
}
const __unplugin_components_0$1 = markRaw({ name: "uiw-qq", render: render$5 });
const _imports_0 = publicAssetsURL("/imgs/channel/xhs.png");
const _imports_1 = publicAssetsURL("/imgs/channel/qq.jpg");
const _hoisted_1$4 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M15.5 17a.5.5 0 0 1 .09.992L15.5 18h-11a.5.5 0 0 1-.09-.992L4.5 17zM10 2.002a.5.5 0 0 1 .492.41l.008.09l-.004 11.794l3.645-3.648a.5.5 0 0 1 .638-.059l.07.058a.5.5 0 0 1 .058.638l-.058.07l-4.492 4.5a.5.5 0 0 1-.255.136l-.106.01a.5.5 0 0 1-.395-.195l-4.457-4.451a.5.5 0 0 1 .637-.766l.07.058l3.645 3.641L9.5 2.502a.5.5 0 0 1 .5-.5"
    }, null, -1)
  ])]);
}
const __unplugin_components_5 = markRaw({ name: "fluent-arrow-download20-regular", render: render$4 });
const _hoisted_1$3 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M8 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM4 6a2 2 0 0 1 1-1.732V14.5A2.5 2.5 0 0 0 7.5 17h6.232A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5z"
    }, null, -1)
  ])]);
}
const __unplugin_components_4$1 = markRaw({ name: "fluent-copy20-regular", render: render$3 });
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "m19 1l-1.26 2.75L15 5l2.74 1.26L19 9l1.25-2.74L23 5l-2.75-1.25M9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5M19 15l-1.26 2.74L15 19l2.74 1.25L19 23l1.25-2.75L23 19l-2.75-1.26"
    }, null, -1)
  ])]);
}
const __unplugin_components_2 = markRaw({ name: "mdi-sparkles", render: render$2 });
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    }, null, -1)
  ])]);
}
const __unplugin_components_4 = markRaw({ name: "simple-icons-github", render: render$1 });
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M9.5 3a.5.5 0 0 1 0 1H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm3.797-.957a.5.5 0 0 1 .538.085l5 4.5a.5.5 0 0 1 0 .744l-5 4.5A.5.5 0 0 1 13 11.5V9.34c-1.4.128-2.665.78-3.7 1.608c-1.015.813-1.775 1.768-2.195 2.484l-.158.291A.5.5 0 0 1 6 13.5c0-2.049.382-4.284 1.518-6.024C8.61 5.808 10.368 4.643 13 4.513V2.5l.005-.073a.5.5 0 0 1 .292-.384M14 5a.5.5 0 0 1-.5.5c-2.588 0-4.177 1.045-5.144 2.523c-.685 1.049-1.073 2.34-1.246 3.684c.433-.52.96-1.054 1.565-1.54C9.943 9.153 11.6 8.316 13.5 8.316a.5.5 0 0 1 .5.5v1.56L17.75 7L14 3.623z"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "fluent-share20-regular", render });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ShareIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const Dialog = defineAsyncComponent(() => import('./Dialog-BoKDmA_Y.mjs'));
    const practiceStore = usePracticeStore();
    const baseStore = useBaseStore();
    const userStore = useUserStore();
    let showShareDialog = ref(false);
    let loading1 = ref(false);
    let loading2 = ref(false);
    let posterEl = ref(null);
    let imgIndex = ref(Math.floor(Math.random() * 10));
    const studyStats = computed(() => {
      return {
        total: practiceStore.total,
        newWords: practiceStore.newWordNumber,
        review: practiceStore.reviewWordNumber + practiceStore.writeWordNumber,
        wrong: practiceStore.wrong,
        correct: practiceStore.total - practiceStore.wrong,
        time: msToHourMinute(practiceStore.spend),
        date: dayjs().format("MM\u6708DD\u65E5"),
        dictionary: baseStore.sdict.name || "\u672A\u77E5\u8BCD\u4E66"
      };
    });
    async function copyImageToClipboard() {
      try {
        loading1.value = true;
        const snapdom = await loadJsLib("snapdom", LIB_JS_URL.SNAPDOM);
        const blob = await snapdom.toBlob(posterEl.value, { scale: 2, type: "png" });
        if (!blob) throw new Error("capture failed");
        if ((void 0).clipboard && (void 0).ClipboardItem) {
          await (void 0).clipboard.write([new (void 0).ClipboardItem({ [blob.type || "image/png"]: blob })]);
          Toast.success("\u56FE\u7247\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01");
        } else {
          await downloadImage();
        }
      } catch (error) {
        Toast.error("\u590D\u5236\u5931\u8D25\uFF01");
        await downloadImage();
      } finally {
        loading1.value = false;
      }
    }
    async function downloadImage() {
      loading2.value = true;
      const snapdom = await loadJsLib("snapdom", LIB_JS_URL.SNAPDOM);
      snapdom.download(posterEl.value, { scale: 2 });
      loading2.value = false;
    }
    function changeBackground() {
      const newIndex = Math.floor(Math.random() * 9);
      imgIndex.value = newIndex >= imgIndex.value ? newIndex + 1 : newIndex;
    }
    const studyProgress = computed(() => {
      if (!baseStore.sdict.length) return 0;
      return Math.round(baseStore.sdict.lastLearnIndex / baseStore.sdict.length * 100);
    });
    const sentence = computed(() => {
      let list = [
        { en: "Actions speak louder than words.", cn: "\u884C\u52A8\u80DC\u4E8E\u8A00\u8BED" },
        { en: "Keep going, never give up!", cn: "\u575A\u6301\u5C31\u662F\u80DC\u5229" },
        { en: "Where there's a will, there's a way.", cn: "\u6709\u5FD7\u8005\u4E8B\u7ADF\u6210" },
        { en: "Every cloud has a silver lining.", cn: "\u9ED1\u6697\u4E2D\u603B\u6709\u4E00\u7EBF\u5149\u660E" },
        { en: "Time heals all wounds.", cn: "\u65F6\u95F4\u80FD\u6CBB\u6108\u4E00\u5207\u521B\u4F24" },
        { en: "Never say die.", cn: "\u6C38\u4E0D\u8A00\u8D25" },
        { en: "The best is yet to come.", cn: "\u6700\u597D\u7684\u5C1A\u672A\u5230\u6765" },
        { en: "Believe you can and you're halfway there.", cn: "\u76F8\u4FE1\u4F60\u81EA\u5DF1\uFF0C\u4F60\u5DF2\u7ECF\u6210\u529F\u4E86\u4E00\u534A" },
        { en: "No pain, no gain.", cn: "\u6CA1\u6709\u4ED8\u51FA\u5C31\u6CA1\u6709\u6536\u83B7" },
        { en: "Dream big and dare to fail.", cn: "\u5927\u80C6\u68A6\u60F3\uFF0C\u52C7\u4E8E\u5931\u8D25" },
        { en: "Home is where the heart is.", cn: "\u5FC3\u5728\u54EA\u91CC\uFF0C\u5BB6\u5C31\u5728\u54EA\u91CC" },
        { en: "Knowledge is power.", cn: "\u77E5\u8BC6\u5C31\u662F\u529B\u91CF" },
        { en: "Practice makes perfect.", cn: "\u719F\u80FD\u751F\u5DE7" },
        { en: "When in Rome, do as the Romans do.", cn: "\u5165\u4E61\u968F\u4FD7" },
        { en: "Just do it.", cn: "\u53EA\u7BA1\u53BB\u505A" },
        { en: "So far, so good.", cn: "\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u4E00\u5207\u8FD8\u597D" },
        { en: "The early bird catches the worm.", cn: "\u65E9\u8D77\u7684\u9E1F\u513F\u6709\u866B\u5403" },
        { en: "Every day is a new beginning.", cn: "\u6BCF\u4E00\u5929\u90FD\u662F\u65B0\u7684\u5F00\u59CB" },
        { en: "Success is a journey, not a destination.", cn: "\u6210\u529F\u662F\u65C5\u7A0B\uFF0C\u4E0D\u662F\u7EC8\u70B9" },
        { en: "Your only limit is your mind.", cn: "\u4F60\u552F\u4E00\u7684\u9650\u5236\u662F\u4F60\u7684\u601D\u7EF4" },
        { en: "A friend in need is a friend indeed.", cn: "\u60A3\u96BE\u89C1\u771F\u60C5" },
        { en: "Silence is golden.", cn: "\u6C89\u9ED8\u662F\u91D1" },
        { en: "Let bygones be bygones.", cn: "\u8BA9\u8FC7\u53BB\u7684\u6210\u4E3A\u8FC7\u53BB" },
        { en: "Keep calm and carry on.", cn: "\u4FDD\u6301\u51B7\u9759\uFF0C\u7EE7\u7EED\u524D\u8FDB" },
        { en: "Live and learn.", cn: "\u6D3B\u5230\u8001\uFF0C\u5B66\u5230\u8001" },
        { en: "Mistakes are proof that you are trying.", cn: "\u9519\u8BEF\u8BC1\u660E\u4F60\u5728\u52AA\u529B\u5C1D\u8BD5" },
        { en: "Better late than never.", cn: "\u8FDF\u505A\u603B\u6BD4\u4E0D\u505A\u597D" },
        { en: "Be the change you wish to see in the world.", cn: "\u6210\u4E3A\u4F60\u5E0C\u671B\u5728\u4E16\u754C\u4E0A\u770B\u5230\u7684\u6539\u53D8" },
        { en: "The journey of a thousand miles begins with a single step.", cn: "\u5343\u91CC\u4E4B\u884C\uFF0C\u59CB\u4E8E\u8DB3\u4E0B" },
        { en: "When one door closes, another opens.", cn: "\u5F53\u4E00\u6247\u95E8\u5173\u95ED\u65F6\uFF0C\u53E6\u4E00\u6247\u4F1A\u6253\u5F00" }
      ];
      return list[Math.floor(Math.random() * list.length)];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFluentShare20Regular = __unplugin_components_0;
      const _component_IconSimpleIconsGithub = __unplugin_components_4;
      const _component_IconMdiSparkles = __unplugin_components_2;
      const _component_IconEosIconsLoading = __unplugin_components_7;
      const _component_IconFluentCopy20Regular = __unplugin_components_4$1;
      const _component_IconFluentArrowDownload20Regular = __unplugin_components_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(BaseIcon, {
        onClick: ($event) => isRef(showShareDialog) ? showShareDialog.value = true : showShareDialog = true,
        class: "bounce"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconFluentShare20Regular, { class: "text-blue-500 hover:text-blue-600" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconFluentShare20Regular, { class: "text-blue-500 hover:text-blue-600" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Dialog), {
        modelValue: unref(showShareDialog),
        "onUpdate:modelValue": ($event) => isRef(showShareDialog) ? showShareDialog.value = $event : showShareDialog = $event,
        title: "\u5206\u4EAB"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex min-w-160 max-w-200 p-6 pt-0 gap-space" data-v-ab40826e${_scopeId}><div class="flex-1 border-r border-gray-200 bg-gray-100 rounded-xl overflow-hidden relative" data-v-ab40826e${_scopeId}><div class="flex p-5 gap-space flex-col justify-between relative z-2 color-white h-full box-border" data-v-ab40826e${_scopeId}><div class="flex flex-col flex-1 space-y-3" data-v-ab40826e${_scopeId}><div class="flex items-center" data-v-ab40826e${_scopeId}>`);
            if ((_a = unref(userStore).user) == null ? void 0 : _a.username) {
              _push2(`<div class="w-12 h-12 bg-gray-600 rounded-full mr-3 flex items-center justify-center" data-v-ab40826e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconSimpleIconsGithub, { class: "w-6 h-6 text-white" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-v-ab40826e${_scopeId}><div class="font-semibold text-lg" data-v-ab40826e${_scopeId}>${ssrInterpolate((_b = unref(userStore).user) == null ? void 0 : _b.username)}</div><div class="" data-v-ab40826e${_scopeId}>${ssrInterpolate(unref(dayjs)().format("YYYY\u5E74MM\u6708DD\u65E5"))}</div></div><div class="ml-auto text-xs" data-v-ab40826e${_scopeId}> Type Words | \u82F1\u8BED\u5B66\u4E60 </div></div><div class="bg-gray-900/30 py-4 center flex-col rounded-2xl" data-v-ab40826e${_scopeId}><div class="text-center mb-2 text-xl" data-v-ab40826e${_scopeId}> \u6211\u5B66\u4E60\u4E86${ssrInterpolate(studyStats.value.time)} ${ssrInterpolate(unref(baseStore).sdict.name)}</div><div class="w-90/100 flex items-center gap-space" data-v-ab40826e${_scopeId}><div class="shrink-0" data-v-ab40826e${_scopeId}>\u8FDB\u5EA6</div>`);
            _push2(ssrRenderComponent(Progress, {
              percentage: studyProgress.value,
              size: "normal"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-3 gap-4" data-v-ab40826e${_scopeId}><div class="stat-card" data-v-ab40826e${_scopeId}><div class="text-2xl font-bold" data-v-ab40826e${_scopeId}>${ssrInterpolate(studyStats.value.newWords)}</div><div class="text-base" data-v-ab40826e${_scopeId}>\u65B0\u8BCD</div></div><div class="stat-card" data-v-ab40826e${_scopeId}><div class="text-2xl font-bold" data-v-ab40826e${_scopeId}>${ssrInterpolate(studyStats.value.review)}</div><div class="text-base" data-v-ab40826e${_scopeId}>\u590D\u4E60</div></div><div class="stat-card" data-v-ab40826e${_scopeId}><div class="text-2xl font-bold" data-v-ab40826e${_scopeId}>${ssrInterpolate(studyStats.value.wrong)}</div><div class="text-base" data-v-ab40826e${_scopeId}>\u9519\u8BCD</div></div></div><div class="bg-gray-900/30 py-4 rounded-2xl center flex-col flex-1 p-4" data-v-ab40826e${_scopeId}><div class="text-3xl text-center italic mb-2 en-article-family" data-v-ab40826e${_scopeId}>${ssrInterpolate(sentence.value.en)}</div><div class="text-base italic" data-v-ab40826e${_scopeId}>${ssrInterpolate(sentence.value.cn)}</div></div></div><div class="bg-gray-900/30 py-4 rounded-2xl p-4" data-v-ab40826e${_scopeId}><div class="flex justify-between items-end" data-v-ab40826e${_scopeId}><div class="space-y-2" data-v-ab40826e${_scopeId}><div class="font-bold text-2xl" data-v-ab40826e${_scopeId}>Type Words</div><div class="text-base" data-v-ab40826e${_scopeId}>${ssrInterpolate(unref(Origin))}</div><div class="text-xs" data-v-ab40826e${_scopeId}>\u4E00\u6B21\u6572\u51FB\uFF0C\u4E00\u70B9\u8FDB\u6B65\uFF0C\u5F00\u6E90\u5355\u8BCD\u5B66\u4E60\u5DE5\u5177</div></div><img${ssrRenderAttr("src", `/imgs/share/qr.png`)} class="w-20 w-20 rounded-md overflow-hidden" alt="" data-v-ab40826e${_scopeId}></div></div></div><img${ssrRenderAttr("src", `/imgs/share/bg/${unref(imgIndex)}.jpg`)} class="w-full object-cover object-center absolute top-0" alt="" data-v-ab40826e${_scopeId}></div><div class="flex-1 pt-0" data-v-ab40826e${_scopeId}><div class="" data-v-ab40826e${_scopeId}><div class="text-2xl font-bold mb-4 flex items-center" data-v-ab40826e${_scopeId}><span class="mr-2" data-v-ab40826e${_scopeId}>\u{1F3AF}</span> \u5206\u4EAB\u4F60\u7684\u8FDB\u6B65 </div><div class="flex items-start" data-v-ab40826e${_scopeId}><span class="mr-2" data-v-ab40826e${_scopeId}>\u{1F680}</span> \u5728 ${ssrInterpolate(unref(APP_NAME))}\uFF0C\u5B66\u4E60\u82F1\u8BED\u4E5F\u80FD\u6210\u4E3A\u8D85\u9177\u7684\u4E8B\u60C5\uFF01 </div><div class="flex items-start" data-v-ab40826e${_scopeId}><span class="mr-2" data-v-ab40826e${_scopeId}>\u{1F4F8}</span> \u5FEB\u6765\u5206\u4EAB\u4F60\u7684\u5B66\u4E60\u56FE\u7247\uFF0C\u8BA9\u4F60\u7684\u8FDB\u6B65\u5237\u5C4F\u670B\u53CB\u5708\uFF0C\u6210\u4E3A\u6700\u53D7\u77A9\u76EE\u7684\u82F1\u8BED\u5B66\u9738\uFF01\u{1F60E} </div><div class="flex items-start" data-v-ab40826e${_scopeId}><span class="mr-2" data-v-ab40826e${_scopeId}>\u{1F4AA}</span> \u8FD9\u4E0D\u53EA\u662F\u7B80\u5355\u7684\u6253\u5361\uFF0C\u66F4\u662F\u4F60\u79C0\u51FA\u82F1\u8BED\u5B9E\u529B\u7684\u821E\u53F0\uFF01 </div><div class="flex items-start" data-v-ab40826e${_scopeId}><span class="mr-2" data-v-ab40826e${_scopeId}>\u{1F525}</span> \u5206\u4EAB\u4F60\u7684\u5B66\u4E60\u8BB0\u5F55\uFF0C\u6536\u83B7\u670B\u53CB\u4EEC\u7684\u70B9\u8D5E\u548C\u8BA4\u53EF\uFF0C\u8BA9\u4F60\u7684\u670B\u53CB\u5708\u4E5F\u6380\u8D77\u4E00\u80A1\u82F1\u8BED\u5B66\u4E60\u7684\u70ED\u6F6E\uFF01 </div></div><div class="space-y-4 mt-24" data-v-ab40826e${_scopeId}><div class="flex items-center justify-start gap-space color-black px-6 py-3 bg-gray-200 rounded-lg cp hover:bg-gray-300 transition-all duration-200" data-v-ab40826e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconMdiSparkles, { class: "w-4 h-4 text-yellow-500" }, null, _parent2, _scopeId));
            _push2(` \u6362\u4E2A\u80CC\u666F </div><div class="flex items-center justify-start gap-space px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white cp rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200" data-v-ab40826e${_scopeId}>`);
            if (unref(loading1)) {
              _push2(ssrRenderComponent(_component_IconEosIconsLoading, { class: "text-xl" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_IconFluentCopy20Regular, { class: "w-5 h-5" }, null, _parent2, _scopeId));
            }
            _push2(`<span class="font-medium" data-v-ab40826e${_scopeId}>\u590D\u5236\u5230\u526A\u8D34\u677F</span></div><div class="flex items-center justify-start gap-space px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white cp rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200" data-v-ab40826e${_scopeId}>`);
            if (unref(loading2)) {
              _push2(ssrRenderComponent(_component_IconEosIconsLoading, { class: "text-xl" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_IconFluentArrowDownload20Regular, { class: "w-5 h-5" }, null, _parent2, _scopeId));
            }
            _push2(`<span class="font-medium" data-v-ab40826e${_scopeId}>\u4FDD\u5B58\u9AD8\u6E05\u6D77\u62A5</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex min-w-160 max-w-200 p-6 pt-0 gap-space" }, [
                createVNode("div", {
                  ref_key: "posterEl",
                  ref: posterEl,
                  class: "flex-1 border-r border-gray-200 bg-gray-100 rounded-xl overflow-hidden relative"
                }, [
                  createVNode("div", { class: "flex p-5 gap-space flex-col justify-between relative z-2 color-white h-full box-border" }, [
                    createVNode("div", { class: "flex flex-col flex-1 space-y-3" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        ((_c = unref(userStore).user) == null ? void 0 : _c.username) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-12 h-12 bg-gray-600 rounded-full mr-3 flex items-center justify-center"
                        }, [
                          createVNode(_component_IconSimpleIconsGithub, { class: "w-6 h-6 text-white" })
                        ])) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode("div", { class: "font-semibold text-lg" }, toDisplayString((_d = unref(userStore).user) == null ? void 0 : _d.username), 1),
                          createVNode("div", { class: "" }, toDisplayString(unref(dayjs)().format("YYYY\u5E74MM\u6708DD\u65E5")), 1)
                        ]),
                        createVNode("div", { class: "ml-auto text-xs" }, " Type Words | \u82F1\u8BED\u5B66\u4E60 ")
                      ]),
                      createVNode("div", { class: "bg-gray-900/30 py-4 center flex-col rounded-2xl" }, [
                        createVNode("div", { class: "text-center mb-2 text-xl" }, " \u6211\u5B66\u4E60\u4E86" + toDisplayString(studyStats.value.time) + " " + toDisplayString(unref(baseStore).sdict.name), 1),
                        createVNode("div", { class: "w-90/100 flex items-center gap-space" }, [
                          createVNode("div", { class: "shrink-0" }, "\u8FDB\u5EA6"),
                          createVNode(Progress, {
                            percentage: studyProgress.value,
                            size: "normal"
                          }, null, 8, ["percentage"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                        createVNode("div", { class: "stat-card" }, [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(studyStats.value.newWords), 1),
                          createVNode("div", { class: "text-base" }, "\u65B0\u8BCD")
                        ]),
                        createVNode("div", { class: "stat-card" }, [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(studyStats.value.review), 1),
                          createVNode("div", { class: "text-base" }, "\u590D\u4E60")
                        ]),
                        createVNode("div", { class: "stat-card" }, [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(studyStats.value.wrong), 1),
                          createVNode("div", { class: "text-base" }, "\u9519\u8BCD")
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-900/30 py-4 rounded-2xl center flex-col flex-1 p-4" }, [
                        createVNode("div", { class: "text-3xl text-center italic mb-2 en-article-family" }, toDisplayString(sentence.value.en), 1),
                        createVNode("div", { class: "text-base italic" }, toDisplayString(sentence.value.cn), 1)
                      ])
                    ]),
                    createVNode("div", { class: "bg-gray-900/30 py-4 rounded-2xl p-4" }, [
                      createVNode("div", { class: "flex justify-between items-end" }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("div", { class: "font-bold text-2xl" }, "Type Words"),
                          createVNode("div", { class: "text-base" }, toDisplayString(unref(Origin)), 1),
                          createVNode("div", { class: "text-xs" }, "\u4E00\u6B21\u6572\u51FB\uFF0C\u4E00\u70B9\u8FDB\u6B65\uFF0C\u5F00\u6E90\u5355\u8BCD\u5B66\u4E60\u5DE5\u5177")
                        ]),
                        createVNode("img", {
                          src: `/imgs/share/qr.png`,
                          class: "w-20 w-20 rounded-md overflow-hidden",
                          alt: ""
                        })
                      ])
                    ])
                  ]),
                  createVNode("img", {
                    src: `/imgs/share/bg/${unref(imgIndex)}.jpg`,
                    class: "w-full object-cover object-center absolute top-0",
                    alt: ""
                  }, null, 8, ["src"])
                ], 512),
                createVNode("div", { class: "flex-1 pt-0" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("div", { class: "text-2xl font-bold mb-4 flex items-center" }, [
                      createVNode("span", { class: "mr-2" }, "\u{1F3AF}"),
                      createTextVNode(" \u5206\u4EAB\u4F60\u7684\u8FDB\u6B65 ")
                    ]),
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("span", { class: "mr-2" }, "\u{1F680}"),
                      createTextVNode(" \u5728 " + toDisplayString(unref(APP_NAME)) + "\uFF0C\u5B66\u4E60\u82F1\u8BED\u4E5F\u80FD\u6210\u4E3A\u8D85\u9177\u7684\u4E8B\u60C5\uFF01 ", 1)
                    ]),
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("span", { class: "mr-2" }, "\u{1F4F8}"),
                      createTextVNode(" \u5FEB\u6765\u5206\u4EAB\u4F60\u7684\u5B66\u4E60\u56FE\u7247\uFF0C\u8BA9\u4F60\u7684\u8FDB\u6B65\u5237\u5C4F\u670B\u53CB\u5708\uFF0C\u6210\u4E3A\u6700\u53D7\u77A9\u76EE\u7684\u82F1\u8BED\u5B66\u9738\uFF01\u{1F60E} ")
                    ]),
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("span", { class: "mr-2" }, "\u{1F4AA}"),
                      createTextVNode(" \u8FD9\u4E0D\u53EA\u662F\u7B80\u5355\u7684\u6253\u5361\uFF0C\u66F4\u662F\u4F60\u79C0\u51FA\u82F1\u8BED\u5B9E\u529B\u7684\u821E\u53F0\uFF01 ")
                    ]),
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("span", { class: "mr-2" }, "\u{1F525}"),
                      createTextVNode(" \u5206\u4EAB\u4F60\u7684\u5B66\u4E60\u8BB0\u5F55\uFF0C\u6536\u83B7\u670B\u53CB\u4EEC\u7684\u70B9\u8D5E\u548C\u8BA4\u53EF\uFF0C\u8BA9\u4F60\u7684\u670B\u53CB\u5708\u4E5F\u6380\u8D77\u4E00\u80A1\u82F1\u8BED\u5B66\u4E60\u7684\u70ED\u6F6E\uFF01 ")
                    ])
                  ]),
                  createVNode("div", { class: "space-y-4 mt-24" }, [
                    createVNode("div", {
                      onClick: changeBackground,
                      class: "flex items-center justify-start gap-space color-black px-6 py-3 bg-gray-200 rounded-lg cp hover:bg-gray-300 transition-all duration-200"
                    }, [
                      createVNode(_component_IconMdiSparkles, { class: "w-4 h-4 text-yellow-500" }),
                      createTextVNode(" \u6362\u4E2A\u80CC\u666F ")
                    ]),
                    createVNode("div", {
                      onClick: copyImageToClipboard,
                      class: "flex items-center justify-start gap-space px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white cp rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200"
                    }, [
                      unref(loading1) ? (openBlock(), createBlock(_component_IconEosIconsLoading, {
                        key: 0,
                        class: "text-xl"
                      })) : (openBlock(), createBlock(_component_IconFluentCopy20Regular, {
                        key: 1,
                        class: "w-5 h-5"
                      })),
                      createVNode("span", { class: "font-medium" }, "\u590D\u5236\u5230\u526A\u8D34\u677F")
                    ]),
                    createVNode("div", {
                      onClick: downloadImage,
                      class: "flex items-center justify-start gap-space px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white cp rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
                    }, [
                      unref(loading2) ? (openBlock(), createBlock(_component_IconEosIconsLoading, {
                        key: 0,
                        class: "text-xl"
                      })) : (openBlock(), createBlock(_component_IconFluentArrowDownload20Regular, {
                        key: 1,
                        class: "w-5 h-5"
                      })),
                      createVNode("span", { class: "font-medium" }, "\u4FDD\u5B58\u9AD8\u6E05\u6D77\u62A5")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/channel-icons/ShareIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ShareIcon = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-ab40826e"]]), { __name: "ShareIcon" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Github",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconSimpleIconsGithub = __unplugin_components_4;
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: unref(GITHUB),
        target: "_blank",
        rel: "noreferrer",
        "aria-label": _ctx.$t("github_project"),
        class: "color-reverse-black github"
      }, _attrs))}>`);
      _push(ssrRenderComponent(BaseIcon, mergeProps({ title: "Github" }, _ctx.$attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconSimpleIconsGithub, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconSimpleIconsGithub)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/channel-icons/Github.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Github = Object.assign(_sfc_main$1, { __name: "Github" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChannelIcons",
  __ssrInlineRender: true,
  props: {
    type: { default: "vertical" },
    share: { type: Boolean, default: true },
    wechat: { type: Boolean, default: true },
    github: { type: Boolean, default: true }
  },
  setup(__props) {
    const Dialog = defineAsyncComponent(() => import('./Dialog-BoKDmA_Y.mjs'));
    let showXhsDialog = ref(false);
    let showQQDialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconUiwQq = __unplugin_components_0$1;
      const _component_IconSimpleIconsXiaohongshu = __unplugin_components_1;
      const _component_IconRiTwitterFill = __unplugin_components_2$1;
      const _component_IconMaterialSymbolsMail = __unplugin_components_3;
      _push(`<!--[--><div class="${ssrRenderClass([__props.type === "vertical" ? "flex-col gap-1" : "gap-4", "center"])}">`);
      if (__props.github) {
        _push(ssrRenderComponent(Github, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.wechat) {
        _push(ssrRenderComponent(WeChat, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(BaseIcon, {
        title: _ctx.$t("qq_group"),
        onClick: ($event) => isRef(showQQDialog) ? showQQDialog.value = true : showQQDialog = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconUiwQq, { class: "color-red" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconUiwQq, { class: "color-red" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BaseIcon, {
        title: _ctx.$t("xiaohongshu"),
        onClick: ($event) => isRef(showXhsDialog) ? showXhsDialog.value = true : showXhsDialog = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconSimpleIconsXiaohongshu, { class: "color-red-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconSimpleIconsXiaohongshu, { class: "color-red-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://x.com/typewords2" target="_blank" rel="noreferrer"${ssrRenderAttr("aria-label", _ctx.$t("follow_x_account", { x_account: "typewords2" }))}>`);
      _push(ssrRenderComponent(BaseIcon, {
        title: _ctx.$t("twitter")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconRiTwitterFill, { class: "color-blue" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconRiTwitterFill, { class: "color-blue" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a><a href="mailto:zyronon@163.com" target="_blank" rel="noreferrer"${ssrRenderAttr("aria-label", _ctx.$t("send_email", { email: "zyronon@163.com" }))}>`);
      _push(ssrRenderComponent(BaseIcon, {
        title: _ctx.$t("email")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconMaterialSymbolsMail, { class: "color-blue" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconMaterialSymbolsMail, { class: "color-blue" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a>`);
      if (__props.share) {
        _push(ssrRenderComponent(ShareIcon, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Dialog), {
        modelValue: unref(showXhsDialog),
        "onUpdate:modelValue": ($event) => isRef(showXhsDialog) ? showXhsDialog.value = $event : showXhsDialog = $event,
        title: _ctx.$t("xiaohongshu")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-120 p-6 pt-0"${_scopeId}><div class="mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("xiaohongshu_desc"))}</div><div class="text-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", _ctx.$t("xiaohongshu_qrcode"))} class="w-70 rounded-xl shadow-lg"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-120 p-6 pt-0" }, [
                createVNode("div", { class: "mb-4" }, toDisplayString(_ctx.$t("xiaohongshu_desc")), 1),
                createVNode("div", { class: "text-center" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: _ctx.$t("xiaohongshu_qrcode"),
                    class: "w-70 rounded-xl shadow-lg"
                  }, null, 8, ["alt"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Dialog), {
        modelValue: unref(showQQDialog),
        "onUpdate:modelValue": ($event) => isRef(showQQDialog) ? showQQDialog.value = $event : showQQDialog = $event,
        title: _ctx.$t("qq_group")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-120 p-6 pt-0"${_scopeId}><div class="mb-4"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("community_desc"))}</span></div><div class="text-center"${_scopeId}><img${ssrRenderAttr("src", _imports_1)}${ssrRenderAttr("alt", _ctx.$t("qq_qrcode"))} class="w-70 rounded-xl shadow-lg"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-120 p-6 pt-0" }, [
                createVNode("div", { class: "mb-4" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("community_desc")), 1)
                ]),
                createVNode("div", { class: "text-center" }, [
                  createVNode("img", {
                    src: _imports_1,
                    alt: _ctx.$t("qq_qrcode"),
                    class: "w-70 rounded-xl shadow-lg"
                  }, null, 8, ["alt"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/channel-icons/ChannelIcons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChannelIcons = Object.assign(_sfc_main, { __name: "ChannelIcons" });

export { ChannelIcons as C, __unplugin_components_4 as _ };
//# sourceMappingURL=ChannelIcons-BDL8HMec.mjs.map
