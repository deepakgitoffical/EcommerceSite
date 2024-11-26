import React from 'react'
import { useSelector } from "react-redux"
import ProductCard from './ProductCard';
import { selectAllProducts, selectErrorState, selectIsLoading } from '../store/ProductReducer';


const Home = () => {
  // const a = useSelector((state)=> state)
  // console.log(a);
  const productsList = useSelector(selectAllProducts);
  const isLoading = useSelector(selectIsLoading);
  const errState = useSelector(selectErrorState);
  
  return isLoading ? (<h1 className='grid h-screen text-center text-green-700 items-center'>loading...</h1>) : errState 
    ? (<h1>{errState}</h1>): (
    <div>
      <div className="app-container">
        <h1 className="ext-3xl text-center pt-5">Product List</h1>
        <div className="products-container">
          {productsList.map(({ id, title, rating, price, image }) => (
            // <h2>{title}</h2>
            <ProductCard
              key={id}
              productId={id}
              title={title}
              rating={rating.rate}
              price={price}
              imageUrl={image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home