import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import withCheckLogin from 'hoc/withCheckLogin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginDataActions from 'store/modules/loginData'

import {
  Menu,
  Home,
  Login,
  Log
} from 'pages';

class App extends Component {

  componentDidMount() {
    // this.props.handleCheckLogin()
  }
  
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
     </>
   )
 }
}

export default connect((state) => ({
}),
  (dispatch) => ({
    LoginDataActions : bindActionCreators(loginDataActions, dispatch)
  })
)
(withCheckLogin(App));