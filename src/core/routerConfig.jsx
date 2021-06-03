import React from "react";
import { Route, Switch } from "react-router";
import PrivateRouter from "./PrivateRouter";

export default function routerConfig(routers, parentsPath = "") {
  return (
    <Switch>
      {routers.map((e) => {
        let {
          exact,
          path,
          component: Component,
          routers: childRouters,
          auth,
        } = e;
        if (!path) path = "";
        path = parentsPath + "/" + path;
        path = path.replace(/\/+/g, "/");
        let child = null;
        if (childRouters) {
          child = routerConfig(childRouters, path);
        }
        if (auth) {
          <PrivateRouter
            exact={exact}
            path={path}
            component={(prop) => <Component {...prop}>{child}</Component>}
          />;
        }
        return (
          <Route
            exact={exact}
            path={path}
            component={(prop) => <Component {...prop}>{child}</Component>}
          />
        );
      })}
    </Switch>
  );
}
