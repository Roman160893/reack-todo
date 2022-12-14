import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onSelectRadio: 'All',
};

export const todoFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectFilter: (state, action) => {
      state.onSelectRadio = action.payload;
    },
  },
});

export const { selectFilter } = todoFilterSlice.actions;

export default todoFilterSlice.reducer;
