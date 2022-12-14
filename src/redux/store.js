import { configureStore } from '@reduxjs/toolkit';
import todoFilterSlice from './slice/todoFilterSlice';
import todoSlice from './slice/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    filter: todoFilterSlice,
  },
});
