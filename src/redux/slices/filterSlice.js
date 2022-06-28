import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  currentPage: 1,
  categoryId: 0,
  sortType: {
    name: 'популярність (A-Z)',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.categoryId = action.payload;
    },

    sortCategory(state, action) {
      state.sortType = action.payload;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage =Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      // state.sortType = action.payload.sortType;
    },
  },
});

export const { changeCategory, sortCategory, changeCurrentPage, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
