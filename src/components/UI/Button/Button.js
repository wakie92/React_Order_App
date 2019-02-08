import React from 'react';

import classes from './Button.module.scss'

const button = (props) => {
  return(
    <button className = {[classes.Button, classes[props.btnType]].join(' ')}
      onClick = {(e) => {e.stopPropagation(); props.clicked()}}    
    > {props.children}
    </button>
  )
}

export default button;