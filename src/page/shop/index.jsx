import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Promote } from "../../component";
import { fetchCategory, fetchProducts } from "../../redux/action/productAction";
import { ContentShop } from "./component";
import { getQuery, reverse } from "../../utils/queryUrl";

export function Shop() {
  let dispatch = useDispatch();
  let { product, categories } = useSelector((store) => store.product);

  let url = getQuery();
  let str = reverse(url);

  useEffect(() => {
    dispatch(fetchProducts(str));
    dispatch(fetchCategory());
  }, [str]);

  return (
    <>
      <Promote />
      <ContentShop product={product} categories={categories} />
    </>
  );
}
