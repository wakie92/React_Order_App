import React from 'react';
import classes from './Order.module.scss'
import Button from 'components/UI/Button/Button';
import Plus from 'react-icons/lib/ti/plus';
import Minus from 'react-icons/lib/ti/minus';
import OrderListContainer from 'containers/OrderSection/OrderList/OrderListContainer'
import OrderRequirement from 'components/Order/OrderRequirement';
import Footer from 'components/UI/Footer/Footer'
const order = (props) => {
  let attachedClasses = [classes.Order]
  if(props.orderMobileV) {
    attachedClasses = [classes.Order, classes.Mobile]
  }
  return (
    <>
      <div className = {attachedClasses.join(' ')} onClick = {() =>props.closeOrderMobile()}>
        <div className = {classes.Header}> <span>장바구니</span></div>
        <hr/>
        {/* <div className = {classes.OrderList} onClick = {(e) =>  e.stopPropagation()}> */}
          <OrderListContainer/>
        {/* </div> */}
        <div className = {classes.Payment} onClick = {(e) =>  e.stopPropagation()}>
          <div className = {classes.TotalPrice}><span>주문금액</span><span>{props.totalPrice}원</span></div>
          <hr/>
          <Button btnType = "ConfirmOrder" clicked = {props.ConfirmOrder}>주문하기</Button>
        </div>
      </div>
    </>
  )
}

export default order;