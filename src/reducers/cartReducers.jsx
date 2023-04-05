import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartContants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return action.payload;

    case CART_REMOVE_ITEM:
      return { cart: action.payload };
    default:
      return state;
  }
};
