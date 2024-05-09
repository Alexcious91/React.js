import React, { Component } from 'react'
import Rating from './Rating'
// import Products from './Products';
import { Media } from 'react-bootstrap';


class Product extends Component {
   render() {
      // return product details
      return (
         <div>
            <Media>
               <img width={64} height={64} className='mr-3' src={this.props.data.imageUrl} alt='Random pic' />

               <Media.Body>
                  <h5>{this.props.data.productName}</h5>
                  {this.props.data.releasedDate}

                  <Rating
                     rating={this.props.data.rating}
                     numOfReviews={this.props.data.numOfReviews}
                  />

                  <p>{this.props.data.description}</p>
               </Media.Body>
            </Media>
         </div>
      )
   }
}

export default Product


/**
 * The component displays data recieved through pops
 * e.g this.props.data.propertyName
 */