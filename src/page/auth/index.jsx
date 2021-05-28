import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Login, Register } from "./component";

export function Auth() {
  let { login } = useSelector((store) => store.auth);

  if (login) {
    return <Redirect to="/account" />;
  }
  return (
    <section className="py-12 auth">
      <div className="container">
        <div className="row">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
}
