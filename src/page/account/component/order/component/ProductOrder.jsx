import React from "react";
import useTranslate from "../../../../../core/hook/useTranslate";

export function ProductOrder() {
  let { t } = useTranslate();
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4 col-md-3 col-xl-2">
          {/* Image */}
          <a href="product.html">
            <img
              src="/img/products/product-48.jpg"
              alt="..."
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col">
          {/* Title */}
          <p className="mb-4 font-size-sm font-weight-bold">
            <a className="text-body" href="product.html">
              {t("Sweatshirt with Pocket")}
            </a>{" "}
            <br />
            <span className="text-muted">$39.00</span>
          </p>
          {/* Text */}
          <div className="font-size-sm text-muted">
            {t("Size")}: L <br />
            {t("Color: Pink")}
          </div>
        </div>
      </div>
    </li>
  );
}
