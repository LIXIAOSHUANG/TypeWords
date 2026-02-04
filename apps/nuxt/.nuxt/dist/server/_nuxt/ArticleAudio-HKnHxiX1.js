import { markRaw, openBlock, createElementBlock, createElementVNode, defineComponent, useAttrs, ref, computed, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { get } from "idb-keyval";
import { _ as __unplugin_components_1, a as __unplugin_components_2 } from "./volume-low-D-Q_rQNL.js";
import { h as _export_sfc } from "../server.mjs";
import { b as LOCAL_FILE_KEY, j as ENV } from "./env-CUoXYOyW.js";
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "m21.707 20.293l-2.023-2.023A9.57 9.57 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.1 8.1 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02l-1.414 1.414l18 18zM12 5.868v4.718L9.169 7.755zM4 17h2.697l5.748 3.832a1 1 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a1 1 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A2 2 0 0 0 2 9v6c0 1.103.897 2 2 2"
    }, null, -1)
  ])]);
}
const __unplugin_components_0 = markRaw({ name: "bx-volume-mute", render });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Audio",
  __ssrInlineRender: true,
  props: {
    src: null,
    autoplay: { type: Boolean, default: false },
    loop: { type: Boolean, default: false },
    volume: { default: 1 },
    currentTime: { default: 0 },
    playbackRate: { default: 1 },
    disabled: { type: Boolean, default: false }
  },
  emits: ["ended", "update-volume", "update-speed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const audioRef = ref();
    ref();
    ref();
    ref();
    const isPlaying = ref(false);
    const isLoading = ref(false);
    const duration = ref(0);
    const currentTime = ref(0);
    const volume = ref(props.volume);
    const playbackRate = ref(props.playbackRate);
    const isDragging = ref(false);
    const isVolumeDragging = ref(false);
    const isVolumeHovering = ref(false);
    const volumePosition = ref("top");
    const error = ref("");
    const progress = computed(() => {
      return duration.value > 0 ? currentTime.value / duration.value * 100 : 0;
    });
    const volumeProgress = computed(() => {
      return volume.value * 100;
    });
    const formatTime = (time) => {
      if (!isFinite(time)) return "0:00";
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };
    watch(
      () => props.src,
      (newSrc) => {
        if (audioRef.value) {
          isPlaying.value = false;
          isLoading.value = false;
          currentTime.value = 0;
          duration.value = 0;
          error.value = "";
          if (newSrc) {
            audioRef.value.src = newSrc;
            audioRef.value.load();
          } else {
            audioRef.value.src = "";
            audioRef.value.load();
          }
        }
      }
    );
    watch(
      () => props.volume,
      (newVolume) => {
        volume.value = newVolume;
        if (audioRef.value) {
          audioRef.value.volume = newVolume;
        }
      }
    );
    watch(
      () => props.currentTime,
      (newTime) => {
        if (audioRef.value && !isDragging.value) {
          audioRef.value.currentTime = newTime;
          currentTime.value = newTime;
        }
      }
    );
    watch(
      () => props.playbackRate,
      (newRate) => {
        playbackRate.value = newRate;
        if (audioRef.value) {
          audioRef.value.playbackRate = newRate;
        }
      }
    );
    __expose({ audioRef });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBxVolumeMute = __unplugin_components_0;
      const _component_IconBxVolumeLow = __unplugin_components_1;
      const _component_IconBxVolumeFull = __unplugin_components_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["custom-audio", { disabled: __props.disabled || error.value, "has-error": error.value }]
      }, unref(attrs), _attrs))} data-v-86c16858><audio${ssrRenderAttr("src", __props.src)} preload="auto"${ssrIncludeBooleanAttr(__props.autoplay) ? " autoplay" : ""}${ssrIncludeBooleanAttr(__props.loop) ? " loop" : ""}${ssrIncludeBooleanAttr(false) ? " controls" : ""} data-v-86c16858></audio><div class="audio-container" data-v-86c16858><button class="${ssrRenderClass([{ loading: isLoading.value }, "play-button"])}"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("aria-label", isPlaying.value ? "暂停" : "播放")} data-v-86c16858>`);
      if (isLoading.value) {
        _push(`<div class="loading-spinner" data-v-86c16858></div>`);
      } else if (isPlaying.value) {
        _push(`<svg class="icon" viewBox="0 0 24 24" fill="currentColor" data-v-86c16858><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" data-v-86c16858></path></svg>`);
      } else {
        _push(`<svg class="icon" viewBox="0 0 24 24" fill="currentColor" data-v-86c16858><path d="M8 5v14l11-7z" data-v-86c16858></path></svg>`);
      }
      _push(`</button><div class="progress-section" data-v-86c16858><div class="progress-container" data-v-86c16858><div class="progress-track" data-v-86c16858><div class="progress-fill" style="${ssrRenderStyle({ width: progress.value + "%" })}" data-v-86c16858></div><div class="progress-thumb" style="${ssrRenderStyle({ left: progress.value + "%" })}" data-v-86c16858></div></div></div><span class="time-display" data-v-86c16858>${ssrInterpolate(formatTime(currentTime.value))} / ${ssrInterpolate(formatTime(duration.value))}</span></div><div class="volume-section" data-v-86c16858><button class="volume-button" tabindex="-1"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("aria-label", volume.value > 0 ? "静音" : "取消静音")} data-v-86c16858>`);
      if (volume.value === 0) {
        _push(ssrRenderComponent(_component_IconBxVolumeMute, { class: "icon" }, null, _parent));
      } else if (volume.value < 0.5) {
        _push(ssrRenderComponent(_component_IconBxVolumeLow, { class: "icon" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_IconBxVolumeFull, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="${ssrRenderClass([[{ active: isVolumeHovering.value || isVolumeDragging.value }, volumePosition.value], "volume-dropdown"])}" data-v-86c16858><div class="volume-container" data-v-86c16858><div class="volume-track" data-v-86c16858><div class="volume-fill" style="${ssrRenderStyle({ height: volumeProgress.value + "%", bottom: 0 })}" data-v-86c16858></div></div><div class="volume-num" data-v-86c16858><span data-v-86c16858>${ssrInterpolate(Math.floor(volumeProgress.value))}%</span></div></div></div></div><button class="speed-button"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("aria-label", `播放速度: ${playbackRate.value}x`)} data-v-86c16858>${ssrInterpolate(playbackRate.value)}x </button></div>`);
      if (error.value) {
        _push(`<div class="error-message" data-v-86c16858>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Audio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Audio = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-86c16858"]]), { __name: "Audio" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleAudio",
  __ssrInlineRender: true,
  props: {
    article: null
  },
  emits: ["ended", "update-volume", "update-speed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    let file = ref(null);
    let instance = ref({ audioRef: null });
    const pendingUpdates = ref({});
    const handleVolumeUpdate = (volume) => {
      emit("update-volume", volume);
    };
    const handleSpeedUpdate = (speed) => {
      emit("update-speed", speed);
    };
    const setAudioRefValue = (key, value) => {
      if (instance.value?.audioRef) {
        switch (key) {
          case "currentTime":
            instance.value.audioRef.currentTime = value;
            break;
          case "volume":
            instance.value.audioRef.volume = value;
            break;
          case "playbackRate":
            instance.value.audioRef.playbackRate = value;
            break;
        }
      } else {
        pendingUpdates.value[key] = value;
      }
    };
    watch(
      () => props.article.audioFileId,
      async () => {
        if (!props.article.audioSrc && props.article.audioFileId) {
          let list = await get(LOCAL_FILE_KEY);
          if (list) {
            let rItem = list.find((file2) => file2.id === props.article.audioFileId);
            if (rItem) {
              file.value = URL.createObjectURL(rItem.file);
            }
          }
        } else {
          file.value = null;
        }
      },
      { immediate: true }
    );
    watch(
      () => instance.value,
      (newVal) => {
        Object.entries(pendingUpdates.value).forEach(([key, value]) => {
          setAudioRefValue(key, value);
        });
        pendingUpdates.value = {};
      },
      { immediate: true }
    );
    __expose(
      new Proxy(
        {
          currentTime: 0,
          played: false,
          src: "",
          volume: 0,
          playbackRate: 1,
          play: () => void 0,
          pause: () => void 0
        },
        {
          get(target, key) {
            if (key === "currentTime") return instance.value?.audioRef?.currentTime;
            if (key === "played") return instance.value?.audioRef?.played;
            if (key === "src") return instance.value?.audioRef?.src;
            if (key === "volume") return instance.value?.audioRef?.volume;
            if (key === "playbackRate") return instance.value?.audioRef?.playbackRate;
            if (key === "play") instance.value?.audioRef?.play();
            if (key === "pause") instance.value?.audioRef?.pause();
            return target[key];
          },
          set(_, key, value) {
            setAudioRefValue(key, value);
            return true;
          }
        }
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (props.article.audioSrc) {
        _push(ssrRenderComponent(Audio, mergeProps(_ctx.$attrs, {
          ref_key: "instance",
          ref: instance,
          src: unref(ENV).RESOURCE_URL + props.article.audioSrc,
          onEnded: ($event) => emit("ended"),
          onUpdateVolume: handleVolumeUpdate,
          onUpdateSpeed: handleSpeedUpdate
        }, _attrs), null, _parent));
      } else if (unref(file)) {
        _push(ssrRenderComponent(Audio, mergeProps(_ctx.$attrs, {
          ref_key: "instance",
          ref: instance,
          src: unref(file),
          onEnded: ($event) => emit("ended"),
          onUpdateVolume: handleVolumeUpdate,
          onUpdateSpeed: handleSpeedUpdate
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/article/ArticleAudio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticleAudio = Object.assign(_sfc_main, { __name: "ArticleAudio" });
export {
  ArticleAudio as A
};
//# sourceMappingURL=ArticleAudio-HKnHxiX1.js.map
