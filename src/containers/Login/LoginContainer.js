import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuDataUIActions from 'store/modules/menuDataUI'
import * as loginDataActions from 'store/modules/loginData'
import Login from 'components/Login/Login';
import Input  from 'components/UI/Input/Input'
class LoginContainer extends Component {
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

  if ( rules.maxLength ) {
      isValid = value.length <= rules.maxLength && isValid
  }

  if ( rules.isEmail ) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test( value ) && isValid
  }

  if ( rules.isNumeric ) {
      const pattern = /^\d+$/;
      isValid = pattern.test( value ) && isValid
  }

  return isValid;
}
  inputData = (e, controlUser) => {
    console.log(this.state);
    const updatedAuthUser = {
      ...this.state.userAuthData,
      [controlUser] : {
        ...this.state.userAuthData[controlUser],
        value : e.target.value,
        valid : this.checkValidity(e.target.value, this.state.userAuthData),
        touched: true
      }
    };
    this.setState({userAuthData : updatedAuthUser});
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

  changeIsSignUp = () => {
    this.setState(prevState => {
      return { isSignUp : !prevState.isSignUp}
    });
  }

  handleLogin = async (e) => {
    const { LoginDataActions } = this.props;
    const { userAuthData, isSignUp } = this.state;
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

    LoginDataActions.getUserId(url, authData);
    
    }
  
  // handleLogin = async () => {
  //   const { LoginDataActions } = this.props;
  //   const { id, password }  = this.state
  //   if( !id || !password ) {
  //     //비밀번호나 아이디가 입력되지 않았을때
  //     alert('로그인 정보를 정확히 입력해주세요')
  //   } else if( id && password) {
  //     //비밀번호와 아이디가 모두 입력이 되었을때
  //     const user  = await LoginDataActions.getUserId(id)
  //                   .then((result) =>{
  //                     console.log(result);
  //                     return result.data;
  //                   }).catch(err => {
  //                     console.log(err);
  //                     return err;
  //                   })
  //     if(user && user.id === id && user.password === password) {
  //       LoginDataActions.isLogined(true);
  //       LoginDataActions.userId(user.id);
  //       localStorage.userId = id;
  //     }else {
  //       alert('아이디와 비밀번호가 일치하지 않습니다. 다시한번 확인해주세요');
  //     }
  //   }
  // }
  render() {
    const { handleLogin , inputData,  handleLogout , changeIsSignUp, handleEnterKey} = this;
    const { loginID , isLogined,}  = this.props;
    const { userAuthData , isSignUp} = this.state;

    console.log('render [ LoginContainer ]')

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
        invalid = {!formElement.config.validation}
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
  loginID : state.loginData.getIn(['loginUser','id']),
}),
  (dispatch) => ({
    LoginDataActions : bindActionCreators(loginDataActions,dispatch),
    MenuDataUIActions : bindActionCreators(menuDataUIActions, dispatch)
  })
)(LoginContainer);