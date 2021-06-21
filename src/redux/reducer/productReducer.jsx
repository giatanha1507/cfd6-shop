import { CATEGORY, PRODUCTS, GET_NAME, LOADING, GET_VIEW } from "../type";

let init = {
  product: [],
  categories: [],
  paginate: {},
  categoryName: "",
  loading: false,
  getView: [],
};

export default function productReducer(state = init, action) {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        product: action.payload.data,
        paginate: action.payload.paginate,
        loading: false,
      };
    case CATEGORY:
      localStorage.setItem("catagories", JSON.stringify(action.payload));
      return {
        ...state,
        categories: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        categoryName: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_VIEW:
      return {
        ...state,
        getView: action.payload,
      };

    default:
      return state;
  }
}
