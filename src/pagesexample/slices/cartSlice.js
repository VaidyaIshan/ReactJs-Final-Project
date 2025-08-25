import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      shippingAddress: {},
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const foundItem = state.cartItems.find((i) => i.id == item.id);
      if (foundItem) {
        state.cartItems = state.cartItems.map((i) =>
          i.id == foundItem.id ? item : i
        );
      } else state.cartItems = [...state.cartItems, item];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCartItem: () => {},
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
