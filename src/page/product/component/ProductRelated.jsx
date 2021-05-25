import React from "react";
import { ProductItem } from "../../../component";

export function ProductRelated() {
  return (
    <section className="pt-11">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <h4 className="mb-10 text-center">You might also like</h4>
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
