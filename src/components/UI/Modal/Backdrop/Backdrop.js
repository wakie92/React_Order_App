import React from 'react';
import classes from './Backdrop.module.scss';

const backdraw = (props) => {
  return(
    props.show ? 
    <div className = {classes.Backdraw}></div>
    : null
  )
}

export default backdraw;