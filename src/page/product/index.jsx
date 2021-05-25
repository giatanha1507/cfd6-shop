import React from "react";
import { FeaturesBot } from "../../component";
import {
  DescriptionProduct,
  ProductRelated,
  ProductTop,
  ReviewProduct,
} from "./component";

export function ProductDetail() {
  return (
    <>
      <ProductTop />
      <DescriptionProduct />
      <ProductRelated />
      <ReviewProduct />
      <FeaturesBot />
    </>
  );
}
