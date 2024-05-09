import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
	products;
	constructor(props) {
		super(props);
		this.products = this.getProducts()
	}

	// method to get products data
	getProducts() {
		return []
	}
	
	render() {
		// Map over the products array/ create comp for each product
		const listProducts = this.products.map((product) =>
			<Product key={product.productName} productData={product}/> // 'data' refers to the whole product object
		)
		console.log(listProducts)

		// render the list of products
		return (
			<div>
				{listProducts.length > 0 &&
					<ul>{listProducts}</ul>
				} 
				{listProducts.length === 0 &&
					<ul>No products to display</ul>					
				}
			</div>
		);
	}
}

export default Products