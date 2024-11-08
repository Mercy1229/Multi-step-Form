import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './infoSlice';

const store = configureStore({
  reducer: {
    info: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
