import React from "react";
import { useSelector } from "react-redux";
import useFormValidate from "../../../../core/hook/useFormValidate";
import useTranslate from "../../../../core/hook/useTranslate";

export function Personal() {
  let { t } = useTranslate();
  let yearNow = new Date().getFullYear();
  let { data } = useSelector((store) => store.auth);
  let { form, error, inputChange, check, setForm } = useFormValidate(
    {
      ...data,
    },
    {
      rule: {
        email: {
          required: true,
          pattern: "email",
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
    }
  );
  // console.log(`data?.birthday`);
  function onUpdate(e) {
    e.preventDefault();
    let err = check();
    if (Object.keys(err).length === 0) {
      console.log(`form`, form);
    }
  }

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Form */}
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountFirstName">{t("First Name")} *</label>
              <input
                name="first_name"
                value={form.first_name}
                className="form-control form-control-sm"
                id="accountFirstName"
                type="text"
                placeholder="First Name *"
                // defaultValue="Daniel"
                onChange={inputChange}
                required
              />
              {error.first_name && (
                <p className="text-error">{error.first_name}</p>
              )}
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountLastName">{t("Last Name")} *</label>
              <input
                name="last_name"
                value={form.last_name}
                className="form-control form-control-sm"
                id="accountLastName"
                type="text"
                placeholder="Last Name *"
                onChange={inputChange}
                // defaultValue="Robinson"
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
              <label htmlFor="accountEmail">{t("Email Address")} *</label>
              <input
                name="email"
                value={form.email}
                onChange={inputChange}
                className="form-control form-control-sm"
                id="accountEmail"
                type="email"
                placeholder="Email Address *"
                defaultValue="user@email.com"
                required
              />
              {error.email && <p className="text-error">{error.email}</p>}
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label htmlFor="accountPassword">{t("Current Password")} *</label>
              <input
                className="form-control form-control-sm"
                id="accountPassword"
                type="password"
                placeholder="Current Password *"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label htmlFor="AccountNewPassword">{t("New Password")} *</label>
              <input
                className="form-control form-control-sm"
                id="AccountNewPassword"
                type="password"
                placeholder="New Password *"
                required
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Birthday */}
            <div className="form-group">
              {/* Label */}
              <label>{t("Date of Birth")}</label>
              {/* Inputs */}
              <div className="form-row">
                <div className="col-auto">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountDate">
                    {t("Date")}
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountDate"
                  >
                    {[...Array(31)].map((e, i) => (
                      <option
                        data-name="day"
                        onChange={inputChange}
                        data-value={i + 1}
                        key={i}
                      >
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-auto">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountMonth">
                    {t(" Month")}
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountMonth"
                  >
                    {[...Array(12)].map((e, i) => (
                      <option
                        data-name="month"
                        onChange={inputChange}
                        value={i + 1}
                        key={i}
                      >
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-auto">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountYear">
                    Year
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountYear"
                  >
                    {[...Array(100)].map((e, i) => (
                      <option value={yearNow - i} key={i}>
                        {yearNow - i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Gender */}
            <div className="form-group mb-8">
              <label>{t("Gender")}</label>
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-sm btn-outline-border active">
                  <input type="radio" name="gender" defaultChecked />{" "}
                  {t("Male")}
                </label>
                <label className="btn btn-sm btn-outline-border">
                  <input type="radio" name="gender" />
                  {t(" Female")}
                </label>
              </div>
            </div>
          </div>
          <div className="col-12">
            {/* Button */}
            <button onClick={onUpdate} className="btn btn-dark" type="submit">
              {t("Save Changes")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
