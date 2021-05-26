import React from "react";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import useTranslate from "../../../core/hook/useTranslate";

export function SideBar() {
  let { path } = useRouteMatch();
  let { t } = useTranslate();
  return (
    <div className="col-12 col-md-3">
      {/* Nav */}
      <nav className="mb-10 mb-md-0">
        <div className="list-group list-group-sm list-group-strong list-group-flush-x">
          <NavLink
            to={`${path}/order`}
            className="list-group-item list-group-item-action dropright-toggle "
            href="account-orders.html"
          >
            {t("Orders")}
          </NavLink>
          <NavLink
            to={`${path}/wishlist`}
            className="list-group-item list-group-item-action dropright-toggle "
            href="account-wishlist.html"
          >
            {t("Widhlist")}
          </NavLink>
          <NavLink
            exact
            to={`${path}`}
            className="list-group-item list-group-item-action dropright-toggle "
            href="account-personal-info.html"
          >
            {t("Personal Info")}
          </NavLink>
          <NavLink
            to={`${path}/address`}
            className="list-group-item list-group-item-action dropright-toggle active"
            href="account-address.html"
          >
            {t("Addresses")}
          </NavLink>
          <NavLink
            to={`${path}/payment`}
            className="list-group-item list-group-item-action dropright-toggle "
            href="account-payment.html"
          >
            {t(" Payment Methods")}
          </NavLink>
          <a
            className="list-group-item list-group-item-action dropright-toggle"
            href="#!"
          >
            {t("  Logout")}
          </a>
        </div>
      </nav>
    </div>
  );
}
