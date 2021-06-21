import { ADD_CART } from "../type";

let init = {
  carts: [],
  priceTotal: 0,
  amountCart: 0,
};

export default function cartReducer(state = init, action) {
  switch (action.type) {
    case ADD_CART:
      let { carts, priceTotal, amountCart } = state;
      let item = action.payload;
      let amountItem = item.amountItem || 1;
      let index = carts.findIndex((e) => e._id === action.payload._id);
      amountCart += 1;
      if (index === -1) {
        item.amountItem = amountItem;
        carts.push(item);
        priceTotal += item.price;
      } else {
        carts[index].amountItem += amountItem;
        priceTotal += carts[index].price;
      }
      return {
        ...state,
        carts,
        priceTotal,
        amountCart,
      };
    default:
      return state;
  }
}
