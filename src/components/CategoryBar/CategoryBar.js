import React from 'react';
import classes from './CategoryBar.module.scss'
import { NavLink } from 'react-router-dom';
const categoryBar = ({toolbar, onPreload, }) => {
  let attachedClasses = [classes.CategoryBar]
  if(toolbar === true) {
    attachedClasses = [classes.CategoryBar, classes.Open]
  } else if (toolbar === false) {
    attachedClasses = [classes.CategoryBar, classes.Close]
  }
  const sty = {
    textDecoration : 'none',
    color : '#0C202D'
  }
  return (
    <nav className = {attachedClasses.join(' ')}>
      <div className = {classes.All}> 
        <NavLink  exact to = '/menu' 
                  style = {sty}
                  onMouseOver = {(e) => {e.stopPropagation(); onPreload('Menu')}}> 모든 음식 </NavLink>
      </div>
      <div className = {classes.Login}> 
        <NavLink  exact to ='/login' 
                  style = {sty} 
                  onMouseOver = {(e) => {e.stopPropagation(); onPreload('Login')}}>로그인 </NavLink>
                  </div>
      <div className = {classes.CheckOrderHistory}> 
        <NavLink  exact to = '/log' 
                  style = {sty} 
                  onMouseOver = {(e) => {e.stopPropagation(); onPreload('Log')}}>주문내역확인 </NavLink></div>
      <div className = {classes.CheckOrderHistory}> 
        <NavLink  exact to = '/review' 
                  style = {sty} 
                  onMouseOver = {(e) => {e.stopPropagation(); onPreload('review')}}>리뷰 </NavLink></div>
    </nav>
  )
}

export default categoryBar;