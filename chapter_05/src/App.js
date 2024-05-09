import React, { Component } from 'react';
import JumbotronComponent from './Jumbotron';

class App extends Component {
	render() {
		return (
			<div>
				<JumbotronComponent>
					This is the new content
				</JumbotronComponent>
			</div>
		);
	}
}

export default App;
