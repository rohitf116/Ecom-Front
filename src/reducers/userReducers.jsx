import {
  USER_LOGIN_REQUEST,
  USER_FAIL_REQUEST,
  USER_SUCCESS_REQUEST,
  USER_LOGOUT,
} from "../constants/userContants";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_SUCCESS_REQUEST:
      return { loading: false, userInfo: action.payload };
    case USER_FAIL_REQUEST:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
