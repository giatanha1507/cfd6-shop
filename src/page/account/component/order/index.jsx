import React, { useEffect } from "react";
import { useRouteMatch } from "react-router";
import useTranslate from "../../../../core/hook/useTranslate";
import { ProductOrder } from "./component";

export function OrderDetails() {
  let { t } = useTranslate();
  let { path } = useRouteMatch();
  // console.log("path", path.split("/")[2]);
  console.log("here");
  // if (path.split("/")[2] === "order-detail") {
  //   let $ = window.$;
  //   $(".list-group-item list-group-item-action dropright-toggle").addClass(
  //     "active"
  //   );
  // }
  // useEffect(() => {
  //   let $ = window.$;
  //   $(".list-group-item list-group-item-action dropright-toggle").addClass(
  //     "active"
  //   );
  //   // return () => {
  //   //   cleanup;
  //   // };
  // }, []);

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Order */}
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
          {/* Heading */}
          <h6 className="mb-7">{t("Order Items")} (3)</h6>
          {/* Divider */}
          <hr className="my-5" />
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
            <ProductOrder />
            <ProductOrder />
            <ProductOrder />
            <ProductOrder />
            <ProductOrder />
          </ul>
        </div>
      </div>
      {/* Total */}
      <div className="card card-lg mb-5 border">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">{t("Order Tota")}l</h6>
          {/* List group */}
          <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
            <li className="list-group-item d-flex">
              <span>{t("Subtotal")}</span>
              <span className="ml-auto">$128.00</span>
            </li>
            <li className="list-group-item d-flex">
              <span>{t("Tax")}</span>
              <span className="ml-auto">$0.00</span>
            </li>
            <li className="list-group-item d-flex">
              <span>{t("Shipping")}</span>
              <span className="ml-auto">$8.00</span>
            </li>
            <li className="list-group-item d-flex font-size-lg font-weight-bold">
              <span>{t("Total")}</span>
              <span className="ml-auto">$136.00</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Details */}
      <div className="card card-lg border">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">{t("Billing &amp; Shipping Details")}</h6>
          {/* Content */}
          <div className="row">
            <div className="col-12 col-md-4">
              {/* Heading */}
              <p className="mb-4 font-weight-bold">{t("Billing Address")}:</p>
              <p className="mb-7 mb-md-0 text-gray-500">
                Daniel Robinson, <br />
                3997 Raccoon Run, <br />
                Kingston, 45644, <br />
                United States, <br />
                6146389574
              </p>
            </div>
            <div className="col-12 col-md-4">
              {/* Heading */}
              <p className="mb-4 font-weight-bold">{t("Shipping Address")}:</p>
              <p className="mb-7 mb-md-0 text-gray-500">
                Daniel Robinson, <br />
                3997 Raccoon Run, <br />
                Kingston, 45644, <br />
                United States, <br />
                6146389574
              </p>
            </div>
            <div className="col-12 col-md-4">
              {/* Heading */}
              <p className="mb-4 font-weight-bold">{t("Shipping Method")}:</p>
              <p className="mb-7 text-gray-500">
                {t(" Standart Shipping")} <br />
                {t("(5 - 7 days)")}
              </p>
              {/* Heading */}
              <p className="mb-4 font-weight-bold">{t("Payment Method")}:</p>
              <p className="mb-0 text-gray-500">{t("Debit Mastercard")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
