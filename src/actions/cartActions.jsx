import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartContants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.post("http://localhost:3001/api/v1/cart", {
    id,
    qty,
  });
  console.log(data);
  dispatch({
    type: CART_ADD_ITEM,
    payload: data.data,
  });
  localStorage.setItem("cart", JSON.stringify(getState()));
};

export const removeFromCart = (id, qty) => async (dispatch, getState) => {
  console.log(id, qty);
  const { data } = await axios.put("http://localhost:3001/api/v1/cart", {
    id,
    qty,
  });
  console.log(data);
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: data.data,
  });
  localStorage.setItem("cart", JSON.stringify(getState()));
};
