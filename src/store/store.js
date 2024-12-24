import {configureStore} from '@reduxjs/toolkit';
import { CartSliceReducers } from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: CartSliceReducers
  }

})