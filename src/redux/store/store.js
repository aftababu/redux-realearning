// import { createStore } from "redux";
// import { cartReducers } from "../reducer/cartReducer";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartReducer";

// export const store = createStore(cartReducers);

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
