import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
	render() {
		const isValid = true;

		return (
			<div>
				<h1>My react app.</h1>

				<Button variant='primary' disabled={!isValid}>Default</Button>
				<Rating rating={1} />
				<Rating rating={2} />
				<Rating rating={3} />
			</div>
		);
	}
}

export default App;
