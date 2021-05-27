import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function PrivateRouter(prop) {
  let { login } = useSelector((store) => store.auth);
  if (!login) {
    return (
      <Route>
        <Redirect to="/auth" />
      </Route>
    );
  }
  return <Route {...prop} />;
}
