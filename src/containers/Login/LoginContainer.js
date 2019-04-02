import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginDataActions from 'store/modules/loginData';
import * as formDataActions from 'store/modules/formData';
import * as menuDataUIActions from 'store/modules/menuDataUI';
import Login from 'components/Login/Login';
import Input  from 'components/UI/Input/Input'
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
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
    isSignUp: true,
    test : {}
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
    const { FormDataActions, loginAuthData } = this.props;
    console.log(loginAuthData);
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
      // const updatedAuthUser = {
      //   ...this.state.userAuthData,
      //   [controlUser] : {
      //     ...this.state.userAuthData[controlUser],
      //     value : e.target.value,
      //     valid : this.checkValidity(e.target.value, this.state.userAuthData[controlUser].validation),
      //     touched: true
      //   }
      // };
      FormDataActions.getLoginFormData(updatedAuthUser);
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
  
  createForm = () => {
    const { FormDataActions , loginAuthData,initialState}  = this.props;
    const { inputData } = this;
    const test = initialState;
    console.log(test);
    console.log(loginAuthData);
    const formElementsArr = [];
    // for (let key in userAuth ) {
    //   formElementsArr.push({
    //     id : key,
    //     config : userAuth[key]
    //   })
    // }
    // const form = formElementsArr.map(formElement => (
    //   <Input
    //     key = {formElement.id}
    //     elementType = {formElement.config.elementType}
    //     elementConfig = {formElement.config.elementConfig}
    //     value = {formElement.config.value}
    //     invalid = {!formElement.config.valid}
    //     shouldValidate={formElement.config.validation}
    //     touched = {formElement.config.touched}
    //     changed = {(e) => inputData(e, formElement.id)}
    //   />
    // ))
    // return form
  }

  componentDidMount() {
    this.createForm();
  }
  render() {
    const { handleLogin , inputData,  handleLogout , changeIsSignUp, handleEnterKey } = this;
    const { loginID , isLogined , os, loginAuthData, isSignUp2, FormDataActions}  = this.props;
    const { userAuthData , isSignUp } = this.state;
    const userAuth = loginAuthData.toJS();
    console.log('render [ LoginContainer ]')
    const formElementsArr = [];
    for (let key in userAuth ) {
      formElementsArr.push({
        id : key,
        config : userAuth[key]
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

    return (
      <Login
        onLogin = { handleLogin }
        onInput = { inputData }
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
  loginAuthData : state.formData.get('loginAuthData'),
  isSignUp2 : state.formData.get('test'),
  initialState : state.formData.get('initialState'),
}),
  (dispatch) => ({
    LoginDataActions : bindActionCreators(loginDataActions,dispatch),
    FormDataActions : bindActionCreators(formDataActions, dispatch),
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch),
  })
)(LoginContainer);