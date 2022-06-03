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
    },
    removeItemFromCart: (state, action) => {
      state.cartValue  =  state.cartValue.filter(item => item.id !== action.payload)
    }
  },
});

export const {addToCart,cleanCart,removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;