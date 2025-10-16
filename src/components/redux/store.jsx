import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import timerReducer from "./timerSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    timer: timerReducer,
  },
});

export default store;
