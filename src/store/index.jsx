import { configureStore, Tuple } from '@reduxjs/toolkit'
import cartReducer from "./CartReducer";
import wishListReducer from "./WishListReducer";
import productReducer from "./ProductReducer";
import { logger } from './middlewhare/Logger';

//  function logger(store){
//     return function(next){
//         return function(action){
//             console.log(store)
//             console.log(next)
//             console.log(action)
//         }
//     }
//  }



export const store = configureStore({
    reducer: {
        cartItems: cartReducer,
        wishList: wishListReducer,
        Products: productReducer
    },
    middleware: (getDefalultMiddleware)=> getDefalultMiddleware().concat(logger)
})




