import React, { useEffect, useState } from "react";
import { Promote } from "../../component";
import shopApi from "../../service/shopApi";
import { ContentShop } from "./component";

export function Shop() {
  let [state, setState] = useState({
    product: [],
  });
  useEffect(() => {
    shopApi.shopProduct().then((res) => {
      setState(res);
      localStorage.setItem("shopProduct", JSON.stringify(res));
    });
  }, []);
  return (
    <>
      <Promote />
      <ContentShop product={state.data} />
    </>
  );
}
