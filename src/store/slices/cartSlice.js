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
      const  {id, title, description, image, price} = action.payload;
      const checkId = state.items.findIndex((ele) => ele.id === id);
      const productData = {
        id,
        name: title,
        description,
        image,
        price,
        quantity:1
      };
      if(checkId === -1) {
        state.items.push(productData);
      }
      else {
        state.items.forEach((ele) => {
          if(ele.id === id) {
            if(action?.meta?.type === 'increment') {
              ele.quantity = ele.quantity + 1;
            }
            else {
              ele.quantity -= 1;
            }
          }
        })
      }
      console.log(state.items);
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload.id;
      let newArray = state.items.filter((product) => product.id !== id);
      console.log(newArray);
      
    }
  }
})

export const {addItemToCart, removeItemFromCart} = CartSlice.actions;
export const CartSliceReducers = CartSlice.reducer;