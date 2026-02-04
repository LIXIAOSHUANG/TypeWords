import { defineStore } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/pinia/dist/pinia.prod.cjs';
import { ref } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords-master/node_modules/vue/index.mjs';
import { T as Toast, r as request } from './BaseIcon-Cnj57dgy.mjs';
import { e as AppEnv } from './env-CUoXYOyW.mjs';

function loginApi(params) {
  return request("user/login", params, null, "post");
}
function registerApi(params) {
  return request("user/register", params, null, "post");
}
function sendCode(params) {
  return request("user/sendCode", null, params, "get");
}
function resetPasswordApi(params) {
  return request("user/resetPassword", params, null, "post");
}
function getUserInfo() {
  return request("user/userInfo", null, null, "get");
}
function setPassword(data) {
  return request("user/setPassword", data, null, "post");
}
function changeEmailApi(data) {
  return request("user/changeEmail", data, null, "post");
}
function changePhoneApi(data) {
  return request("user/changePhone", data, null, "post");
}
function updateUserInfoApi(data) {
  return request("user/updateUserInfo", data, null, "post");
}
const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const isLogin = ref(false);
  const setToken = (newToken) => {
    isLogin.value = true;
    AppEnv.TOKEN = newToken;
    AppEnv.IS_LOGIN = !!AppEnv.TOKEN;
    AppEnv.CAN_REQUEST = AppEnv.IS_LOGIN && AppEnv.IS_OFFICIAL;
    localStorage.setItem("token", newToken);
  };
  const clearToken = () => {
    AppEnv.IS_LOGIN = AppEnv.CAN_REQUEST = false;
    AppEnv.TOKEN = "";
    localStorage.removeItem("token");
    isLogin.value = false;
    user.value = null;
  };
  const setUser = (userInfo) => {
    user.value = userInfo;
    isLogin.value = true;
  };
  function logout() {
    clearToken();
    Toast.success("\u5DF2\u9000\u51FA\u767B\u5F55");
  }
  async function fetchUserInfo() {
    if (!AppEnv.CAN_REQUEST) return false;
    try {
      const res = await getUserInfo();
      if (res.success) {
        setUser(res.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Get user info error:", error);
      return false;
    }
  }
  async function init() {
    const success = await fetchUserInfo();
    if (!success) {
      clearToken();
    }
  }
  return {
    user,
    isLogin,
    setToken,
    clearToken,
    setUser,
    logout,
    fetchUserInfo,
    init
  };
});

export { updateUserInfoApi as a, changeEmailApi as b, changePhoneApi as c, resetPasswordApi as d, sendCode as e, loginApi as l, registerApi as r, setPassword as s, useUserStore as u };
//# sourceMappingURL=user-BLvskJR1.mjs.map
