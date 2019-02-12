import React from 'react';
import classes from './Modal.module.scss';
import Button from 'components/UI/Button/Button'
const modal = (props) => {
  console.log(props.selectedMenu);
  const os_menu = props.selectedMenu.map(
    (item) => {
      return(
        <div className = {classes.ArrangedItem}>
          <img className = {classes.ItemImg} alt = {item.name} src = {item.img}/>
          <div className = {classes.Info}>
            <span> {item.name} </span>
            <span> {item.counter} 개</span>
            <span> {item.price*item.counter} 원</span>
          </div>
        </div>
      )
    }
  )
  return (
    props.show ? 
    <div className = {classes.ModalGround}  onClick = {() => {props.closeModal()}}>
      <div className = {classes.ModalWrapper} onClick = {(e) => {e.stopPropagation();}}>
        <div className = {classes.ModalTop}>
          <span>주문확인</span>
        </div>
        <div className = {classes.OrderSummary}>
          <div className = {classes.DetailInfo}>
            {os_menu}
          </div>
          
          <div className = {classes.ClientReq}>
          <div className = {classes.PaymentWay}>
            {
              props.checkedTF['card'] 
              ? <span> 카드결제 </span> 
              : <span> 현금결제 : {props.amountToPay}</span> 
            }<span></span>
          </div>
            <span>요청사항</span>
            <div className = {classes.Message}>{props.req}</div> 
          </div>
          <Button btnType = "Confirm" clicked = {(e) => {props.finalConfirm()} }>주문확정</Button>
        </div>
      </div>
    </div>
    : null
  )
}
export default modal;