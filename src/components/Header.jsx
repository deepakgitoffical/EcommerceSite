import React, { useEffect } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { errorReducer, preloaderReducer, updateProductList } from '../store/ProductReducer';
import { loadCartItems } from '../store/CartReducer';
// import { productsList } from '../store/productAPI';

const Header = () => {
  const cartData= useSelector((state)=> {
    return state.cartItems;
  })
  const wishListData= useSelector((state)=> {
    return state.wishList;
  })

  const dispatch = useDispatch();
    // -----------fetch-product-api-----------
  useEffect(()=>{
    dispatch(preloaderReducer()) 

    fetch('https://fakestoreapi.com/products').then(res => res.json())
      .then(data => {
        dispatch(updateProductList(data))
      }).catch(() => {
        dispatch(errorReducer())
      })
      setTimeout(()=>{
        fetch('https://fakestoreapi.com/carts/6').then(res => res.json())
        .then(data => {
          dispatch(loadCartItems(data)) 
        })
      },1000)
  }, [])

  return (
    <header className=' bg-pink-600 w-full'>
      <div className="flex flex-row w-full">
        <div className='p-4 basis-1/5'>
         <h2 className='text-white text-lg'>SHOPING SITE</h2>
        </div>
        <div className='basis-3/5 flex justify-center navigation-bar'>
          <ul className='flex justify-center'>
            <li className='mr-4 flex items-center '><NavLink to="/">Home</NavLink></li>
            <li className='mr-4 flex items-center'><NavLink to="mycartpage">My Cart</NavLink></li> 
            <li className='flex items-center'><NavLink to="mywishlist">My Wishlist</NavLink></li> 
          </ul> 
        </div>
        <div className='basis-1/5 flex justify-center'> 
          <ul className='flex justify-center p-3'>
            <li className='mr-5 cart-icon'> <span className=' count-item' >
            {
              cartData.reduce( (accumulator, current)=>accumulator + current.quantity,0)
            }
              </span>
              <NavLink to="mycartpage"><LuShoppingCart className='text-white' /></NavLink>
              </li>
            <li className='cart-icon'><span className=' count-item'>
              
            {
              wishListData.reduce((accumulator, current)=>accumulator + current.quantity,0)
            }
              </span><NavLink to="mywishlist"><FaHeart className='text-white'/></NavLink>
              </li>
          </ul> 
        </div>
      </div>
    </header>
  )
}

export default Header