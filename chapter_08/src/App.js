import React, { Component } from 'react';
import Github from './Github';
import GithubUser from './GithubUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

class Header extends Component {
	render() {
		return (
			<div>
				<Router>
					<Navbar bg='light' expand="lg">
						<Navbar.Brand href='/'>React bootstrap</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Nav className='mr-auto' id="basic-navbar-nav">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/github">Github</Nav.Link>
						</Nav>
					</Navbar>

					<Routes>
						<Route path='/github' element={<Github />} />
						<Route path='/' element={<Home />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Router>
			</div>
		)
	}
}

class Home extends Component {
	render() {
		return <div>Home</div>
	}
}

class NotFound extends Component {
	render() {
		return <div>Not Found</div>
	}
}

export { Header, App }