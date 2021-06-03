import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Promote } from "../../component";
import { fetchCategory, fetchProducts } from "../../redux/action/productAction";
import { ContentShop } from "./component";

export function Shop() {
  let dispatch = useDispatch();
  let { product, categories } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategory());
  }, []);
  return (
    <>
      <Promote />
      <ContentShop product={product} categories={categories} />
    </>
  );
}
