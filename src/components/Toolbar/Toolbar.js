import React from 'react';
import classes from './Toolbar.module.scss'
import Payment from 'react-icons/lib/md/payment'
import { NavLink } from 'react-router-dom';
const toolbar = ({loginUser, openCategory, openOrderListMobile}) => {
  const sty = {
    textDecoration : 'none'
  }
  let isLogin =  localStorage.getItem('emailId') ? `[${localStorage.getItem('emailId')}]` : null;
  return(
    <header className = {classes.Toolbar}>
      <nav className  = {classes.Hamburger} onClick = {(e) => {e.stopPropagation(); openCategory()}}>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      <div className = {classes.Logo}>
        <NavLink exact to = '/' style = {sty}>Order machine</NavLink>
      </div>
      <div className = { classes.User}>
            <span> {isLogin} </span>
        <Payment className = {classes.Payment} onClick = {(e) => {e.stopPropagation(); openOrderListMobile()}}/>
      </div>
    </header>
  )
}

export default toolbar;