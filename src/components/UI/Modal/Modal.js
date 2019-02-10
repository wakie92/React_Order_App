import React from 'react';
import classes from './Modal.module.scss';
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
      <div className = {classes.ModalWrapper}>
        <div className = {classes.ModalTop}>
          <span>주문확인</span>
        </div>
        <div className = {classes.OrderSummary}>
          <div className = {classes.DetailInfo}>
            {os_menu}
          </div>
        </div>
      </div>
    </div>
    : null
  )
}
export default modal;