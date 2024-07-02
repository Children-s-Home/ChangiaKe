import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/CounterSlice';
import layoutReducer from './Slices/NavSlice';  

const store = configureStore({
  reducer: {
    counter: counterReducer,
    layout: layoutReducer,
  },
});

export default store;
