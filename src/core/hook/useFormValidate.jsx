import { useState } from "react";

const regPhone =
  /(\+84|0)+(3[2-9]|5[6|8|9]|9\d(?!5)|8[1-9]|7[0|6-9])+([0-9]{7})\b/;
const regName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regFacebook =
  /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/i;
const regSkype = /[a-zA-Z][a-zA-Z0-9\.,\-_]{5,31}/i;
const regTitleContent = /(?:[A-Z][a-z]+)/;

export default function useFormValidate(initialForm, validate) {
  let [form, setForm] = useState(initialForm);
  let [error, setError] = useState("");
  var checkPassword = "";
  function inputChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    // console.log(`pass1`, pass1);
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setForm({
      ...form,
      [name]: value,
    });
  }
  function check() {
    let err = {};
    let { rule, message } = validate;
    for (let i in rule) {
      let r = rule[i];
      let m = message[i];
      if (r.required) {
        if (!form[i]?.trim()) {
          err[i] = m?.required || "Khong duoc de trong";
          continue;
        }
      }
      if (r.pattern && form[i]) {
        let { pattern } = r;
        if (pattern === "name") {
          pattern = regName;
        }
        if (pattern === "phone") {
          pattern = regPhone;
        }
        if (pattern === "email") {
          pattern = regEmail;
        }
        if (pattern === "facebook") {
          pattern = regFacebook;
        }
        if (pattern === "skype") {
          pattern = regSkype;
        }
        if (pattern === "title") {
          pattern = regTitleContent;
        }

        if (!pattern.test(form[i])) {
          err[i] = m?.pattern || "Khong dung dinh dang";
        }
      }
      if (r.min) {
        if (Object.keys(form[i]).length < r.min) {
          err[i] = `Khong duoc nho hon ${r.min} ki tu`;
          continue;
        }
      }
      if (r.max) {
        if (Object.keys(form[i]).length > r.max) {
          err[i] = `Khong duoc lon hon ${r.max} ki tu`;
          continue;
        }
      }
      if (r.check) {
        checkPassword = form[i];
      }
      if (r.confirm_password) {
        // console.log(`form[i]`, form[i]);

        if (checkPassword !== form[i]) {
          err[i] = "Mat khau khong khop";
        }
      }
    }

    setError(err);
    return err;
  }

  return { form, error, inputChange, check, setForm, setError };
}
