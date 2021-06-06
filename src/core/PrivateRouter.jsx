import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function PrivateRouter(prop) {
  let { login } = useSelector((store) => store.auth);
  if (!login) {
    return <Redirect to="/auth" />;
  }
  return <Route {...prop} />;
}
