import React from 'react';
import classes from './CategoryBar.module.scss'
const categoryBar = (props) => {
  return (
    <div className = {classes.CategoryBar}>
      <div className = {classes.All}> 모든 음식 </div>
    </div>
  )
}

export default categoryBar;