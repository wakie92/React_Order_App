import React from 'react';
import classes from './Modal.module.scss';
import Button from 'components/UI/Button/Button'
const modal = (props) => {
  const os_menu = props.selectedMenu.map(
    (item) => {
      return(
        <>
          <div className = {classes.ArrangedItem}>
            <img className = {classes.ItemImg} alt = {item.name} src = {item.img}/>
            <div className = {classes.Info}>
              <span> {item.name} </span>
              <span> {item.counter} 개</span>
              <span> {item.price*item.counter} 원</span>
            </div>
          </div>
          <hr/>
        </>
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
            <div className = {`${classes.OrderPrice} ${classes.Dist}`}>
              <span className = {classes.ColumnName}>주문금액</span>
              <div className = {classes.Contents}><span>{props.totalPrice}원</span></div>
            </div>
            <hr/>
            <div className = {`${classes.PaymentWay} ${classes.Dist}`} >
              <span className = {classes.ColumnName}>결제방법</span>
              {
                props.checkedTF['card'] 
                ? <div className = {classes.Contents}> <span>카드결제</span> </div> 
                : <div className = {classes.Contents}> <span>현금결제 {props.amountToPay}원</span></div> 
              }
            </div>
            <hr/>
            <div className = {`${classes.MessageSection} ${classes.Dist}`}>
              <span className = {classes.ColumnName}>요청사항</span>
              {
                props.req === ""
                ? <div className = {classes.Message}>(없음)</div>
                : <div className = {classes.Message}>{props.req}</div>
              }
            </div>
            <hr/>
        </div>
        <Button btnType = "Confirm" clicked = {() => {props.finalConfirm()} }>주문확정</Button>
      </div>
    </div>
    </div>
    : null
  )
}
export default modal;