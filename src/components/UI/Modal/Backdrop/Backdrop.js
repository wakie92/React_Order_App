import React from 'react';
import classes from './Backdrop.module.scss';

const backdrop = (props) => {
  return(
    props.show ? 
    <div className = {classes.Backdrop}>
    </div>
    : null
  )
}

export default backdrop;