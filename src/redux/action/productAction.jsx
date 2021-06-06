import shopApi from "../../service/shopApi";
import { PRODUCTS, CATEGORY } from "../type";

export function fetchProducts(str) {
  return async (dispatch) => {
    let res = await shopApi.shopProduct(str);
    if (res) {
      dispatch({
        type: PRODUCTS,
        payload: res,
      });
    }
  };
}

export function fetchCategory() {
  return async (dispatch) => {
    let res = await shopApi.shopCategory();
    if (res) {
      dispatch({
        type: CATEGORY,
        payload: res,
      });
    }
  };
}
