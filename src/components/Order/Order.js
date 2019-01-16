import React from 'react';
import classes from './Order.module.scss'
import Button from 'components/UI/Button/Button';
const order = (props) => {
  return (
    <div className = {classes.Order}>
      <Button btnType = "ConfirmOrder">결제</Button>
    </div>
  )
}

export default order;