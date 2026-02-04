import { b as useSettingStore } from './BaseIcon-Cnj57dgy.mjs';

function getSystemTheme() {
  return "light";
}
function swapTheme(theme) {
  return theme === "light" ? "dark" : "light";
}
function setTheme(val) {
}
function useTheme() {
  const settingStore = useSettingStore();
  function toggleTheme() {
    settingStore.theme = swapTheme(settingStore.theme === "auto" ? getSystemTheme() : settingStore.theme);
    setTheme(settingStore.theme);
  }
  function getTheme() {
    return settingStore.theme === "auto" ? getSystemTheme() : settingStore.theme;
  }
  return {
    toggleTheme,
    setTheme,
    getTheme
  };
}

export { setTheme as a, getSystemTheme as g, swapTheme as s, useTheme as u };
//# sourceMappingURL=theme-4yK9pI7O.mjs.map
