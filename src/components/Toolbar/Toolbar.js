import React from 'react';
import classes from './Toolbar.module.scss'
import Payment from 'react-icons/lib/md/payment'
const toolbar = (props) => {
  return(
    <header className = {classes.Toolbar}>
      <nav className  = {classes.Hamburger} onClick = {props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      <div className = {classes.Logo}>
        Order machine
      </div>
      <Payment className = {classes.Payment}/>
    </header>
  )
}

export default toolbar;