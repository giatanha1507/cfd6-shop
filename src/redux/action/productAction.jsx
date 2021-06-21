import shopApi from "../../service/shopApi";
import { PRODUCTS, CATEGORY, GET_VIEW } from "../type";

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

export function handleGetView(data) {
  return {
    type: GET_VIEW,
    payload: data,
  };
}
