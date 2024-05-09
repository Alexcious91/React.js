import React, { Component } from 'react';
import Rating from './Rating';
import Products from './Products';

class App extends Component {
	render() {
		// const isValid = true;

		return (
			<div>
				<h1>My react app.</h1>
				{/* <Rating rating={1} />
				<Rating rating={2} />
				<Rating rating={3} /> */}

				<Products />
			</div>
		);
	}
}

export default App;
