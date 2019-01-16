import React from 'react';
import classes from './Toolbar.module.scss'
const toolbar = (props) => {
  return(
    <header className = {classes.Toolbar}>
      <div className = {classes.Logo}>
        Order machine
      </div>
    </header>
  )
}

export default toolbar;