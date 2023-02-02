import { configureStore } from '@reduxjs/toolkit';
import fileNameReducer from '../features/fileName/fileNameSlice';

export const store = configureStore({
  reducer: {
    fileName: fileNameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
