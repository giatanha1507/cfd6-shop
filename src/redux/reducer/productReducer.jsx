import { CATEGORY, PRODUCTS, GET_NAME } from "../type";

let init = {
  product: [],
  categories: [],
  paginate: {},
  categoryName: "",
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
    case GET_NAME:
      return {
        ...state,
        categoryName: action.payload,
      };

    default:
      return state;
  }
}
