import { CATEGORY, PRODUCTS } from "../type";

let init = {
  product: [],
  categories: [],
  paginate: {},
};

export default function productReducer(state = init, action) {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        product: action.payload.data,
        paginate: action.payload.paginate,
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
