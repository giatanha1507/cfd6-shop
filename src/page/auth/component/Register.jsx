import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../core/hook/useFormValidate";
import useTranslate from "../../../core/hook/useTranslate";
import { handleRegister } from "../../../redux/action/authAction";

export function Register() {
  let { loginErr } = useSelector((store) => store.auth);
  let { t } = useTranslate();
  let { form, error, inputChange, check } = useFormValidate(
    {
      password: "",
      first_name: "",
      last_name: "",
      confirm_password: "",
      email: "",
    },
    {
      rule: {
        email: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
          check: "password",
        },
        confirm_password: {
          required: true,
          confirm_password: true,
        },
        first_name: {
          required: true,
          pattern: "name",
        },
        last_name: {
          required: true,
          pattern: "name",
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
        confirm_password: {
          pattern: "Mat khau khong trung khop",
        },
      },
    }
  );
  let dispatch = useDispatch();

  function onRegister(e) {
    e.preventDefault();
    let error = check();
    if (Object.keys(error).length === 0) {
      dispatch(handleRegister(form));
      //   console.log("run");
    }
  }
  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">{t("New Customer")}</h6>
          {/* Form */}
          <form>
            <div className="row">
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  {loginErr && <p className="text-error">{loginErr}</p>}
                  <label className="sr-only" htmlFor="registerFirstName">
                    {t(" First Name *")}
                  </label>
                  <input
                    name="first_name"
                    value={form.first_name}
                    onChange={inputChange}
                    className="form-control form-control-sm"
                    id="registerFirstName"
                    type="text"
                    placeholder="First Name *"
                    required
                  />
                  {error.first_name && (
                    <p className="text-error">{error.first_name}</p>
                  )}
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerLastName">
                    {t(" Last Name *")}
                  </label>
                  <input
                    name="last_name"
                    value={form.last_name}
                    onChange={inputChange}
                    className="form-control form-control-sm"
                    id="registerLastName"
                    type="text"
                    placeholder="Last Name *"
                    required
                  />
                  {error.last_name && (
                    <p className="text-error">{error.last_name}</p>
                  )}
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerEmail">
                    {t("Email Address *")}
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={inputChange}
                    className="form-control form-control-sm"
                    id="registerEmail"
                    type="email"
                    placeholder="Email Address *"
                    required
                  />
                  {error.email && <p className="text-error">{error.email}</p>}
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPassword">
                    {t("Password *")}
                  </label>
                  <input
                    name="password"
                    value={form.password}
                    onChange={inputChange}
                    className="form-control form-control-sm"
                    id="registerPassword"
                    type="password"
                    placeholder="Password *"
                    required
                  />
                  {error.password && (
                    <p className="text-error">{error.password}</p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPasswordConfirm">
                    {t(" Confirm Password *")}
                  </label>
                  <input
                    name="confirm_password"
                    value={form.confirm_password}
                    onChange={inputChange}
                    className="form-control form-control-sm"
                    id="registerPasswordConfirm"
                    type="password"
                    placeholder="Confirm Password *"
                    required
                  />
                  {error.confirm_password && (
                    <p className="text-error">{error.confirm_password}</p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group font-size-sm text-muted">
                  {t(
                    " By registering your details, you agree with our Term s& amp; Conditions, and Privacy and Cookie Policy."
                  )}
                </div>
              </div>
              <div className="col-12 col-md">
                {/* Newsletter */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="registerNewsletter"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="registerNewsletter"
                    >
                      {t("Sign me up for the Newsletter!")}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button
                  onClick={onRegister}
                  className="btn btn-sm btn-dark"
                  type="submit"
                >
                  {t("Register")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
