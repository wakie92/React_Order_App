import React from 'react';
import classes from './Order.module.scss'
import Button from 'components/UI/Button/Button';

const order = (props) => {
  return (
    <>
      <div className = {classes.Order}>
        <div className = {classes.OrderList}>
          <div className = {classes.OrderColumn}>
            <span className = {classes.OrderedItemName}>상품명</span>
            <span className = {classes.OrderedItemPrice}>판매금액</span>
            <span className = {classes.OrderedItemCount}>수량</span>
            <span className = {classes.OrderedItemTotalPrice}>최종금액</span>
          </div>
        </div>
        <div className = {classes.PayMethod}>
          <div></div>
        </div>
        <div className = {classes.Payment}>
          <div></div>
          <Button btnType = "ConfirmOrder" clicked = {props.ConfirmOrder}>결제</Button>
        </div>
      </div>
    </>
  )
}

export default order;