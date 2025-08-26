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
      const foundItem = state.cartItems.find((i) => i.id === item.id);
      if (foundItem) {
        state.cartItems = state.cartItems.map((i) =>
          i.id === foundItem.id ? { ...i, qty: (i.qty || 1) + 1 } : i
        );
      } else {
        state.cartItems = [...state.cartItems, { ...item, qty: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateQuantity: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        if (qty <= 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== id);
        } else {
          item.qty = qty;
        }
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeCartItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
