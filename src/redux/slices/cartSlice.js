import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartValue: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cartValue = [...state.cartValue, action.payload];
    },
    cleanCart: (state) => {
      state.cartValue = [];
    }
  },
});

export const {addToCart,cleanCart} = cartSlice.actions;
export default cartSlice.reducer;