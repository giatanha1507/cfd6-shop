import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../../core/hook/useFormValidate";
import useTranslate from "../../../../core/hook/useTranslate";
import { handleUpdate } from "../../../../redux/action/authAction";

export function Personal() {
  let { t } = useTranslate();
  let [text, setText] = useState("");
  let yearNow = new Date().getFullYear();
  let { data } = useSelector((store) => store.auth);
  let dispatch = useDispatch();
  let birthday = "";
  if (data.birthday === null) {
    birthday = "1/1/2000";
  } else {
    birthday = data.birthday;
  }

  let [day, month, year] = birthday.split("/");
  let [date, setDate] = useState({
    day: day,
    month: month,
    year: year,
  });
  let firstName = data.first_name;
  let { form, error, inputChange, check } = useFormValidate(
    {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      gender: "male",
      password: "",
      confirm_password: "",
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
        password: {
          required: true,
          min: 6,
          max: 32,
        },
        confirm_password: {
          required: true,
          match: "password",
        },
      },
      message: {
        password: {
          required: "Vui long nhap mat khau",
        },
        confirm_password: {
          pattern: "Mat khau khong trung khop",
        },
      },
    }
  );

  function handleSelect(e) {
    let name = e.target.name;
    setDate({
      ...date,
      [name]: e.target.value,
    });
  }
  function onUpdate(e) {
    e.preventDefault();
    let exclude = {};
    if (!form.password) {
      exclude = {
        password: true,
        confirm_password: true,
      };
    }
    let send = date.day + "/" + date.month + "/" + date.year;
    let err = check({ exclude });
    if (Object.keys(err).length === 0) {
      if (firstName !== form.name) {
        dispatch(
          handleUpdate({
            ...form,
            birthday: send,
          })
        );
        setText("");
      } else {
        setText("Vui long thay doi thong tin");
      }
    }
  }

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Form */}
      <form>
        {text && <p className="text-error">{text}</p>}
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountFirstName">{t("First Name")} *</label>
              <input
                name="first_name"
                value={form.first_name}
                className="form-control form-control-sm"
                id="accountname"
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
                // defaultValue="user@email.com"
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
                name="password"
                value={form.password}
                onChange={inputChange}
              />
              {error.password && <p className="text-error">{error.password}</p>}
              {text && <p className="text-error">{text}</p>}
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
                name="confirm_password"
                value={form.confirm_password}
                onChange={inputChange}
              />
              {error.confirm_password && (
                <p className="text-error">{error.confirm_password}</p>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Birthday */}
            <div className="form-group ">
              {/* Label */}
              <label>{t("Date of Birth")}</label>
              {/* Inputs */}
              <div className="form-row edit">
                <div className="col-auto">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountDate">
                    {t("Date")}
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountDate"
                    onChange={handleSelect}
                    name="day"
                    value={date.day}
                  >
                    {[...Array(31)].map((e, i) => (
                      <option onChange={inputChange} value={i + 1} key={i}>
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
                    name="month"
                    onChange={handleSelect}
                    value={date.month}
                  >
                    {[...Array(12)].map((e, i) => (
                      <option onClick={inputChange} value={i + 1} key={i}>
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
                    name="year"
                    onChange={handleSelect}
                    value={date.year}
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
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    defaultChecked={form.gender === "male"}
                    onClick={inputChange}
                  />{" "}
                  {t("Male")}
                </label>
                <label className="btn btn-sm btn-outline-border">
                  <input
                    onClick={inputChange}
                    type="radio"
                    name="gender"
                    value="female"
                    defaultChecked={form.gender === "female"}
                  />
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
