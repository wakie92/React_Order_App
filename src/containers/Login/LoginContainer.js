import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI'
import * as loginDataActions from 'store/modules/loginData'
import Login from 'components/Login/Login';
class LoginContainer extends Component {
  state = {
    id : '',
    password : ''
  }
  inputData = (e) => {
    const { name, value} = e.target;
    console.log(this.state);
    name === 'id' ? this.setState({id : value}) : this.setState({password : value})
  }
  
  handleEnterKey = (e) => {
    if(e.key === 'Enter') {
      this.handleLogin();
    }
  }
  handleLogout = () => {
    const { LoginDataActions }  = this.props;
    LoginDataActions.initialState();
  }
  handleLogin = async () => {
    const { LoginDataActions } = this.props;
    const { id, password }  = this.state
    if( !id || !password ) {
      //비밀번호나 아이디가 입력되지 않았을때
      alert('로그인 정보를 정확히 입력해주세요')
    } else if( id && password) {
      //비밀번호와 아이디가 모두 입력이 되었을때
      const user  = await LoginDataActions.getUserId(id)
                    .then((result) =>{
                      return result.data;
                    })
      if(user && user.id === id && user.password === password) {
        LoginDataActions.isLogined(true);
        LoginDataActions.userId(user.id);
        LoginDataActions.getUnLoginUser('');
        localStorage.userId = id;
      }else {
        alert('아이디와 비밀번호가 일치하지 않습니다. 다시한번 확인해주세요');
      }
    }
  }
  render() {
    const { handleLogin , inputData} = this;
    const { loginID , isLogined, handleLogout }  = this.props;
    return (
      <Login
        onLogin = { handleLogin }
        onInput = { inputData }
        isLogined = { isLogined }
        loginID = {loginID}
        onLogout = {handleLogout}
      />  
    );
  }
}

export default connect((state) => ({
  isLogined : state.loginData.get('isLogined'),
  loginID : state.loginData.getIn(['loginUser','id']),
}),
  (dispatch) => ({
    LoginDataActions : bindActionCreators(loginDataActions,dispatch),
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch)
  })
)(LoginContainer);