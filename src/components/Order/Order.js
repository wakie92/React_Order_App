import React from 'react';
import classes from './Order.module.scss'
import Button from 'components/UI/Button/Button';
import OrderListContainer from 'containers/OrderSection/OrderList/OrderListContainer'
import OrderRequirement from 'components/Order/OrderRequirement';
const order = (props) => {
  let attachedClasses = [classes.Order]
  if(props.orderMobileV) {
    attachedClasses = [classes.Order, classes.Mobile]
  }
  return (
    <>
      <div className = {attachedClasses.join(' ')} onClick = {(e) =>{e.stopPropagation();}}>
        <div className = {classes.Header}> 
          <span>장바구니</span>
        </div>
        <hr/>
        <OrderListContainer/>
        <OrderRequirement totalPrice = {props.totalPrice}/>
        <div className = {classes.Payment} onClick = {(e) =>  e.stopPropagation()}>
          <div className = {classes.TotalPrice}>
            <span>주문금액</span><span>{props.totalPrice}원</span>
          </div>
          <Button btnType = "ConfirmOrder"  clicked = {props.ConfirmOrder}>주문하기</Button>
        </div>
      </div>
    </>
  )
}

export default order;