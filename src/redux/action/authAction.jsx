import authApi from "../../service/authApi";
import { ERROR, LOGIN, LOGOUT, REGISTER, REGISTERERROR } from "../type";

export function handleLogin(form) {
  return async (dispatch) => {
    let res = await authApi.login(form);
    // console.log(`res`, res);
    if (res?.data) {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    } else if (res.error) {
      dispatch({
        type: ERROR,
        payload: res.error,
      });
    }
  };
}

export function handleLogout() {
  return {
    type: LOGOUT,
  };
}

export function handleRegister(form) {
  return async (dispatch) => {
    let res = await authApi.register(form);
    if (res?.data) {
      dispatch({
        type: REGISTER,
        payload: res.data,
      });
    } else if (res.error) {
      dispatch({
        type: REGISTERERROR,
        payload: res.error,
      });
    }
  };
}
