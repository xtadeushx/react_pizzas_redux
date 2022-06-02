import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: { name: 'популярности (A-Z)', sortProperty: 'rating' },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, action) =>  state.categoryId = action.payload,
    
    sortCategory: (state, action) => state.sortType = action.payload,
   
  },
});
