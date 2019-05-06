import React from 'react';
import classes from './ReviewLayout.module.scss';
const ReviewLayout = ({children}) => {

  return (
    <div className = {classes.ReviewLayout}>
      {children}
    </div>
  )
}

export default ReviewLayout;