import React, { useState } from "react";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";

// data
import data from "./data";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const { products } = data

	const onAdd = (product) => {
		const exist = cartItems.find(item => item.id === product.id)
		if (exist) {
			const newCartItems = cartItems.map(item => item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item)
			setCartItems(newCartItems)
		} else {
			const newCartItems = [...cartItems, { ...product, quantity: 1 }]
			setCartItems(newCartItems)
		}
	}

	const onRemove = (product) => {
		const exist = cartItems.find(item => item.id === product.id);

		if (exist.quantity === 1) {
			const newCartItems = cartItems.filter(item => item.id !== product.id)
			setCartItems(newCartItems);
		} else {
			const newCartItems = cartItems.map(item => {
				return item.id === product.id ? { ...exist, quantity: exist.quantity - 1} : item
			})
			setCartItems(newCartItems)
		}
	}
	return (
		<div>
			<Header countCartItems={cartItems.length} />
			<div className="row mx-1 justify-content-between">
				<Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />
				<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
			</div>
		</div>
	)
}

export default App;