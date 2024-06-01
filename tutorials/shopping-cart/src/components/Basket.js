import React from "react";
import { Button } from 'react-bootstrap'

function Basket(props) {
   const { cartItems, onAdd, onRemove } = props
   const itemsPrice = cartItems.reduce((amount, item) => {
      return amount + item.quantity * item.price
   }, 0)
   const taxPrice = itemsPrice * 0.14;
   const shippingPrice = itemsPrice > 2000 ? 0 : 50
   const totalPrice = itemsPrice + taxPrice + shippingPrice

   return (
      <div className="col-lg-4 mx-3 bg-secondary">
         <aside className="pt-2">
            <h2 className="fs-3">Cart Items</h2>
            <div>
               {cartItems.length === 0 &&
                  <div>Cart is empty</div>
               }
               {cartItems.map(item => (
                  <div key={item.id} className="row"></div>
               ))}
            </div>

            {cartItems.length !== 0 && (
               <>
                  <hr />
                  <div className="row">
                     <div className="col-6">Items Price</div>
                     <div className="col-6 text-end">R {itemsPrice.toFixed(2)}</div>
                  </div>
                  <div className="row">
                     <div className="col-6">Tax Price</div>
                     <div className="col-6 text-end">R {taxPrice.toFixed(2)}</div>
                  </div>
                  <div className="row">
                     <div className="col-6">Shipping Price</div>
                     <div className="col-6 text-end">R {shippingPrice.toFixed(2)}</div>
                  </div>
                  <div className="row">
                     <div className="col-6">
                        <strong>Total Price</strong>
                     </div>
                     <div className="col-6 text-end">
                        <strong>R {totalPrice.toFixed(2)}</strong>
                     </div>
                  </div>
                  <hr />
                  <div className="row">
                     <div className="col text-end">
                        <Button className="w-100" onClick={() => alert('Implement Checkout!')}>
                           Checkout
                        </Button>
                     </div>
                  </div>
               </>
            )}
         </aside>
      </div>
   )
}

export default Basket;
