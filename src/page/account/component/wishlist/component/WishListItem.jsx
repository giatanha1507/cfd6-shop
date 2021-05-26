import React from "react";
import useTranslate from "../../../../../core/hook/useTranslate";

export function WishListItem() {
  let { t } = useTranslate();
  return (
    <div className="col-6 col-md-4">
      <div className="card mb-7">
        {/* Image */}
        <div className="card-img">
          {/* Action */}
          <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
            <i className="fe fe-x" />
          </button>
          {/* Button */}
          <button
            className="btn btn-xs btn-block btn-dark card-btn"
            data-toggle="modal"
            data-target="#modalProduct"
          >
            <i className="fe fe-eye mr-2 mb-1" /> {t("Quick View")}
          </button>
          {/* Image */}
          <img
            className="card-img-top"
            src="/img/products/product-11.jpg"
            alt="..."
          />
        </div>
        {/* Body */}
        <div className="card-body font-weight-bold text-center">
          <a className="text-body" href="product.html">
            {t("Another fine dress")}
          </a>{" "}
          <br />
          <span className="text-muted">$99.00</span>
        </div>
      </div>
    </div>
  );
}
