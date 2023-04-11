import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: function (state, action) {
      state.items.push(action.payload);
    },
    removeItem: function (state, action) {
      state.items.pop();
    },
    clearCart: function (state) {
      state.items = [];
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
// It will combine all the reducers to make it one
