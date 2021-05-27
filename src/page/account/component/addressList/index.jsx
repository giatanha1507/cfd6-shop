import React from "react";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import useTranslate from "../../../../core/hook/useTranslate";
import { AddressItem } from "./component";

export function AddressList() {
  let { path } = useRouteMatch();
  let { t } = useTranslate();
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      <div className="row">
        <AddressItem />
        <AddressItem />
        <div className="col-12">
          {/* Button */}
          <NavLink
            to={`${path}-edit`}
            className="btn btn-block btn-lg btn-outline-border"
            href="account-address-edit.html"
          >
            {t("Add Address")} <i className="fe fe-plus" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
