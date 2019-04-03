import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  Menu,
  Home,
  Login,
  Log
} from 'pages';
import Footer from 'components/UI/Footer/Footer';

class App extends Component {

 render() {

   return (
     <>
      <div>
        <Switch>
          <Route exact path = '/menu' component = {Menu} />
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/log' component = {Log} />
        </Switch>
      </div>
      <Footer/>
     </>
   )
 }
}

export default App;