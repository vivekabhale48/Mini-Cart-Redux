import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}
const CartSlice = createSlice({

  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      //destructuring
      const  {id, name, price} = action.payload;
      const checkId = state.items.findIndex((ele) => ele.id === id);
      const productData = {
        id,
        name,
        price,
        quantity:1
      };
      if(checkId === -1) {
        state.items.push(productData);
      }
      else {
        state.items.forEach((ele) => {
          if(ele.id === id) {
            ele.quantity = ele.quantity + 1;
          }
        })
      }
    }
  }
})

export const {addItemToCart} = CartSlice.actions;
export const CartSliceReducers = CartSlice.reducer;