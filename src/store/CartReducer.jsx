import { createSelector, createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) => state.findIndex((item) =>
  item.productId === action.payload.productId
);

const slice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {

    loadCartItems(state, action){
    return action.payload.products
    },

    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      // console.log(action, 'add action')
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      }
      else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    increaseCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    decreaseCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity < 1) {
        state.splice(existingItemIndex, 1);
      }
    }
  },
})

// -----------cart-selector-state-fun----------
 export const selectCartState= ({cartItems, Products}) => {
  return cartItems.map(({ productId, quantity }) => {
    const SingleItem = Products.list.find((item) =>
     item.id === productId)
    return {...SingleItem, quantity}
  })
}
//  ----------momized-the-cart-state---------

export const getCartProduct = createSelector(selectCartState, (cartState)=> cartState)

export const { addCartItem, removeCartItem, increaseCartItem, decreaseCartItem, loadCartItems } = slice.actions;
// console.log(addCartItem())
export default slice.reducer