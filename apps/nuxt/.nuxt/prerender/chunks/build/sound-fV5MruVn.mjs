import { ref, watchEffect } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { b as useSettingStore } from './BaseIcon-Cnj57dgy.mjs';
import { q as PronunciationApi, k as ENV, p as SoundFileOptions } from './env-CUoXYOyW.mjs';

function useSound(audioSrcList, audioFileLength) {
  let audioList = ref([]);
  let audioLength = ref(1);
  let index = ref(0);
  function setAudio(audioSrcList2, audioFileLength2) {
    if (audioFileLength2) audioLength.value = audioFileLength2;
    audioList.value = [];
    for (let i = 0; i < audioLength.value; i++) {
      audioSrcList2.map((src) => audioList.value.push(new Audio(ENV.RESOURCE_URL + src)));
    }
    index.value = 0;
  }
  function play(volume = 100) {
    index.value++;
    if (audioList.value.length > 1 && audioList.value.length !== audioLength.value) {
      audioList.value[index.value % audioList.value.length].volume = volume / 100;
      audioList.value[index.value % audioList.value.length].play();
    } else {
      audioList.value[index.value % audioLength.value].volume = volume / 100;
      audioList.value[index.value % audioLength.value].play();
    }
  }
  return { play, setAudio };
}
function usePlayKeyboardAudio() {
  const settingStore = useSettingStore();
  const { play, setAudio } = useSound();
  watchEffect(() => {
    if (!SoundFileOptions.find((v) => v.label === settingStore.keyboardSoundFile)) {
      settingStore.keyboardSoundFile = "\u673A\u68B0\u952E\u76D82";
    }
    let urlList = getAudioFileUrl(settingStore.keyboardSoundFile);
    setAudio(urlList, urlList.length === 1 ? 4 : 1);
  });
  function playAudio() {
    if (settingStore.keyboardSound) {
      play(settingStore.keyboardSoundVolume);
    }
  }
  return playAudio;
}
function usePlayBeep() {
  const settingStore = useSettingStore();
  const { play } = useSound();
  function playAudio() {
    if (settingStore.effectSound) {
      play(settingStore.effectSoundVolume);
    }
  }
  return playAudio;
}
function usePlayCorrect() {
  const settingStore = useSettingStore();
  const { play } = useSound();
  function playAudio() {
    if (settingStore.effectSound) {
      play(settingStore.effectSoundVolume);
    }
  }
  return playAudio;
}
function usePlayWordAudio() {
  const settingStore = useSettingStore();
  let audio = ref(null);
  function playAudio(word) {
    if (!word) return;
    let url = `${PronunciationApi}${word}&type=2`;
    if (settingStore.soundType === "uk") {
      url = `${PronunciationApi}${word}&type=1`;
    }
    audio.value.src = url;
    audio.value.volume = settingStore.wordSoundVolume / 100;
    audio.value.playbackRate = settingStore.wordSoundSpeed;
    audio.value.play();
    audio.value.onerror = (e) => {
      const ttsPlay = useTTsPlayAudio();
      ttsPlay(word);
    };
  }
  return playAudio;
}
function useTTsPlayAudio() {
  const settingStore = useSettingStore();
  function play(text) {
    speechSynthesis.cancel();
    let msg = new SpeechSynthesisUtterance(text);
    msg.rate = settingStore.wordSoundSpeed;
    msg.volume = settingStore.wordSoundVolume / 100;
    msg.pitch = 1;
    msg.lang = "en-US";
    let voiceList = speechSynthesis.getVoices().filter((v) => v.lang === "en-US");
    if (voiceList && voiceList.length) {
      msg.voice = voiceList.find((v) => v.name.includes("Emma ")) || voiceList[0];
    }
    speechSynthesis.speak(msg);
  }
  return play;
}
function usePlayAudio(url) {
  new Audio(url).play().then((r) => void 0);
}
function getAudioFileUrl(name) {
  if (name === "\u673A\u68B0\u952E\u76D8") {
    return [
      `/sound/key-sounds/jixie/\u673A\u68B00.mp3`,
      `/sound/key-sounds/jixie/\u673A\u68B01.mp3`,
      `/sound/key-sounds/jixie/\u673A\u68B02.mp3`,
      `/sound/key-sounds/jixie/\u673A\u68B03.mp3`
    ];
  } else {
    return [`/sound/key-sounds/${name}.mp3`];
  }
}

export { usePlayWordAudio as a, usePlayBeep as b, usePlayCorrect as c, usePlayKeyboardAudio as d, useTTsPlayAudio as e, getAudioFileUrl as g, usePlayAudio as u };
//# sourceMappingURL=sound-fV5MruVn.mjs.map
