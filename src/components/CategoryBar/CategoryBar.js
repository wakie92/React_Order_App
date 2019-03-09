import React from 'react';
import classes from './CategoryBar.module.scss'
import { NavLink } from 'react-router-dom';
const categoryBar = (props) => {
  let attachedClasses = [classes.CategoryBar]
  if(props.toolbar === true) {
    attachedClasses = [classes.CategoryBar, classes.Open]
  } else if (props.toolbar === false) {
    attachedClasses = [classes.CategoryBar, classes.Close]
  }
  const activStyle = {
    backgroundColor : 'rgb(146, 130, 119)',
  }
  const sty = {
    textDecoration : 'none'
  }
  return (
    <nav className = {attachedClasses.join(' ')}>
      <div className = {classes.All}> <NavLink exact to = '/menu' style = {sty} activeStyle = {activStyle}> 모든 음식 </NavLink></div>
      <div className = {classes.Login}> <NavLink exact to ='/login' style = {sty} activeStyle = {activStyle}>로그인 </NavLink></div>
      <div className = {classes.CheckOrderHistory}> <NavLink exact to = '/log' style = {sty} activeStyle = {activStyle}>주문내역확인 </NavLink></div>
    </nav>
  )
}

export default categoryBar;