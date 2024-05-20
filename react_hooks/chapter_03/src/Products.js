import React from 'react'

function Products() {
   const products = ["Learning React", "Pro React", "Beginning React"];
   const listProducts = products.map(product => (
      <li key={product.toString()}>{product}</li>
   ))

   return (
      <div>
         <h3>Products</h3>
         <ul>{listProducts}</ul>
      </div>
   )
}

export default Products