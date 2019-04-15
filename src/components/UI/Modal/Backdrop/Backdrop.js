import React from 'react';
import classes from './Backdrop.module.scss';

const backdrop = ({show}) => {
  return(
    show ? 
    <div className = {classes.Backdrop}>
    </div>
    : null
  )
}

export default backdrop;