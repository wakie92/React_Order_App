import React, { Component } from 'react';

const withCheckLogin  = (WrappedComponent) => {
  return class LoginCheckingContorol extends Component {

    handleCheckLogin = () => {
      const { LoginDataActions   } = this.props;
      let LoginedUser = localStorage.getItem('emailId');
      if(LoginedUser) {
        const userInfo = {
          userId : LoginedUser,
          idToken : localStorage.getItem('token'),
          isLogined : true
        }
        LoginDataActions.checkLogin(userInfo);
      } else {
        const isLogined = false
        LoginDataActions.isLogined(isLogined)
      }
    }

    exprirationDateOver = () => {
      const { LoginDataActions } = this.props;
      const exDateInfo = localStorage.getItem('expirationTime')
      let currFullTimeInfo = new Date().getTime()
      if(exDateInfo <= currFullTimeInfo) {
        LoginDataActions.logOut();
        LoginDataActions.getUnLoginUser();
      }
       
    }
    componentDidMount() {
      this.exprirationDateOver();
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