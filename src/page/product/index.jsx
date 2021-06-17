import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FeaturesBot } from "../../component";
import shopApi from "../../service/shopApi";
import {
  DescriptionProduct,
  ProductRelated,
  ProductTop,
  ReviewProduct,
} from "./component";

export function ProductDetail() {
  let param = useParams();
  console.log(`param`, param);
  let [product, setProduct] = useState();
  useEffect(async () => {
    let res = await shopApi.products(param.slug);
    setProduct(res.data[0]);
    console.log(`product`, res.data[0]);
  }, [param.slug]);
  return (
    <>
      <ProductTop {...product} />
      <DescriptionProduct />
      <ProductRelated />
      <ReviewProduct />
      <FeaturesBot />
    </>
  );
}
