import React, { Component } from 'react'

class GithubUser extends Component {
   render() {
      const { match } = this.props;
      const login = match && match.params ? match.params.login : 'Nothing';
      const id = match && match.params ? match.params.id : 'Nothing with id';

      return (
         <div>
            <h2>User Login: {login}</h2>
            <h1>User Id: {id}</h1>
         </div>
      )
   }
}

export default GithubUser;
