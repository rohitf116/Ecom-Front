import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartContants";

export const cartReducer = (state = { cart: {} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const exsitItem = state.cart.items.find(
        (x) => x._id.toString() === item.product
      );
      if (exsitItem) {
        return {
          ...state,
          cart: state.cart.items.map((x) =>
            x.product === exsitItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
    default:
      return state;
  }
};
