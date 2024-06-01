import { Button, Card } from "react-bootstrap";
import React from "react";

function Product(props) {
   const {item, product, onAdd, onRemove } = props;

   return (
      <Card className="p-2">
         <img
            // className="img-thumbnail rounded mx-auto d-block" 
            src={product.image}
            height={200}
            width={200}
            alt={product.name}
         /> 
         <h3>{product.name}</h3>

         <div>R {product.price}</div>

         <div>
            {item ? (
               <div>
                  <Button variant="secondary" onClick={() => onRemove(product)}>-</Button>
                  <span className="px-2">{item.quantity}</span>
                  <Button onClick={() => onAdd(product)}>+</Button>

               </div>
            ) : (
            <Button onClick={() => onAdd(product)}>Add to cart</Button>
            )}
         </div>
      </Card>
   )
}

export default Product