import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5X7GnUgDSc1h3rXeWdBqkhmLwtUvMXrM",
  authDomain: "react-crud-app-e3068.firebaseapp.com",
  projectId: "react-crud-app-e3068",
  storageBucket: "react-crud-app-e3068.appspot.com",
  messagingSenderId: "741763485746",
  appId: "1:741763485746:web:e41bcd09c6fee46aff2c2b",
  measurementId: "G-FCS36ZL73X"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
