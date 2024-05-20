import React from 'react';
import './App.css';
import Products from './Products';

import 'bootstrap/dist/css/bootstrap.min.css'
import JumbotronComponent from './Jumbotron';

function App() {
  return (
    <div className="App">
        <JumbotronComponent>
          this is the jumbotron
        </JumbotronComponent>

        <Products />
    </div>
  );
}

export default App;
