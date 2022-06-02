import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  categoryId: 0,
  sortType: {
    name: 'популярность',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.categoryId = action.payload;
    },

    sortCategory: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { changeCategory, sortCategory } = filterSlice.actions;
export default filterSlice.reducer;
