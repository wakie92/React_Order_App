import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext }  from './hoc/Firebase';
ReactDOM.render(
  <FirebaseContext.Provider value = {new Firebase()}>
    <Root /> 
  </FirebaseContext.Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
