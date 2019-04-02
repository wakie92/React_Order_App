import React from 'react';
import classes from './Login.module.scss'
import Button from 'components/UI/Button/Button'
const login = ({onLogin , onInput , onKeyPress, isSignup, isLogined, onChangeMode, form, loginID, onLogout }) => {
  return (
    <div className = {classes.LoginWrapper}>
       {
         !isLogined ?
      <div className = {classes.LoginBox}>
        <div className = {classes.LoginAccount}>
          <form  className = {classes.FormWrapper} onSubmit = {onLogin}>
            {form}
            <Button className = {classes.LoginAccess}  btnType = 'Login'>로그인</Button>
          </form>
          <Button 
                    clicked={onChangeMode}
                    btnType="Danger">SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
        </div>
      </div>
        :
        <div  className = {classes.LoginBox}>
          <span className  = {classes.WelcomeMessage}>
            [{loginID}]님 로그인 되셨습니다.
          </span>
          <Button className = {classes.Logout} clicked = {onLogout} btnType = 'Logout'>로그아웃</Button>
        </div>
      }
    </div>
  )
}

export default login;