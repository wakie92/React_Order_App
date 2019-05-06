import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  Menu,
  Home,
  Login,
  Log,
  Review
} from 'pages';

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
          <Route exact path = '/review' component = {Review} />
        </Switch>
      </div>
     </>
   )
 }
}

export default App;