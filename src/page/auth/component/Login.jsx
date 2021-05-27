import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../core/hook/useFormValidate";
import useTranslate from "../../../core/hook/useTranslate";
import { handleLogin } from "../../../redux/action/authAction";

export function Login() {
  let { loginErr } = useSelector((store) => store.auth);
  let { t } = useTranslate();

  let { form, error, inputChange, check } = useFormValidate(
    {
      username: "",
      password: "",
    },
    {
      rule: {
        username: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
          check: "password",
        },
      },

      message: {
        username: {
          required: "Vui long dien ten dang nhap",
          pattern: "Ten dang nhap khong dung dinh dang",
        },
        password: {
          required: "Vui long nhap mat khau",
        },
      },
    }
  );
  let dispatch = useDispatch();
  function onLogin(e) {
    e.preventDefault();
    let err = check();
    if (Object.keys(err).length === 0) {
      dispatch(handleLogin(form));
    }
  }
  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg mb-10 mb-md-0">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">{t("Returning Customer")}</h6>
          {/* Form */}
          <form>
            <div className="row">
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="loginEmail">
                    {t(" Email Address *")}
                  </label>
                  {loginErr && <p className="text-error">{loginErr}</p>}
                  <input
                    name="username"
                    onChange={inputChange}
                    value={form.username}
                    className={`${
                      error.username
                        ? "form-control form-control-sm error"
                        : "form-control form-control-sm"
                    }`}
                    // className="form-control form-control-sm"
                    id="loginEmail"
                    type="email"
                    placeholder="Email Address *"
                    required
                  />
                  {error.username && (
                    <p className="text-error">{error.username}</p>
                  )}
                </div>
              </div>
              <div className="col-12">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="loginPassword">
                    {t(" Password *")}
                  </label>
                  <input
                    name="password"
                    value={form.password}
                    onChange={inputChange}
                    className={`${
                      error.password
                        ? "form-control form-control-sm error"
                        : "form-control form-control-sm"
                    }`}
                    id="loginPassword"
                    type="password"
                    placeholder="Password *"
                    required
                  />
                  {error.password && (
                    <p className="text-error">{error.password}</p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md">
                {/* Remember */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="loginRemember"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="loginRemember"
                    >
                      {t("Remember me")}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group">
                  <a
                    className="font-size-sm text-reset"
                    data-toggle="modal"
                    href="#modalPasswordReset"
                  >
                    {t("Forgot Password?")}
                  </a>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button
                  onClick={onLogin}
                  className="btn btn-sm btn-dark"
                  // type="submit"
                >
                  {t("Sign In")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
