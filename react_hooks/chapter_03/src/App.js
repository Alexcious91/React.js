import React from 'react';
import './App.css';
import Products from './Products';
import { Button } from 'react-bootstrap'
import Rating from './Rating'

function App() {
  const isValid = true

  return (
    <div className="App">
      <h1>Learn react</h1>

      <Button variant='primary' disabled={!isValid}>Button</Button>

      <Rating rating={1} />
      <Rating rating={2} />
      <Rating rating={3} />
      <Rating rating={4} />
      <Rating rating={5} />
    </div>
  );
}

export default App;
