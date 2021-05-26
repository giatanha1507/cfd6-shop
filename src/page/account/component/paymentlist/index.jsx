import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import useTranslate from "../../../../core/hook/useTranslate";
import { PaymentItem } from "./component";

export function Payment() {
  let { path } = useRouteMatch();
  let { t } = useTranslate();

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      <div className="row">
        <PaymentItem />
        <PaymentItem />
        <PaymentItem />

        <div className="col-12">
          {/* Button */}
          <NavLink
            to={`${path}-edit`}
            className="btn btn-block btn-lg btn-outline-border"
            href="account-payment-edit.html"
          >
            {t("Add Payment Method")} <i className="fe fe-plus" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
