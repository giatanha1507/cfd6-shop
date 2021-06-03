import { CATEGORY, PRODUCTS } from "../type";

let init = {
  product: [],
  categories: [],
};

export default function productReducer(state = init, action) {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }

  return state;
}
