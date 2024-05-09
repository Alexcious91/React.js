import React, { Component } from "react";
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {
	constructor(props) {
		super(props);
		/**
		 * Set the state according to the prop set in main app
		 * - prop is like setting a className
		 * Set state according to the number passed 
		 * in props.rating
		 */
		this.state = { rating: this.props.rating };
	}

	handleClick(ratingValue) {
		this.setState({ rating: ratingValue })
	}

	render() {
		return (
			<>
				<h1>Rating: {this.state.rating}</h1>

				{this.state.rating >= 1 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 1)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />
				)}
				{this.state.rating >= 2 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 2)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 2)}/>
				)}
			</>
		)
	}
}

export default Rating