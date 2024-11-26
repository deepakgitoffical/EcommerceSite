import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux';
import { getCartProduct } from '../store/CartReducer';

const MyCartPage = () => {
  const cartData = useSelector(getCartProduct);
  // console.log(cartData)

  return (
    <div className="cart-container mt-5">
      <h2 className='text-lg text-pink-600'>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartData.map(
          ({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          )
        )}

        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div>
            <span>quantity</span>
            {
              cartData.reduce(
                (accumulator, current) => {
                  return accumulator + current.quantity
                }, 0)
            }
          </div>

          <div className="total">
            <span>Total:</span>
            {
              cartData.reduce(
                (accumulator, current) => {
                  return accumulator + (current.quantity * current.price)
                }, 0)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyCartPage