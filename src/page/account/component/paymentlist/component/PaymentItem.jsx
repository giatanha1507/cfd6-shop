import React from "react";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import useTranslate from "../../../../../core/hook/useTranslate";

export function PaymentItem() {
  let { path } = useRouteMatch();
  let { t } = useTranslate();

  return (
    <div className="col-12 col-lg-6">
      {/* Card */}
      <div className="card card-lg bg-light mb-8">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-6">{t("Debit / Credit Card")}</h6>
          {/* Text */}
          <p className="mb-5">
            <strong>{t("Card Number:")}</strong> <br />
            <span className="text-muted">4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)</span>
          </p>
          {/* Text */}
          <p className="mb-5">
            <strong>{t("Expiry Date:")}</strong> <br />
            <span className="text-muted">Feb 2022</span>
          </p>
          {/* Text */}
          <p className="mb-0">
            <strong>{t("Name on Card:")}</strong> <br />
            <span className="text-muted">Daniel Robinson</span>
          </p>
          {/* Action */}
          <div className="card-action card-action-right">
            {/* Button */}
            <NavLink
              to={`${path}-edit`}
              className="btn btn-xs btn-circle btn-white-primary"
              href="account-payment-edit.html"
            >
              <i className="fe fe-edit-2" />
            </NavLink>
            {/* Button */}
            <button className="btn btn-xs btn-circle btn-white-primary">
              <i className="fe fe-x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
