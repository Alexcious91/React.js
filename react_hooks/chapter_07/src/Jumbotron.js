import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

function JumbotronComponent() {
   return (
      <Jumbotron>
         <h1>Welcome Alexioux</h1>
         <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> 
         <p><Button variant='danger'>Learn more</Button></p>
      </Jumbotron>
   )
}

export default JumbotronComponent