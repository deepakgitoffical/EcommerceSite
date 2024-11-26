import { createSlice } from '@reduxjs/toolkit'
// import { productsList } from './productAPI'


// export default function productReducer(state= productsList, action){
//     return state
// }

const slice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        list:[],
        errorState: '' 
    },
    reducers: {
        preloaderReducer(state){
            state.loading= true
        },
        updateProductList(state, action){
            state.loading= false
            state.list= action.payload;
        },
        errorReducer(state, action){
            state.loading= false
            state.errorState = action.payload || 'Data Not Found'
        }
    }
});
export const selectAllProducts = (state) => state.Products.list
export const selectIsLoading = (state) => state.Products.loading
export const selectErrorState = (state) => state.Products.errorState
export const{updateProductList, errorReducer, preloaderReducer}=slice.actions;
export default slice.reducer;
