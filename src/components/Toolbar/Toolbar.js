import React from 'react';
import classes from './Toolbar.module.scss'
import Payment from 'react-icons/lib/md/payment'
import { NavLink } from 'react-router-dom';
const toolbar = (props) => {
  const sty = {
    textDecoration : 'none'
  }
  return(
    <header className = {classes.Toolbar}>
      <nav className  = {classes.Hamburger} onClick = {(e) => {e.stopPropagation(); props.openCategory()}}>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      <div className = {classes.Logo}>
        <NavLink exact to = '/' style = {sty}>Order machine</NavLink>
      </div>
      <div className = { classes.User}>
        {props.isLogined ?  
            <span> [{props.loginUser}] </span>
          : <span> [{props.unLoginUser}]</span>
        }
        <Payment className = {classes.Payment} onClick = {(e) => {e.stopPropagation(); props.openOrderListMobile()}}/>
      </div>
    </header>
  )
}

export default toolbar;