import { createSlice } from "@reduxjs/toolkit";

// ----action-creater-----
// const WISHLIST_ADD_ITEM= 'wishlist/add';
// const WISHLIST_REMOVE_ITEM= 'wishlist/remove';

// // ----action-type----

// export function addWishListItem(productData){
//   return { type: WISHLIST_ADD_ITEM, payload: productData}
// }

// export function removeWishListItem(productId){
  
//   return { type: WISHLIST_REMOVE_ITEM, payload: productId}
//   // console.log(productId, 'wishlist reducer')
// }
// -------------wishList-Reducer-Method-------------
//  function wishListReducer(state=[], action){
//     switch (action.type) { 
//         case WISHLIST_ADD_ITEM: 
//         let existingItem = state.find((item)=> item.productId === action.payload.productId);

//         if(existingItem){
//           return state.map((item)=>{
//             if(item.productId=== existingItem.productId){
//               return {...item, quantity: item.quantity+1}
//             } 
//               return item; 
//           })
//         }
//         return [...state, {...action.payload, quantity: 1}]
//         case WISHLIST_REMOVE_ITEM:
//           return state.filter((removeEle) => {
//               return removeEle.productId !== action.payload.productId;
//             })
//         default: return state;
//       }
// }

const findItemIndex = (state, action) => state.findIndex((item) =>
  item.productId === action.payload.productId
);
const slice= createSlice({
  name:'wishlist',
  initialState: [],
  reducers:{
    addWishListItem(state, action){
      console.log(state,'wishlist state')
      console.log(action,'wishlist action')
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        // state[existingItemIndex].quantity += 1;
        alert('this item already added in WishList')
      }
      else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeWishListItem(state, action){
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    }
  }
});

export const{addWishListItem, removeWishListItem}=slice.actions
export default slice.reducer