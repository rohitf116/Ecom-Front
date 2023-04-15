import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_FAIL_REQUEST,
  USER_SUCCESS_REQUEST,
  USER_LOGOUT,
} from "../constants/userContants";
console.log(USER_LOGIN_REQUEST, "USER_LOGIN_REQUEST");
export const login = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      // Add the 'await' keyword here
      "http://localhost:3001/api/v1/user/login",
      { email, password },
      config
    );
    console.log(data, "data");
    dispatch({ type: USER_SUCCESS_REQUEST, payload: data.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_FAIL_REQUEST,
      payload:
        error?.message && error?.response?.data?.message
          ? error.response.data.message
          : error?.message,
    });
  }
};
