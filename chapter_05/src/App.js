import React, { Component } from 'react';
import Products from './Products';
import JumbotronComponent from './Jumbotron';

class App extends Component {
	render() {
		return (
			<div>
				{/* <Products /> */}
				<JumbotronComponent>
					this is the content
				</JumbotronComponent>
			</div>
		);
	}
}

export default App;
