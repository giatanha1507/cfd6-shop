import Api from "../core/Api";

const authApi = {
  // login(form) {
  //   return fetch("http://cfd-reactjs.herokuapp.com/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   }).then((res) => res.json());
  // },
  login: (form) => {
    return Api.post("login", form);
  },
  register(form) {
    return fetch("http://cfd-reactjs.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => res.json());
  },
  async refreshToken() {
    let { refreshToken } = JSON.parse(localStorage.getItem("token"));
    let res = await fetch(
      "http://cfd-reactjs.herokuapp.com/elearning/v4/refresh-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      }
    ).then((res) => res.json());
    if (res?.data) {
      localStorage.setItem("token", JSON.stringify(res.data));
    }
    return true;
  },
  async update(data) {
    let { accessToken } = JSON.parse(localStorage.getItem("token"));
    let res = await fetch("http://cfd-reactjs.herokuapp.com/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      return res.json();
    } else if (res.status === 403) {
      await authApi.refreshToken();
      let { accessToken } = JSON.parse(localStorage.getItem("token"));
      return fetch("http://cfd-reactjs.herokuapp.com/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    }
  },
};
export default authApi;
