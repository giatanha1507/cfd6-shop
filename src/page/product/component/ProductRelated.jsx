import React from "react";
import { ProductItem } from "../../../component";
import useTranslate from "../../../core/hook/useTranslate";

export function ProductRelated() {
  let{t}= useTranslate();
  return (
    <section className="pt-11">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <h4 className="mb-10 text-center">{t("You might also like")}</h4>
            {/* Items */}
            <div className="row">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
