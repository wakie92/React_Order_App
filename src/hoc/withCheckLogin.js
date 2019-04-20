import React, { Component } from 'react';


const withCheckLogin  = (WrappedComponent) => {
  return class LoginCheckingContorol extends Component {

    handleCheckLogin = () => {
      const { LoginDataActions   } = this.props;
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
      } else {
        const isLogined = false
        LoginDataActions.isLogined(isLogined)
      }
    }

    exprirationDateOver = () => {
      const { LoginDataActions   } = this.props;
      console.log(localStorage.getItem('expirationDate'))
    }
    render() {
      const {handleCheckLogin} = this;
      return (
        <WrappedComponent 
            {...this.props} 
            handleCheckLogin = {handleCheckLogin}
          />
      );
    }
  }
}
export default withCheckLogin;