import { LOGIN, LOGOUT, UPDATE, REGISTER, ERROR, REGISTERERROR } from "../type";

let init = {
  login: JSON.parse(localStorage.getItem("login")) || false,
  data: JSON.parse(localStorage.getItem("data")) || {},
  loginErr: "",
  regisErr: "",
};

export default function authReducer(state = init, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("login", true);
      localStorage.setItem("data", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        login: true,
        data: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("login");
      localStorage.removeItem("data");
      localStorage.removeItem("token");
      return {
        ...state,
        login: false,
        data: "",
      };
    case UPDATE:
      localStorage.setItem("data", JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
      };
    case REGISTER:
      localStorage.setItem("data", JSON.stringify(action.payload));
      // localStorage.setItem("login", true);
      return {
        ...state,
        data: action.payload,
        // login: true,
      };
    case REGISTERERROR:
      return {
        ...state,
        regisErr: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loginErr: action.payload,
      };

    default:
      return state;
  }

  return state;
}
