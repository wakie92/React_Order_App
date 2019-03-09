import React from 'react';
import classes from './Login.module.scss'
import Button from 'components/UI/Button/Button'

const login = () => {
  return (
    <div className = {classes.LoginWrapper}>
      <div className = {classes.LoginBox}>
        <div className = {classes.LoginAccount}>
          <div className  = {classes.LoginId}>
            <span>아이디</span>
            <input type = 'text'></input>
          </div>
          <div className  = {classes.LoginPassword}>
            <span>패스워드</span>
            <input type = 'password'></input>
          </div>
        </div>
        <Button className = {classes.LoginAccess} btnType = 'Login'>로그인</Button>
      </div>
    </div>
  )
}

export default login;