import React from 'react';
import classes from './Modal.module.scss';
const modal = (props) => {
  return (
    props.show ? 
    <div className = {classes.ModalGround}  onClick = {() => {props.closeModal()}}>
      <div className = {classes.ModalWrapper}>
        <div className = {classes.ModalTop}>
          <span>주문확인</span>
        </div>
      
      </div>
    </div>
    : null
  )
}
export default modal;