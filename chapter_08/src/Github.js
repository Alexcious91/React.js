import React, { Component } from 'react';
import axios from 'axios';
// import { Switch } from 'react'
import ReactLoading from 'react-loading';
import { Media, Form, Button } from 'react-bootstrap';

class Github extends Component {
   constructor() {
      super();
      this.state = {
         data: [],
         searchTerm: '',
         isLoading: false
      };
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
      this.setState({
          isLoading: true
      })
      this.getGithubData(this.state.searchTerm);
  }

  handleChange(event) {
      this.setState({ searchTerm: event.target.value });
  }

   getGithubData(_searchTerm) {
      axios.get("https://api.github.com/search/users?q=" + _searchTerm)
         .then((res) => {
            console.log(res.data.items);
            this.setState({
               isLoading: false,
               data: res.data.items // JSON format
            })
         });
   }

   render() {
      const listUsers = this.state.data.map(user =>
         <Media key={user.id}>
            <a href={user.html_url}>
               <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src={user.avatar_url}
                  alt="Generic placeholder"
               />
            </a>

            <Media.Body>
               <h5>Login : {user.login}</h5>
               <p>Id: {user.id}</p>
            </Media.Body>
         </Media>
      )

      return (
         <div>
            <Form inline onSubmit={this.handleSubmit}>
               <Form.Group controlId="formInlineName">
                  <Form.Control
                     type="text"
                     value={this.state.searchTerm}
                     placeholder="Enter Search Term"
                     onChange={this.handleChange}
                  />

               </Form.Group>

               {' '}

               <Button type="submit">
                  Search
               </Button>
            </Form>

            <h3>GitHub Users Results</h3>
            {this.state.isLoading &&
               <ReactLoading type="spinningBubbles" color="#444" />
            }
            {listUsers}
         </div>
      )
   }
}

export default Github