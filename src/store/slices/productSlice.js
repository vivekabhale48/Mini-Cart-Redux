import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//createAsyncThunk take a name of the service as string and one async function which returns a promise as an Argument.
//The callback function which returns a promise takes two arguments first is the argument passed by calling a funtion and another is the error callback.

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok) {
                throw new Error('Failed to fetch the products')
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    apiItems: [],
    loading: false,
    error: null
}

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //This is done same as then catch
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            //action.payload will receive the whole array of objects or products from the api above, which returns a response.json()
            state.apiItems = action.payload;
            state.loading = false;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const ProductSliceReducers = ProductSlice.reducer;