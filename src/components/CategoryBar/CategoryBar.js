import React from 'react';
import classes from './CategoryBar.module.scss'
const categoryBar = (props) => {
  console.log(props.show);
  return (
    <div className = {classes.CategoryBar}>
      <div className = {classes.All} onClick = {props.showAll}> 모든 음식 </div>
    </div>
  )
}

export default categoryBar;