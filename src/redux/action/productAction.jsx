import shopApi from "../../service/shopApi";
import { PRODUCTS, CATEGORY } from "../type";

export function fetchProducts() {
  return async (dispatch) => {
    let res = await shopApi.shopProduct();
    if (res?.data) {
      dispatch({
        type: PRODUCTS,
        payload: res.data,
      });
    }
  };
}

export function fetchCategory() {
  return async (dispatch) => {
    let res = await shopApi.shopCategory();
    console.log(`res`, res);
    if (res) {
      dispatch({
        type: CATEGORY,
        payload: res,
      });
    }
  };
}
