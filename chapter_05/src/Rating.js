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
		 * 
		 * properties: {
		 * 	1. rating
		 * }
		 */
		this.state = { rating: this.props.rating };
	}

	handleClick(ratingValue) {
		this.setState({ rating: ratingValue })
	}

	render() {
		return (
			<div style={styles.starStyle}>
				<h1>Rating: {this.state.rating}</h1>

				{this.state.rating >= 1 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 1)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />
				)}
				{this.state.rating >= 2 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 2)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 2)} />
				)}
				{this.state.rating >= 3 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 3)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
				)}
				{this.state.rating >= 4 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 3)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
				)}
				{this.state.rating >= 5 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 3)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
				)}
			</div>
		)
	}
}

export default Rating

const styles = {
	starStyle: {
		color: "orange"
	}
}
