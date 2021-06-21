import { ADD_CART } from "../type";

export function handleAddCart(data) {
//   console.log(`data`, data);
  return {
    type: ADD_CART,
    payload: data,
  };
}
