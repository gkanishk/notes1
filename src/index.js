import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC6uSZFmo5zeQaGomfjI0zQ5lWY3z8WBD8",
    authDomain: "notes-56173.firebaseapp.com",
    databaseURL: "https://notes-56173.firebaseio.com",
    projectId: "notes-56173",
    storageBucket: "notes-56173.appspot.com",
    messagingSenderId: "335815437449",
    appId: "1:335815437449:web:7bb0ac868c9197dd7daa58",
    measurementId: "G-1R7GGSY6EY"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
