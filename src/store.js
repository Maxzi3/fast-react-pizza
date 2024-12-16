import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Feature/user/userSlice";
import cartReducer from "./Feature/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
