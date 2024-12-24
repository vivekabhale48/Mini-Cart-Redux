import {configureStore} from '@reduxjs/toolkit';
import { CartSliceReducers } from './slices/cartSlice';
import { ProductSliceReducers } from './slices/productSlice';

export const store = configureStore({
  reducer: {
    cart: CartSliceReducers,
    product: ProductSliceReducers,
  }

})