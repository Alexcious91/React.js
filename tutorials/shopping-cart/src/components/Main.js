import React from 'react'
import Product from './Product';

function Main(props) {
   const { products, onAdd, onRemove, cartItems } = props

   return (
      <div className='bg-secondary p-4 mr-1 col-lg-7 mx-3'>
         <h2 className='pt-4'>Products</h2>

         <div className='d-flex justify-content-between'>
            {products.map((product) => (
               <Product
                  key={product.id}
                  className='col-lg-4'
                  product={product}
                  item={cartItems.find(item => item.id === product.id)}
                  onAdd={onAdd}
                  onRemove={onRemove}
               ></Product>
            ))}
         </div>
      </div>
   )
}

export default Main;