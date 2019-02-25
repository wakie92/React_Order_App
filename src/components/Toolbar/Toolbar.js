import React from 'react';
import classes from './Toolbar.module.scss'
const toolbar = (props) => {
  return(
    <header className = {classes.Toolbar}>
      <nav className  = {classes.Hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      <div className = {classes.Logo}>
        Order machine
      </div>
      <div>
        
      </div>
    </header>
  )
}

export default toolbar;