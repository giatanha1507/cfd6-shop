import React from "react";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import { Link, NavLink } from "react-router-dom";
import useTranslate from "../../../core/hook/useTranslate";
import { handleLogout } from "../../../redux/action/authAction";

export function SideBar() {
  let { path } = useRouteMatch();
  let { t } = useTranslate();
  let dispatch = useDispatch();
  function onLogout(e) {
    e.preventDefault();
    dispatch(handleLogout());
  }
  
  return (
    <div className="col-12 col-md-3">
      {/* Nav */}
      <nav className="mb-10 mb-md-0">
        <div className="list-group list-group-sm list-group-strong list-group-flush-x">
          <NavLink
            to={`${path}/order`}
            className="list-group-item list-group-item-action dropright-toggle "
            // onClick={onActive}
          >
            {t("Orders")}
          </NavLink>
          <NavLink
            to={`${path}/wishlist`}
            className="list-group-item list-group-item-action dropright-toggle "
          >
            {t("Widhlist")}
          </NavLink>
          <NavLink
            exact
            to={`${path}`}
            className="list-group-item list-group-item-action dropright-toggle "
          >
            {t("Personal Info")}
          </NavLink>
          <NavLink
            to={`${path}/address`}
            className="list-group-item list-group-item-action dropright-toggle"
          >
            {t("Addresses")}
          </NavLink>
          <NavLink
            to={`${path}/payment`}
            className="list-group-item list-group-item-action dropright-toggle "
          >
            {t(" Payment Methods")}
          </NavLink>
          <Link
            to="/auth"
            onClick={onLogout}
            className="list-group-item list-group-item-action dropright-toggle"
          >
            {t("  Logout")}
          </Link>
        </div>
      </nav>
    </div>
  );
}
