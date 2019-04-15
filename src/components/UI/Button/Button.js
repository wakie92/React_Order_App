import React from 'react';

import classes from './Button.module.scss'

const button = ({clicked, btnType, children}) => {
  return(
    <button className = {[classes.Button, classes[btnType]].join(' ')}
      onClick = {clicked}    
    > {children}
    </button>
  )
}

export default button;