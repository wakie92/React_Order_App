import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI'
import * as loginDataActions from 'store/modules/loginData'
import Login from 'components/Login/Login';
import * as api from 'lib/api';
import axios from 'axios';
class LoginContainer extends Component {


  inputData = (e) => {
    const { LoginDataActions } = this.props;
    const { name, value} = e.target;
    LoginDataActions.changeLoginInfo({name,value});
  }
  
  handleEnterKey = (e) => {
    if(e.key === 'enter') {
      this.handleLogin();
    }
  }

  handleLogin = async () => {
    const { LoginDataActions, loginID, loginPassword } = this.props;
    // LoginDataActions.getUserId(loginID)
    const user  = await LoginDataActions.getUserId('admin')
                  .then((result) =>{
                    return result.data;
                  })
    if(user.id === 'admin' && user.password === 'admin') {
      console.log('ok')
      LoginDataActions.isLogined('true');
    }
  }
  render() {
    const { handleLogin , inputData} = this;
    const { loginID, loginPassword , isLogined }  = this.props;
    console.log(isLogined);
    return (
      <Login
        onLogin = { handleLogin }
        onInput = { inputData }
      />  
    );
  }
}

export default connect((state) => ({
  isLogined : state.loginData.get('isLogined'),
  loginID : state.loginData.getIn(['loginPage','id']),
  loginPassword : state.loginData.getIn(['loginPage','password'])
}),
  (dispatch) => ({
    LoginDataActions : bindActionCreators(loginDataActions,dispatch),
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch)
  })
)(LoginContainer);