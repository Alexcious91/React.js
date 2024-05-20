import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

function JumbotronComponent(props) {
   return (
      <Jumbotron className='p-5 bg-light'>
         <h1>Welcome Alexioux</h1>
         <p>{props.children}</p>
         <p><Button variant='danger'>Learn more</Button></p>
      </Jumbotron>
   )
}

export default JumbotronComponent