import React, { Component } from 'react';


const withCheckLogin  = (WrappedComponent) => {
  return class LoginCheckingContorol extends Component {

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
        <div>
          
        </div>
      );
    }
  }
}
export default withCheckLogin;