import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import cartReducer from './reducer'
import { Provider } from 'react-redux'
import App from './App';

// const destination = document.querySelector("#container");

const store = createStore(cartReducer);

const root = ReactDOM.createRoot(document.querySelector("#container"))

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // destination
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
