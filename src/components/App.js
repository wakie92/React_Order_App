import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
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

  handleCheckLogin = () => {
    const { OrderHistoryDataActions,LoginDataActions, isLogined   } = this.props;
    console.log(localStorage.getItem('emailId'));
    let LoginedUser = localStorage.getItem('emailId');
    if(LoginedUser) {
      const userInfo = {
        userId : localStorage.getItem('userId'),
        idToken : localStorage.getItem('token'),
        emailId :LoginedUser,
        isLogined : true
      }
      LoginDataActions.checkLogin(userInfo);
    }
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

export default App;