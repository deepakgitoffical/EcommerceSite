import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem} from '../store/CartReducer';
import { addWishListItem } from '../store/WishListReducer';

const ProductCard = ({productId, title, rating, price, imageUrl }) => {
  // const cartCount = [count, setCount]= useState(0);
  // console.log(count, 'count val')
  
  // var a = {name: "deepak", empCode: 416};
  
    // const newArr= produce(a, (copyArr)=>{
    //   copyArr.empCode=400;
    // });
    // console.log(newArr, 'produce');

  const dispatch= useDispatch();

  return (
    <div className="product">
 
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={()=> dispatch(addCartItem({productId}))}>Add to Cart</button>
        <button onClick={()=> dispatch(addWishListItem({productId, title, rating, price, imageUrl}))}>WishList</button>
      </div>
    </div>
  )
}

export default ProductCard