import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { loginReducer } from "./reducers/userReducers";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: loginReducer,
});
const cartFormLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {};
const initalState = {
  cart: cartFormLocalStorage,
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
