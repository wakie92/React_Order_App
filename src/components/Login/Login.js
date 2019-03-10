import React from 'react';
import classes from './Login.module.scss'
import Button from 'components/UI/Button/Button'

const login = ({onLogin , onInput , onKeyPress}) => {
  return (
    <div className = {classes.LoginWrapper}>
      <div className = {classes.LoginBox}>
        <div className = {classes.LoginAccount}>
          <div className  = {classes.LoginId}>
            <span>아이디</span>
            <input 
              type = 'text' 
              onChange = {onInput}
              autoFocus
              onKeyPress = {onKeyPress}
              placeholder = '아이디를 입력해주세요'
              name = 'id'>
            </input>
          </div>
          <div className  = {classes.LoginPassword}>
            <span>패스워드</span>
            <input 
              type = 'password' 
              onChange = {onInput} 
              onKeyPress = {onKeyPress}
              placeholder = '패스워드를 입력해주세요'
              name = 'password'>
            </input>
          </div>
        </div>
        <Button className = {classes.LoginAccess} clicked = {onLogin} btnType = 'Login'>로그인</Button>
      </div>
    </div>
  )
}

export default login;