import React from 'react';
import classes from './CategoryBar.module.scss'
const categoryBar = (props) => {
  let attachedClasses = [classes.CategoryBar]
  if(props.toolbar === true) {
    attachedClasses = [classes.CategoryBar, classes.Open]
  } else if (props.toolbar === false) {
    attachedClasses = [classes.CategoryBar, classes.Close]
  }
  return (
    <div className = {attachedClasses.join(' ')}>
      <div className = {classes.All}> 모든 음식 </div>
    </div>
  )
}

export default categoryBar;