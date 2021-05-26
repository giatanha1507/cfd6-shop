import React from "react";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import useTranslate from "../../../../../core/hook/useTranslate";

export function OrderItem() {
  let { t } = useTranslate();
  let { path } = useRouteMatch();
  return (
    <div className="card card-lg mb-5 border">
      <div className="card-body pb-0">
        {/* Info */}
        <div className="card card-sm">
          <div className="card-body bg-light">
            <div className="row">
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">{t("Order No")}:</h6>
                {/* Text */}
                <p className="mb-lg-0 font-size-sm font-weight-bold">
                  673290789
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">
                  {t("Shipped date")}:
                </h6>
                {/* Text */}
                <p className="mb-lg-0 font-size-sm font-weight-bold">
                  <time dateTime="2019-10-01">01 Oct, 2019</time>
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">{t("Status")}:</h6>
                {/* Text */}
                <p className="mb-0 font-size-sm font-weight-bold">
                  {t("Awating Delivery")}
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">
                  {t("Order Amount")}:
                </h6>
                {/* Text */}
                <p className="mb-0 font-size-sm font-weight-bold">$259.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="form-row mb-4 mb-lg-0">
              <div className="col-3">
                {/* Image */}
                <div
                  className="embed-responsive embed-responsive-1by1 bg-cover"
                  style={{
                    backgroundImage: "url(/img/products/product-5.jpg)",
                  }}
                />
              </div>
              <div className="col-3">
                {/* Image */}
                <div
                  className="embed-responsive embed-responsive-1by1 bg-cover"
                  style={{
                    backgroundImage: "url(/img/products/product-112.jpg)",
                  }}
                />
              </div>
              <div className="col-3">
                {/* Image */}
                <div
                  className="embed-responsive embed-responsive-1by1 bg-cover"
                  style={{
                    backgroundImage: "url(/img/products/product-7.jpg)",
                  }}
                />
              </div>
              <div className="col-3">
                {/* Image */}
                <div className="embed-responsive embed-responsive-1by1 bg-light">
                  <a
                    className="embed-responsive-item embed-responsive-item-text text-reset"
                    href="#!"
                  >
                    <div className="font-size-xxs font-weight-bold">
                      +2 <br /> {t("more")}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-row">
              <div className="col-6">
                {/* Button */}
                <NavLink
                  to={`${path}-detail`}
                  className="btn btn-sm btn-block btn-outline-dark"
                  href="account-order.html"
                >
                  {t("Order Details")}
                </NavLink>
              </div>
              <div className="col-6">
                {/* Button */}
                <a className="btn btn-sm btn-block btn-outline-dark" href="#!">
                  {t("Track order")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
