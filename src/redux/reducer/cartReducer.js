import { createSelector, createSlice } from "@reduxjs/toolkit";
// import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cartAction";

// const initialSate = {
//   cart: [],

//   products: [
//     { name: "lenovo laptop", id: 1 },
//     { name: "Asus laptop", id: 2 },
//     { name: "Dell laptop", id: 3 },
//     { name: "Mac laptop", id: 4 },
//     { name: "HP laptop", id: 5 },
//   ],
// };
// export const cartReducers = (state = initialSate, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const newItem = {
//         id: action.id,
//         name: action.name,
//         cartId: state.cart.length + 1,
//       };
//       const newCart = [...state.cart, newItem];

//       return { ...state, cart: newCart };
//     case REMOVE_FROM_CART:
//       console.log(state);
//       const cartId = action.cartId;
//       const remainingCart = state.cart.filter((item) => item.cartId !== cartId);
//       return { ...state, cart: remainingCart };
//     default:
//       return state;
//   }
// };

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
    products: [
      { name: "lenovo laptop", id: 1 },
      { name: "Asus laptop", id: 2 },
      { name: "Dell laptop", id: 3 },
      { name: "Mac laptop", id: 4 },
      { name: "HP laptop", id: 5 },
    ],
  },

  reducers: {
    addItems: (state, action) => {
      // console.log(state);
      state.cart.push(action.payload);
    },
    removeItems: (state, action) => {
      const remainingCart = state.cart.filter(
        (pd) => pd.id !== action.payload.id
      );
      console.log(action.payload.id);
      return { products: state.products, cart: remainingCart };

      // return [...state, remainingCart];
    },
  },
});

export const { addItems } = cartSlice.actions;
export const { removeItems } = cartSlice.actions;
export const getCartSelector = createSelector(
  (state) => state?.cart?.cart,
  (state) => state
);
export const getProductSelector = createSelector(
  (state) => state?.cart?.products,
  (state) => state
);

export default cartSlice.reducer;
