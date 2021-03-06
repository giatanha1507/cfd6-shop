import React from "react";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import useTranslate from "../../../../../core/hook/useTranslate";

export function AddressItem({ _id }) {
  let { t } = useTranslate();
  let { path } = useRouteMatch();
  //   console.log(`path`, path);
  return (
    <div className="col-12 col-lg-6">
      {/* Card */}
      <div className="card card-lg bg-light mb-8">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-6">{t("Billing Address")}</h6>
          {/* Text */}
          <p className="text-muted mb-0">
            Daniel Robinson <br />
            3997 Raccoon Run <br />
            Kingston <br />
            45644 <br />
            United States <br />
            6146389574
          </p>
          {/* Action */}
          <div className="card-action card-action-right">
            {/* Button */}
            <NavLink
              to={`${path}-edit`}
              className="btn btn-xs btn-circle btn-white-primary"
              href="account-address-edit.html"
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
