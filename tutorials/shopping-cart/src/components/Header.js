import React from 'react'
import { Button } from 'react-bootstrap';

function Header(props) {
   const { countCartItems } = props
   return (
      <div className='bg-secondary m-2 py-4 px-4 d-flex align-items-center justify-content-between'>
            <h2 className='fs-4'>Simple Shopping Cart</h2>
         <div className='d-flex align-items-center'>
            <a href='/' className='px-1 text-black'>Cart
               {countCartItems ? (
                  <Button variant="danger" className='badge'>{countCartItems}</Button>
               ) : (
                  ''
               )}
            </a>
            <a href='/' className='px-1 text-black'>Sign in</a>
         </div>
      </div>
   )
}

export default Header;