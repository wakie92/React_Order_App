import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  Menu,
  Home,
  Login,
  Log
} from 'pages';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path = '/menu' component = {Menu} />
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/log' component = {Log} />
      </Switch>
    </div>
  )
}

export default App;