import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI'
import * as loginDataActions from 'store/modules/loginData'
import Login from 'components/Login/Login';
import Input  from 'components/UI/Input/Input'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class LoginContainer extends Component {
  //왜 state를 썼는지 설명할 수 있어야함.
  state = {
    userAuthData: {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Mail Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    },
    isSignUp: true
}

checkValidity ( value, rules ) {
  //유효성검사
  try {
    let isValid = true;
    
    if ( !rules ) {
        return true;
    }
  
    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }
    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }
  
    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }
    return isValid;
  } catch(err) {
    console.log(err);
  }
}
  inputData = (e, controlUser) => {
    try {
      const updatedAuthUser = {
        ...this.state.userAuthData,
        [controlUser] : {
          ...this.state.userAuthData[controlUser],
          value : e.target.value,
          valid : this.checkValidity(e.target.value, this.state.userAuthData[controlUser].validation),
          touched: true
        }
      };
      this.setState({userAuthData : updatedAuthUser});
    } catch(err) {
      console.log(err);
    }
  }
  
  handleEnterKey = (e) => {
    if(e.key === 'Enter') {
      this.handleLogin();
    }
  }
  handleLogout = () => {
    const { LoginDataActions }  = this.props;
    const { userAuthData } = this.state;
    let logoutUser = null;
    for ( let key in userAuthData) {
        logoutUser = {
          ...logoutUser,
          [key] : {
            ...userAuthData[key],
            value : '',
            valid : false,
            touched: false
          }
        }
      }
    this.setState({ userAuthData : logoutUser })
    LoginDataActions.logOut();
    LoginDataActions.getUnLoginUser();
  }

  changeIsSignUp = () => {
    this.setState(prevState => {
      return { isSignUp : !prevState.isSignUp}
    });
  }

  handleLogin = async (e) => {
    const { LoginDataActions } = this.props;
    const { userAuthData, isSignUp } = this.state;
    try {
      e.preventDefault();
      const authData = {
        email :userAuthData.email.value,
        password : userAuthData.password.value,
        returnSecureToken : true,
      }
      let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAVbIamQ34eNUx7XuoQvKq8CSfXJku30qU'
      if(!isSignUp) {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAVbIamQ34eNUx7XuoQvKq8CSfXJku30qU'
      }
      await axios.post(url,authData).then(res => {
        LoginDataActions.getUserId(res.data);
      }).catch(err => {
        console.log(err);
      })
    } catch(err) {
      console.log(err);
    }
    
  }
  

  render() {
    const { handleLogin , inputData,  handleLogout , changeIsSignUp, handleEnterKey } = this;
    const { loginID , isLogined , error}  = this.props;
    const { userAuthData , isSignUp } = this.state;

    console.log('render [ LoginContainer ]')
    console.log(this.state)
    const formElementsArr = [];
    for (let key in userAuthData ) {
      formElementsArr.push({
        id : key,
        config : userAuthData[key]
      })
    }
    const form = formElementsArr.map(formElement => (
      <Input
        key = {formElement.id}
        elementType = {formElement.config.elementType}
        elementConfig = {formElement.config.elementConfig}
        value = {formElement.config.value}
        invalid = {!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched = {formElement.config.touched}
        changed = {(e) => inputData(e, formElement.id)}
      />
    ))
    let errorMessage = null;
    if (error) {
      errorMessage = (
          <p>{this.props.error.message}</p>
      );
  }

  let authRedirect = null;
  if (!isLogined) {
      authRedirect = <Redirect to='/'/>
  }
    return (
      <Login
        onLogin = { handleLogin }
        onInput = { inputData }
        authRedirect = {authRedirect}
        errMsg = {errorMessage}
        isLogined = { isLogined }
        loginID = {loginID}
        onLogout = {handleLogout}
        onKeyPress = {handleEnterKey}
        form = {form}
        isSignup = {isSignUp}
        onChangeMode = {changeIsSignUp}
      />  
    );
  }
}

export default connect((state) => ({
  isLogined : state.loginData.get('isLogined'),
  loginID : state.loginData.getIn(['loginUser','userId']),
  error : state.loginData.getIn(['loginUser','error']),
}),
  (dispatch) => ({
    LoginDataActions : bindActionCreators(loginDataActions,dispatch),
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch)
  })
)(LoginContainer);