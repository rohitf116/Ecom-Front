import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productContants";
import axios from "axios";
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:3001/api/v1/product");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
